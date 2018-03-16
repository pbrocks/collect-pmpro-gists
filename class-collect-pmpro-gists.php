<?php
/**
 * text-domain: collect-snippets
 */

new Collect_PMPro_Gists();
class Collect_PMPro_Gists {

	/**
	 * Add the minimum capabilities used for the plugin
	 */
	const min_caps = 'manage_options';

	protected $add_on_name;
	protected $database_names;

	public function __construct() {
		add_action( 'admin_menu', array( $this, 'create_admin_menus' ) );
		add_shortcode( 'collect-gists-form', array( $this, 'collect_gists_shortcode' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'collect_gists_scripts' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'collect_gists_scripts' ) );
		add_action( 'wp_ajax_connect_to_php', array( $this, 'collect_gists_function1' ) );
		add_action( 'wp_ajax_nopriv_connect_to_php', array( $this, 'collect_gists_function1' ) );
		// add_shortcode( 'ajax-submitting-form', array( $this, 'ajax_submitting_shortcode' ) );
		// add_action( 'wp_enqueue_scripts', array( $this, 'ajax_submitting_scripts' ) );
		// add_action( 'wp_ajax_tie_into_php213', array( $this, 'ajax_returning_function' ) );
		// add_action( 'wp_ajax_nopriv_tie_into_php213', array( $this, 'ajax_returning_function' ) );
		add_action( 'wp_footer', array( $this, 'add_sidebar_reference_menus' ) );
		// add_action( 'wp_head', array( $this, 'add_sidebar_reference_menus2' ) );
		// add_shortcode( 'hook-autocomplete-form', array( $this, 'hook_autocomplete_shortcode' ) );
		// add_action( 'wp_enqueue_scripts', array( $this, 'hook_autocomplete_scripts' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'add_sidebar_reference_scripts' ) );
	}

	/**
	 * [parse_gist_url_parts description]
	 *
	 * https://bitbucket.org/snippets/pbrocks/qegXkx
	 *
	 * @param  [type] $url Various expressions of gist URLs
	 * @return array      Returns array of parsed URL constiutents
	 */
	public function parse_gist_url_parts( $url ) {
		$parse = parse_url( $url );
		$explode = explode( '/', $parse['path'] );
		if ( empty( $explode[2] ) ) {
			$parse['id'] = $explode[1];
		} elseif ( 'api.github.com' === $parse['host'] ) {
			$parse['subdir'] = $explode[1];
			$parse['id'] = $explode[2];
		} else {
			$parse['user'] = $explode[1];
			$parse['id'] = $explode[2];
		}
		return $parse;
	}
	/**
	 * Parse a gist URL and return its ID
	 *
	 * @param  [type] $url [description]
	 * @return [type]      [description]
	 */
	public function retrieve_gist_url_parts( $url ) {
		$url_array = $this->parse_gist_url_parts( $url );
		return $url_array['id'];
	}
	public function api_retrieve_gist_body( $url ) {
		$url_array = $this->parse_gist_url_parts( $url );
		$gist_id = $url_array['id'];

		$request = wp_remote_get( 'https://api.github.com/gists/' . $gist_id );

		$body = wp_remote_retrieve_body( $request );

		$data = json_decode( $body, true );

		echo $data['id'] . '<br>';
		echo $data['html_url'] . '<br>';
		$filename = array_keys( $data['files'] )[0];
		echo $filename . '<br>';
		echo $data['files'][ $filename ]['raw_url'] . '<br>';
		$content = $data['files'][ $filename ]['content'] . '<br>';
		echo wpautop( $content );

		echo '<pre>';
		// print_r( $data );
		echo '</pre>';

	}

	/**
	 * Inspiration for this method came from
	 * https://pippinsplugins.com/using-wp_remote_get-to-parse-json-from-remote-apis/
	 *
	 * @param  [type] $url [description]
	 * @return [type]      [description]
	 */
	public function gist_url_in_page_info_out( $url ) {
		$url_array = $this->parse_gist_url_parts( $url );
		$gist_id = $url_array['id'];
		$user_id = $url_array['user'];
		// if ( )
		$check_transient = $this->check_if_in_transient( $gist_id );
		if ( 'not-found' !== $check_transient ) {
			return 'It is already present';
		}
		$data = wp_remote_get( 'https://api.github.com/gists/' . $gist_id );

		$body = wp_remote_retrieve_body( $data );

		if ( is_wp_error( $body ) ) {
			return false; // Bail early
		} else {
			$output = json_decode( $body, true );
			$return['filename'] = array_keys( $output['files'] )[0];
			$return['description'] = $output['description'];
			$return['user'] = $user_id;
			$return['id'] = $output['id'];
			$return['html_url'] = $output['html_url'];
			$return['updated_at'] = $output['updated_at'];
		}
		$post_content = "\n" . $return['html_url'] . "\n\n" . sprintf( __( 'Originally posted at %s.', 'link2post' ), '<a href="' . esc_url_raw( $return['html_url'] ) . '">' . $url_array['host'] . '</a> by ' . $url_array['user'] );
		// Create post object
		$new_gist = array(
			'post_title'    => $return['description'],
			'post_content'  => ' <br> ' . esc_url_raw( $url ) . ' <br> ' . $post_content,
			// 'post_author' => $current_user->ID,
			'post_status'   => 'publish',
			'post_date'     => $return['updated_at'],
			'meta_input'    => array(
				'l2p_url'   => esc_url_raw( $url ),
				'gist_id'   => $gist_id,
			),
			'post_type'     => 'gist',
		);

		// Insert the post into the database
		$return['post_id'] = wp_insert_post( $new_gist );
		$return['post_url'] = get_permalink( $return['post_id'] );
		return $return;
	}


	/**
	 * [build_gist_transient description]
	 *
	 * @return [type] [description]
	 */
	public function build_gist_transient() {
		$all_gists = $this->check_posts_for_gist_ids( 'gist' );

		// echo '<pre>';
		$transient[] = count( $all_gists );
		// echo '</pre>';
		foreach ( $all_gists as $key => $gist ) {
			$meta = get_post_meta( $gist->ID );
			if ( $meta['gist_id'][0] ) {
				$transient[] = array(
					'key' => $key,
					'post_id' => $gist->ID,
					'gist_id' => $meta['gist_id'][0],
				);
			} else {
				// echo "<li>$key " . $gist->ID . ' = no => ' . $gist->post_title . '</li>';
				$gist_url_parsed = $this->parse_gist_url_parts( $meta['l2p_url'][0] );
				update_post_meta( $gist->ID, 'gist_id', $gist_url_parsed['id'] );
				$transient[] = array(
					'key' => $key,
					'post_id' => $gist->ID,
					'gist_id' => $meta['gist_id'][0],
				);
			}
		}
		set_transient( 'existing_gists', $transient );
		return $transient;
	}

	/**
	 * [build_gist_transient description]
	 *
	 * @return [type] [description]
	 */
	public function ajax_build_gist_transient() {
		$all_gists = $this->check_posts_for_gist_ids( 'gist' );

		// echo '<pre>';
		$transient[] = count( $all_gists );
		// echo '</pre>';
		foreach ( $all_gists as $key => $gist ) {
			$meta = get_post_meta( $gist->ID );
			if ( $meta['gist_id'][0] ) {
				$transient[] = array(
					'key' => $key,
					'post_id' => $gist->ID,
					'gist_id' => $meta['gist_id'][0],
				);
			} else {
				// echo "<li>$key " . $gist->ID . ' = no => ' . $gist->post_title . '</li>';
				$gist_url_parsed = $this->parse_gist_url_parts( $meta['l2p_url'][0] );
				update_post_meta( $gist->ID, 'gist_id', $gist_url_parsed['id'] );
				$transient[] = array(
					'key' => $key,
					'post_id' => $gist->ID,
					'gist_id' => $meta['gist_id'][0],
				);
			}
		}
		set_transient( 'existing_gists', $transient );
		echo '<pre>';
		print_r( $transient );
		echo '<pre>';
		exit;
	}

	/**
	 * [check_for_transient description]
	 *
	 * @return [type] [description]
	 */
	public function check_for_transient() {
		$transient = get_transient( 'existing_gists' );
		if ( ! empty( $transient ) ) {
			return $transient;
		} else {
			$transient = $this->build_gist_transient();
			return $transient;
		}
	}

	/**
	 * [check_if_in_transient description]
	 *
	 * @return [type] [description]
	 */
	public function check_if_in_transient( $gist_id ) {
		$gist_check = $this->check_for_transient();
		$search = $gist_id;
		$array = wp_list_pluck( $gist_check, 'gist_id' );
		if ( in_array( $search, $array ) ) {
			return $search . ' match found';
		} else {
			return 'not-found';
		}
	}

	/**
	 * [check_for_id_meta description]
	 *
	 * @return [type] [description]
	 */
	public function insert_gist_info_to_posttype( $url ) {
		$gist_array = $this->parse_gist_url_parts( $url );
		$title = $gist_array['description'];
		$post_content = "\n\n" . sprintf( __( 'Originally posted at %s.', 'link2post' ), '<a href="' . esc_url_raw( $gist_array['html_url'] ) . '">' . $url_array['host'] . '</a> by ' . $url_array['user'] );

		// Create post object
		$new_gist = array(
			'post_title'    => $gist_array['description'],
			'post_content'  => $gist_array['html_url'] . '<br>' . $post_content,
			// 'post_author' => $current_user->ID,
			'post_status'   => 'publish',
			'post_date'     => $gist_array['updated_at'],
			'meta_input'    => array(
				'l2p_url'   => esc_url_raw( $url ),
			),
			'post_type'     => 'gist',
		);

		// Insert the post into the database
		$post['id'] = wp_insert_post( $new_gist );
		$post['url'] = get_permalink( $post['id'] );

		// if ( true === $post_url ) {
		return $post;
		// }
	}

	/**
	 *
	 */
	public function url_in_remote_retrieve_body( $url ) {
		$response = wp_remote_retrieve_body( $url );
		return $response;
	}

	/**
	 *
	 */
	public function admin_head() {
		// Add custom styling to your page
	}

	public function check_posts_for_gist_ids( $post_type ) {
		$args = array(
			'post_type'   => $post_type,
			'posts_per_page'   => -1,
		);

		$all_posts = get_posts( $args );

		return $all_posts;

	}

	public function ajax_submitting_shortcode() {
		wp_enqueue_script( 'submitting-ajax' );
		?>
		<style type="text/css">
		#ajax-submitting {
			padding: 2rem;
		}
		input#gisturl {
			width: 85%;
		}
		</style>
		<div id="ajax-submitting">
		<form name="ajaxform" id="ajaxform">
			Gist URL: <input type="text" name="gisturl" id="gisturl" placeholder="Paste the Gist URL here" /> <br/><br/>
		<input type="button"  id="simple-click" value="Get Gist" /><br/>
		</form>
		<div id="simple-msg"></div>
		</div>
		<?php

	}

	public function ajax_submitting_scripts() {
		wp_register_script( 'submitting-ajax', plugins_url( '/js/ajax-submitting.js', __FILE__ ), array( 'jquery' ), time() );
		wp_localize_script(
			'submitting-ajax', 'submitting_ajax_object', array(
				'submitting_ajax_ajaxurl'   => admin_url( 'admin-ajax.php' ),
				'submitting_ajax_nonce' => wp_create_nonce( 'submitting-ajax-nonce' ),
			)
		);
	}

	public function ajax_returning_function() {
		$return = $_POST;
		$url = $_POST['gisturl'];

		$gist_id = $this->retrieve_gist_url_parts( $url );
		$check_gist = $this->check_if_in_transient( $gist_id );
		$return['id_chk'] = $check_gist;

		$create_gist = $this->gist_url_in_page_info_out( $url );
		if ( ! empty( $create_gist ) ) {
			$return['gist_created'] = $create_gist['post_id'];
		}
		echo '<pre>';
		print_r( $return );
		echo '</pre>';

		exit;
	}

	public function submit_ajax_scripts() {
		wp_enqueue_style( 'submit-ajax', plugins_url( '/css/submit-ajax.css', __FILE__ ) );
		wp_register_script( 'submit-ajax', plugins_url( '/js/submit-ajax.js', __FILE__ ), array( 'jquery' ) );
		wp_localize_script(
			'submit-ajax', 'submit_ajax_object', array(
				'submit_ajax_ajaxurl'   => admin_url( 'admin-ajax.php' ),
				'submit_ajax_nonce' => wp_create_nonce( 'submit-ajax-nonce' ),
				'other_url' => home_url( 'submit-ajax-nonce' ),
			)
		);
	}

	public function delete_gists_on_website_planning() {

		return 'DONE';
	}

	public function collect_gists_shortcode() {
		wp_enqueue_script( 'collect-gists' );
		?>
		<style type="text/css">
		input#collect-gists {
			padding: 1rem 2rem;
			background: #24f;
			float: right;
		}
		input#gisturl {
			width: 85%;
		}
		</style>
		<div id="collecting-gists">
		<form name="collect-gists" id="collect-gists">
			Gist URL: <input type="text" name="gisturl" id="gist-url" placeholder="Paste the Gist URL here" style="width:100%;" /> <br/><br/>
		<input type="button" id="collect-gist" value="Get Gist" /><br/>
		<!-- <input type="button" id="reset-gist-button" onclick="clearForm($('#collecting-gists'))" value="Reset form"> -->
		<br/>
		</form>
		<div id="simple-msg"></div>
		</div>
<!-- 		<script type="text/javascript">
		function clearForm($form){
		$form.find(':input').not(':button, :submit, :reset, :hidden, :checkbox, :radio').val('');
		$form.find(':checkbox, :radio').prop('checked', false);
	}
		</script> -->
		<?php
	}

	public function collect_gists_scripts() {
		wp_register_script( 'collect-gists', plugins_url( '/js/collect-gists.js', __FILE__ ), array( 'jquery' ), time() );
		wp_localize_script(
			'collect-gists', 'collect_gists_object', array(
				'collect_gists_ajaxurl'   => admin_url( 'admin-ajax.php' ),
				'collect_gists_nonce' => wp_create_nonce( 'submitting-ajax-nonce' ),
			)
		);
	}

	public function collect_gists_function1() {
		$gist_ajax = $_POST;
		$gist_ajax['function'] = __FUNCTION__;
		$return['gisturl'] = $_POST['gisturl'];

		$gist_ajax['gist_id'] = $this->retrieve_gist_url_parts( $url );
		$gist_ajax['check_gist'] = $this->check_if_in_transient( $gist_id );
		// $gist_ajax['transient'] = $this->check_for_transient();
		echo '<pre>';
		print_r( $gist_ajax );
		echo '</pre>';
		exit;
	}

	public function collect_gists_function() {
		global $current_user, $wpdb;
		$return = $_POST;
		$return['function'] = __FUNCTION__;
		$return['gisturl'] = 'blank-for-now';
		$return['gisturl'] = $_POST['gisturl'];

		// $gist_id = $this->retrieve_gist_url_parts( $url );
		// $check_gist = $this->check_if_in_transient( $gist_id );
		// $return['id_chk'] = $check_gist;
		// $create_gist = $this->gist_url_in_page_info_out( $url );
		// if ( ! empty( $create_gist ) ) {
		// $return['gist_created'] = $create_gist['post_id'];
		// }
		$return['called'] = 'l2p_submit';

		// if ( ! current_user_can( 'edit_posts' ) ) {
		// return;
		// }
		// grab the URL
		// $url = $_POST['gisturl'];           // we escape this later when used in queries and inserts
		$url = $_POST['l2p_url'];
		// no URL, bail
		if ( empty( $url ) ) {
			// exit;
			return 'Sorry, No URL';

		}
		$objToReturn = new stdClass();
		// $objToReturn->on_tools_page = l2p_on_tools_page();
		// check if we've already processed this URL
		$sqlQuery = "SELECT post_id FROM $wpdb->postmeta WHERE meta_key = 'l2p_url' AND meta_value = '" . esc_url_raw( $url ) . "' LIMIT 1";
		$old_post_id = $wpdb->get_var( $sqlQuery );
		if ( empty( (int) $old_post_id ) || get_post_status( (int) $old_post_id ) != 'publish' ) {
			$objToReturn->new_post_created = true;
			$objToReturn->new_post_url = l2p_update( $url, null, true );
			$JSONtoReturn = json_encode( $objToReturn );
			echo $JSONtoReturn;
			exit;
		}
		$objToReturn->new_post_created = false;
		$objToReturn->old_post_id = $old_post_id;
		$objToReturn->old_post_url = get_permalink( $old_post_id );

		$modules = l2p_get_modules();

		// check the domain of the URL to see if it matches a module
		$host = parse_url( $url, PHP_URL_HOST );
		$found_match = false;
		foreach ( $modules as $key => $value ) {
			if ( $host == $value['host'] && get_option( 'l2p_' . $value['quick_name'] . '_content_enabled' ) == 'enabled' ) {
				$found_match = true;
				// we found one, use the module's parse function now
				if ( empty( $value['callback'] ) || empty( $value['can_update'] ) || $value['can_update'] == false ) {
					$objToReturn->can_update = false;
				} else {
					$objToReturn->can_update = true;
				}
			}
		}
		if ( $found_match == false ) {
			$objToReturn->can_update = true;
		}
		$JSONtoReturn = json_encode( $objToReturn );

		// $return['l2p_submit'] = l2p_submit();
		if ( $JSONtoReturn ) {
			echo $JSONtoReturn;
			echo '<pre>';
			print_r( $return );
			echo '</pre>';
		}
		exit;
	}

	public function create_gists_admin_page() {
		// require_once( PMPRO_DIR . '/adminpages/admin_header.php' );
		echo '<h2>' . __FUNCTION__ . '</h2>';
		// $transient = get_transient( 'values' );
		// $transient = $this->build_gist_transient();
		// $transient = $this->check_for_transient();
		// $transient = get_transient( 'existing_gists' );
		// $transient = get_transient( 'values' );
		$gist_id = 'd473abb787ada311bd777e6ae0f587e6';
		// $array = wp_list_pluck( $transient, 'gist_id' );
		// if ( in_array( $search, $array ) ) {
		// echo $search . ' match found';
		// } else {
		// echo $search . ' match not found';
		// }
		echo do_shortcode( '[collect-gists-form]' );

		$check_transient = $this->check_if_in_transient( $gist_id );
		if ( 'not-found' !== $check_transient ) {
			echo '<h3 style="color:green;">It is in the check_if_in_transient ARRAY</h3>';
			echo '<pre>';
			print_r( $check_transient );
			echo '</pre>';
		} else {
			echo '<h3 style="color:tomato;">It is NOT in the ARRAY</h3>';
		}
		$got_transient = $this->check_for_transient();
		echo '<h3 style="color:tomato;">' . gettype( $got_transient ) . '</h3>';

		if ( 'array' === gettype( $got_transient ) ) {
			echo '<h3 style="color:tomato;">I said ARRAY</h3>';
			echo '<pre>';
			// print_r( $got_transient );
			echo '</pre>';
		} else {
			echo $got_transient;
		}
		$meta = get_post_meta( 79 );
		// $gist_url_parsed = $this->parse_gist_url_parts( $meta['l2p_url'][0] );
		// echo '<h4 style="color:salmon">' . $meta['l2p_url'][0] . '</h4>';
		echo '<pre>';
		// print_r( $got_transient );
		echo '</pre>';
		?>
		<h3>morning</h3>
		<li>Check why creating dups</li>
		<h3>Plan</h3>
		<li>Take ID and get info from Github</li>
		<li>Take user and create, if doesn't exist</li>
		<li>Create post</li>
		<li>Assign user to post</li>
		<h3>Bonus</h3>
		<li>add to json file</li>
		<li>copy permalink</li>
		<?php
		$class_methods = get_class_methods( __CLASS__ );
		foreach ( $class_methods as $method_name ) {
			echo '<h4>' . $method_name . '</h4>';
		}
		require_once( PMPRO_DIR . '/adminpages/admin_footer.php' );
	}

	/**
	 * Add the page to the admin area
	 */
	public function create_admin_menus() {
		add_dashboard_page(
			__( __CLASS__, 'collect-snippets' ),
			__( __CLASS__, 'collect-snippets' ),
			self::min_caps,
			'dev-page.php',
			array( $this, 'create_gists_admin_page' )
		);

	}

	/**
	 * Add the page to the admin area
	 */
	public function add_sidebar_reference_menus2() {
	?>
	<style type="text/css">
		/** { margin: 0; }*/

		#panel {
			position: fixed;
			background: rgba(41, 151, 200, .9);
			color: #fff;
			height: 100%;
			width: 400px;
			right: -400px;
			padding: 1rem 2rem;
			z-index: 222;
			transition: right 0.5s ease-in-out;
			-webkit-transition: right 0.5s ease-in-out;
		}
		#panel:hover {
			right: 0px;
		}

		#panelCaller {
			position: absolute;
			top: 1.5rem;
			padding: 1rem;
			right: 400px;        /* same as #panel width */
			background: rgba(41, 151, 200, .9);
			border: 1px solid;
		}
	</style>
		<div id="panel">
			<div id="panelCaller"><span class="dashicons dashicons-search"></span></div>
				<h2>Panel</h2>
				<p>Content...</p>
						<nav class="sidebar-reference">
			<div class="bar-tabs w3-pmpro">
				<button class="bar-tab bar-button" onclick="openReference('Gists')">Gists</button>
				<button class="bar-tab bar-button" onclick="openReference('Hooks')">Hooks</button>
				<button class="bar-tab bar-button" onclick="openReference('Documentation')">Documentation</button>
			</div>

			<div id="Gists" class="tab-container refSource">
				<h2>Gists</h2>
				<p>Add a gist here. Maybe search below?</p>
					<?php echo do_shortcode( '[collect-gists-form]' ); ?>
				<p>Search Here?</p>
				<p class="search-box" style="padding:1rem;border: 2px solid salmon;">
					<input placeholder="Search Box not connected" style="width:97%;"/>
				</p>
			</div>

			<div id="Hooks" class="tab-container refSource" style="display:none">
				<h2>Hooks</h2>
				<p>Look up a hook here</p>
				<?php echo do_shortcode( '[hook-autocomplete-form]' ); ?>
			</div>

			<div id="Documentation" class="tab-container refSource" style="display:none">
				<h2>Documentation</h2>
				<p>Brisket meatball turkey short loin boudin leberkas meatloaf chuck andouille pork loin pastrami spare ribs pancetta rump. Frankfurter corned beef beef tenderloin short loin meatloaf swine ground round venison.</p>
			</div>
			<script>
				function openReference(refSourceName) {
					var i;
					var x = document.getElementsByClassName("refSource");
					for (i = 0; i < x.length; i++) {
						x[i].style.display = "none";  
					}
					document.getElementById(refSourceName).style.display = "block";  
				}
			</script>
		</nav>
	</div>
	<?php
	}
	public function hook_autocomplete_scripts() {
		wp_register_script( 'jqry-autocomplete', plugins_url( '/js/jquery.autocomplete.min.js', __FILE__ ), array( 'jquery' ), time() );
		wp_enqueue_script( 'jqry-autocomplete' );
		wp_register_script( 'pmpro-autocomplete', plugins_url( '/js/pmpro-autocomplete.js', __FILE__ ), array( 'jquery', 'jquery-ui-autocomplete', 'jqry-autocomplete' ), time() );
		wp_enqueue_script( 'pmpro-autocomplete' );
	}

	public function hook_autocomplete_shortcode() {
		?>
		<div id="searchfield">
			<form><input type="text" name="wpfunction" class="biginput" id="autocomplete"></form><br>
			<form id="right-search"><input type="button" onClick="history.go(0)" value="Start Over"></form>
		</div><!-- @end #searchfield -->

		<div id="outputbox">
			<p id="instructions">Choose a function from the items that drop down and the results will display here.</p>
			<p id="outputcontent"></p>
		</div>
		<?php
	}

	public function add_sidebar_reference_scripts() {
		// wp_register_script( 'show-stuff', plugins_url( '/js/show-stuff.js', __FILE__ ), array( 'jquery' ), time() );
		// wp_enqueue_script( 'show-stuff' );
		wp_register_script( 'sidebar-reference', plugins_url( '/js/sidebar-reference.js', __FILE__ ), array( 'jquery' ), time() );
		wp_enqueue_script( 'sidebar-reference' );
		wp_register_style( 'sidebar-reference', plugins_url( '/css/sidebar-reference.css', __FILE__ ), time() );
		wp_enqueue_style( 'sidebar-reference' );
	}
		/**
		 * Add the page to the admin area
		 */
	public function add_sidebar_reference_menus1() {
	?>
	<style type="text/css">
		button#sidebar-trigger {
			position: absolute;
			top: 9rem;
			left: 3rem;
		}
		section.sidebar-reference {
			width: 34%;
			position: absolute;
			top: 1rem;
			right: -40%;
			background: rgba(40,170,210,.7);
			height: 100%;
			padding: 2rem;
		}
		section.sidebar-reference.open-sideref {
			right: 1rem;
		}
		/*bar-tab w3-button*/
	</style>
	<button id="sidebar-trigger">Open</button>
	<section class="sidebar-reference">
		<div class="referent">
			<h2>Big Story here</h2>
		</div>
	</section>
	<?php
	}

	/**
	 * Add the page to the admin area
	 */
	public function add_sidebar_reference_menus() {
	?>
	<!-- <button id="sidebar-trigger">Open</button> -->
	<section id="sidebar-reference">
		<input class="sidebar-reference" type="checkbox" id="menu" />
		<nav class="sidebar-reference">
			<div class="bar-tabs w3-pmpro">
				<button class="bar-tab bar-button" onclick="openReference('gists-lookup')">Gists</button>
				<button class="bar-tab bar-button" onclick="openReference('hooks-lookup')">Hooks</button>
				<button class="bar-tab bar-button" onclick="openReference('documentation-lookup')">Documentation</button>
			</div>

			<div id="gists-lookup" class="tab-container refSource">
				<h2>Gists</h2>
				<p>Add a gist here.</p>
					<?php echo do_shortcode( '[collect-gists-form]' ); ?>
			</div>

			<div id="hooks-lookup" class="tab-container refSource" style="display:none">
				<h2>Hooks</h2>
				<p>Look up a hook here</p>
				<?php echo do_shortcode( '[hook-autocomplete-form]' ); ?>
			</div>

			<div id="documentation-lookup" class="tab-container refSource" style="display:none">
				<h2>Documentation</h2>
								<p>Search Here?</p>
				<p class="search-box" style="padding:1rem;border: 2px solid salmon;">
					<input placeholder="Search Box not connected" style="width:97%;"/>
				</p>
			</div>


			<label class="sidebar-reference" for="menu">
				<!--burger menu without cheese-->
				<span></span>
				<span></span>
			</label>
		</nav>
	</section>
	<?php
	}
}

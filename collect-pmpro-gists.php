<?php
/**
 * Plugin Name: Collect PMPro Gists
 * Description: Collect PMPro Gists.
 */

defined( 'ABSPATH' ) || die( 'File cannot be accessed directly' );


// add_action( 'plugins_loaded', 'testing_print_declared_classes' );
function testing_print_declared_classes() {
	add_action( 'admin_footer', 'print_declared_classes' );
}

function print_declared_classes() {
	echo '<pre style="text-align:center;">';
	print_r( get_declared_classes() );
	echo '</pre>';

}
require_once( 'class-collect-pmpro-gists.php' );

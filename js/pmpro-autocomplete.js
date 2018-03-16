jQuery(function($){
  var wpfunctions = [
  { "value": "add list items Profile section pmpro_account_bullets_bottom", "data": [
      { 
        "title": "Add List Items to Profile section",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_account_bullets_bottom/",
        "form": "do_action(\"pmpro_account_bullets_bottom\");",
        "type": "Hook",
        "info": "Use this hook to add extra list items to the Profile section on the Membership Account page, below Email Address.",
        "version": "",
        "source": "PMPro"
      }
  ] },
  { "value": "account bullets bottom", "data": [
    {
      "title": "pmpro_account_bullets_bottom",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_account_bullets_bottom/",
      "form": "pmpro_account_bullets_bottom",
      "type": "Action", 
      "info": "Use this hook to add extra list items to the Profile section on the Membership Account page, below Email Address.",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "check path absolute", "data": [
      { 
        "title": "Check If Path is Absolute",
        "link": "https://developer.wordpress.org/reference/functions/path_is_absolute/",
        "form": "$absolute_path = path_is_absolute( $path );",
        "type": "Action",
        "info": "If you need to find out if a path is absolute then WordPress has a function path_is_absolute() which will return a boolean value on if this is an absolute path.",
        "version": "",
        "source": "WordPress"
      }
  ] },
  { "value": "create recursive directories", "data": [
       { 
        "title": "Create Recursive Directories",
        "link": "https://developer.wordpress.org/reference/functions/wp_mkdir_p/",
        "form": "wp_mkdir_p( $path );",
        "type": "Action",
        "info": "If you need to create a recursive folder directory from a file path, you can use the WordPress function wp_mkdir_p(). This means that if you have a file path of /here/are/some/new/folders and pass this into the wp_mkdir_p( $path ) function you will get a new folder directories created for each one of these folders.",
        "version": "",
        "source": "WordPress"
      }
  ] },
  { "value": "get unique filename", "data": [
      { 
        "title": "Get A Unique Filename",
        "link": "https://developer.wordpress.org/reference/functions/wp_unique_filename/",
        "form": "$unique_filename = wp_unique_filename( $directory, $filename );",
        "type": "action",
        "info": "When you are adding a file to a directory, you would normally check to see if this filename is unique so you won\"t have to overwrite the existing file. There is a WordPress function wp_unique_filename() which you will give a directory and a filename, the code will check to see if this filename exists inside the directory, if a file already exists then it will return the filename with a number appended to the end.",
        "version": "",
        "source": "WordPress"
      }
  ] },
  { "value": "replace spaces with dashes hyphens sanitize title", "data": [
      { 
        "title": "Sanitize Title",
        "link": "https://developer.wordpress.org/reference/functions/sanitize_title_with_dashes/",
        "form": "sanitize_title_with_dashes( string $title, string $raw_title = \"\", string $context = \"display\");",
        "type": "action",
        "info": "This is what WordPress uses to generate URL slugs from your post title\"s. <blockquote>echo sanitize_title_with_dashes(\"I'm in LOVE with WordPress!?! 1\");<br>// this will print: im-in-love-with-wordpress-1</blockquote> This function takes your title and sanitizes it by removing all whitespace and replacing them with dashes.",
        "version": "",
        "source": "WordPress"
      }
  ] },
  { "value": "pmpro_after change membership level", "data": [
    {
      "title": "pmpro_after_change_membership_level",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_after_change_membership_level/",
      "form": "pmpro_after_change_membership_level",
      "type": "Action", 
      "info": "Use this hook to execute custom code after a user’s membership level is changed or cancelled. This hook passes the new level ID, the user ID of the WordPress user, and the level ID being cancelled (if specified).",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_after checkout", "data": [
    {
      "title": "pmpro_after_checkout",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_after_checkout/",
      "form": "pmpro_after_checkout",
      "type": "Action", 
      "info": "Use this hook to execute custom code after a user checks out, before any emails are sent. This hook passes user ID of the WordPress user",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_after membership level profile fields", "data": [
    {
      "title": "pmpro_after_membership_level_profile_fields",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_after_membership_level_profile_fields/",
      "form": "pmpro_after_membership_level_profile_fields",
      "type": "Action", 
      "info": "Execute custom code or display extra fields on a user’s profile page",
      "version": "",
      "source": "PMPro"
    }
  ] },

  { "value": "pmpro_after_members_list_csv_export", "data": [
    {
      "title": "pmpro_after_members_list_csv_export",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_after_members_list_csv_export/",
      "form": "pmpro_after_members_list_csv_export",
      "type": "Action",
      "info":"pmpro_after_members_list_csv_export",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_after_order_csv_export", "data": [
    {
      "title": "pmpro_after_order_csv_export",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_after_order_csv_export/",
      "form": "pmpro_after_order_csv_export",
      "type": "Action",
      "info":"pmpro_after_order_csv_export",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_after_order_settings", "data": [
    {
      "title": "pmpro_after_order_settings",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_after_order_settings/",
      "form": "pmpro_after_order_settings",
      "type": "Action", 
      "info": "This hook executes custom code at the end of an Order page in the WordPress dashboard. The MemberOrder object is passed",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_after_pmpmailer_init", "data": [
    {
      "title": "pmpro_after_pmpmailer_init",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_after_pmpmailer_init/",
      "form": "pmpro_after_pmpmailer_init",
      "type": "Action",
      "info":"pmpro_after_pmpmailer_init",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_after_require_membership_metabox", "data": [
    {
      "title": "pmpro_after_require_membership_metabox",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_after_require_membership_metabox/",
      "form": "pmpro_after_require_membership_metabox",
      "type": "Action",
      "info":"pmpro_after_require_membership_metabox",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_after_set_current_user", "data": [
    {
      "title": "pmpro_after_set_current_user",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_after_set_current_user/",
      "form": "pmpro_after_set_current_user",
      "type": "Action", 
      "info": "This hook executes custom code when setting the current user with the WordPress core function. For more information on this view the wp_set_current_user() function in the WordPress Codex",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_applydiscountcode_return_js", "data": [
    {
      "title": "pmpro_applydiscountcode_return_js",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_applydiscountcode_return_js/",
      "form": "pmpro_applydiscountcode_return_js",
      "type": "Action", 
      "info": "Since 1.7.10 This hook fires inside of the JS script tag returned by the applydiscountcode.php service. The hook can be used to do other PHP or JavaScript actions before sending the results of the discount code AJAX call to the client browser",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_before_authnet_silent_post", "data": [
    {
      "title": "pmpro_before_authnet_silent_post",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_before_authnet_silent_post/",
      "form": "pmpro_before_authnet_silent_post",
      "type": "Action", 
      "info": "The pmpro_authnet_silent_post_fields filter and pmpro_before_authnet_silent_post and pmpro_after_authnet_silent_post hooks are passed the $fields variable built at the top of the Authorize.net Silent Post script that mirrors the $_REQUEST array",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_before_change_membership_level", "data": [
    {
      "title": "pmpro_before_change_membership_level",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_before_change_membership_level/",
      "form": "pmpro_before_change_membership_level",
      "type": "Action",
      "info":"pmpro_before_change_membership_level",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_before_members_list_csv_export", "data": [
    {
      "title": "pmpro_before_members_list_csv_export",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_before_members_list_csv_export/",
      "form": "pmpro_before_members_list_csv_export",
      "type": "Action",
      "info":"pmpro_before_members_list_csv_export",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_before_order_list_csv_export", "data": [
    {
      "title": "pmpro_before_order_list_csv_export",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_before_order_list_csv_export/",
      "form": "pmpro_before_order_list_csv_export",
      "type": "Action",
      "info":"pmpro_before_order_list_csv_export",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_before_send_to_paypal_standard", "data": [
    {
      "title": "pmpro_before_send_to_paypal_standard",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_before_send_to_paypal_standard/",
      "form": "pmpro_before_send_to_paypal_standard",
      "type": "Action", 
      "info": "This is executed at checkout before calling the sendToPayPal method on the order. The register helper plugin has been updated to update user meta fields during this hook in addition to the pmpro_after_checkout hook. (Because for PayPal Standard, when pmpro_after_checkout is called, the $_SESSION vars are unavailable to it. So other plugins relying on the pmpro_after_checkout hook may have issues with PayPal Standard.)",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_before_send_to_twocheckout", "data": [
    {
      "title": "pmpro_before_send_to_twocheckout",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_before_send_to_twocheckout/",
      "form": "pmpro_before_send_to_twocheckout",
      "type": "Action", 
      "info": "Execute code before sending the order to 2Checkout. This hook passes the user ID of the order’s customer and the MemberOrder object",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_checkout_after_billing_fields", "data": [
    {
      "title": "pmpro_checkout_after_billing_fields",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_checkout_after_billing_fields/",
      "form": "pmpro_checkout_after_billing_fields",
      "type": "Action", 
      "info": "Use this hook to add extra fields to the checkout page or execute custom code immediately after the Billing Address fields",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_checkout_after_captcha", "data": [
    {
      "title": "pmpro_checkout_after_captcha",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_checkout_after_captcha/",
      "form": "pmpro_checkout_after_captcha",
      "type": "Action", 
      "info": "Use this hook to add extra fields to the checkout page or execute custom code immediately after the Captcha field",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_checkout_after_email", "data": [
    {
      "title": "pmpro_checkout_after_email",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_checkout_after_email/",
      "form": "pmpro_checkout_after_email",
      "type": "Action", 
      "info": "Use this hook to add extra fields to the checkout page or execute custom code immediately after the Email fields",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_checkout_after_form", "data": [
    {
      "title": "pmpro_checkout_after_form",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_checkout_after_form/",
      "form": "pmpro_checkout_after_form",
      "type": "Action",
      "info":"pmpro_checkout_after_form",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_checkout_after_level_cost", "data": [
    {
      "title": "pmpro_checkout_after_level_cost",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_checkout_after_level_cost/",
      "form": "pmpro_checkout_after_level_cost",
      "type": "Action", 
      "info": "Use this hook to execute custom code immediately after the level cost on the checkout page",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_checkout_after_password", "data": [
    {
      "title": "pmpro_checkout_after_password",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_checkout_after_password/",
      "form": "pmpro_checkout_after_password",
      "type": "Action", 
      "info": "Use this hook to add extra fields to the checkout page or execute custom code immediately after the Password fields",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_checkout_after_payment_information_fields", "data": [
    {
      "title": "pmpro_checkout_after_payment_information_fields",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_checkout_after_payment_information_fields/",
      "form": "pmpro_checkout_after_payment_information_fields",
      "type": "Action",
      "info":"pmpro_checkout_after_payment_information_fields",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_checkout_after_pricing_fields", "data": [
    {
      "title": "pmpro_checkout_after_pricing_fields",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_checkout_after_pricing_fields/",
      "form": "pmpro_checkout_after_pricing_fields",
      "type": "Action", 
      "info": "Use this hook to add extra fields to the checkout page or execute custom code immediately after the Prcing fields",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_checkout_after_tos_fields", "data": [
    {
      "title": "pmpro_checkout_after_tos_fields",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_checkout_after_tos_fields/",
      "form": "pmpro_checkout_after_tos_fields",
      "type": "Action", 
      "info": "Use this hook to add extra fields to the checkout page or execute custom code immediately after the Terms of Service field",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_checkout_after_username", "data": [
    {
      "title": "pmpro_checkout_after_username",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_checkout_after_username/",
      "form": "pmpro_checkout_after_username",
      "type": "Action", 
      "info": "Use this hook to add extra fields to the checkout page or execute custom code immediately after the Username fields",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_checkout_after_user_fields", "data": [
    {
      "title": "pmpro_checkout_after_user_fields",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_checkout_after_user_fields/",
      "form": "pmpro_checkout_after_user_fields",
      "type": "Action", 
      "info": "Use this hook to add extra fields to the checkout page or execute custom code immediately after the User fields",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_checkout_before_change_membership_level", "data": [
    {
      "title": "pmpro_checkout_before_change_membership_level",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_checkout_before_change_membership_level/",
      "form": "pmpro_checkout_before_change_membership_level",
      "type": "Action",
      "info":"pmpro_checkout_before_change_membership_level",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_checkout_before_processing", "data": [
    {
      "title": "pmpro_checkout_before_processing",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_checkout_before_processing/",
      "form": "pmpro_checkout_before_processing",
      "type": "Action",
      "info":"pmpro_checkout_before_processing",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_checkout_before_submit_button", "data": [
    {
      "title": "pmpro_checkout_before_submit_button",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_checkout_before_submit_button/",
      "form": "pmpro_checkout_before_submit_button",
      "type": "Action", 
      "info": "Use this hook to add extra fields to the checkout page or execute custom code immediately before the Submit button",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_checkout_boxes", "data": [
    {
      "title": "pmpro_checkout_boxes",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_checkout_boxes/",
      "form": "pmpro_checkout_boxes",
      "type": "Action", 
      "info": "Use this hook to add extra fields to the checkout page or execute custom code in the middle of the checkout page",
      "version": "",
      "source": "PMPro"
    }
  ] },

  { "value": "pmpro_checkout_preheader", "data": [
    {
      "title": "pmpro_checkout_preheader",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_checkout_preheader/",
      "form": "pmpro_checkout_preheader",
      "type": "Action", 
      "info": "Use this hook to execute code on the checkout page before headers are sent. “Preheader” code runs during the WordPress “init” hook",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_deactivation", "data": [
    {
      "title": "pmpro_deactivation",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_deactivation/",
      "form": "pmpro_deactivation",
      "type": "Action",
      "info":"pmpro_deactivation",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_delete_discount_code", "data": [
    {
      "title": "pmpro_delete_discount_code",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_delete_discount_code/",
      "form": "pmpro_delete_discount_code",
      "type": "Action", 
      "info": "Use this hook to execute custom code just  before  a discount code is deleted. This passes the ID of the discount code to be deleted",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_delete_membership_level", "data": [
    {
      "title": "pmpro_delete_membership_level",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_delete_membership_level/",
      "form": "pmpro_delete_membership_level",
      "type": "Action", 
      "info": "Use this hook to execute custom code just before a membership level is deleted. This passes the ID of the membership level to be deleted",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_delete_order", "data": [
    {
      "title": "pmpro_delete_order",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_delete_order/",
      "form": "pmpro_delete_order",
      "type": "Action", 
      "info": "Use this hook to execute custom code after an order is deleted. It passes the order ID and order object being deleted",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_discountcodes_extra_cols_body", "data": [
    {
      "title": "pmpro_discountcodes_extra_cols_body",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_discountcodes_extra_cols_body/",
      "form": "pmpro_discountcodes_extra_cols_body",
      "type": "Action", 
      "info": "Use the pmpro_discountcodes_extra_cols_body and pmpro_discountcodes_extra_cols_header hooks to add extra columns to the discount codes page. This hook accepts the body HTML code of the extra column",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_discountcodes_extra_cols_header", "data": [
    {
      "title": "pmpro_discountcodes_extra_cols_header",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_discountcodes_extra_cols_header/",
      "form": "pmpro_discountcodes_extra_cols_header",
      "type": "Action", 
      "info": "Use the pmpro_discountcodes_extra_cols_body and pmpro_discountcodes_extra_cols_header hooks to add extra columns to the discount codes page. This hook accepts the header HTML code of the extra column",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_discount_code_after_level_settings", "data": [
    {
      "title": "pmpro_discount_code_after_level_settings",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_discount_code_after_level_settings/",
      "form": "pmpro_discount_code_after_level_settings",
      "type": "Action", 
      "info": "Use this hook to add extra fields or execute custom code after the level settings when editing discount codes",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_discount_code_after_settings", "data": [
    {
      "title": "pmpro_discount_code_after_settings",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_discount_code_after_settings/",
      "form": "pmpro_discount_code_after_settings",
      "type": "Action", 
      "info": "Use this hook to add extra fields or execute custom code after the settings when editing discount codes",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_getfile_before_error", "data": [
    {
      "title": "pmpro_getfile_before_error",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_getfile_before_error/",
      "form": "pmpro_getfile_before_error",
      "type": "Action", 
      "info": "Since 1.7.15. In services/getfile.php, fires when a user tries to access a file that they don’t have access to",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_getfile_before_readfile", "data": [
    {
      "title": "pmpro_getfile_before_readfile",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_getfile_before_readfile/",
      "form": "pmpro_getfile_before_readfile",
      "type": "Action",
      "info":"pmpro_getfile_before_readfile",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_get_recurring_payments_profile_details_nvpstr", "data": [
    {
      "title": "pmpro_get_recurring_payments_profile_details_nvpstr",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_get_recurring_payments_profile_details_nvpstr/",
      "form": "pmpro_get_recurring_payments_profile_details_nvpstr",
      "type": "Action", 
      "info": "Change or add parameters to an name-value-pair string sent to PayPal when trying to get subsription details in some cases. Passes the nvpString and order object",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_invoice_bullets_bottom", "data": [
    {
      "title": "pmpro_invoice_bullets_bottom",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_invoice_bullets_bottom/",
      "form": "pmpro_invoice_bullets_bottom",
      "type": "Action", 
      "info": "Add extra list item (<li></li>) elements to the Confirmation and Invoice pages. Passes the MemberOrder attached to that invoice",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_invoice_bullets_top", "data": [
    {
      "title": "pmpro_invoice_bullets_top",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_invoice_bullets_top/",
      "form": "pmpro_invoice_bullets_top",
      "type": "Action", 
      "info": "Add extra list item (<li></li>) elements to the Confirmation and Invoice pages. Passes the MemberOrder attached to that invoice",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_membership_level_after_other_settings", "data": [
    {
      "title": "pmpro_membership_level_after_other_settings",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_membership_level_after_other_settings/",
      "form": "pmpro_membership_level_after_other_settings",
      "type": "Action", 
      "info": "Use this hook to add extra fields or execute custom code on the Edit/Add Membership Level pages after the “Other Settings” section",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_membership_post_membership_expiry", "data": [
    {
      "title": "pmpro_membership_post_membership_expiry",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_membership_post_membership_expiry/",
      "form": "pmpro_membership_post_membership_expiry",
      "type": "Action",
      "info":"pmpro_membership_post_membership_expiry",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_membership_pre_membership_expiry", "data": [
    {
      "title": "pmpro_membership_pre_membership_expiry",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_membership_pre_membership_expiry/",
      "form": "pmpro_membership_pre_membership_expiry",
      "type": "Action",
      "info":"pmpro_membership_pre_membership_expiry",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_memberslist_extra_cols_body", "data": [
    {
      "title": "pmpro_memberslist_extra_cols_body",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_memberslist_extra_cols_body/",
      "form": "pmpro_memberslist_extra_cols_body",
      "type": "Action", 
      "info": "Use the pmpro_memberslist_extra_cols_body and pmpro_memberslist_extra_cols_header hooks to add extra columns to the Memberships > Members List page. This hook passes the usermeta of the current user being displayed",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_memberslist_extra_cols_header", "data": [
    {
      "title": "pmpro_memberslist_extra_cols_header",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_memberslist_extra_cols_header/",
      "form": "pmpro_memberslist_extra_cols_header",
      "type": "Action", 
      "info": "Use the pmpro_memberslist_extra_cols_body and pmpro_memberslist_extra_cols_header hooks to add extra columns to the Memberships > Memberships List page. This hook passes the usermeta of the current user being displayed",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_member_action_links_after", "data": [
    {
      "title": "pmpro_member_action_links_after",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_member_action_links_after/",
      "form": "pmpro_member_action_links_after",
      "type": "Action",
      "info":"pmpro_member_action_links_after",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_member_action_links_before", "data": [
    {
      "title": "pmpro_member_action_links_before",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_member_action_links_before/",
      "form": "pmpro_member_action_links_before",
      "type": "Action",
      "info":"pmpro_member_action_links_before",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_member_links_bottom", "data": [
    {
      "title": "pmpro_member_links_bottom",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_member_links_bottom/",
      "form": "pmpro_member_links_bottom",
      "type": "Action", 
      "info": "Add extra list item links to the bottom of the Member Links section on the Membership Account page",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_member_links_top", "data": [
    {
      "title": "pmpro_member_links_top",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_member_links_top/",
      "form": "pmpro_member_links_top",
      "type": "Action", 
      "info": "Add extra list item links to the top of the Member Links section on the Membership Account page",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_orders_extra_cols_body", "data": [
    {
      "title": "pmpro_orders_extra_cols_body",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_orders_extra_cols_body/",
      "form": "pmpro_orders_extra_cols_body",
      "type": "Action", 
      "info": "Add extra columns to the Orders page with the pmpro_orders_extra_cols_body and pmpro_orders_extra_cols_header hooks. Passes the $order object",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_orders_extra_cols_header", "data": [
    {
      "title": "pmpro_orders_extra_cols_header",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_orders_extra_cols_header/",
      "form": "pmpro_orders_extra_cols_header",
      "type": "Action", 
      "info": "Add extra columns to the Orders page with the pmpro_orders_extra_cols_body and pmpro_orders_extra_cols_header hooks. Passes the array of order IDs",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value":  "pmpro_payment_option_fields", "data": [
    {
      "title": "pmpro_payment_option_fields",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_payment_option_fields/",
      "form": "pmpro_payment_option_fields",
      "type": "Action",
      "info":"pmpro_payment_option_fields",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_paypalexpress_session_vars", "data": [
    {
      "title": "pmpro_paypalexpress_session_vars",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_paypalexpress_session_vars/",
      "form": "pmpro_paypalexpress_session_vars",
      "type": "Action", 
      "info": "Saves extra variables to the session for use in certain cases with PayPal Express",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_save_discount_code", "data": [
    {
      "title": "pmpro_save_discount_code",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_save_discount_code/",
      "form": "pmpro_save_discount_code",
      "type": "Action", 
      "info": "Execute custom code after saving a discount code",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_save_discount_code_level", "data": [
    {
      "title": "pmpro_save_discount_code_level",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_save_discount_code_level/",
      "form": "pmpro_save_discount_code_level",
      "type": "Action", 
      "info": "Executes custom code after saving a discount code’s level settings",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_save_membership_level", "data": [
    {
      "title": "pmpro_save_membership_level",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_save_membership_level/",
      "form": "pmpro_save_membership_level",
      "type": "Action", 
      "info": "Execute custom code after saving a membership level",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_stripe_subscription_deleted", "data": [
    {
      "title": "pmpro_stripe_subscription_deleted",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_stripe_subscription_deleted/",
      "form": "pmpro_stripe_subscription_deleted",
      "type": "Action", 
      "info": "Execute custom code when a subscription is cancelled on Stripe’s end",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_subscription_cancelled", "data": [
    {
      "title": "pmpro_subscription_cancelled",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_subscription_cancelled/",
      "form": "pmpro_subscription_cancelled",
      "type": "Action", 
      "info": "For BrainTree only. Execute custom code before sending the Billing Failure email. Passes the user’s last successful MemberOrder object",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_subscription_expired", "data": [
    {
      "title": "pmpro_subscription_expired",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_subscription_expired/",
      "form": "pmpro_subscription_expired",
      "type": "Action", 
      "info": "For BrainTree only. Execute custom code before sending the Subscription Expired email. Passes the user’s last successful MemberOrder object",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_subscription_ipn_event_processed", "data": [
    {
      "title": "pmpro_subscription_ipn_event_processed",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_subscription_ipn_event_processed/",
      "form": "pmpro_subscription_ipn_event_processed",
      "type": "Action",
      "info":"pmpro_subscription_ipn_event_processed",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_subscription_payment_completed", "data": [
    {
      "title": "pmpro_subscription_payment_completed",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_subscription_payment_completed/",
      "form": "pmpro_subscription_payment_completed",
      "type": "Action", 
      "info": "For PayPal and TwoCheckout only. Execute custom code before saving a successful order",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_subscription_payment_failed", "data": [
    {
      "title": "pmpro_subscription_payment_failed",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_subscription_payment_failed/",
      "form": "pmpro_subscription_payment_failed",
      "type": "Action", 
      "info": "Execute custom code when a subscription payment fails. Passes the last successful MemberOrder object",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_subscription_payment_went_past_due", "data": [
    {
      "title": "pmpro_subscription_payment_went_past_due",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_subscription_payment_went_past_due/",
      "form": "pmpro_subscription_payment_went_past_due",
      "type": "Action", 
      "info": "For BrainTree only. Execute custom code before sending the Billing Failure email. Passes the user’s last successful MemberOrder object",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_updated_order", "data": [
    {
      "title": "pmpro_updated_order",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_updated_order/",
      "form": "pmpro_updated_order",
      "type": "Action", 
      "info": "Use this hook to execute custom code after a PMPro order has been updated. This hook returns the MemberOrder object",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_update_order", "data": [
    {
      "title": "pmpro_update_order",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_update_order/",
      "form": "pmpro_update_order",
      "type": "Action", 
      "info": "Use this hook to execute custom code before updating a PMPro order. This hook returns the MemberOrder object",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "besecure", "data": [
    {
      "title": "besecure",
      "link": "https://www.paidmembershipspro.com/hook/besecure/",
      "form": "besecure",
      "type": "Filter",
      "info": "This filter changes the protocol used for URLs (https:// vs http://). If $besecure is set to true, the page will be loaded over HTTPS. For more information, read this blog post",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "excerpt_length", "data": [
    {
      "title": "excerpt_length",
      "link": "https://www.paidmembershipspro.com/hook/excerpt_length/",
      "form": "excerpt_length",
      "type": "Filter",
      "info": "This filter is the same as the WordPress core filter. PMPro uses it when displaying excerpts as part of the pmpro_membership_content_filter() function",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "plugin_action_links_{$plugin_file}", "data": [
    {
      "title": "plugin_action_links_{$plugin_file}",
      "link": "https://www.paidmembershipspro.com/hook/plugin_action_links_{$plugin_file}/",
      "form": "plugin_action_links_{$plugin_file}",
      "type": "Filter",
      "info":"plugin_action_links_{$plugin_file}",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "plugin_locale", "data": [
    {
      "title": "plugin_locale",
      "link": "https://www.paidmembershipspro.com/hook/plugin_locale/",
      "form": "plugin_locale",
      "type": "Filter",
      "info": "This filter controls the translation template to load for a specific language by using WordPress’s core function get_locale()",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "plugin_row_meta", "data": [
    {
      "title": "plugin_row_meta",
      "link": "https://www.paidmembershipspro.com/hook/plugin_row_meta/",
      "form": "plugin_row_meta",
      "type": "Filter",
      "info":"plugin_row_meta",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_account_preheader_no_user_redirect", "data": [
    {
      "title": "pmpro_account_preheader_no_user_redirect",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_account_preheader_no_user_redirect/",
      "form": "pmpro_account_preheader_no_user_redirect",
      "type": "Filter",
      "info": "Change the URL you want to redirect to when a visitor without a WordPress user account visits the Membership Account page, or disable the redirect completely by passing 0. By default, this returns the Membership Levels page and accepts a URL.",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_account_preheader_redirect", "data": [
    {
      "title": "pmpro_account_preheader_redirect",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_account_preheader_redirect/",
      "form": "pmpro_account_preheader_redirect",
      "type": "Filter",
      "info": "Change the URL you want to redirect to when a visitor without a PMPro membership visits the Membership Account page, or disable the redirect completely by passing 0. By default, this returns the Membership Levels page and accepts a URL.",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_after_authnet_silent_post", "data": [
    {
      "title": "pmpro_after_authnet_silent_post",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_after_authnet_silent_post/",
      "form": "pmpro_after_authnet_silent_post",
      "type": "Filter",
      "info": "The pmpro_authnet_silent_post_fields filter and pmpro_before_authnet_silent_post and pmpro_after_authnet_silent_post hooks are passed the $fields variable built at the top of the Authorize.net Silent Post script that mirrors the $_REQUEST array.",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_ajax_timeout", "data": [
    {
      "title": "pmpro_ajax_timeout",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_ajax_timeout/",
      "form": "pmpro_ajax_timeout",
      "type": "Filter",
      "info": "Use this hook to change the AJAX  timeout limit from 2000 (2 seconds) to something else when checking and applying discount codes on the Membership Checkout page",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_assigned_{$role}_capabilities", "data": [
    {
      "title": "pmpro_assigned_{$role}_capabilities",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_assigned_{$role}_capabilities/",
      "form": "pmpro_assigned_{$role}_capabilities",
      "type": "Filter",
      "info":"pmpro_assigned_{$role}_capabilities",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_authnet_silent_post_fields", "data": [
    {
      "title": "pmpro_authnet_silent_post_fields",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_authnet_silent_post_fields/",
      "form": "pmpro_authnet_silent_post_fields",
      "type": "Filter",
      "info": "The pmpro_authnet_silent_post_fields filter and pmpro_before_authnet_silent_post and pmpro_after_authnet_silent_post hooks are passed the $fields variable built at the top of the Authorize.net Silent Post script that mirrors the $_REQUEST array.",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_authorizenet_post_url", "data": [
    {
      "title": "pmpro_authorizenet_post_url",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_authorizenet_post_url/",
      "form": "pmpro_authorizenet_post_url",
      "type": "Filter",
      "info": "Use the Authorize.net gateway class with a different post url, e.g. if you have a gateway that offers an Authorize.net compatibility mode",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_besecure", "data": [
    {
      "title": "pmpro_besecure",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_besecure/",
      "form": "pmpro_besecure",
      "type": "Filter",
      "info": "This filter changes the protocol used for URLs (https:// vs http://). If $besecure is set to true, the page will be loaded over HTTPS. For more information, read this blog post",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_cancel_previous_subscriptions", "data": [
    {
      "title": "pmpro_cancel_previous_subscriptions",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_cancel_previous_subscriptions/",
      "form": "pmpro_cancel_previous_subscriptions",
      "type": "Filter",
      "info": "This hook controls whether or not PMPro cancels a user’s previous membership level at checkout, which is enabled at default. This is dangerous, but is useful in certain cases like the PMPro Addon Packages plugin",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_checkout_confirmed", "data": [
    {
      "title": "pmpro_checkout_confirmed",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_checkout_confirmed/",
      "form": "pmpro_checkout_confirmed",
      "type": "Filter",
      "info":"pmpro_checkout_confirmed",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_checkout_confirm_email", "data": [
    {
      "title": "pmpro_checkout_confirm_email",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_checkout_confirm_email/",
      "form": "pmpro_checkout_confirm_email",
      "type": "Filter",
      "info": "This filter controls whether to display and require the “Confirm Email” field at checkout. By default, it’s set to true (show and require field)",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_checkout_confirm_password", "data": [
    {
      "title": "pmpro_checkout_confirm_password",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_checkout_confirm_password/",
      "form": "pmpro_checkout_confirm_password",
      "type": "Filter",
      "info": "This filter controls whether to display and require the “Confirm Password” field at checkout. By default, it’s set to true (show and require field)",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_checkout_default_submit_button", "data": [
    {
      "title": "pmpro_checkout_default_submit_button",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_checkout_default_submit_button/",
      "form": "pmpro_checkout_default_submit_button",
      "type": "Filter",
      "info":"pmpro_checkout_default_submit_button",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_checkout_end_date", "data": [
    {
      "title": "pmpro_checkout_end_date",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_checkout_end_date/",
      "form": "pmpro_checkout_end_date",
      "type": "Filter",
      "info":"pmpro_checkout_end_date",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_checkout_level", "data": [
    {
      "title": "pmpro_checkout_level",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_checkout_level/",
      "form": "pmpro_checkout_level",
      "type": "Filter",
      "info": "This hook allows you to modify the membership level object before checkout",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_checkout_new_user_array", "data": [
    {
      "title": "pmpro_checkout_new_user_array",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_checkout_new_user_array/",
      "form": "pmpro_checkout_new_user_array",
      "type": "Filter",
      "info":"pmpro_checkout_new_user_array",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_checkout_oldemail", "data": [
    {
      "title": "pmpro_checkout_oldemail",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_checkout_oldemail/",
      "form": "pmpro_checkout_oldemail",
      "type": "Filter",
      "info": "This hook controls whether or not to allow registrations with email addresses which have already been used. By default, PMPro does not allow multiple registrations with one email address and shows an error if the email address has already been used",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_checkout_order", "data": [
    {
      "title": "pmpro_checkout_order",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_checkout_order/",
      "form": "pmpro_checkout_order",
      "type": "Filter",
      "info":"pmpro_checkout_order",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_checkout_order_free", "data": [
    {
      "title": "pmpro_checkout_order_free",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_checkout_order_free/",
      "form": "pmpro_checkout_order_free",
      "type": "Filter",
      "info":"pmpro_checkout_order_free",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_checkout_signon_secure", "data": [
    {
      "title": "pmpro_checkout_signon_secure",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_checkout_signon_secure/",
      "form": "pmpro_checkout_signon_secure",
      "type": "Filter",
      "info": "Force PMPro to login over http or https in case other plugins (like WordPress MU Domain Mapping) conflict with what should be chosen here",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_checkout_start_date", "data": [
    {
"title": "pmpro_checkout_start_date",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_checkout_start_date/",
      "form": "pmpro_checkout_start_date",
      "type": "Filter",
      "info": "This hook pmpro_checkout_start_date allows you to change the start date of a membership before checkout",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_check_discount_code", "data": [
    {
"title": "pmpro_check_discount_code",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_check_discount_code/",
      "form": "pmpro_check_discount_code",
      "type": "Filter",
      "info": "Filter the results of the discount code check. This can be used to add additional programmatic requirements to a discount code being used. Return true if discount code is okay to use. Return false or a string containing the error text if the discount code is not okay to use",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_check_discount_code_levels", "data": [
    {
"title": "pmpro_check_discount_code_levels",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_check_discount_code_levels/",
      "form": "pmpro_check_discount_code_levels",
      "type": "Filter",
      "info": "This filter controls whether discount codes should only be applied to certain levels. By default, this is set to true, and discount codes are checked to see if they apply to the membership level passed. Return true if the code can be used with the level supplied or false if not",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_check_status_after_checkout", "data": [
    {
"title": "pmpro_check_status_after_checkout",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_check_status_after_checkout/",
      "form": "pmpro_check_status_after_checkout",
      "type": "Filter",
      "info": "This filter allows you to set the status of an order to “pending” instead of “success” when a user checks out with the check gateway. They will still have access to the membership level, but you can update the status via the Orders page in the WordPress dashboard later",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_confirmation_message", "data": [
    {
      "title": "pmpro_confirmation_message",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_confirmation_message/",
      "form": "pmpro_confirmation_message",
      "type": "Filter",
      "info": "This filter changes the output on the confirmation page without having to templatize it. The filter passes the constructed HTML string with the confirmation message and a second parameter containing the order/invoice object if it is a paid membership",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_confirmation_order_status", "data": [
    {
      "title": "pmpro_confirmation_order_status",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_confirmation_order_status/",
      "form": "pmpro_confirmation_order_status",
      "type": "Filter",
      "info": "This filter can change which status the confirmation page looks for. This will also accept an array",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_confirmation_url", "data": [
    {
      "title": "pmpro_confirmation_url",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_confirmation_url/",
      "form": "pmpro_confirmation_url",
      "type": "Filter",
      "info": "This filter changes the URL to redirect to on confirmation. By default, this redirects to the PMPro Confirmation page with pmpro_url('confirmation', \"?level=\" . $pmpro_level->id). It also passes the user ID of the current user and the level object",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_countries", "data": [
    {
      "title": "pmpro_countries",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_countries/",
      "form": "pmpro_countries",
      "type": "Filter",
      "info": "This hook allows you to modify the default list of countries used by PMPro",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_create_recurring_payments_profile_nvpstr", "data": [
    {
      "title": "",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_create_recurring_payments_profile_nvpstr/",
      "form": "pmpro_create_recurring_payments_profile_nvpstr",
      "type": "Filter",
      "info": "Change or add parameters to an name-value-pair string sent to PayPal when trying to create a subscription. Passes the nvpString and order object",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_currencies", "data": [
    {
      "title": "pmpro_currencies",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_currencies/",
      "form": "pmpro_currencies",
      "type": "Filter",
      "info": "This hook allows you to modify the default list of currencies used by PMPro. Also allows you to move the default position of the currency symbol",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_custom_advanced_settings", "data": [
    {
      "title": "pmpro_custom_advanced_settings",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_custom_advanced_settings/",
      "form": "pmpro_custom_advanced_settings",
      "type": "Filter",
      "info": "This hook extra fields to the Memberships > Advanced Settings page in the WordPress dashboard. It accepts an array of fields as described here",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_cybersource_wsdl_url", "data": [
    {
      "title": "pmpro_cybersource_wsdl_url",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_cybersource_wsdl_url/",
      "form": "pmpro_cybersource_wsdl_url",
      "type": "Filter",
      "info": "This filter changes the WSDL URL used by the CyberSource gateway. It also passes the gateway environment (live or test/sandbox)",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_deactivate_old_levels", "data": [
    {
      "title": "pmpro_deactivate_old_levels",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_deactivate_old_levels/",
      "form": "pmpro_deactivate_old_levels",
      "type": "Filter",
      "info":"pmpro_deactivate_old_levels",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_default_country", "data": [
    {
      "title": "pmpro_default_country",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_default_country/",
      "form": "pmpro_default_country",
      "type": "Filter",
      "info": "This hook allows you to change the default country used by PMPro. It accepts a string, which should be one of the country codes specified in the $pmpro_countries global variable",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_default_currency", "data": [
    {
      "title": "pmpro_default_currency",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_default_currency/",
      "form": "pmpro_default_currency",
      "type": "Filter",
      "info": "This hook allows you to change the default currency used by PMPro. It accepts a string, which should be one of the currency codes specified in the $pmpro_currencies global variable",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_discount_code_level", "data": [
    {
      "title": "pmpro_discount_code_level",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_discount_code_level/",
      "form": "pmpro_discount_code_level",
      "type": "Filter",
      "info": "This filter modifies the level  given by a discount code.  It passes the level object and the discount code ID",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_docs_url", "data": [
    {
      "title": "pmpro_docs_url",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_docs_url/",
      "form": "pmpro_docs_url",
      "type": "Filter",
      "info":"pmpro_docs_url",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_do_express_checkout_payment_nvpstr", "data": [
    {
      "title": "pmpro_do_express_checkout_payment_nvpstr",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_do_express_checkout_payment_nvpstr/",
      "form": "pmpro_do_express_checkout_payment_nvpstr",
      "type": "Filter",
      "info": "Change or add parameters to an name-value-pair string sent to PayPal when checking out. Passes the nvpString and order object",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_edit_member_capability", "data": [
    {
      "title": "pmpro_edit_member_capability",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_edit_member_capability/",
      "form": "pmpro_edit_member_capability",
      "type": "Filter",
      "info": "This filter allows developers to change the default capability checked by PMPro to edit Membership options. The default is “manage_options” which is given to administrators",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_email_attachments", "data": [
    {
      "title": "pmpro_email_attachments",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_email_attachments/",
      "form": "pmpro_email_attachments",
      "type": "Filter",
      "info": "Add email attachments to the PMPro emails",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_email_body", "data": [
    {
      "title": "pmpro_email_body",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_email_body/",
      "form": "pmpro_email_body",
      "type": "Filter",
      "info": "Use this to filter the content of the body of an email sent by PMPro. This filter returns the email body content and the PMProEmail object",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_email_custom_template_path", "data": [
    {
      "title": "pmpro_email_custom_template_path",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_email_custom_template_path/",
      "form": "pmpro_email_custom_template_path",
      "type": "Filter",
      "info": "Add additional template directories to search when loading email templates. The hook should return an array of directory strings. Elements at the end of the array are search first. Elements at the start of the array will be searched last. The default locations searched are (in order): * /wp-content/themes/{your-theme}/paid-memberships-pro/email/ * /wp-content/themes/{your-parent-theme}/paid-memberships-pro/email/ * /wp-content/plugins/paid-memberships-pro/email/",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_email_data", "data": [
    {
      "title": "pmpro_email_data",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_email_data/",
      "form": "pmpro_email_data",
      "type": "Filter",
      "info": "This filter makes it easier to add variables to edited email templates by passing an array of key-value pairs. Those values can then be used in email templates with the format: !!key!!. This passes the data array and PMProEmail object",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_email_days_before_expiration", "data": [
    {
      "title": "pmpro_email_days_before_expiration",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_email_days_before_expiration/",
      "form": "pmpro_email_days_before_expiration",
      "type": "Filter",
      "info": "This filters how many days before expiration PMPro should send expiration warning emails. The default is 7 days",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_email_days_before_trial_end", "data": [
    {
      "title": "pmpro_email_days_before_trial_end",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_email_days_before_trial_end/",
      "form": "pmpro_email_days_before_trial_end",
      "type": "Filter",
      "info":"pmpro_email_days_before_trial_end",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_email_field_type", "data": [
    {
      "title": "pmpro_email_field_type",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_email_field_type/",
      "form": "pmpro_email_field_type",
      "type": "Filter",
      "info":"pmpro_email_field_type",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_email_filter", "data": [
    {
      "title": "pmpro_email_filter",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_email_filter/",
      "form": "pmpro_email_filter",
      "type": "Filter",
      "info": "Use this to filter the entire PMProEmail object at once. This passes the PMProEmail object",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_email_headers", "data": [
    {
      "title": "pmpro_email_headers",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_email_headers/",
      "form": "pmpro_email_headers",
      "type": "Filter",
      "info": "Use this to change the headers of an email sent by PMPro. This hook returns the email headers and the PMProEmail object",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_email_recipient", "data": [
    {
      "title": "pmpro_email_recipient",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_email_recipient/",
      "form": "pmpro_email_recipient",
      "type": "Filter",
      "info": "Use this to change the recipient of an email sent by PMPro. This hook returns the recipient  and the PMProEmail object",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_email_sender", "data": [
    {
      "title": "pmpro_email_sender",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_email_sender/",
      "form": "pmpro_email_sender",
      "type": "Filter",
      "info": "Use this to change the sender of an email sent by PMPro. This hook returns the sender and the PMProEmail object",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_email_sender_name", "data": [
    {
      "title": "pmpro_email_sender_name",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_email_sender_name/",
      "form": "pmpro_email_sender_name",
      "type": "Filter",
      "info": "Use this to change the sender name of an email sent by PMPro. This hook returns the sender name and the PMProEmail object",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_email_subject", "data": [
    {
      "title": "pmpro_email_subject",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_email_subject/",
      "form": "pmpro_email_subject",
      "type": "Filter",
      "info": "Use this to change the subject of an email sent by PMPro. This hook returns the subject  and the PMProEmail object",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_email_template", "data": [
    {
      "title": "pmpro_email_template",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_email_template/",
      "form": "pmpro_email_template",
      "type": "Filter",
      "info": "Use this to change the template name of an email sent by PMPro. The template name specifies which email template to use for the email body. This hook returns the template name and the PMProEmail object",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_euro_position", "data": [
    {
      "title": "pmpro_euro_position",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_euro_position/",
      "form": "pmpro_euro_position",
      "type": "Filter",
      "info":"pmpro_euro_position",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_extra_page_settings", "data": [
    {
      "title": "pmpro_extra_page_settings",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_extra_page_settings/",
      "form": "pmpro_extra_page_settings",
      "type": "Filter",
      "info": "Add extra PMPro-related pages used by add ons or other customizations. A new dropdown is added to the Memberships -> Page Settings tab of the PMPro settings to allow admins to set the page, and the page’s post_id will be made available in the $pmpro_pages global variable. The filter should take an array as the one parameter and add elements to it where the key is a unique name for the page (a slug) and the value is a readable label for the page (a title)",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_field_classes", "data": [
    {
      "title": "pmpro_field_classes",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_field_classes/",
      "form": "pmpro_field_classes",
      "type": "Filter",
      "info": "Use this to filter the CSS classes added to the fields on the checkout page. This is normally used to handle error highlighting with the “pmpro_error” class. This returns the CSS classes and the current the current field name to be applied to",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_formatted_address", "data": [
    {
      "title": "pmpro_formatted_address",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_formatted_address/",
      "form": "pmpro_formatted_address",
      "type": "Filter",
      "info":"pmpro_formatted_address",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_format_phone", "data": [
    {
      "title": "pmpro_format_phone",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_format_phone/",
      "form": "pmpro_format_phone",
      "type": "Filter",
      "info": "Change how phone numbers are formated. Param 1 is $r, the formatted phone number. Param 2 is $phone, the original phone number",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_format_price", "data": [
    {
      "title": "pmpro_format_price",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_format_price/",
      "form": "pmpro_format_price",
      "type": "Filter",
      "info": "Adjust the formatting of prices to support currency symbols after the price or to use commas instead of periods for separators",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_gateways", "data": [
    {
      "title": "pmpro_gateways",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_gateways/",
      "form": "pmpro_gateways",
      "type": "Filter",
      "info":"pmpro_gateways",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_gateways_with_pending_status", "data": [
    {
      "title": "pmpro_gateways_with_pending_status",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_gateways_with_pending_status/",
      "form": "pmpro_gateways_with_pending_status",
      "type": "Filter",
      "info":"pmpro_gateways_with_pending_status",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_getfile_extension_blacklist", "data": [
    {
      "title": "pmpro_getfile_extension_blacklist",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_getfile_extension_blacklist/",
      "form": "pmpro_getfile_extension_blacklist",
      "type": "Filter",
      "info": "Filter the list of filetypes not allowed by the get_file() extension. By default inc, php, php3, php4, php5, phps, and phtml file types are not allowed",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_get_addons_timeout", "data": [
    {
      "title": "pmpro_get_addons_timeout",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_get_addons_timeout/",
      "form": "pmpro_get_addons_timeout",
      "type": "Filter",
      "info":"pmpro_get_addons_timeout",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_get_express_checkout_details_nvpstr", "data": [
    {
      "title": "pmpro_get_express_checkout_details_nvpstr",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_get_express_checkout_details_nvpstr/",
      "form": "pmpro_get_express_checkout_details_nvpstr",
      "type": "Filter",
      "info": "Change or add parameters to an name-value-pair string sent to PayPal when confirming a checkout for review. Passes the nvpString and order object. apply_filters('pmpro_get_express_checkout_details_nvpstr', string $nvpStr, MemberOrder $order);apply_filters('pmpro_get_express_checkout_details_nvpstr', string $nvpStr, MemberOrder $order);",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_get_gateway", "data": [
    {
      "title": "pmpro_get_gateway",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_get_gateway/",
      "form": "pmpro_get_gateway",
      "type": "Filter",
      "info":"pmpro_get_gateway",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_get_membership_levels_for_user", "data": [
    {
      "title": "pmpro_get_membership_levels_for_user",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_get_membership_levels_for_user/",
      "form": "pmpro_get_membership_levels_for_user",
      "type": "Filter",
      "info":"pmpro_get_membership_levels_for_user",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_get_membership_level_for_user", "data": [
    {
      "title": "pmpro_get_membership_level_for_user",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_get_membership_level_for_user/",
      "form": "pmpro_get_membership_level_for_user",
      "type": "Filter",
      "info":"pmpro_get_membership_level_for_user",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_has_membership_access_filter", "data": [
    {
      "title": "pmpro_has_membership_access_filter",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_has_membership_access_filter/",
      "form": "pmpro_has_membership_access_filter",
      "type": "Filter",
      "info": "Use this hook to filter the membership access of a given post. This overrides the output of the pmpro_has_membership_access() function and returns the boolean true or false, the WP_Post object, the  WP_User object, and an array of the membership levels required for the post",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_has_membership_access_filter_{post_type}", "data": [
    {
"title": "pmpro_has_membership_access_filter_{post_type}",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_has_membership_access_filter_{post_type}/",
      "form": "pmpro_has_membership_access_filter_{post_type}",
      "type": "Filter",
      "info": "Use this hook to filter the membership access of a given post by specific post type. This overrides the output of the pmpro_has_membership_access() function and returns the boolean true or false, the WP_Post object, the  WP_User object, and an array of the membership levels required for the post",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_has_membership_level", "data": [
    {
      "title": "pmpro_has_membership_level",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_has_membership_level/",
      "form": "pmpro_has_membership_level",
      "type": "Filter",
      "info": "This filter can be used to override the output from the pmpro_hasMembershipLevel() function.  It passes the boolean true or false, user ID, and the array of required levels for that post passed to pmpro_hasMembershipLevel()",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_hide_billing_address_fields", "data": [
    {
      "title": "pmpro_hide_billing_address_fields",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_hide_billing_address_fields/",
      "form": "pmpro_hide_billing_address_fields",
      "type": "Filter",
      "info":"pmpro_hide_billing_address_fields",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_hide_payment_information_fields", "data": [
    {
      "title": "pmpro_hide_payment_information_fields",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_hide_payment_information_fields/",
      "form": "pmpro_hide_payment_information_fields",
      "type": "Filter",
      "info":"pmpro_hide_payment_information_fields",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_include_billing_address_fields", "data": [
    {
      "title": "pmpro_include_billing_address_fields",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_include_billing_address_fields/",
      "form": "pmpro_include_billing_address_fields",
      "type": "Filter",
      "info":"pmpro_include_billing_address_fields",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_include card type field", "data": [
    {
      "title": "pmpro_include_cardtype_field",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_include_cardtype_field/",
      "form": "pmpro_include_cardtype_field",
      "type": "Filter",
      "info":"pmpro_include_cardtype_field",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_include_payment_information_fields", "data": [
    {
      "title": "pmpro_include_payment_information_fields",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_include_payment_information_fields/",
      "form": "pmpro_include_payment_information_fields",
      "type": "Filter",
      "info":"pmpro_include_payment_information_fields",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_include_payment_option_for_paypal", "data": [
    {
      "title": "pmpro_include_payment_option_for_paypal",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_include_payment_option_for_paypal/",
      "form": "pmpro_include_payment_option_for_paypal",
      "type": "Filter",
      "info":"pmpro_include_payment_option_for_paypal",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_inshandler_level", "data": [
    {
      "title": "pmpro_inshandler_level",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_inshandler_level/",
      "form": "pmpro_inshandler_level",
      "type": "Filter",
      "info":"pmpro_inshandler_level",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_international_addresses", "data": [
    {
      "title": "pmpro_international_addresses",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_international_addresses/",
      "form": "pmpro_international_addresses",
      "type": "Filter",
      "info": "Filters the $show_country variable which controls whether to show the “Country” field at checkout. By default this is set to true. If set to false, the country will be “US”",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_ipnhandler_level", "data": [
    {
      "title": "pmpro_ipnhandler_level",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_ipnhandler_level/",
      "form": "pmpro_ipnhandler_level",
      "type": "Filter",
      "info": "FIlters the membership level passed and changes the order accordingly. Passes the membership level ID and user ID of the order",
      "version": "",
      "source": "PMPro"
    }
  ] },
  { "value": "pmpro_ipn_check_receiver_email", "data": [
    {
      "title": "pmpro_ipn_check_receiver_email",
      "link": "https://www.paidmembershipspro.com/hook/pmpro_ipn_check_receiver_email/",
      "form": "pmpro_ipn_check_receiver_email",
      "type": "Filter",
      "info": "Change how the email is checked in the PayPal IPN handler. Passes true or false and an array containing the receiver email and business email",
      "version": "",
      "source": "PMPro"
    }
  ] },
    { "value": "pmpro_ipn_validate", "data": [
      {
        "title": "pmpro_ipn_validate",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_ipn_validate/",
        "form": "pmpro_ipn_validate",
        "type": "Filter",
        "info": "pmpro_ipn_validate",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_is_level_expiring_soon", "data": [
      {
        "title": "pmpro_is_level_expiring_soon",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_is_level_expiring_soon/",
        "form": "pmpro_is_level_expiring_soon",
        "type": "Filter",
        "info": "pmpro_is_level_expiring_soon",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_is_ready", "data": [
      {
        "title": "pmpro_is_ready",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_is_ready/",
        "form": "pmpro_is_ready",
        "type": "Filter",
        "info": "Filter to determine if PMPro setup is complete or if notices or warnings need to be shown in the PMPro settings. Note: The filter should return true or false and also set the $pmpro_level_ready, $pmpro_gateway_ready,$pmpro_pages_ready global variables",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_levels_array", "data": [
      {
        "title": "pmpro_levels_array",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_levels_array/",
        "form": "pmpro_levels_array",
        "type": "Filter",
        "info": "Filters the array of levels before displaying them on the Membership Levels page.  Passes the array of levels",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_levels_cost_text", "data": [
      {
        "title": "pmpro_levels_cost_text",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_levels_cost_text/",
        "form": "pmpro_levels_cost_text",
        "type": "Filter",
        "info": "pmpro_levels_cost_text",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_levels_expiration_text", "data": [
      {
        "title": "pmpro_levels_expiration_text",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_levels_expiration_text/",
        "form": "pmpro_levels_expiration_text",
        "type": "Filter",
        "info": "pmpro_levels_expiration_text",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_level_cost_text", "data": [
      {
        "title": "pmpro_level_cost_text",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_level_cost_text/",
        "form": "pmpro_level_cost_text",
        "type": "Filter",
        "info": "Overrides how the cost is shown on the checkout page. The hook passes the text generated by the pmpro_getLevelCost($level) function and also a level object which is prepopulated with levels pricing and expiration settings already adjusted for any discount codes that may be in effect",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_level_description", "data": [
      {
        "title": "pmpro_level_description",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_level_description/",
        "form": "pmpro_level_description",
        "type": "Filter",
        "info": "pmpro_level_description",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_level_expiration_text", "data": [
      {
        "title": "pmpro_level_expiration_text",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_level_expiration_text/",
        "form": "pmpro_level_expiration_text",
        "type": "Filter",
        "info": "Overrides how the expiration information is shown on the levels and checkout pages. Again don’t abuse this by showing a different expiration than is real. Be careful if you change your expiration settings to update your filter if needed. The hook passes the text generated by the pmpro_getLevelExpiration($level) function and also a level object which is prepopulated with levels pricing and expiration settings already adjusted for any discount codes that may be in affect",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_license_check_key_timeout", "data": [
      {
        "title": "pmpro_license_check_key_timeout",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_license_check_key_timeout/",
        "form": "pmpro_license_check_key_timeout",
        "type": "Filter",
        "info": "pmpro_license_check_key_timeout",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_list_categories_args", "data": [
      {
        "title": "pmpro_list_categories_args",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_list_categories_args/",
        "form": "pmpro_list_categories_args",
        "type": "Filter",
        "info": "pmpro_list_categories_args",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_login_redirect", "data": [
      {
        "title": "pmpro_login_redirect",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_login_redirect/",
        "form": "pmpro_login_redirect",
        "type": "Filter",
        "info": "Controls whether or not to redirect the default Registration page to the PMPro Levels page. Passing false will not redirect",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_login_redirect_url", "data": [
      {
        "title": "pmpro_login_redirect_url",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_login_redirect_url/",
        "form": "pmpro_login_redirect_url",
        "type": "Filter",
        "info": "Filters the URL to redirect to when logging in. Passes the URL, request, WP_User object",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_longform_address", "data": [
      {
        "title": "pmpro_longform_address",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_longform_address/",
        "form": "pmpro_longform_address",
        "type": "Filter",
        "info": "Filters whether or not to use the international address form. By default, this is set to true to allow any form of address.  When set to false, this will display the shortened \"US\" version",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_manage_recurring_payments_profile_status_nvpstr", "data": [
      {
        "title": "pmpro_manage_recurring_payments_profile_status_nvpstr",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_manage_recurring_payments_profile_status_nvpstr/",
        "form": "pmpro_manage_recurring_payments_profile_status_nvpstr",
        "type": "Filter",
        "info": "Change or add parameters to an name-value-pair string sent to PayPal when trying to a cancel a subscription. Passes the nvpString and order object",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_membership_access_post", "data": [
      {
        "title": "pmpro_membership_access_post",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_membership_access_post/",
        "form": "pmpro_membership_access_post",
        "type": "Filter",
        "info": "pmpro_membership_access_post",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_membership_content_filter_disallowed_levels", "data": [
      {
        "title": "pmpro_membership_content_filter_disallowed_levels",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_membership_content_filter_disallowed_levels/",
        "form": "pmpro_membership_content_filter_disallowed_levels",
        "type": "Filter",
        "info": "pmpro_membership_content_filter_disallowed_levels",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_membership_levels_table", "data": [
      {
        "title": "pmpro_membership_levels_table",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_membership_levels_table/",
        "form": "pmpro_membership_levels_table",
        "type": "Filter",
        "info": "pmpro_membership_levels_table",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_memberslist_calculate_revenue", "data": [
      {
        "title": "pmpro_memberslist_calculate_revenue",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_memberslist_calculate_revenue/",
        "form": "pmpro_memberslist_calculate_revenue",
        "type": "Filter",
        "info": "Filters whether or not to show the total revenue information on the Memberships > Member List page in the WordPress dashboard. By default this is set to false to hide this",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_memberslist_csv_dateformat", "data": [
      {
        "title": "pmpro_memberslist_csv_dateformat",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_memberslist_csv_dateformat/",
        "form": "pmpro_memberslist_csv_dateformat",
        "type": "Filter",
        "info": "pmpro_memberslist_csv_dateformat",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_memberslist_expires_column", "data": [
      {
        "title": "pmpro_memberslist_expires_column",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_memberslist_expires_column/",
        "form": "pmpro_memberslist_expires_column",
        "type": "Filter",
        "info": "pmpro_memberslist_expires_column",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_memberslist_per_page", "data": [
      {
        "title": "pmpro_memberslist_per_page",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_memberslist_per_page/",
        "form": "pmpro_memberslist_per_page",
        "type": "Filter",
        "info": "Change the default number of items to show on the Members List page. Default is 15",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_memberslist_per_page", "data": [
      {
        "title": "pmpro_memberslist_per_page",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_memberslist_per_page/",
        "form": "pmpro_memberslist_user_row_actions",
        "type": "Filter",
        "info": "Add extra user row actions or links to the members list in the dashboard. Works the same as the core user_row actions. Array of actions should be formatted as array(‘key’ => ‘HTML link’)",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_memberslist_per_page", "data": [
      {
        "title": "pmpro_memberslist_per_page",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_memberslist_per_page/",
        "form": "pmpro_members_list_csv_default_columns",
        "type": "Filter",
        "info": "Filters the default columns to show on the Members List CSV export. Passes an array of arrays with the format array('object', 'property')",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_members_list_csv_extra_columns", "data": [
      {
        "title": "pmpro_members_list_csv_extra_columns",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_members_list_csv_extra_columns/",
        "form": "pmpro_members_list_csv_extra_columns",
        "type": "Filter",
        "info": "Adds extra columns to the Members List CSV export. Passes an array of arrays with the format array('object', 'property')",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_members_list_csv_heading", "data": [
      {
        "title": "pmpro_members_list_csv_heading",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_members_list_csv_heading/",
        "form": "pmpro_members_list_csv_heading",
        "type": "Filter",
        "info": "Filter the headings in the Membership List CSV export. Returns a string of headings separated by commas",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_members_list_sql", "data": [
      {
        "title": "pmpro_members_list_sql",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_members_list_sql/",
        "form": "pmpro_members_list_sql",
        "type": "Filter",
        "info": "Filters the SQL query used on the Members List and Members List CSV export. Passes the SQL query string",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_members_list_user", "data": [
      {
        "title": "pmpro_members_list_user",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_members_list_user/",
        "form": "pmpro_members_list_user",
        "type": "Filter",
        "info": "pmpro_members_list_user",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_members_list_user_link", "data": [
      {
        "title": "pmpro_members_list_user_link",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_members_list_user_link/",
        "form": "pmpro_members_list_user_link",
        "type": "Filter",
        "info": "Filters the link displayed per member on the Members List and Login Reports pages. Passes the HTML code of the link and the WP_User object of that user",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_member_startdate", "data": [
      {
        "title": "pmpro_member_startdate",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_member_startdate/",
        "form": "pmpro_member_startdate",
        "type": "Filter",
        "info": "Filters the pmpro_getMemberStartdate function. Passes the $user_id, and the $level_id as parameters",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_new_user", "data": [
      {
        "title": "pmpro_new_user",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_new_user/",
        "form": "pmpro_new_user",
        "type": "Filter",
        "info": "pmpro_new_user",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_next_payment", "data": [
      {
        "title": "pmpro_next_payment",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_next_payment/",
        "form": "pmpro_next_payment",
        "type": "Filter",
        "info": "pmpro_next_payment",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_non_member_text_filter", "data": [
      {
        "title": "pmpro_non_member_text_filter",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_non_member_text_filter/",
        "form": "pmpro_non_member_text_filter",
        "type": "Filter",
        "info": "Filters the message displayed when the post is viewed by a logged in WordPress user who does not have a PMPro membership level. By default, this is set to display the text configured on the 'Memberships > Advanced Settings page'",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_not_logged_in_text_filter", "data": [
      {
        "title": "pmpro_not_logged_in_text_filter",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_not_logged_in_text_filter/",
        "form": "pmpro_not_logged_in_text_filter",
        "type": "Filter",
        "info": "Filters the message displayed when the post is viewed by a visitor who does not have a WordPress user account. By default, this is set to display the text configured on the Memberships > 'Advanced Settings page'",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_orders_csv_export_filename", "data": [
      {
        "title": "pmpro_orders_csv_export_filename",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_orders_csv_export_filename/",
        "form": "pmpro_orders_csv_export_filename",
        "type": "Filter",
        "info": "pmpro_orders_csv_export_filename",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_orders_csv_extra_columns", "data": [
      {
        "title": "pmpro_orders_csv_extra_columns",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_orders_csv_extra_columns/",
        "form": "pmpro_orders_csv_extra_columns",
        "type": "Filter",
        "info": "Use this hook to add extra columns to the Orders CSV export. Passes an array of column data with the format array('heading', callback)",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_orders_per_page", "data": [
      {
        "title": "pmpro_orders_per_page",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_orders_per_page/",
        "form": "pmpro_orders_per_page",
        "type": "Filter",
        "info": "Change the default number of items to show on the Members List page",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_orders_read_only_fields", "data": [
      {
        "title": "pmpro_orders_read_only_fields",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_orders_read_only_fields/",
        "form": "pmpro_orders_read_only_fields",
        "type": "Filter",
        "info": "Modifies the array of fields which are readonly on the Orders page. Passes an array with the format array('code', 'payment_transaction_id', 'subscription_transaction_id')",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_orders_search_fields", "data": [
      {
        "title": "pmpro_orders_search_fields",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_orders_search_fields/",
        "form": "pmpro_orders_search_fields",
        "type": "Filter",
        "info": "Filters the list of fields to search for when using the Search Orders function on the Orders pages",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_orders_search_usermeta", "data": [
      {
        "title": "pmpro_orders_search_usermeta",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_orders_search_usermeta/",
        "form": "pmpro_orders_search_usermeta",
        "type": "Filter",
        "info": "Controls whether or not to also search by usermeta when using the Search functionality on the Orders pages. By default, this is set to false (don’t search usermeta)",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_orders_show_affiliate_ids", "data": [
      {
        "title": "pmpro_orders_show_affiliate_ids",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_orders_show_affiliate_ids/",
        "form": "pmpro_orders_show_affiliate_ids",
        "type": "Filter",
        "info": "Controls whether or not to show affiliate IDs on the Orders Page. This is used by various integrations with affiliate platforms",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_orders_user_row_actions", "data": [
      {
        "title": "pmpro_orders_user_row_actions",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_orders_user_row_actions/",
        "form": "pmpro_orders_user_row_actions",
        "type": "Filter",
        "info": "Add extra user row actions or links to the orders in the dashboard. Works the same as the core user_row actions. Array of actions should be formatted as array(\"key\" => \"HTML link\")",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_order_discount_code", "data": [
      {
        "title": "pmpro_order_discount_code",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_order_discount_code/",
        "form": "pmpro_order_discount_code",
        "type": "Filter",
        "info": "pmpro_order_discount_code",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_order_list_csv_dateformat", "data": [
      {
        "title": "pmpro_order_list_csv_dateformat",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_order_list_csv_dateformat/",
        "form": "pmpro_order_list_csv_dateformat",
        "type": "Filter",
        "info": "pmpro_order_list_csv_dateformat",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_order_list_csv_default_columns", "data": [
      {
        "title": "pmpro_order_list_csv_default_columns",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_order_list_csv_default_columns/",
        "form": "pmpro_order_list_csv_default_columns",
        "type": "Filter",
        "info": "pmpro_order_list_csv_default_columns",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_order_list_csv_export_header_array", "data": [
      {
        "title": "pmpro_order_list_csv_export_header_array",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_order_list_csv_export_header_array/",
        "form": "pmpro_order_list_csv_export_header_array",
        "type": "Filter",
        "info": "pmpro_order_list_csv_export_header_array",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_order_list_csv_export_tmp_dir", "data": [
      {
        "title": "pmpro_order_list_csv_export_tmp_dir",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_order_list_csv_export_tmp_dir/",
        "form": "pmpro_order_list_csv_export_tmp_dir",
        "type": "Filter",
        "info": "pmpro_order_list_csv_export_tmp_dir",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_order_list_csv_extra_columns", "data": [
      {
        "title": "pmpro_order_list_csv_extra_columns",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_order_list_csv_extra_columns/",
        "form": "pmpro_order_list_csv_extra_columns",
        "type": "Filter",
        "info": "pmpro_order_list_csv_extra_columns",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_order_statuses", "data": [
      {
        "title": "pmpro_order_statuses",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_order_statuses/",
        "form": "pmpro_order_statuses",
        "type": "Filter",
        "info": "Filters the list of statuses which can be applied to an order using the 'Status” select menu when editing or adding a new order. Passes an array of statuses",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_pages_custom_template_path", "data": [
      {
        "title": "pmpro_pages_custom_template_path",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_pages_custom_template_path/",
        "form": "pmpro_pages_custom_template_path",
        "type": "Filter",
        "info": "Add additional template directories to search when loading page templates. The hook should return an array of directory strings. Elements at the end of the array are search first. Elements at the start of the array will be searched last. The default locations searched are (in order): * /wp-content/themes/{your-theme}/paid-memberships-pro/pages/ * /wp-content/themes/{your-parent-theme}/paid-memberships-pro/pages/ * /wp-content/plugins/paid-memberships-pro/pages/",
        "version": "",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_pages_shortcode_ . $pmpro_page_name", "data": [
      {
        "title": "pmpro_pages_shortcode_ . $pmpro_page_name",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_pages_shortcode_ . $pmpro_page_name/",
        "form": "pmpro_pages_shortcode_ . $pmpro_page_name",
        "type": "Filter",
        "info": "pmpro_pages_shortcode_ . $pmpro_page_name",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_pages_shortcode_checkout", "data": [
      {
        "title": "pmpro_pages_shortcode_checkout",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_pages_shortcode_checkout/",
        "form": "pmpro_pages_shortcode_checkout",
        "type": "Filter",
        "info": "pmpro_pages_shortcode_checkout",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_pages_shortcode_{pagename}", "data": [
      {
        "title": "pmpro_pages_shortcode_{pagename}",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_pages_shortcode_{pagename}/",
        "form": "pmpro_pages_shortcode_{pagename}",
        "type": "Filter",
        "info": "Filters the HTML content generated by the PMPro page shortcodes such as [pmpro_checkout]. This can be used to create custom page templates in a customizations plugin as described here. The pages are 'account”, 'billing”, 'cancel”, 'checkout”, 'confirmation”, and 'levels”",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_payflow_authorize_nvpstr", "data": [
      {
        "title": "pmpro_payflow_authorize_nvpstr",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_payflow_authorize_nvpstr/",
        "form": "pmpro_payflow_authorize_nvpstr",
        "type": "Filter",
        "info": "pmpro_payflow_authorize_nvpstr",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_payflow_cancel_nvpstr", "data": [
      {
        "title": "pmpro_payflow_cancel_nvpstr",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_payflow_cancel_nvpstr/",
        "form": "pmpro_payflow_cancel_nvpstr",
        "type": "Filter",
        "info": "pmpro_payflow_cancel_nvpstr",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_payflow_charge_nvpstr", "data": [
      {
        "title": "pmpro_payflow_charge_nvpstr",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_payflow_charge_nvpstr/",
        "form": "pmpro_payflow_charge_nvpstr",
        "type": "Filter",
        "info": "pmpro_payflow_charge_nvpstr",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_payflow_subscribe_nvpstr", "data": [
      {
        "title": "pmpro_payflow_subscribe_nvpstr",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_payflow_subscribe_nvpstr/",
        "form": "pmpro_payflow_subscribe_nvpstr",
        "type": "Filter",
        "info": "pmpro_payflow_subscribe_nvpstr",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_payflow_update_nvpstr", "data": [
      {
        "title": "pmpro_payflow_update_nvpstr",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_payflow_update_nvpstr/",
        "form": "pmpro_payflow_update_nvpstr",
        "type": "Filter",
        "info": "pmpro_payflow_update_nvpstr",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_payflow_void_nvpstr", "data": [
      {
        "title": "pmpro_payflow_void_nvpstr",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_payflow_void_nvpstr/",
        "form": "pmpro_payflow_void_nvpstr",
        "type": "Filter",
        "info": "pmpro_payflow_void_nvpstr",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_payment_options", "data": [
      {
        "title": "pmpro_payment_options",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_payment_options/",
        "form": "pmpro_payment_options",
        "type": "Filter",
        "info": "pmpro_payment_options",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_paypal_account_optional", "data": [
      {
        "title": "pmpro_paypal_account_optional",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_paypal_account_optional/",
        "form": "pmpro_paypal_account_optional",
        "type": "Filter",
        "info": "pmpro_paypal_account_optional",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_paypal_button_image", "data": [
      {
        "title": "pmpro_paypal_button_image",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_paypal_button_image/",
        "form": "pmpro_paypal_button_image",
        "type": "Filter",
        "info": "Change the URL of the image used for the PayPal button",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_paypal_express_return_url_parameters", "data": [
      {
        "title": "pmpro_paypal_express_return_url_parameters",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_paypal_express_return_url_parameters/",
        "form": "pmpro_paypal_express_return_url_parameters",
        "type": "Filter",
        "info": "Filter parameters to the ReturnURL when checking out with PayPal Express. Returns an array of key, value pairs. { return array('option” => '1”); }",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_paypal_level_description", "data": [
      {
        "title": "pmpro_paypal_level_description",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_paypal_level_description/",
        "form": "pmpro_paypal_level_description",
        "type": "Filter",
        "info": "pmpro_paypal_level_description",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_paypal_standard_nvpstr", "data": [
      {
        "title": "pmpro_paypal_standard_nvpstr",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_paypal_standard_nvpstr/",
        "form": "pmpro_paypal_standard_nvpstr",
        "type": "Filter",
        "info": "Change or add parameters to an name-value-pair string sent to PayPal in a couple cases. Passes the nvpString and order object",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_processing_message", "data": [
      {
        "title": "pmpro_processing_message",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_processing_message/",
        "form": "pmpro_processing_message",
        "type": "Filter",
        "info": "Filters the HTML content shown when the submit button is clicked on the checkout page. Passes a text string by default, but can be used to pass new HTML code as well",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_profile_show_expiration", "data": [
      {
        "title": "pmpro_profile_show_expiration",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_profile_show_expiration/",
        "form": "pmpro_profile_show_expiration",
        "type": "Filter",
        "info": "Controls whether to show the Expiration Date section on a user’s profile page",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_profile_show_membership_level", "data": [
      {
        "title": "pmpro_profile_show_membership_level",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_profile_show_membership_level/",
        "form": "pmpro_profile_show_membership_level",
        "type": "Filter",
        "info": "Controls whether or not to show the Membership Level section on a user’s profile page",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_profile_start_date", "data": [
      {
        "title": "pmpro_profile_start_date",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_profile_start_date/",
        "form": "pmpro_profile_start_date",
        "type": "Filter",
        "info": "Filters the start date of a membership sent to the payment gateway. Can be used to create variable-length trials. Passes the start date and order object",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_random_code", "data": [
      {
        "title": "pmpro_random_code",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_random_code/",
        "form": "pmpro_random_code",
        "type": "Filter",
        "info": "Filters how random codes are generated for invoices, discount codes, etc. Passes the code and order object",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_recaptcha_lang", "data": [
      {
        "title": "pmpro_recaptcha_lang",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_recaptcha_lang/",
        "form": "pmpro_recaptcha_lang",
        "type": "Filter",
        "info": "pmpro_recaptcha_lang",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_register_redirect", "data": [
      {
        "title": "pmpro_register_redirect",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_register_redirect/",
        "form": "pmpro_register_redirect",
        "type": "Filter",
        "info": "Filters the URL PMPro redirects wp-login.php?action=register to. Returning false or an empty string will result in no redirect from the register page",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_registration_checks", "data": [
      {
        "title": "pmpro_registration_checks",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_registration_checks/",
        "form": "pmpro_registration_checks",
        "type": "Filter",
        "info": "Executes custom code which runs after the order has passed validation, before the registration is continued. Can be used to add custom validation",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_reports_get_cancellations_sql", "data": [
      {
        "title": "pmpro_reports_get_cancellations_sql",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_reports_get_cancellations_sql/",
        "form": "pmpro_reports_get_cancellations_sql",
        "type": "Filter",
        "info": "pmpro_reports_get_cancellations_sql",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_reports_signups_sql", "data": [
      {
        "title": "pmpro_reports_signups_sql",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_reports_signups_sql/",
        "form": "pmpro_reports_signups_sql",
        "type": "Filter",
        "info": "pmpro_reports_signups_sql",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_required_billing_fields", "data": [
      {
        "title": "pmpro_required_billing_fields",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_required_billing_fields/",
        "form": "pmpro_required_billing_fields",
        "type": "Filter",
        "info": "Filters the required fields for the Billing Address section on the checkout page. Passes the array of field names",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_required_user_fields", "data": [
      {
        "title": "pmpro_required_user_fields",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_required_user_fields/",
        "form": "pmpro_required_user_fields",
        "type": "Filter",
        "info": "Filters the required fields for the Account Information section on the checkout page. Passes the array of field names",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_require_javascript_for_checkout", "data": [
      {
        "title": "pmpro_require_javascript_for_checkout",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_require_javascript_for_checkout/",
        "form": "pmpro_require_javascript_for_checkout",
        "type": "Filter",
        "info": "pmpro_require_javascript_for_checkout",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_rss_text_filter", "data": [
      {
        "title": "pmpro_rss_text_filter",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_rss_text_filter/",
        "form": "pmpro_rss_text_filter",
        "type": "Filter",
        "info": "Filters the message displayed when the post is viewed by in an RSS feed. By default, this is set to display the text configured on the Memberships > Advanced Settings page",
        "version": "",
        "source": "PMPro"
      }
    ] },

    { "value": "pmpro_search_filter_post_types", "data": [
      {
        "title": "pmpro_search_filter_post_types",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_search_filter_post_types/",
        "form": "pmpro_search_filter_post_types",
        "type": "Filter",
        "info": "Allows you to add additional post types to the Memberships > Advanced Settings > Filter Searches and Archives? functionality. apply_filters( 'pmpro_search_filter_post_types', array $post_types );",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_send_checkout_emails", "data": [
      {
        "title": "pmpro_send_checkout_emails",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_send_checkout_emails/",
        "form": "pmpro_send_checkout_emails",
        "type": "Filter",
        "info": "pmpro_send_checkout_emails",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_send_credit_card_expiring_email", "data": [
      {
        "title": "pmpro_send_credit_card_expiring_email",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_send_credit_card_expiring_email/",
        "form": "pmpro_send_credit_card_expiring_email",
        "type": "Filter",
        "info": "pmpro_send_credit_card_expiring_email",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_send_expiration_email", "data": [
      {
        "title": "pmpro_send_expiration_email",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_send_expiration_email/",
        "form": "pmpro_send_expiration_email",
        "type": "Filter",
        "info": "Controls whether or not to send membership level expiration emails. Passes the boolean true or false and the user ID",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_send_expiration_warning_email", "data": [
      {
        "title": "pmpro_send_expiration_warning_email",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_send_expiration_warning_email/",
        "form": "pmpro_send_expiration_warning_email",
        "type": "Filter",
        "info": "Controls whether or not to send membership level expiration warning emails. Passes the boolean true or false and the user ID",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_send_trial_ending_email", "data": [
      {
        "title": "pmpro_send_trial_ending_email",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_send_trial_ending_email/",
        "form": "pmpro_send_trial_ending_email",
        "type": "Filter",
        "info": "Controls whether or not to send membership level trial ending emails. Passes the boolean true or false and the user ID",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_setup_new_user", "data": [
      {
        "title": "pmpro_setup_new_user",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_setup_new_user/",
        "form": "pmpro_setup_new_user",
        "type": "Filter",
        "info": "pmpro_setup_new_user",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_set_express_checkout_nvpstr", "data": [
      {
        "title": "pmpro_set_express_checkout_nvpstr",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_set_express_checkout_nvpstr/",
        "form": "pmpro_set_express_checkout_nvpstr",
        "type": "Filter",
        "info": "Change or add parameters to an name-value-pair string sent to PayPal in a couple cases. Passes the nvpString and order object",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_set_max_orders_per_export_loop", "data": [
      {
        "title": "pmpro_set_max_orders_per_export_loop",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_set_max_orders_per_export_loop/",
        "form": "pmpro_set_max_orders_per_export_loop",
        "type": "Filter",
        "info": "pmpro_set_max_orders_per_export_loop",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_set_max_user_per_export_loop", "data": [
      {
        "title": "pmpro_set_max_user_per_export_loop",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_set_max_user_per_export_loop/",
        "form": "pmpro_set_max_user_per_export_loop",
        "type": "Filter",
        "info": "pmpro_set_max_user_per_export_loop",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_set_message", "data": [
      {
        "title": "pmpro_set_message",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_set_message/",
        "form": "pmpro_set_message",
        "type": "Filter",
        "info": "pmpro_set_message",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_show_cvv", "data": [
      {
        "title": "pmpro_show_cvv",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_show_cvv/",
        "form": "pmpro_show_cvv",
        "type": "Filter",
        "info": "Controls whether to show the CVV field on the billing and checkout pages",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_show_discount_code", "data": [
      {
        "title": "pmpro_show_discount_code",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_show_discount_code/",
        "form": "pmpro_show_discount_code",
        "type": "Filter",
        "info": "Controls whether or not to show the 'Apply Discount Code” field at checkout. By default, this field is only shown when there is a discount code which applies to this level",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_skip_account_fields", "data": [
      {
        "title": "pmpro_skip_account_fields",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_skip_account_fields/",
        "form": "pmpro_skip_account_fields",
        "type": "Filter",
        "info": "This filter is used to determine if the username/password account fields should show up at checkout. By default, it is shown when the user is logged out and not shown when logged in. The hook allows you to return true or false to override this behavior. If the fields are skipped while no user is logged in a username and password will be automatically generated for the new user after checkout",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro states", "data": [
      {
        "title": "pmpro_states",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_states/",
        "form": "pmpro_states",
        "type": "Filter",
        "info": "Filters the default Array of states when not using the international version (basic text field) on the checkout page",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_states_abbreviations", "data": [
      {
        "title": "pmpro_states_abbreviations",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_states_abbreviations/",
        "form": "pmpro_states_abbreviations",
        "type": "Filter",
        "info": "Added pmpro_state_dropdowns filter. If you return true, the state field will become a dropdown with US states. Use the pmpro_states and pmpro_states_abbreviations filters to change the array of states used",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_state_dropdowns", "data": [
      {
        "title": "pmpro_state_dropdowns",
        "link": "https://www.paidmembershipspro.com/hook//",
        "form": "pmpro_state_dropdowns",
        "type": "Filter",
        "info": "Controls whether or not to use the international form of the State field. If set to true, state field will become a select menu with a list of US state abbreviations. Use pmpro_states to modify the array of state abbreviations used",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_stripe_create_customer", "data": [
      {
        "title": "pmpro_stripe_create_customer",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_stripe_create_customer/",
        "form": "pmpro_stripe_create_customer",
        "type": "Filter",
        "info": "pmpro_stripe_create_customer",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_stripe_create_plan_array", "data": [
      {
        "title": "pmpro_stripe_create_plan_array",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_stripe_create_plan_array/",
        "form": "pmpro_stripe_create_plan_array",
        "type": "Filter",
        "info": "pmpro_stripe_create_plan_array",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_stripe_create_subscription_array", "data": [
      {
        "title": "pmpro_stripe_create_subscription_array",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_stripe_create_subscription_array/",
        "form": "pmpro_stripe_create_subscription_array",
        "type": "Filter",
        "info": "Filter the subscription array sent to Stripe when creating a subscription",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_stripe_lite", "data": [
      {
        "title": "pmpro_stripe_lite",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_stripe_lite/",
        "form": "pmpro_stripe_lite",
        "type": "Filter",
        "info": "Controls whether to enable Stripe Lite, which only shows minimal Billing Fields (no address fields, no card type). Overrides 'Show Billing Address Fields” in Memberships > Payment Settings",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_stripe_order_description", "data": [
      {
        "title": "pmpro_stripe_order_description",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_stripe_order_description/",
        "form": "pmpro_stripe_order_description",
        "type": "Filter",
        "info": "Filters the 'description” value passed to the charge on the initial payment in Stripe",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_stripe Billing Address fields at checkout", "data": [
      {
        "title": "pmpro_stripe_verify_address",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_stripe_verify_address/",
        "form": "pmpro_stripe_verify_address",
        "type": "Filter",
        "info": "Controls whether to verify the Billing Address fields at checkout when using the Stripe payment gateway",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_subscribe_order", "data": [
      {
        "title": "pmpro_subscribe_order",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_subscribe_order/",
        "form": "pmpro_subscribe_order",
        "type": "Filter",
        "info": "Modify the MemberOrder object before actually creating a subscription in the payment gateway. This passes the MemberOrder obejct and PMProGateway object. apply_filters('pmpro_subscribe_order', MemberOrder $order, $this);apply_filters('pmpro_subscribe_order', MemberOrder $order, $this);",
        "version": "",
        "source": "PMPro"
    }
    ] },
    { "value": "pmpro_support_url", "data": [
      {
        "title": "pmpro_support_url",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_support_url/",
        "form": "pmpro_support_url",
        "type": "Filter",
        "info": "pmpro_support_url",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_tax", "data": [
      {
        "title": "pmpro_tax",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_tax/",
        "form": "pmpro_tax",
        "type": "Filter",
        "info": "Modifies the tax associated with an order. Passes the tax amount, an array of values such as the price of the order and more, and the MemberOrder object",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_twocheckout_ptpstr", "data": [
      {
        "title": "pmpro_twocheckout_ptpstr",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_twocheckout_ptpstr/",
        "form": "pmpro_twocheckout_ptpstr",
        "type": "Filter",
        "info": "For TwoCheckout only. Modifies the entire query string passed to the TwoCheckout checkout URL",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_twocheckout_return_url_parameters", "data": [
      {
        "title": "pmpro_twocheckout_return_url_parameters",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_twocheckout_return_url_parameters/",
        "form": "pmpro_twocheckout_return_url_parameters",
        "type": "Filter",
        "info": "For TwoCheckout only. Add additional parameteres to the TwoCheckout checkout URL in the form of an array of arrays of name-value pairs with the format array('name' => 'value')",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_twocheckout two checkout validate", "data": [
      {
        "title": "pmpro_twocheckout_validate",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_twocheckout_validate/",
        "form": "apply_filters(\"pmpro_twocheckout_validate\", $message);",
        "type": "Filter",
        "info": "pmpro_twocheckout_validate",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_valid gateways", "data": [
      {
        "title": "pmpro_valid_gateways",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_valid_gateways/",
        "form": "pmpro_valid_gateways",
        "type": "Filter",
        "info": "Modifies the list of valid gateways used by PMPro. By default, it returns the gateway set in Memberships > Payment Settings in the WordPress Dashboard",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_new user notification", "data": [
      {
        "title": "pmpro_wp_new_user_notification",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_wp_new_user_notification/",
        "form": "pmpro_wp_new_user_notification",
        "type": "Filter",
        "info": "Controls whether to send the default WordPress new user notifications when a user is created at checkout. By default, this is set to false",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "pmpro_{$type}_custom_template_path", "data": [
      {
        "title": "pmpro_{$type}_custom_template_path",
        "link": "https://www.paidmembershipspro.com/hook/pmpro_{$type}_custom_template_path/",
        "form": "apply_filters(\"pmpro_{$type}_custom_template_path\", $message);",
        "type": "Filter",
        "info": "pmpro_{$type}_custom_template_path",
        "version": "",
        "source": "PMPro"
      }
    ] },
    { "value": "replace spaces with dashes hyphens sanitize title", "data": [
          { 
        "title": "Sanitize Title",
        "link": "https://www.paidmembershipspro.com/hook/the_content/",
        "form": "apply_filters(\"the_content\", $message);",
        "type": "Filter",
        "info": "This filter is the same as the WordPress core filter.",
        "version": "",
        "source": "PMPro"
          }
      ] }
];
  
  // setup autocomplete function pulling from wpfunctions[] array
  $('#autocomplete').autocomplete({
    lookup: wpfunctions,
    onSelect: function (suggestion) {
        $.each(suggestion.data, function(k, v) {
            thedata = '<strong>Concept:</strong> ' + v.title + '<br><strong>Form:</strong> <a href="' + v.link + '" target="_blank">' + v.form + '</a><br><strong>Info:</strong> ' + v.info + ' <br><strong>Type:</strong> ' + v.type + ' <strong>Source:</strong> ' + v.source + '<br>';
        });
      var thehtml = thedata + ' <strong>search terms:</strong> ' + suggestion.value+ ' <br>';
      $('#outputcontent').html(thehtml).css({"text-align":"left"});
      $('#instructions').hide();
    }
  });
});
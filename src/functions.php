<?php
// enqueue theme custom.js
if ( !function_exists('[CODE_PREFIX]_custom_scripts') ) {
  function [CODE_PREFIX]_custom_scripts() {
    wp_register_script( '[CODE_PREFIX]_custom_js', get_stylesheet_directory_uri() . '/js/custom.js', array('jquery'), false, true );
    wp_enqueue_script( '[CODE_PREFIX]_custom_js' );
  }
  add_action( 'wp_enqueue_scripts', '[CODE_PREFIX]_custom_scripts' );
}

// remove project divi custom post type
if ( !function_exists('[CODE_PREFIX]_et_project_posttype_args') ) {
  function [CODE_PREFIX]_et_project_posttype_args( $args ) {
  	return array_merge( $args, array(
  		'public'              => false,
  		'exclude_from_search' => false,
  		'publicly_queryable'  => false,
  		'show_in_nav_menus'   => false,
  		'show_ui'             => false
  	));
  }
  add_filter( 'et_project_posttype_args', '[CODE_PREFIX]_et_project_posttype_args', 10, 1 );
}

// login url set to site
if ( !function_exists('[CODE_PREFIX]_custom_login_url') ) {
  function [CODE_PREFIX]_custom_login_url($url) {
    return site_url();
  }
  add_filter( 'login_headerurl', '[CODE_PREFIX]_custom_login_url' );
}

// login logo set to theme logo
if ( !function_exists('[CODE_PREFIX]_login_logo') ) {
  function [CODE_PREFIX]_login_logo() {
    $logo = ( $user_logo = et_get_option( 'divi_logo' ) ) && ! empty( $user_logo ) ? $user_logo : get_admin_url() . 'images/wordpress-logo.svg';
?>
<style type="text/css">
  body.login div#login h1 a {
    background-image: url(<?php echo $logo; ?>);
    background-size: contain;
    width: 100%;
    height: 100px;
  }
</style>
<?php
  }
  add_action( 'login_enqueue_scripts', '[CODE_PREFIX]_login_logo' );
}

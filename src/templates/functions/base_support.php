<?php
if (!function_exists('base_theme_support')) :
  function base_theme_support()
  {
    if (function_exists('add_theme_support')) {
      add_theme_support('automatic-feed-links');
      add_theme_support('custom-logo');
      add_theme_support('menus');
      add_theme_support('post-thumbnails');
      add_theme_support('wp-block-styles');
    }
    load_theme_textdomain('lang_support', get_template_directory() . '/languages');
    add_editor_style('assets/app.css');
    add_image_size('xlarge', 1600, '');
    add_image_size('xxlarge', 1920, '');

    add_theme_support('wp-block-styles');
    add_editor_style('assets/app.css');
  }
  add_action('after_setup_theme', 'base_theme_support');
endif;

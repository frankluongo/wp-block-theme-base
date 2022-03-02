<?php
if (!function_exists('base_theme_support')) :
  function base_theme_support()
  {
    add_theme_support('wp-block-styles');
    add_editor_style('assets/app.css');
  }
  add_action('after_setup_theme', 'base_theme_support');
endif;

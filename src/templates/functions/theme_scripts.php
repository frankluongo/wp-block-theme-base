<?php
function theme_scripts()
{
  wp_enqueue_style('app', get_template_directory_uri() . '/assets/app.css', array(), wp_get_theme()->get('Version'));
  wp_enqueue_script('app', get_template_directory_uri() . '/assets/app.js');
}

add_action('wp_enqueue_scripts', 'theme_scripts');

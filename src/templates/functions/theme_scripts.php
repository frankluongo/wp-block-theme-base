<?php
function theme_scripts()
{
  wp_enqueue_style('appStyle', get_template_directory_uri() . 'assets/app.css', array(), wp_get_theme()->get('Version'));
}

add_action('wp_enqueue_scripts', 'theme_scripts');

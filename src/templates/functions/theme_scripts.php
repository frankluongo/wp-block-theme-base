<?php
function theme_scripts()
{
  wp_enqueue_style('app', get_template_directory_uri() . '/assets/app.css', array(), wp_get_theme()->get('Version'));
  wp_enqueue_script('app', get_template_directory_uri() . '/assets/app.js');
}

function admin_scripts()
{
  wp_enqueue_style('admin', get_template_directory_uri() . '/assets/admin.css', array(), wp_get_theme()->get('Version'));
}

function editor_scripts()
{
  add_editor_style('/assets/editor.css');
}

add_action('admin_enqueue_scripts', 'admin_scripts');
add_action('admin_init', 'editor_scripts');
add_action('wp_enqueue_scripts', 'theme_scripts');

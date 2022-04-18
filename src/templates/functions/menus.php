<?php

function add_custom_menus()
{
  register_nav_menus(
    array(
      'main-nav' => __('Main Navigation'),
      'secondary-nav' => __('Secondary Navigation'),
    )
  );
}

add_action('init', 'add_custom_menus');

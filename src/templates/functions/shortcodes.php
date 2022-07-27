<?php

// * ShortCode Functions:
// =======================================================================

function copyright()
{
  return '&copy; ' . date("Y");
}

// function looper($name)
// {
//   ob_start();
//   get_template_part("loop", $name);
//   return ob_get_clean();
// }

// function team_members_loop_fn()
// {
//   return looper("team-members");
// }

// function portfolio_loop_fn()
// {
//   return looper("portfolio");
// }
// function current_listings_loop_fn()
// {
//   return looper("current-listings");
// }

// * Adding ShortCodes
// =======================================================================

add_shortcode('copyright', 'copyright');
// add_shortcode('current_listings_loop', 'current_listings_loop_fn');
// add_shortcode('portfolio_loop', 'portfolio_loop_fn');
// add_shortcode('team_members_loop', 'team_members_loop_fn');
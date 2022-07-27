<?php

add_action("wp_ajax_test", "test");
add_action('wp_ajax_nopriv_test', 'test');

function test()
{
  // $url = $_POST["url"];
  // $formFields = $_POST["fields"];
  // $fields = array();
  // foreach ($formFields as $key => $value) {
  //   $fields["fields[$key]"] = sanitize_text_field($value);
  // }
  // # Create a connection
  // $ch = curl_init($url);
  // # Form data string
  // $postString = http_build_query($fields, '', '&');
  // # Setting our options
  // curl_setopt($ch, CURLOPT_POST, 1);
  // curl_setopt($ch, CURLOPT_POSTFIELDS, $postString);
  // curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  // # Get the response
  // $response = curl_exec($ch);
  // curl_close($ch);
  // if ($response === false) {
  //   echo json_encode(array(
  //     "status" => "failure"
  //   ));
  // } else {
  //   echo json_encode(array(
  //     "status" => "success"
  //   ));
  // }
  echo json_encode(array(
    "status" => "success"
  ));
  wp_die();
}

<?php

function console_log($data)
{
  echo '<script>';
  echo 'console.log(' . json_encode($data) . ')';
  echo '</script>';
}

function stringify_data($data)
{
  echo json_encode($data);
}

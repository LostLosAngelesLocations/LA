<?php
$curDir = dirname(__FILE__);
$images = glob($curDir . DIRECTORY_SEPARATOR . 'images' . DIRECTORY_SEPARATOR . 'art' . DIRECTORY_SEPARATOR . '*.{jpeg,jpg,gif,png}', GLOB_BRACE);

foreach ($images as $key => $val) {
    $images[$key] = str_replace($curDir . DIRECTORY_SEPARATOR, '', $val);
}

echo json_encode($images);

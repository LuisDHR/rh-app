<?php
header('Access-Control-Allow-Origin', '*');
include './lib_php/Connection.php';

$connection = new Connection();

$data = $connection->getUsers( '/' );

$users = [
    "Code" => $data->getCode(),
    "Message" => $data->getMessage(),
    "Data" => $data->getData(),
    "Status" => $data->getStatus()
];

echo json_encode($users);
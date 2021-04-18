<?php
header('Access-Control-Allow-Origin', '*');
include './lib_php/Connection.php';

$conecction = new Conecction();

$data = $conecction->getUsers('/');

$users = [
    "Code" => $data->getCode(),
    "Message" => $data->getMessage(),
    "Data" => $data->getData(),
    "Status" => $data->getStatus()
];

// $users = [
//     "Code" => "600",
//     "Message" => "Listado usuario exitoso",
//     "Data" => [
//         "JOSE",
//         "JOSECARLOS",
//         "jose",
//         "pruebas1",
//         "pruebas2",
//         "pruebas3",
//         "pruebas5"
//     ],
//     "Status" => "Successfully"
// ];

echo json_encode($users);
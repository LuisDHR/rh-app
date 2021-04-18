<?php
header('Access-Control-Allow-Origin', '*');

$user = $_POST[ 'user' ];
$pass = $_POST[ 'pass' ];
$searchedUser = $_POST[ 'searchedUser' ];
$correo = $_POST[ 'correo' ];
$nombre = $_POST[ 'nombre' ];
$rol = $_POST[ 'rol' ];
$telefono = $_POST[ 'telefono' ];

$res = [
    "Code" => "506",
    "Message" => "Los DATOS de usuario no existen.",
    "Data" => "",
    "Status" => "Error",
    "user" => $user,
    "newUser" => $newUser
];

echo json_encode($res);
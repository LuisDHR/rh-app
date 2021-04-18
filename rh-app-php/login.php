<?php
$res_500 = [
    "Code" => "500",
    "Message" => "Usuario no reconocido.",
    "Data" => 
        [
            "Correo" => null,
            "Nombre" => null,
            "Rol" => null,
            "Telefono" => null
        ],
    "Status" => "Error"
];

$res_501 = [
    "Code" => "501",
    "Message" => "Password no reconcido.",
    "Data" => 
        [
            "Correo" => null,
            "Nombre" => null,
            "Rol" => null,
            "Telefono" => null
        ],
    "Status" => "Error"
];

$res_504 = [
    "Code" => "509",
    "Message" => "Rol no válido.",
    "Data" => 
        [
            "Correo" => null,
            "Nombre" => null,
            "Rol" => null,
            "Telefono" => null
        ],
    "Status" => "Error"
];

$res_602 = [
    "Code" => "602",
    "Message" => "Obtener lista de información de todos usuarios.",
    "Data" => 
        [
            "Correo" => "correo@ejemplo.com",
            "Nombre" => "Julia",
            "Rol" => "rh",
            "Telefono" => "222-444-6688"
        ],
    "Status" => "Succes"
];

$user = $_GET['user'];
$pass = $_GET['pass'];

if ( $user == 'LuisX' ) {
    echo json_encode($res_500);
}
elseif ( $pass == '1234' ) {
    echo json_encode($res_501);
}
elseif ( $user == 'pruebas1' ) {
    echo json_encode($res_504);
}
elseif ( $user == 'pruebas3' && $pass == '12345678c' ) {
    echo json_encode($res_602);
}
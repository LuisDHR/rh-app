<?php
header('Access-Control-Allow-Origin', '*');

$usersInfo = [
    "Code" => "602",
    "Message" => "Obtener lista de información de todos usuarios.",
    "Data" => [
        "JOSE" => [
            "Correo" => "correo@ejemplo",
            "Nombre" => "JOSE",
            "Rol" => "almacen",
            "Telefono" => "2223334466"
        ],
        "jose" => [
            "Correo" => "correo@ejemplo",
            "Nombre" => "Jose",
            "Rol" => "almacen",
            "Telefono" => "2223334455"
        ],
        "pruebas1" => [
            "Correo" => "correo@ejemplo.com",
            "Nombre" => "Luis",
            "Rol" => "ventas",
            "Telefono" => "22-21-10-20-02"
        ],
        "pruebas2" => [
            "Correo" => "correo@ejemplo.com",
            "Nombre" => "Patricia",
            "Rol" => "almacen",
            "Telefono" => "22-23-33-44-55"
        ],
        "pruebas3" => [
            "Correo" => "correo@ejemplo.com",
            "Nombre" => "Julia",
            "Rol" => "rh",
            "Telefono" => "22-24-44-66-88"
        ],
        "pruebas4" => [
            "Correo" => "nuevo_correo@ejemplo.com",
            "Nombre" => "María Huerta",
            "Rol" => "ventas",
            "Telefono" => "22-22-10-20-02"
        ],
        "pruebas5" => [
            "Correo" => "correo@ejemplo.com",
            "Nombre" => "Patricia Romero",
            "Rol" => "almacen",
            "Telefono" => "22-23-33-44-55"
        ]
    ],
    "Status" => "Succes"
];

echo json_encode($usersInfo);
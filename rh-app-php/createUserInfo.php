<?php
include './lib_php/Connection.php';

header('Access-Control-Allow-Origin: *');


if ( !empty( $_POST[ 'user' ] ) &&
     !empty( $_POST[ 'pass' ] ) &&
     !empty( $_POST[ 'searchedUser' ] ) &&
     !empty( $_POST[ 'correo' ] ) &&
     !empty( $_POST[ 'nombre' ] ) &&
     !empty( $_POST[ 'rol' ] ) &&
     !empty( $_POST[ 'telefono' ] ) )
{
    $user = $_POST[ 'user' ];
    $pass = $_POST[ 'pass' ];
    $searchedUser = $_POST[ 'searchedUser' ];
    
    $correo = $_POST[ 'correo' ];
    $nombre = $_POST[ 'nombre' ];
    $rol = $_POST[ 'rol' ];
    $telefono = $_POST[ 'telefono' ];
    $userInfoJSON = [
        'correo' => $correo,
        'nombre' => $nombre,
        'rol' => $rol,
        'telefono' => $telefono
    ];
    $userInfoJSON = json_encode($userInfoJSON);

    // echo $userInfoJSON;

    $connection = new Connection();
    $data = $connection->setUserInfo($user, $pass, $searchedUser, $userInfoJSON);

    $res = [
        "Code" => $data->getCode(),
        "Message" => $data->getMessage(),
        "Data" => $data->getData(),
        "Status" => $data->getStatus()
    ];

    echo json_encode( $res );
}
else
{
    $res = [
        "Code" => "999",
        "Message" => "Error no identificado.",
        "Data" => "",
        "Status" => "Error"
    ];

    echo json_encode( $res );
}

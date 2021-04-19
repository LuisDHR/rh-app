<?php
include './lib_php/Connection.php';

header('Access-Control-Allow-Origin: *');

if ( !empty( $_POST[ 'user' ] ) &&
     !empty( $_POST[ 'pass' ] ) &&
     !empty( $_POST[ 'newUser' ] ) &&
     !empty( $_POST[ 'newPass' ] ) )
{
    $user = $_POST[ 'user' ];
    $pass = $_POST[ 'pass' ];
    $newUser = $_POST[ 'newUser' ];
    $newPass = $_POST[ 'newPass' ];

    $connection = new Connection();
    $data = $connection->setUser( $user, $pass, $newUser, $newPass );

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
<?php
include './lib_php/Connection.php';

if ( !empty( $_GET[ 'user' ] ) &&
     !empty( $_GET[ 'pass' ] ) )
{
    $user = $_GET[ 'user' ];
    $pass = $_GET[ 'pass' ];

    $connection = new Connection();
    $data = $connection->getDetailsUserInfo( $user, $pass );

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
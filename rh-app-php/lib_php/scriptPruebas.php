<?php 

include 'Connection.php';

$conecction = new Conecction();

// print_r("set USER");
// print_r($conecction->setUser("pruebas1", "87654321a", "JOSECARLOS", "asd"));
// echo '<br />';

// print_r("update USER");
// print_r($conecction->update("pruebas1", "87654321a", "jose", "jose", "12345678a"));
// echo '<br />';

print_r("get USER");
// print_r($conecction->getUsers("/"));
$data = $conecction->getUsers('/');
print_r($data);
echo '<br />';
echo $data->getCode();
echo '<br />';
echo json_encode($data->getData());
print_r($data->getData());
echo '<br />';

print_r("get DETAILS USER");
print_r($conecction->getDetailsUser("pruebas1"));
echo '<br />';
?>
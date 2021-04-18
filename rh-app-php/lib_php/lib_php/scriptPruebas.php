<?php
include 'Connection.php';

$conecction = new Conecction();

print_r("set USER");
print_r($conecction->setUser("pruebas1", "87654321a", "JOSECARLOS", "asd"));
echo '<br />';
echo '<br />';

print_r("update USER");
$res = $conecction->update("pruebas1", "87654321a", "jose", "jose", "12345678a");
print_r($res);
echo '<br />';

print_r("get USER");
$resGet = $conecction->getUsers("/");
// print_r($resGet);
echo json_decode($resGet, true);
echo '<br />';

print_r("get DETAILS USER");
print_r($conecction->getDetailsUser("pruebas1"));
echo '<br />';
?>
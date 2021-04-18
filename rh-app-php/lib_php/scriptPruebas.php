<?php 

include 'Connection.php';

$conecction = new Conecction();


print_r("set USER");
print_r($conecction->setUser("pruebas1", "87654321a", "JOSECARLOS", "asd"));

print_r("update USER");
print_r($conecction->update("pruebas1", "87654321a", "jose", "jose", "12345678a"));

print_r("get USER");
print_r($conecction->getUsers("/"));

print_r("get DETAILS USER");
print_r($conecction->getDetailsUser("pruebas1"));

print_r("get SET USER INFO ");
print_r($conecction->setUserInfo("pruebas2", "12345678b",  "jose", "{}"));

print_r("get UPDATE USER INFO ");
print_r($conecction->updateUserInfo("pruebas2", "12345678b",  "jose", "{}"));

print_r("get USERS INFO ");
print_r($conecction->getUsersInfo());
?>
<?php 

include 'Connection.php';

$connection = new Connection();


print_r("set USER");
print_r($connection->setUser("pruebas1", "87654321a", "JOSECARLOS", "asd"));

print_r("update USER");
print_r($connection->updateUser("pruebas1", "87654321a", "jose", "jose", "12345678a"));

print_r("get USER");
print_r($connection->getUsers());

print_r("get DETAILS USER");
print_r($connection->getDetailsUser("pruebas1"));

print_r("get SET USER INFO ");
print_r($connection->setUserInfo("pruebas2", "12345678b",  "jose", "{}"));

print_r("get UPDATE USER INFO ");
print_r($connection->updateUserInfo("pruebas2", "12345678b",  "jose", "{}"));

print_r("get USERS INFO ");
print_r($connection->getUsersInfo());

print_r("LOGIN");
print_r($connection->getDetailsUserInfo($user, $pass));

?>
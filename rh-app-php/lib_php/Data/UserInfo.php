<?php

class UserInfo
{
    private $correo;
    private $nombre;
    private $rol;
    private $telefono;

    public function __construct($_correo, $_nombre, $_rol, $_telefono) {
        $this->correo = $_correo;
        $this->nombre = $_nombre;
        $this->rol = $_rol;
        $this->telefono = $_telefono;
    }

    public function getCorreo()
    {
        return $this->correo;
    }

    public function getNombre()
    {
        return $this->nombre;
    }

    public function getRol()
    {
        return $this->rol;
    }

    public function getTelefono()
    {
        return $this->telefono;
    }
}
 
?>
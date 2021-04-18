<?php

class ResponseUpdateUser extends ResponseAbstract
{ 
    private $data;

    public function __construct($_code, $_messgae, $_data, $_status) {
        parent::__construct($_code, $_messgae, $_status);

        $this->data = $_data;
    }    

    public function getData()
    {
        return $this->$data;
    }
}
 
?>
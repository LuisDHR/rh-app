<?php

class ResponseAbstract
{
    private $code;
    private $message;
    private $status;

    public function __construct($_code, $_messgae, $_status) {
        $this->code = $_code;
        $this->message = $_messgae;
        $this->status = $_status;
    }

    public function getCode()
    {
        return $this->$code;
    }

    public function getMesssage()
    {
        return $this->$message;
    }

    public function getStatus()
    {
        return $this->$status;
    }
}
 
?>
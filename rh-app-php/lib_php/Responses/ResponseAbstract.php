<?php

class ResponseAbstract
{
    private $code;
    private $message;
    private $status;

    public function __construct($_code, $_message, $_status) {
        $this->code = $_code;
        $this->message = $_message;
        $this->status = $_status;
    }

    public function getCode()
    {
        return $this->code;
    }

    public function getMessage()
    {
        return $this->message;
    }

    public function getStatus()
    {
        return $this->status;
    }
}

?>
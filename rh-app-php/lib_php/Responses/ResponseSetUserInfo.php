<?php  

class ResponseSetUserInfo extends ResponseAbstract
{
    private $data;

    public function __construct($_code, $_message, $_data, $_status) {
        parent::__construct($_code, $_message, $_status);

        $this->data = $_data;
    }    

    public function getData()
    {
        return $this->data;
    }
}

?>
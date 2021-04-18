<?php 

include 'Responses/ResponseSetUser.php';
include 'Responses/ResponseUpdateUser.php';
include 'Responses/ResponseGetUsers.php';
include 'Data/UserInfo.php';

class Conecction
{
    private $url;
    
    public function __construct() {  
        $this->url = 'https://localhost:44318/api/User';
    }

    
    public function setUser($user, $pass, $newUser, $newPass)
    {
        $auxURL = $this->url."?user=".$user."&pass=".$pass."&newUser=".$newUser."&newPass=".$newPass;

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $auxURL);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST" );
        curl_setopt($ch, CURLOPT_POST, true);
        // curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: text/plain'));
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

        $response = json_decode(curl_exec($ch), true);
        curl_close($ch);

        $res = new ResponseSetUser(
            $response["Code"],
            $response["Message"],
            $response["Data"],
            $response["Status"],
        );
        
        return $res;
    }

    public function updateUser($user, $pass, $oldUser, $newUser, $newPass)
    {
        $auxURL = $this->url."?user=".$user."&pass=".$pass."&oldUser=".$oldUser."&newUser=".$newUser."&newPass=".$newPass;
        
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $auxURL);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");
        curl_setopt($ch, CURLOPT_PUT, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: text/plain'));
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        
        // $response = curl_exec($ch);
        $response = json_decode(curl_exec($ch), true);
        curl_close($ch);

        $res = new ResponseUpdateUser(
            $response["Code"],
            $response["Message"],
            $response["Data"],
            $response["Status"],
        );

        return $res;
    }
    
    public function getUsers($document)
    {
        $ch =  curl_init();
        curl_setopt($ch, CURLOPT_URL, $this->url.$document);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

        $response = json_decode(curl_exec($ch), true);
        curl_close($ch);

        $res = new ResponseGetUsers(
            $response["Code"],
            $response["Message"],
            $response["Data"],
            $response["Status"],
        );

        return $res;
    }

    public function getDetailsUser($user)
    {
        $ch =  curl_init();
        curl_setopt($ch, CURLOPT_URL, "https://localhost:44318/api/user/?user=pruebas1");
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

        $response = json_decode(curl_exec($ch), true);
        curl_close($ch);

        $res = new UserInfo(
            $response["Correo"],
            $response["Nombre"],
            $response["Rol"],
            $response["Telefono"],
        );

        return $res;
    }
}

?>
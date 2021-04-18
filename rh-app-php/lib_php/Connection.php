<?php 

include 'Responses/ResponseSetUser.php';
include 'Responses/ResponseUpdateUser.php';
include 'Responses/ResponseGetUsers.php';
include 'Responses/ResponseSetUserInfo.php';
include 'Responses/ResponseUpdateUserInfo.php';
include 'Responses/ResponseGetUsersInfo.php';

include 'Data/UserInfo.php';

class Connection
{
    private $url;
    
    public function __construct() {  
        $this->url = 'https://localhost:44318/api';
    }

    
    public function setUser($user, $pass, $newUser, $newPass)
    {
        $auxURL = $this->url."/user?user=".$user."&pass=".$pass."&newUser=".$newUser."&newPass=".$newPass;

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
        $auxURL = $this->url."/user?user=".$user."&pass=".$pass."&oldUser=".$oldUser."&newUser=".$newUser."&newPass=".$newPass;

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $auxURL);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");
        curl_setopt($ch, CURLOPT_PUT, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: text/plain'));
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        
        $response = curl_exec($ch);
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
    
    public function getUsers()
    {
        $auxURL = $this->url."/user";
        $ch =  curl_init();
        curl_setopt($ch, CURLOPT_URL, $auxURL);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

        $response = json_decode(curl_exec($ch), true);
        curl_close($ch);

        $res = new ResponseGesUsers(
            $response["Code"],
            $response["Message"],
            $response["Data"],
            $response["Status"],
        );

        return $res;
    }

    public function getDetailsUser($user)
    {
        $auxURL = $this->url."/user?user=".$user;

        $ch =  curl_init();
        curl_setopt($ch, CURLOPT_URL, $auxURL);
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

    public function setUserInfo($user, $pass, $searchedUser, $userInfoJSON)
    {
        $auxURL = $this->url."/UserInfo?user=".$user."&pass=".$pass."&searchedUser=".$searchedUser."&userInfoJSON=".$userInfoJSON;
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

        $res = new ResponseSetUserInfo(
            $response["Code"],
            $response["Message"],
            $response["Data"],
            $response["Status"],
        );
        
        return $res;
    }

    public function updateUserInfo($user, $pass, $searchedUser, $userInfoJSON)
    {
        $auxURL = $this->url."/UserInfo?user=".$user."&pass=".$pass."&searchedUser=".$searchedUser."&userInfoJSON=".$userInfoJSON;

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $auxURL);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");
        curl_setopt($ch, CURLOPT_PUT, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: text/plain'));
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        
        $response = curl_exec($ch);
        $response = json_decode(curl_exec($ch), true);

        curl_close($ch);

        $res = new ResponseUpdateUserInfo(
            $response["Code"],
            $response["Message"],
            $response["Data"],
            $response["Status"],
        );

        return $res;
    }

    public function getUsersInfo()
    {
        $auxURL =  $this->url."/UserInfo";

        $ch =  curl_init();
        curl_setopt($ch, CURLOPT_URL, $auxURL);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

        $response = json_decode(curl_exec($ch), true);
        curl_close($ch);

        $res = new ResponseGetUsersInfo(
            $response["Code"],
            $response["Message"],
            $response["Data"],
            $response["Status"]
        );

        return $res;
    }

    // Para login
    public function getDetailsUserInfo($user, $pass)
    {
        $auxURL =  $this->url."/UserInfo?user=".$user."&pass=".$pass;

        $ch =  curl_init();
        curl_setopt($ch, CURLOPT_URL, $auxURL);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

        $response = json_decode(curl_exec($ch), true);
        curl_close($ch);

        $res = new ResponseGetUsersInfo(
            $response["Code"],
            $response["Message"],
            $response["Data"],
            $response["Status"]
        );

        return $res;
    }
}

?>
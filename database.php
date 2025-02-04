<?php
$serever = "localhost";
$username = "root";
$password = "";
$dbname = "users";

$con = mysqli_connect($serever,$username,$password,$dbname);

if($con){
    echo "connect";
}
else{
    echo "error";
}
?>
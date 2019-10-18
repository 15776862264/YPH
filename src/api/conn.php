<?php
$htp_name="localhost";
$user_name="root";
$password="";
$db_name="YPH";

$conn =new mysqli($htp_name,$user_name,$password,$db_name);

if($conn->connect_error){
    echo "链接失败";
    return;
}

$conn->query('set names utf8');
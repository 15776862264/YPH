<?php

$user = $_POST['usernames'];
$pass=$_POST['pass'];
include "./conn.php";
// $password=md5($password);

$sql = "
    SELECT `id` FROM `name`
    WHERE `name`.`usernames`='$user' 
";
$ret =$conn->query($sql);

if($ret->num_rows>0){
    echo "用户名已经存在";
} else{
   
    $sql="
    INSERT INTO `name` (`id`, `usernames`,`password`) VALUES (null,'$user','$pass');
    
    ";
    $ret =$conn->query($sql);
    
    if($ret){

        
        echo '注册成功';

    } else{
        echo "注册失败，请重新注册";
    }
}


<?php

$user=$_POST['username'];
$pw=$_POST['pass'];

include "./conn.php";

$sql="
SELECT `id` FROM `name` 

WHERE `name`.`usernames`='$user' AND `name`.`pass`='$pw'
";
$ret =$conn->query($sql);

if($sql=1){
    echo "登录成功";
}else{
    echo "登陆失败";
    
     
}
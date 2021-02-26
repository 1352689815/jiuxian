<?php
header("content-type:text/html;charset=utf-8");
$u=$_GET['username'];
$p=$_GET['password'];
$link=mysqli_connect('localhost','root','','jiuxian');
mysqli_set_charset($link,"utf8");
$sql="select * from users where user='$u' and pwd='$p'";
//执行SQL语句，并返回结果集
$result=mysqli_query($link,$sql);
//判断当前结果集中是否存在数据
if(mysqli_fetch_assoc($result)){
    echo '1';
}else{
    echo '0';
}
//关闭连接
mysqli_close($link);
?>
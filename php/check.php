<?php
header("content-type:text/html;charset=utf-8");
//获取传入的参数
$uname1=$_GET["uname"];
//连接数据库
$link=mysqli_connect("localhost",'root','','jiuxian');
//设置编码
mysqli_set_charset($link,"utf8");
//SQL语句
$sql="select * from users where user='$uname1'";
//执行SQL
$result=mysqli_query($link,$sql);
$row=mysqli_fetch_row($result);
if($row==null){
    echo "0";
}else{
    echo "1";
}
//关闭连接
mysqli_close($link);
?>
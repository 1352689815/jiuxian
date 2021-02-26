<?php
header("content-type:text/html;charset=utf-8");
//获取传入的参数
$uname=$_POST["uname"];
$upwd=$_POST["upwd"];
//连接数据库
$link=mysqli_connect("localhost",'root','','jiuxian');
//设置编码
mysqli_set_charset($link,"utf8");
//SQL语句
$sql="insert into users(user,pwd) values ('$uname','$upwd')";
//执行SQL
$result=mysqli_query($link,$sql);
if($result==true){
    echo "注册成功";
}else{
    echo "注册失败";
}
//关闭连接
mysqli_close($link);
?>
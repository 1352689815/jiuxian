 // 获取checkbox复选框
 var Agr = document.querySelector('.regAgrInput');
 // 获取服务协议div
 var AgreePoint = document.querySelector('.regAgreePoint')
 //获取注册按钮
 var phoneSubit = document.getElementById('phoneSubit');
 var regSub = document.querySelector('.regSub')
 // 给checkbox复选框绑定点击事件
 Agr.onclick = function () {
     if (this.checked) {
         //  checked被选中就不禁用登录按钮
         regSub.disabled = false;
         regSub.style.opacity = 1;
         AgreePoint.style.display = 'none';
     } else {
         regSub.disabled = true;
         regSub.style.opacity = .8;
         AgreePoint.style.display = 'block';
     }
 }

 //定义一个变量来控制函数是否执行
 var checkreg = true;
 //创建xhr对象
 function CreateXhr() {
     var xhr = window.XMLHttpRequest ? new window.XMLHttpRequest() : ActiveXObject("microsoftXMLHttp");
     return xhr
 }
 //检查用户名在数据库中是否已经存在
 function check() {
     var xhr = CreateXhr();
     var user = false;
     var lab1 = document.querySelector('.lab1');
     var uname1 = document.getElementById("uname").value;
     xhr.open("get", `../php/check.php?uname=${uname1}`, true);
     xhr.onreadystatechange = function () {
         if (xhr.readyState == 4 && xhr.status == 200) {
             var res = xhr.responseText;
             var reg = /^[0-9A-Za-z]\w{5,11}$/
             //根据check.php的返回值判断用户名是否可用
             if (res == "0") {
                 checkreg = true;
                 if (reg.test(uname1)) {
                     lab1.innerHTML = '用户名可用!';
                     lab1.style.color = 'green'
                     user = true
                 } else {
                     lab1.innerHTML = "请输入正确的6-12位字符!";
                     lab1.style.color = "red";
                     user = false
                 }
             } else {
                 checkreg = false
                 lab1.innerHTML = "用户名不可用或已存在!";
                 lab1.style.color = "red";
                 regSub.disabled = true;
                 regSub.style.opacity = .8;
             }
         }
     }
     xhr.send(null)
 }
 //检查两次密码是否一致
 function check2() {
     let lab2 = document.querySelector('.lab2')
     let upwd = document.getElementById("upwd").value;
     let upwd2 = document.getElementById("upwd2").value;
     if (upwd != upwd2) {
         checkreg = false;
         /* regSub.disabled = true;
         regSub.style.opacity = .8; */
         lab2.innerHTML = "两次输入的密码不一样!";
     } else {
         /* regSub.disabled = false;
         regSub.style.opacity = 1; */
         checkreg = true
         lab2.innerHTML = '';
     }
 }
 //注册函数
 function reg() {
     var uname = document.getElementById("uname").value;
     var upwd = document.getElementById("upwd").value;
     var upwd2 = document.getElementById("upwd2").value;
     //  判断注册时用户名和密码是否为空并且
     if (uname != '' && upwd != '' && upwd2 != '' && uname.length >= 6 && upwd.length >= 6) {
         if (checkreg == true) {
             var xhr = CreateXhr();
             xhr.open("post", "../php/register.php", true)
             xhr.onreadystatechange = function () {
                 if (xhr.readyState == 4 && xhr.status == 200) {
                     var res = xhr.responseText;
                     if (res == '注册成功') {
                         alert(res);
                         location.href = '../page/login.html';
                     } else {
                         alert(res + "：请输入正确的用户名或密码！！！");
                         location.href = '../page/register.html';
                     }
                 }
             }
             //post方法设置请求头
             xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

             var msg = `uname=${uname}&upwd=${upwd}`;
             xhr.send(msg);
         } else {
             alert("用户名或密码错误，请确认后再注册！！！")
         }
     } else {
         alert('请输入正确的用户名或密码！！！')
     }

 }

 var pwd1 = false
 var upwd1 = document.getElementById('upwd');
 var lab3 = document.querySelector('.lab3');
 //密码验证
 upwd1.onblur = function () {
     var val = this.value
     var reg = /^\w{6,16}$/
     if (reg.test(val)) {
         var a = 0 //数字
         var b = 0 //小写字母
         var c = 0 //大写字母
         var d = 0 //下划线
         //遍历当前字符串
         for (var i = 0; i < val.length; i++) {
             //判断当前字符是否为数字
             if ("0" <= val[i] && val[i] <= "9") {
                 a = 1
             } else if ('a' <= val[i] && val[i] <= 'z') {
                 b = 1
             } else if ('A' <= val[i] && val[i] <= "Z") {
                 c = 1
             } else {
                 d = 1
             }
         }
         //判断当前出现了多少中字符
         if (a + b + c + d == 1) {
             lab3.innerHTML = "密码安全等级：弱";
             lab3.style.color = 'red';
         } else if (a + b + c + d == 2) {
             lab3.innerHTML = "密码安全等级：中";
             lab3.style.color = '#ff9900';
         } else {
             lab3.innerHTML = "密码安全等级：强";
             lab3.style.color = 'green';
         }
         pwd1 = true;
     } else {
         lab3.innerHTML = "请输入正确的6-16位密码";
         pwd1 = false;
     }
 }
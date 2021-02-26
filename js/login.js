var login = document.querySelector('.login');
var loginCon = document.querySelector('.loginCon');
var loginE = document.querySelector('.loginE');
var loginUsual = document.querySelector('.loginUsual');
var loginMobil = document.querySelector('.loginMobil');
login.onclick = function (e) {
    var e = e || window.event;
    var target = e.target || e.srcElement;
    if (target.innerHTML == '账号登录') {
        loginUsual.style.display = 'block';
        loginMobil.style.display = 'none';
        loginCon.firstElementChild.firstElementChild.className = 'color';
        loginCon.firstElementChild.lastElementChild.className = 'color1';
    }
    if (target.innerHTML == '手机动态密码登入') {
        loginUsual.style.display = 'none';
        loginMobil.style.display = 'block';
        loginCon.firstElementChild.firstElementChild.className = 'color1';
        loginCon.firstElementChild.lastElementChild.className = 'color';
    }
    if (target.id == 'logina1') {
        loginCon.style.display = 'none';
        loginE.style.display = 'block';
        this.children[0].style.display = 'none';
        this.children[1].style.display = 'block';
    }
    if (target.id == 'logina2') {
        loginCon.style.display = 'block';
        loginE.style.display = 'none';
        this.children[0].style.display = 'block';
        this.children[1].style.display = 'none';
    }
}
var submit = document.querySelector('[type="button"]')
var user = document.querySelector('.text>input')
var pass = document.querySelector('[type="password"]')
var search = location.search
//给能被点击的登录按钮绑定点击事件
submit.onclick = function () {
    //获取账号输入框中的value
    var u1 = user.value
    var p1 = pass.value
    //调用ajax发送请求
    Ajax({
        url: '../php/login.php',
        data: `username=${u1}&password=${p1}`,
        success: function (dt) {
            //判断当前返回值是否等于1
            if (dt == 1) {
                //判断当前地址栏中是否有参数
                if (search) {
                    //获取参数中传入的地址
                    var new_url = search.split('=')[1]
                    location.href = new_url
                } else {
                    location.href = "./list.html";
                }
                setCookie("user", u1)


            } else {
                alert("登录失败")
            }
        }
    })
    return false
}
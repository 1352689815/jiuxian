// 品牌begin
$('.letter').hover(function () {
    $(this).addClass('on').siblings('.letter').removeClass('on');

}, function () {
    $(this).removeClass('on').siblings('.letter').addClass('on')
})
$('.all').hover(function () {
    $('.brandAll ul li').show()
})
// 展开/收起
$('.open').click(function () {
    if ($('.letterS').is(":hidden")) {
        $('.brandAll').css({
            "height": "165px",
            "overflow": "auto"
        })
        $('.letterS').show();
        $('.open').html("收起<i></i>");
        $('.open i').css("background-position", "-55px -53px")
    } else {
        $('.brandAll').css({
            "height": "84px",
            "overflow": "hidden"
        })
        $('.letterS').hide();
        $('.open').html("展开<i></i>");
        $('.open i').css("background-position", "-71px -53px")
    }
})
$('.moreOption .choose').mouseenter(function () {
    $(this).next($('.box')).show().siblings('.box').hide();
})
$('.moreOption').mouseleave(function () {
    $('.moreOption .box').hide();
})
$('.order .tab a').click(function () {
    $(this).addClass('tabOn').parent('li').siblings().children('a').removeClass('tabOn');
})


// 省市级联下拉菜单
$.getJSON("../sh.json", function (dt) {
    var ar1 = dt;
    // console.log(ar1);
    var pro = document.querySelector('[name="province"]')
    var city = document.querySelector('[name="city"]')
    var area = document.querySelector('[name="area"]')
    for (var i in ar1) {
        // console.log(ar1[i]["name"])
        //创建选项
        var opa = document.createElement("option")
        //给当前选项添加内容
        opa.innerHTML = ar1[i]["name"]
        //给当前选项添加value属性值
        opa.setAttribute("value", ar1[i]["name"])
        //把当前选项追加到下拉框中
        pro.appendChild(opa)
    }
    pro.onchange = function () {
        city.length = 1
        area.length = 1
        //获取到被选中的省份
        var sheng = this.value
        //遍历数组中所有元素
        for (var i in ar1) {
            //判断当前遍历出来的省份是否跟被选中的省份相等
            if (ar1[i]["name"] == sheng) {
                //遍历当前被选中的省份中的城市
                for (var j in ar1[i]["city"]) {
                    //创建选项
                    var option1 = document.createElement("option")
                    //添加内容
                    option1.innerHTML = ar1[i]["city"][j]["name"]
                    option1.setAttribute("value", ar1[i]["city"][j]["name"])
                    //把当前选项追加到城市下拉框中
                    city.appendChild(option1)
                }
            }
        }
    }
    //给城市下拉框绑定onchange事件
    city.onchange = function () {
        area.length = 1
        //获取被选中的省份
        var sheng = pro.value
        var city2 = this.value
        //遍历数组
        for (var i in ar1) {
            //判断当前遍历出来的省份是否是被选中的
            if (ar1[i]["name"] == sheng) {
                //遍历城市数组
                for (var j in ar1[i]['city']) {
                    if (ar1[i]["city"][j]["name"] == city2) {
                        //遍历区
                        for (var z in ar1[i]["city"][j]["area"]) {
                            //创建选项
                            var option1 = document.createElement("option")
                            //添加内容
                            var val = ar1[i]["city"][j]["area"][z]
                            option1.innerHTML = val
                            option1.setAttribute("value", val)
                            //把当前选项追加到区中
                            area.appendChild(option1)
                        }
                    }
                }
            }
        }
    }
})

//获取操作对象
var row = document.querySelector('.row');
var pagination1 = document.querySelector('.pagination');
(async function () {
    var dt = await promiseAjax({
        url: '../php/list.php',
        datatype: 'json'
    })
    //创建分页器对象
    new Pagination(pagination1, {
        pageInfo: {
            pagenum: 1,
            pagesize: 30,
            totalsize: dt.length,
            totalpage: Math.ceil(dt.length / 30)
        },
        textInfo: {
            first: '首页',
            prev: "上一页",
            next: "下一页",
            last: "尾页"
        },
        cb(m) {
            //获取当前页需要显示的数据
            var ar1 = dt.slice((m - 1) * 30, m * 30)
            console.log(ar1);
            //创建拼接所有数据的字符串
            var str = ''
            //遍历当前ar1数组中所有的数据
            ar1.forEach(item => {
                str += `
                <li>
                    <div class="collect_box">
                        <div class="collect" style="display: none;">
                            <i></i>
                            <span>收藏</span>
                        </div>
                        <a href="./detailPage.html?id=${item.j_id}">
                            <img src="${item.j_img}">
                        </a>
                    </div>

                    <div class="priceArea clearfix">
                        <p class="price1" id="product_3372">¥<span>${item.j_price}</span></p>
                    </div>
                    <div class="proName">
                        <a href="./detailPage.html?id=${item.j_id}" >
                        ${item.j_title} <span class="slogan">${item.j_title2}</span></a>
                    </div>
                    <div class="judgeAdv clearfix">
                        <a class="judge" href="#"><span>${item.j_judge}</span></a>
                    </div>

                    <div class="seller">
                        <a href="javascript:;" >
                            <i class="sIcon"></i><span>${item.j_seller}</span>
                        </a>
                    </div>

                    <div id="activity_3372" class="cuxiao">
                        <i class="projx sIcon"></i> <span class="yh">${item.j_yh}</span><span class="yh">${item.j_yh1}</span>
                    </div>

                    <div class="buyArea clearfix" id="addcart_3372">
                        <div class="edit">
                            <a class="decrease off" href="javascript:;">-</a>
                            <input type="text" gid="3372" value="1">
                            <a class="increase" href="javascript:;">+</a>
                        </div>
                        <a class="cart sIcon prtlt_btn2" href="javascript:;"><i></i> 加入购物车</a>
                    </div>
                </li>   
                `
            })
            //把当前拼接好的字符串，添加到row盒子中
            row.innerHTML = str

            $('.increase').click(function () {
                var $ipt = $(this).parent().find('input');
                var val = $ipt[0].value;
                val++;
                $ipt[0].value = val;
                // console.log(val)
                // console.log($(this).parent());
            })
            $('.decrease').click(function () {
                var $ipt = $(this).parent().find('input');
                var val = $ipt[0].value;
                if (val > 1) {
                    val--;
                }
                $ipt[0].value = val;
                // console.log(val)
                // console.log($(this).parent());
            })
        }
    })
})()
//获取cookie
var cookies = getCookie('user');
var topLeft = document.querySelector('.topLeft');
if (cookies) {
    topLeft.innerHTML = `
    <span>hi,</span>
    <em>${cookies}</em>
    <a href="#" class="signOut">退出</a>
    `
    var signOut = document.querySelector('.signOut');
    signOut.onclick = function () {
        delCookie('user');
        location.reload();
    }
} else {
    topLeft.innerHTML = `
    <span>欢迎来酒仙网！ </span>
    <a href="./login.html"> 请登录 </a>
    <a href="./register.html"> 免费注册</a>
    `
}
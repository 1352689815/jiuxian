//获取账号cookie
var name1 = getCookie("user")
// 获取大盒子对像
var carts = document.querySelector('.carts')
//获取地址栏中的地址

var url = location.href
//获取localStorage中的cartList3
var cartList = localStorage.getItem("cartList3")
//把当前cartList字符串转为数组对象
cartList = JSON.parse(cartList) || []
//判断当前cookie是否存在
if (name1) {
    show()
} else {
    alert("您还没有登录，请先登录！！！")
    location = "./login.html?pathUrl=" + url

}
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


function show() {
    //判断当前localStorage中是否有内容
    if (cartList.length > 0) {
        //获取全选框是否被选中
        var aa = cartList.every(item => {
            //判断当前商品是否被选中
            return item.is_select == 1
        })
        var str2 = `
        <div class="panel-heading" id="gwc">
            <input type="checkbox" name="quanxuan" ${aa?"checked":''}>全选
            <span>商品信息</span>
            <span>单价</span>
            <span>送金币</span>
            <span>数量</span>
            <span>小计</span>
            <span>操作</span>
        </div>
        <div class="panel-body">
        `
        //遍历数组中所有商品
        cartList.forEach(item => {
            str2 += `
            <div class="cart-list select-bg">
            <div class="clearfix">
                <div class="cTab-tr cart-checkbox noMt">
                    <input  type="checkbox" value=""  ${item.is_select==1?"checked":''} name="xuan" data-id="${item.j_id}">
                </div>
                <div class="cTab-tr cart-goods">
                    <div class="goods-info" data-type="normalD" prid="69944">
                        <div class="goods-img">
                            <a href="javascript:;" target="_blank">
                                <img src="${item.j_img}"
                                    width="80" height="80">
                            </a>
                        </div>
                        <div class="goods-right">
                            <div class="goods-name">
                                <a href="javascript:;" target="_blank">
                                   ${item.j_title}
                                </a>
                            </div>         
                        </div>
                    </div>
                </div>
                <div class="cTab-tr cart-price">
                    <div class="goods-price">￥${item.j_price}</div>
                </div>
                <div class="cTab-tr cart-gold">
                    <div class="goods-gold">${item.j_w2}金币</div>
                </div>
                <div class="cTab-tr cart-quantity">
                    <div class="goods-num">
                        <i class="cartIcon cut " data-id="${item.j_id}">-</i>
                        <input name="" type="text" class="num" value="${item.cart_number}">
                        <i class="cartIcon add " data-id="${item.j_id}">+</i>
                    </div>
                </div>
                <div class="cTab-tr cart-subtotal">
                    <div class="goods-total-price">￥<em></em></div>
                </div>
                <div class="cTab-tr cart-operating">
                    <div class="goods-operating">
                        <p><a href="javascript:;" class="list-del" data-id="${item.j_id}">删除</a></p>
                        <p><a href="javascript:;" class="move-collect" data-id="${item.j_id}">移入我的收藏</a></p>
                    </div>
                </div>
            </div>
        </div>`
        })
        //给当前字符串拼接结束的标签
        str2 += '</div>'
        str2 += `<div class="cart-gopay-bottom clearfix">
		<div class="cart-gopay-left">
	            <input name="quanxuan" type="checkbox" value="" ${aa?"checked":''}>全选
	            <a href="javascript:;" id="delChecked">删除选中商品</a>
	    </div>
        <div class="cart-gopay-btn">
        <a href="javascript:;" class="done" style="display:inherit">去结算</a>
        </div>
	    <div class="cart-count">
	    	<div class="cart-count-total"><span class="pieces">已选商品<em class="em1"></em>件</span><span class="total">总价（不含运费）：<em class="em2"></em></span></div>
	        <div class="cart-count-offer"><span>活动优惠：<em>￥0.00</em></span><span>赠送金币：<em class="em3"></em>个</span></div>
	    </div>
	 
        </div>
        `
        //最后把拼接好的内容添加到box大盒子中
        carts.innerHTML = str2
    } else {
        var str1 = `
          <div class="jumbotron">
              <div class="cart_Icon"></div>
              <p>您的购物车内还没有商品哦，快去逛逛吧</p>
              <p><a class="btn btn-primary btn-lg" href="./list.html" role="button">随便逛逛 ></a></p>
              <div class="cart-search">
                  <input type="text" name="key" autocomplete="off" maxlength="50">
                  <a href="javascript:;"><i class="cartIcon"></i></a>
                  <p style="display: block;">搜索您感兴趣的商品</p>
             </div>
          </div>
        `
        //把当前内容添加到box盒子中
        carts.innerHTML = str1
    }
}

// cart-search模块
$('.cart-search input').focus(function () {
    $('.cart-search p').hide()
});
$('.cart-search input').blur(function () {
    $('.cart-search p').show()
})

var ipt = document.querySelector('.num')
var ems = document.querySelectorAll('.goods-total-price em')
var em1 = document.querySelector('.em1')
var em2 = document.querySelector('.em2')
var em3 = document.querySelector('.em3')
carts.onclick = function (e) {
    var e = e || window.event
    // 获取点击对象
    var target = e.target || e.srcElement;
    //判断当前点击的是否为+
    if (target.innerHTML == '+') {
        //获取当前对象中的id属性
        var id = target.getAttribute('data-id');
        //遍历cartList数组对象
        cartList.forEach(item => {
            //判断遍历出来的商品是否为当前操作商品
            if (item.j_id == id) {
                item.cart_number++
                ipt.value = item.cart_number;
            }
        })
        //重新把当前操作完毕的数组添加到localStorage中
        localStorage.setItem("cartList3", JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
        show()
        total();
        location.reload();
    }
    //判断当前点击的是否为减法按钮
    if (target.innerHTML == '-') {
        if (ipt.value > 1) {
            //获取当前对象中的id属性
            var id = target.getAttribute("data-id")
            //遍历cartList数组对象
            cartList.forEach(item => {
                //判断遍历出来的商品是否为当前操作商品
                if (item.j_id == id) {
                    item.cart_number--
                    ipt.value = item.cart_number;
                }
            })
            //重新把当前操作完毕的数组添加到localStorage中
            localStorage.setItem("cartList3", JSON.stringify(cartList))
            //调用show方法，重新把页面再次渲染
            show()
            total();
            location.reload();
        }
    }
    //删除
    if (target.innerHTML == "删除") {
        //获取当前点击对象的id
        var id = target.getAttribute("data-id")
        cartList = cartList.filter(item => {
            //过滤被删除的商品
            return item.j_id != id
        })
        //重新把当前操作完毕的数组添加到localStorage中
        localStorage.setItem("cartList3", JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
        show()
        total();
        location.reload();
    }
    //全选
    if (target.name == "quanxuan") {
        //遍历所有商品
        cartList.forEach(item => {
            //判断当前全选框是否被选中
            if (target.checked) {
                item.is_select = 1
            } else {
                item.is_select = 0
            }
        })
        //重新把当前操作完毕的数组添加到localStorage中
        localStorage.setItem("cartList3", JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
        show()
        location.reload();
    }
    //选中框
    if (target.name == "xuan") {
        //获取当前商品对应的id 
        var id = target.getAttribute("data-id")
        //遍历数组中所有的商品对象
        cartList.forEach(item => {
            if (item.j_id == id) {
                //   //判断当前选中框是否被选中
                //   if(item.is_select==1){
                //       item.is_select=0
                //   }else{
                //       item.is_select=1
                //   }
                item.is_select = item.is_select == 1 ? "0" : "1"
            }
        })
        //重新把当前操作完毕的数组添加到localStorage中
        localStorage.setItem("cartList3", JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
        show()
        location.reload();
    }
    //去结算
    if (target.innerHTML == "去结算") {
        //添加确认框
        if (confirm("你确定要购买吗？")) {
            alert("你需要支付：￥" + total()[1])
            cartList = cartList.filter(item => {
                return item.is_select != 1
            })
            //重新把当前操作完毕的数组添加到localStorage中
            localStorage.setItem("cartList3", JSON.stringify(cartList))
            //调用show方法，重新把页面再次渲染
            show()
            location.reload();
        }

    }
    if (target.innerHTML == '删除选中商品') {

        cartList = cartList.filter(item => {
            return item.is_select != 1
        })
        //重新把当前操作完毕的数组添加到localStorage中
        localStorage.setItem("cartList3", JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
        show()
        total();
        location.reload();
    }
    if (target.innerHTML == "移入我的收藏") {
        var id = target.getAttribute('data-id');
        var ar3 = []
        var str3 = '';
        var recommendUl = document.querySelector('.recommend-vain1 ul');
        cartList.forEach(item => {
            if (item.j_id == id) {
                str3 += `
                <li>
                    <div class="recommend-img">
                        <a title="" href="javascript:;">
                            <img src="${item.j_img}"width="160" height="160">
                        </a>
                    </div>
                    <div class="recommend-name">
                        <a title="" href="javascript:;">${item.j_title}</a>
                    </div>
                    <div class="recommend-price">
                        <span class="jx-price">￥${item.j_price}</span>
                    </div>
                    <div class="recommend-comment">${item.j_judge}</div>
                    <div class="cart-btn">
                        <a href="javascript:;"><i class="cartIcon"></i><span>加入购物车</span></a>
                    </div>
                </li>
                `
            }


        })

        recommendUl.innerHTML += str3
    }
}



function total() {
    var num = 0 //所选商品种类
    var jW2 = 0; //所选商品所送的金币
    var price = 0 //所选商品总价格
    //遍历cartList数组对象
    cartList.forEach(item => {
        var ar1 = [];
        if (item.is_select == 1) {
            num += parseInt(item.cart_number)
            price += item.cart_number * item.j_price
            jW2 += item.cart_number * item.j_w2;
        }
    })
    if (cartList.length > 0) {
        em1.innerHTML = num
        em2.innerHTML = '￥' + price
        em3.innerHTML = jW2
    }

    return [num, price]
}
total()

// 小计
function total2() {
    var price2 = 0;
    var arr = [];
    cartList.forEach(item => {
        price2 = item.cart_number * item.j_price;
        arr.push(price2);
    })
    for (var i = 0; i < arr.length; i++) {
        ems[i].innerHTML = arr[i]
    }
}
total2();

$('.collection-head span').mouseenter(function () {
    $(this).addClass('clo').siblings().removeClass('clo');
    var index = $(this).index();
    $('.recommend-vain').eq(index).show().siblings().hide();
})

$('.recommend-vain1 .prev1').click(function () {
    if ($('.recommend-vain1 ul').css('left') <= '0') {
        $('.recommend-vain1 ul').stop().animate({
            "left": '+=1198'
        })
    }
})
$('.recommend-vain1 .next1').click(function () {
    $('.recommend-vain1 ul').stop().animate({
        "left": '-=1198'
    })
})

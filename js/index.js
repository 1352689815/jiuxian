$(function () {
    // navList模块
    $('.navList li').click(function () {
        $(this).addClass('on').siblings().removeClass('on')
    })

    // pList模块
    $('.pList>a').click(function () {
        $(this).addClass("current").siblings().removeClass('current');
        var index = $(this).index();
        $('.pType .p-type').eq(index).show().siblings().hide();
    })
    // 疯狂抢购
    $('.indexTabNav ul li').mouseenter(function () {
        $(this).addClass('current1').siblings().removeClass('current1');
        var index = $(this).index();
        $('.indexTabConWrap>div').eq(index).show().siblings().hide();
    })

    $('.indexTabNewNav ul li').mouseenter(function () {
        $(this).addClass('current1').siblings().removeClass('current1');
        var index = $(this).index();
        $('.indexTabNewCon>div').eq(index).show().siblings().hide();
    });

    // footer input
    $('#subscribe_email').focus(function () {
        $('.ftRight-form em').hide()
    });
    $('#subscribe_email').blur(function () {
        $('.ftRight-form em').show()
    })

    // 白酒馆
    $('.topTenNav a').mouseenter(function () {
        $(this).addClass('change1').siblings().removeClass('change1');
        var index = $(this).index();
        $('.topTenCon>ul').eq(index).show().siblings().hide();
    })
    // 楼层导航
    // _home_youhui 优惠推荐
    //显示楼层导航模块
    var youHuiTop = $('._home_youhui').offset().top;
    toggleTool();

    function toggleTool() {
        if ($(document).scrollTop() >= youHuiTop) {
            $('.fixDiv').fadeIn().removeClass('sc').addClass('sc1');
        } else {
            $('.fixDiv').fadeOut().addClass('sc').removeClass('sc1');
        }
    }
    var bjTop = $('.bj').offset().top;

    function dbgg() {
        if ($(document).scrollTop() >= bjTop) {
            $('.newGuests').fadeIn();
        } else {
            $('.newGuests').fadeOut();
        }
    }
    $(window).scroll(function () {
        toggleTool()
        dbgg();
        $('.lays').each(function (i, ele) {
            if ($(document).scrollTop() > $(ele).offset().top) {

                if (i == 0) {
                    $('.fixDiv ul li').eq(0).children().css("background", "#b40c10").html("1F");
                    $('.fixDiv ul li').eq(0).siblings().children().css('background', '#f1f1f1').html('<i></i>');
                } else if (i == 1) {
                    $('.fixDiv ul li').eq(1).children().css("background", "#c37632").html("2F");
                    $('.fixDiv ul li').eq(1).siblings().children().css('background', '#f1f1f1').html('<i></i>');
                } else if (i == 2) {
                    $('.fixDiv ul li').eq(2).children().css("background", "#296693").html("3F");
                    $('.fixDiv ul li').eq(2).siblings().children().css('background', '#f1f1f1').html('<i></i>');
                } else if (i == 3) {
                    $('.fixDiv ul li').eq(3).children().css("background", "#6c9d0e").html("4F");
                    $('.fixDiv ul li').eq(3).siblings().children().css('background', '#f1f1f1').html('<i></i>');
                } else if (i == 4) {
                    $('.fixDiv ul li').eq(4).children().css("background", "#fe7a65").html("5F");
                    $('.fixDiv ul li').eq(4).siblings().children().css('background', '#f1f1f1').html('<i></i>');
                }
            }
        })
    })
    $('.floorOne').children().css("background", "#b40c10").html("1F");
    //点击楼层导航页面可以滚到相应内容区域
    $('.fixDiv ul li').click(function () {
        //获取当前点击的li的索引号  
        var index = $(this).index();
        // console.log(index);
        //每次点击li时，就要计算出页面要去往的位置
        // 选出对应索引号的内容区的盒子，计算它的offset().top
        var scroll1 = $('.lays').eq(index).offset().top;
        //页面动画滚动效果
        $('body,html').stop().animate({
            scrollTop: scroll1,
        })
        // 点击每个li改变它的背景和内容

        if (index == 0) {
            $(this).children().css("background", "#b40c10").html("1F");
            $(this).siblings().children().css('background', '#f1f1f1').html('<i></i>');
        } else if (index == 1) {
            $(this).children().css("background", "#c37632").html("2F");
            $(this).siblings().children().css('background', '#f1f1f1').html('<i></i>');
        } else if (index == 2) {
            $(this).children().css("background", "#296693").html("3F");
            $(this).siblings().children().css('background', '#f1f1f1').html('<i></i>');
        } else if (index == 3) {
            $(this).children().css("background", "#6c9d0e").html("4F");
            $(this).siblings().children().css('background', '#f1f1f1').html('<i></i>');
        } else if (index == 4) {
            $(this).children().css("background", "#fe7a65").html("5F");
            $(this).siblings().children().css('background', '#f1f1f1').html('<i></i>');
        }
    })
    //鼠标经过li改变它的背景及内容
    $('.fixDiv ul li').hover(function () {
        var index = $(this).index();
        if (index == 0) {
            $(this).children().css({
                "background": "#b40c10",
                "width": "70px",
                "transition": "all .7s",
                "overflow": "hidden"
            }).html("白酒馆");
            $(this).siblings().children().css({
                'background': '#f1f1f1',
                "width": '30px'
            }).html('<i></i>');
        } else if (index == 1) {
            $(this).children().css({
                "background": "#c37632",
                "width": "90px",
                "transition": "all .7s",
                "overflow": "hidden"
            }).html("葡萄酒馆");

            $(this).siblings().children().css({
                'background': '#f1f1f1',
                "width": '30px'
            }).html('<i></i>');
        } else if (index == 2) {
            $(this).children().css({
                "background": "#296693",
                "width": "70px",
                "transition": "all .7s",
                "overflow": "hidden"
            }).html("洋酒馆");
            $(this).siblings().children().css({
                'background': '#f1f1f1',
                "width": '30px'
            }).html('<i></i>');
        } else if (index == 3) {
            $(this).children().css({
                "background": "#6c9d0e",
                "width": "130px",
                "transition": "all .7s",
                "overflow": "hidden"
            }).html("养生酒/黄酒/啤酒");
            $(this).siblings().children().css({
                'background': '#f1f1f1',
                "width": '30px'
            }).html('<i></i>');
        } else if (index == 4) {
            $(this).children().css({
                "background": "#fe7a65",
                "width": "70px",
                "transition": "all 0.7s",
                "overflow": "hidden"
            }).html("食品");
            $(this).siblings().children().css({
                'background': '#f1f1f1',
                "width": '30px'
            }).html('<i></i>');
        }
    }, function () {

        var index = $(this).index();
        $(this).children().css({
            "width": "30px",
        }).html(index + 1 + "F");

    })

    /* // 鼠标离开li让它恢复原样
    $('.fixDiv ul li').mouseleave(function () {
        var index = $(this).index();
        $(this).children().css({
            "width": "30px",
        }).html(index + 1 + "F");
    }) */
    // 给ol里的li绑定点击事件，回到顶部
    $('.fixDiv ol li').click(function () {
        $('body,html').stop().animate({
            scrollTop: 0,
        }, 1200)
    })

    $('.newClose').click(function () {
        $('.newGuests').remove();
    })


    $('.titieBox ul li').mouseenter(function () {
        $(this).addClass('on3').siblings().removeClass('on3');
        var index = $(this).index();
        $('.titleSlider').stop().animate({
            'left': index * 105
        }, 300);
        $('.logoAll').eq(index).show().siblings().hide();
    })
    $('.prev').click(function () {
        $('.logoFirstbd').stop().animate({
            "left": 0
        }, 500)
    })
    $('.next').click(function () {
        $('.logoFirstbd').stop().animate({
            "left": -1182
        }, 500)
    })
    $('.logoBox ul li').hover(function () {
        $(this).find('img').stop().animate({
            'left': -100
        }, 500, 'swing')
    }, function () {
        $(this).find('img').stop().animate({
            'left': 0
        }, 500, 'swing')
    })


})
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
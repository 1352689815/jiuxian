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
    $('.navCategoryMenu h2').mouseenter(function () {
        $('.categoryBox').show();
    })
    $('.categoryBox').mouseleave(function () {
        $(this).hide();
    })
    // footer input
    $('#subscribe_email').focus(function () {
        $('.ftRight-form em').hide()
    });
    $('#subscribe_email').blur(function () {
        $('.ftRight-form em').show()
    })
})
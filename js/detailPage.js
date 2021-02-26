//获取当前地址栏中的参数信息
var search = location.search
//获取大盒子对象
var dI = document.querySelector('.str');
var dt;
//判断当前search对象中是否有值
if (search) {
    //分割search字符串
    var id = search.split('=')[1];
    (async function () {
        dt = await promiseAjax({
            url: '../php/detailPage.php',
            data: 'id=' + id,
            datatype: 'json',
        })

        //创建拼接所有内容的字符串
        var str = `  
        <div class="dGuide">
            <a href="./index.html">首页</a>
            <i>></i>
            <a href="./list.html">白酒</a>
           
            <i>></i>
            <span>${dt.j_title}</span>
        </div>
        <div class="dIntro clearfix">            
            <div class="fdj">
                <div class='show-pic'>
                    <img src="${dt.j_img1}" alt="">
                    <div class='mark'></div>   
                    <div class='boxRight'>
                        <img src="${dt.j_img1}" alt="">
                    </div>                   
                </div>                               
                <div class="show-list-con">
                    <a href="javascript:;" class="on"><img src="${dt.j_img1}" alt=""></a>
                    <a href="javascript:;"><img src="${dt.j_img2}" alt=""></a>
                    <a href="javascript:;"><img src="${dt.j_img3}" alt=""></a>                   
                </div>
                <div class="showOther">
                    <div class="goodsNo">商品编号：<span>010068099</span></div>
                    <div class="sOtherRight">
                        <div class="showShare sShare-list">
                            <i class="dIcon"></i><span>分享</span>
                        </div>
                        <div class="showCollect">
                            <a><i class="dIcon"></i>
                                <span>收藏（<em>0</em>）</span></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="introInfo">
                <div class="comName">
                    <h3>${dt.j_title}</h3>
                    <p>${dt.j_title2}</p>
                </div>
                <div class="infoWrap">
                    <p>
                        <span>酒仙价</span><del>￥${dt.j_price1}</del>
                    </p>
                    <div class="infoItems">
                        <p>
                            <span>促销价</span><i>￥</i><b>${dt.j_price}</b>
                        </p>
                        <div class="clubDisc">
                            <i><img src="../img/clubImg.jpg" alt=""></i>
                            <span>会员下单再享98折,可省4.58元</span>
                            <a href="./login.html">开通会员<i>></i></a>
                        </div>
                    </div>
                    <div class="promotionBox">
                        <p>
                            <span>促&nbsp;&nbsp; 销</span><i>限时抢购</i><b>限时抢购</b>
                        </p>
                        <div class="proitem">
                            <i>多买多赠</i>
                            <a href="javascript:;">
                                <img src="http://img07.jximage.com/2019/0419/9d5247ea0c1c48b0aed6fc4e2321a60c2.jpg"
                                    alt="">
                            </a>
                            <em>x1</em>
                            <span class="prom-n">买送小郎酒</span>
                        </div>
                    </div>
                </div>
                <div class="salesScoreGold">
                    <ul class="clearfix">
                        <li class="comSales"><i></i><span>累计销量</span><em>${dt.j_w}</em></li>
                        <li class="comScore"><i></i><span>酒友评分</span><em>${dt.j_w1}</em></li>
                        <li class="comGold"><i></i><span>送金币</span><em>${dt.j_w2}</em></li>
                    </ul>
                </div>
                <div class="comChooseBay">
                    <div class="infoItems">
                        <p>
                            <span>配送到</span>
                            <select name="province">
                                <option value="请选择省">请选择省</option>
                            </select>
                            <select name="city">
                                <option value="请选择市">请选择市</option>
                            </select>
                            <select name="area">
                                <option value="请选择区">请选择区</option>
                            </select>
                            <strong>有货！</strong>
                        </p>
                        <p>
                            <span>数&nbsp;&nbsp;&nbsp;量</span>
                            <input type="number" name="" min="1" value="0">
                            <label>此商品无原厂手提袋 </label>
                        </p>
                    </div>
                </div>
                <div class="infoBuy"><a href="javascript:;">加入购物车</a></div>
                <div class="infoItems promptBox">
                    <p>
                        <span>提&nbsp;&nbsp;&nbsp;示</span>
                        <i></i>
                        <em>此商品不能使用优惠券</em>
                    </p>
                </div>
            </div>           
            <div class="introOther">
                <div class="introLogo">
                    <div class="introp">
                        <a href="javascript:;">
                            <img src="../img/l.jpg" alt=""><br>
                            <span>古井贡</span>
                        </a><br>
                        <i class="jxzy">酒仙自营</i>
                    </div>
                </div>
                <div class="introSaf">
                    <ul>
                        <li>
                            <p class="safNam">
                                <img src="http://img06.jiuxian.com/bill/2016/0309/3d43576517d54bccb50f3303c01a746e.png"
                                    width="20" height="22">
                                <strong>售后无忧</strong>
                            </p>
                            <p class="safCon">7天无理由退换货 </p>
                        </li>
                        <li>
                            <p class="safNam">
                                <img src="http://img07.jiuxian.com/bill/2016/1118/e3cc31af13d34212968755758f6d8326.png"
                                    width="20" height="22">
                                <strong>售后补充</strong>
                            </p>
                            <p class="safCon">啤/老酒无理由不退换 </p>
                        </li>
                        <li>
                            <p class="safNam">
                                <img src="http://img10.jiuxian.com/bill/2016/0309/9d48055fc8a44a51adaee8fa744d0c35.png"
                                    width="20" height="22">
                                <strong>满100包邮</strong>
                            </p>
                            <p class="safCon">全场满100包邮 </p>
                        </li>
                        <li>
                            <p class="safNam">
                                <img src="http://img08.jiuxian.com/bill/2016/0309/c9bbc2cbaca44eeb887db4182ee8b344.png"
                                    width="20" height="22">
                                <strong>正品保障</strong>
                            </p>
                            <p class="safCon">厂家直供 品质放心 </p>
                        </li>
                    </ul>
                </div>
                <div id="kefudetail" class="cusBgBox">
                    <a class="cusBg dh1"><i></i><span>在线客服</span></a>
                </div>
            </div>
        </div>
        <div class="d clearfix">
            <div class="d-left">
                <div class="d-box">
                    <div class="title">
                        <i></i><span>相关分类</span>
                    </div>
                    <div class="d-con" name="__detail_xiangguanfenlei">
                        <div class="twoList">
                            <ul class="clearfix">
                                <li><a href="http://list.jiuxian.com/1-0-0-0-0-0-0-0-0-0-0-0.htm" target="_blank">白酒</a></li>
                                <li><a href="http://list.jiuxian.com/2-0-0-0-0-0-0-0-0-0-0-0.htm" target="_blank">葡萄酒</a></li>
                                <li><a href="http://list.jiuxian.com/4-0-0-0-0-0-0-0-0-0-0-0.htm" target="_blank">洋酒</a></li>
                                <li><a href="http://list.jiuxian.com/95-0-0-0-0-0-0-0-0-0-0-0.htm" target="_blank">黄酒</a></li>
                                <li><a href="http://list.jiuxian.com/6-0-0-0-0-0-0-0-0-0-0-0.htm" target="_blank">养生酒</a></li>
                                <li><a href="http://list.jiuxian.com/151-0-0-0-0-0-0-0-0-0-0-0.htm" target="_blank">啤酒</a></li>
                                <li><a href="http://list.jiuxian.com/179-0-0-0-0-0-0-0-0-0-0-0.htm" target="_blank">果酒</a></li>
                                <li><a href="http://list.jiuxian.com/68-0-0-0-0-0-0-0-0-0-0-0.htm" target="_blank">酒具</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="d-box">
                    <div class="title"><i></i><span>推荐品牌</span></div>
                    <div class="d-con" name="__detail_tuijianpinpai">
                    <div class="threeList">
                        <ul class="clearfix">
                            <li><a href="http://list.jiuxian.com/1-1795-0-0-0-0-0-0-0-0-0-0.htm" title="酒鬼酒" target="_blank"> 酒鬼酒</a></li>
                            <li><a href="http://list.jiuxian.com/1-7-0-0-0-0-0-0-0-0-0-0.htm" title="洋河" target="_blank"> 洋河</a></li>
                            <li><a href="http://list.jiuxian.com/1-1-0-0-0-0-0-0-0-0-0-0.htm" title="茅台" target="_blank"> 茅台</a></li>
                            <li><a href="http://list.jiuxian.com/1-2-0-0-0-0-0-0-0-0-0-0.htm" title="五粮液" target="_blank"> 五粮液</a></li>
                            <li><a href="http://list.jiuxian.com/1-3-0-0-0-0-0-0-0-0-0-0.htm" title="剑南春" target="_blank"> 剑南春</a></li>
                            <li><a href="http://list.jiuxian.com/1-14-0-0-0-0-0-0-0-0-0-0.htm" title="泸州老窖" target="_blank"> 泸州老窖</a></li>
                            <li><a href="http://list.jiuxian.com/1-412-0-0-0-0-0-0-0-0-0-0.htm" title="扳倒井" target="_blank"> 扳倒井</a></li>
                            <li><a href="http://list.jiuxian.com/1-15-0-0-0-0-0-0-0-0-0-0.htm" title="国窖1…" target="_blank"> 国窖1…</a></li>
                            <li><a href="http://list.jiuxian.com/1-4-0-0-0-0-0-0-0-0-0-0.htm" title="汾酒" target="_blank"> 汾酒</a></li>
                            <li><a href="http://list.jiuxian.com/1-10-0-0-0-0-0-0-0-0-0-0.htm" title="郎酒" target="_blank"> 郎酒</a></li>
                            <li><a href="http://list.jiuxian.com/1-16-0-0-0-0-0-0-0-0-0-0.htm" title="董酒" target="_blank"> 董酒</a></li>
                            <li><a href="http://list.jiuxian.com/1-5-0-0-0-0-0-0-0-0-0-0.htm" title="金六福" target="_blank"> 金六福</a></li>
                            <li><a href="http://list.jiuxian.com/1-445-0-0-0-0-0-0-0-0-0-0.htm" title="杏花村" target="_blank"> 杏花村</a></li>
                            <li><a href="http://list.jiuxian.com/1-28-0-0-0-0-0-0-0-0-0-0.htm" title="古井" target="_blank"> 古井</a></li>
                            <li><a href="http://list.jiuxian.com/1-27-0-0-0-0-0-0-0-0-0-0.htm" title="西凤" target="_blank"> 西凤</a></li>
                            <li><a href="http://list.jiuxian.com/1-2124-0-0-0-0-0-0-0-0-0-0.htm" title="龙驹" target="_blank"> 龙驹</a></li>
                            <li><a href="http://list.jiuxian.com/1-1857-0-0-0-0-0-0-0-0-0-0.htm" title="九里春" target="_blank"> 九里春</a></li>
                            <li><a href="http://list.jiuxian.com/1-1813-0-0-0-0-0-0-0-0-0-0.htm" title="沂蒙老区" target="_blank"> 沂蒙老区</a></li>
                            <li><a href="http://list.jiuxian.com/1-1372-0-0-0-0-0-0-0-0-0-0.htm" title="渝北老窖" target="_blank"> 渝北老窖</a></li>
                            <li><a href="http://list.jiuxian.com/1-204-0-0-0-0-0-0-0-0-0-0.htm" title="古贝春" target="_blank"> 古贝春</a></li>
                            <li><a href="http://list.jiuxian.com/1-2144-0-0-0-0-0-0-0-0-0-0.htm" title="国久村" target="_blank"> 国久村</a></li>
                        </ul>
                     </div>
                </div>
            </div>
                <div class="d-box recommend_wrap" style="display: none">
                <div class="title"><i></i><span>酒友推荐</span></div>
                <div class="d-con" name="__detail_jiuyoutuijian">
                    <div class="recomList" id="recomm_direct_2"> </div>
                </div>
                </div>
                <div class="d-box">
                    <div class="title"><i></i><span>排行榜</span></div>
                    <div class="d-con" name="__detail_paihangbang">
                        <div class="topTen_box">
                            <div class="topTenTab">
                                <ul class="clearfix">
                                    <li class="cur">同价位</li>
                                    <li>同品牌</li>
                                    <li>同类别</li>
                                </ul>
                            </div>
                        <div class="topTenWrap">
                            <ul class="topTenList clearfix">
                                <li>
                                    <i class="three">1</i>
                                    <div class="pic"><a href="http://www.jiuxian.com/goods-34664.html" target="_blank"><img src="http://img09.jiuxian.com/2017/0205/74ec8fe4003a46d99472637f310dc6a42.jpg" title="西班牙安徒生·小天鹅干红葡萄酒750ml[兑换]" width="60" height="60"></a></div>
                                    <div class="right">
                                        <div class="name"><a href="http://www.jiuxian.com/goods-34664.html" target="_blank" title="西班牙安徒生·小天鹅干红葡萄酒750ml[兑换]">西班牙安徒生·小天鹅干红葡萄酒750ml[兑换]</a></div>
                                        <div class="price"><p goodid="34664">￥299.00</p></div>
                                    </div>
                                </li>
                                <li>
                                    <i class="three">2</i>
                                    <div class="pic"><a href="http://www.jiuxian.com/goods-124900.html" target="_blank"><img src="http://img09.jiuxian.com/2020/1221/2138a5687d00417095d61660148e26d72.jpg" title="53°煮仙 十年坤沙酒 酱香型白酒 贵州茅台镇 纯粮食高粱酒 固态老酒 整箱500ml*6" width="60" height="60"></a></div>
                                    <div class="right">
                                        <div class="name"><a href="http://www.jiuxian.com/goods-124900.html" target="_blank" title="53°煮仙 十年坤沙酒 酱香型白酒 贵州茅台镇 纯粮食高粱酒 固态老酒 整箱500ml*6">53°煮仙 十年坤沙酒 酱香型白酒 贵州茅台镇 纯粮食高粱酒 固态老酒 整箱500ml*6</a></div>
                                        <div class="price"><p goodid="124900">￥368.00</p></div>
                                    </div>
                                </li>
                                <li>
                                    <i class="three">3</i>
                                    <div class="pic"><a href="http://www.jiuxian.com/goods-44980.html" target="_blank"><img src="http://img06.jiuxian.com/2021/0207/52b4253c99b14d9c860e5077619d622a2.jpg" title="53°贵州茅台集团技开公司贵州酱酒七窖优品酱香型白酒礼盒装500ml" width="60" height="60"></a></div>
                                    <div class="right">
                                        <div class="name"><a href="http://www.jiuxian.com/goods-44980.html" target="_blank" title="53°贵州茅台集团技开公司贵州酱酒七窖优品酱香型白酒礼盒装500ml">53°贵州茅台集团技开公司贵州酱酒七窖优品酱香型白酒礼盒装500ml</a></div>
                                        <div class="price"><p goodid="44980">￥398.00</p></div>
                                    </div>
                                </li>
                                <li>
                                    <i>4</i>
                                    <div class="pic"><a href="http://www.jiuxian.com/goods-131505.html" target="_blank"><img src="http://img10.jiuxian.com/2020/0807/8172d6b58b754adbace15038cd6bd0072.jpg" title="西班牙安徒生·凤凰干红葡萄酒750ml[兑换]" width="60" height="60"></a></div>
                                    <div class="right">
                                        <div class="name"><a href="http://www.jiuxian.com/goods-131505.html" target="_blank" title="西班牙安徒生·凤凰干红葡萄酒750ml[兑换]">西班牙安徒生·凤凰干红葡萄酒750ml[兑换]</a></div>
                                        <div class="price"><p goodid="131505">￥399.00</p></div>
                                    </div>
                                </li>
                                <li>
                                    <i>5</i>
                                    <div class="pic"><a href="http://www.jiuxian.com/goods-23909.html" target="_blank"><img src="http://img07.jiuxian.com/2021/0125/b86b40e0f52548fcb52e61abe35e63cc2.JPG" title="52°五粮液黄金酒黄金贵宾酒480ml（6瓶装）" width="60" height="60"></a></div>
                                    <div class="right">
                                        <div class="name"><a href="http://www.jiuxian.com/goods-23909.html" target="_blank" title="52°五粮液黄金酒黄金贵宾酒480ml（6瓶装）">52°五粮液黄金酒黄金贵宾酒480ml（6瓶装）</a></div>
                                        <div class="price"><p goodid="23909">￥299.00</p></div>
                                    </div>
                                </li>
                                <li>
                                    <i>6</i>
                                    <div class="pic"><a href="http://www.jiuxian.com/goods-32345.html" target="_blank"><img src="http://img10.jiuxian.com/2020/1117/cef3e304c8a24ea6bb37c7eaf6b4d0da2.jpg" title="拉斐庄园2009珍酿原酒进口红酒珍藏干红葡萄酒红酒整箱木箱装红酒礼盒750ml*6" width="60" height="60"></a></div>
                                    <div class="right">
                                        <div class="name"><a href="http://www.jiuxian.com/goods-32345.html" target="_blank" title="拉斐庄园2009珍酿原酒进口红酒珍藏干红葡萄酒红酒整箱木箱装红酒礼盒750ml*6">拉斐庄园2009珍酿原酒进口红酒珍藏干红葡萄酒红酒整箱木箱装红酒礼盒750ml*6</a></div>
                                        <div class="price"><p goodid="32345">￥298.00</p></div>
                                    </div>
                                </li>
                            </ul>
                             <ul class="topTenList clearfix" style="display:none;">
                            <li>
                                <i class="three">1</i>
                                <div class="pic"><a href="http://www.jiuxian.com/goods-32200.html" target="_blank"><img src="http://img09.jiuxian.com/2021/0126/23836a6447244c5281aeeb7712192bbc2.jpg" title="贵州迎宾酒70酱香型白酒53度500ml*2瓶" width="60" height="60"></a></div>
                                <div class="right">
                                    <div class="name"><a href="http://www.jiuxian.com/goods-32200.html" target="_blank" title="贵州迎宾酒70酱香型白酒53度500ml*2瓶">贵州迎宾酒70酱香型白酒53度500ml*2瓶</a></div>
                                    <div class="price"><p goodid="32200">￥398.00</p></div>
                                </div>
                            </li>
                            <li>
                                <i class="three">2</i>
                                <div class="pic"><a href="http://www.jiuxian.com/goods-34087.html" target="_blank"><img src="http://img06.jiuxian.com/2021/0104/d2dd471fefe2432ba07d718f97c038802.jpg" title="53°贵州迎宾酒酱香叁号酱香型白酒500ml*6【整箱装】" width="60" height="60"></a></div>
                                <div class="right">
                                    <div class="name"><a href="http://www.jiuxian.com/goods-34087.html" target="_blank" title="53°贵州迎宾酒酱香叁号酱香型白酒500ml*6【整箱装】">53°贵州迎宾酒酱香叁号酱香型白酒500ml*6【整箱装】</a></div>
                                    <div class="price"><p goodid="34087">￥468.00</p></div>
                                </div>
                            </li>
                            <li>
                                <i class="three">3</i>
                                <div class="pic"><a href="http://www.jiuxian.com/goods-34088.html" target="_blank"><img src="http://img07.jiuxian.com/2020/1017/f16bf03e718c4bf2a15c0514190a68d72.jpg" title="53°贵州迎宾酒龙金版酱香型白酒礼盒装收藏送礼500ml*1【单瓶】" width="60" height="60"></a></div>
                                <div class="right">
                                    <div class="name"><a href="http://www.jiuxian.com/goods-34088.html" target="_blank" title="53°贵州迎宾酒龙金版酱香型白酒礼盒装收藏送礼500ml*1【单瓶】">53°贵州迎宾酒龙金版酱香型白酒礼盒装收藏送礼500ml*1【单瓶】</a></div>
                                    <div class="price"><p goodid="34088">￥88.00</p></div>
                                </div>
                            </li>
                            <li>
                                <i>4</i>
                                <div class="pic"><a href="http://www.jiuxian.com/goods-35297.html" target="_blank"><img src="http://img09.jiuxian.com/2021/0120/ab6960c70cf34ab299e23b3622a7c6bc2.jpg" title="53°贵州酱香型白酒牛年生肖酒高度纯粮食酒礼盒装500ml【单瓶】" width="60" height="60"></a></div>
                                <div class="right">
                                    <div class="name"><a href="http://www.jiuxian.com/goods-35297.html" target="_blank" title="53°贵州酱香型白酒牛年生肖酒高度纯粮食酒礼盒装500ml【单瓶】">53°贵州酱香型白酒牛年生肖酒高度纯粮食酒礼盒装500ml【单瓶】</a></div>
                                    <div class="price"><p goodid="35297">￥39.00</p></div>
                                </div>
                            </li>
                            <li>
                                <i>5</i>
                                <div class="pic"><a href="http://www.jiuxian.com/goods-36075.html" target="_blank"><img src="http://img06.jiuxian.com/2020/1122/e4d75e81e0824754a2f04ccf2dd26e112.jpg" title="53°贵州茅台镇贵州迎宾酒私藏12酱香型白酒收藏送礼手工酿造500ml*单瓶装" width="60" height="60"></a></div>
                                <div class="right">
                                    <div class="name"><a href="http://www.jiuxian.com/goods-36075.html" target="_blank" title="53°贵州茅台镇贵州迎宾酒私藏12酱香型白酒收藏送礼手工酿造500ml*单瓶装">53°贵州茅台镇贵州迎宾酒私藏12酱香型白酒收藏送礼手工酿造500ml*单瓶装</a></div>
                                    <div class="price"><p goodid="36075">￥99.00</p></div>
                                </div>
                            </li>
                            <li>
                                <i>6</i>
                                <div class="pic"><a href="http://www.jiuxian.com/goods-36078.html" target="_blank"><img src="http://img06.jiuxian.com/2020/0905/2ad95a9ae8344e87854ccf5803d718122.jpg" title="53°贵州迎宾酒（五星）带杯酱香型白酒送礼收藏500ml*1单瓶" width="60" height="60"></a></div>
                                <div class="right">
                                    <div class="name"><a href="http://www.jiuxian.com/goods-36078.html" target="_blank" title="53°贵州迎宾酒（五星）带杯酱香型白酒送礼收藏500ml*1单瓶">53°贵州迎宾酒（五星）带杯酱香型白酒送礼收藏500ml*1单瓶</a></div>
                                    <div class="price"><p goodid="36078">￥99.00</p></div>
                                </div>
                            </li>
                        </ul>
                        <ul class="topTenList clearfix" style="display:none;">
                            <li>
                                <i class="three">1</i>
                                <div class="pic"><a href="http://www.jiuxian.com/goods-22.html" target="_blank"><img src="http://img09.jiuxian.com/2015/0721/5e4328e7b9fb451195892523f58112302.jpg" title="52°五粮液 普五经典装（第七代）500ml" width="60" height="60"></a></div>
                                <div class="right">
                                    <div class="name"><a href="http://www.jiuxian.com/goods-22.html" target="_blank" title="52°五粮液 普五经典装（第七代）500ml">52°五粮液 普五经典装（第七代）500ml</a></div>
                                    <div class="price"><p goodid="22">￥1399.00</p></div>
                                </div>
                            </li>
                            <li>
                                <i class="three">2</i>
                                <div class="pic"><a href="http://www.jiuxian.com/goods-52.html" target="_blank"><img src="http://img08.jiuxian.com/2019/0129/34cbdcfb45d845188b229aaf8a49a8a02.jpg" title="48°青花30汾酒500ml" width="60" height="60"></a></div>
                                <div class="right">
                                    <div class="name"><a href="http://www.jiuxian.com/goods-52.html" target="_blank" title="48°青花30汾酒500ml">48°青花30汾酒500ml</a></div>
                                    <div class="price"><p goodid="52">￥959.00</p></div>
                                </div>
                            </li>
                            <li>
                                <i class="three">3</i>
                                <div class="pic"><a href="http://www.jiuxian.com/goods-53.html" target="_blank"><img src="http://img10.jiuxian.com/2014/0428/abcacca69ed44a7889728947dbb326202.jpg" title="42°金奖20汾酒475ml" width="60" height="60"></a></div>
                                <div class="right">
                                    <div class="name"><a href="http://www.jiuxian.com/goods-53.html" target="_blank" title="42°金奖20汾酒475ml">42°金奖20汾酒475ml</a></div>
                                    <div class="price"><p goodid="53">￥388.00</p></div>
                                </div>
                            </li>
                            <li>
                                <i>4</i>
                                <div class="pic"><a href="http://www.jiuxian.com/goods-125.html" target="_blank"><img src="http://img07.jiuxian.com/2016/0314/4160749ff2b64f749ddfb06cf5d0cafb2.jpg" title="53°郎酒红花郎十（10）500ml" width="60" height="60"></a></div>
                                <div class="right">
                                    <div class="name"><a href="http://www.jiuxian.com/goods-125.html" target="_blank" title="53°郎酒红花郎十（10）500ml">53°郎酒红花郎十（10）500ml</a></div>
                                    <div class="price"><p goodid="125">￥459.00</p></div>
                                </div>
                            </li>
                            <li>
                                <i>5</i>
                                <div class="pic"><a href="http://www.jiuxian.com/goods-137.html" target="_blank"><img src="http://img09.jiuxian.com/2019/1219/b96c60aa80374c60bc71dcdb3df65e6e2.jpg" title="53°郎酒红运郎500ml" width="60" height="60"></a></div>
                                <div class="right">
                                    <div class="name"><a href="http://www.jiuxian.com/goods-137.html" target="_blank" title="53°郎酒红运郎500ml">53°郎酒红运郎500ml</a></div>
                                    <div class="price"><p goodid="137">￥4200.00</p></div>
                                </div>
                            </li>
                            <li>
                                <i>6</i>
                                <div class="pic"><a href="http://www.jiuxian.com/goods-144.html" target="_blank"><img src="http://img09.jiuxian.com/2016/1222/44969b9b8a5443119d676df02026d52a2.jpg" title="38°牛栏山百年红8 500ml（2016年）" width="60" height="60"></a></div>
                                <div class="right">
                                    <div class="name"><a href="http://www.jiuxian.com/goods-144.html" target="_blank" title="38°牛栏山百年红8 500ml（2016年）">38°牛栏山百年红8 500ml（2016年）</a></div>
                                    <div class="price"><p goodid="144">￥69.00</p></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>               
                <div class="d-box" id="viewhis">		
                    <div class="title"><i></i><span>看了又看</span></div>
                    <div class="d-con">
                        <div class="recomList" name="__detail_kanleyoukan">
                            <ul>
                                <li>
                                    <div class="pic"><a href=" http://www.jiuxian.com/goods-80962.html " target="_blank"><img src="http://img10.jiuxian.com/2021/0129/6fea3bbc26df4283812a04931044bcea2.jpg" alt="贵州迎宾酒轻奢壹号 53度500ml大曲酱香型白酒 粮食酿造优级酒喜庆版整箱6瓶装" width="120" height="120"></a></div>
                                    <div class="name"><a href=" http://www.jiuxian.com/goods-80962.html " target="_blank" title="贵州迎宾酒轻奢壹号 53度500ml大曲酱香型白酒 粮食酿造优级酒喜庆版整箱6瓶装">贵州迎宾酒轻奢壹号 53度500ml大曲酱香型白酒 粮食酿造优级酒喜庆版整箱6瓶装</a></div>
                                    <div class="price"><p goodid="80962">￥398.00</p><span><em></em><i></i></span></div>
                                </li>
                                <li>
                                    <div class="pic"><a href=" http://www.jiuxian.com/goods-102467.html " target="_blank"><img src="http://img08.jiuxian.com/2020/0829/c300f970c83042a8b1296c1f4d464dff2.jpg" alt="【酒厂直营】古井贡酒 米兰世博纪念酒和和 55度750ml 单瓶浓香型" width="120" height="120"></a></div>
                                    <div class="name"><a href=" http://www.jiuxian.com/goods-102467.html " target="_blank" title="【酒厂直营】古井贡酒 米兰世博纪念酒和和 55度750ml 单瓶浓香型">【酒厂直营】古井贡酒 米兰世博纪念酒和和 55度750ml 单瓶浓香型</a></div>
                                    <div class="price"><p goodid="102467">￥89.00</p><span><em></em><i></i></span></div>
                                </li>
                                <li>
                                    <div class="pic"><a href=" http://www.jiuxian.com/goods-3372.html " target="_blank"><img src="http://img10.jiuxian.com/2016/0331/03c13aa80c9c4dc0b9a5a6c72b04b7752.jpg" alt="53°黄盖玻瓶汾酒475ml 3瓶装" width="120" height="120"></a></div>
                                    <div class="name"><a href=" http://www.jiuxian.com/goods-3372.html " target="_blank" title="53°黄盖玻瓶汾酒475ml 3瓶装">53°黄盖玻瓶汾酒475ml 3瓶装</a></div>
                                    <div class="price"><p goodid="3372">￥139.00</p><span><em></em><i></i></span></div>
                                </li>
                                <li>
                                    <div class="pic"><a href=" http://www.jiuxian.com/goods-31561.html " target="_blank"><img src="http://img06.jiuxian.com/2020/0813/24dbbcf17cfb4d7898eec9973108e9332.jpg" alt="50°古井贡酒青花大坛2500ml" width="120" height="120"></a></div>
                                    <div class="name"><a href=" http://www.jiuxian.com/goods-31561.html " target="_blank" title="50°古井贡酒青花大坛2500ml">50°古井贡酒青花大坛2500ml</a></div>
                                    <div class="price"><p goodid="31561">￥218.00</p><span><em></em><i></i></span></div>
                                </li>
                                <li>
                                    <div class="pic"><a href=" http://www.jiuxian.com/goods-86321.html " target="_blank"><img src="http://img10.jiuxian.com/2019/0419/9d5247ea0c1c48b0aed6fc4e2321a60c2.jpg" alt="45°郎酒小郎酒经典装100ml" width="120" height="120"></a></div>
                                    <div class="name"><a href=" http://www.jiuxian.com/goods-86321.html " target="_blank" title="45°郎酒小郎酒经典装100ml">45°郎酒小郎酒经典装100ml</a></div>
                                    <div class="price"><p goodid="86321">￥50.00</p><span><em></em><i></i></span></div>
                                </li>
                            </ul>
                         </div>
                     </div>
                 </div>
           </div>
        <div class="d-right">${dt.j_dateil}</div>
    </div>
        
        `
        //把当前内容添加到大盒子中
        dI.innerHTML = str;
        // 放大镜部分
        $(function () {
            $('.show-list-con a').mouseenter(function () {
                // var index = $('.show-list-con a').index();
                $(this).addClass('on').siblings().removeClass('on');
                var srcs = $(this).find('img').attr('src');
                $('.show-pic img').attr('src', srcs);
                $('.boxRight img').attr('src', srcs);
            })
            $('.show-pic').hover(function () {
                    $('.mark').show();
                    $('.boxRight').show();
                },
                function () {
                    $('.mark').hide();
                    $('.boxRight').hide();
                })
        })
        var box = document.querySelector('.show-pic');
        var mark = document.querySelector('.mark');
        var boxRight = document.querySelector('.boxRight');
        var rightImg = boxRight.querySelector('img');

        //移动
        box.onmousemove = function (e) {
            var e = e || window.event
            // 获取当前移动距离
            var x1 = e.pageX - box.offsetLeft - parseInt(mark.offsetWidth / 2);
            var y1 = e.pageY - box.offsetTop - parseInt(mark.offsetHeight / 2);
            // console.log(y1);
            // 设置移动范围
            var maxX = box.offsetWidth - mark.offsetWidth;
            var maxY = box.offsetHeight - mark.offsetHeight;
            if (x1 <= 0) {
                x1 = 0;
            } else if (x1 >= maxX) {
                x1 = maxX;
            }
            if (y1 <= 0) {
                y1 = 0;
            } else if (y1 >= maxY) {
                y1 = maxY;
            }
            mark.style.left = x1 + 'px';
            mark.style.top = y1 + 'px';
            // 3. 大图片的移动距离 = 遮挡层移动距离 * 大图片最大移动距离 / 遮挡层的最大移动距离
            // 大图
            // 大图片最大移动距离
            var bigMax = rightImg.offsetWidth - boxRight.offsetWidth;
            // 大图片的移动距离 X Y
            var bigX = x1 * bigMax / maxX;
            var bigY = y1 * bigMax / maxY;
            rightImg.style.left = -bigX + 'px';
            rightImg.style.top = -bigY + 'px';
        }

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
        // 弹出框显示/隐藏
        $('.infoBuy').click(function () {
            $('.u-buy-gon').show();
            $('.popMask').show();
        })
        $('.u-buy-gon .dicon').click(function () {
            $('.u-buy-gon').hide();
            $('.popMask').hide();
        })

    })()
} else {
    alert("你还没选中商品")
    location = "./list.html"
}
dI.onclick = function (e) {
    var e = e || window.event
    // 获取点击对象
    var target = e.target || e.srcElement;
    if (target.type == 'number') {
        //获取localStorage中的cartList3
        var cartList = localStorage.getItem('cartList3');
        var inp = document.querySelector('[type="number"]');
        //判断当前获取的cartList是否存在
        if (cartList) {
            //把localStorage中获取的内容转为数组对象
            cartList = JSON.parse(cartList)
            var a = 0 //判断当前添加的商品是否在localStorage中存在
            //遍历数组中所有元素啊
            cartList.forEach(item => {
                //判断当前遍历的商品是否等于要添加的商品
                if (item.j_id == dt.j_id) {
                    a++
                    item.cart_number = inp.value
                }
            })
            //判断a变量是否等于0
            if (a == 0) {
                //修改商品数量
                dt.cart_number = 1
                //把当前对象追加到数组中
                cartList.push(dt)
            }
            //把当前商品添加到localStorage中
            localStorage.setItem("cartList3", JSON.stringify(cartList))
        } else {
            //修改当前商品数量
            dt['cart_number'] = inp.value
            //把当前商品添加到localStorage中
            localStorage.setItem("cartList3", JSON.stringify([dt]))
        }

    }
}

// 获取cookie
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
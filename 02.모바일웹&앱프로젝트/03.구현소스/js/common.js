// JS


Vue.component("top-com",{
    template:`
    <div class= "top">
        <div class="top_wrap">
            <div class="logo">
                <a href="./index.html">MUSIUM</a>
            </div>
            <nav class="gnb">
                <ol class="gnb_ol">
                    <li></li>
                    <li class="cart" @click.prevent="openCart"></li>
                    <li></li>
                    <li></li>
                </ol>
                <!-- 햄버거버튼 -->
                <div class="toggle-button">
                    <div class="menu-bar menu-bar-top"></div>
                    <div class="menu-bar menu-bar-middle"></div>
                    <div class="menu-bar menu-bar-bottom"></div>
                </div>
            </nav>
        </div>
        <!-- 미디어쿼리에서만 보임 -->
        <div class="media_gnb mob">
            <ol class="m_gnb">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ol>
        </div>
    </div>
    `,
    methods:{
        openCart(){
            $(".cartBox").addClass("open")
            $(".top_area, .lnb_area, .cont_area, .top, .info").addClass("fil")
        }
    }
})

new Vue({
    el:".top",
})



Vue.component("info-com",{
    template:`
    <div class="info">
        <div class="info_logo">
            <h2><a href="#">MUSIUM</a></h2>
        </div>
        <div class="info_cont">
            <h3>INFO@MUSIUM</h3>
        </div>
        <div class="privacy">
            <h3>Privacy&terms</h3>
        </div>
    </div>
    `,
})

new Vue({
    el:'.info_real',
})

// 대상
const top = $(".top");
const gnb_ol = $(".gnb_ol");
const gnb_li = $(".gnb_ol li");
const gnb_arr = ["Product", "Cart", "Support", "Contact"];
const ham = $(".ham");
const media_gnb = $(".media_gnb");
const m_gnb = $(".m_gnb li");

// gnb 출력
gnb_li.each(function (idx, ele) {
    $(ele).html(`
        <a href="#" class="yellow underline">${gnb_arr[idx]}</a>
    `);

}); ///////// each ////////////

$(".gnb li a").eq(0).attr("href","./sub_product.html")
$(".gnb li a").eq(2).attr("href","./sub_support.html")
$(".gnb li a").eq(3).attr("href","./sub_contact.html")


m_gnb.each(function (idx, ele) {
    $(ele).html(`
        <a href="#">${gnb_arr[idx]}</a>
    `);
}); ///////// each ////////////

// top영역 스크롤 시 사라짐
let last_top = 0;


$(window).scroll(function () {
    // 모바일 변수
    let mobi = 0;
    let winW = window.innerWidth;
    
    // 모바일 크기에 따라서 변수 달라짐
    if(winW < 800) mobi =1

    let this_top = $(this).scrollTop();
    if (this_top > last_top && mobi===0) {
        $(".top").addClass("on");
    } else {
        $(".top").removeClass("on");
    }
    last_top = this_top;
}); //////////// scroll //////////////


// 모바일 햄버거버튼
let toggleButton = $('.toggle-button');
const m_gnb_a = $(".m_gnb li a");
// Hamburger button
toggleButton.on('click', function() {
    $(this).toggleClass('button-open');
    $(media_gnb).toggleClass("active");

    setTimeout(()=>{
        $(m_gnb_a).each(function(idx,ele){
            $(ele).toggleClass("on")
        })/////////// each /////////////
    },800); //////////////// setTimeout /////////////

});///////////// click ////////////////

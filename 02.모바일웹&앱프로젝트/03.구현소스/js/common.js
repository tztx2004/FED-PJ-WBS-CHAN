// JS
console.log("common");

Vue.component("top-com",{
    template:`
    <div class= "top">
        <div class="top_wrap">
            <div class="logo">
                <a href="#">MUSIUM</a>
            </div>
            <nav class="gnb">
                <ol class="gnb_ol">
                    <li></li>
                    <li class="cart"></li>
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
        <div class="cartBox">
            <h2>Cart</h2>
            <span>X</span>
            <ul>
                <li class="cart_pic"></li>
                <li class="cart_tit"></li>
                <li class="cart_cnt"></li>
            </ul>
            <div class="subtotal_part">
                <span>Subtotal</span>
                <span class="cart_price">$300</span>
            </div>
            <button>CheckOut</button>
        </div>
    </div>
    `,
})

new Vue({
    el:".top",
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

m_gnb.each(function (idx, ele) {
    $(ele).html(`
        <a href="#">${gnb_arr[idx]}</a>
    `);
}); ///////// each ////////////

// addEventListener("scroll",(e)=>{
//     const direction = e.deltaY > 0 ? "Scroll Down" : "Scroll Up";
//     // 방향과 현 스크롤 위치
//     console.log(direction, window.scrollY);
// });

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


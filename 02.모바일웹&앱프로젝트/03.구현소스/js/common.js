// JS
console.log("common");
// 대상
const top = $(".top");
const gnb_ol = $(".gnb_ol");
const gnb_li = $(".gnb_ol li");
const gnb_arr = ["Product", "Service", "Support", "Contact"];
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

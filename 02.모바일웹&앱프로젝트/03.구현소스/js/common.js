// JS
console.log("common");
// 대상
const top = $(".top");
const gnb_ol = $(".gnb_ol");
const gnb_li = $(".gnb_ol li");
const gnb_arr = ["Product", "Service", "Support", "Contact"];

// gnb 출력
gnb_li.each(function (idx, ele) {
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
    var this_top = $(this).scrollTop();
    if (this_top > last_top) {
        $(".top").addClass("on");
    } else {
        $(".top").removeClass("on");
    }
    last_top = this_top;
}); //////////// scroll //////////////

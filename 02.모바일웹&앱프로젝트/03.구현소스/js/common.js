// JS
console.log("common")
// 대상
const top = $(".top");
const gnb_ol = $(".gnb_ol");
const gnb_li = $(".gnb_ol li");
const gnb_arr = ["Product","Service","Support","Contact"]

// gnb 출력
gnb_li.each(function(idx,ele){
    $(ele).html(`
        <a href="#">${gnb_arr[idx]}</a>
    `)
});///////// each ////////////


// addEventListener("scroll",(e)=>{
//     const direction = e.deltaY > 0 ? "Scroll Down" : "Scroll Up";
//     // 방향과 현 스크롤 위치
//     console.log(direction, window.scrollY);
// });

// top영역 스크롤 시 사라짐
window.addEventListener('wheel', e => {
    const scrollUp = e.deltaY > 0;
    // console.log(scrollUp)
    if (scrollUp) {// 스크롤다운
        $(top).addClass('on');
    } else {// 스크롤 업
        $(top).removeClass('on');
    }
});

// JS
$(()=>{
    console.log("hi")
    const top = $(".top");

    
    // addEventListener("scroll",(e)=>{
    //     const direction = e.deltaY > 0 ? "Scroll Down" : "Scroll Up";
    //     // 방향과 현 스크롤 위치
    //     console.log(direction, window.scrollY);
    // });

    // top영역 스크롤 시 사라짐
    window.addEventListener('wheel', e => {
        const scrollUp = e.deltaY > 0;
        // console.log(scrollUp)
        if ( window.scrollY > 100 &&  scrollUp) {// 스크롤다운
            $(top).addClass('on');
        } else {// 스크롤 업
            $(top).removeClass('on');
        }
    });
});/////////////////////////////////jQB//////////////////////////////////////////

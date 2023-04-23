// JS
$(()=>{
    console.log("hi")
    const top = $(".top");

    
    // addEventListener("scroll",(e)=>{
    //     const direction = e.deltaY > 0 ? "Scroll Down" : "Scroll Up";
    //     // 방향과 현 스크롤 위치
    //     console.log(direction, window.scrollY);
    // });

    window.addEventListener('scroll', e => {
        const scrollUp = e.deltaY <= 0;
        console.log(window.scrollY)
        if ( window.scrollY > 100 &&  scrollUp) {
            $(top).addClass('scrollUp');
        } else {
            $(top).removeClass('scrollUp');
        }
    });
});/////////////////////////////////jQB//////////////////////////////////////////

$(()=>{
    

    /* 양쪽글씨뒤집기 */
    let rt = $(".rotate-text");
    let rt1 = $(".rotate-text1");
    let rt2 = $(".rotate-text2");

    console.log("hi",rt2)

    $(window).on("scroll",()=>{
        

        let ws = $(window).scrollTop()
        let tg = rt1.offset().top;
        console.log("ws",ws,"tg",tg)
        if(ws > tg-700 && ws +300){
            $(rt).addClass("on")
            $(rt).html(`school`);


            // $(rt1).css({
            //     transform:
            //     `rotate(-90deg) rotateX(${ws/10-110}deg) translateY(133px)`
            // })
            // $(rt2).css({
            //     transform:
            //     `rotate(-90deg) rotateX(${ws/10}deg) translateY(133px)`
            // })
        }
    })

}); /////// load  //////
// main
const pg3_tit = $(".pg3_tit h3");
const pg3_tit1 = $(".pg3_tit1 h3");
const pg3_tit2 = $(".pg3_tit2 h3");

const pg3_items = $(".pg3_items");


window.addEventListener("wheel",()=>{
    let delta = event.deltaY>0
    let ot;
    pg3_items.each((idx,ele)=>{
        ot = $(ele).offset().top;
        let ws = window.scrollY;
        // console.log(ws)

        console.log("ot",ot,"ws",ws/10-190)
        if(delta&& ws >=ot){ // 스크롤 다운하면서 컨텐츠만나면 글씨변함
            console.log("nay",ws/10-190)
            $(pg3_tit1).css({
                transform: `rotate(-90deg) rotateX(${ws/10-190}deg) translateY(50%)`,
            });
            $(pg3_tit2).css({
                transform: `rotate(90deg) rotateX(${ws/10-190}deg) translateY(50%)`,
            });
            if(ws/10-190 >= 90){
                $(pg3_tit).html("TEST");
                $(pg3_tit1).css({
                    transform: `rotate(-90deg) rotateX(${ws/10-190-90}deg) translateY(50%)`,
                });
                $(pg3_tit2).css({
                    transform: `rotate(90deg) rotateX(${ws/10-190}deg) translateY(50%)`,
                });
            }
        }
        else{ // 스크롤 업하면서 컨텐츠만나면 글씨변함
            $(pg3_tit1).css({
                transform: `rotate(-90deg) rotateX(${ws/10-190}deg) translateY(50%)`,
                transtition:".6s easeout"
            });
            $(pg3_tit2).css({
                transform: `rotate(90deg) rotateX(${ws/10-190}deg) translateY(50%)`,
                transtition:".6s easeout"
            });
        }
    });////////////// each ///////////////
    
    

})/////////////// wheel //////////////////

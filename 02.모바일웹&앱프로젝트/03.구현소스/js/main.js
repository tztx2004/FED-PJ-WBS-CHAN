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
        console.log(ws)

        if(delta&& ws >=ot ){
            $(pg3_tit1).css({
                transform: `rotate(-90deg) rotateX(${ws/10-190}deg) translateY(50%)`,
                transtition:".6s easeout"
            });
            $(pg3_tit2).css({
                transform: `rotate(90deg) rotateX(${ws/10-190}deg) translateY(50%)`,
                transtition:".6s easeout"
            });
        }
        else{
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

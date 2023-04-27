// main
const pg3_tit = $(".pg3_tit h3");
const pg3_tit1 = $(".pg3_tit1 h3");
const pg3_tit2 = $(".pg3_tit2 h3");

const pg3_items = $(".pg3_items");


// 휠이벤트 //
window.addEventListener("wheel",()=>{
    // 글씨회전 함수(현재는 메인 3페이지에서 구현)
    rotFont();
    
    // 가로스크롤 (임시로 호출시켜놓음)
    hrScroll();

})/////////////// wheel //////////////////


function rotFont(){ // 글씨회전 함수
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
            }//////////// if //////////////
        }//////////////// if //////////////////
        else{ // 스크롤 업하면서 컨텐츠만나면 글씨변함
            $(pg3_tit1).css({
                transform: `rotate(-90deg) rotateX(${ws/10-190}deg) translateY(50%)`,
                transtition:".6s easeout"
            });
            $(pg3_tit2).css({
                transform: `rotate(90deg) rotateX(${ws/10-190}deg) translateY(50%)`,
                transtition:".6s easeout"
            });
        } /////////// else ////////////
    });////////////// each ///////////////
} ////////////////// rotFont_글씨회전 /////////////////



// 가로스크롤
function hrScroll(){
    // 스크롤 변수

    const pg2_cont = $(".pg2_containers");
    pg2_cont.css({
        left:``
    })

}/////////////// hrScroll ///////////////////
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
        // console.log(ot)

        // console.log("ot",ot,"ws",ws)
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
                transition:".6s ease-out"
            });
            $(pg3_tit2).css({
                transform: `rotate(90deg) rotateX(${ws/10-190}deg) translateY(50%)`,
                transition:".6s ease-out"
            });
        } /////////// else ////////////
    });////////////// each ///////////////
} ////////////////// rotFont_글씨회전 /////////////////


// 295% : ws = 8 : x
// 가로스크롤
function hrScroll(){
    const pg2_cont = $(".pg2_containers");
    // 스크롤 변수
    let ws = window.scrollY
    let ot = $(".pg2_cont");

    ot.each((idx,ele)=>{
        let oo = $(ele).offset().top;
        console.log(ele)
    })
    
    pg2_cont.css({
        left:`${-ws*295/1000}%`
    })
    // console.log(-ws*295/1000)
}/////////////// hrScroll ///////////////////
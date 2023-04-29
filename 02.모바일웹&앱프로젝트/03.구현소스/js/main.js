// main
const pg3_tit = $(".pg3_tit h3");
const pg3_tit1 = $(".pg3_tit1 h3");
const pg3_tit2 = $(".pg3_tit2 h3");

const pg3_items = $(".pg3_items");
const main_imgbx = $(".main_imgbx");

// 휠이벤트 //
window.addEventListener("wheel",()=>{
    // 글씨회전 함수(현재는 메인 3페이지에서 구현)
    // rotFont();
    
    // 새버전 글씨회전
    rotF();

    // 가로스크롤 (임시로 호출시켜놓음)
    hrScroll();

})/////////////// wheel //////////////////

let wds = ["YaHO","Goooooods","LALALA"]; // pg3에 들어갈 말
function rotF(){
    let delta = event.deltaY>0
    let ot;
    let pos = window.scrollY; // 현재 스크롤위치

    main_imgbx.each((idx,ele)=>{
        ot = $(ele).offset().top; // 그림 위치
        let elH = $(ele).height();

        if(pos>=ot && pos< ot+ elH){
            cls(pg3_tit1,wds[idx])
        }
        else if(pos>= ot+ elH){
            rev_on(pg3_tit1)
        }
        // console.log(pos,ot+elH);
    });/////////////////// each /////////////////////

    
    // 1. 내 위치를 구한다
    // 2. 각 사진의 offset().top값을 구한다
    // 3. 내 위치가 offset().top값을 넘어가면 클레스를 준다
    // 4. 기존 클래스를 지우고 다시 on, on2를 넣어준다

}//////////// rotF //////////////////

// on, on2클래스 줌
function cls(x,words){
    x.css({
        transition:"6s ease-out"
    });

    // 90도 돌아
    x.addClass("on")
    // 돌고 글자 변경
    setTimeout(() => {
        x.html(words);
    }, 1000);
    // 360도 회전
    x.addClass("on2")
}

// on, on2 클래스 뺌
function rev_on(x){
    x.css({
        transition:"none"
    })
    x.removeClass("on");
    x.removeClass("on2");
}


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
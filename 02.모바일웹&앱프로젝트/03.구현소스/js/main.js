// main
const pg3_tit = $(".pg3_tit h3");
const pg3_tit1 = $(".pg3_tit1 h3");
const pg3_tit2 = $(".pg3_tit2 h3");

const pg3_items = $(".pg3_items");
const main_imgbx = $(".main_imgbx");

// 휠이벤트 //
window.addEventListener("scroll",()=>{
    // 글씨회전 함수(현재는 메인 3페이지에서 구현)
    // rotFont();
    
    // 새버전 글씨회전
    rotF();

    // 이미지 변화
    chgImg()

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


async function sleep(time) {
    return new Promise((resolve, _) => {
        setTimeout(()=> {
            resolve();
        }, time)
    });
}

async function promiseCls(cb, t) {
    await sleep(t).then(_ => cb());
    return;
}

// on, on2클래스 주기
function cls(x,words){

    x.css({
        transition:"6s ease-out"
    })
    .addClass("on")
    .html(words)
    .addClass("on2")

    // x.css({
    //     transition:"6s ease-out"
    // }).addClass("on").delay(1000).queue(function(next){
    //     x.html(words);
    //     console.log(x)
    //     next();
    // }).addClass("on2");
    

    // x.css({
    //     transition:"6s ease-out"
    // })
    // .addClass("on")
    // .delay(1000)
    // .html(words)
    // .addClass("on2")

    // 90도 돌아
        // x.addClass("on").html(words).addClass("on2")
    // 돌고 글자 변경
        // x.html(words)
    // 360도 회전
        // x.addClass("on2")


    // // 90도 돌아
    // await promiseCls(() => {
    //     x.addClass("on")
    //     console.log(1);
    // }, 1)
    // // 돌고 글자 변경
    // await promiseCls(() => {
    //     x.html(words)
    // },2000)
    // // 360도 회전
    // await promiseCls(() => {
    //     x.addClass("on2")
    //     console.log(3)
    // }, 1);
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



















//////////////////////// vue /////////////////////////////
// test vue, 2페이지 그림사진 줌
const tsData = {
    obj:`
        <li>
            <img class="main_img" v-bind:src="gsrc" alt="이미지">
        </li>
    `,
    obj2:``
}

// 숫자증감변수
let num =0;

Vue.component("test-comp",{
    template:`
        <li>
            <img class="main_img" v-bind:src="gsrc" alt="이미지">
        </li>
    `,
    data:function(){
        return{
            gsrc:`./img/main/pg2/pic${this.setNum()}.jpg`,
        }
    },
    methods:{
        setNum(){
            num+=1;
            return num;
        }
    }
});

new Vue({
    el:".pg2",
});
///////////////////////////////////////////////////////////

let m_img = $(".main_img");
let cnt=1;
/// 스크롤 시 이미지 변함
function chgImg(){
    const wT = $(window).scrollTop(); // 윈도우 스크롤 위치
    let imgpos = m_img.offset().top;
    
    if(imgpos/50 < 70) cnt = Math.floor(imgpos / 50);
    m_img.attr("src",`./img/main/pg2/pic${cnt}.jpg`);

    if(imgpos > 1300){
        $(".imgbx_cont p").animate({
            opacity:1
        },2000)
    }

    if(imgpos > 1100 && imgpos < 3000){
        $(".pg2 .pg2_wrap").addClass("on")
    }
    else{
        $(".pg2 .pg2_wrap").removeClass("on")
    }

    console.log(cnt,imgpos);
    
}/////////////////// chgImg ////////////////


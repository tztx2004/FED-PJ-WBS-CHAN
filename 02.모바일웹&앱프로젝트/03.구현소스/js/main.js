// main

// 숫자증감변수
let num =0;

Vue.component("main-com",{
    template:`
    <div class="main">
    <div class="pg pg1 ht_m">
            <div class="vdbx">
                <video class="main_vd" src="./img/main/main_ani.webm" muted loop></video>
                <div class="title">
                    <h1>Musium</h1>
                </div>
            </div>
        </div>
        
        <div class="pg pg2">
            <div class="pg2_wrap">
                <!-- <div class="pg2_fontbx">
                </div> -->
                <div class="pg2_imgbx">
                    <ul class="imgbx_cont">
                        <p>You can enjoy many pictures and content on this page. Also, you can buy a painting if you like it. Feel healing with reasonable cost and beautiful pictures!</p>
                        <li>
                            <img class="main_img" v-bind:src="gsrc" alt="이미지">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div class="pg pg3 ht">
            <div class="pg3_wrapper">
                <div class="pg3_tit pg3_tit1">
                    <h3>MUSIUM</h3>
                </div>
                <div class="pg3_cont">
                    <div class="pg3_real">
                        <h2>OUR WORK</h2>
                    </div>
                    <div class="pg3_items">
                        <div class="main_imgbx">
                            <img src="./img/sub/origin/All/1.jpg" alt="테스트이미지">
                        </div>
                        <div class="img_dsc">
                            <h3>An exclusive 9 colour screen print on 250 gsm Fabriano Unica paper</h3>
                        </div>
                    </div>
                    <div class="pg3_items">
                        <div class="main_imgbx">
                            <img src="./img/sub/origin/All/10.jpg" alt="테스트이미지">
                        </div>
                        <div class="img_dsc">
                            <h3>Signed A2 offset on Munken Lynx Rough 170 gsm paper</h3>
                        </div>
                    </div>
                    <div class="pg3_items">
                        <div class="main_imgbx">
                            <img src="./img/sub/origin/All/19.jpg" alt="테스트이미지">
                        </div>
                        <div class="img_dsc">
                            <h3>4 color risograph print on 240 gsm Munken Pure archival paper</h3>
                        </div>
                    </div>
                </div>
                <div class="pg3_tit pg3_tit2">
                    <h3>MUSIUM</h3>
                </div>
            </div>
        </div>
    </div>
    `,
    data(){
        return{
            gsrc:`./img/main/pg2/pic${this.setNum()}.jpg`,
        }
    },
    methods:{
        setNum(){
            num+=1;
            return num;
        },
    }
})

new Vue({
    el:".main_real",
})
///////////////////////////////////////////////////////////
const pg3_tit = $(".pg3_tit h3");
const pg3_tit1 = $(".pg3_tit1 h3");
const pg3_tit2 = $(".pg3_tit2 h3");

const pg3_items = $(".pg3_items");
const main_imgbx = $(".main_imgbx");






setTimeout(() => {
    $(".title h1").addClass("on")
    let vd = document.querySelector(".main_vd")
    vd.autoplay=true
    vd.load()
}, 1000);

let m_img = $(".main_img");
let cnt=1;
/// 스크롤 시 이미지 변함
function chgImg(){
    const wT = $(window).scrollTop(); // 윈도우 스크롤 위치
    let imgpos = m_img.offset().top;
    let pg2_top = $(".pg2_wrap").offset().top
    let pg2_h =$(".pg2_wrap").height()
    // 이미지 경로변화 -> 이미지 바뀜
    cnt = Math.floor((imgpos-pg2_top)/40);
    // console.log("ip",imgpos,pg2_top,cnt)
    if(cnt<70 && cnt>0) m_img.attr("src",`./img/main/pg2/pic${cnt}.jpg`);
    // 사진이 70장있음


    if(imgpos > pg2_top){
        $(".imgbx_cont p").animate({
            opacity:1
        },2000)
    }

    if(imgpos > pg2_top && imgpos < (pg2_top+pg2_h)*0.8){
        $(".pg2 .pg2_wrap").addClass("on")
    }
    else{
        $(".pg2 .pg2_wrap").removeClass("on")
    }
}/////////////////// chgImg ////////////////



/////// main 3pg ///////////
// 휠이벤트 //
window.addEventListener("scroll",()=>{
    // 글씨회전 함수(현재는 메인 3페이지에서 구현)
    // rotFont();

    // 이미지 변화
    chgImg()

    // 새버전 글씨회전
    rotF();

})/////////////// wheel //////////////////



let wds = ["SCREEN","OFFSET","RISOGRAPHS"]; // pg3에 들어갈 말
let prot = 0; // 1-불허용, 0-허용

function rotF(){
    if (prot) return;
    prot = 1; //잠금!
    setTimeout(() => prot = 0);
    let delta = event.deltaY>0
    let ot; // 그림 위치
    let pos = window.scrollY; // 현재 스크롤위치
    let cz = 0;
    $(()=>{
        $(".main_imgbx").each((idx,ele)=>{
            ot = $(ele).offset().top; // 그림 위치
            let elH = $(ele).height(); // 그림 높이

            if(pos>=ot +150 && pos< ot+ elH - 150){
                console.log(idx)
                cls(pg3_tit1,wds[idx])
                cls(pg3_tit2,wds[idx])
            }
            else if(pos>= ot+ elH){
                rev_on(pg3_tit1)
                rev_on(pg3_tit2)
            }
            // console.log(pos,ot+elH);
        });/////////////////// each /////////////////////

    })
    // 1. 내 위치를 구한다
    // 2. 각 사진의 offset().top값을 구한다
    // 3. 내 위치가 offset().top값을 넘어가면 클레스를 준다
    // 4. 기존 클래스를 지우고 다시 on, on2를 넣어준다

}//////////// rotF //////////////////

// on, on2클래스 주기
function cls(x,words){
    x.addClass("on3")
    setTimeout(() => {
        x.html(words)
    }, 500);
    
}

// on, on2 클래스 뺌
function rev_on(x){
    x.removeClass("on3");
    // x.removeClass("on");
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


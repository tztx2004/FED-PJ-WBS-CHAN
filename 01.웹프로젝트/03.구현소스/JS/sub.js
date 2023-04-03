window.addEventListener("DOMContentLoaded",()=>{
    
/************************** 1페이지 **************************/
// 1. 대상
// 타이틀
const pg1_tit = document.querySelector(".pg1_title>.tit");

// 스티키
const sticky_imgbx = document.querySelector(".sticky_imgbx");
const imgbx_ul = document.querySelector(".imgbx ul");
const imgbx_li = document.querySelectorAll(".imgbx ul li");

// 버튼
const gbtn = document.querySelectorAll(".gbtn");

// 색상
const palate_img = document.querySelectorAll(".palate>img");
const palate_copy = document.querySelector(".palate_copy");
// console.log(palate_img.length);

// 색상배열
const palate = ["Deep Purple","Gold","Silver","Space Black"];
const palate_s = ["deeppurple","gold","silver","spaceblack"];

// border
const brick1 = document.querySelectorAll(".brick1");
const brick2 = document.querySelectorAll(".brick2");
const brick_a = document.querySelectorAll(".brick a");

// brightness 변경주기 위한 변수, scrollTo offsetTop값 주기위한 변수
const model = document.querySelector(".model");
const finish_color = document.querySelector(".finish_color");
const storage = document.querySelector(".storage");

// 2. html 삽입
// 2-1. 타이틀삽입
pg1_tit.innerHTML = `
    <h4>New</h4>
    <h2>Buy iPhone 14 Pro</h2>
    <h3>From $999 or $41.62/mo.per month for 24 mo.months before trade‑in*</h3>
`;

// 2-2. 스티키대상 이미지 삽입
//////////// 색상변경 필요 //////////////


let arr_palate = [palate_img,imgbx_li];
// 2-2-1. 버튼 클릭 시 이미지 변환
// arr_palate[0].forEach((ele,idx)=>{
//     ele.onclick = ()=>{
//         console.log(idx);
//         arr_palate[1].forEach((ele2,idx2)=>{
//             ele2.innerHTML = `
//                 <img src="./image/sub_buy/fin${idx}_iphone-14-pro-${palate_s[idx2]}.jpeg" alt="이미지">
//             `;
//             console.log(idx,idx2);
//         })
//     };//////////// onclick //////////////
// });/////////// forEach ///////////////

let cnum = 0;


// tsub 기본기능 막기
const tsub = document.querySelectorAll(".tsub a");

tsub.forEach((ele,idx)=>{
    ele.onclick = ()=>{
        event.preventDefault();
    }; /////////// click /////////////
}); //////////// forEach ////////////


/************************************************** 
    기능: 색상버튼 클릭 시 사진 등장
**************************************************/
// 처음에 나와있기
imgbx_li.forEach((ele,idx)=>{
    ele.innerHTML = `
        <img src="./image/sub_buy/fin${idx}_iphone-14-pro-${palate_s[0]}.jpeg" alt="이미지">
    `;
});//////////////// forEach ///////////////////

// 클릭 시 이미지 변경
palate_img.forEach((ele,idx)=>{
    ele.onclick = ()=>{
        // 이미지 삽입
        forPal(idx)

        // 아래로 이동
        scrollTo({
            top:storage.offsetTop - 100,
            behavior:"smooth"
        });

        // storage brightness 변경
        storage.style.filter = "brightness(1)";

        // storage 클릭 가능 하게하기
        storage.style.pointerEvents = "auto";
    };////////// click ///////////
}); /////////////// forEach //////////////

// 이미지 삽입 함수
function forPal(seq){
    imgbx_li.forEach((ele,idx)=>{
        ele.innerHTML = `
            <img src="./image/sub_buy/fin${idx}_iphone-14-pro-${palate_s[seq]}.jpeg" alt="이미지">
        `;
    });//////////////// forEach ///////////////////
}

// 광클금지변수 : 0 - 허용, 1 - 불허용
let prot = 0;

/******************************************************* 
    함수 : goSlide
    기능 : 버튼을 누르면 이미지 left가 변경됨
*******************************************************/

const goSlide = (seq) => {

    // 광클금지 설정하기 //////
    if (prot) return;
    prot = 1; // 잠금!
    setTimeout(() => {
        prot = 0; // 해제!
    }, 400); /// 0.4초후 해제! ///
    
    let imgbx_li = imgbx_ul.querySelectorAll("li");

    if(seq){
        imgbx_ul.style.left ="-100%";
        imgbx_ul.style.transition = "left .2s ease-in-out";

        setTimeout(()=>{
            imgbx_ul.appendChild(imgbx_li[0]);
            // (2-2)동시에 left값을 0으로 변경한다!
            imgbx_ul.style.left = "0";
            // (2-3)트랜지션 없애기
            imgbx_ul.style.transition = "none";
        },400); ///////////// timeout /////////
    }
    else{
        imgbx_ul.insertBefore(imgbx_li[imgbx_li.length-1],imgbx_li[0]);
        imgbx_ul.style.left = "-100%";
        imgbx_ul.style.transition = "none";
        

        setTimeout(()=>{
            imgbx_ul.style.left ="0";
            imgbx_ul.style.transition = "left .2s ease-in-out";
        },0); ///////////// 타임아웃 ///////////
    }
    

}; //////////// goSlide /////////////

/* goSlide 호출 */
gbtn.forEach((ele,idx)=>{
    ele.onclick = ()=>{
        goSlide(idx);
    }; ////////// click ////////////
}); /////////// forEach /////////////





// 2-3. 색상 호버 시 글자삽입
palate_img.forEach((ele,idx)=>{
    ele.onmouseover = ()=>{
        palate_copy.innerHTML = `<h2>Color - ${palate[idx]}</h2>`;
    };/////////// mouseover ////////////
});///////////// forEach //////////////


// 2-4. .brick 클릭되면 border 색상 주기(클래스), 페이지 아래로 이동
for (let x of brick1) {
    x.addEventListener('click', function() {
        // 클래스on
        document.querySelectorAll(".brick1").forEach(x => x.classList.remove("on"));
        this.classList.add("on");

        // brightness 변경
        finish_color.style.filter = "brightness(1)";

        // 페이지 이동
        window.scrollTo({
            top:finish_color.offsetTop - 200,
            behavior:"smooth"
        }); ////////// scrollTo /////////

        // 다시 클릭가능 하게 하기
        finish_color.style.pointerEvents = "auto";
    }); ////////////////// click /////////////////
  }; ///////////// for of ///////////////////

  for (let x of brick2) {
    x.addEventListener('click', function() {
      document.querySelectorAll(".brick2").forEach(x => x.classList.remove("on"));
      this.classList.add("on");

      // 페이지 이동
      window.scrollTo({
        top:evt_banner.offsetTop - 550,
        behavior:"smooth"
      })
    })////////// click ////////////
    }//////////// for of /////////////

// a기능 막기
brick_a.forEach((ele,idx)=>{
    ele.onclick = ()=>{
        event.preventDefault();
    };
});

/*************************************************** 
    기능 : evt_banner(total)에 값 넣기
***************************************************/
const evt_banner = document.querySelector(".evt_banner");
const price = ["1099$","1199$","1399$","1599$"];
brick2.forEach((ele,idx)=>{
    ele.onclick = ()=>{
        evt_banner.innerHTML = `
            <h2>Total : ${price[idx]}</h2>
        `;
    };/////////// onclick ///////////
}); ////////////// forEach ///////////////




/************************** 6페이지 **************************/
const con_img = document.querySelectorAll(".con_img");
const pro_img = document.querySelector(".pro_img");
const norm_img = document.querySelector(".norm_img");
const norm13_img = document.querySelector(".norm13_img");
const se_img = document.querySelector(".se_img");

const row_camera = document.querySelectorAll(".row_camera");
const camera = ["_14_pro_","_14_","_13_","_se_"];
const camera_h = ["Pro camera system","Advanced dual-camera system","Dual-camera system","Advanced camera"];

const hv = window.innerHeight/3*2;
const retVal = ele => ele.getBoundingClientRect().top;


/* 사진 떠오르는 액션 */
// 사진효과주기
function imgEffect(ele){
    window.addEventListener("scroll",()=>{
        // console.log("retval",retVal(ele));
        if(retVal(ele) < hv*1.6 && retVal(ele) > 0) ele.classList.add("on");
        else if(retVal(ele) < 0 || retVal(ele) >= hv*1.6) {
            ele.classList.remove("on");
        }
        // console.log("hv",hv);
    });///////////////// scroll ////////////////
};

function imgEffect2(ele){
    window.addEventListener("scroll",()=>{
        ele.forEach(ele=>{
            // console.log("retval",retVal(ele));
            if(retVal(ele) < hv && retVal(ele) > 0) ele.classList.add("on");
            else if(retVal(ele) < 0 || retVal(ele) >= hv) {
                ele.classList.remove("on");
            }
        }); ////////// forEach //////////
        // console.log("hv",hv);
    });///////////////// scroll ////////////////
}







// 사진 올라오는 효과
imgEffect2(con_img);
// 카메라info
row_camera.forEach((ele,idx)=>{
    ele.innerHTML = `
    <img src="./image/apple/icon${camera[idx]}camera.png" alt="카메라 아이콘">
    <h3>${camera_h[idx]} system</h3>
    `;
});

const row_battary = document.querySelectorAll(".row_battary");
const row_battary_h = ["29","26","19","15"];

// 배터리info
row_battary.forEach((ele,idx)=>{
    ele.innerHTML = `
        <img src="./image/apple/icon_battery.png" alt="배터리아이콘">
        <h3>Up to ${row_battary_h[idx]} hours</h3>
    `;
});

const row_chip = document.querySelectorAll(".row_chip");
const chip = ["a16","a15","a15","a15"];
const row_chip_h = ["A16 Bionic chip","A15 Bionic chip","A15 Bionic chip","A15 Bionic chip","","with 5-core GPU","with 4-core GPU","with 5-core GPU"];

// chip_set info
row_chip.forEach((ele,idx)=>{
    ele.innerHTML = `
        <img src="./image/apple/icon_${chip[idx]}.png" alt="칩셋 아이콘">
        <h3>${row_chip_h[idx]}<br>${row_chip_h[idx+4]}</h3>
    `;
});

}); ////////////////////// 로드구역 ///////////////////////////////////
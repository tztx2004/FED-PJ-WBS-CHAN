window.addEventListener("DOMContentLoaded",()=>{
    
/************************** 1페이지 **************************/
// 1. 대상
// 타이틀
const pg1_tit = document.querySelector(".pg1_title>.tit");

// 스티키
const sticky_imgbx = document.querySelector(".sticky_imgbx");
const sticky_imgbx_ul = document.querySelector(".sticky_imgbx ul");
const sticky_imgbx_li = document.querySelectorAll(".sticky_imgbx ul li");

// 버튼
const gbtn = document.querySelectorAll(".gbtn");

// 색상
const palate_img = document.querySelectorAll(".palate>img");
const palate_copy = document.querySelector(".palate_copy");
console.log(palate_img.length);

// 색상배열
const palate = ["Deep Purple","Gold","Silver","Space Black"];

// 2. html 삽입
// 2-1. 타이틀삽입
pg1_tit.innerHTML = `
    <h4>New</h4>
    <h2>Buy iPhone 14 Pro</h2>
    <h3>From $999 or $41.62/mo.per month for 24 mo.months before trade‑in*</h3>
`;

// 2-2. 스티키대상 이미지 삽입

// 2-2-1. 버튼 클릭 시 이미지 변환
gbtn.forEach((ele,idx)=>{
    ele.onclick = ()=>{
        
    };/////////// click ////////////
}); //////////// forEach ///////////////

// 2-3. 색상 호버 시 글자삽입

palate_img.forEach((ele,idx)=>{
    ele.onmouseover = ()=>{
        palate_copy.innerHTML = `<h2>Color - ${palate[idx]}</h2>`;
    };/////////// mouseover ////////////
});///////////// forEach //////////////






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
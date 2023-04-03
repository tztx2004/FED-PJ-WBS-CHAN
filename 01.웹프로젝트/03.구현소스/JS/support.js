window.addEventListener("DOMContentLoaded",()=>{

const title_sup = document.querySelector(".title_sup");

window.onload = ()=>{
    title_sup.style.transform = "translateY(0%) "
    title_sup.style.opacity = "1"
}; ////////// onload /////////////



const sup_item = document.querySelectorAll(".sup_item");
sup_item.forEach((ele,idx)=>{
    ele.style.background = `
        url(./image/apple/i${idx}.png) no-repeat center/cover
    `;
}); /////////// forEach /////////////


const sup_title = document.querySelectorAll(".sup_title");
const sup_tit = ["iPhone","iPad","Mac"];
sup_title.forEach((ele,idx)=>{
    ele.innerHTML = `${sup_tit[idx]}`;
}); ///////////// forEach ////////////





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

}); //////////////////// 로드 구역 //////////////////////////////
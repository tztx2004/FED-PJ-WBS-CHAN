window.addEventListener("DOMContentLoaded",()=>{
    
    // 필요 대상
    const top = document.querySelector(".top");
    const List = document.querySelectorAll(".gnb>ul>li");
    const sub_menu = document.querySelectorAll(".sub_menu");
    const search = document.querySelector(".search img");

    const gbtn = document.querySelectorAll(".gbtn");
    const btn_n = document.querySelector(".btn_n")
    const btn_p = document.querySelector(".btn_p")
    const gimg = document.querySelector(".gimg");
    // 상단바 배경
    
    for(let x of List){
        x.style.transition = ".2s";
        x.onmouseover = ()=>{
            top.style.height = "150px";
            top.style.transition = ".2s";
        }
        x.onmouseleave = ()=>{
            top.style.height = "44px";
        }
    } //////////////// for of ////////////////////

    search.addEventListener("click",()=>{
        top.style.height = "150px";
        top.style.transition = ".2s";
    });/////////////// click //////////////////

    /////////////////////////// 3pg //////////////////////////////
    let num = 1;
    ///////////// 첫번째 사진 나와있기 ////////////////
    gimg.innerHTML =`
        <img src="./image/apple/lock_screen_1.jpg" alt="아이폰이미지">
    `;

    for(let x of gbtn){
        let TT = x.innerText;
        x.onclick = ()=>{
            
            if(TT === ">"){
                num++;
                if(num===9) num=1;
                gimg.innerHTML =`
                <img src="./image/apple/lock_screen_${num}.jpg" alt="아이폰이미지">
                `;
            }/////////////// if ///////////////////
            else if(TT === "<"){
                num--;
                if(num===0) num=8;
                gimg.innerHTML =`
                <img src="./image/apple/lock_screen_${num}.jpg" alt="아이폰이미지">
                `;
            }/////////////// else if ///////////////////
        };//////////////////// click /////////////////
    } ///////////////////// for of ////////////////////////





}); ////////////////////// 로드구역 ///////////////////////////////////
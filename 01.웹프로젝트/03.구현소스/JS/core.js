// 상단부분 js

//////////////////// 로드구역 //////////////////////
window.addEventListener("DOMContentLoaded",()=>{
    console.log("core");

    // 대상
    const search = document.querySelector(".search");
    const search_bar = document.querySelector(".search_bar");
    const header_main = document.querySelector(".header_main");
    const header_right = document.querySelector(".header_right");

    const bag = document.querySelector(".bag");

    /***************************************** 
        기능 : 검색바 오버시 gnb 투명해짐
    *****************************************/
    search.onmouseover = ()=>{
        // header_main.style.opacity = 0;
        header_right.style.width = "40vw";
    }; /////////////// onmouseover ///////////////////
    search.onmouseleave = ()=>{
        if(search_bar.value.length === 0) {
            header_right.style.width = "25vw";
            header_main.style.opacity = 1;
        }
        if(search_bar.value.length > 0) header_main.style.opacity = 0;
    }; /////////////// onmouseleave ///////////////////
    


    /******************************************* 
        기능 : 
    *******************************************/

}); ///////////////// 로드구역 ////////////////////////
window.addEventListener("DOMContentLoaded",()=>{
    
    // 필요 대상
    const top = document.querySelector(".top");
    const List = document.querySelectorAll(".gnb>ul>li");
    const sub_menu = document.querySelectorAll(".sub_menu");
    const search = document.querySelector(".search img");
    // 상단바 배경
    
    for(let x of List){
        x.style.transition = ".4s";
        x.onmouseover = ()=>{
            top.style.height = "150px";
        }
        x.onmouseleave = ()=>{
            top.style.height = "44px";
        }
    } //////////////// for of ////////////////////

    search.addEventListener("click",()=>{
        top.style.height = "150px";
        top.style.transition = ".4s";
    });/////////////// click //////////////////


});
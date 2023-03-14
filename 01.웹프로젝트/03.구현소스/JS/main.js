window.addEventListener("DOMContentLoaded",()=>{
    
    // 필요 대상
    const top = document.querySelector(".top");
    const List = document.querySelectorAll(".gnb>ul>li");
    const sub_menu = document.querySelector(".sub_menu");

    // 상단바 배경
    for(let x of List){
        x.style.transition = ".4s";
        x.onmouseover = ()=>{
            top.style.height = "150px";
            top.style.transition = "height .4s";
            
        }
        x.onmouseleave = ()=>{
            top.style.height = "44px";
        }
        
    } //////////////// for of ////////////////////

    sub_menu.style.transition = ".4s";

});
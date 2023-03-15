// 상단부분 js

//////////////////// 로드구역 //////////////////////
window.addEventListener("DOMContentLoaded",()=>{
    console.log("core");

    // 대상
    // 필요 대상
    const List = document.querySelectorAll(".gnb>ul>li");
    const sub_menu = document.querySelectorAll(".sub_menu");

    const top = document.querySelector(".top");
    const search = document.querySelector(".search");
    const search_bar = document.querySelector(".search_bar");
    const header_main = document.querySelector(".header_main");
    const header_right = document.querySelector(".header_right");
    const icon = document.querySelector(".c")
    const bag = document.querySelector(".bag");
    const bag_c = document.querySelector(".bag_comment");
    const search_imgbx = document.querySelector(".search_imgbx")

    const gnb_a = document.querySelectorAll(".gnb a");

    /* gnb 닿을 때 .top으로 배경 채워줌 */
    for(let x of List){
        x.onmouseover = ()=>{
            top.classList.add("on");
        } //////////// onmouseover //////////////
        x.onmouseleave = ()=>{
            top.classList.remove("on");
            bag_c.classList.remove("on");
        }//////////// onmouseleave ////////////
    } //////////////// for of ////////////////////


    /***************************************** 
        기능 : 검색바 오버시 검색바 크기에 의해 .search의 right값 수정
    *****************************************/
    search.onmouseover = ()=>{
        // header_main.style.opacity = 0;
        search.style.right = "15%";
    }; /////////////// onmouseover ///////////////////
    search.onmouseout = ()=>{
        if(search_bar.value.length === 0) {
        search.style.right = "19%";
        } /////////// if /////////////
    }; /////////////// onmouseout ///////////////////
    
    
    /************************************* 
        장바구니 클릭 시 장바구니 창 나옴
    *************************************/
    bag.onclick = ()=>{
        if(top.classList.contains("on")){
            top.classList.remove("on");
            bag_c.classList.remove("on");
        } ///////////// if ///////////////
        else{
            console.log("장바구니 눌럿음")
            top.classList.add("on");
            setTimeout(()=>{
                bag_c.classList.add("on");
            },200); ///// setTimeout //////
        } ////////// else ///////////
    }; //////////////// onclick ////////////////
    // console.log(top.classList.contains("on"));
    
    /* 마우스 벗어나면 장바구니 들어감 */
    top.onmouseleave = ()=>{
        // console.log("leave");
        top.classList.remove("on");
        bag_c.classList.remove("on");
    };
    
    

    /******************************************* 
        기능 : .gnb a 오버 시 약간 커짐
    *******************************************/
    


}); ///////////////// 로드구역 ////////////////////////
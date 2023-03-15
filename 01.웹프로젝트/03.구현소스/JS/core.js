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


    for(let x of List){
        x.onmouseover = ()=>{
            top.style.height = "150px";
        }
        x.onmouseleave = ()=>{
            top.style.height = "44px";
        }
    } //////////////// for of ////////////////////


    /***************************************** 
        기능 : 검색바 오버시 gnb 투명해짐
    *****************************************/
    search.onmouseover = ()=>{
        // header_main.style.opacity = 0;
        header_right.style.width = "40vw";
    }; /////////////// onmouseover ///////////////////
    search.onmouseout = ()=>{
        if(search_bar.value.length === 0) {
        header_right.style.width = "25vw";
        }
    }; /////////////// onmouseleave ///////////////////
    
    
    /************************************* 
        장바구니 클릭 시 장바구니 창 나옴
    *************************************/
    bag.onclick = ()=>{
        top.classList.add("on");
        setTimeout(()=>{
            bag_c.classList.add("on");
        },200);
        
        // if(top.classList.contains("on") === true){
        //         top.classList.remove("on");
        //         bag_c.classList.remove("on");
        //     }
    }; //////////////// onclick ////////////////
    // console.log(top.classList.contains("on"));
    
    /* 마우스 벗어나면 장바구니 들어감 */
    top.onmouseleave = ()=>{
        // console.log("leave");
        top.classList.remove("on");
        bag_c.classList.remove("on");
    };
    
    

    /******************************************* 
        기능 : 
    *******************************************/

}); ///////////////// 로드구역 ////////////////////////
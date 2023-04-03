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
    const search_icon = document.querySelector(".search_icon");
    const search_new = document.querySelector(".search_new");


    const header_main = document.querySelector(".header_main");
    const header_right = document.querySelector(".header_right");
    const icon = document.querySelector(".c")
    const bag = document.querySelector(".bag");
    const bag_a = document.querySelector(".bag>a");
    const bag_c = document.querySelector(".bag_comment");
    const search_imgbx = document.querySelector(".search_imgbx")

    const ham = document.querySelector(".ham");

    const gnb = document.querySelector(".gnb");
    const gnb_a = document.querySelectorAll(".gnb a");

    
    // 부드러운 스크롤 JS호출!
    startSS();

    // 만약 스크롤바를 직접 드래그할 경우
    // mouseup(즉, 스크롤바를 놓는경우)
    // 이벤트 발생 시 Y축 스크롤바 위치를
    // pos전역변수에 업데이트한다
    window.addEventListener("mouseup",()=>{
        pos = window.scrollY;
    });////////////// mouseup ////////////////////



    

    /***************************************** 
        기능 : gnb 닿을 때 .top으로 배경 채워줌
    *****************************************/
    
    for(let x of List){
        x.onmouseover = ()=>{
            
            if(top.classList.contains("active")) {
                top.classList.remove("on");  
                bag_c.classList.remove("on");
                search_new.classList.remove("on");
                sub_menu.forEach(ele=>ele.classList.add("h0"));
            } else{
                top.classList.add("on")
                bag_c.classList.remove("on");
                search_new.classList.remove("on");
            }
            // top.classList.remove("active");
        } //////////// onmouseover //////////////
        x.onmouseleave = ()=>{
            top.classList.remove("on");
            bag_c.classList.remove("on");
            search_new.classList.remove("on");
        }//////////// onmouseleave ////////////

    } //////////////// for of ////////////////////

    /********************** 기본기능 막기 **********************/
    /* bag눌렀을때 기본기능막기 */
    bag_a.onclick = ()=>{
        event.preventDefault();
    };
    /* gnb눌렀을때 기본기능 막기 */
    // gnb_a.forEach((ele)=>{
    //     ele.onclick = ()=>{
    //         event.preventDefault();
    //     };
    // });

    /***************************************** 
        기능 : 검색바 오버시 검색바 크기에 의해 .search의 right값 수정
    *****************************************/
    // search.onmouseover = ()=>{
    //     // header_main.style.opacity = 0;
    //     search.style.right = "15%";
    // }; /////////////// onmouseover ///////////////////
    // search.onmouseout = ()=>{
    //     if(search_bar.value.length === 0) {
    //     search.style.right = "19%";
    //     } /////////// if /////////////
    // }; /////////////// onmouseout ///////////////////
    
    
    /************************************* 
        검색 클릭 시 검색 창 나옴
    *************************************/
    const sbar = document.querySelector(".sbar");
    search_icon.onclick = ()=>{
        if(top.classList.contains("on")){
            top.classList.remove("on");
            search_new.classList.remove("on");
            bag_c.classList.remove("on");
        } ///////////// if ///////////////
        else{
            // console.log("검색 눌럿음")
            top.classList.add("on");
            setTimeout(()=>{
                search_new.classList.add("on");
                sbar.focus();
            },200); ///// setTimeout //////
        } ////////// else ///////////
    }; //////////////// onclick ////////////////
    // console.log(top.classList.contains("on"));
    
    
    /************************************* 
        장바구니 클릭 시 장바구니 창 나옴
    *************************************/
    bag.onclick = ()=>{
        if(top.classList.contains("on")){
            top.classList.remove("on");
            search_new.classList.remove("on");
            bag_c.classList.remove("on");
        } ///////////// if ///////////////
        else{
            // console.log("장바구니 눌럿음")
            top.classList.add("on");
            setTimeout(()=>{
                bag_c.classList.add("on");
            },200); ///// setTimeout //////
        } ////////// else ///////////
    }; //////////////// onclick ////////////////
    // console.log(top.classList.contains("on"));
    
    
    /* 마우스 벗어나면 장바구니,검색창 안보임 */
    top.onmouseleave = ()=>{
        // console.log("leave");
        top.classList.remove("on");
        bag_c.classList.remove("on");
        search_new.classList.remove("on");
    };
    
    

    /******************************************* 
        함수 : mediaHam
        기능 : 햄버거 버튼클릭 시 gnb박스등장
    *******************************************/
    function mediaHam(){
            ham.onclick = ()=>{
                console.log("ham!!");
                // top height 값 늘리고 클래스 active
                if(top.classList.contains("active")){
                    top.classList.remove("active");
                    top.classList.remove("on");
                } else{
                    top.classList.add("active");
                }
            }////////// onclick ///////////

        } /////////// mediaHam //////////////

        // mediaHam 임시호출
        mediaHam();


    const sub_menu_li = document.querySelectorAll(".sub_menu li");


    
    // sub_menu 에서 넘어가기 금지
    sub_menu_li.forEach((ele,idx)=>{
        ele.onclick=()=>{
            event.preventDefault();
        }; ////////// click ///////////
    }); ///////// forEach /////////

}); ///////////////// 로드구역 ////////////////////////
window.addEventListener("DOMContentLoaded",()=>{
    console.log("main");
    
    const copy3 = document.querySelector(".copy3")
    const gbtn = document.querySelectorAll(".gbtn");
    const btn_n = document.querySelector(".btn_n")
    const btn_p = document.querySelector(".btn_p")
    const gimg = document.querySelector(".gimg");
    const gimg_ul = document.querySelector(".gimg ul");
    let gimg_li = document.querySelectorAll(".gimg li");

    const color_img_li = document.querySelectorAll(".color_img li")
    const color_list_li = document.querySelectorAll(".color_list ul>li");
    const img_cnt = gimg_li.length;

    // 화면높이값의 2/3 구하기
    const hv = window.innerHeight/3*2;
    const retVal = ele => ele.getBoundingClientRect().top;

    
    // search.addEventListener("click",()=>{
    //     top.style.height = "150px";
    //     top.style.transition = ".2s";
    // });/////////////// click //////////////////

    /////////////////////////// 3pg //////////////////////////////
    
    gimg_li.forEach((ele,idx)=>{
        ele.innerHTML =`
            <img src="./image/apple/lock_screen_${idx+1}.jpg" alt="아이폰이미지">
        `;
    });


    gimg_li.forEach((ele,idx)=>{
        ele.setAttribute("data-seq",idx);
    });

    const chgSeq = ()=>{
        gimg_li = document.querySelectorAll(".gimg li");
    };

    for(let i=0;i<2;i++) chgSeq();


    // 광클금지변수 : 0 - 허용, 1 - 불허용
    let prot = 0;

    /******************************************************* 
        함수 : goSlide
        기능 : 3페이지에서 버튼을 누르면 아이폰 이미지 left가 변경됨
    *******************************************************/

    const goSlide = (seq) => {

        // 광클금지 설정하기 //////
        if (prot) return;
        prot = 1; // 잠금!
        setTimeout(() => {
            prot = 0; // 해제!
        }, 400); /// 0.4초후 해제! ///
        
        let gimg_li = gimg_ul.querySelectorAll("li");

        if(seq){
            gimg_ul.style.left ="-100%";
            gimg_ul.style.transition = "left .2s ease-in-out";
    
            setTimeout(()=>{
                gimg_ul.appendChild(gimg_li[0]);
                // (2-2)동시에 left값을 0으로 변경한다!
                gimg_ul.style.left = "0";
                // (2-3)트랜지션 없애기
                gimg_ul.style.transition = "none";
            },400); ///////////// timeout /////////
        }
        else{
            gimg_ul.insertBefore(gimg_li[gimg_li.length-1],gimg_li[0]);
            gimg_ul.style.left = "-100%";
            gimg_ul.style.transition = "none";
            

            setTimeout(()=>{
                gimg_ul.style.left ="0";
                gimg_ul.style.transition = "left .2s ease-in-out";
            },0); ///////////// 타임아웃 ///////////
        }
        

    }; //////////// goSlide /////////////

    /* goSlide 호출 */
    gbtn.forEach((ele,idx)=>{
        ele.onclick = ()=>{
            goSlide(idx);
        };
    }); /////////// forEach /////////////

    
    /************************ 4페이지 ************************/
    /**************************************************** 
        함수 : colorList    
        기능 : 4페이지에서 color_list를 누르면 color_img에 on이
        들어가면서 색상이 변경됨
    ****************************************************/
    let snum = 0;

    const colorList = (seq)=>{
        // console.log("색번호",seq);

        // 광클금지 설정하기 //////
        if (prot) return;
        prot = 1; // 잠금!
        setTimeout(() => {
            prot = 0; // 해제!
        }, 400); /// 0.4초후 해제! ///

        snum = seq;

        chgSlide(color_img_li);
        chgSlide(color_list_li);
        
    };///////////////// colorList //////////////////////
``
    color_list_li.forEach((ele,idx)=>{
        ele.onclick = ()=>{
            event.preventDefault();
            colorList(idx);
        };
    });

    // color_img_li.forEach(ele => ele.classList.add("on"))
    function chgSlide(obj){ //  obj - 변경대상 노드리스트
        // 전체초기화
        obj.forEach((ele)=>ele.classList.remove("on"));
        obj[snum].classList.add("on");
    } ///////////// chgSlide ////////////////


    /* 5페이지 */
    const copy5_dsc = document.querySelectorAll(".copy5_dsc");
    /* 글자 떠오르는 액션 */
    // qs할때
    function fontEffect(ele){
        window.addEventListener("scroll",()=>{
            // console.log("retval",retVal(ele));
            if(retVal(ele) < hv && retVal(ele) > 0) ele.classList.add("on2");
            else if(retVal(ele) < 0 || retVal(ele) >= hv) {
                ele.classList.remove("on2");
            }
            // console.log("hv",hv);
        });///////////////// scroll ////////////////
    }
    // qsa할때
    function fontEffect2(ele){
        window.addEventListener("scroll",()=>{
            ele.forEach(ele=>{
                // console.log("retval",retVal(ele));
                if(retVal(ele) < hv && retVal(ele) > 0) ele.classList.add("on2");
                else if(retVal(ele) < 0 || retVal(ele) >= hv) {
                    ele.classList.remove("on2");
                }
            }); ////////// forEach //////////
            // console.log("hv",hv);
        });///////////////// scroll ////////////////
    }
    fontEffect(copy3);
    fontEffect2(copy5_dsc);
    // 5페이지 글씨 효과

    /* 사진 떠오르는 액션 */




}); ////////////////////// 로드구역 ///////////////////////////////////
window.addEventListener("DOMContentLoaded",()=>{
    
    

    const gbtn = document.querySelectorAll(".gbtn");
    const btn_n = document.querySelector(".btn_n")
    const btn_p = document.querySelector(".btn_p")
    const gimg = document.querySelector(".gimg");
    const gimg_ul = document.querySelector(".gimg ul");
    let gimg_li = document.querySelectorAll(".gimg li");

    const color_img_li = document.querySelectorAll(".color_img li")
    const color_list_li = document.querySelectorAll(".color_list ul>li");
    const img_cnt = gimg_li.length;

    
    // search.addEventListener("click",()=>{
    //     top.style.height = "150px";
    //     top.style.transition = ".2s";
    // });/////////////// click //////////////////

    /////////////////////////// 3pg //////////////////////////////
    
    
    // gimg2.innerHTML =`
    //     <img src="./image/apple/lock_screen_2.jpg" alt="아이폰이미지">
    // `;

    // for(let x of gbtn){
    //     let TT = x.innerText;
    //     x.onclick = ()=>{
            
    //         if(TT === ">"){
    //             num++;
    //             if(num===9) num=1;
    //             gimg.innerHTML =`
    //             <img src="./image/apple/lock_screen_${num}.jpg" alt="아이폰이미지">
    //             `;
    //             gimg2.innerHTML =`
    //             <img src="./image/apple/lock_screen_${num+1}.jpg" alt="아이폰이미지">
    //             `;
    //         }/////////////// if ///////////////////
    //         else if(TT === "<"){
    //             num--;
    //             if(num===0) num=8;
    //             gimg.innerHTML =`
    //             <img src="./image/apple/lock_screen_${num}.jpg" alt="아이폰이미지">
    //             `;
    //             gimg2.innerHTML =`
    //             <img src="./image/apple/lock_screen_${num+1}.jpg" alt="아이폰이미지">
    //             `;
    //         }/////////////// else if ///////////////////
    //     };//////////////////// click /////////////////
    // } ///////////////////// for of ////////////////////////

    /* .gimg li에 이미지 삽입 */
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
            // console.log("new",idx)
        };
    }); /////////// forEach /////////////

    function chgimg(obj){
        obj.forEach((ele)=>ele.style.left = "100%");
    }

    /* 4페이지 */
    const arr = [color_list_li,color_img_li];
    color_list_li.forEach((ele,idx)=>{
        ele.onclick = ()=>{
            event.preventDefault();
            console.log(idx);
            ele.classList.add("on")
        };
    });


}); ////////////////////// 로드구역 ///////////////////////////////////
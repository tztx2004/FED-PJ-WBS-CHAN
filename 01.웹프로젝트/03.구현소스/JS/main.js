window.addEventListener("DOMContentLoaded",()=>{
    console.log("main");
    
    const copy3 = document.querySelector(".copy3");
    const gbtn = document.querySelectorAll(".gbtn");
    const btn_n = document.querySelector(".btn_n");
    const btn_p = document.querySelector(".btn_p");
    const gimg = document.querySelector(".gimg");
    const gimg_ul = document.querySelector(".gimg ul");
    let gimg_li = document.querySelectorAll(".gimg li");

    const copy4 = document.querySelector(".copy4");
    const color_img_li = document.querySelectorAll(".color_img li");
    const color_list_li = document.querySelectorAll(".color_list ul>li");
    const img_cnt = gimg_li.length;

    const pg5 = document.querySelector(".pg5");
    const pg5_img = document.querySelector(".pg5>img");

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

        if(seq === 1){
            snum++;
            // console.log("snum",snum)
        }

        snum = seq;
        chgSlide(color_img_li);
        chgSlide(color_list_li);
        // 아이폰 사진과 컬러버튼 같이 넘어감
        
    };///////////////// colorList //////////////////////

    // 색상을 클릭하면 해당 색상의 이미지가 나타남
    color_list_li.forEach((ele,idx)=>{
        ele.onclick = ()=>{
            event.preventDefault();
            colorList(idx);

            // 클릭되면 autoSlide 멈춤
            clearInterval(autoSlide);
        };
    });

    //////////////// 인터발 ///////////////////////
    const scnt = color_list_li.length;
    let num1 = 0;
    
    // setInterval에 넣어주는 변수 증감,한계 리턴함
    function limitNumber(){
        if(num1 === - 1) num1 = scnt -1;
        else if(num1 === scnt) num1 = 0;
        // console.log("num1",num1);
    } //////////////// limitNumber ////////////////
    // 자동으로 넘어가게함
    let autoSlide = setInterval(()=>{
            limitNumber();
            colorList(num1)
            num1++;
        },5000);
    // 인터발 호출
    // autoSlide;


    // color_img_li.forEach(ele => ele.classList.add("on"))
    function chgSlide(obj){ //  obj - 변경대상 노드리스트
        // 전체초기화
        obj.forEach((ele)=>ele.classList.remove("on"));
        obj[snum].classList.add("on");
    } ///////////// chgSlide ////////////////


    /********************** 5페이지 **********************/
    const copy5_dsc = document.querySelectorAll(".copy5_dsc");
    /* 글자 떠오르는 액션 */
    // qs할때
    function fontEffect(ele){
        window.addEventListener("scroll",()=>{
            // console.log("retval",retVal(ele));
            if(retVal(ele) < hv && retVal(ele) > 0) ele.classList.add("on");
            else if(retVal(ele) < 0 || retVal(ele) >= hv) {
                ele.classList.remove("on");
            }
            // console.log("hv",hv);
        });///////////////// scroll ////////////////
    }
    // qsa할때
    function fontEffect2(ele,num){
        window.addEventListener("scroll",()=>{
            ele.forEach(ele=>{
                // console.log("retval",retVal(ele));
                if(retVal(ele) < hv*num && retVal(ele) > 0) ele.classList.add("on");
                else if(retVal(ele) < 0 || retVal(ele) >= hv*num) {
                    ele.classList.remove("on");
                }
            }); ////////// forEach //////////
            // console.log("hv",hv);
        });///////////////// scroll ////////////////
    }
    const pg3_h2 = document.querySelectorAll(".pg3 h2");
    fontEffect2(pg3_h2,1.4)
    // fontEffect(copy3);
    fontEffect(copy4);
    fontEffect2(copy5_dsc,1);
    // 5페이지 글씨 효과
    
    
    
    /************************** 6페이지 **************************/
    const con_img = document.querySelectorAll(".con_img");
    const pro_img = document.querySelector(".pro_img");
    const norm_img = document.querySelector(".norm_img");
    const norm13_img = document.querySelector(".norm13_img");
    const se_img = document.querySelector(".se_img");

    const row_camera = document.querySelectorAll(".row_camera");
    const camera = ["_14_pro_","_14_","_13_","_se_"];
    const camera_h = ["Pro camera system","Advanced dual-camera system","Dual-camera system","Advanced camera"];
    

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
    imgEffect(pg5_img);



    

    
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

}); ////////////////////// 로드구역 ///////////////////////////////////
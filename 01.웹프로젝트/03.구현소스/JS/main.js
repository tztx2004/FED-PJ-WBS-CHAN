window.addEventListener("DOMContentLoaded",()=>{
    
    

    const gbtn = document.querySelectorAll(".gbtn");
    const btn_n = document.querySelector(".btn_n")
    const btn_p = document.querySelector(".btn_p")
    const gimg = document.querySelector(".gimg");
    let gimg_li = document.querySelectorAll(".gimg li");
    const img_cnt = gimg_li.length;
    
    
    // search.addEventListener("click",()=>{
    //     top.style.height = "150px";
    //     top.style.transition = ".2s";
    // });/////////////// click //////////////////

    /////////////////////////// 3pg //////////////////////////////
    let num = 1;
    ///////////// 첫번째 사진 나와있기 ////////////////
    gimg_li.forEach((ele,idx)=>{
        ele.innerHTML =`
            <img src="./image/apple/lock_screen_${idx}.jpg" alt="아이폰이미지">
        `;
    });
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





    let snum = 0;

    gimg_li.forEach((ele,idx)=>{
        ele.setAttribute("data-seq",idx);
    });

    const chgSeq = ()=>{
        gimg_li = document.querySelectorAll(".gimg li");
        // gimg.insertBefore(gimg_li[gimg_li.length-1],gimg_li[0]);
    };

    for(let i=0;i<1;i++) chgSeq();


    // 광클금지변수 : 0 - 허용, 1 - 불허용
    let prot = 0;

    const goSlide = (seq) => {
        console.log("번호",seq);

        // 광클금지 설정하기 //////
        if (prot) return;
        prot = 1; // 잠금!
        setTimeout(() => {
            prot = 0; // 해제!
        }, 400); /// 0.4초후 해제! ///

        if(seq){
            snum++;
            // gimg.appendChild(clist[0])
            gimg.style.left = "-100%"
            console.log("오른쪽",snum);
        }
        else{
            snum--;
            console.log("왼쪽",snum);
        }

        if(snum === -1) snum = img_cnt -1;
        else if(snum === snum) snum = 0;

        chgimg(gimg_li);
    }; //////////// goSlide /////////////

    gbtn.forEach((ele,idx)=>{
        ele.onclick = ()=>{
            goSlide(idx);
        };
    }); /////////// forEach /////////////

    function chgimg(obj){
        obj.forEach((ele)=>ele.style.left = "100%");
    }

}); ////////////////////// 로드구역 ///////////////////////////////////
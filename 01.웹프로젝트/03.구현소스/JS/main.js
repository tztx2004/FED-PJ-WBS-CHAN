window.addEventListener("DOMContentLoaded",()=>{
    
    

    const gbtn = document.querySelectorAll(".gbtn");
    const btn_n = document.querySelector(".btn_n")
    const btn_p = document.querySelector(".btn_p")
    const gimg = document.querySelector(".gimg");
    const gimg2 = document.querySelector(".gimg2");
    
    
    // search.addEventListener("click",()=>{
    //     top.style.height = "150px";
    //     top.style.transition = ".2s";
    // });/////////////// click //////////////////

    /////////////////////////// 3pg //////////////////////////////
    let num = 1;
    ///////////// 첫번째 사진 나와있기 ////////////////
    gimg.innerHTML =`
        <img src="./image/apple/lock_screen_1.jpg" alt="아이폰이미지">
    `;
    gimg2.innerHTML =`
        <img src="./image/apple/lock_screen_2.jpg" alt="아이폰이미지">
    `;

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


    




}); ////////////////////// 로드구역 ///////////////////////////////////
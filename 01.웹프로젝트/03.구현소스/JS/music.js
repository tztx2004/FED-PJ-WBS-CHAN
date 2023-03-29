window.addEventListener("DOMContentLoaded",()=>{
    
    console.log("music");

    // 1. 대상
    const lockUp = document.querySelectorAll(".lockUp");
    const top = document.querySelector(".top");
    const sub_music = document.querySelector(".sub_music");

    lockUp.forEach((ele,idx)=>{
        ele.innerHTML = `
        <div class="frame_p">
        <img src="./image/sub_music/frame.png " alt="프레임" />
        <div class="screen_p">
          <img src="./image/sub_music/lock${idx}.jpg" alt="폰이미지" />
        </div>
      </div>
        `;//////////// innerHTML ////////////////
    }); /////////////// forEach //////////////////////
    
    if(top.classList.contains("on")) {
        sub_music.style.filter = "brightness(3px)";
    }


}); ////////////////// 로드 구역 ////////////////////////
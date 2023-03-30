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

        if(idx === 2){
          ele.innerHTML = `
            <div class="frame_p">
              <img src="./image/sub_music/frame.png " alt="프레임" />
              <div class="screen_p">
              <video class="screen_vd" src="./image/sub_music/screen_p.mp4" autoplay muted></video>
              </div>
            </div>
          `;
        }
    }); /////////////// forEach //////////////////////
    
    if(top.classList.contains("on")) {
        sub_music.style.filter = "brightness(3px)";
    }


/////////////// 2pg //////////////////
const mcp = document.querySelectorAll(".mcp");
console.log(mcp);
mcp.forEach((ele,idx)=>{
  ele.innerHTML = `
    Play over 100 million songs 
  `;
});

}); ////////////////// 로드 구역 ////////////////////////
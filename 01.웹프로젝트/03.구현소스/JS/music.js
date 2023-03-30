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

        // 가운데 기기에는 영상이 삽입됨
        if(idx === 2){
          ele.innerHTML = `
            <div class="frame_p">
              <img src="./image/sub_music/frame.png " alt="프레임" />
              <div class="screen_p">
              <video class="screen_vd" src="./image/sub_music/screen_p.mp4" autoplay muted loop></video>
              </div>
            </div>
          `;
        }//////////////// if /////////////////
    }); /////////////// forEach //////////////////////
    
    if(top.classList.contains("on")) {
        sub_music.style.filter = "brightness(3px)";
    }///////////// if //////////////


/////////////// 2pg //////////////////

const pg2_obj = {
  item0 : "Play over 100 million songs <br>and 30,000 playlists ad-free.",
  item1 : "Experience Spatial Audio for sound that surrounds you.",
  item2 : "Get curated playlists and&nbsp; live radio.",
  item3 : "Download your favorite tracks. Play them offline.",
  item4 : "Listen across your devices.",
}
const mcp = document.querySelectorAll(".mcp");
console.log(mcp);
mcp.forEach((ele,idx)=>{
  ele.innerHTML = `
    ${pg2_obj["item"+idx]}
  `;
});


///////////////// 3pg //////////////////
///////// html에 뿌릴 객체 //////////////
const pg3_obj = {
  item0 : [
  "Buy an Apple device",
  "Free 1-month trial",
  "Free 1-month trial"
],
item1 : [
  "6 months free",
  "Apple Music",
  "Apple One"
],
item2 : [
  "Get 6 months of Apple Music free with the purchase of eligible audio devices.",
  "New subscribers get 1 month of Apple Music free, then pay $10.99 per month.",
  "Bundle Apple Music with up to 5 other great services for 1 low monthly price."
  ],
  item3: [
    "Check eligibility",
    "Try it free",
    "Try Apple One free"
  ]
};

// console.log("hi",pg3_obj["item1"][2]);
const offer_item = document.querySelectorAll(".offer_item");

offer_item.forEach((ele,idx)=>{
  ele.innerHTML = `
  <h2>${pg3_obj["item0"][idx]}</h2>
  <h3>${pg3_obj["item1"][idx]}</h3>
  <p class="offer_item_copy">${pg3_obj["item2"][idx]}</p>
  <a href="#">${pg3_obj["item3"][idx]}</a>
  `;
});////////////// forEach //////////////////


const vdbx = document.querySelector(".vdbx");


window.addEventListener("scroll",()=>{
  let pg2cont = document.querySelector(".pg2cont");
  let topPoint = pg2cont.getBoundingClientRect().top;
  console.log(topPoint);
  
  //////////// 스크롤 값에 따라 영상 크기 변화 ///////////////
  if(topPoint < -200 && topPoint > -1100){
    vdbx.style.width = 2500 + topPoint + "px";
  }
  else if(topPoint < -1100){
    vdbx.style.borderRadius = "30px";
    vdbx.style.transition = ".2s";
  }

}); //////////////////// scroll ////////////////////


}); ////////////////// 로드 구역 ////////////////////////
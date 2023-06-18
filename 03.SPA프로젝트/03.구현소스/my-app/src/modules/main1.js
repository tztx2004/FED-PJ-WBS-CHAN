import "../css/main.css";
import $ from 'jquery';
import main_data from '../data/main_data'

export default function JQB_1(){
    // $(function(){
        // moveBox 마우스 따라다니게 하기
        const moveBox = $(".moveBox")
        const ma_1pg_base = document.querySelector(".ma_1pg_base");
        const ma_1pg_imgs = document.querySelectorAll(".ma_1pg_imgs");
        
        // 박스 움직이게 만들기 (배경,움직이는요소)
        function move(bg,tg){
            bg.addEventListener("mousemove",function(e){
                let x = e.offsetX;
                let y = e.offsetY;
                tg.css({
                    left:x +30,
                    top:y +30,
                    backgroundPositionX: x,
                    backgroundPositionY: y,
                    
                })
                // .animate({
                // })
                
                console.log(x,y)
                    
            }) //// mousemove ////
        }
    
        move(ma_1pg_base,moveBox);
        
        // console.log(ma_1pg_imgs)
    
    
    
        // background position 위치보정 함수
        function calc(){
            let bgtop = $(".ma_1pg_base").offset().top - $(window).scrollTop();
            let bgleft = $(".ma_1pg_base").offset().left;
    
            $(".ma_1pg_base").css({
                backgroundPosition: bgleft + "px " +
                    bgtop + "px"
            }); ////// css ////////
            $(".moveBox").css({
                backgroundPosition: bgleft + "px " +
                    bgtop + "px"
            }); ////// css ////////
            
            console.log(bgtop, bgleft)
        }//////////// calc /////////////
    
        // calc()
    
    
    
    // })////// jQB ////////
    
}// jQB_1
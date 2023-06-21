import React, { useEffect, useRef, useState } from 'react';


import main_data from "../data/main_data";
import "../css/main.css";
import $ from 'jquery';



const Main3pg = function(){

    
    // 메인 3페이지 스크롤 이벤트
    function scr3pg(){
        const ma_3pg_line = $(".ma_3pg_line");
        const wi3_2 = $(".wi3_2 img")
        const wi3_3 = $(".wi3_3 img")
        const vidbg = $(".vidbg")
        const vidBx = $(".vidBx")
        const video = $(".video")
    
        let start3pg = $(".ma_3pg").offset()?$(".ma_3pg").offset().top:0;
        let curSc = window.scrollY // 스크롤 당 100씩
        let dif = curSc-start3pg // 3페이지에서부터 현재 스크롤값
        let ma_3pg_img_part = $(".ma_3pg_img_part")
        let picTop = ma_3pg_img_part.offset()? ma_3pg_img_part.offset().top:0

        ma_3pg_img_part
        .css({
            height:`${wi3_2.height()*3}px`
        })
        

        // console.log(start3pg,curSc)

        // line 애니메이션
        if(curSc > start3pg-300){
            ma_3pg_line.css({
                width:"80%"
            })
        }
        // console.log(50-dif/70)
        // 사진애니메이션(분신술)
        if(curSc > picTop-400 && 50-dif/70 >= 30 && 50-dif/70 <= 50){
            wi3_2.css({
                transform:`translateX(${50-dif/70}%)`
            })
            wi3_3.css({
                transform:`translateX(${-50+dif/70}%)`
            })
        }
        // (수정필요) 
        else if(50-dif/70 < 30 || 50-dif/70 > 50){
            wi3_2.css({
                transform:`translateX(50%)`
            })
            wi3_3.css({
                transform:`translateX(-50%)`
            })
        }
        
    
        if(50-dif/70 <= 30){
            vidbg.addClass("on")
            this.setTimeout(()=>{
                vidbg.delay(400).addClass("on2")
            },400)
            this.setTimeout(()=>{
                vidBx.addClass("on")
            },400)
        }
        else{
            vidbg.removeClass("on")
            vidbg.removeClass("on2")
            vidBx.removeClass("on")
        }
    }



    useEffect(() => {

        console.log("컴포넌트 나타남");
        

        window.addEventListener("scroll",scr3pg,{passive:true})
        
        return () => {
            console.log("cleanUp 함수");
            window.removeEventListener("scroll",scr3pg)
        };
    });

    return(
        <>
            <div className="ma_3pg">
                <div className="ma_3pg_copy">
                    <div className="features_heading">
                        <span className="numb">02</span>
                        <h2>FEATURES</h2>
                    </div>
                    <div className="ma_3pg_line"></div>
                    <div className="ma_3pg_cont">
                        <span className="numb">02</span>
                        <div className="ma_3pg_font1">{main_data.pg3.font1}</div>
                        <div className="ma_3pg_font2">{main_data.pg3.font2}</div>
                    </div>
                    
                </div>
                <div className="ma_3pg_img_part">
                    <div className="ma_3pg_img">
                        <div className="ma_3pg_imgwrap wi3_1">
                            <img src="./images/main/fusion_center_pc.webp" alt=""/>
                        </div>
                        <div className="ma_3pg_imgwrap wi3_2">
                            <img src="./images/main/fusion_left_pc.webp" alt=""/>
                        </div>
                        <div className="ma_3pg_imgwrap wi3_3">
                            <img src="./images/main/fusion_right_pc.webp" alt=""/>
                        </div>
                    </div>
                    <div className="vidBx">
                        <video className="video" preload="auto" autoPlay loop="loop" muted="muted" volume="0">
                            <source src="./images/main/reel.mp4" type="video/mp4"/>
                        </video>
                    </div>
                    <div className="vidbg"></div>
                </div>
            </div>
            {/* {jqb3()} */}
        </>
    )
}

export default Main3pg
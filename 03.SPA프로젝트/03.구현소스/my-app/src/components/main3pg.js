import React, { useEffect, useRef, useState } from 'react';


import main_data from "../data/main_data";
import "../css/main.css";
import $ from 'jquery';



const Main3pg = function(){

    // 쓰로틀
    let prot = 0
    // 메인 3페이지 스크롤 이벤트
    function scr3pg(){
        if(prot) return
        prot =1
        setTimeout(()=>{
            prot = 0
            // console.log("3pg 쓰로틀")
        
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
            let ma_3pg_img = $(".ma_3pg_img")
            let span3 = $(".font3pg span")

            // sticky 높이값
            // ma_3pg_img_part
            // .css({
            //     height:`${wi3_2.height()*3}px`
            // })
            

            console.log(start3pg,curSc)


        

            // line 애니메이션
            if(curSc > start3pg-300){
                ma_3pg_line.css({
                    width:"80%"
                })
            }


            // 모아짐
            // 배경 1 2 들어옴
            // 그림 높이 줄어듦
            // 글씨 딸려 들어옴
            // 글씨 가운데로 오면서 그림 완전히 사라짐
            // 5페이지 시작

            // 기준 확인
            let scrSt = 50-dif/70;
            // console.log(scrSt)

            // 구간 밖에서 초기화
            if(scrSt> 44 || scrSt <15){
                ma_3pg_img.css({
                    // display:"none",
                    // top:"-100%",
                    opacity:"0",
                    width:"100%",
                    // position: "sticky",
                })
            }
            // 구간안에서 펼쳐짐
            else if(scrSt <= 44 &&  scrSt >= 15){
                ma_3pg_img.css({
                    width:"80%",
                    // top:"10%",
                    display:"flex",
                    opacity:"1",
                    // position: "fixed",
                    transition: ".4s"
                }).fadeIn()
            }
            // 사진애니메이션(분신술)
            if(curSc > picTop-400 && scrSt >= 30 && scrSt <= 50){
                wi3_2.css({
                    transform:`translateX(${scrSt}%)`
                })
                wi3_3.css({
                    transform:`translateX(${-50+dif/70}%)`
                })
            }
            // (수정필요) 
            else if(scrSt < 30 || scrSt > 50){
                wi3_2.css({
                    transform:`translateX(50%)`
                })
                wi3_3.css({
                    transform:`translateX(-50%)`
                })
            }
            
        
            // 초기화(스크롤 거꾸로 했을때)
            if(scrSt > 30 || scrSt <7){
                vidbg.removeClass("on")
                vidbg.removeClass("on2")
                vidBx.removeClass("on")
                ma_3pg_img.css({
                    aspectRatio:"1441/800"
                })
            }/// if ///

            // 비디오영상 등장
            else if(scrSt <= 30){
                vidbg.addClass("on")
                this.setTimeout(()=>{
                    vidbg.delay(400).addClass("on2")
                },400)
                this.setTimeout(()=>{
                    vidBx.addClass("on")
                },400)
                
                // 비디오 사라짐
                
                console.log(scrSt)
                // 이미지 줄어듦
                // console.log(scrSt)
                ma_3pg_img.css({
                    aspectRatio:`1441/${800-dif/3}`,
                })
                

                // 영상 들어온 후 글씨효과
                document.querySelectorAll(".font3pg span").forEach((x,i)=>  {
                        setTimeout(()=>{
                            x.style.transform = "translateY(0%)"
                        },i*100)// setTimeout //

                        // 구간에서 벗어나면 사라짐
                        if(scrSt <= 13 || scrSt > 23){
                            setTimeout(()=>{
                                x.style.transform = "translateY(-100%)"
                            },i*100)// setTimeout //
                        }
                    }) // forEach

                // 이미지 사라짐
                if(scrSt <= 23){
                    ma_3pg_img.fadeOut().css({
                        position:"sticky"
                    })
                }
                

            } // else if //


            // 3페이지 마지막 라인 대상
            let detail_3pg = $(".detail_3pg")
            let line_3pg = $(".line_3pg")
            let dtt = detail_3pg.offset().top
            
            // 3페이지 마지막 라인애니메이션
            if(curSc>dtt*0.95){
                line_3pg.css({
                    width:"80%"
                })
            }
            else{
                line_3pg.css({
                    width:"0%"
                })
            }

        },250) // setTimeout //
        
    }// scr3pg


    
    useEffect(() => {
        console.log("3pg 스크롤");
        window.addEventListener("scroll",scr3pg,{passive:true})
        return () => {
            console.log("3pg 스크롤 cleanUp");
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
                    <div className='font3pg'>
                        <span>S</span>
                        <span>H</span>
                        <span>O</span>
                        <span>W</span>
                        <span>R</span>
                        <span>E</span>
                        <span>E</span>
                        <span>L</span>
                    </div>
                </div>
                <div className='detail_3pg'>
                    <h2 className='tit3pg'>
                        GENERATE FULL BODY SHOTS OF MODELS BY SIMPLY TAKING A PICTURE OF A DRESSED UP TORSO OR A BASE MODEL. WE AIM TO SOLVE MODEL SHORTAGE ISSUES WITH THIS UNIQUE TECHNOLOGY.
                    </h2>
                    <div className='line_3pg'></div>
                    <h3>
                        Generate a model image worn by an AI model by shooting only the product.<br/>
                        It can be used for EC site images, storefronts, POP, etc.
                    </h3>
                </div>
            </div>
            {/* {jqb3()} */}
        </>
    )
}

export default Main3pg
import React, { useEffect, useRef, useState } from 'react';
import main_data from "../data/main_data";
import "../css/main.css";
import $ from 'jquery';
import { getToPathname } from '@remix-run/router';





const Main2pg = function(){

    function scr2pg(){
        
        // 대상
        let arr = ["A","B","C"];

        const cover = $(".about_cover");
        const cv1 =$(".cv1")
        const cv2 =$(".cv2")
        const cv3 =$(".cv3")
        const cv4 =$(".cv4")
        const cv5 =$(".cv5")
        const cv6 =$(".cv6")
        
        if(!cv1) return
        const pg2_line = $(".pg2_line");
        const numb = $(".numb");
        const ma_2pg_copy = $(".ma_2pg_copy");
        
        // 최초에 화면 보이기
        // cover.css({
        //     backgroundSize:"300%",
        //     backgroundAttachment:"fixed"
        // }) // css // 
    
        // 사진 필터링
        function filterImg(ty){ // ty - pc나 sp(type)
            
            cover.css({
                backgroundSize:"300%",
                backgroundAttachment:"fixed"
            })

            cv1.css({
                backgroundPosition:'0% 0',
            })
            cv2.css({
                backgroundPosition:'50% 0',
            })
            cv3.css({
                backgroundPosition:'100% 0',
            })
            cv4.css({
                backgroundPosition:'150% 0',
            })
            cv5.css({
                backgroundPosition:'200% 0',
            })
            cv6.css({
                backgroundPosition:'250% 0',
            })
        }/// filterImg ///
        filterImg("pc")
    
        
        // 스크롤 이벤트
        // console.log($(".ma2_2pg_about").offset());
        let start2pg = $(".ma2_2pg_about").offset()?$(".ma2_2pg_about").offset().top:0 // 2페이지 시작점
        let curSc = window.scrollY // 스크롤 당 100씩
        // let dif2pg = curSc - start2pg

        // 높이 설정(sticky)
        let pg2 = $(".ma2_2pg_about")
        let pg2W = pg2.width();
        // console.log(dif2pg)

        let mp = Math.ceil(curSc - start2pg);
        // console.log(mp/20)
        

        

        // 최초 호출(실행 전 후)
        // if(mp/20<0 || mp/20 > 190) filterImg("pc");
        

        // 실행 구간
        if(mp>0 && mp/20 <150){
            $(".ma_2pg_img").css({
                position: "fixed",
                top: "10%",
                zIndex: "9",
                width: "100%",
            });// css //
            // $(".ma_2pg_img").addClass("on")

            cover.css({
                transform:`translateX(${-mp/10}%)`,
            })/// css ///
            
            cv1.css({
                backgroundPosition:`${-mp/20}% 0`,
            })
            cv2.css({
                backgroundPosition:`${50-mp/20}% 0`,
            })
            cv3.css({
                backgroundPosition:`${100-mp/20}% 0`,
            })
            cv4.css({
                backgroundPosition:`${150-mp/20}% 0`,
            })
            cv5.css({
                backgroundPosition:`${200-mp/20}% 0`,
            })
            cv6.css({
                backgroundPosition:`${250-mp/20}% 0`,
            })
        } // if // 
        // 실행구간 밖
        else if(mp/20<0 || mp/20 > 150) {
            $(".ma_2pg_img").css({
                position: "sticky",
            });
        }// else if //

        
        // 라인 애니메이션
        // let numb_top = numb.offset().top
        let ts = ma_2pg_copy.offset()?ma_2pg_copy.offset().top:0
        // let numb_t = document.querySelector(".numb").offsetTop
        // console.log(curSc-ts)

        if(curSc-ts>0){
            pg2_line.css({
                width:"100%",
            })
        } /// if ///
        else{
            pg2_line.css({
                width:"0%",
            })
        } /// else ///
        
    } //// scr2pg ////

    // 쓰로틀
    const throttle = (callback,delay)=>{
        console.log("throttle")
        let timer
        return ()=>{
            timer = setTimeout(()=>{
                callback();
                timer = null
            },delay)
        }
    }/// throttle ///

    // let [thr,setThr] = useState(throttle)

    // scroll 상태변수
    // const [isScr,setIsScr] = useState(false)

    // scroll 제어
    const handleScr = throttle(scr2pg,100)



    // scroll watch
    useEffect(() => {
        // console.log("컴포넌트 나타남");
        window.addEventListener("scroll",handleScr,{passive:true})
        return () => {
        //   console.log("cleanUp 함수");
            window.removeEventListener("scroll",handleScr)
        };
    },[handleScr]);
    
    return(
        <><div>
            
                <div className="ma2_2pg_about">
                    <div className="ma_2pg_img">
                        <div className="about">
                            <div className="about_cover cv1">
                                <img src="./images/main/aboutC_name.png" alt="이미지" />
                            </div>
                            <div className="about_cover cv2">
                                <img src="./images/main/aboutA_name.png" alt="이미지" />
                            </div>
                            <div className="about_cover cv3">
                                <img src="./images/main/aboutB_name.png" alt="이미지" />
                            </div>
                            <div className="about_cover cv4">
                                <img src="./images/main/aboutC_name.png" alt="이미지" />
                            </div>
                            <div className="about_cover cv5">
                                <img src="./images/main/aboutA_name.png" alt="이미지" />
                            </div>
                            <div className="about_cover cv6">
                                <img src="./images/main/aboutB_name.png" alt="이미지" />
                            </div>
                        </div>
                        <div className="about1"></div>
                        <div className="about2"></div>
                        <div className="about3"></div>
                    </div>
                </div>
                <div className="ma_2pg_copy">
                    <div className="ma_2pg_title">
                        THE<br/> MODELS
                    </div>
                    <div className="ma_2pg_cont">
                        <span className="numb">01</span>
                        <h2>{main_data.pg2.title}</h2>
                        <div className="pg2_line"></div>
                        <h3>{main_data.pg2.font}</h3>
                    </div>
                </div>
        </div>
            
        </>
    )
}

export default Main2pg;
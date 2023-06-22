import main_data from "../data/main_data";
import "../css/main.css";
import $ from 'jquery';
import { useEffect, useState } from "react";

// 사진 6장이 깔려있음
// 위에서 부터 clip-path가 100%될때까지 올라감
// 100%가 채워지면 다음 imgbx가 이전 행동 반복
// 6장째에서는 clip-path가 올라가지 않고 sticky가 끝남

const Main4pg = function(){
    // 대상
    const ma_4pg = document.querySelector(".ma_4pg");
    

    // ma_4pg.style.background = "#000"

    // 스크롤 함수
    function onScroll(){
        const ma_4pg = document.querySelector(".ma_4pg");
        const curSc =window.scrollY
        const start4pg = ma_4pg.offsetTop
        const dif4pg = curSc - start4pg;

        const imgbx = document.querySelectorAll(".wear_imgbx")
        let ib0 = document.querySelector(".ib0")
        let ib1 = document.querySelector(".ib1")
        let ib2 = document.querySelector(".ib2")
        let ib3 = document.querySelector(".ib3")
        let ib4 = document.querySelector(".ib4")
        let ib5 = document.querySelector(".ib5")


        if(dif4pg>=0){

            // imgbx.forEach((x,i)=>{
            //     console.log(x)
            //     x.style.clipPath = `inset(0 0 ${dif4pg/10-i*50}%)`
            // })
            
            ib0.style.clipPath = `inset(0 0 ${dif4pg/10}%)`
            ib1.style.clipPath = `inset(0 0 ${dif4pg/10-50}%)`
            ib2.style.clipPath = `inset(0 0 ${dif4pg/10-100}%)`
            ib3.style.clipPath = `inset(0 0 ${dif4pg/10-150}%)`
            ib4.style.clipPath = `inset(0 0 ${dif4pg/10-200}%)`
            ib5.style.clipPath = `inset(0 0 ${dif4pg/10-300}%)`
            
            if(dif4pg/10 >350){
                ib5.style.transition = ".4s"
                ib5.style.clipPath = `inset(0 0 100%)`
            }

        } // if //
        console.log("현재 스크롤",dif4pg/10)

    
    } /// onScroll ///

    // 이벤트 감시
    useEffect(() => {
        console.log("4pg 컴포넌트 나타남");
        window.addEventListener("scroll",onScroll)

        
        return () => {
            console.log("4pg cleanUp 함수");
            window.removeEventListener("scroll",onScroll)
        };
    },[]);


    return(
        <>
            <div className="ma_4pg">
                <div className="wear_wrap">
                    <div className="wearbx">
                        <div className="wear_imgbx ib5">
                            <img src="./images/main/fit2Sub.jpg" alt="이미지"/>
                        </div>
                        <div className="wear_imgbx ib4">
                            <img src="./images/main/fitting_4.jpg" alt="이미지"/>
                        </div>
                        <div className="wear_imgbx ib3">
                            <img src="./images/main/fitting_3.jpg" alt="이미지"/>
                        </div>
                        <div className="wear_imgbx ib2">
                            <img src="./images/main/fitting_2.jpg" alt="이미지"/>
                        </div>
                        <div className="wear_imgbx ib1">
                            <img src="./images/main/fitting_1.jpg" alt="이미지"/>
                        </div>
                        <div className="wear_imgbx ib0">
                            <img src="./images/main/fitting_0.jpg" alt="이미지"/>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Main4pg
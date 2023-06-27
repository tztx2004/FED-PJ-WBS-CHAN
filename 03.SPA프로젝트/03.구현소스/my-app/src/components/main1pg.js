import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "../css/main.css";
import $ from "jquery";
import main_data from "../data/main_data";


// 메인 1페이지 컴포넌트
function Main1pg(props) {
    
    // const moveBox = useRef()
    
    // 가로로 흘러가는 박스
    function mvbox2(){
        const mv1 = document.querySelector(".mv1")
        const mv2 = document.querySelector(".mv2")
        const mv3 = document.querySelector(".mv3")

        // setTimeout(()=>{
        //     mv1.classList.add("on")
        // },1000)
        // setTimeout(()=>{
        //     mv2.classList.add("on")
        // },1500)
        // setTimeout(()=>{
        //     mv3.classList.add("on")
        // },2000)


    }/// movebox ///


    useEffect(()=>{
        console.log("1p",window.innerWidth)
        
        mvbox2()
        return ()=>{
            console.log("1pg clear")
        }
        

    },[])
    
    return (
        <>
            <div className="ma_1pg_img1_wrapper">
                <div className="ma_1pg_base ma_1pg_imgs"></div>
                <div className="cover"></div>
                {/* <div className="mvbg"> */}
                <div className="movebox_wrap">
                    <div className="moveBox mv1" ></div>
                    <div className="moveBox mv2" ></div>
                    <div className="moveBox mv3" ></div>
                </div>
                {/* </div> */}
                {/* <div className="test"></div> */}
            </div>

            <div className="ma_pg1_copy">
                <span className="numb">00</span>
                <div className="ma_pg1_copy_part">
                    <h2 className="ma_pg1_title">{main_data.pg1.title}</h2>
                    <h3 className="ma_pg1_font">
                        {main_data.pg1.font.split("^")[0]}
                        <br />
                        {main_data.pg1.font.split("^")[1]}
                    </h3>
                </div>
            </div>
        </>
    ); ///// return /////
} ///// Main1pg /////

export default Main1pg;

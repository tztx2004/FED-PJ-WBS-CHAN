import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "../css/main.css";
import $ from "jquery";
import main_data from "../data/main_data";
import { throttle } from 'lodash';


// 메인 1페이지 컴포넌트
function Main1pg(props) {
    
    // 가로로 흘러가는 박스
    
    const mvbox = (e)=>{
        const wrapper = document.querySelector(".ma_1pg_img1_wrapper")
        const ma_1pg_image = document.querySelector(".ma_1pg_image")
        const wrapper_wid = wrapper.clientWidth

        let scrX = e.offsetX
        let sts = scrX/wrapper_wid*100
        
        ma_1pg_image.style.clipPath = `inset(0 0 0 ${sts}%)`

    }/// movebox ///


    useEffect(()=>{
        const wrapper = document.querySelector(".ma_1pg_img1_wrapper")
        // opacity 효과
        wrapper.classList.add("on")
        
        wrapper.addEventListener("mousemove",mvbox)
        
        return ()=>{
            wrapper.removeEventListener("mousemove",mvbox)
        }
    },[])
    
    return (
        <>
            <div className="ma_1pg_img1_wrapper">
                <div className="ma_1pg_base ma_1pg_imgs">
                    <img className="ma_1pg_image" src="./images/main/kv_base_pc.jpg" alt="이미지"/>
                </div>
                <div className="cover"></div>
                {/* <div className="mvbg"></div> */}
                <div className="movebox_wrap">
                    <div className="moveBox mv1" ></div>
                    <div className="moveBox mv2" ></div>
                    <div className="moveBox mv3" ></div>
                </div>

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

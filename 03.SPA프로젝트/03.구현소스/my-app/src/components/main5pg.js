import React, { useEffect, useRef, useState } from 'react';
import main_data from "../data/main_data";
import "../css/main.css";
import $ from 'jquery';
import { throttle } from "lodash";

const Main5pg = function(){
    
    function onScr(){
        const ma_5pg = document.querySelector(".ma_5pg")
        const dbx1 = document.querySelector(".dbx1")
        const chrBg = document.querySelectorAll(".chrBg")
        const cbg1 = document.querySelectorAll(".cbg1")
        const cbg2 = document.querySelectorAll(".cbg2")
        const cbg3 = document.querySelectorAll(".cbg3")
        if(!ma_5pg) return
        const ci1 = document.querySelectorAll(".ci1")
        const ci2 = document.querySelectorAll(".ci2")
        const ci3 = document.querySelectorAll(".ci3")

        const cfont1 = document.querySelectorAll(".cfont1")
        const cfont2 = document.querySelectorAll(".cfont2")
        const cfont3 = document.querySelectorAll(".cfont3")

        const curSc = window.scrollY
        const start5pg = ma_5pg.offsetTop
        const dif5pg = curSc - start5pg
        const dbx1_h = dbx1.scrollHeight

        const stLine = dif5pg+dbx1_h*2

        //// 첫줄 세트 ////
        if(stLine > 0){
            cbg1.forEach((x,i)=>{
                x.classList.add("on")
            }) /// forEach ///
            setTimeout(()=>{
                ci1.forEach((x,i)=>{
                    x.classList.add("on")
                }) /// forEach ///
            },100)

            setTimeout(()=>{
                cfont1.forEach((x,i)=>{
                    x.classList.add("on")
                })
            },200)
        }
        else if(stLine<0){
            cbg1.forEach((x,i)=>{
                x.classList.remove("on")
            }) /// forEach ///

            ci1.forEach((x,i)=>{
                x.classList.remove("on")
            }) /// forEach ///

            cfont1.forEach((x,i)=>{
                x.classList.remove("on")
            })
        }

        //// 둘째줄 세트 ////
        if(stLine> dbx1_h){
            cbg2.forEach((x,i)=>{
                x.classList.add("on")
            }) /// forEach ///

            setTimeout(()=>{
                ci2.forEach((x,i)=>{
                    x.classList.add("on")
                }) /// forEach ///
            },100)

            setTimeout(()=>{
                cfont2.forEach((x,i)=>{
                    x.classList.add("on")
                })
            },200)
        }
        else if(stLine<dbx1_h){
            cbg2.forEach((x,i)=>{
                x.classList.remove("on")
            }) /// forEach ///

            ci2.forEach((x,i)=>{
                x.classList.remove("on")
            }) /// forEach ///

            cfont2.forEach((x,i)=>{
                x.classList.remove("on")
            })
        }

        //// 셋째줄세트 ////
        if(stLine> dbx1_h*2){
            cbg3.forEach((x,i)=>{
                x.classList.add("on")
            }) /// forEach ///

            setTimeout(()=>{
                ci3.forEach((x,i)=>{
                    x.classList.add("on")
                }) /// forEach ///
            },100)

            setTimeout(()=>{
                cfont3.forEach((x,i)=>{
                    x.classList.add("on")
                })
            },200)
        }
        else if(stLine< dbx1_h*2){
            cbg3.forEach((x,i)=>{
                x.classList.remove("on")
            }) /// forEach ///

            ci3.forEach((x,i)=>{
                x.classList.remove("on")
            }) /// forEach ///

            cfont3.forEach((x,i)=>{
                x.classList.remove("on")
            })
        }
        
        // console.log(stLine)
    }//// onScr ////

    useEffect(() => {
        const handleScroll = throttle(()=>{
            onScr()
        },200)
        window.addEventListener("scroll",handleScroll)

        return () => {
            window.removeEventListener("scroll",handleScroll)
        };
    });

    return(
        <>
            <div className="ma_5pg">
                <div className="divi_wrap">
                    <div className="divibx dbx1">
                        <div className="chrbx cbx1">
                            <img className="chrImg ci1" src="./images/main/subdivide_0_pc.jpg"/>
                            <h3 className='cfont1'>MODIFIED</h3>
                            <div className="chrBg cbg1"></div>
                        </div>
                        <div className="chrbx cbx2">
                            <img className="chrImg ci1" src="./images/main/subdivide_1_pc.jpg"/>
                            <h3 className='cfont1'>ORIGIN</h3>
                            <div className="chrBg cbg1"></div>
                        </div>
                        <div className="chrbx cbx3">
                            <img className="chrImg ci1" src="./images/main/subdivide_2_pc.jpg"/>
                            <h3 className='cfont1'>MODIFIED</h3>
                            <div className="chrBg cbg1"></div>
                        </div>
                    </div>
                    <div className="divibx dbx2">
                        <div className="chrbx cbx4">
                            <img className="chrImg ci2" src="./images/main/subdivide_3_pc.jpg"/>
                            <h3 className='cfont2'>MODIFIED</h3>
                            <div className="chrBg cbg2"></div>
                        </div>
                        <div className="chrbx cbx5">
                            <img className="chrImg ci2" src="./images/main/subdivide_4_pc.jpg"/>
                            <h3 className='cfont2'>MODIFIED</h3>
                            <div className="chrBg cbg2"></div>
                        </div>
                        <div className="chrbx cbx6">
                            <img className="chrImg ci2" src="./images/main/subdivide_5_pc.jpg"/>
                            <h3 className='cfont2'>MODIFIED</h3>
                            <div className="chrBg cbg2"></div>
                        </div>
                    </div>
                    <div className="divibx dbx3">
                        <div className="chrbx cbx7">
                            <img className="chrImg ci3" src="./images/main/subdivide_6_pc.jpg"/>
                            <h3 className='cfont3'>MODIFIED</h3>
                            <div className="chrBg cbg3"></div>
                        </div>
                        <div className="chrbx cbx8">
                            <img className="chrImg ci3" src="./images/main/subdivide_7_pc.jpg"/>
                            <h3 className='cfont3'>MODIFIED</h3>
                            <div className="chrBg cbg3"></div>
                        </div>
                        <div className="chrbx cbx9">
                            <img className="chrImg ci3" src="./images/main/subdivide_8_pc.jpg"/>
                            <h3 className='cfont3'>MODIFIED</h3>
                            <div className="chrBg cbg3"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main5pg
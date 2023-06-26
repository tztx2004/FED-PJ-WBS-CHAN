
import "../css/model.css";
import $ from 'jquery';
import model_data from "../data/model_data";
import { useEffect } from "react";
import {throttle} from "lodash"


const Model = function(){
    console.log('model~~')

    function modelTitle(){
        const model_word = document.querySelectorAll(".model_word span")
        model_word.forEach((x,i)=>{
            setTimeout(()=>{
                x.style.transform = "translateY(0%)"
            },i*100)
        })
        
    }

    function scrm(){
        let curSc = window.scrollY
        let scrX = window.scrollX
        
        
        const model_item = document.querySelectorAll('.model_item')
        const model_img = document.querySelectorAll(".model_item img")
        
        
        let mp = 400-curSc/2

        model_item.forEach((x,i)=>{
            x.style.transform = `translateX(${mp}%)`
        })/// forEach ///

        // console.log(curSc/3)
        model_img.forEach((x,i)=>{
            if(i%3 === 2 && i===2){
                x.style.clipPath = `inset(0 0 0 ${curSc/2.6-80}%)`
            }// if //
            else if(i%3 === 1 && i===1){
                x.style.clipPath = `inset(0 0 0 ${curSc/2.6-180}%)`
            }// if //

            if(i%3 === 2 && i===5){
                x.style.clipPath = `inset(0 0 0 ${curSc/2.6-180}%)`
            }// if //
            else if(i%3 === 1 && i===4){
                x.style.clipPath = `inset(0 0 0 ${curSc/2.6-280}%)`
            }// if //

            if(i%3 === 2 && i===8){
                x.style.clipPath = `inset(0 0 0 ${curSc/2.6-280}%)`
            }// if //
            else if(i%3 === 1 && i===7){
                x.style.clipPath = `inset(0 0 0 ${curSc/2.6-380}%)`
            }// if //
            
            if(i%3 === 2 && i===11){
                x.style.clipPath = `inset(0 0 0 ${curSc/2.6-380}%)`
            }// if //
            else if(i%3 === 1 && i===10){
                x.style.clipPath = `inset(0 0 0 ${curSc/2.6-480}%)`
            }// if //

            if(i%3 === 2 && i===14){
                x.style.clipPath = `inset(0 0 0 ${curSc/2.6-480}%)`
            }// if //
            else if(i%3 === 1 && i===13){
                x.style.clipPath = `inset(0 0 0 ${curSc/2.6-580}%)`
            }// if //

            if(i%3 === 2 && i===17){
                x.style.clipPath = `inset(0 0 0 ${curSc/2.6-580}%)`
            }// if //
            else if(i%3 === 1 && i===16){
                x.style.clipPath = `inset(0 0 0 ${curSc/2.6-680}%)`
            }// if //

            if(i%3 === 2 && i===20){
                x.style.clipPath = `inset(0 0 0 ${curSc/2.6-680}%)`
            }// if //
            else if(i%3 === 1 && i===19){
                x.style.clipPath = `inset(0 0 0 ${curSc/2.6-780}%)`
            }// if //

            if(i%3 === 2 && i===23){
                x.style.clipPath = `inset(0 0 0 ${curSc/2.6-780}%)`
            }// if //
            else if(i%3 === 1 && i===22){
                x.style.clipPath = `inset(0 0 0 ${curSc/2.6-880}%)`
            }// if //

        })/// forEach ///

            
        
    }//// scrm ////

    function sortClick(e){
        e.preventDefault();
        
        if(e.target.innerHTML === "▣"){
            e.target.innerHTML = "□"
        }else if(e.target.innerHTML = "□"){
            e.target.innerHTML = "▣"
        }
    } /// sortClick ///

    useEffect(() => {
        const handleScroll = throttle(()=>{
            scrm()
        },15)
        window.addEventListener("scroll",handleScroll)
        modelTitle()
        return () => {
            console.log("model cleanUp 함수");
            window.removeEventListener("scroll",handleScroll)
        };
    },[scrm]);

    return(
        <>
        <div className="models">
            <div className="model_bg">
                <div className="model_word">
                    <span>M</span>
                    <span>O</span>
                    <span>D</span>
                    <span>E</span>
                    <span>L</span>
                    <span>S</span>
                </div>
            </div>
            <div className="model_sort">
                <div className="modelSort">
                    <a href="#">
                        ASIA
                        <span onClick={sortClick}>□</span>
                    </a>
                    <a href="#">
                        INTERNATIONAL
                        <span onClick={sortClick}>□</span>
                    </a>
                </div>
            </div>
            <div className="model_list">
                {
                    model_data.map((x,i)=>
                        <div key={i} style={{left:`${33*i}%`}} className="model_item">
                            {
                                x.images.map((v,j)=>
                                    <img key={v} src={v} alt="이미지"/>
                                )
                            }
                        </div>
                    )
                }
            </div>
        </div>
        </>
    )
}

export default Model
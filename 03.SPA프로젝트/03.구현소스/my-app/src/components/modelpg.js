
import "../css/model.css";
import $ from 'jquery';
import model_data from "../data/model_data";
import { useEffect } from "react";


const Model = function(){
    console.log('model~~')

    function scrm(){
        let curSc = window.scrollY
        let scrX = window.scrollX
        
        const model_word = document.querySelectorAll(".model_word")
        const model_item = document.querySelectorAll('.model_item')
        const model_img = document.querySelectorAll(".model_item img")
        
        let mp = 400-curSc/2

        model_item.forEach((x,i)=>{
            x.style.transform = `translateX(${mp}%)`
        })/// forEach ///

        model_img.forEach((x,i)=>{
            if(i%3 === 2 && i<3){
                x.style.clipPath = `inset(0 0 0 ${curSc/3-50}%)`
            }// if //
        })/// forEach ///
        
        console.log(model_word)
    }//// scrm ////
    useEffect(() => {
        window.addEventListener("scroll",scrm)
        return () => {
            console.log("cleanUp 함수");
            window.removeEventListener("scroll",scrm)
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
                        <span></span>
                    </a>
                    <a href="#">
                        INTERNATIONAL
                        <span></span>
                    </a>
                </div>
            </div>
            <div className="model_list">
                {
                    model_data.map((x,i)=>
                        <div key={i} style={{left:`${30*i}%`}} className="model_item">
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
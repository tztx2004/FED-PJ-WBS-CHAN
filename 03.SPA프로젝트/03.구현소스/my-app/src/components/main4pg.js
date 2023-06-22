import main_data from "../data/main_data";
import "../css/main.css";
import $ from 'jquery';
import { useEffect, useState } from "react";

const Main4pg = function(){
    let [test,setTest] = useState(0)
    function onScroll(){
        const ma_4pg = document.querySelector(".ma_4pg");
        console.log(ma_4pg) 
    
    } /// onScroll ///

    useEffect(() => {
        
        console.log("4pg 컴포넌트 나타남");
        
        
        return () => {
            console.log("4pg cleanUp 함수");
        };
    });




    return(
        <>
            
            <div className="ma_4pg">
                <div className="wear_wrap">
                    <div className="wearbx">
                        <div className="wear_imgbx"><img src="./images/main/fitting_0.jpg" alt="이미지"/></div>
                        <div className="wear_imgbx"><img src="./images/main/fitting_1.jpg" alt="이미지"/></div>
                        <div className="wear_imgbx"><img src="./images/main/fitting_2.jpg" alt="이미지"/></div>
                        <div className="wear_imgbx"><img src="./images/main/fitting_3.jpg" alt="이미지"/></div>
                        <div className="wear_imgbx"><img src="./images/main/fitting_4.jpg" alt="이미지"/></div>
                        <div className="wear_imgbx"><img src="./images/main/fit2Sub.jpg" alt="이미지"/></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main4pg
import main_data from "../data/main_data";
import "../css/main.css";
import $, { event } from 'jquery';
import { useEffect, useRef, useState } from "react";

const MainPpg = function(){
    // 마스크박스
    // const ex
    let [mk,setMk] = useState(document.querySelector("#mask"))
    let [cv,setCv] = useState(document.querySelector("#cover"))

    function move(e){
        setMk(document.querySelector("#mask"))
        setCv(document.querySelector("#cover"))

        let pox = cv
        // console.log("move!!!",pox)
        
    }

    useEffect(()=>{
        
        return ()=>{
            
        }
    },[])

    
    return(
        <>
            <div className="pg1">
                <div className="wrap">
                    <div id="bg"></div>
                    <div id="mask">
                        <div className="com ag"></div>
                        <div className="com bg"></div>
                        <div className="com cg"></div>
                    </div>
                    <div id="cover" onMouseMove={move}></div>
                </div>
            </div>
        </>
    )
}

export default MainPpg
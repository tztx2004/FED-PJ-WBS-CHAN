import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "../css/main.css";
import $ from "jquery";
import main_data from "../data/main_data";
// import JQB_1 from "../modules/main1";

function jqb() {
    $(function () {
        // moveBox 마우스 따라다니게 하기
        const moveBox = $(".moveBox");
        const mvbg = $(".mvbg");
        const ma_1pg_base = document.querySelector(".ma_1pg_base");
        const ma_1pg_img1_wrapper = document.querySelector(".ma_1pg_img1_wrapper");
        const ma_1pg_imgs = document.querySelectorAll(".ma_1pg_imgs");

        // const { pathname } = useLocation();
        // 박스 움직이게 만들기 (배경,움직이는요소)
        function move(bg, tg, cg) {
            // useEffect(()=>{
            bg.addEventListener("mousemove", function (e) {
                let x = e.offsetX;
                let y = e.offsetY;
                // 회전도와주는 박스
                tg.css({
                    left: x,
                    top: y,
                    backgroundPositionX: -x,
                    backgroundPositionY: -y,
                });
                // 실질적으로 움직이는 박스
                // cg.css({
                //     backgroundPositionX: -x,
                //     backgroundPositionY: -y,
                // })

                console.log(x, y);
            }); //// mousemove ////
            // },[pathname])
        } // move

        // move(ma_1pg_base,moveBox);

        // console.log(ma_1pg_imgs)

        // background position 위치보정 함수
        function calc() {
            let bgtop = $(".ma_1pg_base").offset().top - $(window).scrollTop();
            let bgleft = $(".ma_1pg_base").offset().left;

            $(".ma_1pg_base").css({
                backgroundPosition: bgleft + "px " + bgtop + "px",
            }); ////// css ////////
            $(".moveBox").css({
                backgroundPosition: bgleft + "px " + bgtop + "px",
            }); ////// css ////////

            console.log(bgtop, bgleft);
        } //////////// calc /////////////

        // calc()
    }); ////// jQB ////////
} // jqb



const useMove = () => {
    const [state, setState] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        e.persist();
        setState((state) => ({ ...state, x: e.clientX, y: e.clientY }));
        console.log(state.x, state.y);
    };
    const moveBox = $(".moveBox");

    moveBox.css({
        left: state.x,
        top: state.y,
        backgroundPositionX: -state.x,
        backgroundPositionY: -state.y,
    });

    return {
        x: state.x,
        y: state.y,
        handleMouseMove,
    };
};




function move(e) {
        const moveBox = $(".moveBox");
    // useEffect(()=>{
        let x = e.offsetX;
        let y = e.offsetY;
        // 회전도와주는 박스
        moveBox.css({
            left: x,
            top: y,
            backgroundPositionX: -x,
            backgroundPositionY: -y,
        });
        // 실질적으로 움직이는 박스
        // cg.css({
        //     backgroundPositionX: -x,
        //     backgroundPositionY: -y,
        // })

        console.log(x, y);
    // },[pathname])
} // move





// 메인 1페이지 컴포넌트
function Main1pg(props) {
    // moveBox 마우스 따라다니게 하기
    const moveBox = $(".moveBox");
    const mvbg = $(".mvbg");
    const ma_1pg_base = document.querySelector(".ma_1pg_base");
    const ma_1pg_img1_wrapper = document.querySelector(".ma_1pg_img1_wrapper");
    const ma_1pg_imgs = document.querySelectorAll(".ma_1pg_imgs");

    const { x, y, handleMouseMove } = useMove();


    function test(){
        const test = document.querySelector(".test");
        const test2 =$(".test")
        // let ttt = test2.offsetX()
        // console.log("test",ttt)
    }
    test()

    useEffect(()=>{
        console.log("1pg effect")

        return ()=>{
            console.log("1pg clear")
        }

    },[])
    return (
        <>
            <div className="ma_1pg_img1_wrapper">
                <div className="ma_1pg_base ma_1pg_imgs" onMouseMove={handleMouseMove}></div>
                <div className="cover"></div>
                {/* <div className="mvbg"> */}
                <div className="moveBox mv1"></div>
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
            {/* {jqb()} */}
        </>
    ); ///// return /////
} ///// Main1pg /////

export default Main1pg;

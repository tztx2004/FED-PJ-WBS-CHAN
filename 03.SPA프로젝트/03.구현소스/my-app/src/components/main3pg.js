import main_data from "../data/main_data";
import "../css/main.css";
import $ from 'jquery';

$(()=>{
    // // 사진 넣기
    // const ma_3pg_imgwrap = document.querySelectorAll(".ma_3pg_imgwrap")
    // let ty = ["left","center","right"]
    // ma_3pg_imgwrap.forEach((x,i)=>{
    //     x.style.background = `url(./images/main/fusion_${ty[i]}_pc.png)`
    // })


})



const Main3pg = function(){
    return(
        <>
            <div className="ma_3pg">
                <div className="ma_3pg_copy">
                    <div className="features_heading">FEATURES</div>
                    <div className="ma_3pg_line"></div>
                    <div className="ma_3pg_cont">
                        <span className="numb">02</span>
                        <div className="ma_3pg_font1">{main_data.pg3.font1}</div>
                        <div className="ma_3pg_font2">{main_data.pg3.font2}</div>
                    </div>
                    
                </div>
                <div className="ma_3pg_img_part">
                    <div className="ma_3pg_img">
                        <div className="ma_3pg_imgwrap wi3_1">
                            <img src="./images/main/fusion_left_pc.png" alt=""/>
                        </div>
                        <div className="ma_3pg_imgwrap wi3_2">
                            <img src="./images/main/fusion_center_pc.png" alt=""/>
                        </div>
                        <div className="ma_3pg_imgwrap wi3_3">
                            <img src="./images/main/fusion_right_pc.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main3pg
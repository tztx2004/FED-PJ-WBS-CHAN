import main_data from "../data/main_data";
import "../css/main.css";
import $ from 'jquery';

const Main3pg = function(){
    return(
        <>
            <div className="ma_3pg">
                <div className="ma_3pg_copy">
                    <div className="features_heading">FEATURES</div>
                    <div className="3pg_line"></div>
                    <div className="3pg_cont">
                        <span className="numb">02</span>
                        <div className="3pg_font1">{main_data.pg3.font1}</div>
                        <div className="3pg_font2">{main_data.pg3.font2}</div>
                    </div>
                    
                </div>
                <div className="3pg_img_part">
                    <div className="3pg_img">
                        <img src="./images/main/fusion_bg_pc.jpg" alt="이미지"/>
                        <img src="./images/main/fusion_left_pc.png" alt="이미지"/>
                        <img src="./images/main/fusion_center_pc.png" alt="이미지"/>
                        <img src="./images/main/fusion_right_pc.png" alt="이미지"/>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Main3pg
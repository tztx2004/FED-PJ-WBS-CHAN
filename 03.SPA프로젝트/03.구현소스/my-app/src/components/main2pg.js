import main_data from "../data/main_data";
import "../css/main.css";
import $ from 'jquery';

const Main2pg = function(){
    return(
        <>
            <div className="ma2_2pg_about">
                <div className="ma_2pg_img">
                    <div className="about">
                        <div className="about_cover">
                            <img src="./images/main/about_frame_pc.jpg" alt="이미지"/>
                        </div>
                        <img src="./images/main/aboutA_pc@1.5x.jpg" alt="이미지"/>
                    </div>
                    <div className="about1"></div>
                    <div className="about2"></div>
                    <div className="about3"></div>
                </div>
                <div className="ma_2pg_copy">
                    <div className="ma_2pg_title"></div>
                    <div className="ma_2pg_cont"></div>
                </div>
            </div>
        </>
    )
}

export default Main2pg;
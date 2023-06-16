import main_data from "../data/main_data";
import "../css/main.css";
import $ from 'jquery';

$(()=>{
    const ma_3pg_line = $(".ma_3pg_line");

    window.addEventListener("scroll",function(){
        let start3pg = $(".ma_3pg").offset().top
        let curSc = window.scrollY // 스크롤 당 100씩

        if(curSc > start3pg-300){
            ma_3pg_line.css({
                width:"80%"
            })
        }
    })


})



const Main3pg = function(){
    return(
        <>
            <div className="ma_3pg">
                <div className="ma_3pg_copy">
                    <div className="features_heading">
                        <span className="numb">02</span>
                        <h2>FEATURES</h2>
                    </div>
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
                            <img src="./images/main/fusion_center_pc.webp" alt=""/>
                        </div>
                        <div className="ma_3pg_imgwrap wi3_2">
                            <img src="./images/main/fusion_left_pc.webp" alt=""/>
                        </div>
                        <div className="ma_3pg_imgwrap wi3_3">
                            <img src="./images/main/fusion_right_pc.webp" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main3pg
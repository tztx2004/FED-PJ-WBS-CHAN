import "../css/main.css";
import $ from 'jquery';
import main_data from '../data/main_data'


$(()=>{
    // moveBox 마우스 따라다니게 하기
    const moveBox = $(".moveBox")
    const ma_1pg_base = document.querySelector(".ma_1pg_base");
    const ma_1pg_imgs = document.querySelectorAll(".ma_1pg_imgs");
    
    ma_1pg_base.addEventListener("mousemove",function(e){
        let x = e.offsetX + 30;
        let y = e.offsetY + 30;
        moveBox.css({
            left:x,
            top:y,
        })
        console.log(x,y)
            
    }) //// mousemove ////
    
    // console.log(ma_1pg_imgs)
})


// 메인 1페이지 컴포넌트
function Main1pg(props){

    return(
        <>
            <div className="ma_1pg_img1_wrapper">
                <div className="ma_1pg_base ma_1pg_imgs">
                    <img src="./images/main/kv_base_pc.jpg"/>
                </div>
                <ol className="ma_1pg_bg">
                    <li className="ma_1pg_a ma_1pg_imgs">
                        <img data-seq="1" src="./images/main/kv_a_pc.jpg"/>
                    </li>
                    <li className="ma_1pg_b ma_1pg_imgs">
                        <img data-seq="2" src="./images/main/kv_b_pc.jpg"/>
                    </li>
                    <li className="ma_1pg_c ma_1pg_imgs">
                        <img data-seq="3" src="./images/main/kv_c_pc.jpg"/>
                    </li>
                    <div className="moveBox"></div>
                </ol>

                {/* <picture>
                    <source srcset="./images/main/kv_base_pc.jpg" />
                    <img imagemask="img" src="./images/main/kv_a_pc.jpg" width="360" height="514" data-src-pc="./images/main/kv_a_pc.jpg,./images/main/kv_b_pc.jpg,./images/main/kv_c_pc.jpg"  />
                </picture> */}
            </div>
            <div className="ma_pg1_copy">
                <span className="numb">00</span>
                <div className="ma_pg1_copy_part">
                    <h2 className="ma_pg1_title">
                        {main_data.pg1.title}
                    </h2>
                    <h3 className="ma_pg1_font">
                        {main_data.pg1.font.split("^")[0]}<br/>
                        {main_data.pg1.font.split("^")[1]}
                    </h3>
                </div>
            </div>
        </>
    );///// return /////
} ///// Main1pg /////


export default Main1pg;


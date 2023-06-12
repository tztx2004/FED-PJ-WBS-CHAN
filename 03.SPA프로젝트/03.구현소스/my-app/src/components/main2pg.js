import main_data from "../data/main_data";
import "../css/main.css";
import $ from 'jquery';

$(()=>{

    let arr = ["A","B","C"];

    const cover = $(".about_cover");
    const cv1 =$(".cv1")
    const cv2 =$(".cv2")
    const cv3 =$(".cv3")
    cover.css({
        backgroundSize:"300%",
        backgroundAttachment:"fixed"
    })

    // 사진 필터링
    function filterImg(ty){ // ty - pc나 sp(type)
        
        cover.css({
            // background:`url(./images/main/aboutA_pc@1.5x.jpg) no-repeat`,
            backgroundSize:"300%",
            backgroundAttachment:"fixed"
        })
        cv1.css({
            backgroundPosition:'0% 0',
        })
        cv2.css({
            backgroundPosition:'50% 0',
        })
        cv3.css({
            backgroundPosition:'100% 0',
        })
    }
    filterImg("pc");

    // 실험
    let cup = $(".cup")
    let cupImg = $(".cupImg")

    // 스크롤 이벤트
    window.addEventListener("scroll",function(){
        let start2pg = $(".ma2_2pg_about").offset().top // 2페이지 시작점
        let curSc = window.scrollY // 스크롤 당 100씩
        
        // 높이 설정(sticky)
        let pg2 = $(".ma2_2pg_about")
        let pg2W = pg2.width();
        // console.log("sss",pg2W)
        pg2.css({
            height:`${pg2W * 3}px`
        }) //// css /////

        if(curSc > start2pg){
            let mp = Math.ceil(curSc - start2pg);
            // console.log("mp",mp)
            // console.log("start2pg",start2pg,"cr",curSc)
            // sticky, translate 맞추기
            // filterImg 움직이기
            // console.log(curSc/10)
            
            console.log(-50-mp/10)
            cover.css({
                transform:`translateX(${-mp/10}%)`,
                
            })/// css ///
            cv1.css({
                backgroundPosition:`${-mp/20}% 0`,
            })
            cv2.css({
                backgroundPosition:`${50-mp/20}% 0`,
            })
            cv3.css({
                backgroundPosition:`${100-mp/20}% 0`,
            })
            
        } /// if ///
    }) /// scroll ///


}) //// jQB ////

const Main2pg = function(){
    return(
        <>
            <div className="ma2_2pg_about">
                <div className="ma_2pg_img">
                    <div className="about">
                        <div className="about_cover cv1"></div>
                        <div className="about_cover cv2"></div>
                        <div className="about_cover cv3"></div>
                        {/* <div className="cup">
                            <img src="./images/main/aboutA_pc@1.5x.jpg" alt="이미지" className="cupImg"/>
                        </div> */}
                        <img src="./images/main/aboutA_pc@1.5x.jpg" alt="이미지"/>
                        <img src="./images/main/aboutB_pc@1.5x.jpg" alt="이미지"/>
                        <img src="./images/main/aboutC_pc@1.5x.jpg" alt="이미지"/>
                    </div>
                    <div className="about1">TEST</div>
                    <div className="about2"></div>
                    <div className="about3"></div>
                </div>
            </div>
            <div className="ma_2pg_copy">
                <div className="ma_2pg_title">test2</div>
                <div className="ma_2pg_cont"></div>
            </div>

        </>
    )
}

export default Main2pg;
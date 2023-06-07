import "../css/main.css";

// moveBox 마우스 따라다니게 하기
const moveBox = document.querySelector(".moveBox");
const ma_1pg_imgs = document.querySelectorAll(".ma_1pg_imgs");
// let xx = event.offsetX
// console.log(xx)

// 연습
// class prc{
//     constructor({$target}){
//         this.$target = $target;
//         this.setState();
//     }
//     setState(){
//         this.render();
//     }
//     render(){
//         // 인자를 전달할 때 키값을 고정해서 변수이름을 유지한다
//         new prc({$target:"하하하"})
//     }
// }
// console.log(new prc)



// 메인 1페이지 컴포넌트
function Main1pg(){
    return(
        <>
            <div className="ma_1pg_img1_wrapper">
                <div className="ma_1pg_base ma_1pg_imgs">
                    <img src="./images/main/kv_base_pc.jpg"/>
                </div>
                <ol>
                    <li className="ma_1pg_a ma_1pg_imgs">
                        <img src="./images/main/kv_a_pc.jpg"/>
                    </li>
                    <li className="ma_1pg_b ma_1pg_imgs">
                        <img src="./images/main/kv_b_pc.jpg"/>
                    </li>
                    <li className="ma_1pg_c ma_1pg_imgs">
                        <img src="./images/main/kv_c_pc.jpg"/>
                    </li>
                </ol>
                <div className="moveBox"></div>
            </div>
            {/* <picture className="ma_1pg_img1_wrapper">
                <source srcset="./images/main/kv_base_pc.jpg" media="(min-width:600px)" width="1312" height="808"/>
                <img className="ma_1pg_img1" src="./images/main/kv_a_pc.jpg, ./images/main/kv_b_pc.jpg, ./images/main/kv_c_pc.jpg," width="360" height="514" alt="테스트이미지" />
            </picture> */}
        </>
    );
}

export default Main1pg;
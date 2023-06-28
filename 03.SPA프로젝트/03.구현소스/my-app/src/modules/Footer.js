// 하단영역 공통모듈
import "../css/info.css"

function Info(){
    return(
        <div className="info_wrapper">
            <div className="Info">
                <div className="infoBan">
                    <span className="italic_text">CARRERS / </span>
                    <span className="bold_text">CARRERS</span>
                </div>
                <div className="officeInfo">
                    AI_ SPA Project by Chan <br/>Origin :
                    <a href="https://www.ai-model.jp/">https://www.ai-model.jp/</a>
                </div>
            </div>
        </div>
    );
}

export default Info;
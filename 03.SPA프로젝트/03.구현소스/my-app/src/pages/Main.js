import Common from "../modules/Common";
import Info from "../modules/Footer";
import data from "../data/data";


// 각 페이지 모듈
import Main1pg from "../components/main1pg";



function Main(){
    return(
        <>
            <Common/>
            <Main1pg/>
            <Info/>
        </>
    )
}

export default Main;
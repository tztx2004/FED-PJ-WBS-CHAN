import Common from "../modules/Common";
import Info from "../modules/Footer";
import data from "../data/main_data";


// 각 페이지 모듈
import Main1pg from "../components/main1pg";
import Main2pg from "../components/main2pg";





function Main(){
    
    return(
        <>
            <Common/>
            <Main1pg/>
            <Main2pg/>
            <Info/>
            {/* <Practice/> */}
        </>
    )
}

export default Main;
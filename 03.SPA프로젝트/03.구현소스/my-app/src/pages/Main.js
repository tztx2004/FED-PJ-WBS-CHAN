import Common from "../modules/Common";
import Info from "../modules/Footer";
import data from "../data/main_data";


// 각 페이지 모듈
import Main1pg from "../components/main1pg";
import Main2pg from "../components/main2pg";
import Main3pg from "../components/main3pg";
import Main4pg from "../components/main4pg";
import Main5pg from "../components/main5pg";

import MainPpg from "../components/mainpp";





function Main(){
    
    return(
        <>
            <Common/>
            <Main1pg/>
            {/* <MainPpg/> */}
            <Main2pg/>
            <Main3pg/>
            <Main4pg/>
            <Main5pg/>
            <Info/>
            {/* <Practice/> */}
        </>
    )
}

export default Main;
// 템플릿
import Common from "../modules/Common";
import Info from "../modules/Footer";
import $ from "jquery"
import ContactPage from "../components/contactpg";

function Contact(){
    return(
        <>
            <Common/>
            <ContactPage/>
            <Info/>
        </>
    )
}

export default Contact;
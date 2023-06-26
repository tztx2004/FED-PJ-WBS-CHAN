import "../css/contact.css";
import $ from 'jquery';
import { useEffect, useRef } from "react";

const ContactPage = function(){
    console.log("contact")

    const contact_title = ["G","E","T"," ","I","N"," ","T","O","U","C","H"];
    const contact_font = document.querySelector(".contact_font")
    
    const test = ()=>{
        console.log("test!!!!!")
        
        document.querySelectorAll(".contact_font span")
        .forEach((v,j)=>{
            setTimeout(()=>{
                v.style.top = 0
            },j*100)
        })
    }/// test ////

    useEffect(()=>{
        test()
        
        return ()=>{}
    })

    return(
        <>
            <div className="contact">
                <div className="contact_font">
                    {/* <h2>GET IN<br/> TOUCH</h2> */}
                    {
                        contact_title.map((x,i)=>
                            <span key={i}>{x}</span>
                        )
                    }
                    
                </div>
                <div className="input_part">
                    <input placeholder="Enter the contents"/>
                    <label/>
                </div>
            </div>
        </>
    )
}

export default ContactPage
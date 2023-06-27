import "../css/common.css";
import { BrowserRouter, Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

// console.log("ggg")

function Common() {
    const us = useNavigate();

    const myFn = (x) => {
        us(x);
        console.log(x);
    };
    const arr = ["DO AI MODELS DREAM OF ELECTRIC SHEEP?"];

    const SetH = () => {
        return <>{arr.map((x, i) => x)}</>;
    };
    useEffect(() => {
        setTimeout(() => {
            document.querySelector(".header_text").style.transform = "translateY(0%)";
        }, 200);

        return () => {};
    });

    return (
        <>
            <header className="header">
                <nav className="nav limitWidth">
                    <Link to={"/Models"}>
                        <span className="Models nav_text">MODLES</span>
                    </Link>
                    <Link to={"/Main"}>
                        <span className="Main nav_text">AI MODELS</span>
                    </Link>
                    <Link to={"/Contact"}>
                        <span className="Contact nav_text">CONTACT</span>
                    </Link>
                </nav>
                <span className="header_text">
                    <SetH />
                </span>
            </header>
        </>
    );
}

export default Common;

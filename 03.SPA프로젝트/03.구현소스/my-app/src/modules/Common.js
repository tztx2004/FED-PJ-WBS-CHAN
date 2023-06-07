import '../css/common.css';
import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom';



function Common() {
  return (
    <>
      <header className='header'>
        <nav className='nav limitWidth'>
          <Link to={"/MODELS"}>
            <span className='Models nav_text'>MODLES</span>
          </Link>
          <Link to={"/Main"}>
            <span className='Main nav_text'>AI MODELS</span></Link>
          <Link to={"/Contact"}>
            <span className='Contact nav_text'>CONTACT</span>
          </Link>
        </nav>
        <span className='header_text'>DO AI MODELS DREAM OF ELECTRIC SHEEP?</span>
      </header>
    </>
  );
}

export default Common;

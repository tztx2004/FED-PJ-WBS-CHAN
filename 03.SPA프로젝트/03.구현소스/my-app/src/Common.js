import './common.css';
import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom';



function Common() {
  return (
    <>
      <header className='header'>
        <nav className='nav limitWidth'>
          <Link to={"/MODELS"}>
            <span className='Modles nav_text'>MODLES</span>
          </Link>
          <span className='Main nav_text'>AI MODELS</span>
          <span className='Contact nav_text'>CONTACT</span>
        </nav>
        <span className='header_text'>DO AI MODELS DREAM OF ELECTRIC SHEEP?</span>
      </header>
    </>
  );
}

export default Common;

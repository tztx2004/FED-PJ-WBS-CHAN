import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './css/index.css';
import Common from './modules/Common';
import ScrollToTop from './modules/ScrollToTop';
import Contact from './pages/Contact';
import Main from './pages/Main';
import Models from './pages/Models';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
          <Route index element={<Main/>} />
          <Route path="Models" element={<Models/>} ></Route>
          <Route path="Main" element={<Main/>}></Route>
          <Route path="Contact" element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
  </>
);


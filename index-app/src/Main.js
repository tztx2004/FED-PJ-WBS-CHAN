import './css/App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

import main_data from './main_data';

function App() {
  return (
    <>
      <header>
        <div className="logo">FRONT-END CHAN</div>

        <nav>
          <Link to="#1">
            <div>INTRODUCTION</div>
          </Link>
          {/* <Link to="#2">
            <div></div>
          </Link> */}
          <Link to="#2">
            <div>PORTFOLIO</div>
          </Link>
        </nav>

      </header>
      <main className="main">
        <section id='1' className='pg1'>
          <div className='pg1_wrap'>
            <div className='my_pic'>
              <img src="./logo192.png" alt="이미지"/>
            </div>
            <div className='about_me'>
              <h1>
                안녕하세요! 다양한 주제로 웹페이지를 제작하고 있는 프론트엔드 웹개발자<br/><br/>
                <strong>정찬</strong>입니다!
              </h1>
              <h2>
                javascript, Vue.js, React, Html, CSS로 웹개발하고 있습니다!<br/>
                학습능력이 좋은편이기 때문에 새로운 프레임워크, 라이브러리에 적응을 잘합니다!<br/></h2>
              
            </div>
          </div>
        </section>
        <section id='2' className='pg2'>
          <div className='pg2_wrap'>
            {
              main_data.map((x,i)=>
                <a className='port_wrap' href={x.psrc} target="_blank" key={i}>
                  <div className='portbx'>
                    <div className='portImg'>
                      <img src={x.pimg} alt="이미지"/>
                    </div>
                    <div className='portTitle'>{x.ptit}</div>
                    <div className='portInfo'>{x.pinfo}</div>
                  </div>
                </a>
              )
            }
          </div>
        </section>
        <section id='3' className='pg3'></section>
      </main>
      <section className='info'>

      </section>
    </>
  );
}

export default App;

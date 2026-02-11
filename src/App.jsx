import Header from './components/1-header/Header';
import  Hero from './components/2-hero/Hero';
import Main from './components/3-main/Main';
import Footer from './components/6-footer/Footer';
import Contact from './components/5-contact/Contact';
import Skill from './components/4-skill/Skill';
import Me from './components/6-me/me';
import {useEffect, useState } from 'react';


function App() {
  useEffect(() => {
    window.addEventListener("scroll",()=>{
      if(window.scrollY > 300){
        setShowScrol(true);
      }else{
        setShowScrol(false);
      }
      console.log(window.scrollY);
    }); // Scroll to top on initial load
  }, []);

  const [showScroll,setShowScrol]=useState(false);
  return (
    <div id='up' className='conctainer'>
      <Header/>
    <div className='divider'/>
      <Hero/>
      <div className="divider"/>
      <Main/>
      <div className="divider"/>
      <Skill/>
      <div className="divider"/>
      <Contact/>
      <div className="divider"/>
      <Me/>
      <div className="divider"/>

      <Footer/>

      <a style={{opacity: showScroll ? 1 : 0, transition:"3s"}} href="#up">
          <button className='scroll2Top icon-keyboard_arrow_up' ></button>
      </a>
    </div>
  )
}

export default App

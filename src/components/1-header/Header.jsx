import "./header.css";
import { useEffect, useState } from "react";
  

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [theme,setTheme] = useState(localStorage.getItem("currentMode") ?? "dark");
  useEffect(() => {
    if(theme === "light"){
      document.body.classList.remove("dark");
      document.body.classList.add("light");        
    }else{
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);
  return (
    <div>
      <header className="flex">
        <button  onClick={()=>{
          setShowModal(!showModal);
        }} className="menu icon-menu"/>
        
        <div/>

        <nav>
          <ul className="flex">
            
            <li>
              <a href="#hero">About</a>
            </li>
            <li>
              <a href="#main">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact-us">Contact</a>
            </li>
            <li>
              <a href="#me">Me</a>
            </li>
          </ul>
        </nav>

        <button  onClick={()=>{
          //send the value to the local storage
          localStorage.setItem("currentMode",theme === "dark" ? "light":"dark"); //set the value in LS

          //get the value from LS
          setTheme(localStorage.getItem("currentMode"));


        }} className="mode flex">
          {theme === "light" ? (
            <span className="icon-sun"></span>
          ) : (
            <span className="icon-moon-o"></span>
          )}
        </button>

        {showModal &&(
          <div className="fixed">
            <ul className="modal">
              <li className="">
                <button className="icon-close" onClick={()=>{
                  setShowModal(false);
                }}/>                 
              </li>
              <li>
              <a href="">About</a>
              </li>
              <li>
                <a href="">Articles</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
              <li>
                <a href="">Speaking</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
        </div>
        )}



      </header>
    </div>
  );
}

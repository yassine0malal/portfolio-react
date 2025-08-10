import { useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects";

const Main = () => {
  // @ts-ignore
  const [currentActive, setCurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);
  const handleClick = (category) => {
  
  setCurrentActive(category);
      const newArr = myProjects.filter((item) => {
        const itemCategory = item.category.find((cat) => {
          return cat === category;
        });
        return itemCategory === category ;
      });
            setArr(newArr);
  };

  return (
    <main className="flex">
      <section className="left-section  flex">
        <button
          onClick={() => {
            setCurrentActive("all");
            setArr(myProjects); // Reset to all projects
          }}
          className={currentActive === "all" ? "active" : null}
        >
          all projects
        </button>
        <button
          onClick={() => {
            handleClick("css");
          }}
          className={currentActive === "css" ? "active" : null}
        >
          HTML & CSS
        </button>

        <button
          onClick={() => {
            handleClick("react"); 
          }}
          className={currentActive === "react" ? "active" : null}
        >
          React
        </button>
        <button
          onClick={() => {
            handleClick("bootstrap");
          }}
          className={currentActive === "bootstrap" ? "active" : null}
        >
          Bootstrap
        </button>
        <button
          onClick={() => {
            handleClick("JS");
          }}
          className={currentActive === "js" ? "active" : null}
        >
          JS
        </button>
        <button
          onClick={() => {
            handleClick("Node");
          }}
          className={currentActive === "node" ? "active" : null}
        >
          Node & Express
        </button>
        
      </section>

      <section className="right-section flex ">
        {arr.map((item) => {
          return (
            <article key={item.imgPath} className="card ">
              <img src={item.imgPath} width={266} alt="" />
              <div className="box" style={{ width: "266px" }}>
                <h1 className="title">{item.projectTitle}</h1>
                <p className="sub-title">
                  Lorem ipsum dolor sit amet consectetur elit adipisicing. Ex
                  tempore dolor in, accusantium laudantium accusamus.
                </p>
                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <div className="icon-link"></div>
                    <div className="icon-github"></div>
                  </div>
                  <a className="link flex" href="">
                    more
                    <span
                      style={{ alignSelf: "end" }}
                      className="icon-arrow-right"
                    ></span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Main;

import { useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects";
import { AnimatePresence, motion, scale } from "framer-motion";

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
      return itemCategory === category;
    });
    setArr(newArr);
  };

  return (
    <main id="main" className="flex">
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
            handleClick("js");
          }}
          className={currentActive === "javaScript" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            handleClick("node");
          }}
          className={currentActive === "node" ? "active" : null}
        >
          Node & Express
        </button>
      </section>

      <section className="right-section flex ">
        <AnimatePresence>
          {arr.map((item) => {
          return (

            <motion.article
            layout
            initial={{transform:"scale(0)"}}
            animate={{transform:"scale(1)"}}
            transition={{type:"spring", damping:8, stiffness:50}}
             key={item.imgPath} className="card ">
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
            </motion.article>
          );
        })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;

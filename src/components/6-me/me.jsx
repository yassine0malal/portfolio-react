import { motion } from "framer-motion";
import "./me.css";
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 } // Smooth delay between words
  }
};

const item = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100 } // Smooth spring feel
  }
};

const SmoothParagraph = ({ text,cls="prg" }) => (
  <motion.p
    variants={container}
    initial="hidden"
    whileHover="visible" // Triggers smoothly on scroll
    viewport={{ once: true, amount: 0.5 }} // Reveals when half visible
    style={{ fontSize: "1.2rem" }} // Use CSS or REM here
    className={cls} // why it does not works
  >
    {text.split(" ").map((word, i) => (
      <motion.span key={i} 
// @ts-ignore
      variants={item} style={{ display: "inline-block", marginRight: "5px" }}>
        {word}
      </motion.span>
    ))}
  </motion.p>
);

export default function Me(){
    return(
        <section id="me" className="me-section">
            <h1 className="title">
                <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill=""><path d="M607.5-212.5Q660-265 660-340t-52.5-127.5Q555-520 480-520t-127.5 52.5Q300-415 300-340t52.5 127.5Q405-160 480-160t127.5-52.5ZM363-572q20-11 42.5-17.5T451-598L350-800H250l113 228Zm234 0 114-228H610l-85 170 19 38q14 4 27 8.5t26 11.5ZM256-208q-17-29-26.5-62.5T220-340q0-36 9.5-69.5T256-472q-42 14-69 49.5T160-340q0 47 27 82.5t69 49.5Zm448 0q42-14 69-49.5t27-82.5q0-47-27-82.5T704-472q17 29 26.5 62.5T740-340q0 36-9.5 69.5T704-208ZM403.5-91.5Q367-103 336-123q-9 2-18 2.5t-19 .5q-91 0-155-64T80-339q0-87 58-149t143-69L120-880h280l80 160 80-160h280L680-559q85 8 142.5 70T880-340q0 92-64 156t-156 64q-9 0-18.5-.5T623-123q-31 20-67 31.5T480-80q-40 0-76.5-11.5ZM480-340ZM363-572 250-800l113 228Zm234 0 114-228-114 228ZM406-230l28-91-74-53h91l29-96 29 96h91l-74 53 28 91-74-56-74 56Z"/></svg>
                Core Competencies
            </h1>
            <img  className="main-image" src="me-section.png" alt="yassine malal" />
            <div className="blur-bottom"></div>
            <div className="top-left">
                <div className="description">
                    <motion.h3
                    className="animated-text" 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0, scale:1 }}   
                    transition={{ duration: 0.9 }}
                    >
                        About Me


                    </motion.h3>
                    <SmoothParagraph
                        text={"I’m a full-stack developer passionate about building reliable and scalable applications. I enjoy turning complex problems into clean, efficient solutions, from backend architecture to intuitive user interfaces. "}
                    />
                </div>
            </div>
            
            <div className="top-right">
                <div className="description">
                    <motion.h3
                    className="animated-text" 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0, scale:1 }}   
                    transition={{ duration: 0.9 }}
                    >
                        Technical Skills
                    </motion.h3>
                    <SmoothParagraph 
                        text={"Experienced with Node.js, Express, MongoDB, Flutter, and REST APIs. I work comfortably with databases, authentication systems, and modern development tools like Docker and Git. "}
                    />
                </div>
            </div>
            <div className="bottom-right">
                <div className="description">
                    <motion.h3
                    className="animated-text" 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0, scale:1 }}   
                    transition={{ duration: 0.9 }}
                    >
                        Problem Solving
                    </motion.h3>
                    <SmoothParagraph
                        text={"I approach development with a strong analytical mindset. Whether it’s debugging, optimizing performance, or designing data models, I focus on clear logic and maintainable solutions. "}
                    />
                </div>
            </div>
            <div className="bottom-left">
                <div className="description">
                    <motion.h3
                    className="animated-text" 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0, scale:1 }}   
                    transition={{ duration: 0.9 }}
                    >
                        Continuous Learning
                    </motion.h3>
                    <SmoothParagraph 
                        text={"Always learning and improving, I explore topics like machine learning, networking, and system design. I enjoy understanding how things work under the hood and applying that knowledge to real projects."}
                    />
                </div>
            </div>
        </section>
    )
}
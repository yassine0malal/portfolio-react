import react from "react";
import "./hero.css";
import Lottie from "lottie-react";
import devAnimation from "../../animations/devAnimation.json";
import { useRef, useEffect } from "react";
import { motion, scale } from "framer-motion";

export default function Hero() {
  const lottieRef = useRef(null);
  useEffect(() => {
    // Wait until the ref is set by Lottie
    if (lottieRef.current && typeof lottieRef.current.setSpeed === "function") {
      // to handle the code you can find it here ,or the chatgpt  https//lootiereact.com/
      lottieRef.current.setSpeed(1.5); // 1 = normal, 1.5 = 50% faster, 0.5 = half speed
    }
  }, []); // run once after mount
  return (
    <section id="hero" className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="./profile.png"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="title"
        >
          Software developer,tech innovator.
        </motion.h1>
        <p className="sub-title">
          I am Yassine Malal,a computer science student and
          full-stack developer passionate about building dynamic web, mobile,
          and desktop applications; 
        </p>
        <div className="all-icons flex">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/+212655146069"
          >
            <div className="icon icon-whatsapp"></div>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/yassin.malale"
          >
            <div className="icon icon-facebook"></div>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/yassine0malal"
          >
            <div className="icon icon-github"></div>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://linkedin.com/in/yassine-malal-42a67b310"
          >
            <div className="icon icon-linkedin"></div>
          </a>
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          loop={true}
          autoplay={true}
          onLoadedImages={() => {
            lottieRef.current.setSpeed(5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
}

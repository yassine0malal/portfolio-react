import react from 'react';
import './hero.css';
import Lottie from 'lottie-react';
import devAnimation from '../../animations/devAnimation.json';
import { useRef,useEffect  } from 'react';
import { motion, scale } from 'framer-motion';

export default function Hero() {
  const lottieRef = useRef(null);
  useEffect(() => {
    // Wait until the ref is set by Lottie
    if (lottieRef.current && typeof lottieRef.current.setSpeed === 'function') {
      // to handle the code you can find it here ,or the chatgpt  https//lootiereact.com/
      lottieRef.current.setSpeed(1.5); // 1 = normal, 1.5 = 50% faster, 0.5 = half speed
    }
  }, []); // run once after mount
  return (
    <section className='hero flex'>
      <div className='left-section'>
        <div className="parent-avatar flex">
          <motion.img 
          initial={{transform:"scale(0)"}}
          animate={{transform:"scale(1.1)"}}
          transition={{damping:6, type:"spring",stiffness:100}}
          src="./profile.png" className='avatar' alt="" />
          <div className='icon-verified'></div>
        </div>
        <motion.h1
        initial={{scale:0}}
        animate={{scale:1}}
        transition={{duration:2}}
        className='title'>
            Software
            designer,
            founder, and
            amateur
            astronaut.
        </motion.h1>
        <p className='sub-title'>I'm Yassine Malal, a software Developper and entrepreneur based in New York City, I'm the Founder and CEO of Planetanias, Where we develop technologies that winpower regular people to explore space co their gen terms</p>
        <div className="all-icons flex">
          <div className="icon icon-twitter"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin"></div>
        </div>
      </div>

      <div className='right-section animation '>
                  <Lottie
                  lottieRef={lottieRef}
                  className=""
                  loop={true}
                  autoplay={true}
                  onLoadedImages={() => {
                    
                    lottieRef.current.setSpeed(5);                    
                  }
                  }
                animationData={devAnimation}
              />
      </div>
      
    </section>
  )
}

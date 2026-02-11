// @ts-ignore
import { motion, px } from "motion/react";
import "./skill.css";

// 1. Move variants to the top so they are defined before usage
const cardVariants = {
    offscreen: { y: 300 },
    onscreen: {
        y: 50,
        rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
};

const hue = (h) => `hsl(${h}, 100%, 50%)`;

export default function ScrollTriggered() {
    return (
        <div id="skills" className="skills">
            <h1 className="title">
                <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill="rgb(82 82 91)"><path d="M760-120q-39 0-70-22.5T647-200H440q-66 0-113-47t-47-113q0-66 47-113t113-47h80q33 0 56.5-23.5T600-600q0-33-23.5-56.5T520-680H313q-13 35-43.5 57.5T200-600q-50 0-85-35t-35-85q0-50 35-85t85-35q39 0 69.5 22.5T313-760h207q66 0 113 47t47 113q0 66-47 113t-113 47h-80q-33 0-56.5 23.5T360-360q0 33 23.5 56.5T440-280h207q13-35 43.5-57.5T760-360q50 0 85 35t35 85q0 50-35 85t-85 35ZM228.5-691.5Q240-703 240-720t-11.5-28.5Q217-760 200-760t-28.5 11.5Q160-737 160-720t11.5 28.5Q183-680 200-680t28.5-11.5Z"/></svg><span>Skills</span>
            </h1>
            <div className="container-sk">
                {food.map(([emoji, hueA, hueB], i) => (
                    // @ts-ignore
                    <Card i={i} emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
                ))}
            </div>
        </div>
    );
}

function Card({ emoji, hueA, hueB }) {
    const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

    return (
        <motion.div
            className="card-container-sk" // Use the static class name
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.8 }}
        >
            <div className="splash-sk" style={{ background }} />
            <motion.div 
// @ts-ignore
            variants={cardVariants} className="card-sk">
                <img src={emoji} width={200} height={200} alt="" />
            </motion.div>
        </motion.div>
    );
}

const food = [
    ["/skills/react.png", 193, 205],   // Cyan (React Blue)
    ["/skills/html.png", 12, 35],      // Orange-Red (HTML5)
    ["/skills/js.png", 45, 55],        // Bright Yellow (JavaScript)
    ["/skills/express.png", 200, 220], // Sky Blue (Express.js)
    ["/skills/node.png", 100, 120],    // Leaf Green (Node.js)
    ["/skills/css.png", 210, 230],     // Modern Blue (CSS3)
    ["/skills/flutter.png", 195, 215], // Ocean Blue (Flutter)
    ["/skills/php.png", 235, 255],     // Purple-Blue (PHP)
    ["/skills/laravel.png", 0, 15],     // Purple-Blue (laravel)
    ["/skills/mobile.png", 210, 290],     // Purple-Blue (mobile)
    ["/skills/python.png", 240, 50],     // Purple-Blue (python)
    ["/skills/ml.png", 240, 50],     // Purple-Blue (python)
    ["/skills/mysql.png", 190, 210],   // Sea Blue (MySQL)
    ["/skills/mongodb.png", 80, 120]   // Deep Green (MongoDB)
];

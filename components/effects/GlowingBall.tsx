import { motion } from "framer-motion";

const Ball = ({ size, delay }) => (
  <motion.div
    className="glowing-ball"
    style={{ width: size, height: size }}
    animate={{
      x: [0, 100, -50, 200], // Customize random positions
      y: [0, -100, 50, -200],
      boxShadow: [
        "0px 0px 10px 5px rgba(21, 91, 121, 0.8)",
        "0px 0px 30px 15px rgba(21, 91, 121, 0.5)",
      ],
    }}
    transition={{
      repeat: Infinity,
      duration: 5,
      ease: "easeInOut",
      delay,
    }}
  />
);

export default Ball;

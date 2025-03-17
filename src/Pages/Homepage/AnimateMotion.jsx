import React from "react";
import { motion } from "framer-motion";

const AnimateMotion = () => {
  return (
    <div>
      <svg
        width="100%"
        height="40%"
        viewBox="0 0 1440 490"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="20%" x2="100%" y2="20%">
            <stop offset="5%" stopColor="#F78DA7"></stop>
            <stop offset="25%" stopColor="#8ED1FC"></stop>
          </linearGradient>
        </defs>

        <motion.path
          initial={{
            d: "M 0,500 L 0,0 C 180.8,80 361.6,160 532,182 C 702.4,204 862.4,168 1012,128 C 1161.6,88 1300.8,44 1440,0 L 1440,500 L 0,500 Z",
          }}
          animate={{
            d: [
              "M 0,500 L 0,0 C 180.8,80 361.6,160 532,182 C 702.4,204 862.4,168 1012,128 C 1161.6,88 1300.8,44 1440,0 L 1440,500 L 0,500 Z",
              "M 0,500 L 0,0 C 163.3,112.93 326.6,225.86 478,246 C 629.3,266.13 768.6,193.46 927,137 C 1085.3,80.53 1262.6,40.26 1440,0 L 1440,500 L 0,500 Z",
              "M 0,500 L 0,0 C 131.3,68.39 262.6,136.79 413,178 C 563.3,219.2 732.6,233.2 907,199 C 1081.3,164.8 1260.6,82.4 1440,0 L 1440,500 L 0,500 Z",
              "M 0,500 L 0,0 C 168.6,53.33 337.3,106.66 509,156 C 680.6,205.33 855.3,250.66 1011,224 C 1166.6,197.33 1303.3,98.66 1440,0 L 1440,500 L 0,500 Z",
              "M 0,500 L 0,0 C 180.8,80 361.6,160 532,182 C 702.4,204 862.4,168 1012,128 C 1161.6,88 1300.8,44 1440,0 L 1440,500 L 0,500 Z",
            ],
          }}
          transition={{
            duration: 4,
            ease: "linear",
          }}
          fill="url(#gradient)"
        />
      </svg>
    </div>
  );
};

export default AnimateMotion;

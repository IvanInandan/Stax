import { motion, useScroll, useTransform } from "framer-motion"; // Correct import
import React, { useRef } from "react";

import p0 from "../img/parallax-0.png"; // Back-most
import p1 from "../img/parallax-1.png";
import p2 from "../img/parallax-2.png";
import p3 from "../img/parallax-3.png";
import p4 from "../img/parallax-4.png";
import p5 from "../img/parallax-5.png";
import p6 from "../img/parallax-6.png"; //Front-most

const Parallax = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 1200]);

  // Define varying scroll speeds for different layers
  const yTransformLayer0 = useTransform(scrollYProgress, [0, 1], [0, -15]); // Slowest layer (back-most)
  const yTransformLayer1 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const yTransformLayer2 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yTransformLayer3 = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const yTransformLayer4 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const yTransformLayer5 = useTransform(scrollYProgress, [0, 1], [0, -320]);
  const yTransformLayer6 = useTransform(scrollYProgress, [0, 1], [0, -540]); // Front-most layer moves fastest

  return (
    <div ref={ref} className="w-screen h-screen overflow-hidden relative z-0">
      {/* Static background behind all parallax layers */}
      <motion.div
        className="w-screen h-screen absolute inset-0 bottom-0 z-1"
        style={{ backgroundColor: "#FEDCC8" }}
      />

      {/* Parallax image layers with varying speeds */}
      <motion.div
        className="absolute inset-0 bottom-0 z-2"
        style={{
          backgroundImage: `url(${p0})`,
          backgroundPosition: "center bottom",
          backgroundSize: "130%",
          backgroundRepeat: "no-repeat",
          y: yTransformLayer0,
        }}
      />

      <motion.div
        className="absolute inset-0 flex items-start justify-center pt-60 z-3"
        style={{
          y: textY,
        }}
      >
        <h1 className="font-bold text-white text-7xl md:text-9xl">Pennywise</h1>
      </motion.div>

      <motion.div
        className="absolute inset-0 bottom-0 z-4"
        style={{
          backgroundImage: `url(${p1})`,
          backgroundPosition: "center bottom",
          backgroundSize: "130%",
          backgroundRepeat: "no-repeat",
          y: yTransformLayer1,
        }}
      />

      <motion.div
        className="absolute inset-0 bottom-0 z-5"
        style={{
          backgroundImage: `url(${p2})`,
          backgroundPosition: "center bottom",
          backgroundSize: "130%",
          backgroundRepeat: "no-repeat",
          y: yTransformLayer2,
        }}
      />

      <motion.div
        className="absolute inset-0 bottom-0 z-6"
        style={{
          backgroundImage: `url(${p3})`,
          backgroundPosition: "center bottom",
          backgroundSize: "130%",
          backgroundRepeat: "no-repeat",
          y: yTransformLayer3,
        }}
      />

      <motion.div
        className="absolute inset-0 bottom-0 z-7"
        style={{
          backgroundImage: `url(${p4})`,
          backgroundPosition: "center bottom",
          backgroundSize: "130%",
          backgroundRepeat: "no-repeat",
          y: yTransformLayer4,
        }}
      />

      <motion.div
        className="absolute inset-0 bottom-0 z-8"
        style={{
          backgroundImage: `url(${p5})`,
          backgroundPosition: "center bottom",
          backgroundSize: "130%",
          backgroundRepeat: "no-repeat",
          y: yTransformLayer5,
        }}
      />

      <motion.div
        className="absolute inset-0 bottom-0 z-9"
        style={{
          backgroundImage: `url(${p6})`,
          backgroundPosition: "center bottom",
          backgroundSize: "130%",
          backgroundRepeat: "no-repeat",
          y: yTransformLayer6,
        }}
      />

      {/* Parallax "cover" to mask separating layers on bottom */}
      <motion.div
        className="absolute inset-0 z-10"
        style={{
          background: "#2D112B",
          y: useTransform(scrollYProgress, [0, 1], ["100%", "35%"]), // scrolls down to cover
        }}
      />
    </div>
  );
};

export default Parallax;

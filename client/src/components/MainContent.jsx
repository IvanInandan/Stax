import React, { useState, useEffect, useRef } from "react";
import { useMantineColorScheme } from "@mantine/core";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useInView,
  useTransform,
} from "motion/react";

import Nav from "./MantineUI/Nav";
import Header from "./MantineUI/Header";
import About from "./MantineUI/About";
import Features from "./MantineUI/Features";
import Faq from "./MantineUI/Faq";
import Contact from "./MantineUI/Contact";
import Footer from "./MantineUI/Footer";
import Hero from "./Hero";
import Reveal from "./TextReveal";

const MainContent = () => {
  const { colorScheme } = useMantineColorScheme();

  const bg = colorScheme === "light" ? "#F8DDCB" : "#1F2935";
  const fg = colorScheme === "light" ? "#2c122b" : "#200b22";
  const bg1 = colorScheme === "light" ? "#530031" : "#3d0025";
  const bg2 = colorScheme === "light" ? "#7e0032" : "#5c0226";
  const bg3 = colorScheme === "light" ? "#ca293e" : "#951d2e";
  const bg4 = colorScheme === "light" ? "#ff583d" : "#bb432c";
  const bg5 = colorScheme === "light" ? "#ff6d40" : "#ba512e";
  const bg6 = colorScheme === "light" ? "#ff7f4a" : "#bb5f37";

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div>
      <Nav />

      <motion.section
        ref={ref}
        id="hero"
        className="h-screen fixed"
        style={{ opacity }}
      >
        <Hero />
      </motion.section>

      {/* Dummy div thats screen sized. Since on top of hero on load since hero is position fixed. They are the same size */}
      {/* Used to fill space so div below in charge of scroll animation doesn't trigger right away */}
      {/* [HERO/dummydiv] --1vh--> [scroll trigger div] --1vh--> [first section] */}
      <div className="h-screen" />

      {/* Screen sized div between hero and first section to trigger scroll animation of fading background */}
      <div ref={ref} className="h-screen" />

      <section
        id="header"
        className="h-screen w-screen flex justify-start items-center p-10 z-20"
      >
        <Reveal>
          <Header />
        </Reveal>
      </section>

      <section
        id="features"
        className="h-screen w-screen flex justify-center items-center p-10"
      >
        <div className=" bg-yellow-500 p-10 rounded-2xl">
          <Features />
        </div>
      </section>

      <section
        id="about"
        className="h-screen flex justify-center items-center p-10"
      >
        <div className="bg-red-500 p-10 rounded-2xl">
          <About />
        </div>
      </section>

      <section
        id="faq"
        className="h-screen w-screen flex justify-center items-center p-10"
      >
        <div className="w-9/12 bg-blue-500 p-10 rounded-2xl">
          <Faq />
        </div>
      </section>

      <section
        id="contact"
        className="h-screen w-screen flex justify-center items-center p-10"
      >
        <div className="bg-purple-500 p-10 rounded-2xl">
          <Contact />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MainContent;

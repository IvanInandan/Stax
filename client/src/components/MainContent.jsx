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
import Reveal from "./Reveal";

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
  const { scrollYProgress } = useScroll({ target: ref });
  const scrollOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div>
      <Nav />

      <section id="hero">
        <Hero />
      </section>

      <div className="h-screen w-screen" style={{ backgroundColor: fg }} />

      <section
        ref={ref}
        id="header"
        className="h-screen w-screen flex justify-start items-center p-10"
      >
        <Header />
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

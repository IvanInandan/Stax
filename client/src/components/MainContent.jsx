import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
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
  // Attach ref to DOM element to track position on screen
  const ref = useRef(null);

  //START TEST
  const textRef = useRef(null);
  const { scrollYProgress: textScroll } = useScroll({
    target: textRef,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(textScroll, "change", (latest) => {
    console.log("textScroll:", latest);
  });
  //END TEST

  // Returns a value from 0 -> 1 where it tracks ref from 'start-end' to 'end-start'
  // In offset: "target obj, viewport" --> "start end" means when the start (top) of the target obj (ref) hits the end (bottom) of the viewport
  // offset: ["start end", "end start"] --> [0, 1] --> scrollYProgress starts (0) at "start end" and finishes (1) at "end start"
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // useTransform hook dynamically adjusts opacity value based off of scrollYProgress.
  // [0, 0.5] represents the value of scrollYProgress, [1, 0] represents the value of opacity
  // Opacity will be 1 at scrollYProgress === 0, and 0 at scrollYProgress === 0.5. It will also fill in all the values in between, but has these as target values
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div>
      <Nav />

      <div id="hero" />
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
      <div ref={ref} className="h-1/2" />

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

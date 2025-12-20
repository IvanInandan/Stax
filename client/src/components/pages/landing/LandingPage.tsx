"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/layouts/landing/Navbar";
import Intro from "./Intro";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const LandingPage = () => {
  const { scrollY } = useScroll();

  // Intro fades out over first 200px
  const introOpacity = useTransform(scrollY, [150, 200], [1, 0]);

  // Navbar fades in over 150 → 250px
  const navbarOpacity = useTransform(scrollY, [150, 350], [0, 1]);
  const navbarY = useTransform(scrollY, [150, 250], [-20, 0]);

  const heroY = useTransform(scrollY, [300, 1250], [0, -window.innerHeight]);

  // Track if intro and navbar should be frozen
  const [introVisible, setIntroVisible] = useState(true);
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest > 200 && !contentVisible) setContentVisible(true); // lock it visible
      if (latest > 200 && introVisible) setIntroVisible(false);
      if (latest > 250 && !navbarVisible) setNavbarVisible(true);
    });
  }, [scrollY, contentVisible, introVisible, navbarVisible]);

  return (
    <>
      {/* Fixed Intro */}
      {introVisible && (
        <motion.div
          style={{ opacity: introOpacity }}
          className="fixed inset-0 flex items-center justify-center z-20 pointer-events-none"
        >
          <Intro />
        </motion.div>
      )}

      {/* Navbar */}
      <motion.div
        style={{
          opacity: navbarVisible ? 1 : navbarOpacity,
          y: navbarVisible ? 0 : navbarY,
        }}
        className="fixed top-0 left-0 right-0 z-30"
      >
        <Navbar />
      </motion.div>

      {/* <div className="fixed top-0 left-0 w-full">
        <Navbar />
      </div> */}

      {/* Main content */}
      <main>
        <motion.section
          style={{
            y: heroY,
            opacity: contentVisible ? 1 : 0,
          }}
          className="sticky top-0 h-screen flex items-center justify-center"
        >
          <h1 className="text-4xl font-bold">Hero Section</h1>
          <Button
            onClick={() =>
              toast.success("Warning: Please check the entered data.")
            }
          >
            success
          </Button>
          <Button
            onClick={() =>
              toast.info("This is for your information, please note.")
            }
          >
            warning
          </Button>
          <Button
            onClick={() =>
              toast.error("Warning: Please check the entered data.")
            }
          >
            error
          </Button>
        </motion.section>

        <section className="h-screen flex items-center justify-center">
          <h2 className="text-3xl">Features</h2>
        </section>

        <section className="h-screen flex items-center justify-center">
          <h2 className="text-3xl">Testimonials</h2>
        </section>
      </main>
    </>
  );
};

export default LandingPage;

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CrowdCanvas } from "@/components/ui/skiper-ui/skiper39";

const Intro = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  /**
   * Track scroll progress for this section only
   */
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  /**
   * Text setup
   */
  const text = "forked";
  const characters = text.split("");
  const centerIndex = Math.floor(characters.length / 2);

  return (
    <section
      ref={targetRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Foreground text */}
      <div
        className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center"
        style={{ perspective: "900px" }}
      >
        {characters.map((char, index) => {
          const distanceFromCenter = index - centerIndex;

          /**
           * Alternating direction index
           * even → up, odd → down
           */
          const direction = index % 2 === 0 ? -1 : 1;

          /**
           * Break-apart animations (on scroll)
           */
          const x = useTransform(
            scrollYProgress,
            [0, 0.6],
            [0, distanceFromCenter * 800]
          );

          const y = useTransform(
            scrollYProgress,
            [0, 0.6],
            [0, direction * (Math.abs(distanceFromCenter) + 5) * 50]
          );

          const rotateZ = useTransform(
            scrollYProgress,
            [0, 1],
            [0, distanceFromCenter * 500]
          );

          const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.25]);

          return (
            <motion.span
              key={index}
              style={{
                x,
                y,
                rotateZ,
                scale,
              }}
              className="inline-block select-none text-9xl font-extrabold tracking-widest text-foreground mb-75"
            >
              {char}
            </motion.span>
          );
        })}
      </div>

      {/* Background canvas */}
      <CrowdCanvas src="/images/peeps/all-peeps.png" rows={15} cols={7} />
    </section>
  );
};

export default Intro;

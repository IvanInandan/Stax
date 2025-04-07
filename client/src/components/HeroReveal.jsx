import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "motion/react";

const Reveal = ({ children }) => {
  const ref = useRef(null); // Define reference to container
  const isInView = useInView(ref, { once: true }); // Sets to 'TRUE' when reference is in viewport

  const mainControls = useAnimation();
  const slideControls = useAnimation();
  useEffect(() => {
    // If container is in view
    if (isInView) {
      // Fire the animation
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]); // Dependency array checks for whenever a new container gets in view

  return (
    <div
      ref={ref}
      className="relative w-fit"
      // Position: 'relative' allows sliding cover to position itself 'absolutely' relative to this container
      // Width: 'fit-content' sets the container width to exact bounds of child content
      // Overflow: 'hidden' is preventative to prevent sliding cover to escape outside of bounds **
    >
      {/* Content */}
      <motion.div
        // variants are arbitrary 'state names' for styling characteristics
        // can be abstracted into own object for reusability >>
        // variants = {containerVariants} | containerVariants = {hidden: {}, visible: {}}
        variants={{
          hidden: { opacity: 0, y: 300 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden" // Initial state has styles of 'hidden'
        animate={mainControls} // mainControls kicks off when isInView is true, motion smoothly transitions from 'hidden' to 'visible'
        transition={{ duration: 0.75, delay: 0.25 }} // Defines optional arguments for transition
      >
        {children}
      </motion.div>

      {/* Sliding cover over the content */}
      {/*
      <motion.div
        variants={{
          hidden: { left: 0 }, // Starts positioned relatively to its absolute container at the same left border
          visible: { left: "100%" }, // Shifts 100% away from left, essentially shifting it all the way to the right
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="absolute top-1 bottom-1 left-0 right-0 bg-red-600 z-20"
        // top/bottom/left/right 'shrinks' the cover, creating 1 rem gap on top/bottom but same size on left/right
      />
             */}
    </div>
  );
};

export default Reveal;

"use client";

import { CrowdCanvas } from "@/components/ui/skiper-ui/skiper39";
import { motion, useScroll, useTransform } from "framer-motion";

const Intro = () => {
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, 500], [0, window.innerWidth]);

  return (
    <div className="relative h-screen w-full flex">
      <motion.p style={{ x }} className="mx-auto my-50 text-9xl">
        forked
      </motion.p>
      <CrowdCanvas src="/images/peeps/all-peeps.png" rows={15} cols={7} />
    </div>
  );
};

export default Intro;

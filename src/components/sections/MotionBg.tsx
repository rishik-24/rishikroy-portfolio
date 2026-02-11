"use client";

import { motion } from "motion/react";
import Aurora from "../Aurora";

const MotionBg = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="fixed inset-0 -z-10">
        <Aurora
          colorStops={["#024a70", "#468faf", "#00a8e8"]}
          blend={1.5}
          amplitude={0.5}
          speed={0.4}
        />
      </motion.div>
    </>
  );
};

export default MotionBg;

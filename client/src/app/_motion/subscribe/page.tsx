"use client";

import { easeInOut, motion } from "motion/react";

const SubscribeButton = () => {
  return (
    <div
      className="h-screen w-full bg-neutral-900 flex items-center justify-center"
      style={{
        perspective: `1000px`,
        transformStyle: `preserve-3d`,
        backgroundImage: `radial-gradient(circle at .5px .5px, rgba(6,182,212,0.2) 0.5px, transparent 0.5px)`,
        backgroundSize: `10px 10px`,
        backgroundRepeat: `repeat`,
      }}
    >
      <motion.button
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        whileHover={{
          rotateX: -20,
          rotateY: 10,
          boxShadow: `0px 20px 50px rgba(8,112,184,0.7)`,
        }}
        whileTap={{
          y: -10,
        }}
        style={{
          translateZ: 100,
        }}
        transition={{
          duration: 0.3,
          ease: easeInOut,
        }}
        className="group relative text-neutral-500 px-12 py-4 rounded-lg bg-black shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]"
      >
        <span className="group-hover:text-cyan-500 transition-colors duration-300">
          Subscribe
        </span>
        <span className="absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto"></span>
        <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-400 inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[4px] w-full mx-auto blur-sm"></span>
      </motion.button>
    </div>
  );
};

export default SubscribeButton;

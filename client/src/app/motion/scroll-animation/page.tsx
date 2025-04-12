'use client';

import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';

const ScrollAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.1], [5, 0]);
  const translateY = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [0.9, 1]);
  const textScale = useTransform(
    scrollYProgress,
    [0, 0.5, 0.8, 1],
    [1, 0.8, 0.7, 0.6]
  );
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.8, 1],
    [1, 1, 0.9, 0.8]
  );

  const blur = useTransform(scrollYProgress, [0, 0.5, 0.8, 1], [0, 2, 6, 10]);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    console.log('Scroll Progress:', latest);
  });

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center justify-center overflow-visible bg-neutral-50 py-60 [perspective:800px] [transform-style:preserve-3d]"
    >
      <motion.h1
        style={{
          scale: textScale,
          opacity: textOpacity,
          filter: useMotionTemplate`blur(${blur}px)`,
        }}
        className="text-center text-7xl font-bold text-black"
      >
        Unleash the power of <br /> Scroll Animations
      </motion.h1>
      <motion.div
        style={{
          rotateX: rotateX,
          translateZ: 200,
          y: translateY,
          scale: scale,
        }}
        transition={{ duration: 0.5, delay: 0.3, ease: 'easeInOut' }}
        className="-mt-6 mb-10 h-[500px] w-[40%] rounded-3xl border border-neutral-500 p-2 shadow-2xl"
      >
        <div className="h-full w-full rounded-[16px] bg-black p-2">
          <div className="h-full w-full rounded-[12px] bg-neutral-100 p-2">
            <Image
              src="/images/hero1.jpg"
              alt="linear demo"
              width={824}
              height={824}
              className="h-full w-full object-cover object-left-top"
              priority
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ScrollAnimation;

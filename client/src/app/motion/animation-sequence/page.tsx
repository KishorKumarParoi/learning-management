'use client';

import { motion, useAnimate } from 'motion/react';
import AnimatedText from './AnimatedText';

const AnimationSequence = () => {
  const [scope, animate] = useAnimate();
  const startAnimating = () => {
    animate(
      '.text',
      {
        display: 'none',
      },
      {
        duration: 0.1,
      }
    );
    animate('button', { width: '0' }, { duration: 0.3 });
    animate(
      '.spinning-circle',

      {
        opacity: 1,
        scale: [0, 1.2, 1, 0.8, 1, 1.2, 1, 0.8, 1],
      },
      {
        duration: 1,
        ease: 'easeInOut',
      }
    );
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-700 p-10">
      <AnimatedText />
      <div
        ref={scope}
        className="relative mt-20 flex min-h-5 w-full items-center justify-center"
      >
        <motion.button
          onClick={() => startAnimating()}
          style={{ width: '30rem', height: '4rem' }}
          className="text-white rounded-lg bg-gradient-to-r from-purple-500 via-violet-600 to-indigo-500 px-4 py-2 text-3xl font-bold shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl active:scale-95"
        >
          <span className="text">Purchase Now ($169) </span>
        </motion.button>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0,
          }}
          className="spinning-circle absolute inset-0 m-auto h-20 w-20 rounded-full bg-green-700"
        ></motion.div>
      </div>
    </div>
  );
};

export default AnimationSequence;

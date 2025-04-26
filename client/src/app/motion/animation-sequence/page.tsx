'use client';

import { type AnimationSequence, motion, useAnimate } from 'motion/react';
import AnimatedText from './AnimatedText';
const AnimationSequence = () => {
  const [scope, animate] = useAnimate();

  const sequence: AnimationSequence = [
    ['.loader', { opacity: [0, 1], width: '2rem' }, { duration: 0.3 }],
    ['.loader path', { pathLength: 1, rotate: 360 * 4 }, { duration: 1 }],
    ['.loader', { opacity: [1, 0], width: '0%' }, { duration: 0.3 }],
    ['.text', { display: 'none' }, { duration: 0.1, ease: 'easeInOut' }],
    [
      'button',
      { width: '5rem', height: '5rem', borderRadius: '1200px' },
      { duration: 0.3 },
    ],
    [
      'button',
      {
        opacity: [1],
        scale: [0.8, 1, 1.2, 1],
        backgroundImage: 'linear-gradient(to right, #00ff99 , #00ccff)',
        backdropFilter: 'blur(10px)',
      },
      { duration: 1, ease: 'easeInOut' },
    ],
    ['.check-icon', { opacity: [0, 1] }, { duration: 0.1, at: '-0.5' }],
    ['.check-icon path', { pathLength: 1 }, { duration: 0.5 }],
    [
      'button',
      {
        opacity: [1],
        scale: [1, 1.2, 1],
        backgroundImage: 'linear-gradient(to right, #00ff99 , #00ccff)',
        backdropFilter: 'blur(10px)',
      },
      { duration: 1, ease: 'easeInOut', delay: 0.1 },
    ],
  ];

  const startAnimating = async () => {
    animate(sequence);
    // await animate(
    //   '.loader',
    //   {
    //     opacity: 1,
    //     width: '2rem',
    //   },
    //   {
    //     duration: 0.3,
    //   }
    // );
    // await animate(
    //   '.loader path',
    //   { pathLength: 1, rotate: 360 * 4 },
    //   { duration: 1 }
    // );
    // await animate(
    //   '.loader',
    //   {
    //     opacity: 0,
    //     width: '0%',
    //   },
    //   {
    //     duration: 0.3,
    //   }
    // );
    // animate(
    //   '.text',
    //   {
    //     display: 'none',
    //   },
    //   {
    //     duration: 0.1,
    //   }
    // );
    // await animate(
    //   'button',
    //   { width: '5rem', height: '5rem', borderRadius: '1200px' },
    //   { duration: 0.3 }
    // );
    // animate(
    //   'button',
    //   {
    //     opacity: 1,
    //     scale: [0.8, 1, 1.2, 1],
    //     backgroundImage: 'linear-gradient(to right, #00ff99 , #00ccff)',
    //     backdropFilter: 'blur(10px)',
    //   },
    //   {
    //     duration: 1,
    //     ease: 'easeInOut',
    //   }
    // );
    // animate('.check-icon', { opacity: 1 }, { duration: 0.1 });
    // animate('.check-icon path', { pathLength: 1 }, { duration: 0.5 });
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
          className="text-white flex h-20 w-20 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 via-violet-600 to-indigo-500 text-3xl font-bold shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl active:scale-95"
        >
          <motion.svg
            width={'24'}
            height={'24'}
            viewBox={'0 0 24 24'}
            fill={'none'}
            stroke={'currentColor'}
            strokeWidth={2}
            strokeLinecap={'round'}
            strokeLinejoin={'round'}
            className={'loader h-5 w-5 text-white-100'}
            initial={{
              width: '0%',
            }}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 3a9 9 0 1 0 9 9" />
          </motion.svg>
          <span className="text">Purchase Now ($169) </span>
        </motion.button>

        <motion.svg
          fill={'none'}
          viewBox={'0 0 24 24'}
          stroke={'#FFFFFF'}
          strokeWidth={3}
          className={
            'check-icon pointer-events-none absolute inset-0 z-50 m-auto h-8 w-8'
          }
          style={{
            opacity: 0,
          }}
        >
          <motion.path
            initial={{ pathLength: 0 }}
            transition={{
              duration: 0.5,
              type: 'tween',
              ease: 'easeOut',
            }}
            strokeLinecap={'round'}
            strokeLinejoin={'round'}
            d="M5 13l4 4L19 7"
          />
        </motion.svg>
      </div>
    </div>
  );
};

export default AnimationSequence;

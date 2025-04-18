'use client';

import { motion, stagger, useAnimate } from 'motion/react';
const AnimatedText = () => {
  const text =
    'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor';

  const [scope, animate] = useAnimate();

  //   useEffect(() => {
  //     startAnimating();
  //   }, []);

  const startAnimating = () => {
    animate(
      'span',
      { opacity: 1, filter: 'blur(0px)', y: 0 },
      { duration: 1, ease: 'easeInOut', delay: stagger(0.05) }
    );
  };

  return (
    <div
      ref={scope}
      className="mx-auto max-w-4xl text-4xl font-bold text-white-50"
    >
      <motion.button
        whileTap={{
          scale: 0.9,
          transition: { duration: 0.2 },
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
          textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
          filter: 'blur(0px)',
          y: 0,
          opacity: 1,
        }}
        onClick={() => startAnimating()}
        className="mr-2 rounded-md bg-neutral-800 px-4 py-2"
      >
        Test
      </motion.button>
      {text.split(' ').map((word, index) => (
        <motion.span
          key={index + word}
          style={{
            opacity: 0,
            filter: 'blur(10px)',
            y: 20,
          }}
          className="inline-block"
        >
          {word} &nbsp;
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedText;

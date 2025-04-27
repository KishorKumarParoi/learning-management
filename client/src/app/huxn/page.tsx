'use client';
import { motion } from 'motion/react';
import { useState } from 'react';

const cardVariants = {
  front: {
    rotateY: 0,
  },
  back: {
    rotateY: 180,
  },
};

const Home = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div className="flex h-full items-center justify-center bg-slate-700 [perspective:1000px]">
      <motion.div
        variants={cardVariants}
        initial="front"
        animate={isFlipped ? 'back' : 'front'}
        transition={{ duration: 0.6, type: 'spring', stiffness: 300 }}
        className="bg-white h-40 w-64 cursor-pointer overflow-hidden rounded-lg shadow-lg [transform-style:preserve-3d]"
        onClick={() => {
          setIsFlipped(!isFlipped);
          console.log('clicked: ', isFlipped);
        }}
      >
        <motion.div className="absolute inset-0 flex items-center justify-center bg-teal-700/90 text-2xl font-bold">
          Front Side
        </motion.div>
        {/* <motion.div className="rotate-y-180 absolute inset-0 flex items-center justify-center bg-blue-600 text-xl font-bold">
          Back Side
        </motion.div> */}
      </motion.div>
    </motion.div>
  );
};

export default Home;

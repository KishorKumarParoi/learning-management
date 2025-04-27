'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import { useState } from 'react';

const cardVariants = {
  front: {
    rotateY: 0,
  },
  back: {
    rotateY: 180,
  },
};

const parentVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
    },
  },
};

const childVariant = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const images = [
  'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZsYXRlJTIwY2FydHxlbnwwfHx8fDE2ODQ5NTk3MjA&ixlib=rb-4.0.3&q=80&w=400',
  'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZsYXRlJTIwY2FydHxlbnwwfHx8fDE2ODQ5NTk3MjA&ixlib=rb-4.0.3&q=80&w=400',
  'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZsYXRlJTIwY2FydHxlbnwwfHx8fDE2ODQ5NTk3MjA&ixlib=rb-4.0.3&q=80&w=400',
  'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZsYXRlJTIwY2FydHxlbnwwfHx8fDE2ODQ5NTk3MjA&ixlib=rb-4.0.3&q=80&w=400',
  'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZsYXRlJTIwY2FydHxlbnwwfHx8fDE2ODQ5NTk3MjA&ixlib=rb-4.0.3&q=80&w=400',
];

const Home = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div className="flex h-full items-center justify-center bg-slate-700 [perspective:1000px]">
      <motion.div
        initial={{
          scale: 1,
        }}
        whileHover={{
          scale: 1.1,
          rotate: 3,
        }}
        whileTap={{
          scale: 0.9,
          rotate: -3,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        drag
        dragConstraints={{
          top: -100,
          left: -100,
          right: 100,
          bottom: 100,
        }}
        dragElastic={0.2}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        className="mx-20 flex h-[500px] w-[500px] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-lg bg-neutral-800 shadow-lg"
      >
        <Image
          className="pointer-events-none w-1/2 object-contain"
          src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZsYXRlJTIwY2FydHxlbnwwfHx8fDE2ODQ5NTk3MjA&ixlib=rb-4.0.3&q=80&w=400"
          alt="Image"
          width={200}
          height={200}
        />
        <div className="bg-white-100 p-1 text-black">
          <h2>Dynamic Card Title</h2>
          <p>
            amet natus a eius quisquam quam tempora porro id distinctio unde t
            natus nostrum aut eos esse, reprehenderit perspiciatis. Odit ut
            nulla repudiandae vel, cum architecto animi! Est maxime suscipit
            cupiditate deleniti.
          </p>
          <button className="mt-4 rounded bg-blue-800 px-4 py-2 text-white-100">
            Click Me
          </button>
        </div>
      </motion.div>

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
        <motion.div className="absolute inset-0 flex items-center justify-center bg-teal-500/90 text-2xl font-bold">
          Front Side
        </motion.div>
      </motion.div>

      <motion.div
        drag
        whileDrag={{
          scale: 1.2,
          backgroundColor: 'orange',
        }}
        dragConstraints={{
          top: -100,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        dragElastic={0.2}
        className="ml-20 flex h-20 w-20 items-center justify-center rounded bg-blue-500"
      >
        kkp
      </motion.div>

      <div className="mx-20 flex w-[80%] gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative h-40 w-40 overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              fill
              className="object-cover"
            />
            <motion.div
              className="text-white absolute inset-0 flex cursor-pointer items-center justify-center bg-opacity-50 text-lg font-bold opacity-0 transition-opacity duration-200 hover:bg-black/70"
              whileHover={{ opacity: 1 }}
            >
              <p className="text-lg">Image Caption</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
      <motion.div
        variants={parentVariant}
        initial="hidden"
        animate="visible"
        className="mr-40 flex space-x-4"
      >
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            variants={childVariant}
            className="flex h-20 w-20 items-center justify-center rounded-lg bg-yellow-500 text-2xl text-white-100"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            drag
            dragConstraints={{ top: -100, left: -100, right: 100, bottom: 100 }}
            dragElastic={0.2}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            {index + 1}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Home;

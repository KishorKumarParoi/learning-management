'use client';
import { motion } from 'motion/react';

const LandingPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.5 }}
      className="flex h-full w-full items-center justify-center bg-customgreys-primarybg"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-12 flex h-[500px] items-center justify-between rounded-lg bg-customgreys-secondarybg p-8 shadow-lg"
      >
        <div className="mx-auto basis-1/2 px-16">
          <h1 className="mb-4 text-4xl font-bold">Courses </h1>
          <p className="mb-8 text-lg text-gray-400">
            This is the list of the courses you can enroll in.
            <br />
            Courses when you need them and want them.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LandingPage;

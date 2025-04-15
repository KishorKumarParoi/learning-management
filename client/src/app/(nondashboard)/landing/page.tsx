'use client';
import { motion } from 'motion/react';

const LandingPage = () => {
  const text =
    'This is the list of the courses you can enroll in. Courses when you need them and want them.';

  // Split the text into words
  const words = text.split(' ');

  // Variants for staggering effect
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between each word
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

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
          <h1 className="mb-4 text-4xl font-bold">Courses</h1>
          <motion.p
            className="mb-8 text-lg text-gray-400"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className="mr-1 inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LandingPage;

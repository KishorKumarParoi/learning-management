'use client';
import { useCarousel } from '@/hooks/useCarousel';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

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

  const currentImage = useCarousel({ totalImages: 3 });
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.5 }}
      className="flex h-full w-full flex-col items-center justify-center bg-customgreys-primarybg"
    >
      {/* {Courses Section} */}
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
          <div className="w-fit">
            <Link href="/search">
              <div className="rounded-md bg-primary-700 px-4 py-2 hover:bg-primary-800">
                Search for Courses
              </div>
            </Link>
          </div>
        </div>
        <div className="relative h-full basis-1/2 overflow-hidden rounded-r-lg">
          {['/images/hero1.jpg', '/images/hero2.jpg', '/images/hero3.jpg'].map(
            (src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Hero Image ${index + 1}`}
                fill
                priority={index === currentImage}
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                className={`object-cover opacity-0 transition-opacity duration-500 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
              />
            )
          )}
        </div>
      </motion.div>

      {/* Featured Courses Section */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.3, once: true }}
        className="mx-auto mt-10 py-12"
      >
        <h2 className="mb-4 text-2xl font-semibold">Featured Courses</h2>
        <p className="mb-8 text-customgreys-dirtyGrey">
          From beginning to advanced all industries, we have the right courses
          just for you and preparing your entire journey for learning and making
          the most.
        </p>
        <div className="mb-8 flex flex-wrap gap-4">
          {[
            'Web Development',
            'GenAI',
            'Competitive Programming',
            'React',
            'NextJs',
            'Blockchain',
          ].map((tag, index) => (
            <span
              key={index}
              className="rounded-full bg-customgreys-secondarybg px-4 py-1 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LandingPage;

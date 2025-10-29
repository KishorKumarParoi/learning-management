'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import { useState } from 'react';

const images = [
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  'https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showThumbnails, setShowThumbnails] = useState(true);

  return (
    <div className="relative min-h-screen w-full">
      <motion.div
        className={`$ relative flex items-center justify-center gap-4 overflow-hidden rounded-lg`}
      >
        {images.map((image, index) => (
          <Image
            src={image}
            key={index}
            width={100}
            height={100}
            className={`cursor-pointer rounded-lg transition-transform duration-300 ease-in-out ${isHovered || showThumbnails ? 'border-blue-500' : 'border-transparent'} `}
            onClick={() => {
              setCurrentIndex(index);
              setIsHovered(true);
              setShowThumbnails(true);
            }}
            alt="Image"
          />
        ))}
      </motion.div>

      <motion.div
        initial={{
          x: -100,
        }}
        animate={{
          x: 0,
          transition: {
            duration: 0.5,
            ease: 'easeInOut',
          },
        }}
        exit={{
          x: -100,
          transition: {
            duration: 0.5,
            ease: 'easeInOut',
          },
        }}
        onMouseEnter={() => {
          setIsHovered(true);
          setShowThumbnails(false);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          setShowThumbnails(true);
        }}
        className="relative mt-[2rem] flex items-center justify-center"
      >
        <Image
          src={images[currentIndex]}
          width={800}
          height={800}
          className="rounded-lg"
          alt="Image"
        />
        <button
          className="absolute bottom-10 mr-24 flex h-10 w-20 items-center justify-center rounded bg-blue-800 px-4 py-1 text-lg font-bold"
          onClick={() =>
            setCurrentIndex(
              (prevIndex) => (prevIndex - 1 + images.length) % images.length
            )
          }
        >
          Prev
        </button>
        <button
          className="absolute bottom-10 ml-24 flex h-10 w-20 items-center justify-center rounded bg-blue-800 px-4 py-1 text-lg font-bold"
          onClick={() =>
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
          }
        >
          Next
        </button>
      </motion.div>
    </div>
  );
};

export default Carousel;

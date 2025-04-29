'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import { useState } from 'react';

const images = [
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  'https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showThumbnails, setShowThumbnails] = useState(false);

  const selectSide = (index: number) => {
    setCurrentIndex(index);
    setShowThumbnails(true);
    console.log(`Selected image index: ${index}`);
    window.setTimeout(() => setShowThumbnails(false), 1000);
  };

  return (
    <motion.div className="relative w-full overflow-hidden rounded-lg">
      <motion.div
        className={`mb-[2rem] flex transition-opacity duration-300 ${isHovered || showThumbnails ? 'opacity-20' : 'opacity-100'}`}
      >
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => {
              selectSide(index);
            }}
            className={`mt-[2rem] h-[5rem] w-[10rem] cursor-pointer overflow-hidden rounded-lg ${currentIndex === index ? 'border-blue-500' : 'border-transparent'}`}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              width={100}
              height={50}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </motion.div>
      <div
        className="flex"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: `-${currentIndex * 100}%` }}
          exit={{ x: 100 }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
            duration: 0.5,
          }}
          className="gap-4 transition-transform duration-500"
        >
          {images.map((image, index) => (
            <div key={index} className="min-h-full">
              {currentIndex === index && (
                <Image
                  src={image}
                  alt={`Image ${index + 1}`}
                  width={500}
                  height={500}
                  className={`w-full'}`}
                />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Carousel;

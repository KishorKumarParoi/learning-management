'use client';
import { motion } from 'motion/react';

const HoldToConfirm = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-900">
      <motion.div
        className="relative flex h-72 w-72 items-center justify-center rounded-full"
        initial={{ borderWidth: 0, borderColor: 'transparent' }} // No border initially
        whileTap={{
          borderWidth: 14, // Border starts painting
          borderColor: '#4F8390', // Border color changes to red
        }}
        transition={{
          duration: 0.5, // Smooth transition for the border animation
          type: 'spring',
          stiffness: 50,
          damping: 20,
        }}
      >
        <motion.button
          whileTap={{
            scale: 0.7,
            backgroundColor: '#4F8390', // Change background color to red
            color: 'white', // Change text color to white
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)', // Add shadow
          }}
          transition={{
            duration: 1.2,
            type: 'spring',
            stiffness: 50,
            damping: 20,
            mass: 1,
          }}
          className="relative flex h-16 w-48 items-center justify-center rounded-full bg-white-100 text-xl text-black focus:outline-none"
        >
          Hold to Confirm
        </motion.button>
      </motion.div>
    </div>
  );
};

export default HoldToConfirm;

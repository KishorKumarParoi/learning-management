'use client';

import { motion } from 'motion/react';
import { useState } from 'react';

const HoldToConfirm = () => {
  const [progress, setProgress] = useState(0);
  const holdDuration = 1000; // 5 seconds to confirm
  const [isHolding, setIsHolding] = useState(false);

  const handlePointerDown = () => {
    setIsHolding(true);

    // Start progress animation
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const newProgress = Math.min((elapsedTime / holdDuration) * 100, 100);
      setProgress(newProgress);

      if (newProgress === 100) {
        clearInterval(interval);
        handleConfirm(); // Trigger confirmation action
      }
    }, 16); // Update every 16ms (~60fps)

    // Store interval ID to clear it later
    setIsHolding(interval);
  };

  const handlePointerUp = () => {
    setIsHolding(false);
    setProgress(0); // Reset progress
    clearInterval(isHolding); // Clear interval
  };

  const handleConfirm = () => {
    alert('Confirmed!');
    setProgress(0); // Reset progress after confirmation
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-900">
      <motion.button
        className="relative flex h-32 w-32 items-center justify-center rounded-full bg-gray-700 focus:outline-none"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp} // Reset if the pointer leaves the button
      >
        {/* Outer Ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-green-500"
          style={{
            clipPath: 'circle(50% at 50% 50%)',
          }}
          animate={{ scale: progress / 100 }}
        />

        {/* Text */}
        <motion.span
          className="text-white text-lg font-bold"
          animate={{
            scale: isHolding ? 0.8 : 1, // Shrink text when holding
          }}
          transition={{
            duration: 0.3, // Smooth transition
          }}
        >
          Hold to Confirm
        </motion.span>
      </motion.button>
    </div>
  );
};

export default HoldToConfirm;

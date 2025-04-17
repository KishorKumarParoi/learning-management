'use client';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const DrawCircleOverTime = () => {
  const [isHolding, setIsHolding] = useState(false); // State to track if the button is being held
  const [isCompleted, setIsCompleted] = useState(false); // State to track if the circle drawing is complete

  useEffect(() => {
    if (isHolding) {
      // Start a timer to mark the animation as completed after 4 seconds
      const timer = setTimeout(() => {
        setIsCompleted(true);
        setIsHolding(false); // Stop holding after completion
      }, 2000); // Match the duration of the animation (4 seconds)

      return () => clearTimeout(timer); // Clear the timer if the user releases the button early
    }
  }, [isHolding]);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-900">
      <div className="relative flex items-center justify-center">
        {/* SVG Circle for Drawing Animation */}
        <svg className="absolute h-72 w-72">
          <motion.circle
            cx="50%" // Center X
            cy="50%" // Center Y
            r="110" // Radius of the circle
            fill="transparent" // Keep the inside empty
            stroke="#a3f7bf" // Updated to a lighter and brighter green color
            strokeWidth="14" // Circle border width
            strokeDasharray="690" // Circumference of the circle (2 * π * r)
            strokeDashoffset="690" // Start with the circle completely hidden
            strokeLinecap="round" // Make the circle border rounded
            style={{
              transform: 'rotate(-90deg)', // Rotate the circle to start from the top
              transformOrigin: '50% 50%', // Ensure the rotation happens around the center
            }}
            initial={{ opacity: 0 }} // Initial opacity set to 0
            animate={
              isHolding || isCompleted
                ? { strokeDashoffset: 0, opacity: 1 } // Complete the circle and make it visible
                : { strokeDashoffset: 690, opacity: 0 } // Reset the circle and hide it
            }
            transition={{
              duration: 2, // Time to complete the circle (in seconds)
              ease: 'easeInOut', // Smooth easing
            }}
          />
        </svg>

        {/* Button or Content Inside the Circle */}
        <motion.button
          onPointerDown={() => {
            if (!isCompleted) {
              setIsHolding(true);
              setIsCompleted(false); // Reset completion state when holding starts
            }
          }} // Start animation on press
          onPointerUp={() => setIsHolding(false)} // Stop holding
          onPointerLeave={() => setIsHolding(false)} // Reset if pointer leaves the button
          whileTap={{
            scale: 0.9,
            backgroundColor: '#a3f7bf', // Match the lighter color for consistency
          }}
          transition={{
            duration: 0.3,
            type: 'spring',
            stiffness: 100,
            damping: 10,
          }}
          className="relative flex h-16 w-48 items-center justify-center rounded-full bg-white-100 text-xl text-black focus:outline-none"
        >
          Hold to Confirm
        </motion.button>
      </div>

      {/* Display if the circle is completed */}
      {isCompleted && (
        <div className="text-white absolute bottom-10 text-lg">
          Circle Drawing Completed!
        </div>
      )}
    </div>
  );
};

export default DrawCircleOverTime;

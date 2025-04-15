'use client';
import { IconHelpCircle } from '@tabler/icons-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

const FamilyStyleDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen items-center justify-center bg-black">
      {/* Button to Open Dialog */}
      <motion.button
        onClick={() => setIsOpen(true)}
        layoutId="receive-button"
        className="fixed bottom-0 mb-10 w-[25%] rounded-3xl bg-[#8DF0CC] px-4 py-2 text-xl text-black"
        transition={{
          type: 'spring',
          stiffness: 120,
          damping: 14,
        }}
      >
        Receive
      </motion.button>

      {/* Dialog */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              onClick={() => setIsOpen(false)}
            />

            {/* Dialog Box */}
            <motion.div
              className="text-white fixed bottom-0 mb-10 w-[25%] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-lg bg-gray-800 p-6 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.8, 0.25, 1],
              }}
            >
              <motion.h2
                className="mb-4 text-2xl font-bold text-white-100"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <IconHelpCircle className="mr-2 inline-block h-8 w-8" />
                Confirm
              </motion.h2>
              <motion.p
                className="mb-6 text-[14px] text-white-50"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                Are you sure you want to receive a load of money?
              </motion.p>

              <div className="flex items-start justify-between gap-4">
                <motion.button
                  className="w-[40%] rounded-3xl bg-[#111]/80 px-4 py-2 text-xl text-white-100 shadow-lg"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  Cancel
                </motion.button>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  layoutId="receive-button"
                  className="w-[40%] rounded-3xl bg-[#8DF0CC] px-4 py-2 text-xl text-black"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  Receive
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FamilyStyleDialog;

'use client';

import { IconArrowBack, IconArrowForward } from '@tabler/icons-react';
import { motion } from 'motion/react';
import { useState } from 'react';

const sidebarVariants = {
  open: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  closed: {
    x: '-100%',
    opacity: 0,
    scale: 0.8,
  },
};

const backdropVariants = {
  open: {
    opacity: 0.6,
  },
  closed: {
    opacity: 0,
  },
};

const containerVariants = {
  open: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0,
    },
  },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  closed: {
    opacity: 0,
    y: -20,
    scale: 0.95,
  },
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="relative">
      {/* Backdrop */}
      <motion.div
        animate={isOpen ? 'open' : 'closed'}
        variants={backdropVariants}
        className="fixed inset-0 bg-gray-800"
        transition={{ duration: 0.3 }}
        onClick={() => setIsOpen(false)}
      ></motion.div>
      {/* Sidebar */}
      <motion.div
        initial="closed"
        variants={sidebarVariants}
        animate={isOpen ? 'open' : 'closed'}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
          mass: 0.5,
        }}
        className="fixed left-0 top-0 h-full w-64 bg-gray-900 text-white-100 shadow-lg"
      >
        <div className="p-4">
          {/* <button
            onClick={() => setIsOpen(false)}
            className="absolute left-4 top-4 z-10 rounded-full bg-gray-800 p-2 text-white-100 focus:outline-none"
          >
            <IconArrowBack className="h-6 w-6" />
          </button> */}
          <h2 className="mb-4 mt-10 text-2xl font-bold">Filters</h2>
          <motion.div
            className="space-y-4"
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold">Category</h3>
              <ul>
                <li>
                  <label className="mt-2 inline-flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="ml-1 text-sm">Web Development</span>
                  </label>
                </li>
                <li>
                  <label className="mt-2 inline-flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="ml-1 text-sm">DevOps</span>
                  </label>
                </li>
                <li>
                  <label className="mt-2 inline-flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="ml-1 text-sm">Mobile Development</span>
                  </label>
                </li>
                <li>
                  <label className="mt-2 inline-flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="ml-1 text-sm">Blockchain Development</span>
                  </label>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      {/* Toggle Buttons */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute left-4 top-4 z-10 rounded-full bg-gray-800 p-2 text-white-100 focus:outline-none"
      >
        {isOpen ? (
          <IconArrowBack className="h-6 w-6" />
        ) : (
          <IconArrowForward className="h-6 w-6" />
        )}
      </button>
    </div>
  );
};

export default Sidebar;

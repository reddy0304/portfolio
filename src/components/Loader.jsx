import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  const circleVariants = {
    start: {
      y: "0%",
    },
    end: {
      y: "100%",
    },
  };

  const circleTransition = {
    duration: 0.5,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  };

  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      <div className="flex space-x-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-4 h-4 bg-teal-400 rounded-full"
            variants={circleVariants}
            initial="start"
            animate="end"
            transition={{
              ...circleTransition,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loader;
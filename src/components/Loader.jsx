import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => (
  <div className="fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center z-50">
    <div className="flex space-x-2">
      {[0, 1, 2].map((i) => <motion.div key={i} className="w-4 h-4 bg-teal-500 rounded-full" animate={{ y: ["0%", "100%", "0%"] }} transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }} />)}
    </div>
  </div>
);

export default Loader;
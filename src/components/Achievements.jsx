// src/components/Achievements.jsx
import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { portfolioData as achieveContent } from '../data/portfolioData';
const Achievements = () => (
  <section id="achievements" className="py-20 bg-white dark:bg-gray-900">
    <div className="container mx-auto px-4">
      <SectionTitle>My Achievements</SectionTitle>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {Object.entries(achieveContent.achievements).map(([category, items], index) => (
          <motion.div key={category} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, delay: index * 0.15 }} className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 hover:border-purple-500/50 transition-all duration-300 flex flex-col">
            <h3 className="text-3xl font-bold mb-6 capitalize text-center">{category}</h3>
            <ul className="list-disc list-inside space-y-4 text-lg flex-grow text-gray-600 dark:text-gray-300">{items.map((item, i) => <li key={i}>{item}</li>)}</ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
export default Achievements;
import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle'; // Import SectionTitle

const Achievements = () => {
  const achievements = {
    scholastic: [
      'Ranked among the top 0.5% among a pool of 1.2 Million applicants in JEE Mains\'20.',
      'Secured an All India Rank 5540 in JEE Advanced\'20 among 0.15 Million shortlisted candidates.',
      'Secured an All India Rank of 432 in National Defence Academy Examination\'19.',
      'Selected for the second round in NSO.',
    ],
    managerial: [
      'President, Students\' Gymkhana, IIT (ISM) Dhanbad (2023-24). Led 30+ student bodies and managed annual technical, cultural, and sports events with 5000+ participants. Oversaw policy, execution, and budgeting of student-led initiatives campus-wide.',
      'Co-Coordinator of Srijan 23 - Biggest socio-cultural fest of eastern INDIA.',
      'Joint Secretary, Durga Puja Committee, 2023, Streamlined event execution with over 8000 attendees across campus.',
    ],
    other: [
      'Solved 1000+ problems of competitive programming on platforms like Codechef, Leetcode, Codeforces, Geeks for Geeks and Interview bit.',
      'Earned a Badge in SQL 50 in Leetcode.',
      '5-star rating in Problem Solving on HackerRank.',
    ],
  };

  return (
    <section id="achievements" className="py-20 bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4">
        <SectionTitle>My Achievements</SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {Object.entries(achievements).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 flex flex-col"
            >
              <h3 className="text-3xl font-bold text-white mb-6 capitalize text-center">
                {category}
              </h3>
              <ul className="list-disc list-inside space-y-4 text-lg flex-grow">
                {items.map((item, i) => (
                  <li key={i} className="text-gray-300">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
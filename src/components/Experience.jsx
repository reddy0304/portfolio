// src/components/Experience.jsx
import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { portfolioData as expContent } from '../data/portfolioData';
const Experience = () => (
  <section id="experience" className="py-20 bg-white dark:bg-gray-900">
    <div className="container mx-auto px-4">
      <SectionTitle>Work Experience</SectionTitle>
      <div className="relative space-y-12 before:absolute before:top-0 before:left-4 md:before:left-1/2 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-gray-200 dark:before:bg-gray-700">
        {expContent.experience.map((exp, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, delay: index * 0.1 }} className="relative pl-12 md:pl-0">
            <div className="md:flex md:items-center md:justify-center">
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:order-2'}`}>
                <div className="absolute top-1 left-4 md:left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-teal-500 rounded-full border-4 border-white dark:border-gray-900"></div>
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 hover:border-teal-500 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                  <p className="text-xl text-teal-500 dark:text-teal-400 mb-2">{exp.company}</p>
                  <p className="text-md text-gray-500 dark:text-gray-400 mb-4">{exp.duration}</p>
                  <ul className="list-disc list-inside space-y-2 text-lg text-gray-600 dark:text-gray-300 text-left">{exp.description.map((point, i) => <li key={i}>{point}</li>)}</ul>
                </div>
              </div>
              <div className="hidden md:block md:w-1/2"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;

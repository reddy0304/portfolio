import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionTitle>About Me</SectionTitle>
        
        {/* Top section with Introduction and Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Introduction Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Who I Am</h3>
            <div className="text-lg leading-relaxed space-y-6 text-gray-700 dark:text-gray-300">
              {portfolioData.about.introduction.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </motion.div>
          
          {/* Education Timeline Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <EducationPanel />
          </motion.div>
        </div>

        {/* Bottom section for Skills, spanning full width */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <SkillsPanel />
        </motion.div>

      </div>
    </section>
  );
};

// Skills Panel Component
const SkillsPanel = () => {
  const skillCategoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }
  };
  const skillTagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl">
      <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">My Professional Skillset</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.about.skills.map((cat) => {
          const { IconComponent } = cat;
          return (
            <motion.div key={cat.category} variants={skillCategoryVariants} className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <IconComponent className="h-7 w-7 mr-3 text-teal-500 dark:text-teal-400" />
                <h4 className="text-xl font-bold text-gray-800 dark:text-white">{cat.category}</h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {cat.items.map((skill) => (
                  <motion.span 
                    key={skill} 
                    variants={skillTagVariants}
                    className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

// Education Panel Component (Timeline UI)
const EducationPanel = () => (
  <div>
    <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Education</h3>
    <div className="relative border-l-2 border-teal-500/30 ml-4 pl-8 py-4 space-y-12">
      {portfolioData.about.education.map((edu, index) => {
        const { IconComponent } = edu;
        return (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative"
          >
            <div className="absolute -left-11 top-1 w-8 h-8 bg-gray-100 dark:bg-gray-900 rounded-full flex items-center justify-center ring-4 ring-gray-100 dark:ring-gray-900">
              <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center text-white">
                <IconComponent size={16} />
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{edu.year}</p>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.degree}</h4>
            <p className="text-lg text-gray-700 dark:text-gray-300">{edu.institute}</p>
            <p className="text-md font-mono text-teal-600 dark:text-teal-400">{edu.grade}</p>
          </motion.div>
        );
      })}
    </div>
  </div>
);

export default About;
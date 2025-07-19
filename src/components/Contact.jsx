// src/components/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { portfolioData } from '../data/portfolioData';

const Contact = () => (
  <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800">
    <div className="container mx-auto px-4">
      <SectionTitle>Get in Touch</SectionTitle>
      <motion.p 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.6, delay: 0.2 }} 
        className="text-xl text-center mb-12 max-w-2xl mx-auto text-gray-700 dark:text-gray-300"
      >
        I'm always open to new opportunities and collaborations. Feel free to connect with me!
      </motion.p>
      <div className="flex flex-wrap justify-center gap-8">
        {portfolioData.contactButtons.map((link, i) => {
          // Destructure the IconComponent from the link object
          const { IconComponent } = link; 
          return (
            <motion.a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center justify-center p-6 w-40 h-40 bg-white dark:bg-gray-900 rounded-lg shadow-xl transition-colors duration-300 transform ${link.hover}`}
              whileHover={{ scale: 1.05, y: -8 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={`${link.color} mb-4`}>
                {/* Render the component here with its props */}
                <IconComponent size={40} />
              </div>
              <span className="text-xl font-semibold">{link.label}</span>
            </motion.a>
          );
        })}
      </div>
    </div>
  </section>
);

export default Contact;

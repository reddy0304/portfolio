import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Smartphone, Github } from 'lucide-react'; // Import icons
import SectionTitle from './SectionTitle'; // Import SectionTitle

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800 text-gray-200">
      <div className="container mx-auto px-4 text-center">
        <SectionTitle>Get in Touch</SectionTitle>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl mb-10 max-w-2xl mx-auto"
        >
          Feel free to connect with me through any of the platforms below. I'm always open to new opportunities and collaborations!
        </motion.p>
        <div className="flex flex-wrap justify-center gap-8">
          <motion.a
            href="https://www.linkedin.com/in/hemanth-reddy-your-profile" // IMPORTANT: Replace with your actual LinkedIn profile URL
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-gray-900 rounded-lg shadow-xl hover:bg-teal-700 transition-colors duration-300 transform hover:-translate-y-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={48} className="text-teal-400 mb-4" />
            <span className="text-xl font-semibold text-white">LinkedIn</span>
          </motion.a>
          <motion.a
            href="mailto:hemanthreddy030401@gmail.com"
            className="flex flex-col items-center p-6 bg-gray-900 rounded-lg shadow-xl hover:bg-purple-700 transition-colors duration-300 transform hover:-translate-y-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={48} className="text-purple-400 mb-4" />
            <span className="text-xl font-semibold text-white">Email Me</span>
          </motion.a>
          <motion.a
            href="https://wa.me/916300352116"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-gray-900 rounded-lg shadow-xl hover:bg-green-700 transition-colors duration-300 transform hover:-translate-y-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Smartphone size={48} className="text-green-400 mb-4" />
            <span className="text-xl font-semibold text-white">WhatsApp</span>
          </motion.a>
          <motion.a
            href="https://github.com/20JE0547" // IMPORTANT: Replace with your actual GitHub profile URL
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-gray-900 rounded-lg shadow-xl hover:bg-gray-700 transition-colors duration-300 transform hover:-translate-y-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={48} className="text-white mb-4" />
            <span className="text-xl font-semibold text-white">GitHub</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
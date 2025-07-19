// src/components/Hero.jsx
import { FaGithub as HeroGithub, FaLinkedin as HeroLinkedin } from "react-icons/fa";
import Particles from "./Particles";
import { motion } from 'framer-motion';
import { portfolioData as heroContent } from '../data/portfolioData';

const Hero = () => {
  const scrollToSection = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden px-4">
      <Particles />
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="backdrop-blur-sm bg-white/10 dark:bg-gray-900/70 p-6 sm:p-8 md:p-12 rounded-xl shadow-2xl">
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-3 leading-tight">Hi, I'm <span className="text-teal-400">{heroContent.hero.title}</span></motion.h1>
          <motion.p variants={itemVariants} className="text-lg sm:text-xl lg:text-2xl mb-6 font-light text-gray-800 dark:text-gray-300">{heroContent.hero.subtitle}</motion.p>
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 sm:gap-x-4 mb-8 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
            {heroContent.hero.highlights.map((text, index) => <span key={index} className="bg-gray-200 dark:bg-gray-700/50 px-3 py-1 rounded-full">{text}</span>)}
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a href={heroContent.resumePdf} download target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold py-3 px-8 rounded-full shadow-lg">Download Resume</motion.a>
            <motion.a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection("projects"); }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold py-3 px-8 rounded-full shadow-lg">View Projects</motion.a>
          </motion.div>
          <motion.div variants={itemVariants} className="flex justify-center gap-6 mt-8">
            <a href={heroContent.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-600 dark:text-gray-400 hover:text-teal-400 transition-colors duration-300 text-3xl"><HeroGithub /></a>
            <a href={heroContent.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-600 dark:text-gray-400 hover:text-teal-400 transition-colors duration-300 text-3xl"><HeroLinkedin /></a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;



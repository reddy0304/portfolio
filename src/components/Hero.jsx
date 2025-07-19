import React from "react";
import { motion } from "framer-motion";

// NEW: Importing icons from the library you just installed
import { FaGithub, FaLinkedin } from "react-icons/fa";

import Particles from "./Particles";
import resumePdf from "../assets/Hemanth_SDE_SD__may11th.pdf";

// REFACTORED: Data is now in arrays, making it easier to update
const highlights = [
  "IIT (ISM) Dhanbad Graduate",
  "600+ Problems Solved",
  "Ex-President, Students' Gymkhana",
];

const socialLinks = [
  {
    href: "https://github.com/reddy0304",
    icon: <FaGithub />,
    ariaLabel: "GitHub Profile",
  },
  {
    href: "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile",
    icon: <FaLinkedin />,
    ariaLabel: "LinkedIn Profile",
  },
];

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animation variants can be defined outside the component
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center overflow-hidden px-4" // Added horizontal padding for mobile
    >
      <Particles />
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          // RESPONSIVE: Adjusted padding for different screen sizes
          className="backdrop-blur-sm bg-white/10 dark:bg-gray-900/70 p-6 sm:p-8 md:p-12 rounded-xl shadow-2xl"
        >
          <motion.h1
            variants={textVariants}
            // RESPONSIVE: Adjusted text sizes for better mobile readability
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-3 leading-tight"
          >
            Hi, I'm <span className="text-teal-400">Matavalam Hemanth</span>
          </motion.h1>

          <motion.p
            variants={textVariants}
            className="text-lg sm:text-xl lg:text-2xl mb-6 font-light"
          >
            Software Engineer at{" "}
            <span className="text-purple-400 font-medium">
              Jindal Stainless Ltd.
            </span>
          </motion.p>

          {/* REFACTORED: Highlights are now mapped from the data array */}
          <motion.div
            variants={textVariants}
            className="flex flex-wrap justify-center gap-2 sm:gap-x-4 mb-8 text-xs sm:text-sm text-gray-300"
          >
            {highlights.map((text, index) => (
              <span key={index} className="bg-gray-700/50 px-3 py-1 rounded-full">
                {text}
              </span>
            ))}
          </motion.div>

          {/* RESPONSIVE: Button container now handles mobile layout better */}
          <motion.div
            variants={textVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold py-3 px-8 rounded-full shadow-lg"
            >
              View Projects
            </motion.a>
            <motion.a
              href={resumePdf}
              download="Hemanth_SDE_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold py-3 px-8 rounded-full shadow-lg"
            >
              Download Resume
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              // IMPROVED: Using an outline style for the tertiary button
              className="w-full sm:w-auto border border-gray-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-colors duration-300 hover:bg-gray-700"
            >
              Get in Touch
            </motion.a>
          </motion.div>

          {/* NEW: Social links section */}
          <motion.div
            variants={textVariants}
            className="flex justify-center gap-6 mt-8"
          >
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                className="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-3xl"
              >
                {link.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

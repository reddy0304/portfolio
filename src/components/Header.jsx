// src/components/Header.jsx
// ==================================================================
import { useState, useEffect as ReactEffect } from 'react'; // Renamed to avoid conflict
import { motion, AnimatePresence as ReactAnimatePresence } from "framer-motion";
import { Sun, Moon, X, Menu } from "lucide-react";
import { portfolioData as headerData } from '../data/portfolioData';

const Header = ({ toggleTheme, theme, activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  ReactEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  ReactEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
  }, [isMobileMenuOpen]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const NavLink = ({ id, name }) => (
    <button
      onClick={() => scrollToSection(id)}
      className="relative px-3 py-2 text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-teal-400 dark:hover:text-teal-400 transition-colors duration-300"
    >
      {name}
      {activeSection === id && (
        <motion.div className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-400" layoutId="underline" />
      )}
    </button>
  );

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
        <nav className="container mx-auto px-6 flex justify-between items-center">
          <motion.a href="#home" onClick={(e) => {e.preventDefault(); scrollToSection('home')}} className="text-2xl font-bold text-teal-400">{headerData.name}</motion.a>
          <div className="hidden md:flex items-center space-x-2">
            {headerData.navLinks.map(link => <NavLink key={link.id} {...link} />)}
            <motion.button onClick={toggleTheme} className="p-2 ml-4 rounded-full bg-gray-200 dark:bg-gray-700" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>
          <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden p-2" aria-label="Open menu"><Menu size={24} /></button>
        </nav>
      </header>
      <ReactAnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 z-50 md:hidden" onClick={() => setIsMobileMenuOpen(false)}>
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: 'spring', stiffness: 300, damping: 30 }} className="fixed top-0 right-0 h-full w-64 bg-gray-50 dark:bg-gray-800 p-8" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-6 right-6 p-2" aria-label="Close menu"><X size={28} /></button>
              <nav className="flex flex-col items-center justify-center h-full space-y-8">
                {headerData.navLinks.map(link => <button key={link.id} onClick={() => scrollToSection(link.id)} className="text-3xl font-medium hover:text-teal-400 transition-colors">{link.name}</button>)}
                <motion.button onClick={toggleTheme} className="p-4 mt-4 rounded-full bg-gray-200 dark:bg-gray-700" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
                </motion.button>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </ReactAnimatePresence>
    </>
  );
};

export default Header;
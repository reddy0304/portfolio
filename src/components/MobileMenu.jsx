import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, X } from 'lucide-react';

const MobileMenu = ({ isOpen, onClose, theme, toggleTheme, navLinks, scrollToSection }) => {
  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
  };

  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
  };

  // ❗ Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 w-screen h-screen z-[100] bg-gray-900/95 backdrop-blur-sm overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-white hover:text-teal-400 transition-colors z-[101]"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>

          {/* Menu Content */}
          <div className="min-h-screen flex flex-col pt-24 pb-8 px-6">
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
              className="flex flex-col items-center space-y-8 flex-1"
            >
              {navLinks.map((link) => (
                <motion.button
                  key={link.id}
                  variants={itemVariants}
                  className="text-3xl font-medium text-white hover:text-teal-400 transition-colors w-full text-center py-3"
                  onClick={() => {
                    onClose();
                    setTimeout(() => scrollToSection(link.id), 300);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                </motion.button>
              ))}
            </motion.div>

            {/* Theme toggle at bottom */}
            <motion.button
              variants={itemVariants}
              onClick={toggleTheme}
              className="self-center mt-auto p-4 rounded-full bg-gray-800 text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;

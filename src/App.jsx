import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

const App = () => {
  const [theme, setTheme] = useState(() => {
    // Load theme from localStorage or default to dark
    return localStorage.getItem("theme") || "dark";
  });

  const [isLoading, setIsLoading] = useState(true);

  // Persist theme and update <html> class
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Simulate a loader (optional – can be removed in production)
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
    exit: { opacity: 0 },
  };

  return (
    <div className="font-inter bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      {isLoading ? (
        <Loader />
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={theme}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
          >
            <Header toggleTheme={toggleTheme} theme={theme} />
            <main className="overflow-hidden">
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Achievements />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default App;


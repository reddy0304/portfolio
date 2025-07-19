// src/App.jsx
import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';

export default function App() {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
    const [isLoading, setIsLoading] = useState(true);
    const [activeSection, setActiveSection] = useState('home');
    const sections = useRef([]);

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (isLoading) return;
        sections.current = Array.from(document.querySelectorAll('section[id]'));
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) setActiveSection(entry.target.id);
            });
        }, { rootMargin: "-30% 0px -70% 0px" });
        sections.current.forEach(section => observer.observe(section));
        return () => sections.current.forEach(section => observer.unobserve(section));
    }, [isLoading]);

    const toggleTheme = () => setTheme(prev => prev === "dark" ? "light" : "dark");

    const pageVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
        exit: { opacity: 0 },
    };

    if (isLoading) return <Loader />;

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={theme}
                className="font-inter bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <Header toggleTheme={toggleTheme} theme={theme} activeSection={activeSection} />
                <main className="overflow-x-hidden">
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
    );
}

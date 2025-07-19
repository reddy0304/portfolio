// src/components/Footer.jsx
import React from 'react';
import { portfolioData as footerContent } from '../data/portfolioData';
const Footer = () => (
  <footer className="bg-gray-900 dark:bg-black text-gray-400 py-8 text-center text-sm">
    <p>&copy; {new Date().getFullYear()} {footerContent.name}. All rights reserved.</p>
    <p className="mt-2">Designed & Developed with ❤️ using React and Tailwind CSS.</p>
  </footer>
);
export default Footer;
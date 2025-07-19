import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8 text-center text-sm">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Matavalam Hemanth. All rights reserved.</p>
        <p className="mt-2">Designed and Developed with ❤️ using React and Tailwind CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;
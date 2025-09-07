// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-500 py-6 text-center">
      <div className="container mx-auto">
        <p>
          &copy; {new Date().getFullYear()} Aubrey Burke. All rights reserved.
        </p>
        <p className="mt-2 text-sm">
          Built with <span className="text-teal-400">React</span> &amp; <span className="text-teal-400">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
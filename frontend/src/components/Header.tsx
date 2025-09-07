// src/components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-gray-900 bg-opacity-70 backdrop-blur-sm shadow-md py-4">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <a href="/" className="text-2xl font-bold text-teal-400 hover:text-teal-300 transition-colors">
          Aubrey Burke
        </a>
        <ul className="flex space-x-6">
          <li>
            <a href="#about" className="text-gray-300 hover:text-teal-400 transition-colors">About</a>
          </li>
          <li>
            <a href="#projects" className="text-gray-300 hover:text-teal-400 transition-colors">Projects</a>
          </li>
          <li>
            <a href="#contact" className="text-gray-300 hover:text-teal-400 transition-colors">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
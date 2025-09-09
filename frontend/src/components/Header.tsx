// src/components/Header.tsx
import React from 'react';

interface HeaderProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, isDarkMode }) => {
  return (
    <header className="sticky top-0 z-50 bg-light-secondary-bg dark:bg-dark-secondary-bg bg-opacity-70 backdrop-blur-sm shadow-md py-4">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <a href="/" className="text-2xl font-bold text-dark-primary-text dark:text-light-primary-text hover:text-light-accent dark:hover:text-dark-accent transition-colors">
          Aubrey Burke
        </a>
        <ul className="flex space-x-6 items-center">
          <li>
            <a href="#about" className="text-dark-secondary-text dark:text-light-secondary-text hover:text-dark-accent dark:hover:text-light-accent transition-colors">About</a>
          </li>
          <li>
            <a href="#projects" className="text-dark-secondary-text dark:text-light-secondary-text hover:text-dark-accent dark:hover:text-light-accent transition-colors">Projects</a>
          </li>
          <li>
            <a href="#contact" className="text-dark-secondary-text dark:text-light-secondary-text hover:text-dark-accent dark:hover:text-light-accent transition-colors">Contact</a>
          </li>
          <li>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-dark-secondary-text dark:text-light-secondary-text hover:text-dark-accent dark:hover:text-light-accent transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
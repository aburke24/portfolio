// src/components/Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
        Aubrey Burke
      </h1>
      <p className="text-xl md:text-2xl text-gray-400 mt-4">
        Full-Stack Engineer crafting dynamic web applications.
      </p>
      <a
        href="#projects"
        className="mt-8 px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-400 transition-colors transform hover:scale-105"
      >
        View My Work
      </a>
    </section>
  );
};

export default Hero;
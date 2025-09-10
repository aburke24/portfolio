import React from 'react';

const Hero = () => {
  return (
    <div className="text-center py-20 md:py-32">
      <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight">
        Aubrey Burke
      </h1>
      <p className="mt-4 text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
        Software Engineer | Java • Python • Azure • React
      </p>

      <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
        <a
          href="#projects"
          className="px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105"
        >
          View My Work
        </a>

        <a
          href="/Resume.pdf"
          download="Aubrey_Burke_Resume.pdf"
          className="px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;

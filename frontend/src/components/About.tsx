// src/components/About.tsx
import React from 'react';
import { Sparkles, Code, Server, Database, Braces } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-50 -z-10"></div>
      
      {/* Container with a subtle inner shadow for depth */}
      <div className="container mx-auto px-4 py-12 bg-gray-900 rounded-3xl shadow-2xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-12">
          {/* Professional Photo with a unique border */}
          <div className="lg:w-1/3 mb-8 lg:mb-0 relative">
            <img
              src="/images/your-photo.jpg" // Add your professional headshot here
              alt="Aubrey Burke"
              className="rounded-full w-64 h-64 object-cover shadow-lg transform transition-transform duration-300 hover:scale-105 border-4 border-teal-500"
            />
          </div>
          
          {/* Content with subtle animations on text */}
          <div className="lg:w-2/3 text-center lg:text-left">
            <h2 className="text-5xl font-extrabold text-white mb-4 animate-fade-in">About Me</h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-4 animate-fade-in delay-100">
              Hi, I'm Aubrey Burke, a passionate Full-Stack Engineer with a knack for building beautiful and functional web applications. My journey in tech began with a curiosity for how things work, and it has evolved into a career dedicated to creating seamless user experiences from front to back.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed animate-fade-in delay-200">
              I specialize in the MERN stack and have extensive experience with React, TypeScript, and Node.js. I'm always eager to learn new technologies and take on new challenges. Let's build something great together.
            </p>
            
            {/* Unique "My Stack" section with icons and color-coded tags */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center justify-center lg:justify-start">
                <Sparkles className="mr-2 text-teal-400" />
                My Stack
              </h3>
              <ul className="flex flex-wrap justify-center lg:justify-start gap-3 text-sm font-medium">
                <li className="flex items-center bg-gray-700 text-teal-400 px-4 py-2 rounded-full transform hover:scale-110 transition-transform duration-200">
                  <Braces size={16} className="mr-2" /> React
                </li>
                <li className="flex items-center bg-gray-700 text-blue-400 px-4 py-2 rounded-full transform hover:scale-110 transition-transform duration-200">
                  <Code size={16} className="mr-2" /> TypeScript
                </li>
                <li className="flex items-center bg-gray-700 text-green-400 px-4 py-2 rounded-full transform hover:scale-110 transition-transform duration-200">
                  <Server size={16} className="mr-2" /> Node.js
                </li>
                <li className="flex items-center bg-gray-700 text-purple-400 px-4 py-2 rounded-full transform hover:scale-110 transition-transform duration-200">
                  <Code size={16} className="mr-2" /> Express
                </li>
                <li className="flex items-center bg-gray-700 text-yellow-400 px-4 py-2 rounded-full transform hover:scale-110 transition-transform duration-200">
                  <Database size={16} className="mr-2" /> PostgreSQL
                </li>
                <li className="flex items-center bg-gray-700 text-pink-400 px-4 py-2 rounded-full transform hover:scale-110 transition-transform duration-200">
                  <Sparkles size={16} className="mr-2" /> Tailwind CSS
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
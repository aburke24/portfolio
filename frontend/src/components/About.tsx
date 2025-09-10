// src/components/About.tsx
import React from 'react';
import {
  Sparkles,
  Atom,
  FileCode,
  Server,
  Table,
  Coffee,
  Turtle,
  Cloud,
  CloudLightning,
  Boxes,
  GitBranch,
  Wind
} from 'lucide-react';
import headshot from '../assets/headShot.png';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-light-secondary-bg to-light-primary-bg dark:from-dark-secondary-bg dark:to-dark-primary-bg opacity-50 -z-10"></div>

      <div className="container mx-auto px-4 py-12 bg-light-secondary-bg dark:bg-dark-secondary-bg rounded-3xl shadow-2xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-12">
          {/* Image container */}
          <div className="lg:w-1/3 mb-8 lg:mb-0 relative mx-auto lg:mx-0 lg:ml-auto max-w-[280px]">
            <img
              src={headshot}
              alt="Aubrey Burke"
              className="rounded-full w-64 h-64 object-cover shadow-lg transform transition-transform duration-300 hover:scale-105 border-4 border-light-accent dark:border-dark-accent"
            />
          </div>

          {/* Text Content */}
          <div className="lg:w-2/3 text-center lg:text-left">
            <h2 className="text-5xl font-extrabold text-light-primary-text dark:text-dark-primary-text mb-4 animate-fade-in">About Me</h2>

            <p className="text-lg text-light-secondary-text dark:text-dark-secondary-text leading-relaxed mb-4 animate-fade-in delay-100">
              Hi, I'm Aubrey Burke — a Software Engineer with a passion for building scalable, reliable, and user-centered software. I’ve worked across the stack, from backend microservices and automation scripts to real-time cloud systems and interactive frontends.
            </p>

            <p className="text-lg text-light-secondary-text dark:text-dark-secondary-text leading-relaxed animate-fade-in delay-200">
              My toolkit includes Java, Python, React, SQL, and cloud platforms like Azure and GCP. I’ve built production systems in enterprise environments, developed automation tools to streamline operations, and created personal projects like a garden planner app and a furniture estimator — tools designed to solve real problems for real people.
            </p>

            {/* Stack List */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-light-primary-text dark:text-dark-primary-text mb-4 flex items-center justify-center lg:justify-start">
                <Sparkles className="mr-2 text-light-accent dark:text-dark-accent" />
                My Stack
              </h3>
              <ul className="flex flex-wrap justify-center lg:justify-start gap-3 text-sm font-medium">
                <li className="flex items-center bg-light-secondary-bg dark:bg-dark-secondary-bg text-sky-500 px-4 py-2 rounded-full transform hover:scale-110 transition-transform duration-200">
                  <Atom size={16} className="mr-2" /> React
                </li>
                <li className="flex items-center bg-light-secondary-bg dark:bg-dark-secondary-bg text-blue-500 px-4 py-2 rounded-full transform hover:scale-110 transition-transform duration-200">
                  <FileCode size={16} className="mr-2" /> TypeScript
                </li>
                <li className="flex items-center bg-light-secondary-bg dark:bg-dark-secondary-bg text-green-500 px-4 py-2 rounded-full transform hover:scale-110 transition-transform duration-200">
                  <Server size={16} className="mr-2" /> Node.js
                </li>
                <li className="flex items-center bg-light-secondary-bg dark:bg-dark-secondary-bg text-yellow-500 px-4 py-2 rounded-full transform hover:scale-110 transition-transform duration-200">
                  <Table size={16} className="mr-2" /> SQL
                </li>
                <li className="flex items-center bg-light-secondary-bg dark:bg-dark-secondary-bg text-purple-600 px-4 py-2 rounded-full transform hover:scale-110 transition-transform duration-200">
                  <Coffee size={16} className="mr-2" /> Java
                </li>
                <li className="flex items-center bg-light-secondary-bg dark:bg-dark-secondary-bg text-pink-600 px-4 py-2 rounded-full transform hover:scale-110 transition-transform duration-200">
                  <Turtle size={16} className="mr-2" /> Python
                </li>
                <li className="flex items-center bg-light-secondary-bg dark:bg-dark-secondary-bg text-blue-600 px-4 py-2 rounded-full transform hover:scale-110 transition-transform duration-200">
                  <Cloud size={16} className="mr-2" /> Azure
                </li>
                <li className="flex items-center bg-light-secondary-bg dark:bg-dark-secondary-bg text-red-500 px-4 py-2 rounded-full transform hover:scale-110 transition-transform duration-200">
                  <CloudLightning size={16} className="mr-2" /> GCP
                </li>
                <li className="flex items-center bg-light-secondary-bg dark:bg-dark-secondary-bg text-cyan-500 px-4 py-2 rounded-full transform hover:scale-110 transition-transform duration-200">
                  <Boxes size={16} className="mr-2" /> Docker
                </li>
                <li className="flex items-center bg-light-secondary-bg dark:bg-dark-secondary-bg text-gray-500 px-4 py-2 rounded-full transform hover:scale-110 transition-transform duration-200">
                  <GitBranch size={16} className="mr-2" /> Git
                </li>
                <li className="flex items-center bg-light-secondary-bg dark:bg-dark-secondary-bg text-teal-500 px-4 py-2 rounded-full transform hover:scale-110 transition-transform duration-200">
                  <Wind size={16} className="mr-2" /> Tailwind CSS
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

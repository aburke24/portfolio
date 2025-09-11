// src/components/Contact.tsx
import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 text-center">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Get In Touch
      </h2>
      <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
        I'm currently seeking new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll do my best to get back to you!
      </p>
      <div className="flex justify-center space-x-6">
        <a 
          href="mailto:aubrey.burke3@gmail.com"
          aria-label="Email"
          className="text-gray-400 hover:text-teal-400 transition-colors"
        >
          <Mail size={32} />
        </a>
        <a
          href="https://github.com/aburke24"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-gray-400 hover:text-teal-400 transition-colors"
        >
          <Github size={32} />
        </a>
        <a
          href="https://linkedin.com/in/aubreyburke3"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-gray-400 hover:text-teal-400 transition-colors"
        >
          <Linkedin size={32} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
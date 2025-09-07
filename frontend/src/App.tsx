// src/App.tsx
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Theme setup based on user's system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            observer.unobserve(entry.target); // Unobserve after it becomes visible
          }
        });
      },
      {
        rootMargin: '0px',
        threshold: 0.2,
      }
    );

    sections.forEach((section) => {
      section.classList.add('section-hidden');
      observer.observe(section);
    });

    // Cleanup function for the observer
    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  return (
    <div className={`min-h-screen font-sans antialiased transition-colors duration-500
      ${isDarkMode ? 'bg-dark-primary-bg text-dark-primary-text' : 'bg-light-primary-bg text-light-primary-text'}`
    }>
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section id="hero-section" className="py-20 md:py-32">
          <Hero />
        </section>
        
        <section id="about-section" className="py-20 md:py-32 border-t border-gray-800">
          <About />
        </section>
        
        <section id="projects-section" className="py-20 md:py-32 border-t border-gray-800">
          <Projects />
        </section>
        
        <section id="contact-section" className="py-20 md:py-32 border-t border-gray-800">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
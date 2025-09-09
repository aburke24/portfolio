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
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  return (
    <div className={`min-h-screen font-sans antialiased transition-colors duration-500
      ${isDarkMode ? ' bg-gradient-to-br bg-gray-900 to bg-gray-800 text-gray-100' : 'bg-gray-100 text-gray-900'}`
    }>
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section id="hero" className="py-10 md:py-30">
          <Hero />
        </section>
        <section id="about" className="py-10 md:py-30">
          <About />
        </section>
        <section id="projects" className="py-10 md:py-30 ">
          <Projects />
        </section>
        <section id="contact" className="py-10 md:py-30 ">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
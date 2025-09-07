import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // Enable dark mode based on the presence of a 'dark' class
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        // Define your dark mode colors
        dark: {
          'primary-bg': '#121212',
          'secondary-bg': '#2D2D2D',
          'primary-text': '#E0E0E0',
          'secondary-text': '#666666',
          'accent': '#4FD1C5',
        },
        // Define your light mode colors
        light: {
          'primary-bg': '#FFFFFF',
          'secondary-bg': '#EFEFEF',
          'primary-text': '#333333',
          'secondary-text': '#999999',
          'accent': '#3B82F6',
        },
      },
    },
  },
  plugins: [],
};

export default config;
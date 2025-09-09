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
      transform: ['hover', 'focus'],
      colors: {
        // Define your dark mode colors
        dark: {
          'primary-bg': '#133d77ff', // Deep blue, a darkish blue
          'secondary-bg': '#1E293B', // A slightly lighter blue for secondary elements
          'primary-text': '#E2E8F0', // Light gray-blue for main text
          'secondary-text': '#94A3B8', // Muted blue for secondary text
          'accent': '#8cbcc8ff', // Your original accent color
        },
        // Define your light mode colors
         light: {
          'primary-bg': '#60afc3ff', // Pale, light blue
          'secondary-bg': '#133d77ff', // A slightly darker blue for secondary elements
          'primary-text': '#E2E8F0', // Dark blue for text
          'secondary-text': '#E2E8F0', // Muted blue for secondary text
          'accent': '#3B82F6', // Your original accent color
        },
      },
    },
  },
  plugins: [],
};

export default config;
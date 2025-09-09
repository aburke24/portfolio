import React from 'react';
import ProjectCard from './ProjectCard';
import GreenThumbLogo from '../assets/GreenThumbLogo.svg';

const projects = [
  {
    id: 1,
    title: "Green Thumb",
    description: "A full stack web application where users can design their garden layouts.",
    techStack: {
      frontend: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      backend: [],
      database: [],
    },
    imageUrl: GreenThumbLogo,
    githubUrl: "https://github.com/aubreyburke/my-portfolio",
    liveUrl: "https://aubreyburke.dev",
  },
  {
    id: 2,
    title: "E-commerce Backend",
    description: "A RESTful API for an e-commerce platform. It handles user authentication, product management, and order processing with a PostgreSQL database.",
    techStack: {
      frontend: ["Node.js", "Express", "TypeScript"],
      backend: ["Node.js", "Express", "TypeScript"],
      database: ["PostgreSQL"],
    },
    imageUrl: "/images/ecommerce-api.png",
    githubUrl: "https://github.com/aubreyburke/ecom-api",
    liveUrl: null,
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-light-secondary-bg to-light-primary-bg dark:from-dark-secondary-bg dark:to-dark-primary-bg opacity-50 -z-10"></div>
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-5xl font-extrabold text-center text-light-primary-text dark:text-dark-primary-text mb-16 animate-fade-in">
          My Projects
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto px-4">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

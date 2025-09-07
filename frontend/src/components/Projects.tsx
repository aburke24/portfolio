// src/components/Projects.tsx
import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio built to showcase skills in React, TypeScript, and Tailwind CSS. The site is fully responsive and optimized for performance.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    imageUrl: "/images/portfolio-screenshot.png",
    githubUrl: "https://github.com/aubreyburke/my-portfolio",
    liveUrl: "https://aubreyburke.dev",
  },
  {
    id: 2,
    title: "E-commerce Backend",
    description: "A RESTful API for an e-commerce platform. It handles user authentication, product management, and order processing with a PostgreSQL database.",
    techStack: ["Node.js", "Express", "TypeScript", "PostgreSQL"],
    imageUrl: "/images/ecommerce-api.png",
    githubUrl: "https://github.com/aubreyburke/ecom-api",
    liveUrl: null,
  },
  // Add more projects as needed
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-4xl font-bold text-center text-white mb-10">
        My Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
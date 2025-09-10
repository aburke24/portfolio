import React from 'react';
import ProjectCard from './ProjectCard';
import projects from '../data/ProjectsData';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-light-secondary-bg to-light-primary-bg dark:from-dark-secondary-bg dark:to-dark-primary-bg opacity-50 -z-10"></div>
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-5xl font-extrabold text-center text-light-primary-text dark:text-dark-primary-text mb-16 animate-fade-in">
          My Projects
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto px-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

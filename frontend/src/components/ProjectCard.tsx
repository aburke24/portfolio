import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectDetailsBack from './ProjectDetailsBack';

interface Project {
  id: number;
  title: string;
  briefSummary: string;
  problemStatement: string;
  role: string;
  process: string;
  processImages?: string[];
  challenges: string;
  lessonsLearned: string;
  futureImprovements: string;
  techStack: {
    frontend: string[];
    backend: string[];
    database: string[];
  };
  githubUrl: string;
  liveUrl: string | null;
  imageUrl: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardClick = useCallback(() => setIsExpanded(true), []);
  const handleClose = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(false);
  }, []);

  // Combine all tech stack arrays and remove duplicates using Set
  const allTechStack = Array.from(
    new Set([
      ...project.techStack.frontend,
      ...project.techStack.backend,
      ...project.techStack.database,
    ])
  );

  return (
    <>
      {/* Collapsed Card View */}
      <motion.div
        layout
        onClick={handleCardClick}
        whileHover={{
          scale: 1.02,
          boxShadow: '0 0 15px 4px rgba(14, 165, 233, 0.6)',
        }}
        className={`bg-light-secondary-bg dark:bg-dark-secondary-bg rounded-3xl p-6 shadow-2xl cursor-pointer w-full transition-all duration-300 ${
          isExpanded ? 'hidden' : ''
        }`}
      >
        <div className="flex justify-center mb-4">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-[200px] h-40 object-contain rounded-xl transition-transform duration-300 hover:scale-105"
          />
        </div>

        <h2 className="text-xl font-semibold text-light-primary-text dark:text-dark-primary-text mb-1 line-clamp-1">
          {project.title}
        </h2>

        <p className="text-light-secondary-text dark:text-dark-secondary-text text-sm line-clamp-2 mb-3">
          {project.briefSummary}
        </p>

        {/* Display unique tech stack badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {allTechStack.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-light-primary-bg dark:bg-dark-primary-bg text-light-primary-text dark:text-dark-primary-text rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="text-center mt-auto">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-block text-sm text-blue-500 hover:text-blue-600 transition-colors"
            >
              Go to App
            </a>
          ) : (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-block text-sm text-blue-500 hover:text-blue-600 transition-colors"
            >
              View on GitHub
            </a>
          )}
        </div>
      </motion.div>

      {/* Expanded Details View */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 p-4 sm:p-8 bg-black/80 flex items-center justify-center overflow-y-auto"
            onClick={handleClose}
          >
            <motion.div onClick={(e) => e.stopPropagation()}>
              <ProjectDetailsBack
                title={project.title}
                frontend={project.techStack.frontend}
                backend={project.techStack.backend}
                database={project.techStack.database}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                onClose={handleClose}
                briefSummary={project.briefSummary}
                problemStatement={project.problemStatement}
                role={project.role}
                process={project.process}
                processImages={project.processImages}
                challenges={project.challenges}
                lessonsLearned={project.lessonsLearned}
                futureImprovements={project.futureImprovements}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;

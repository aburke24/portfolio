import React from 'react';
import { Github, Globe, X } from 'lucide-react'; // ✅ X was missing

interface ProjectDetailsBackProps {
  title: string;
  description: string;
  frontend: string[];
  backend: string[];
  database: string[];
  githubUrl: string;
  liveUrl: string | null;
  onClose: (e: React.MouseEvent) => void;
}

const ProjectDetailsBack: React.FC<ProjectDetailsBackProps> = ({
  title,
  description,
  frontend,
  backend,
  database,
  githubUrl,
  liveUrl,
  onClose,
}) => {
  return (
<div
className="fixed top-[64px] left-5 right-5 bottom-5 bg-slate-900 text-white overflow-y-auto p-8 border border-white/10 rounded-xl"
>      {/* Close (X) Button */}
      <button
        onClick={onClose}
        className="fixed top-4 right-4 text-white text-3xl font-bold p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-50"
        aria-label="Close details view"
      >
        <X size={24} />
      </button>

      {/* Content */}
      <div className="pt-10">
        <h3 className="text-4xl font-bold mb-4">{title} – Details</h3>
        <p className="mb-6 text-lg text-gray-300">{description}</p>

        {/* Tech Stack Sections */}
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-semibold mb-2 text-cyan-400">Frontend</h4>
            <ul className="flex flex-wrap gap-3">
              {frontend.map((tech) => (
                <li key={tech} className="bg-cyan-400/20 text-cyan-200 px-4 py-2 rounded-full text-sm">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2 text-purple-400">Backend</h4>
            <ul className="flex flex-wrap gap-3">
              {backend.map((tech) => (
                <li key={tech} className="bg-purple-400/20 text-purple-200 px-4 py-2 rounded-full text-sm">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2 text-green-400">Database</h4>
            <ul className="flex flex-wrap gap-3">
              {database.map((tech) => (
                <li key={tech} className="bg-green-400/20 text-green-200 px-4 py-2 rounded-full text-sm">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mt-8">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-green-600 rounded-full font-bold text-white hover:bg-green-700 transition-colors shadow-lg"
            >
              <Globe className="mr-2" /> Live Demo
            </a>
          )}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 bg-gray-700 rounded-full font-bold text-white hover:bg-gray-800 transition-colors shadow-lg"
          >
            <Github className="mr-2" /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsBack;

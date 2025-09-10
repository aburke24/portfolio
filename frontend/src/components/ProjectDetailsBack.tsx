import React from 'react';
import { Github, Globe, X } from 'lucide-react';

interface ProjectDetailsBackProps {
  title: string;
  briefSummary: string;
  problemStatement: string;
  role: string;
  process: string;
  processImages?: string[]; // <-- added optional prop
  challenges: string;
  lessonsLearned: string;
  futureImprovements: string;
  frontend: string[];
  backend: string[];
  database: string[];
  githubUrl: string;
  liveUrl: string | null;
  onClose: (e: React.MouseEvent) => void;
}

const ProjectDetailsBack: React.FC<ProjectDetailsBackProps> = ({
  title,
  briefSummary,
  problemStatement,
  role,
  process,
  processImages = [], // default to empty array
  challenges,
  lessonsLearned,
  futureImprovements,
  frontend,
  backend,
  database,
  githubUrl,
  liveUrl,
  onClose,
}) => {
  return (
    <div className="fixed top-[64px] left-5 right-5 bottom-5 bg-slate-900 text-white overflow-y-auto p-8 border border-white/10 rounded-xl">
      {/* Close (X) Button */}
      <button
        onClick={onClose}
        className="fixed top-4 right-4 text-white text-3xl font-bold p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-50"
        aria-label="Close details view"
      >
        <X size={24} />
      </button>

      {/* Content */}
      <div className="pt-10 max-w-4xl mx-auto space-y-10">

        <h3 className="text-4xl font-bold mb-4">{title} – Details</h3>

        {/* Tech Stack + Links */}
        <div className="space-y-6">
          <div className="grid sm:grid-cols-3 gap-6">
            <div>
              <h4 className="text-xl font-semibold mb-2 text-cyan-400">Frontend</h4>
              <ul className="flex flex-wrap gap-2">
                {frontend.map((tech) => (
                  <li
                    key={tech}
                    className="bg-cyan-400/20 text-cyan-200 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-2 text-purple-400">Backend</h4>
              <ul className="flex flex-wrap gap-2">
                {backend.map((tech) => (
                  <li
                    key={tech}
                    className="bg-purple-400/20 text-purple-200 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-2 text-green-400">Database</h4>
              <ul className="flex flex-wrap gap-2">
                {database.map((tech) => (
                  <li
                    key={tech}
                    className="bg-green-400/20 text-green-200 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-green-600 rounded-full font-bold text-white hover:bg-green-700 transition-colors shadow-lg"
              >
                <Globe className="mr-2" /> Open App
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

        {/* Sectioned Descriptions */}
        <section>
          <h4 className="text-2xl font-semibold mb-2 text-cyan-400">Brief Summary</h4>
          <p className="text-gray-300">{briefSummary}</p>
        </section>

        <section>
          <h4 className="text-2xl font-semibold mb-2 text-cyan-400">Problem Statement</h4>
          <p className="text-gray-300">{problemStatement}</p>
        </section>

        <section>
          <h4 className="text-2xl font-semibold mb-2 text-cyan-400">My Role</h4>
          <p className="text-gray-300 whitespace-pre-line">{role}</p>
        </section>

        <section>
          <h4 className="text-2xl font-semibold mb-4 text-cyan-400">Process</h4>
          <p className="text-gray-300 whitespace-pre-line mb-6">{process}</p>

          {processImages.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {processImages.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Process step ${i + 1}`}
                  className="rounded-lg border border-white/10 shadow-md"
                />
              ))}
            </div>
          )}
        </section>

        <section>
          <h4 className="text-2xl font-semibold mb-2 text-cyan-400">Challenges & Solutions</h4>
          <p className="text-gray-300 whitespace-pre-line">{challenges}</p>
        </section>

        <section>
          <h4 className="text-2xl font-semibold mb-2 text-cyan-400">Lessons Learned</h4>
          <p className="text-gray-300 whitespace-pre-line">{lessonsLearned}</p>
        </section>

        <section>
          <h4 className="text-2xl font-semibold mb-2 text-cyan-400">Future Improvements</h4>
          <p className="text-gray-300 whitespace-pre-line">{futureImprovements}</p>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetailsBack;

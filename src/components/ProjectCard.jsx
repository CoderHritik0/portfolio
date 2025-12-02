import React from "react";
import { Code2, ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <div className="group bg-slate-800/50 border border-slate-700 hover:border-emerald-500/50 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-500/10">
      <div className="p-6 md:p-8">
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 bg-slate-900/50 rounded-lg text-emerald-400 group-hover:text-emerald-300 transition-colors">
            <Code2 size={24} />
          </div>
          <div className="flex gap-4">
            <a
              href={project.github}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            {project.link && (
              <a
                href={project.link}
                className="text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-emerald-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 mb-6 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs font-mono text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

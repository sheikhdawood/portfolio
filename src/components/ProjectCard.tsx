import React from 'react';
import { 
  Calendar, 
  ArrowUpRight, 
  Activity, 
  BrainCircuit, 
  ShieldCheck, 
  Database,
  ArrowRight,
  Layers
} from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectCardProps {
  project: ProjectItem;
  onOpenModal: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  const getProjectIcon = () => {
    switch (project.id) {
      case 'observability-web-apps':
        return <Activity className="w-5 h-5 text-cyan-400" />;
      case 'company-info-chatbot':
        return <BrainCircuit className="w-5 h-5 text-indigo-400" />;
      case 'spam-classifier':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'salary-management-app':
        return <Database className="w-5 h-5 text-amber-400" />;
      default:
        return <Activity className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative group overflow-hidden border border-white/10">
      
      {/* Top ambient glow */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />

      <div>
        {/* Header Strip: Date & Icon */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-dark-950 border border-white/10">
              {getProjectIcon()}
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono-code text-cyan-400">
              <Calendar className="w-3.5 h-3.5" />
              <span>{project.date}</span>
            </div>
          </div>

          <button
            onClick={() => onOpenModal(project)}
            aria-label={`View details for ${project.name}`}
            className="p-2 rounded-lg bg-dark-950/80 text-slate-300 group-hover:text-cyan-400 border border-white/10 group-hover:border-cyan-500/40 transition-all"
          >
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Title & Short Description */}
        <h3 
          onClick={() => onOpenModal(project)}
          className="text-xl sm:text-2xl font-bold text-white tracking-tight cursor-pointer hover:text-cyan-300 transition-colors"
        >
          {project.name}
        </h3>

        <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Evaluated Accuracy Badge for Spam Classifier */}
        {project.accuracyNote && (
          <div className="mt-4 p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-xs font-mono-code text-emerald-300 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>92% accuracy on the evaluated dataset</span>
          </div>
        )}

        {/* Interactive / Visual Architecture Diagram Snapshot */}
        <div className="mt-5 p-3.5 rounded-xl bg-dark-950/80 border border-white/5 space-y-2">
          <div className="text-[11px] uppercase tracking-wider font-mono-code text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-cyan-400">
              <Layers className="w-3 h-3" /> Architecture Overview
            </span>
            <span className="text-[10px] text-slate-500">Click card for full spec</span>
          </div>

          {project.id === 'observability-web-apps' && (
            <div className="space-y-1.5 pt-1 text-[11px] font-mono-code">
              <div className="flex items-center justify-between p-1.5 rounded bg-dark-900 border border-cyan-500/20 text-slate-200">
                <span>Chat App</span>
                <ArrowRight className="w-3 h-3 text-cyan-400" />
                <span className="text-cyan-400 font-semibold">Prometheus &rarr; Grafana</span>
              </div>
              <div className="flex items-center justify-between p-1.5 rounded bg-dark-900 border border-indigo-500/20 text-slate-200">
                <span>Chat App</span>
                <ArrowRight className="w-3 h-3 text-indigo-400" />
                <span className="text-indigo-400 font-semibold">Loki + Promtail</span>
              </div>
              <div className="flex items-center justify-between p-1.5 rounded bg-dark-900 border border-purple-500/20 text-slate-200">
                <span>Chat App</span>
                <ArrowRight className="w-3 h-3 text-purple-400" />
                <span className="text-purple-400 font-semibold">OpenTelemetry &rarr; Jaeger</span>
              </div>
            </div>
          )}

          {project.id === 'company-info-chatbot' && (
            <div className="py-1 text-[11px] font-mono-code text-slate-300">
              <div className="flex flex-wrap items-center gap-1 leading-normal">
                <span className="px-1.5 py-0.5 rounded bg-dark-900 border border-white/10 text-slate-300">Website</span>
                <span className="text-cyan-400">&rarr;</span>
                <span className="px-1.5 py-0.5 rounded bg-dark-900 border border-cyan-500/30 text-cyan-300">Scraping</span>
                <span className="text-cyan-400">&rarr;</span>
                <span className="px-1.5 py-0.5 rounded bg-dark-900 border border-indigo-500/30 text-indigo-300">SentenceTransformers</span>
                <span className="text-cyan-400">&rarr;</span>
                <span className="px-1.5 py-0.5 rounded bg-dark-900 border border-purple-500/30 text-purple-300">Vector Search</span>
                <span className="text-cyan-400">&rarr;</span>
                <span className="px-1.5 py-0.5 rounded bg-dark-900 border border-emerald-500/30 text-emerald-300">LLM Response</span>
              </div>
            </div>
          )}

          {project.id === 'spam-classifier' && (
            <div className="py-1 text-[11px] font-mono-code text-slate-300">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="px-1.5 py-0.5 rounded bg-dark-900 border border-white/10">Message Text</span>
                <span className="text-cyan-400">&rarr;</span>
                <span className="px-1.5 py-0.5 rounded bg-dark-900 border border-white/10">NLP Pipeline</span>
                <span className="text-cyan-400">&rarr;</span>
                <span className="px-1.5 py-0.5 rounded bg-dark-900 border border-emerald-500/40 text-emerald-300">Multinomial Naive Bayes</span>
                <span className="text-cyan-400">&rarr;</span>
                <span className="px-1.5 py-0.5 rounded bg-dark-900 border border-cyan-500/40 text-cyan-300">Real-Time Prediction</span>
              </div>
            </div>
          )}

          {project.id === 'salary-management-app' && (
            <div className="py-1 text-[11px] font-mono-code text-slate-300">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="px-1.5 py-0.5 rounded bg-dark-900 border border-white/10">Auth Session</span>
                <span className="text-amber-400">&rarr;</span>
                <span className="px-1.5 py-0.5 rounded bg-dark-900 border border-amber-500/30 text-amber-300">Admin Console</span>
                <span className="text-amber-400">&rarr;</span>
                <span className="px-1.5 py-0.5 rounded bg-dark-900 border border-white/10">Optimized SQL Queries</span>
                <span className="text-amber-400">&rarr;</span>
                <span className="px-1.5 py-0.5 rounded bg-dark-900 border border-white/10">Employee Records</span>
              </div>
            </div>
          )}
        </div>

        {/* Tech Stack Chips */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md bg-dark-950 border border-white/10 text-xs font-mono-code text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
        <button
          onClick={() => onOpenModal(project)}
          className="text-xs font-medium text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group/btn"
        >
          <span>Explore Architecture &amp; Details</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
        </button>

        <span className="text-[11px] font-mono-code text-slate-400">
          Verified Project
        </span>
      </div>

    </div>
  );
};

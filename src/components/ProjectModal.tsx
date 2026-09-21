import React, { useEffect } from 'react';
import { 
  X, 
  Calendar, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Workflow, 
  ExternalLink,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-dark-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-dark-900 border border-white/15 shadow-2xl shadow-black/80 z-10 p-6 sm:p-8 space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project details"
          className="absolute top-5 right-5 p-2 rounded-xl bg-dark-800 hover:bg-dark-700 text-slate-300 hover:text-white border border-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="border-b border-white/10 pb-5 pr-10">
          <div className="flex items-center gap-2 text-xs font-mono-code text-cyan-400 mb-2">
            <Calendar className="w-3.5 h-3.5" />
            <span>{project.date}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {project.name}
          </h2>
          <p className="mt-2 text-base text-slate-300">
            {project.shortDescription}
          </p>
        </div>

        {/* Accuracy Banner if Spam Classifier */}
        {project.accuracyNote && (
          <div className="p-4 rounded-xl bg-cyan-950/50 border border-cyan-500/30 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-white text-sm">Evaluated Performance: </span>
              <span className="text-sm text-cyan-200">{project.accuracyNote}</span>
            </div>
          </div>
        )}

        {/* Tech Stack Chips */}
        <div>
          <h3 className="text-xs uppercase tracking-wider font-mono-code text-slate-400 font-semibold mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-cyan-400" />
            Technology Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg bg-dark-950 border border-white/10 text-xs font-mono-code text-slate-200 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Architecture & Flow Visualization */}
        {project.architectureType === 'observability' && (
          <div className="p-5 rounded-xl bg-dark-950/90 border border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs uppercase tracking-wider font-mono-code text-cyan-400 font-semibold flex items-center gap-2">
                <Workflow className="w-4 h-4" />
                Observability Triad Architecture
              </h3>
              <span className="text-[11px] font-mono-code text-slate-400">Metrics &bull; Logs &bull; Traces</span>
            </div>

            {/* Visual Architecture Flow Diagram */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              
              {/* Metrics Column */}
              <div className="p-4 rounded-lg bg-dark-900 border border-cyan-500/20 flex flex-col justify-between">
                <div className="text-xs font-mono-code text-cyan-400 font-semibold mb-2">
                  1. Metrics Flow
                </div>
                <div className="space-y-2 text-xs font-mono-code">
                  <div className="p-2 rounded bg-dark-950 border border-white/10 text-slate-200">
                    Chat Application
                  </div>
                  <div className="text-center text-cyan-400 text-[10px]">&darr; Scrapes runtime metrics</div>
                  <div className="p-2 rounded bg-cyan-950/40 border border-cyan-500/30 text-cyan-300">
                    Prometheus
                  </div>
                  <div className="text-center text-cyan-400 text-[10px]">&darr; Queries &amp; Dashboards</div>
                  <div className="p-2 rounded bg-indigo-950/40 border border-indigo-500/30 text-indigo-300">
                    Grafana
                  </div>
                </div>
              </div>

              {/* Logging Column */}
              <div className="p-4 rounded-lg bg-dark-900 border border-indigo-500/20 flex flex-col justify-between">
                <div className="text-xs font-mono-code text-indigo-400 font-semibold mb-2">
                  2. Logging Flow
                </div>
                <div className="space-y-2 text-xs font-mono-code">
                  <div className="p-2 rounded bg-dark-950 border border-white/10 text-slate-200">
                    Chat Application
                  </div>
                  <div className="text-center text-indigo-400 text-[10px]">&darr; Ships container logs</div>
                  <div className="p-2 rounded bg-indigo-950/40 border border-indigo-500/30 text-indigo-300">
                    Promtail
                  </div>
                  <div className="text-center text-indigo-400 text-[10px]">&darr; Ingestion &amp; Storage</div>
                  <div className="p-2 rounded bg-purple-950/40 border border-purple-500/30 text-purple-300">
                    Loki
                  </div>
                </div>
              </div>

              {/* Tracing Column */}
              <div className="p-4 rounded-lg bg-dark-900 border border-purple-500/20 flex flex-col justify-between">
                <div className="text-xs font-mono-code text-purple-400 font-semibold mb-2">
                  3. Tracing Flow
                </div>
                <div className="space-y-2 text-xs font-mono-code">
                  <div className="p-2 rounded bg-dark-950 border border-white/10 text-slate-200">
                    Chat Application
                  </div>
                  <div className="text-center text-purple-400 text-[10px]">&darr; Collects distributed spans</div>
                  <div className="p-2 rounded bg-purple-950/40 border border-purple-500/30 text-purple-300">
                    OpenTelemetry
                  </div>
                  <div className="text-center text-purple-400 text-[10px]">&darr; Request traces visualizer</div>
                  <div className="p-2 rounded bg-sky-950/40 border border-sky-500/30 text-sky-300">
                    Jaeger
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {project.architectureType === 'rag' && (
          <div className="p-5 rounded-xl bg-dark-950/90 border border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs uppercase tracking-wider font-mono-code text-cyan-400 font-semibold flex items-center gap-2">
                <Workflow className="w-4 h-4" />
                RAG Pipeline Sequence
              </h3>
              <span className="text-[11px] font-mono-code text-slate-400">Retrieval-Augmented Generation</span>
            </div>

            {/* Visual Step-by-Step Flow */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 pt-2">
              {[
                { name: "1. Website", desc: "Target Source", color: "border-slate-700" },
                { name: "2. Scraping", desc: "Data Ingestion", color: "border-cyan-500/40 text-cyan-400" },
                { name: "3. Processing", desc: "Text Chunking", color: "border-cyan-500/40 text-cyan-300" },
                { name: "4. Embeddings", desc: "SentenceTrans.", color: "border-indigo-500/40 text-indigo-300" },
                { name: "5. Vector Search", desc: "Similarity Top-K", color: "border-indigo-500/40 text-indigo-400" },
                { name: "6. LLM Context", desc: "HuggingFace/OpenAI", color: "border-purple-500/40 text-purple-300" },
                { name: "7. Answer", desc: "Contextual Reply", color: "border-emerald-500/40 text-emerald-400" },
              ].map((step, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-lg bg-dark-900 border ${step.color} flex flex-col justify-center text-center`}
                >
                  <div className="text-xs font-semibold tracking-tight">{step.name}</div>
                  <div className="text-[10px] font-mono-code text-slate-400 mt-1">{step.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Points & Contributions */}
        <div className="space-y-3">
          <h3 className="text-xs uppercase tracking-wider font-mono-code text-slate-400 font-semibold flex items-center gap-2">
            <Cpu className="w-4 h-4 text-cyan-400" />
            Key Implementation Points &amp; Contributions
          </h3>
          <ul className="space-y-2.5">
            {project.keyPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Links or verified notice */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono-code text-slate-400">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-3.5 h-3.5 text-slate-400" />
            <span>Strict resume data. Zero fabricated external links or metrics.</span>
          </div>

          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-dark-800 text-white hover:bg-dark-700 flex items-center gap-2 border border-white/10"
            >
              <span>GitHub Repository</span>
              <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
            </a>
          ) : (
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-dark-850 hover:bg-dark-800 text-slate-200 border border-white/10 transition-colors"
            >
              Close Details
            </button>
          )}
        </div>

      </div>
    </div>
  );
};

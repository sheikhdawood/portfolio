import React from 'react';
import { 
  CheckCircle2, 
  Layers, 
  BrainCircuit, 
  Terminal, 
  Sparkles,
  Workflow,
  Search,
  Server
} from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export const About: React.FC = () => {
  const profileCapabilities = [
    { name: "AI / ML", icon: BrainCircuit, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
    { name: "Backend Engineering", icon: Server, color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
    { name: "LLM Applications", icon: Sparkles, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    { name: "RAG", icon: Search, color: "text-sky-400", bg: "bg-sky-500/10", border: "border-sky-500/20" },
    { name: "NLP", icon: Layers, color: "text-teal-400", bg: "bg-teal-500/10", border: "border-teal-500/20" },
    { name: "API Development", icon: Terminal, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Data Processing", icon: Workflow, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
  ];

  const keyCompetencies = [
    "Experience with MongoDB & SQL databases",
    "Secure JWT authentication & role authorization",
    "Third-party API integrations (Groq, OpenAI, HuggingFace)",
    "Production debugging and resolving pipeline edge cases",
    "Transforming unstructured documents (PDF, PPTX) into structured data",
    "Deep interest in machine learning, LLMs, RAG, and backend engineering",
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative bg-dark-900/40 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono-code text-cyan-300 mb-3">
            <span>About / Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Practical AI Systems &amp; Robust Backend Architecture
          </h2>
          <p className="mt-3 text-base text-slate-400 max-w-2xl">
            Focused on bridging machine learning models with resilient, production-ready backend infrastructure.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Professional Description */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              <p className="font-medium text-white">
                {personalInfo.aboutNarrative[0]}
              </p>
              <p className="text-slate-400 text-base">
                {personalInfo.aboutNarrative[1]}
              </p>
              <p className="text-slate-400 text-base">
                {personalInfo.aboutNarrative[2]}
              </p>
            </div>

            {/* Resume-backed Competencies Checklist */}
            <div className="pt-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4 font-mono-code">
                Core Engineering Capabilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {keyCompetencies.map((comp, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-dark-850/60 border border-white/5 hover:border-cyan-500/30 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-300 font-medium leading-snug">
                      {comp}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Technical Developer Profile Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-dark-850/80 backdrop-blur-xl p-6 shadow-xl relative overflow-hidden">
              
              {/* Card Ambient Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* Header */}
              <div className="border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      Developer Profile
                    </h3>
                    <p className="text-xs font-mono-code text-cyan-400 mt-0.5">
                      Mehnoor Rafiqi
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Terminal className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Developer Profile Pillars */}
              <div className="space-y-3">
                <p className="text-xs font-mono-code text-slate-400 uppercase tracking-wider mb-2">
                  Specialized Technical Domains
                </p>

                {profileCapabilities.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className={`flex items-center justify-between p-3 rounded-xl ${item.bg} border ${item.border} hover:bg-opacity-20 transition-all`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-1.5 rounded-lg bg-dark-950/80 ${item.color}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-semibold text-white tracking-tight">
                          {item.name}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono-code text-slate-400">
                        0{idx + 1}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Factual Summary Footer */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono-code">
                <span>Location: Srinagar, India</span>
                <span className="text-cyan-400">Production-Oriented</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

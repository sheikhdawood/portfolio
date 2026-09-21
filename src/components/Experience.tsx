import React from 'react';
import { 
  Building2, 
  MapPin, 
  Calendar, 
  FileText, 
  Users, 
  CheckCircle,
  Database,
  Cpu,
  Layers
} from 'lucide-react';
import { experienceData } from '../data/portfolio';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 relative bg-dark-900/30 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono-code text-cyan-300 mb-3">
            <span>Professional Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Work Experience &amp; Engineering Contributions
          </h2>
          <p className="mt-3 text-base text-slate-400 max-w-2xl">
            Real production backend systems, document extraction pipelines, and organizational platforms.
          </p>
        </div>

        {/* Company Header Card */}
        <div className="max-w-4xl mx-auto mb-10 rounded-2xl p-6 bg-dark-850/80 border border-white/10 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  AiiOTs GEEK WORLD PVT LTD
                </h3>
                <span className="px-2 py-0.5 rounded text-[11px] font-mono-code bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                  Current
                </span>
              </div>
              <p className="text-sm font-medium text-cyan-400 mt-0.5">
                AI/ML Intern
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs font-mono-code text-slate-400">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  Srinagar, Jammu &amp; Kashmir
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  October 2025 – Present
                </span>
              </div>
            </div>
          </div>

          <div className="text-xs font-mono-code text-slate-400 px-3 py-1.5 rounded-lg bg-dark-950 border border-white/5 md:text-right">
            FastAPI &bull; LLMs &bull; Document AI &bull; MongoDB
          </div>
        </div>

        {/* Two Major Experience Pillars */}
        <div className="max-w-4xl mx-auto space-y-8 relative">
          
          {/* Vertical Timeline Guide */}
          <div className="hidden md:block absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-cyan-500/40 via-indigo-500/40 to-transparent pointer-events-none" />

          {experienceData.map((item, idx) => {
            const isReportGen = item.id === 'report-generation-system';
            return (
              <div
                key={item.id}
                className="relative md:pl-16 group"
              >
                {/* Timeline Node */}
                <div className="hidden md:flex absolute left-6 top-8 -translate-x-1/2 w-5 h-5 rounded-full bg-dark-950 border-2 border-cyan-400 items-center justify-center shadow-md shadow-cyan-500/30">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                </div>

                {/* Major Experience Card */}
                <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 relative overflow-hidden">
                  
                  {/* Subtle Accent Glow */}
                  <div className={`absolute top-0 right-0 w-40 h-40 ${isReportGen ? 'bg-cyan-500/5' : 'bg-indigo-500/5'} rounded-full blur-2xl pointer-events-none`} />

                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl bg-dark-950 ${isReportGen ? 'text-cyan-400' : 'text-indigo-400'} border border-white/10`}>
                        {isReportGen ? <FileText className="w-5 h-5" /> : <Users className="w-5 h-5" />}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white tracking-tight">
                          {item.pillarTitle}
                        </h4>
                        <p className="text-xs font-mono-code text-slate-400">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-mono-code text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-500/30 self-start sm:self-auto">
                      Pillar 0{idx + 1}
                    </span>
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-dark-950 border border-white/10 text-xs font-mono-code text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Responsibilities List */}
                  <div className="space-y-3">
                    <h5 className="text-xs uppercase tracking-wider font-mono-code text-slate-400 font-semibold mb-2 flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-cyan-400" />
                      Engineering Scope &amp; Responsibilities
                    </h5>
                    <ul className="space-y-2.5">
                      {item.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-3 text-sm sm:text-base text-slate-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Highlight Bar */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs font-mono-code text-slate-400">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      {isReportGen ? (
                        <>
                          <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                          <span>Vision LLM &amp; CTE Query Pipeline</span>
                        </>
                      ) : (
                        <>
                          <Database className="w-3.5 h-3.5 text-indigo-400" />
                          <span>Enterprise Attendance Engine &amp; Quota Logic</span>
                        </>
                      )}
                    </span>
                    <span className="text-slate-400">AiiOTs Geek World</span>
                  </div>

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

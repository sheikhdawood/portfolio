import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { educationData } from '../data/portfolio';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 relative bg-dark-900/40 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono-code text-cyan-300 mb-3">
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Education &amp; Foundation
          </h2>
          <p className="mt-3 text-base text-slate-400 max-w-2xl">
            Formal training in computer science engineering, software methodologies, and computational mathematics.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-3xl mx-auto relative">
          
          {/* Vertical Guide Line */}
          <div className="hidden sm:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-cyan-500/40 via-indigo-500/30 to-transparent pointer-events-none" />

          <div className="space-y-8">
            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className="relative sm:pl-16 group"
              >
                {/* Timeline node */}
                <div className="hidden sm:flex absolute left-6 top-8 -translate-x-1/2 w-5 h-5 rounded-full bg-dark-950 border-2 border-cyan-400 items-center justify-center shadow-md shadow-cyan-500/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                </div>

                {/* Card */}
                <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-dark-950 border border-white/10 text-cyan-400">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                          {edu.degree}
                        </h3>
                        <p className="text-sm font-medium text-cyan-300">
                          {edu.institution}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono-code text-slate-400 bg-dark-950 px-2.5 py-1 rounded-md border border-white/5 self-start sm:self-auto">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono-code text-slate-400 mb-3">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{edu.location}</span>
                  </div>

                  {edu.details && (
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {edu.details}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

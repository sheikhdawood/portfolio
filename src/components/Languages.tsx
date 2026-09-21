import React from 'react';
import { Languages as LanguagesIcon, CheckCircle2 } from 'lucide-react';
import { languagesData } from '../data/portfolio';

export const Languages: React.FC = () => {
  return (
    <section id="languages" className="py-16 md:py-20 relative bg-dark-900/30 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono-code text-cyan-300 mb-3">
            <span>Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Languages
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
            Fluency across professional and native communication channels.
          </p>
        </div>

        {/* Languages Cards Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {languagesData.map((lang, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between border border-white/10"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                  <div className="p-2 rounded-xl bg-dark-950 border border-white/10 text-cyan-400">
                    <LanguagesIcon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono-code px-2 py-0.5 rounded bg-cyan-950/50 text-cyan-300 border border-cyan-500/30">
                    {lang.level}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight">
                  {lang.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-snug">
                  {lang.proficiency}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono-code text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Fluency</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

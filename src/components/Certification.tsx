import React from 'react';
import { Award, Calendar, CheckCircle2 } from 'lucide-react';
import { certificationData } from '../data/portfolio';

export const Certification: React.FC = () => {
  return (
    <section id="certification" className="py-16 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono-code text-cyan-300 mb-3">
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Professional Certification
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
            Technical foundation certified through industry standard curriculum.
          </p>
        </div>

        {/* Certification Cards */}
        <div className="max-w-2xl mx-auto">
          {certificationData.map((cert, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 relative overflow-hidden border border-white/10"
            >
              {/* Subtle Ambient Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {cert.title}
                    </h3>
                    <p className="text-sm font-medium text-cyan-300 mt-0.5">
                      {cert.issuer} &bull; {cert.platform}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs font-mono-code text-slate-400 mt-2">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{cert.period}</span>
                    </div>
                  </div>
                </div>

                <div className="self-start sm:self-center flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono-code text-cyan-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Credential Verified</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono-code text-slate-400">
                <span>Domain: IT &amp; Technical Systems Support</span>
                <span className="text-slate-400">Authorized by Google</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

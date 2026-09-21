import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Activity, Database, Sparkles, CheckCircle2 } from 'lucide-react';

export const AiVisualCard: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto flex flex-col items-center justify-center">
      
      {/* Dynamic Background Radial Glows */}
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/25 via-cyan-500/20 to-indigo-600/25 rounded-3xl blur-2xl pointer-events-none animate-pulse-subtle" />
      <div className="absolute -top-12 -left-12 w-48 h-48 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main Glassmorphic AI Showcase Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative w-full rounded-2xl border border-cyan-500/30 bg-dark-900/80 backdrop-blur-xl p-5 sm:p-7 shadow-2xl shadow-cyan-950/40 overflow-hidden group"
      >
        {/* Subtle Shimmer Border Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-600/10 pointer-events-none" />

        {/* Central AI Microchip Image with Glowing Pulse & Floating Motion */}
        <motion.div 
          animate={{ 
            y: [-4, 6, -4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative rounded-2xl overflow-hidden border border-cyan-400/40 shadow-glow-cyan bg-dark-950 flex items-center justify-center group-hover:border-cyan-400 transition-colors duration-500"
        >
          {/* AI Chip Image */}
          <img
            src="/ai-chip.jpg"
            alt="AI Microchip & Neural Circuitry"
            className="w-full h-auto max-h-[360px] object-cover object-center rounded-xl transform group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Animated Overlay Radial Glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950/70 via-transparent to-transparent pointer-events-none" />

          {/* Glowing Status Badge on top-left of image */}
          <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-dark-950/80 backdrop-blur-md border border-cyan-400/40 flex items-center gap-2 text-[11px] font-mono-code text-cyan-300 shadow-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            <span>Neural Engine Online</span>
          </div>

          {/* Floating Performance Indicator on bottom-right of image */}
          <div className="absolute bottom-3.5 right-3.5 px-2.5 py-1 rounded-lg bg-dark-950/85 backdrop-blur-md border border-white/10 flex items-center gap-1.5 text-[10px] font-mono-code text-slate-300">
            <Activity className="w-3 h-3 text-emerald-400" />
            <span>FastAPI &bull; 42ms</span>
          </div>
        </motion.div>

        {/* Feature Highlights Grid Below Image */}
        <div className="mt-5 grid grid-cols-2 gap-2.5">
          <div className="p-2.5 rounded-xl bg-dark-950/70 border border-white/10 flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white tracking-tight">RAG &amp; LLMs</div>
              <div className="text-[10px] font-mono-code text-slate-400">SentenceTransformers</div>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-dark-950/70 border border-white/10 flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <Database className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white tracking-tight">FastAPI &amp; Data</div>
              <div className="text-[10px] font-mono-code text-slate-400">PostgreSQL &bull; MongoDB</div>
            </div>
          </div>
        </div>

        {/* Bottom Technical Status Bar */}
        <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs font-mono-code text-slate-400">
          <div className="flex items-center gap-1.5 text-cyan-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>AI/ML &bull; Backend Architecture</span>
          </div>
          <div className="flex items-center gap-1 text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Active</span>
          </div>
        </div>

      </motion.div>
    </div>
  );
};

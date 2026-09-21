import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Cpu, 
  Layers, 
  Database, 
  Server, 
  Play, 
  RotateCw,
  CheckCircle2,
  FileCode,
  Activity
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const PipelineVisualizer: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeTab, setActiveTab] = useState<'pipeline' | 'terminal'>('pipeline');

  // Stages of the AI & Backend Pipeline
  const stages = [
    {
      id: 'ingestion',
      name: 'Document / Ingestion',
      badge: 'Step 1',
      subtext: 'PyMuPDF • PPTX XML',
      icon: FileCode,
      color: 'from-blue-500 to-cyan-400',
      textColor: 'text-cyan-400',
      borderColor: 'border-cyan-500/40',
      bgGlow: 'rgba(6, 182, 212, 0.15)',
      metric: 'Structured Parse',
      codeSnippet: 'extract_document_elements(file="report.pdf")',
    },
    {
      id: 'embedding',
      name: 'Embeddings & Vectors',
      badge: 'Step 2',
      subtext: 'SentenceTransformers',
      icon: Layers,
      color: 'from-cyan-400 to-indigo-500',
      textColor: 'text-indigo-400',
      borderColor: 'border-indigo-500/40',
      bgGlow: 'rgba(99, 102, 241, 0.15)',
      metric: '384-Dim Vector',
      codeSnippet: 'embeddings = model.encode(chunk_texts)',
    },
    {
      id: 'retrieval',
      name: 'Vector Search & Data',
      badge: 'Step 3',
      subtext: 'Postgres CTE • Mongo',
      icon: Database,
      color: 'from-indigo-500 to-purple-500',
      textColor: 'text-purple-400',
      borderColor: 'border-purple-500/40',
      bgGlow: 'rgba(168, 85, 247, 0.15)',
      metric: 'Cosine Sim: 0.95',
      codeSnippet: 'context = vector_index.similarity_search(query)',
    },
    {
      id: 'inference',
      name: 'LLM & FastAPI Output',
      badge: 'Step 4',
      subtext: 'Groq API • FastAPI 200 OK',
      icon: Server,
      color: 'from-purple-500 to-emerald-400',
      textColor: 'text-emerald-400',
      borderColor: 'border-emerald-500/40',
      bgGlow: 'rgba(16, 185, 129, 0.15)',
      metric: '42ms Latency',
      codeSnippet: 'return {"status": 200, "data": synthesized_result}',
    },
  ];

  // Auto-cycling animation timer
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % stages.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [isPlaying, stages.length]);

  const terminalLogs = [
    { time: '14:20:01.102', tag: 'FASTAPI', text: 'POST /api/v1/generate-report HTTP/1.1 200 OK', color: 'text-emerald-400' },
    { time: '14:20:01.144', tag: 'INGEST', text: 'Parsed document layout with PyMuPDF & XML extractor', color: 'text-cyan-400' },
    { time: '14:20:01.182', tag: 'EMBED', text: 'SentenceTransformers generated 384-dim dense tensor', color: 'text-indigo-400' },
    { time: '14:20:01.215', tag: 'QUERY', text: 'Dynamic CTE executed against Postgres & MongoDB cache', color: 'text-amber-400' },
    { time: '14:20:01.268', tag: 'LLM', text: 'Groq inference resolved {{placeholders}} in 42ms', color: 'text-purple-400' },
    { time: '14:20:01.290', tag: 'TELEMETRY', text: 'Trace exported via OpenTelemetry & Jaeger span', color: 'text-sky-400' },
  ];

  return (
    <div className="relative rounded-2xl border border-white/15 bg-dark-900/90 backdrop-blur-2xl shadow-2xl p-4 sm:p-5 overflow-hidden">
      
      {/* Background Animated Gradient Mesh */}
      <div 
        className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl pointer-events-none transition-all duration-1000"
        style={{ background: stages[activeStep].bgGlow }}
      />
      <div 
        className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full blur-3xl pointer-events-none transition-all duration-1000 bg-indigo-500/10"
      />

      {/* Terminal Window Header */}
      <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/10 text-xs font-mono-code">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600/40" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600/40" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/40" />
          </div>
          <span className="ml-2 text-slate-300 font-semibold flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            pipeline_runtime.py
          </span>
        </div>

        {/* View Tabs & Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('pipeline')}
            className={`px-2.5 py-1 rounded-md text-[11px] transition-colors ${
              activeTab === 'pipeline'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Visual Flow
          </button>
          <button
            onClick={() => setActiveTab('terminal')}
            className={`px-2.5 py-1 rounded-md text-[11px] transition-colors ${
              activeTab === 'terminal'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Live Logs
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            title={isPlaying ? 'Pause animation' : 'Resume animation'}
            className="p-1 rounded-md bg-dark-950 border border-white/10 text-slate-400 hover:text-cyan-400 transition-colors"
          >
            {isPlaying ? (
              <RotateCw className="w-3 h-3 animate-spin" />
            ) : (
              <Play className="w-3 h-3" />
            )}
          </button>
        </div>
      </div>

      {/* Main Tab Content */}
      <div className="relative min-h-[340px] flex flex-col justify-between">
        
        {activeTab === 'pipeline' ? (
          <div className="space-y-3">
            {/* Live Progress Indicator Bar */}
            <div className="flex items-center justify-between px-2 py-1 text-[11px] font-mono-code text-slate-400">
              <span className="flex items-center gap-1.5 text-cyan-300 font-medium">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                Live Architecture Pipeline
              </span>
              <span className="text-emerald-400 font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Active Execution
              </span>
            </div>

            {/* Stages Stack */}
            <div className="grid grid-cols-1 gap-2.5">
              {stages.map((stage, idx) => {
                const Icon = stage.icon;
                const isActive = activeStep === idx;
                const isPassed = activeStep > idx;

                return (
                  <motion.div
                    key={stage.id}
                    onClick={() => {
                      setActiveStep(idx);
                      setIsPlaying(false);
                    }}
                    animate={{
                      scale: isActive ? 1.01 : 1,
                      backgroundColor: isActive ? 'rgba(15, 23, 42, 0.85)' : 'rgba(10, 14, 23, 0.6)',
                    }}
                    className={`cursor-pointer rounded-xl p-3 border transition-all duration-300 relative overflow-hidden ${
                      isActive
                        ? `${stage.borderColor} shadow-lg shadow-black/40`
                        : 'border-white/5 hover:border-white/15'
                    }`}
                  >
                    {/* Active Accent Left Border Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-indigo-500"
                      />
                    )}

                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-9 h-9 rounded-lg flex items-center justify-center border transition-all ${
                            isActive
                              ? `bg-dark-950 ${stage.textColor} ${stage.borderColor} shadow-md`
                              : isPassed
                              ? 'bg-emerald-950/40 text-emerald-400 border-emerald-500/30'
                              : 'bg-dark-950 text-slate-500 border-white/5'
                          }`}
                        >
                          {isPassed ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          ) : (
                            <Icon className="w-4 h-4" />
                          )}
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs sm:text-sm font-semibold text-white tracking-tight">
                              {stage.name}
                            </span>
                            <span className="text-[10px] font-mono-code px-1.5 py-0.2 rounded bg-dark-950 border border-white/10 text-slate-400">
                              {stage.badge}
                            </span>
                          </div>
                          <p className="text-[11px] font-mono-code text-slate-400 mt-0.5">
                            {stage.subtext}
                          </p>
                        </div>
                      </div>

                      {/* Right Metric Pill */}
                      <div className="text-right">
                        <span
                          className={`text-[11px] font-mono-code px-2 py-0.5 rounded-full border ${
                            isActive
                              ? `${stage.textColor} bg-dark-950 border-cyan-500/30 font-semibold shadow-sm`
                              : 'text-slate-500 bg-dark-950/40 border-white/5'
                          }`}
                        >
                          {stage.metric}
                        </span>
                      </div>
                    </div>

                    {/* Animated Code Execution Drawer for Active Step */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="mt-2.5 pt-2 border-t border-white/5 font-mono-code text-[11px] text-cyan-300 flex items-center gap-2"
                        >
                          <span className="text-slate-500">&gt;&gt;</span>
                          <span className="text-slate-200">{stage.codeSnippet}</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Real-time Telemetry Bar */}
            <div className="pt-2 flex items-center justify-between text-[11px] font-mono-code text-slate-400 border-t border-white/5">
              <div className="flex items-center gap-1.5 text-cyan-400">
                <Activity className="w-3.5 h-3.5 animate-pulse" />
                <span>RAG &bull; FastAPI &bull; Groq</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-semibold">99.9% Pipeline Uptime</span>
              </div>
            </div>
          </div>
        ) : (
          /* Live Terminal Stream Tab */
          <div className="rounded-xl bg-dark-950 p-3.5 border border-white/10 font-mono-code text-[11px] space-y-2 h-[320px] overflow-y-auto">
            <div className="text-slate-500 pb-1 border-b border-white/5 flex items-center justify-between text-[10px]">
              <span>// STDOUT • FastAPI Stream Receiver</span>
              <span className="text-emerald-400">Live</span>
            </div>
            {terminalLogs.map((log, lIdx) => (
              <motion.div
                key={lIdx}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: lIdx * 0.08 }}
                className="flex items-start gap-2 leading-relaxed"
              >
                <span className="text-slate-600 shrink-0">{log.time}</span>
                <span className={`font-semibold shrink-0 ${log.color}`}>
                  [{log.tag}]
                </span>
                <span className="text-slate-300 break-words">{log.text}</span>
              </motion.div>
            ))}

            {/* Simulated blinking cursor line */}
            <div className="pt-2 flex items-center gap-1.5 text-cyan-400">
              <span className="text-slate-500">&gt;</span>
              <span className="text-slate-300">await pipeline.execute_async()</span>
              <span className="w-1.5 h-3.5 bg-cyan-400 animate-pulse" />
            </div>
          </div>
        )}

      </div>

      {/* Code Insight Snippet Bar below terminal */}
      <div className="mt-3.5 p-2.5 rounded-xl bg-dark-950/90 border border-white/10 font-mono-code text-[11px] leading-relaxed text-slate-300 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span className="text-slate-400">Stack:</span>
          <span className="text-cyan-300 font-medium">FastAPI</span>
          <span className="text-slate-600">&bull;</span>
          <span className="text-indigo-300 font-medium">SentenceTransformers</span>
          <span className="text-slate-600">&bull;</span>
          <span className="text-emerald-300 font-medium">Groq</span>
        </div>
        <span className="text-[10px] text-slate-500 hidden sm:inline">Async I/O</span>
      </div>

    </div>
  );
};

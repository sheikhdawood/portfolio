import React from 'react';
import { ArrowRight, Mail, MapPin, Database, Cpu, Network, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import { AiVisualCard } from './AiVisualCard';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-tech-grid">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-gradient-to-tr from-cyan-600/10 via-indigo-600/15 to-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start space-y-6"
          >
            
            {/* Status Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark-900/90 border border-cyan-500/30 text-xs font-mono-code text-cyan-300 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>Production AI &amp; Backend Engineering</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              <span className="block text-slate-100">{personalInfo.name}</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent text-3xl sm:text-4xl lg:text-5xl mt-1">
                {personalInfo.headline}
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-200 font-medium leading-relaxed max-w-2xl">
              &ldquo;{personalInfo.supportingText}&rdquo;
            </p>

            {/* Professional Introduction */}
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl border-l-2 border-cyan-500/40 pl-4 py-1">
              {personalInfo.shortIntro}
            </p>

            {/* Key Core Architectural Focus Chips */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-2.5 py-1 rounded-md bg-dark-850 border border-white/10 text-xs font-mono-code text-slate-300 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" /> RAG &amp; LLM Pipelines
              </span>
              <span className="px-2.5 py-1 rounded-md bg-dark-850 border border-white/10 text-xs font-mono-code text-slate-300 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" /> FastAPI Backends
              </span>
              <span className="px-2.5 py-1 rounded-md bg-dark-850 border border-white/10 text-xs font-mono-code text-slate-300 flex items-center gap-1.5">
                <Network className="w-3.5 h-3.5 text-indigo-400" /> Vector Similarity &amp; NLP
              </span>
              <span className="px-2.5 py-1 rounded-md bg-dark-850 border border-white/10 text-xs font-mono-code text-slate-300 flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-amber-400" /> MongoDB &amp; PostgreSQL
              </span>
            </div>

            {/* CTA Buttons & Social Area */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-2 group"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-5 py-3 rounded-lg font-medium text-slate-200 bg-dark-850 hover:bg-dark-800 border border-white/10 hover:border-slate-400 transition-all flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Get In Touch</span>
              </a>

              {/* Secondary GitHub & LinkedIn Links */}
              <div className="flex items-center gap-2">
                {personalInfo.githubUrl && (
                  <a
                    href={personalInfo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="p-3 rounded-lg bg-dark-850 hover:bg-dark-800 border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all flex items-center gap-2 text-sm"
                  >
                    <GithubIcon className="w-4 h-4 text-slate-200" />
                    <span className="hidden sm:inline font-mono-code text-xs">GitHub</span>
                  </a>
                )}

                {personalInfo.linkedinUrl && (
                  <a
                    href={personalInfo.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="p-3 rounded-lg bg-dark-850 hover:bg-dark-800 border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400 transition-all flex items-center gap-2 text-sm"
                  >
                    <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                    <span className="hidden sm:inline font-mono-code text-xs">LinkedIn</span>
                  </a>
                )}
              </div>
            </div>

            {/* Location & Contact Details Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-400 font-mono-code">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-indigo-400" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-cyan-300 transition-colors">
                  {personalInfo.email}
                </a>
              </div>
            </div>

            {/* Direct Contact Notice */}
            <div className="text-xs text-slate-400 pt-1 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
              <span>Direct contact: rafiqimehnoor@gmail.com &bull; Phone: +91 6005772304</span>
            </div>
          </motion.div>

          {/* Right Column: AI Microchip & Neural Visual Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <AiVisualCard />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

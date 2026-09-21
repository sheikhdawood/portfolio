import React from 'react';
import { ArrowUp, Terminal, Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-950 border-t border-white/10 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Identity */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                {personalInfo.name}
              </h3>
              <p className="text-xs font-mono-code text-cyan-400">
                {personalInfo.title}
              </p>
            </div>
          </div>

          {/* Quick Contact Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono-code text-slate-400">
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="hover:text-cyan-300 transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              {personalInfo.email}
            </a>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-indigo-400" />
              +91 {personalInfo.phone}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              {personalInfo.location}
            </span>
          </div>

          {/* Social Links & Scroll to Top */}
          <div className="flex items-center gap-3">
            {personalInfo.githubUrl && (
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-dark-900 border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all shadow-sm"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}

            {personalInfo.linkedinUrl && (
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-dark-900 border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400 transition-all shadow-sm"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            )}

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2.5 rounded-xl bg-dark-900 border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-slate-400 text-center sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-slate-400">
            Verified resume information &bull; Production engineering focus
          </p>
        </div>

      </div>
    </footer>
  );
};

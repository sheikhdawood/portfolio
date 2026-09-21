import React, { useState } from 'react';
import { 
  Code, 
  BrainCircuit, 
  Server, 
  Database, 
  Sparkles, 
  Boxes, 
  Activity, 
  Globe,
  Check
} from 'lucide-react';
import { skillsData } from '../data/portfolio';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [copiedSkill, setCopiedSkill] = useState<string | null>(null);

  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Programming':
        return <Code className="w-4 h-4 text-cyan-400" />;
      case 'AI / Machine Learning':
        return <BrainCircuit className="w-4 h-4 text-purple-400" />;
      case 'Backend / APIs':
        return <Server className="w-4 h-4 text-emerald-400" />;
      case 'Databases':
        return <Database className="w-4 h-4 text-amber-400" />;
      case 'AI / LLM Tools':
        return <Sparkles className="w-4 h-4 text-indigo-400" />;
      case 'Data / Big Data':
        return <Boxes className="w-4 h-4 text-rose-400" />;
      case 'DevOps / Observability':
        return <Activity className="w-4 h-4 text-sky-400" />;
      case 'Web Technologies':
        return <Globe className="w-4 h-4 text-teal-400" />;
      default:
        return <Code className="w-4 h-4 text-cyan-400" />;
    }
  };

  const categories = ['All', ...skillsData.map((c) => c.title)];

  const filteredCategories =
    selectedCategory === 'All'
      ? skillsData
      : skillsData.filter((c) => c.title === selectedCategory);

  const handleCopySkill = (skill: string) => {
    navigator.clipboard.writeText(skill);
    setCopiedSkill(skill);
    setTimeout(() => setCopiedSkill(null), 1500);
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono-code text-cyan-300 mb-3">
            <span>Skills &amp; Technologies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Engineering Tech Stack
          </h2>
          <p className="mt-3 text-base text-slate-400 max-w-2xl">
            Hands-on technical competencies strictly evaluated and utilized across backend, data pipelines, and AI systems.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-dark-950 font-semibold shadow-lg shadow-cyan-500/25'
                  : 'bg-dark-900 border border-white/10 text-slate-300 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.title}
              className="glass-panel glass-panel-hover rounded-2xl p-5 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-white/10">
                  <div className="p-2 rounded-lg bg-dark-950/80 border border-white/10">
                    {getCategoryIcon(category.title)}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white tracking-tight">
                      {category.title}
                    </h3>
                    <span className="text-[11px] font-mono-code text-slate-400">
                      {category.skills.length} competencies
                    </span>
                  </div>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const isCopied = copiedSkill === skill;
                    return (
                      <button
                        key={skill}
                        onClick={() => handleCopySkill(skill)}
                        title="Click to copy name"
                        className="group relative px-2.5 py-1.5 rounded-lg bg-dark-950/70 border border-white/10 hover:border-cyan-500/40 text-xs font-mono-code text-slate-300 hover:text-white transition-all flex items-center gap-1.5"
                      >
                        <span>{skill}</span>
                        {isCopied ? (
                          <Check className="w-3 h-3 text-emerald-400" />
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-cyan-400 transition-colors" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono-code text-slate-400">
                <span>Verified Stack</span>
                <span className="text-cyan-400/80">&bull; Production</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

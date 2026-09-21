import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  Info,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopy = (text: string, field: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Create a mailto URL with prefilled body and trigger client
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Mehnoor,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono-code text-cyan-300 mb-3">
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Let's Build Something Intelligent.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Interested in AI/ML, backend engineering, intelligent applications, or data-driven systems? Let's connect.
          </p>
        </div>

        {/* Contact Grid: Details on Left, Interactive Form on Right */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-cyan-500/40 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono-code text-slate-400 block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm sm:text-base font-semibold text-white hover:text-cyan-300 transition-colors break-all"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  title="Copy email address"
                  className="p-2 rounded-lg bg-dark-950 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-indigo-500/40 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono-code text-slate-400 block">
                      Phone Number
                    </span>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-sm sm:text-base font-semibold text-white hover:text-indigo-300 transition-colors"
                    >
                      +91 {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  title="Copy phone number"
                  className="p-2 rounded-lg bg-dark-950 border border-white/10 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/40 transition-colors"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-panel rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono-code text-slate-400 block">
                    Location
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-white">
                    {personalInfo.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Professional Profiles: GitHub & LinkedIn */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {personalInfo.githubUrl && (
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel rounded-2xl p-4 border border-white/10 hover:border-cyan-500/40 hover:bg-cyan-950/20 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-200 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-colors">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-white block group-hover:text-cyan-300 transition-colors">
                        GitHub
                      </span>
                      <span className="text-[10px] font-mono-code text-slate-400">
                        @MehnoorRafiqi18
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </a>
              )}

              {personalInfo.linkedinUrl && (
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel rounded-2xl p-4 border border-white/10 hover:border-cyan-500/40 hover:bg-cyan-950/20 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 transition-colors">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-white block group-hover:text-cyan-300 transition-colors">
                        LinkedIn
                      </span>
                      <span className="text-[10px] font-mono-code text-slate-400">
                        Mehnoor Rafiqi
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </a>
              )}
            </div>

            {/* Notice regarding links */}
            <div className="p-4 rounded-xl bg-dark-900/80 border border-white/5 text-xs text-slate-400 leading-relaxed">
              <p className="flex items-center gap-1.5 font-medium text-slate-300 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Professional Availability
              </p>
              Available for full-time opportunities, high-impact backend engineering, and production AI/ML implementations.
            </div>

          </div>

          {/* Right Column: Contact Form UI */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 relative">
              
              <div className="border-b border-white/10 pb-4 mb-6">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Send a Message
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Fill in your details below to start a conversation.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-cyan-950/60 border border-cyan-500/40 text-center space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    Email Client Triggered
                  </h4>
                  <p className="text-sm text-slate-300">
                    Your message has been formatted into an email draft to <span className="text-cyan-300 font-mono-code">{personalInfo.email}</span>. You can also send directly or reach out by phone.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="mt-3 px-4 py-2 rounded-lg bg-dark-900 hover:bg-dark-800 text-xs font-mono-code text-cyan-400 border border-cyan-500/30 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <label 
                      htmlFor="sender-name"
                      className="block text-xs uppercase tracking-wider font-mono-code text-slate-300 font-semibold mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      id="sender-name"
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label 
                      htmlFor="sender-email"
                      className="block text-xs uppercase tracking-wider font-mono-code text-slate-300 font-semibold mb-1.5"
                    >
                      Your Email
                    </label>
                    <input
                      id="sender-email"
                      type="email"
                      required
                      placeholder="e.g. sarah@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label 
                      htmlFor="sender-message"
                      className="block text-xs uppercase tracking-wider font-mono-code text-slate-300 font-semibold mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="sender-message"
                      required
                      rows={4}
                      placeholder="Describe your engineering role, project scope, or collaboration inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl font-medium text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 group"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {/* Honest transparency notice regarding frontend vs server */}
                  <div className="pt-2 flex items-start gap-2 text-[11px] font-mono-code text-slate-400">
                    <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>
                      Frontend interface: Submitting pre-populates your local email application directly addressed to rafiqimehnoor@gmail.com with zero tracking.
                    </span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

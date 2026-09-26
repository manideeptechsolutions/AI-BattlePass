import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, ArrowRight, ShieldCheck, Code2, Bot, Layers, Play, Award, Zap, CheckCircle2 } from 'lucide-react';

const ENROLL_URL = import.meta.env.VITE_LMS_ENROLL_URL || 'https://forms.gle/5Ax5qbXBpUDozCRN7';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-mesh-grid">
      {/* Soft Glow Effects Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 shadow-sm backdrop-blur-md">
              <img
                src="/assets/Logo.jpeg"
                alt="Mani DeepTech Solutions"
                className="w-5 h-5 rounded-md object-cover"
              />
              <span className="text-xs font-extrabold text-slate-800 tracking-wide">
                Mani DeepTech Solutions
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span className="text-xs font-extrabold tracking-wider text-emerald-700 uppercase">
                Project-Driven AI Training
              </span>
            </div>

            {/* Main Title */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-none">
                AI <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-orange-500 bg-clip-text text-transparent">BATTLEPASS</span>
              </h1>
              <p className="text-lg sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-blue-600">
                LEVEL UP FROM PYTHON TO AGENTIC AI
              </p>
            </div>

            {/* Course Fee & Program Duration Banner */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <div className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-50 via-blue-50 to-orange-50 border-2 border-emerald-300 shadow-md">
                <span className="text-xs font-black text-slate-700 uppercase tracking-wider">Course Fee:</span>
                <span className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-emerald-600 via-blue-600 to-orange-600 bg-clip-text text-transparent">₹1,200</span>
                <span className="text-[11px] sm:text-xs font-extrabold text-emerald-800 bg-emerald-100 border border-emerald-300 px-2.5 py-0.5 rounded-lg uppercase tracking-wide">
                  Full 3-Month Access
                </span>
              </div>

              <div className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-orange-50 border border-orange-200 text-orange-800 text-xs sm:text-sm font-bold tracking-wide shadow-sm">
                <Zap className="w-4 h-4 text-orange-600" />
                <span>3-MONTH PRACTICAL ONLINE TRAINING</span>
              </div>
            </div>

            {/* Main Description */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              Learn the foundations of AI, build real-world projects, explore Generative AI and RAG, and progress toward building practical Agentic AI applications.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={ENROLL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 via-blue-600 to-orange-500 hover:from-emerald-500 hover:to-orange-600 text-white font-extrabold text-base tracking-wider shadow-lg shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                ENROLL NOW (₹1,200)
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#curriculum"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-slate-50 border-2 border-slate-200 text-slate-800 hover:text-blue-600 font-bold text-base transition-all shadow-sm"
              >
                EXPLORE CURRICULUM
              </a>
            </div>

            {/* Quick Highlights */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-slate-200 max-w-2xl mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Live 4 Days/Wk</span>
              </div>
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-700">50% Hands-On</span>
              </div>
              <div className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-700">LMS Submissions</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="text-xs font-extrabold text-emerald-700">Official Certificate</span>
              </div>
            </div>

          </motion.div>

          {/* Right Visual Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-2xl shadow-blue-900/10 group">
              
              {/* Workspace Rendered Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src="/assets/hero-workspace.png"
                  alt="Futuristic AI Developer Workspace"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                
                {/* Floating UI Overlay Card 1: Active Terminal */}
                <div
                  className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-white/95 backdrop-blur-md border border-emerald-300 p-2 sm:p-3 rounded-xl shadow-xl flex items-center gap-2 sm:gap-3 max-w-[200px] sm:max-w-none"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" />
                  </div>
                  <div className="truncate">
                    <div className="text-[9px] sm:text-[10px] uppercase font-bold text-emerald-700 tracking-wider">AGENTIC LOOP</div>
                    <div className="text-[10px] sm:text-xs font-mono font-semibold text-slate-800 truncate">agent_tools.py...</div>
                  </div>
                </div>

                {/* Floating UI Overlay Card 2: Capstone Progress */}
                <div
                  className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 bg-white/95 backdrop-blur-md border border-orange-300 p-2 sm:p-3 rounded-xl shadow-xl flex items-center gap-2 sm:gap-3 max-w-[200px] sm:max-w-none"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-600" />
                  </div>
                  <div className="truncate">
                    <div className="text-[9px] sm:text-[10px] uppercase font-bold text-orange-600 tracking-wider">PROJECT PROGRESS</div>
                    <div className="text-[10px] sm:text-xs font-bold text-slate-900 truncate flex items-center gap-1">
                      <span>RAG Pipeline Verified</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 inline" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Card Control Panel */}
              <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center text-[10px] font-bold text-white shadow-sm">PY</div>
                    <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white shadow-sm">ML</div>
                    <div className="w-7 h-7 rounded-lg bg-orange-500 flex items-center justify-center text-[10px] font-bold text-white shadow-sm">AI</div>
                  </div>
                  <span className="text-xs font-bold text-slate-600">10 Progressive Stages</span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-lg border border-blue-200">
                  <Play className="w-3 h-3 fill-blue-600 text-blue-600" /> Live Interactive
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

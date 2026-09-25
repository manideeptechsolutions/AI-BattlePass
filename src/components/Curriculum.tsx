import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronDown, CheckCircle2, Wrench, Sparkles, BookOpen } from 'lucide-react';
import { curriculumModules } from '../data/curriculumData';

export const Curriculum: React.FC = () => {
  const [selectedModuleId, setSelectedModuleId] = useState<string>(curriculumModules[0].id);
  const [expandedMobileModuleId, setExpandedMobileModuleId] = useState<string | null>(curriculumModules[0].id);

  const activeModule = curriculumModules.find((m) => m.id === selectedModuleId) || curriculumModules[0];

  return (
    <section id="curriculum" className="py-24 bg-mesh-grid relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-extrabold text-emerald-700 tracking-wider uppercase shadow-sm">
            <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
            INTERACTIVE CURRICULUM
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            THE AI BATTLEPASS <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-orange-500 bg-clip-text text-transparent">CURRICULUM</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            "From Python foundations to building intelligent AI systems."
          </p>
        </div>

        {/* DESKTOP SPLIT TAB VIEW */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
          
          {/* Left Module Navigation */}
          <div className="col-span-5 space-y-3">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider px-2 mb-2">
              Select Module (01 - 09)
            </div>
            {curriculumModules.map((mod) => {
              const isSelected = mod.id === selectedModuleId;
              return (
                <button
                  key={mod.id}
                  onClick={() => setSelectedModuleId(mod.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? 'bg-white border-2 border-blue-500 shadow-md shadow-blue-500/10 ring-2 ring-blue-500/20'
                      : 'bg-white/70 hover:bg-white border-slate-200 text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`text-xs font-extrabold px-2.5 py-1 rounded-md ${
                        isSelected
                          ? 'bg-gradient-to-r from-emerald-500 via-blue-600 to-orange-500 text-white shadow-sm'
                          : 'bg-slate-100 text-slate-700 group-hover:bg-slate-200'
                      }`}
                    >
                      MODULE {mod.number}
                    </span>
                    <div>
                      <h4 className={`text-sm font-bold transition-colors ${isSelected ? 'text-blue-700 font-extrabold' : 'text-slate-800'}`}>
                        {mod.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-1 font-medium">{mod.shortDesc}</p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isSelected ? 'text-blue-600 translate-x-1' : 'text-slate-400 group-hover:text-slate-600'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Active Module Content Detail Card */}
          <div className="col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeModule.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl relative overflow-hidden"
              >
                {/* Header Badge & Number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700">
                    {activeModule.categoryBadge}
                  </span>
                  <span className="text-3xl font-extrabold text-slate-400">
                    MOD {activeModule.number}
                  </span>
                </div>

                {/* Module Title & Description */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
                  {activeModule.title}
                </h3>
                <p className="text-slate-700 text-base leading-relaxed mb-8 italic border-l-4 border-emerald-500 pl-4 py-1.5 bg-emerald-50/50 rounded-r-lg font-medium">
                  "{activeModule.description}"
                </p>

                {/* Important Subtopics Grid */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-2 text-xs font-extrabold text-blue-700 uppercase tracking-wider">
                    <Sparkles className="w-4 h-4 text-blue-600" />
                    Important Subtopics Covered
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeModule.subtopics.map((topic, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-50 border border-slate-200 hover:border-blue-300 transition-colors"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span className="text-xs font-semibold text-slate-800">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools & Frameworks Used */}
                <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs font-extrabold text-orange-600 uppercase tracking-wider">
                    <Wrench className="w-4 h-4 text-orange-500" />
                    Tools & Technologies
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeModule.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-800 text-xs font-bold"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Special Note for Capstone */}
                {activeModule.id === 'module-09' && (
                  <div className="mt-6 p-4 rounded-xl bg-orange-50 border border-orange-200 text-orange-900 text-xs leading-relaxed font-semibold">
                    💡 <strong>Note:</strong> Students will be assigned a final capstone project by the trainers bringing together all relevant skills from Python to Agentic AI.
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* MOBILE ACCORDION VIEW */}
        <div className="lg:hidden space-y-4">
          {curriculumModules.map((mod) => {
            const isExpanded = expandedMobileModuleId === mod.id;
            return (
              <div
                key={mod.id}
                className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setExpandedMobileModuleId(isExpanded ? null : mod.id)}
                  className="w-full p-4 flex items-center justify-between text-left focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-extrabold px-2.5 py-1 rounded-md bg-gradient-to-r from-emerald-500 to-blue-600 text-white">
                      MOD {mod.number}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{mod.title}</h4>
                      <p className="text-xs text-slate-500 font-medium">{mod.shortDesc}</p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-4 pb-6 pt-2 border-t border-slate-100 space-y-4"
                    >
                      <p className="text-slate-700 text-xs leading-relaxed italic font-medium">
                        "{mod.description}"
                      </p>

                      <div className="space-y-2">
                        <div className="text-[11px] font-extrabold text-blue-600 uppercase tracking-wider">
                          Important Subtopics:
                        </div>
                        <div className="space-y-1.5">
                          {mod.subtopics.map((topic, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                              <span>{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {mod.tools.map((tool, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-0.5 rounded-full bg-orange-50 text-orange-800 text-[10px] font-bold border border-orange-200"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

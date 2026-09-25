import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Sparkles, Check } from 'lucide-react';
import type { LearningStep } from '../types';

const steps: LearningStep[] = [
  { step: '01', title: 'PYTHON', desc: 'Syntax, OOP, NumPy & Pandas fundamentals' },
  { step: '02', title: 'AI FOUNDATIONS', desc: 'Data modeling, math intuition & AI workflows' },
  { step: '03', title: 'MACHINE LEARNING', desc: 'Regression, classification, EDA & Scikit-learn' },
  { step: '04', title: 'DEEP LEARNING', desc: 'Neural nets, CNNs, RNNs & Transformers' },
  { step: '05', title: 'NLP', desc: 'Text representations, embeddings & tokenizers' },
  { step: '06', title: 'LLMs', desc: 'Prompting, APIs, context windows & function calls' },
  { step: '07', title: 'GENERATIVE AI', desc: 'Multimodal apps, text/image gen & tools' },
  { step: '08', title: 'RAG', desc: 'Vector DBs, chunking, retrieval & embeddings' },
  { step: '09', title: 'AGENTIC AI', desc: 'Autonomous tools, multi-agent loops & memory' },
  { step: '10', title: 'FINAL CAPSTONE', desc: 'End-to-end production AI system build' },
];

export const LearningJourney: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(8); // Default to Agentic AI

  return (
    <section id="learning-path" className="py-24 bg-white relative overflow-hidden">
      {/* Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-orange-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-extrabold text-blue-700 tracking-wider uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            10-STAGE PROGRESSIVE ROADMAP
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            THE AI BATTLEPASS <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-orange-500 bg-clip-text text-transparent">LEARNING JOURNEY</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            From Python foundations to building intelligent autonomous AI agents — step by step.
          </p>
        </div>

        {/* Interactive Step Explorer (Desktop Grid + Connection Flow) */}
        <div className="hidden lg:block relative my-12">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-blue-600 to-orange-500 -translate-y-1/2 z-0 opacity-40 rounded-full" />

          <div className="grid grid-cols-10 gap-2 relative z-10">
            {steps.map((item, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`flex flex-col items-center group cursor-pointer focus:outline-none transition-all duration-300 ${
                    isActive ? 'scale-110 z-20' : 'hover:scale-105 opacity-85 hover:opacity-100'
                  }`}
                >
                  {/* Circle Node */}
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-extrabold text-sm transition-all duration-300 border ${
                      isActive
                        ? 'bg-gradient-to-tr from-emerald-500 via-blue-600 to-orange-500 text-white border-white shadow-lg shadow-blue-500/30 ring-4 ring-blue-400/20'
                        : 'bg-white border-slate-300 text-slate-700 group-hover:border-blue-500 group-hover:text-blue-600 shadow-sm'
                    }`}
                  >
                    {isActive ? <Check className="w-5 h-5 text-white" /> : item.step}
                  </div>

                  {/* Title Label below */}
                  <div className="mt-3 text-center">
                    <span
                      className={`text-[11px] font-extrabold tracking-wider block transition-colors ${
                        isActive ? 'text-blue-600' : 'text-slate-600 group-hover:text-slate-900'
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Details Card Panel */}
          <motion.div
            key={activeStepIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-12 max-w-2xl mx-auto bg-white rounded-2xl p-6 border-2 border-blue-400 text-center relative overflow-hidden shadow-xl shadow-blue-900/5"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-2 border border-emerald-200">
              STAGE {steps[activeStepIndex].step} OF 10
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
              {steps[activeStepIndex].title}
            </h3>
            <p className="text-slate-600 text-base font-medium leading-relaxed">
              {steps[activeStepIndex].desc}
            </p>
          </motion.div>
        </div>

        {/* Mobile Vertical Timeline Layout */}
        <div className="lg:hidden space-y-4">
          {steps.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-500 via-blue-600 to-orange-500 flex items-center justify-center font-extrabold text-sm text-white flex-shrink-0 shadow-md">
                {item.step}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-extrabold text-slate-900 tracking-wide">{item.title}</h3>
                  <ChevronRight className="w-4 h-4 text-blue-600" />
                </div>
                <p className="text-slate-600 text-xs leading-relaxed font-medium">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

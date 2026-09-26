import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Code2, Globe2, CheckCircle2 } from 'lucide-react';

export const TeachingApproach: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs font-extrabold text-emerald-700 tracking-wider uppercase shadow-sm">
            BALANCED METHODOLOGY
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            50% CONCEPTS <span className="text-orange-500">+</span> 50% HANDS-ON
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            "Concepts are explained clearly and connected immediately to practical implementation."
          </p>
        </div>

        {/* 50/50 Split Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* CONCEPTS CARD */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 border-2 border-blue-400 shadow-md hover:shadow-xl transition-all relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-3xl font-black text-blue-300">50%</span>
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 mb-4">CONCEPTS</h3>
            <ul className="space-y-3">
              {[
                'Understand the core mathematical & algorithmic fundamentals',
                'Learn modern neural network & agentic system architectures',
                'Understand how underlying technologies work under the hood',
                'Observe live architectural demonstrations by the trainer'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* HANDS-ON CARD */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 border-2 border-emerald-400 shadow-md hover:shadow-xl transition-all relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                <Code2 className="w-6 h-6 text-emerald-600" />
              </div>
              <span className="text-3xl font-black text-emerald-300">50%</span>
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 mb-4">HANDS-ON PRACTICE</h3>
            <ul className="space-y-3">
              {[
                'Write live clean Python code in VS Code & Jupyter',
                'Implement practical machine learning & deep learning examples',
                'Build assigned practical tasks and trainer projects',
                'Submit completed work through the LMS for trainer evaluation'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* Teaching Language Callout */}
        <div className="max-w-xl mx-auto p-4 rounded-xl bg-white border border-slate-200 flex items-center justify-center gap-3 text-center text-xs sm:text-sm text-slate-800 shadow-sm font-medium">
          <Globe2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
          <span>
            <strong className="text-slate-900">Teaching Language:</strong> English primarily, with Telugu explanations where helpful for better understanding.
          </span>
        </div>

      </div>
    </section>
  );
};

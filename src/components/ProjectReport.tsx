import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle2 } from 'lucide-react';

const reportSections = [
  'Abstract',
  'Problem Statement',
  'Objectives',
  'Methodology',
  'Architecture',
  'Technologies Used',
  'Implementation',
  'Results',
  'Screenshots',
  'Conclusion',
  'Future Scope'
];

export const ProjectReport: React.FC = () => {
  return (
    <section className="py-24 bg-mesh-grid relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-extrabold text-emerald-700 tracking-wider uppercase shadow-sm">
            PRACTICAL DOCUMENTATION
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            DOCUMENT YOUR <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-orange-500 bg-clip-text text-transparent">WORK</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            "Students will prepare a final project report for their capstone."
          </p>
        </div>

        {/* Report Document Mockup Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-xl"
        >
          <div className="flex items-center gap-3 pb-6 mb-8 border-b border-slate-200">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-slate-900">Capstone Project Report Specification</h3>
              <p className="text-xs text-slate-500 font-medium">Structured documentation format for portfolio & GitHub demonstration</p>
            </div>
          </div>

          {/* 11 Section Chips */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
            {reportSections.map((sec, idx) => (
              <div
                key={sec}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-400 transition-colors shadow-sm"
              >
                <span className="text-[10px] font-mono font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="text-xs font-bold text-slate-800">{sec}</span>
              </div>
            ))}
          </div>

          {/* Practical emphasis banner */}
          <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200 flex items-center gap-2.5 text-xs text-slate-800 font-medium">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0" />
            <span>
              <strong className="text-slate-900">Professional Standard:</strong> Preparing a clear project report trains you to document system architecture, APIs, and results like an engineer.
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

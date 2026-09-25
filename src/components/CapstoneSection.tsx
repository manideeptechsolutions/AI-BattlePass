import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, FileText, Cpu, Code2, ShieldCheck, Rocket, FileCheck2, Presentation, ChevronRight } from 'lucide-react';

const capstoneSteps = [
  { step: '01', title: 'IDEA', desc: 'Scope domain problem statement', icon: Lightbulb, color: 'text-emerald-600 bg-emerald-50' },
  { step: '02', title: 'PLAN', desc: 'Define tech stack & deliverables', icon: FileText, color: 'text-blue-600 bg-blue-50' },
  { step: '03', title: 'ARCHITECT', desc: 'Design AI & LLM pipeline logic', icon: Cpu, color: 'text-orange-600 bg-orange-50' },
  { step: '04', title: 'BUILD', desc: 'Write complete python application', icon: Code2, color: 'text-emerald-600 bg-emerald-50' },
  { step: '05', title: 'TEST', desc: 'Validate accuracy & edge cases', icon: ShieldCheck, color: 'text-blue-600 bg-blue-50' },
  { step: '06', title: 'DEPLOY', desc: 'Host application where applicable', icon: Rocket, color: 'text-orange-600 bg-orange-50' },
  { step: '07', title: 'DOCUMENT', desc: 'Prepare complete project report', icon: FileCheck2, color: 'text-emerald-600 bg-emerald-50' },
  { step: '08', title: 'PRESENT', desc: 'Demonstrate project features live', icon: Presentation, color: 'text-blue-600 bg-blue-50' }
];

export const CapstoneSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-extrabold text-blue-700 tracking-wider uppercase shadow-sm">
            CULMINATING EXPERIENCE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            BUILD YOUR <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-orange-500 bg-clip-text text-transparent">CAPSTONE</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            "At the end of the learning journey, students will be assigned a final capstone project that brings together relevant skills learned throughout the program."
          </p>
        </div>

        {/* Workflow Lifecycle Sequence */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
          {capstoneSteps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-white rounded-xl p-4 border border-slate-200 text-center relative flex flex-col justify-between group shadow-sm hover:shadow-md hover:border-blue-400 transition-all"
              >
                <div>
                  <div className="text-[10px] font-extrabold text-blue-600 mb-2">STEP {item.step}</div>
                  <div className={`w-10 h-10 mx-auto rounded-lg border border-slate-200 flex items-center justify-center mb-3 transition-colors ${item.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xs font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[10px] text-slate-600 leading-tight font-medium">
                    {item.desc}
                  </p>
                </div>
                {idx < capstoneSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-20">
                    <ChevronRight className="w-4 h-4 text-slate-300" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FileCheck, Code2, Upload, MessageSquare, RefreshCw, Trophy, ArrowRight, Lightbulb, Pin } from 'lucide-react';

const processSteps = [
  {
    step: '01',
    title: 'LEARN',
    desc: 'Attend the live class and understand the core concept thoroughly.',
    icon: BookOpen,
    color: 'from-emerald-500 to-teal-600'
  },
  {
    step: '02',
    title: 'GET ASSIGNED',
    desc: 'Receive a practical project or coding task directly from the trainer.',
    icon: FileCheck,
    color: 'from-blue-500 to-teal-600'
  },
  {
    step: '03',
    title: 'BUILD',
    desc: 'Implement the project hands-on with trainer guidance.',
    icon: Code2,
    color: 'from-teal-600 to-emerald-600'
  },
  {
    step: '04',
    title: 'SUBMIT',
    desc: 'Submit your completed project work directly through the LMS.',
    icon: Upload,
    color: 'from-orange-500 to-amber-600'
  },
  {
    step: '05',
    title: 'REVIEW',
    desc: 'Receive direct review and constructive feedback from the trainer.',
    icon: MessageSquare,
    color: 'from-emerald-600 to-blue-600'
  },
  {
    step: '06',
    title: 'IMPROVE',
    desc: 'Refine your implementation and make improvements based on feedback.',
    icon: RefreshCw,
    color: 'from-blue-600 to-orange-500'
  },
  {
    step: '07',
    title: 'SHOWCASE',
    desc: 'Organize completed projects cleanly into your professional portfolio.',
    icon: Trophy,
    color: 'from-orange-500 to-emerald-500'
  }
];

export const ProjectBasedLearning: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs font-extrabold text-emerald-700 tracking-wider uppercase shadow-sm">
            PRACTICAL PEDAGOGY
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            LEARN BY <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-orange-500 bg-clip-text text-transparent">BUILDING</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            "Every stage of the journey connects learning with practical work."
          </p>

          {/* Clarification Callout Cards */}
          <div className="mt-8 p-6 rounded-2xl bg-white border border-slate-200 space-y-4 text-left max-w-3xl mx-auto shadow-md">
            <div className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed font-medium">
              <Lightbulb className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-slate-900">Trainer-Assigned Work:</strong> Throughout the program, trainers will assign required projects and practical tasks based on the topics being taught.
              </div>
            </div>
            <div className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed font-medium">
              <Pin className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-slate-900">LMS Workflow:</strong> Students are expected to complete the assigned projects and submit their work through the LMS platform for feedback.
              </div>
            </div>
          </div>
        </div>

        {/* 7 Step Workflow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white border border-slate-200 hover:border-blue-400 rounded-2xl p-6 relative overflow-hidden group flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${item.color} p-0.5 shadow-md`}>
                      <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-slate-800" />
                      </div>
                    </div>
                    <span className="text-xs font-extrabold text-slate-400 tracking-wider">
                      STEP {item.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-500">
                  <span>Phase {index + 1}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

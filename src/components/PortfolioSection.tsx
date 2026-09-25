import React from 'react';
import { motion } from 'framer-motion';
import { Github, Globe, Linkedin, FileSpreadsheet, CheckCircle2, ArrowUpRight } from 'lucide-react';

const portfolioCards = [
  {
    title: 'GITHUB',
    icon: Github,
    color: 'text-emerald-600 bg-emerald-50',
    borderColor: 'border-slate-200 hover:border-emerald-400',
    items: ['Repository organization', 'Professional README documentation', 'Clean code presentation', 'Version control history']
  },
  {
    title: 'PORTFOLIO SITE',
    icon: Globe,
    color: 'text-blue-600 bg-blue-50',
    borderColor: 'border-slate-200 hover:border-blue-400',
    items: ['Project showcases', 'Interactive live demos', 'Skill categorizations', 'Architecture flowcharts']
  },
  {
    title: 'LINKEDIN',
    icon: Linkedin,
    color: 'text-orange-600 bg-orange-50',
    borderColor: 'border-slate-200 hover:border-orange-400',
    items: ['Project presentations', 'Learning journey updates', 'Professional presence', 'Demonstrating practical work']
  },
  {
    title: 'RESUME',
    icon: FileSpreadsheet,
    color: 'text-emerald-600 bg-emerald-50',
    borderColor: 'border-slate-200 hover:border-emerald-400',
    items: ['Highlight relevant AI projects', 'Specific technologies used', 'Practical implementation details', 'Quantitative outcomes']
  }
];

export const PortfolioSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-extrabold text-emerald-700 tracking-wider uppercase shadow-sm">
            CAREER & PROOF OF SKILLS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            TURN PROJECTS INTO A <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-orange-500 bg-clip-text text-transparent">PORTFOLIO</span>
          </h2>

          {/* Prominent Motto Banner */}
          <div className="pt-4">
            <span className="inline-block px-6 py-3 rounded-2xl bg-white border border-slate-200 text-blue-700 text-lg sm:text-xl font-extrabold tracking-wide uppercase shadow-md">
              "DON'T JUST LEARN AI. BUILD PROOF OF YOUR SKILLS."
            </span>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`bg-white rounded-2xl p-6 border ${card.borderColor} flex flex-col justify-between group shadow-sm hover:shadow-lg transition-all`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl border border-slate-200 flex items-center justify-center group-hover:scale-110 transition-transform ${card.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900 mb-4 tracking-wide">{card.title}</h3>

                  <ul className="space-y-2.5">
                    {card.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Briefcase, Sparkles, CheckCircle2 } from 'lucide-react';
import type { AudienceCard } from '../types';

const audienceCards: AudienceCard[] = [
  {
    id: 'students',
    title: 'Students',
    description: 'Build practical AI skills alongside your academics.',
    iconName: 'GraduationCap',
    badge: 'ACADEMIC & BEYOND',
    gradient: 'from-emerald-500/10 via-emerald-500/5 to-transparent'
  },
  {
    id: 'developers',
    title: 'Developers',
    description: 'Upgrade your development skills with modern AI technologies.',
    iconName: 'Code',
    badge: 'SKILL UPGRADE',
    gradient: 'from-blue-500/10 via-blue-500/5 to-transparent'
  },
  {
    id: 'job-seekers',
    title: 'Job Seekers',
    description: 'Build practical projects that demonstrate your AI skills.',
    iconName: 'Briefcase',
    badge: 'PORTFOLIO PROOF',
    gradient: 'from-orange-500/10 via-orange-500/5 to-transparent'
  },
  {
    id: 'enthusiasts',
    title: 'AI Enthusiasts',
    description: 'Explore AI, Generative AI and Agentic AI through hands-on learning.',
    iconName: 'Sparkles',
    badge: 'HANDS-ON EXPLORER',
    gradient: 'from-emerald-500/10 via-orange-500/5 to-transparent'
  }
];

export const AudienceSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-8 h-8 text-emerald-600" />;
      case 'Code':
        return <Code className="w-8 h-8 text-blue-600" />;
      case 'Briefcase':
        return <Briefcase className="w-8 h-8 text-orange-500" />;
      default:
        return <Sparkles className="w-8 h-8 text-emerald-600" />;
    }
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-extrabold text-emerald-700 tracking-wider uppercase shadow-sm">
            TARGET AUDIENCE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            BUILT FOR LEARNERS WHO <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-orange-500 bg-clip-text text-transparent">WANT TO BUILD</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            AI Battlepass is structured for anyone passionate about mastering real-world AI engineering through hands-on practical coding.
          </p>
        </div>

        {/* 4 Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audienceCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-slate-200 hover:border-blue-400 rounded-2xl p-6 relative overflow-hidden group flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Radial background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    {getIcon(card.iconName)}
                  </div>
                  <span className="text-[10px] font-bold tracking-wider text-slate-700 uppercase bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
                    {card.badge}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {card.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  "{card.description}"
                </p>
              </div>

              <div className="relative z-10 pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-emerald-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Practical Project Focus</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

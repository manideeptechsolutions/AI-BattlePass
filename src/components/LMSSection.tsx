import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, BookOpen, Video, FileCode, Upload, TrendingUp, ShieldCheck, Clock } from 'lucide-react';

const lmsCards = [
  { name: 'My Courses', desc: 'Active AI Battlepass Enrolled Track', icon: BookOpen, color: 'text-emerald-600 bg-emerald-50' },
  { name: 'Live Classes', desc: 'Direct links & session schedules', icon: Video, color: 'text-blue-600 bg-blue-50' },
  { name: 'Course Modules', desc: 'Structured learning assets & code repos', icon: LayoutDashboard, color: 'text-orange-600 bg-orange-50' },
  { name: 'Assignments', desc: 'Weekly coding tasks & exercises', icon: FileCode, color: 'text-emerald-600 bg-emerald-50' },
  { name: 'Project Tasks', desc: 'Trainer-assigned practical projects', icon: FileCode, color: 'text-blue-600 bg-blue-50' },
  { name: 'Resources', desc: 'Cheat sheets, APIs & slide decks', icon: BookOpen, color: 'text-orange-600 bg-orange-50' },
  { name: 'Submit Project', desc: 'Direct code & repo URL uploads', icon: Upload, color: 'text-emerald-600 bg-emerald-50' },
  { name: 'My Progress', desc: 'Completion metrics & trainer reviews', icon: TrendingUp, color: 'text-blue-600 bg-blue-50' }
];

export const LMSSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-extrabold text-blue-700 tracking-wider uppercase shadow-sm">
            CENTRALIZED LMS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            YOUR LEARNING <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-orange-500 bg-clip-text text-transparent">HUB</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            "The LMS keeps your learning resources, assignments and project workflow organized in one place."
          </p>
        </div>

        {/* LMS Dashboard Preview Mockup Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xl mb-12"
        >
          {/* Top LMS Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 via-blue-600 to-orange-500 flex items-center justify-center font-extrabold text-white shadow-md">
                LMS
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-slate-900">Mani DeepTech LMS Portal</h3>
                <p className="text-xs text-slate-500 font-medium">AI Battlepass Student Dashboard</p>
              </div>
            </div>

            {/* Access Duration Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-800 font-bold shadow-sm">
              <Clock className="w-4 h-4 text-blue-600" />
              <span>3 Months Training + 1 Month Post-Completion Access</span>
            </div>
          </div>

          {/* 8 LMS Modules Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {lmsCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-400 transition-all hover:-translate-y-1 group shadow-sm"
                >
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 transition-colors ${card.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {card.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-1 font-medium">{card.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Capabilities Summary Footer inside LMS */}
          <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-700 font-semibold">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Submit assigned projects & receive trainer feedback</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <span>Track progress across all 10 learning stages</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-orange-500 flex-shrink-0" />
              <span>Receive course updates & resource materials</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

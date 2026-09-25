import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Video, Clock, Code2, FolderGit2, LayoutDashboard } from 'lucide-react';

const stats = [
  { value: '3 MONTHS', label: 'Practical AI Training', icon: Calendar, color: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
  { value: '4 DAYS / WK', label: 'Live Online Classes', icon: Video, color: 'text-blue-600 bg-blue-50 border-blue-200' },
  { value: '~1 HOUR', label: 'Live Teaching Session', icon: Clock, color: 'text-orange-600 bg-orange-50 border-orange-200' },
  { value: '50 / 50', label: 'Concepts + Hands-on', icon: Code2, color: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
  { value: 'PROJECT-DRIVEN', label: 'Trainer-Assigned Work', icon: FolderGit2, color: 'text-blue-600 bg-blue-50 border-blue-200' },
  { value: 'LMS PORTAL', label: 'Learning + Submission', icon: LayoutDashboard, color: 'text-orange-600 bg-orange-50 border-orange-200' }
];

export const CourseFormat: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-b border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            COURSE <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-orange-500 bg-clip-text text-transparent">FORMAT & METRICS</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.value}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-white rounded-2xl p-5 border border-slate-200 text-center flex flex-col items-center justify-center space-y-2 group shadow-sm hover:shadow-md transition-all"
              >
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center group-hover:scale-110 transition-transform ${item.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-base sm:text-lg font-extrabold tracking-tight text-slate-900">
                  {item.value}
                </div>
                <div className="text-[11px] font-bold text-slate-600 leading-tight">
                  {item.label}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

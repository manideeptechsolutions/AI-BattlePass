import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Phone, User, Sparkles, ShieldCheck } from 'lucide-react';

const ENROLL_URL = import.meta.env.VITE_LMS_ENROLL_URL || '#pricing';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-mesh-grid relative overflow-hidden">
      {/* Glow Center Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-orange-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 sm:p-14 text-center border-2 border-orange-400 shadow-2xl shadow-orange-500/10 relative overflow-hidden"
        >
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-extrabold text-emerald-700 uppercase tracking-widest mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            AI BATTLEPASS
          </div>

          <h2 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight mb-4">
            READY TO <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-orange-500 bg-clip-text text-transparent">LEVEL UP?</span>
          </h2>

          <p className="text-slate-600 text-lg sm:text-xl font-medium max-w-2xl mx-auto mb-8 leading-relaxed">
            "Start with Python. Build with AI. Explore Generative AI. Create intelligent agents."
          </p>

          {/* Pricing Highlight */}
          <div className="mb-8">
            <div className="inline-flex items-baseline gap-2 px-8 py-3 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
              <span className="text-slate-600 text-sm font-semibold">Standard Program Fee:</span>
              <span className="text-3xl sm:text-4xl font-extrabold text-orange-500">₹1,200</span>
            </div>
          </div>

          {/* ENROLL Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href={ENROLL_URL}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-600 to-orange-600 hover:from-orange-600 hover:to-amber-700 text-white font-extrabold text-lg tracking-wider shadow-xl shadow-orange-500/25 transition-transform transform hover:-translate-y-0.5"
            >
              ENROLL NOW
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>

          {/* Contact Person Details */}
          <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-700 font-medium">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-emerald-600" />
              <span>Contact: <strong className="text-slate-900">Manideep Juvvala</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-600" />
              <a href="tel:9381088104" className="hover:text-blue-600 transition-colors text-slate-900 font-bold">
                9381088104
              </a>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-orange-500" />
              <span className="text-orange-600 font-bold">Start Your AI Journey Today</span>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

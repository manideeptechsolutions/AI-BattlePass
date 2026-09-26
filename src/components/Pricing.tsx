import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles, CreditCard } from 'lucide-react';

const ENROLL_URL = import.meta.env.VITE_LMS_ENROLL_URL || 'https://forms.gle/5Ax5qbXBpUDozCRN7';

const pricingIncludes = [
  'Live Online Classes (4 Days/Week)',
  'Project-Based Learning & Practical Coding',
  'Trainer Guidance & Doubt Clarification',
  'LMS Access (3 Months Training + 1 Month Extension)',
  'Required Project Assignments',
  'Final Capstone Project',
  'Official Certificate of Completion',
  'Project Report Guidance',
  'Portfolio & GitHub Guidance',
  'Exposure to Modern AI & Agentic Tools'
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-mesh-grid relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-orange-500/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs font-extrabold text-emerald-700 tracking-wider uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            TRANSPARENT PRICING
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            ACCESSIBLE HIGH-QUALITY <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-orange-500 bg-clip-text text-transparent">AI TRAINING</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Straightforward pricing with complete access to live classes, projects, LMS, and capstone guidance.
          </p>
        </div>

        {/* Standalone Premium Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border-2 border-orange-400 relative overflow-hidden shadow-2xl shadow-orange-500/10"
        >
          {/* Top Badge Header */}
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-lg border border-emerald-200">
              AI BATTLEPASS
            </span>
            <span className="text-xs font-bold text-slate-500">
              Mani DeepTech Solutions
            </span>
          </div>

          {/* Pricing Display */}
          <div className="text-center py-6 border-y border-slate-200 my-4 space-y-2 bg-slate-50/50 rounded-2xl">
            <div className="text-5xl sm:text-6xl font-black text-slate-900 tracking-tight flex items-center justify-center gap-1">
              <span className="text-3xl sm:text-4xl text-orange-500 font-extrabold">₹</span>1,200
            </div>
            <div className="text-base font-extrabold text-blue-700">
              3-Month Practical Online AI Training
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs text-slate-600 font-semibold bg-white px-3 py-1 rounded-lg border border-slate-200 shadow-sm">
              <CreditCard className="w-3.5 h-3.5 text-slate-500" />
              Full payment only
            </div>
          </div>

          {/* Inclusions List */}
          <div className="space-y-3 my-8">
            <div className="text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-2">
              Everything Included in ₹1,200:
            </div>
            {pricingIncludes.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Primary CTA Button */}
          <div className="pt-2">
            <a
              href={ENROLL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 py-4 px-8 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-600 to-orange-600 hover:from-orange-600 hover:to-amber-700 text-white font-extrabold text-lg tracking-wider shadow-xl shadow-orange-500/25 transition-all transform hover:-translate-y-0.5"
            >
              ENROLL NOW
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Security & Guarantee note */}
          <div className="mt-6 text-center flex items-center justify-center gap-2 text-xs text-slate-500 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Official program by Mani DeepTech Solutions</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Code2, FolderCheck, ShieldCheck } from 'lucide-react';

const completionCriteria = [
  'Attend the live online training sessions',
  'Complete required coding assignments & exercises',
  'Complete trainer-assigned practical projects',
  'Submit required work through the LMS',
  'Complete the final capstone project & report',
  'Earn your Official AI Battlepass Certificate of Completion'
];

export const CompletionSection: React.FC = () => {
  return (
    <section className="py-24 bg-mesh-grid relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs font-extrabold text-emerald-700 tracking-wider uppercase shadow-sm">
            CERTIFICATION & RECOGNITION
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            EARN YOUR OFFICIAL <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-orange-500 bg-clip-text text-transparent">CERTIFICATE</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Gain practical skills and receive an official Certificate of Completion from Mani DeepTech Solutions to validate your AI expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Requirements Checklist */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white rounded-2xl p-8 border border-slate-200 space-y-4 shadow-xl"
          >
            <h3 className="text-xl font-extrabold text-slate-900 mb-4 flex items-center gap-2">
              <FolderCheck className="w-5 h-5 text-emerald-600" />
              Course Completion & Certification Checklist
            </h3>

            <div className="space-y-3">
              {completionCriteria.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-bold text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Certificate Feature Box */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-white rounded-2xl p-8 border-2 border-emerald-500 space-y-6 relative overflow-hidden shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                <Award className="w-7 h-7 text-emerald-600" />
              </div>
              <div>
                <h4 className="text-lg font-extrabold text-slate-900">Verified Certificate</h4>
                <p className="text-xs text-emerald-700 font-bold">Issued by Mani DeepTech Solutions</p>
              </div>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed font-medium">
              Upon successfully completing all course requirements and your capstone project, you will be awarded an official <strong>Certificate of Completion</strong> along with your practical portfolio assets.
            </p>

            {/* 4 Pillar Value Badges */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
                <Award className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
                <span className="text-xs font-extrabold text-slate-900">Official Certificate</span>
              </div>
              <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-center">
                <Code2 className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                <span className="text-xs font-bold text-slate-900">Practical Skills</span>
              </div>
              <div className="p-3 rounded-xl bg-orange-50 border border-orange-200 text-center">
                <FolderCheck className="w-5 h-5 text-orange-600 mx-auto mb-1" />
                <span className="text-xs font-bold text-slate-900">Assigned Projects</span>
              </div>
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
                <span className="text-xs font-bold text-slate-900">Real Portfolio</span>
              </div>
            </div>

            {/* Highlight Note */}
            <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 flex items-start gap-2.5 text-xs text-slate-800 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
              <span>
                <strong className="text-slate-900">Official Recognition:</strong> Showcase your verified certificate on LinkedIn, resumes, and job applications.
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

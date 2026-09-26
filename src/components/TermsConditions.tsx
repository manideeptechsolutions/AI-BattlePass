import React from 'react';
import { FileText, ArrowLeft, CheckCircle2, ShieldCheck, Scale, Award } from 'lucide-react';

interface TermsConditionsProps {
  onBack: () => void;
}

export const TermsConditions: React.FC<TermsConditionsProps> = ({ onBack }) => {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold text-sm shadow-sm hover:bg-slate-100 transition-colors mb-8 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        {/* Header */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-xs font-extrabold text-blue-700 tracking-wider uppercase mb-4 shadow-sm">
            <Scale className="w-4 h-4 text-blue-600" />
            TERMS OF SERVICE
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            Terms & Conditions
          </h1>
          <p className="text-slate-500 text-sm font-medium">
            Effective Date: September 2026 | Mani DeepTech Solutions
          </p>
        </div>

        {/* Policy Body Content */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl space-y-8 text-slate-700 text-sm leading-relaxed font-normal">
          
          <section className="space-y-3">
            <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600" />
              1. Program Scope & Structure
            </h2>
            <p>
              The <strong>AI Battlepass</strong> program is an online practical training course operated by <strong>Mani DeepTech Solutions</strong>. The standard fee is ₹1,200 for 3 months of live online training (4 days per week) plus 1 additional month of LMS platform access post-completion.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              2. Student Requirements & LMS Workflows
            </h2>
            <p>
              Enrolled students are expected to actively participate in live classes, complete trainer-assigned coding tasks, and submit required project milestones through the LMS platform.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
              <Award className="w-5 h-5 text-orange-500" />
              3. Certification Policy
            </h2>
            <p>
              Official Certificates of Completion are issued upon satisfactory completion of assigned coursework and capstone project submission as verified by trainers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              4. Code of Conduct & Intellectual Property
            </h2>
            <p>
              Course materials, live code walkthroughs, and learning assets provided in the LMS are owned by Mani DeepTech Solutions. Unauthorized redistribution or commercial reselling of course materials is strictly prohibited.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
};

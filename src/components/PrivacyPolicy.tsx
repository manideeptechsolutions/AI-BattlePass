import React from 'react';
import { ShieldCheck, ArrowLeft, Lock, Eye, FileText, CheckCircle2 } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs font-extrabold text-emerald-700 tracking-wider uppercase mb-4 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            LEGAL & PRIVACY
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            Privacy Policy
          </h1>
          <p className="text-slate-500 text-sm font-medium">
            Last Updated: September 2026 | Mani DeepTech Solutions
          </p>
        </div>

        {/* Policy Body Content */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl space-y-8 text-slate-700 text-sm leading-relaxed font-normal">
          
          <section className="space-y-3">
            <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
              <Eye className="w-5 h-5 text-blue-600" />
              1. Information We Collect
            </h2>
            <p>
              When you enroll in the <strong>AI Battlepass</strong> program provided by <strong>Mani DeepTech Solutions</strong>, we collect personal information required for program execution and communication:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-slate-600">
              <li>Full Name and Contact Phone / WhatsApp number</li>
              <li>Email address for LMS portal account creation and session updates</li>
              <li>Educational or professional background details for tailored guidance</li>
              <li>Submitted project files, assignments, and capstone code repositories</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
              <Lock className="w-5 h-5 text-emerald-600" />
              2. How We Use Your Information
            </h2>
            <p>
              Your data is strictly utilized to provide educational services, live session access, and support:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-slate-600">
              <li>Granting LMS platform access and tracking module completion</li>
              <li>Communicating class schedules, doubt sessions, and assignment feedback</li>
              <li>Issuing official certificates of completion upon project verification</li>
              <li>Providing career, portfolio, and capstone project guidance</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-orange-500" />
              3. Data Protection & Sharing
            </h2>
            <p>
              Mani DeepTech Solutions does not sell, rent, or trade your personal data to third parties. Information is only shared with authorized tools required for learning infrastructure (such as standard authentication services and LMS hosting providers).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              4. Contact & Inquiries
            </h2>
            <p>
              If you have any questions regarding your personal information or data privacy, contact Manideep Juvvala at <strong>+91 9381088104</strong> or via Instagram at <strong>@manideeptechsolutions</strong>.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
};

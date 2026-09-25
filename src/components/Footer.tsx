import React from 'react';
import { Phone, User, Cpu } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          
          {/* Left Brand info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/mani-deeptech-logo.png"
                alt="Mani DeepTech Solutions"
                className="h-9 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const sibling = e.currentTarget.nextElementSibling;
                  if (sibling) sibling.classList.remove('hidden');
                }}
              />
              <div className="hidden flex items-center gap-2 text-slate-900 font-extrabold text-lg">
                <Cpu className="w-5 h-5 text-blue-600" />
                <span>Mani DeepTech Solutions</span>
              </div>
            </div>

            <p className="text-xs font-extrabold tracking-widest text-emerald-700 uppercase">
              AI • ML • DEEPTECH • WEB APPS • MOBILE APPS
            </p>

            <p className="text-slate-600 text-xs leading-relaxed max-w-md font-medium">
              AI Battlepass is an independent online training program empowering developers, students, working professionals, and AI enthusiasts to build real-world AI applications.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2 text-xs font-bold text-slate-600">
              <li><a href="#hero" className="hover:text-blue-600 transition-colors">Home</a></li>
              <li><a href="#curriculum" className="hover:text-blue-600 transition-colors">Curriculum</a></li>
              <li><a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a></li>
              <li><a href="#tools" className="hover:text-blue-600 transition-colors">Tools</a></li>
              <li><a href="#pricing" className="hover:text-blue-600 transition-colors">Pricing</a></li>
              <li><a href="#faq" className="hover:text-blue-600 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">Direct Contact</h4>
            <div className="space-y-2 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-2 text-slate-900 font-bold">
                <User className="w-4 h-4 text-emerald-600" />
                <span>Manideep Juvvala</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-500" />
                <a href="tel:9381088104" className="hover:text-blue-600 transition-colors font-mono font-bold text-slate-900">
                  9381088104
                </a>
              </div>
              <div className="pt-2 text-[11px] text-slate-500 font-semibold">
                Mode: Live Online Training
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-semibold">
          <div>
            © 2026 Mani DeepTech Solutions. All rights reserved.
          </div>
          <div className="text-[11px] text-slate-600 font-bold">
            AI Battlepass: Level Up From Python to Agentic AI
          </div>
        </div>

      </div>
    </footer>
  );
};

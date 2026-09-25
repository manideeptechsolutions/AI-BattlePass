import React from 'react';
import { Phone, User } from 'lucide-react';
import { WhatsAppIcon, InstagramIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          
          {/* Left Brand info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/Logo.jpeg"
                alt="Mani DeepTech Solutions"
                className="h-12 w-12 rounded-xl object-cover border border-slate-200 shadow-sm"
                onError={(e) => {
                  e.currentTarget.src = '/assets/mani-deeptech-logo.png';
                }}
              />
              <div>
                <h3 className="font-extrabold text-lg text-slate-900 leading-tight">
                  Mani DeepTech Solutions
                </h3>
                <p className="text-xs font-bold text-emerald-700 tracking-wider uppercase">
                  AI Battlepass Program
                </p>
              </div>
            </div>

            <p className="text-xs font-extrabold tracking-widest text-emerald-700 uppercase">
              AI • ML • DEEPTECH • WEB APPS • MOBILE APPS
            </p>

            <p className="text-slate-600 text-xs leading-relaxed max-w-md font-medium">
              AI Battlepass is a comprehensive online training program by <strong>Mani DeepTech Solutions</strong> empowering developers, students, working professionals, and AI enthusiasts to build real-world AI applications.
            </p>

            {/* Social Connect Badges */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://wa.me/919381088104?text=Hi%20Mani%2C%20I%20am%20interested%20in%20the%20AI%20Battlepass%20program!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp: 9381088104</span>
              </a>

              <a
                href="https://www.instagram.com/manideeptechsolutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-pink-50 hover:bg-pink-100 text-pink-800 border border-pink-200 text-xs font-bold transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-[#E1306C]" />
                <span>@manideeptechsolutions</span>
              </a>
            </div>
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
            <div className="space-y-2.5 text-xs text-slate-600 font-medium">
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

              {/* Quick Action Links for WhatsApp and Instagram */}
              <div className="pt-1 flex flex-col gap-2">
                <a
                  href="https://wa.me/919381088104?text=Hi%20Mani%2C%20I%20am%20interested%20in%20the%20AI%20Battlepass%20program!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-bold transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href="https://www.instagram.com/manideeptechsolutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-pink-700 hover:text-pink-800 font-bold transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 text-[#E1306C]" />
                  <span>Follow on Instagram</span>
                </a>
              </div>

              <div className="pt-1 text-[11px] text-slate-500 font-semibold">
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

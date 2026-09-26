import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Curriculum } from './components/Curriculum';
import { AudienceSection } from './components/AudienceSection';
import { ProjectBasedLearning } from './components/ProjectBasedLearning';
import { LiveTraining } from './components/LiveTraining';
import { TeachingApproach } from './components/TeachingApproach';
import { ToolsSection } from './components/ToolsSection';
import { LMSSection } from './components/LMSSection';
import { ProjectCategories } from './components/ProjectCategories';
import { CapstoneSection } from './components/CapstoneSection';
import { ProjectReport } from './components/ProjectReport';
import { PortfolioSection } from './components/PortfolioSection';
import { CompletionSection } from './components/CompletionSection';
import { CourseFormat } from './components/CourseFormat';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingConnect } from './components/FloatingWhatsApp';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsConditions } from './components/TermsConditions';

type ViewMode = 'home' | 'privacy' | 'terms';

export const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewMode>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#privacy') {
        setCurrentView('privacy');
        window.scrollTo(0, 0);
      } else if (hash === '#terms') {
        setCurrentView('terms');
        window.scrollTo(0, 0);
      } else if (hash === '' || hash === '#hero') {
        setCurrentView('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (view: ViewMode) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
    if (view === 'privacy') {
      window.location.hash = 'privacy';
    } else if (view === 'terms') {
      window.location.hash = 'terms';
    } else {
      window.location.hash = '';
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-500 selection:text-white relative">
      {/* Sticky Header Navbar */}
      <Navbar />

      {/* Floating WhatsApp and Instagram Quick Connect */}
      <FloatingConnect />

      {/* Main Content Area */}
      <main>
        {currentView === 'privacy' && (
          <PrivacyPolicy onBack={() => navigateTo('home')} />
        )}

        {currentView === 'terms' && (
          <TermsConditions onBack={() => navigateTo('home')} />
        )}

        {currentView === 'home' && (
          <>
            {/* 1. Hero Section */}
            <Hero />

            {/* 2. Interactive Curriculum */}
            <Curriculum />

            {/* 3. Who Is This For? */}
            <AudienceSection />

            {/* 4. Project-Based Learning */}
            <ProjectBasedLearning />

            {/* 5. Live Online Training Mockup */}
            <LiveTraining />

            {/* 6. Teaching Approach */}
            <TeachingApproach />

            {/* 7. Modern AI Tools */}
            <ToolsSection />

            {/* 8. LMS Experience Learning Hub */}
            <LMSSection />

            {/* 9. Real-World Project Categories */}
            <ProjectCategories />

            {/* 10. Final Capstone Project */}
            <CapstoneSection />

            {/* 11. Project Report Documentation */}
            <ProjectReport />

            {/* 12. Portfolio Building */}
            <PortfolioSection />

            {/* 13. Completion & Certification */}
            <CompletionSection />

            {/* 14. Course Format Metrics */}
            <CourseFormat />

            {/* 15. Standalone ₹1,200 Pricing Card */}
            <Pricing />

            {/* 16. Interactive FAQ Accordion */}
            <FAQ />

            {/* 17. Final High-Impact CTA */}
            <FinalCTA />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={(view) => navigateTo(view)} />
    </div>
  );
};

export default App;


import React from 'react';
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

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-500 selection:text-white">
      {/* Sticky Header Navbar */}
      <Navbar />

      {/* Main Page Flow Sections */}
      <main>
        {/* 1. Hero Section (with course fee ₹1,200 displayed) */}
        <Hero />

        {/* 2. Interactive Curriculum (Immediately after Hero) */}
        <Curriculum />

        {/* 3. Who Is This For? */}
        <AudienceSection />

        {/* 4. Project-Based Learning (7-step process) */}
        <ProjectBasedLearning />

        {/* 5. Live Online Training Mockup */}
        <LiveTraining />

        {/* 6. Teaching Approach (50% Concepts / 50% Hands-on) */}
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

        {/* 12. Portfolio Building (GitHub, Portfolio, LinkedIn, Resume) */}
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
      </main>

      {/* 18. Footer */}
      <Footer />
    </div>
  );
};

export default App;

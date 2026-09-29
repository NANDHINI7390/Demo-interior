/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LoadingAnimation } from './components/LoadingAnimation';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InteriorsSection } from './components/InteriorsSection';
import { HardwareSection } from './components/HardwareSection';
import { ProcessSignatureSection } from './components/ProcessSignatureSection';
import { ProjectsSection } from './components/ProjectsSection';
import { VisualizeSpaceSection } from './components/VisualizeSpaceSection';
import { AboutSection } from './components/AboutSection';
import { CustomerPortalPreview } from './components/CustomerPortalPreview';
import { ConsultationSection } from './components/ConsultationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { CustomerPortalModal } from './components/portal/CustomerPortalModal';
import { AdminDashboardModal } from './components/admin/AdminDashboardModal';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [consultationTopic, setConsultationTopic] = useState<string>('');

  // Future Digital Platform Modals
  const [portalOpen, setPortalOpen] = useState(false);
  const [portalInitialTab, setPortalInitialTab] = useState<string>('dashboard');
  const [adminOpen, setAdminOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id.replace('#', ''));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenConsultation = (topic?: string) => {
    if (topic) {
      setConsultationTopic(topic);
    }
    scrollToSection('consultation');
  };

  const handleOpenCustomerPortal = (tab: string = 'dashboard') => {
    setPortalInitialTab(tab);
    setPortalOpen(true);
  };

  const handleReplayIntro = () => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    setIsLoading(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F6F1] text-[#1C1D1A] font-sans antialiased selection:bg-[#62645A] selection:text-white">
      {/* 1. Improved Cinematic Loading Animation */}
      {isLoading && (
        <LoadingAnimation onComplete={() => setIsLoading(false)} />
      )}

      {/* Navigation (Sticky Header & Mobile Menu) */}
      <Navbar
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenPortal={handleOpenCustomerPortal}
        onOpenAdmin={() => setAdminOpen(true)}
        onReplayIntro={handleReplayIntro}
        onOpenSearch={() => setSearchOpen(true)}
      />

      {/* Main Content Layout */}
      <main className="relative">
        {/* 2. Homepage Hero Section with Auto-Slides & Classy Buttons */}
        <HeroSection
          onExploreInteriors={() => scrollToSection('interiors')}
          onExploreHardware={() => scrollToSection('hardware')}
          onConsultVar={() => handleOpenConsultation()}
        />

        {/* 3. Interiors Section */}
        <InteriorsSection
          onSelectCategory={(cat) => handleOpenConsultation(`Interiors: ${cat}`)}
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 4. Hardware Showroom Section */}
        <HardwareSection
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 5. Process / Signature Section */}
        <ProcessSignatureSection
          onViewProjects={() => scrollToSection('projects')}
        />

        {/* 6. Projects Editorial Gallery & Project Detail Modal */}
        <ProjectsSection
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 16. Visualize Your Space (AI Space Transformation WOW Feature) */}
        <VisualizeSpaceSection
          onConsult={(topic) => handleOpenConsultation(topic)}
        />

        {/* 8. About VAR */}
        <AboutSection />

        {/* 3. The VAR Digital Experience (Customer Portal Preview) */}
        <CustomerPortalPreview
          onOpenPortal={handleOpenCustomerPortal}
          onOpenAdmin={() => setAdminOpen(true)}
        />

        {/* 18. Consultation & Site Survey Form */}
        <ConsultationSection initialTopic={consultationTopic} />

        {/* 11. Contact & Showroom Section */}
        <ContactSection />
      </main>

      {/* 12. Footer */}
      <Footer onReplayIntro={handleReplayIntro} />

      {/* Search & Materials Quick Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigate={(anchor) => scrollToSection(anchor)}
      />

      {/* Interactive Customer Portal Full Modal */}
      <CustomerPortalModal
        isOpen={portalOpen}
        initialTab={portalInitialTab}
        onClose={() => setPortalOpen(false)}
      />

      {/* VAR Business Admin Hub Modal */}
      <AdminDashboardModal
        isOpen={adminOpen}
        onClose={() => setAdminOpen(false)}
      />
    </div>
  );
}

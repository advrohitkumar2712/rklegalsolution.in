/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PracticeSectorsGrid } from './components/PracticeSectorsGrid';
import { FirmProfile } from './components/FirmProfile';
import { Methodology } from './components/Methodology';
import { PrivateConsultation } from './components/PrivateConsultation';
import { ClientFeedbackSection } from './components/ClientFeedbackSection';
import { Footer } from './components/Footer';
import { RegulatoryDisclaimerModal } from './components/RegulatoryDisclaimerModal';
import { FIRM_DETAILS } from './data/firmData';

export default function App() {
  // Automatically show the Disclaimer Pop-up Modal when user first visits
  const [disclaimerOpen, setDisclaimerOpen] = useState<boolean>(() => {
    try {
      const accepted = sessionStorage.getItem('rk_disclaimer_session_accepted');
      return accepted !== 'true';
    } catch {
      return true;
    }
  });
  const [consultationMatterType, setConsultationMatterType] = useState<string>('Civil Matters');

  const handleAgreeDisclaimer = () => {
    try {
      sessionStorage.setItem('rk_disclaimer_session_accepted', 'true');
    } catch {
      // ignore storage disabled
    }
    setDisclaimerOpen(false);
  };

  const handleDeclineDisclaimer = () => {
    try {
      sessionStorage.removeItem('rk_disclaimer_session_accepted');
    } catch {
      // ignore
    }
  };

  const scrollToContact = (matterType?: string) => {
    if (matterType) {
      setConsultationMatterType(matterType);
    }
    const elem = document.querySelector('#contact');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#16181A] font-sans selection:bg-[#481216] selection:text-[#F9F8F6]">
      {/* 1. Global Navigation */}
      <Navbar
        onScheduleClick={() => scrollToContact()}
        onOpenDisclaimer={() => setDisclaimerOpen(true)}
      />

      {/* Main Page Flow */}
      <main>
        {/* 2. Hero Section with provided image & 24*7 badge */}
        <Hero onInitiateClick={() => scrollToContact()} />

        {/* 3. Areas of Practice (Civil, Criminal, Family, Corporate, Service Matters, Writ Matter) */}
        <PracticeSectorsGrid />

        {/* 4. About Chambers & Adv. Rohit Kumar with shifted Dhurwa location */}
        <FirmProfile onScheduleClick={() => scrollToContact()} />

        {/* 5. Clean 3-Step Legal Process */}
        <Methodology />

        {/* 6. Direct Contact & Consultation Form */}
        <PrivateConsultation
          initialMatterType={consultationMatterType}
          onOpenDisclaimerModal={() => setDisclaimerOpen(true)}
        />

        {/* 7. Client Feedback & Experience (Just above Footer) */}
        <ClientFeedbackSection />
      </main>

      {/* 8. Footer with Bar Council notice and shifted Dhurwa High Court address */}
      <Footer onOpenDisclaimer={() => setDisclaimerOpen(true)} />

      {/* Bar Council Regulatory Notice Modal (Auto opens on first visit) */}
      <RegulatoryDisclaimerModal
        isOpen={disclaimerOpen}
        onAgree={handleAgreeDisclaimer}
        onDecline={handleDeclineDisclaimer}
      />

      {/* Floating 24*7 Quick-Call Bar */}
      <aside
        aria-label="24*7 Emergency Legal Hotline"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 flex items-center"
      >
        <div className="flex items-center gap-3 px-4 py-2.5 bg-[#16181A] text-[#F9F8F6] border border-[#B8A38E]/50 shadow-2xl backdrop-blur-md">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <div className="flex flex-col">
            <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-[#B8A38E]">
              I AM AVAILABLE 24*7 · CALL ANYTIME
            </span>
            <div className="flex items-center gap-2 text-xs font-mono font-semibold">
              <a
                href={`tel:${FIRM_DETAILS.phone1}`}
                className="hover:text-[#B8A38E] transition-colors"
                title="Call 6204015323"
              >
                {FIRM_DETAILS.phone1}
              </a>
              <span className="text-white/40">/</span>
              <a
                href={`tel:${FIRM_DETAILS.phone2}`}
                className="hover:text-[#B8A38E] transition-colors"
                title="Call 8340439983"
              >
                {FIRM_DETAILS.phone2}
              </a>
            </div>
          </div>
          <a
            href={`tel:${FIRM_DETAILS.phone1}`}
            className="p-1.5 bg-[#481216] hover:bg-[#320B0F] text-[#F9F8F6] transition-colors ml-1"
            title="Call Now"
          >
            <Phone className="w-3.5 h-3.5" />
          </a>
        </div>
      </aside>
    </div>
  );
}

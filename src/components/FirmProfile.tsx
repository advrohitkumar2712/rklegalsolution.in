import React from 'react';
import { motion } from 'motion/react';
import { Scale, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import { FIRM_DETAILS } from '../data/firmData';

interface FirmProfileProps {
  onScheduleClick: () => void;
}

export const FirmProfile: React.FC<FirmProfileProps> = ({ onScheduleClick }) => {
  const deskImage = "/public/assets/aistudio/IMG-20261110-WA0009_d6fa39da.jpg";

  return (
    <section id="profile" className="py-20 lg:py-28 bg-[#F9F8F6] border-b border-[#B8A38E]/25">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Image with clean caption (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="p-2 sm:p-3 bg-[#EFECE6] border border-[#B8A38E]/30">
              <div className="relative overflow-hidden aspect-4/3 bg-[#16181A]">
                <img
                  src={deskImage}
                  alt="Gavel and scales of justice on advocate study table"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />

                {/* Overlaid Caption */}
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#F9F8F6]/95 border border-[#B8A38E]/40 shadow-xs">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#481216]">
                        CHAMBERS LEADERSHIP
                      </p>
                      <p className="font-serif text-sm font-semibold text-[#16181A]">
                        {FIRM_DETAILS.owner}
                      </p>
                    </div>
                    <span className="text-[11px] text-[#646460] font-sans text-right max-w-[170px] leading-tight">
                      Civil Court Ranchi · Jharkhand High Court · Patna · Delhi · Supreme Court
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Credentials (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3">
              <Scale className="w-4 h-4 text-[#481216]" />
              <span className="text-[11px] font-sans uppercase tracking-[0.25em] font-semibold text-[#646460]">
                ABOUT THE ADVOCATE &amp; CHAMBERS
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#16181A] font-medium tracking-tight mb-4 leading-tight">
              Dedicated Advocacy Under Adv. Rohit Kumar
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#646460] font-sans font-light leading-relaxed mb-6">
              <p>
                <strong className="font-semibold text-[#16181A]">{FIRM_DETAILS.name}</strong> is spearheaded by <strong className="font-semibold text-[#16181A]">{FIRM_DETAILS.owner}</strong>, providing authoritative, client-focused legal counsel and trial representation across key jurisdictions: <strong className="text-[#16181A] font-medium">Civil Court Ranchi, Jharkhand High Court (New High Court Complex, Dhurwa), Patna High Court, Delhi High Court, and the Supreme Court of India</strong>.
              </p>
              <p>
                With thorough preparation and strategic courtroom mastery, our chambers handle high-stakes disputes across Civil Matters, Criminal Trials &amp; Bails, Family Law, Corporate &amp; Commercial Law, Service Matters (Government employee disputes, disciplinary inquiries, pensions), and Writ Matters (Articles 226, 227 &amp; 32).
              </p>
            </div>

            {/* Core Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-xs font-sans text-[#16181A]">
              <div className="flex items-start gap-2.5 p-3 bg-[#EFECE6] border border-[#B8A38E]/30">
                <CheckCircle className="w-4 h-4 text-[#481216] shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-medium">Direct Advocate Immersion</strong>
                  <span className="text-[#646460]">Every brief is examined and argued under the personal oversight of Adv. Rohit Kumar.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 bg-[#EFECE6] border border-[#B8A38E]/30">
                <CheckCircle className="w-4 h-4 text-[#481216] shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-medium">Multijurisdictional Reach</strong>
                  <span className="text-[#646460]">Regular practice before Patna, Jharkhand &amp; Delhi High Courts and Supreme Court.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 bg-[#EFECE6] border border-[#B8A38E]/30">
                <CheckCircle className="w-4 h-4 text-[#481216] shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-medium">Clear &amp; Honest Legal Advice</strong>
                  <span className="text-[#646460]">Transparent analysis of statutory merits, case realities, and procedural remedies.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 bg-[#EFECE6] border border-[#B8A38E]/30">
                <CheckCircle className="w-4 h-4 text-[#481216] shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-medium">Confidential Client Relations</strong>
                  <span className="text-[#646460]">Total statutory attorney-client privilege and ethical advocacy.</span>
                </div>
              </div>
            </div>

            {/* 24*7 Note */}
            <div className="mb-4 inline-flex items-center gap-2 text-xs font-sans text-[#16181A]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-bold uppercase tracking-wider text-[11px] text-[#481216]">I AM AVAILABLE 24*7</span>
              <span className="text-[#646460] text-xs">— Call anytime for urgent court filings and bail hearings</span>
            </div>

            {/* Direct Contact Bar with Both Numbers */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onScheduleClick}
                className="px-6 py-3 text-xs font-sans font-semibold uppercase tracking-wider text-[#F9F8F6] bg-[#481216] hover:bg-[#320B0F] transition-colors cursor-pointer"
              >
                Schedule Case Consultation
              </button>

              <a
                href={`tel:${FIRM_DETAILS.phone1}`}
                className="inline-flex items-center gap-1.5 px-4 py-3 text-xs font-sans font-semibold text-[#16181A] border border-[#B8A38E]/50 hover:bg-[#EFECE6] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#481216]" />
                <span>Call {FIRM_DETAILS.phone1}</span>
              </a>

              <a
                href={`tel:${FIRM_DETAILS.phone2}`}
                className="inline-flex items-center gap-1.5 px-4 py-3 text-xs font-sans font-semibold text-[#16181A] border border-[#B8A38E]/50 hover:bg-[#EFECE6] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#481216]" />
                <span>Call {FIRM_DETAILS.phone2}</span>
              </a>

              <a
                href={`mailto:${FIRM_DETAILS.email}`}
                className="inline-flex items-center gap-1.5 text-xs text-[#646460] hover:text-[#481216] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#B8A38E]" />
                <span>{FIRM_DETAILS.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

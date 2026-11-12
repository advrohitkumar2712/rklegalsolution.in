import React from 'react';
import { ArrowUp, Scale, Phone, Mail, MapPin } from 'lucide-react';
import { FIRM_DETAILS, PRACTICE_AREAS } from '../data/firmData';

interface FooterProps {
  onOpenDisclaimer: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDisclaimer }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#16181A] text-[#F9F8F6] pt-14 pb-10 border-t border-[#B8A38E]/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Statutory Bar Council Notice Card */}
        <div className="mb-12 p-6 bg-[#1F2225] border border-[#B8A38E]/30 text-xs">
          <div className="flex items-start gap-3">
            <Scale className="w-5 h-5 text-[#B8A38E] shrink-0 mt-0.5" />
            <div className="space-y-1.5">
              <p className="font-sans uppercase font-bold tracking-wider text-[#B8A38E] text-[11px]">
                BAR COUNCIL OF INDIA REGULATORY DISCLAIMER
              </p>
              <p className="font-serif italic text-[#F9F8F6]/80 leading-relaxed text-xs sm:text-sm">
                &ldquo;As per the rules of the Bar Council of India, this website is meant solely for informational purposes and not for advertisement or solicitation of legal work. Accessing this site does not constitute an advocate-client relationship.&rdquo;
              </p>
              <button
                type="button"
                onClick={onOpenDisclaimer}
                className="text-xs text-[#B8A38E] hover:text-[#F9F8F6] underline"
              >
                Read Full Statutory Terms
              </button>
            </div>
          </div>
        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Firm Info (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <span className="font-serif text-2xl font-bold tracking-tight text-[#F9F8F6]">
              {FIRM_DETAILS.name}
            </span>
            <p className="text-[10px] font-sans uppercase font-medium tracking-[0.2em] text-[#B8A38E]">
              {FIRM_DETAILS.subname}
            </p>
            <div className="pt-2">
              <p className="text-xs font-semibold text-[#F9F8F6]">
                FIRM OWNER: {FIRM_DETAILS.owner}
              </p>
              <p className="text-xs text-[#B8A38E] mt-0.5 font-medium leading-relaxed">
                Civil Court Ranchi · Jharkhand High Court · Patna High Court · Delhi High Court · Supreme Court
              </p>
            </div>
            <p className="text-xs text-[#F9F8F6]/70 font-light leading-relaxed max-w-sm pt-1">
              Providing dedicated legal counsel and representation in Civil Matters, Criminal Trials, Family Law, Corporate &amp; Commercial Law, Service Matters, and Writ Matter.
            </p>
          </div>

          {/* Col 2: Practice Matters (4 cols) */}
          <div className="lg:col-span-4">
            <p className="text-xs font-sans uppercase tracking-widest text-[#B8A38E] font-semibold mb-3">
              Practice Matters
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#F9F8F6]/80 font-sans">
              {PRACTICE_AREAS.map((area) => (
                <li key={area.id}>
                  <a href="#practices" className="hover:text-[#F9F8F6] transition-colors">
                    {area.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Chambers & Both Numbers (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs text-[#F9F8F6]/80">
            <p className="text-xs font-sans uppercase tracking-widest text-[#B8A38E] font-semibold mb-3">
              Chambers &amp; Contact
            </p>

            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#B8A38E] shrink-0 mt-0.5" />
              <span>Chambers of Adv. Rohit Kumar, Near New Jharkhand High Court Complex, Dhurwa, Ranchi, Jharkhand 834004 (High Court shifted to Dhurwa; also regularly appearing before Civil Court Ranchi)</span>
            </div>

            <div className="flex items-start gap-2">
              <Phone className="w-4 h-4 text-[#B8A38E] shrink-0 mt-0.5" />
              <div className="flex flex-col text-xs">
                <span className="text-[10px] uppercase font-bold text-[#B8A38E] tracking-wider mb-0.5">
                  I AM AVAILABLE 24*7 · CALL ANYTIME
                </span>
                <div className="flex flex-col font-mono">
                  <a href={`tel:${FIRM_DETAILS.phone1}`} className="hover:text-[#F9F8F6]">
                    {FIRM_DETAILS.formattedPhone1}
                  </a>
                  <a href={`tel:${FIRM_DETAILS.phone2}`} className="hover:text-[#F9F8F6]">
                    {FIRM_DETAILS.formattedPhone2}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Mail className="w-4 h-4 text-[#B8A38E] shrink-0 mt-0.5" />
              <a href={`mailto:${FIRM_DETAILS.email}`} className="hover:text-[#F9F8F6] break-all">
                {FIRM_DETAILS.email}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#F9F8F6]/60">
          <p>
            &copy; R.K LEGAL SOLUTION LLP · CHAMBERS OF {FIRM_DETAILS.owner}.
          </p>

          <div className="flex items-center gap-4 text-[11px]">
            <button onClick={onOpenDisclaimer} className="hover:text-[#F9F8F6] cursor-pointer">
              Terms of Legal Practice
            </button>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-[#F9F8F6] cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

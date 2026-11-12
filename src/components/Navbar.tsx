import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { FIRM_DETAILS } from '../data/firmData';

interface NavbarProps {
  onScheduleClick: () => void;
  onOpenDisclaimer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onScheduleClick, onOpenDisclaimer }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Practices', href: '#practices' },
    { name: 'About Chambers', href: '#profile' },
    { name: 'Our Process', href: '#process' },
    { name: 'Client Feedback', href: '#feedback' },
    { name: 'Contact & Inquiry', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Utility Bar for Courts & Both Phone Numbers */}
      <div className="bg-[#16181A] text-[#F9F8F6] text-xs py-2 px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-sans tracking-wide">
            <span className="text-[#B8A38E] font-semibold">{FIRM_DETAILS.owner}</span>
            <span className="text-white/40">·</span>
            <span className="text-[#F9F8F6]/90 font-medium">
              Civil Court Ranchi · Jharkhand High Court · Patna High Court · Delhi High Court · Supreme Court
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px]">
            <div className="flex items-center gap-1.5 px-2.5 py-0.5 bg-[#481216] border border-[#B8A38E]/50 text-[#F9F8F6] text-[10px] font-sans font-bold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>I AM AVAILABLE 24*7</span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={`tel:${FIRM_DETAILS.phone1}`}
                className="flex items-center gap-1 text-[#F9F8F6] hover:text-[#B8A38E] transition-colors"
                title="Call 6204015323 (Available 24*7)"
              >
                <Phone className="w-3 h-3 text-[#B8A38E]" />
                <span className="font-mono">{FIRM_DETAILS.phone1}</span>
              </a>
              <span className="text-white/30">/</span>
              <a
                href={`tel:${FIRM_DETAILS.phone2}`}
                className="flex items-center gap-1 text-[#F9F8F6] hover:text-[#B8A38E] transition-colors"
                title="Call 8340439983 (Available 24*7)"
              >
                <span className="font-mono">{FIRM_DETAILS.phone2}</span>
              </a>
            </div>

            <span className="text-white/30 hidden sm:inline">|</span>

            <a
              href={`mailto:${FIRM_DETAILS.email}`}
              className="hidden lg:flex items-center gap-1 text-[#F9F8F6]/90 hover:text-[#B8A38E] transition-colors"
            >
              <Mail className="w-3 h-3 text-[#B8A38E]" />
              <span>{FIRM_DETAILS.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 backdrop-blur-md ${
          isScrolled
            ? 'bg-[#F9F8F6]/95 shadow-sm border-b border-[#B8A38E]/30 py-3'
            : 'bg-[#F9F8F6]/90 border-b border-[#B8A38E]/25 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
          {/* Brandmark */}
          <a
            href="#"
            className="group flex flex-col focus:outline-none"
          >
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#16181A] transition-colors group-hover:text-[#481216]">
              {FIRM_DETAILS.name}
            </span>
            <div className="flex flex-wrap items-center gap-1.5 text-[9px] font-sans uppercase font-medium tracking-[0.18em] text-[#646460] mt-0.5">
              <span>{FIRM_DETAILS.subname}</span>
              <span className="text-[#B8A38E]">·</span>
              <span className="text-[#481216] font-semibold">{FIRM_DETAILS.owner}</span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-sans font-medium tracking-wide text-[#16181A]/85">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="relative py-1 hover:text-[#481216] transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2.5">
            <a
              href={`tel:${FIRM_DETAILS.phone1}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-sans font-semibold tracking-wide text-[#16181A] border border-[#B8A38E]/40 hover:border-[#16181A] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#481216]" />
              <span>{FIRM_DETAILS.phone1}</span>
            </a>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onScheduleClick}
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 text-xs font-sans font-semibold uppercase tracking-wider text-[#F9F8F6] bg-[#481216] hover:bg-[#320B0F] transition-colors shadow-xs cursor-pointer whitespace-nowrap"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#16181A] hover:text-[#481216] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-[90px] z-30 bg-[#F9F8F6] border-b border-[#B8A38E]/30 px-6 py-6 shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              <div className="pb-3 border-b border-[#B8A38E]/20">
                <p className="text-[10px] uppercase font-sans tracking-widest text-[#646460]">
                  FIRM OWNER
                </p>
                <p className="font-serif text-base font-bold text-[#16181A]">
                  {FIRM_DETAILS.owner}
                </p>
                <p className="text-xs text-[#481216] font-medium leading-snug mt-1">
                  Civil Court Ranchi · Jharkhand High Court · Patna · Delhi · Supreme Court
                </p>
              </div>

              <div className="flex flex-col divide-y divide-[#B8A38E]/15">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="py-3 text-sm font-medium text-[#16181A] hover:text-[#481216] flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <span className="text-xs text-[#B8A38E]">→</span>
                  </a>
                ))}
              </div>

              <div className="pt-2 flex flex-col gap-2.5">
                <div className="flex items-center justify-between p-2.5 bg-[#16181A] text-[#F9F8F6] text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="font-bold uppercase tracking-wider text-[10px] text-[#B8A38E]">I AM AVAILABLE 24*7</span>
                  </div>
                  <span className="text-[10px] text-[#F9F8F6]/70">Call Anytime</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${FIRM_DETAILS.phone1}`}
                    className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-sans font-semibold tracking-wider text-[#16181A] bg-[#EFECE6] border border-[#B8A38E]/40"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#481216]" />
                    <span>{FIRM_DETAILS.phone1}</span>
                  </a>
                  <a
                    href={`tel:${FIRM_DETAILS.phone2}`}
                    className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-sans font-semibold tracking-wider text-[#16181A] bg-[#EFECE6] border border-[#B8A38E]/40"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#481216]" />
                    <span>{FIRM_DETAILS.phone2}</span>
                  </a>
                </div>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onScheduleClick();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 text-xs font-sans font-semibold tracking-wider uppercase text-[#F9F8F6] bg-[#481216]"
                >
                  <span>Book Consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDisclaimer();
                  }}
                  className="text-xs text-[#646460] py-1 text-center"
                >
                  Bar Council Regulatory Notice
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

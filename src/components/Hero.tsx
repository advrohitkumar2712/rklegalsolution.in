import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Phone, MessageSquare, Scale, MapPin } from 'lucide-react';
import { FIRM_DETAILS } from '../data/firmData';

interface HeroProps {
  onInitiateClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onInitiateClick }) => {
  const heroImage = "/public/assets/aistudio/IMG-20261110-WA0011_b680ec2c.jpg";

  return (
    <section className="relative pt-10 pb-16 lg:pt-14 lg:pb-22 border-b border-[#B8A38E]/25 bg-[#F9F8F6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Text Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Practice Courts Tag Strip */}
            <div className="mb-4 inline-flex flex-wrap items-center gap-1.5 px-3 py-1.5 bg-[#EFECE6] border border-[#B8A38E]/40 text-[#481216] text-[11px] font-sans font-semibold tracking-wider uppercase w-fit">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>Civil Court Ranchi · Jharkhand High Court · Patna High Court · Delhi High Court · Supreme Court</span>
            </div>

            {/* Firm Owner Lead */}
            <p className="text-xs font-sans uppercase tracking-[0.25em] font-semibold text-[#646460] mb-2">
              CHAMBERS OF {FIRM_DETAILS.owner}
            </p>

            {/* Main Headline */}
            <h1
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#16181A] font-medium tracking-tight mb-5 leading-tight"
              style={{ textWrap: 'balance' }}
            >
              Committed Legal Advocacy &amp; Decisive Courtroom Representation.
            </h1>

            {/* Summary */}
            <p className="text-sm sm:text-base text-[#646460] font-sans font-light leading-relaxed mb-6 max-w-xl">
              Headed by <strong className="font-semibold text-[#16181A]">{FIRM_DETAILS.owner}</strong>, providing dedicated counsel and litigation advocacy across <strong className="text-[#16181A] font-medium">Civil Court Ranchi, Jharkhand High Court (Dhurwa), Patna High Court, Delhi High Court, and the Supreme Court of India</strong>.
            </p>

            {/* Core Practice Highlights Strip (Includes Service Matters, NO RTI) */}
            <div className="mb-8 p-4 bg-[#EFECE6]/70 border border-[#B8A38E]/30">
              <p className="text-[10px] font-sans uppercase font-bold tracking-widest text-[#481216] mb-2">
                DEALING IN ALL LEGAL MATTERS:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs font-sans text-[#16181A]">
                <div className="flex items-center gap-1.5">
                  <span className="text-[#481216] font-bold">·</span>
                  <span>Civil Matters</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#481216] font-bold">·</span>
                  <span>Criminal Matters</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#481216] font-bold">·</span>
                  <span>Family Law</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#481216] font-bold">·</span>
                  <span>Corporate &amp; Commercial Law</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#481216] font-bold">·</span>
                  <span>Service Matters</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#481216] font-bold">·</span>
                  <span>Writ Matter</span>
                </div>
              </div>
            </div>

            {/* 24*7 Immediate Availability Callout */}
            <div className="mb-5 inline-flex flex-wrap items-center gap-2 px-3.5 py-2 bg-[#16181A] text-[#F9F8F6] border border-[#B8A38E]/50 text-xs font-sans w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
              <span className="font-bold tracking-wider uppercase text-[11px] text-[#B8A38E]">
                I AM AVAILABLE 24*7
              </span>
              <span className="text-[#F9F8F6]/80 text-[11px] font-normal">
                — Clients can call anytime for urgent legal counsel, bails &amp; court representation
              </span>
            </div>

            {/* Primary Action Buttons & Dual Phone Calls */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onInitiateClick}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-sans font-semibold tracking-wider uppercase text-[#F9F8F6] bg-[#481216] hover:bg-[#320B0F] transition-colors cursor-pointer shadow-xs"
              >
                <span>Initiate Legal Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.button>

              <div className="flex items-center gap-2">
                <a
                  href={`tel:${FIRM_DETAILS.phone1}`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-3 text-xs font-sans font-semibold tracking-wider text-[#16181A] bg-[#EFECE6] border border-[#B8A38E]/50 hover:bg-[#16181A] hover:text-[#F9F8F6] transition-colors"
                  title="Call 6204015323"
                >
                  <Phone className="w-3.5 h-3.5 text-[#481216]" />
                  <span>{FIRM_DETAILS.phone1}</span>
                </a>

                <a
                  href={`tel:${FIRM_DETAILS.phone2}`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-3 text-xs font-sans font-semibold tracking-wider text-[#16181A] bg-[#EFECE6] border border-[#B8A38E]/50 hover:bg-[#16181A] hover:text-[#F9F8F6] transition-colors"
                  title="Call 8340439983"
                >
                  <Phone className="w-3.5 h-3.5 text-[#481216]" />
                  <span>{FIRM_DETAILS.phone2}</span>
                </a>
              </div>

              <a
                href={`https://wa.me/91${FIRM_DETAILS.phone1}?text=Hello%20Adv.%20Rohit%20Kumar,%20I%20would%20like%20to%20consult%20regarding%20a%20legal%20matter.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-[#16181A] hover:text-[#481216] py-2 px-1 border-b border-[#B8A38E]"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#481216]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Visual Column (5 cols) with Provided Image */}
          <div className="lg:col-span-5 relative">
            <div className="p-2 sm:p-3 bg-[#EFECE6] border border-[#B8A38E]/30">
              <div className="relative overflow-hidden aspect-4/3 bg-[#16181A]">
                <img
                  src={heroImage}
                  alt="Law office scales of justice and judge gavel"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />

                {/* Overlaid Badge */}
                <div className="absolute bottom-3 left-3 right-3 p-3 bg-[#F9F8F6]/95 border border-[#B8A38E]/40">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-sans uppercase font-bold tracking-wider text-[#481216]">
                        {FIRM_DETAILS.owner}
                      </p>
                      <p className="font-serif text-xs text-[#16181A] leading-snug">
                        Civil Court Ranchi · Jharkhand High Court · Patna · Delhi · Supreme Court
                      </p>
                    </div>
                    <Scale className="w-5 h-5 text-[#B8A38E] shrink-0" />
                  </div>
                </div>
              </div>
            </div>

            {/* Direct contact strip below image */}
            <div className="mt-2.5 flex items-center justify-between text-[11px] font-sans text-[#646460]">
              <span>Call: {FIRM_DETAILS.phone1} / {FIRM_DETAILS.phone2}</span>
              <span className="truncate max-w-[200px]">{FIRM_DETAILS.email}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

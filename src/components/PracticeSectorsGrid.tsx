import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Plus, Minus, Scale } from 'lucide-react';
import { PRACTICE_AREAS } from '../data/firmData';

interface PracticeSectorsGridProps {
  onScheduleForSector?: (sectorTitle: string) => void;
}

export const PracticeSectorsGrid: React.FC<PracticeSectorsGridProps> = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="practices" className="py-20 lg:py-28 bg-[#F9F8F6] border-b border-[#B8A38E]/25">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#B8A38E]/25">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Scale className="w-4 h-4 text-[#481216]" />
              <span className="text-[11px] font-sans uppercase tracking-[0.25em] font-semibold text-[#646460]">
                AREAS OF PRACTICE
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#16181A] font-medium tracking-tight">
              Legal Services &amp; Representation
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#646460] font-sans max-w-md font-light leading-relaxed">
            Representing clients across Civil Court Ranchi, Jharkhand High Court, Patna High Court, Delhi High Court, and the Supreme Court of India.
          </p>
        </div>

        {/* 6-Card Grid: Civil, Criminal, Family, Corporate, RTI & Service, Appeals */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRACTICE_AREAS.map((practice) => {
            const isExpanded = expandedId === practice.id;

            return (
              <motion.div
                key={practice.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`p-6 sm:p-7 border transition-all duration-200 flex flex-col justify-between ${
                  isExpanded
                    ? 'bg-[#EFECE6] border-[#481216]/50 shadow-sm'
                    : 'bg-[#F9F8F6] border-[#B8A38E]/30 hover:border-[#16181A]/50 hover:bg-[#EFECE6]/40'
                }`}
              >
                <div>
                  {/* Top Bar with Number & Toggle */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#B8A38E]/20">
                    <span className="font-serif text-2xl font-light text-[#481216]">
                      {practice.number}
                    </span>
                    <button
                      type="button"
                      onClick={() => toggleExpand(practice.id)}
                      className="p-1 text-[#646460] hover:text-[#481216] transition-colors"
                      aria-label={`Toggle details for ${practice.title}`}
                    >
                      {isExpanded ? (
                        <Minus className="w-4 h-4 text-[#481216]" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#16181A] mb-3">
                    {practice.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-[#646460] font-sans font-light leading-relaxed mb-5">
                    {practice.shortDesc}
                  </p>

                  {/* Scope Checklist */}
                  <div className="pt-4 border-t border-[#B8A38E]/20">
                    <p className="text-[10px] font-sans uppercase font-bold tracking-widest text-[#646460] mb-2.5">
                      Scope of Representation:
                    </p>
                    <ul className="space-y-1.5 text-xs text-[#16181A]/85 font-sans">
                      {practice.scope.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#481216] font-bold">·</span>
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

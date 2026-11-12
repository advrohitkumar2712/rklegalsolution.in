import React from 'react';
import { WORK_PROCESS } from '../data/firmData';
import { Scale } from 'lucide-react';

export const Methodology: React.FC = () => {
  return (
    <section id="process" className="py-20 lg:py-24 bg-[#EFECE6]/40 border-b border-[#B8A38E]/25">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <Scale className="w-4 h-4 text-[#481216]" />
            <span className="text-[11px] font-sans uppercase tracking-[0.25em] font-semibold text-[#646460]">
              OUR APPROACH
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#16181A] font-medium tracking-tight mb-3">
            How We Handle Your Legal Matter
          </h2>
          <p className="text-sm sm:text-base text-[#646460] font-sans font-light leading-relaxed">
            From initial document examination to vigorous arguments in court, Adv. Rohit Kumar follows a disciplined, step-by-step litigation procedure.
          </p>
        </div>

        {/* 3 Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WORK_PROCESS.map((item) => (
            <div
              key={item.step}
              className="p-7 bg-[#F9F8F6] border border-[#B8A38E]/30 relative flex flex-col justify-between"
            >
              <div>
                <span className="font-serif text-3xl font-light text-[#481216] mb-3 block">
                  {item.step}
                </span>
                <h3 className="font-serif text-xl font-semibold text-[#16181A] mb-2.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#646460] font-sans font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

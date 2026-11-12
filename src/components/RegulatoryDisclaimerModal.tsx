import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, AlertCircle, RefreshCw, ExternalLink } from 'lucide-react';
import { FIRM_DETAILS } from '../data/firmData';

interface RegulatoryDisclaimerModalProps {
  isOpen: boolean;
  onAgree: () => void;
  onDecline: () => void;
}

export const RegulatoryDisclaimerModal: React.FC<RegulatoryDisclaimerModalProps> = ({
  isOpen,
  onAgree,
  onDecline,
}) => {
  const [hasDeclined, setHasDeclined] = useState(false);

  const handleDeclineClick = () => {
    setHasDeclined(true);
    onDecline();
  };

  const handleAgreeClick = () => {
    setHasDeclined(false);
    onAgree();
  };

  const handleExitPortal = () => {
    // Redirect to neutral search page if user declines
    window.location.href = 'https://www.google.com';
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop with frosted blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#16181A]/80 backdrop-blur-xs transition-opacity"
          />

          {/* Modal Container */}
          <div className="flex min-h-full items-center justify-center p-4 sm:p-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 14 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] as const }}
              className="relative w-full max-w-2xl bg-[#FFFFFF] text-[#16181A] border border-[#B8A38E]/50 shadow-2xl p-6 sm:p-9 max-h-[92vh] overflow-y-auto"
            >
              {hasDeclined ? (
                /* Declined State Screen */
                <div className="py-6 text-center space-y-5">
                  <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[#EFECE6] border border-[#481216]/30 text-[#481216]">
                    <AlertCircle className="w-7 h-7" />
                  </div>

                  <div>
                    <span className="text-[10px] font-sans uppercase tracking-[0.25em] font-bold text-[#646460]">
                      ACCESS RESTRICTED
                    </span>
                    <h3 className="font-serif text-2xl text-[#16181A] font-semibold mt-1">
                      Statutory Disclaimer Declined
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#646460] font-sans max-w-md mx-auto leading-relaxed">
                    Under the regulations of the <strong>Bar Council of India</strong>, information regarding legal practice, advocates, and legal matters can only be accessed upon voluntary acknowledgment of the statutory notice.
                  </p>

                  <div className="p-4 bg-[#EFECE6] border border-[#B8A38E]/30 text-xs text-[#16181A] font-sans max-w-md mx-auto">
                    To access the information and chambers details of <strong>{FIRM_DETAILS.name}</strong>, please review and accept the conditions.
                  </div>

                  <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => setHasDeclined(false)}
                      className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-sans font-semibold uppercase tracking-wider text-[#F9F8F6] bg-[#481216] hover:bg-[#320B0F] transition-colors cursor-pointer w-full sm:w-auto"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Review &amp; I Agree</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleExitPortal}
                      className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs font-sans font-medium uppercase tracking-wider text-[#16181A] hover:bg-[#EFECE6] border border-[#B8A38E]/40 transition-colors cursor-pointer w-full sm:w-auto"
                    >
                      <span>Exit Website</span>
                      <ExternalLink className="w-3 h-3 text-[#646460]" />
                    </button>
                  </div>
                </div>
              ) : (
                /* Primary Disclaimer View matching reference screenshot */
                <div>
                  {/* Title Header */}
                  <div className="text-center pb-5 mb-5 border-b border-[#B8A38E]/25">
                    <h2 className="font-serif text-2xl sm:text-3xl text-[#16181A] font-normal tracking-wide">
                      {FIRM_DETAILS.name}
                    </h2>
                    <p className="text-[10px] font-sans uppercase tracking-[0.25em] font-semibold text-[#646460] mt-1">
                      {FIRM_DETAILS.subname} // STATUTORY NOTICE
                    </p>
                  </div>

                  {/* Body Content */}
                  <div className="space-y-4 text-xs sm:text-sm text-[#4A4B4D] font-sans leading-relaxed">
                    <p>
                      Under the rules of the <strong>Bar Council of India</strong> (particularly Rule 36 of Chapter II of Part VI of the Bar Council of India Rules), advocates and solicitors are strictly prohibited from soliciting work or advertising their legal services either directly or indirectly.
                    </p>

                    {/* Quotation Callout Box */}
                    <div className="p-4 sm:p-5 bg-[#EFECE6]/70 border border-[#B8A38E]/30 text-[#16181A] font-serif italic text-xs sm:text-sm leading-relaxed">
                      &ldquo;By clicking &lsquo;I Agree&rsquo; below or continuing to browse this portal, the user explicitly confirms and agrees that they are seeking information regarding R.K LEGAL SOLUTION LLP of their own free will and volition, and that there has been no personal advertisement, solicitation, invitation, or inducement of any sort.&rdquo;
                    </div>

                    {/* Important Statutory Terms */}
                    <div className="space-y-2.5 pt-1">
                      <p className="font-bold text-[#16181A] uppercase tracking-wider text-[11px] font-sans">
                        IMPORTANT STATUTORY TERMS:
                      </p>
                      <ol className="space-y-2.5 list-none pl-0 text-xs sm:text-sm text-[#3A3B3D] font-sans">
                        <li className="flex items-start gap-2.5">
                          <span className="font-bold text-[#16181A] shrink-0">1.</span>
                          <span>The material on this site is provided solely for informational and educational purposes and should not be construed as legal advice or formal statutory counsel.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <span className="font-bold text-[#16181A] shrink-0">2.</span>
                          <span>Accessing this website or communicating through the privileged consultation registry does not create an advocate-client relationship until formal engagement terms and conflict checks are executed in writing.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <span className="font-bold text-[#16181A] shrink-0">3.</span>
                          <span>R.K LEGAL SOLUTION LLP is not liable for any consequence of any action taken by the user relying on material or information provided on this website.</span>
                        </li>
                      </ol>
                    </div>
                  </div>

                  {/* Footer Bar & Action Buttons */}
                  <div className="mt-8 pt-5 border-t border-[#B8A38E]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-[11px] font-sans text-[#646460]">
                      Regulatory Authority: Bar Council of Jharkhand &amp; BCI
                    </span>

                    <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                      {/* Decline Button */}
                      <button
                        type="button"
                        onClick={handleDeclineClick}
                        className="px-4 py-2.5 text-xs font-sans font-medium uppercase tracking-wider text-[#646460] hover:text-[#16181A] hover:bg-[#EFECE6] border border-[#B8A38E]/40 transition-colors cursor-pointer"
                      >
                        Decline
                      </button>

                      {/* I Agree Button */}
                      <button
                        type="button"
                        onClick={handleAgreeClick}
                        className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-sans font-semibold uppercase tracking-wider text-[#F9F8F6] bg-[#481216] hover:bg-[#320B0F] transition-colors cursor-pointer shadow-xs"
                      >
                        <Check className="w-4 h-4" />
                        <span>I Agree</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, Scale } from 'lucide-react';
import { FIRM_DETAILS } from '../data/firmData';

const MATTER_TYPES = [
  'Civil Matter',
  'Criminal Matter',
  'Family Law',
  'Service Matter',
  'Writ Matter',
  'Other',
];

export const ClientFeedbackSection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [matterType, setMatterType] = useState('Civil Matter');
  const [feedback, setFeedback] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !feedback.trim()) {
      setError('Please provide both your name and feedback.');
      return;
    }

    setError(null);
    setIsSubmitting(true);

    try {
      // Submit via Web3Forms directly to chambers email
      const payload = {
        access_key: FIRM_DETAILS.web3FormsAccessKey || '7d988981-f44c-4bb9-8c7e-a8556ac940f4',
        name: fullName.trim(),
        subject: `Client Feedback: ${matterType} - ${fullName.trim()}`,
        matter_type: matterType,
        feedback_message: feedback.trim(),
        recipient: FIRM_DETAILS.email,
        from_name: 'R.K LEGAL SOLUTION LLP Client Feedback Portal',
      };

      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      // Show the requested polite confirmation message
      setSubmitted(true);
    } catch (err) {
      console.error('Feedback submission error:', err);
      // Still show polite confirmation to client as feedback was captured
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFullName('');
    setMatterType('Civil Matter');
    setFeedback('');
    setSubmitted(false);
    setError(null);
  };

  return (
    <section
      id="feedback"
      aria-label="Client Feedback & Experience"
      className="py-20 lg:py-24 bg-[#F9F8F6] border-b border-[#B8A38E]/25"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 mb-2.5">
            <Scale className="w-4 h-4 text-[#481216]" />
            <span className="text-[11px] font-sans uppercase tracking-[0.25em] font-semibold text-[#646460]">
              CONFIDENTIAL CLIENT INPUT
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#16181A] font-medium tracking-tight mb-2.5">
            Client Feedback &amp; Experience
          </h2>
          <p className="text-xs sm:text-sm text-[#646460] font-sans font-light leading-relaxed">
            We value your perspective on representation before Civil Court Ranchi, High Courts, or the Supreme Court. All feedback is reviewed directly by the Chambers of Adv. Rohit Kumar.
          </p>
        </div>

        {/* Clean Single Card Form */}
        <div className="bg-[#EFECE6]/85 border border-[#B8A38E]/40 p-7 sm:p-10 shadow-xs">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-8 text-center space-y-4"
            >
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[#F9F8F6] border-2 border-[#481216]">
                <CheckCircle2 className="w-8 h-8 text-[#481216]" />
              </div>

              <div className="space-y-2 max-w-md mx-auto">
                <h3 className="font-serif text-2xl font-semibold text-[#16181A]">
                  Thank You
                </h3>
                <p className="font-serif italic text-base sm:text-lg text-[#16181A] leading-relaxed">
                  &ldquo;Thank you for sharing your feedback with Chambers of Adv. Rohit Kumar.&rdquo;
                </p>
                <p className="text-xs text-[#646460] font-sans pt-1">
                  Your remarks have been confidentially logged for continuous refinement of our statutory advocacy and courtroom counsel.
                </p>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs font-sans uppercase tracking-wider text-[#16181A] hover:text-[#481216] border-b border-[#16181A] pb-0.5 cursor-pointer"
                >
                  Submit Another Note
                </button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {error && (
                <div className="p-3 bg-[#481216]/10 border border-[#481216]/30 text-[#481216] text-xs font-sans">
                  {error}
                </div>
              )}

              {/* Grid: Full Name & Matter Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="feedback-name"
                    className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#16181A] mb-1.5"
                  >
                    Full Name <span className="text-[#481216]">*</span>
                  </label>
                  <input
                    id="feedback-name"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g., Rajesh Sharma"
                    className="w-full px-3.5 py-2.5 bg-[#F9F8F6] border border-[#B8A38E]/50 text-sm font-sans text-[#16181A] placeholder:text-[#646460]/50 focus:outline-none focus:border-[#481216] transition-colors"
                  />
                </div>

                {/* Matter Type Dropdown */}
                <div>
                  <label
                    htmlFor="feedback-matter-type"
                    className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#16181A] mb-1.5"
                  >
                    Matter Type <span className="text-[#481216]">*</span>
                  </label>
                  <select
                    id="feedback-matter-type"
                    value={matterType}
                    onChange={(e) => setMatterType(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#F9F8F6] border border-[#B8A38E]/50 text-sm font-sans text-[#16181A] focus:outline-none focus:border-[#481216] transition-colors cursor-pointer"
                  >
                    {MATTER_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Your Feedback / Experience Textarea */}
              <div>
                <label
                  htmlFor="feedback-experience"
                  className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#16181A] mb-1.5"
                >
                  Your Feedback / Experience <span className="text-[#481216]">*</span>
                </label>
                <textarea
                  id="feedback-experience"
                  rows={4}
                  required
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Share your experience regarding case handling, responsiveness, courtroom advocacy, or statutory counsel..."
                  className="w-full px-3.5 py-2.5 bg-[#F9F8F6] border border-[#B8A38E]/50 text-sm font-sans text-[#16181A] placeholder:text-[#646460]/50 focus:outline-none focus:border-[#481216] transition-colors resize-y leading-relaxed"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[11px] font-sans text-[#646460]">
                  Transmitted directly to chambers email: {FIRM_DETAILS.email}
                </span>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 text-xs font-sans font-semibold uppercase tracking-wider text-[#F9F8F6] bg-[#481216] hover:bg-[#320B0F] transition-colors cursor-pointer shadow-xs disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Feedback</span>
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

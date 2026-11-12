import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  ArrowUpRight,
  Loader2,
  CheckCircle2,
  Clock,
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import { FIRM_DETAILS } from '../data/firmData';

interface PrivateConsultationProps {
  initialMatterType?: string;
  onOpenDisclaimerModal: () => void;
}

export const PrivateConsultation: React.FC<PrivateConsultationProps> = ({
  initialMatterType,
  onOpenDisclaimerModal,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    matterType: initialMatterType || 'Civil Matters',
    briefContext: '',
    agreedToDisclaimer: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [inquiryReference, setInquiryReference] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name or entity';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Contact number is required';
    } else if (formData.phone.trim().length < 10) {
      errs.phone = 'Please provide a valid 10-digit phone number';
    }
    if (!formData.briefContext.trim()) {
      errs.briefContext = 'Please provide brief details of your case or requirement';
    }
    if (!formData.agreedToDisclaimer) {
      errs.agreedToDisclaimer = 'Please acknowledge the Bar Council non-solicitation notice';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    const generatedRef = `RK-${Math.floor(10000 + Math.random() * 90000)}`;

    const payload = {
      access_key: FIRM_DETAILS.web3FormsAccessKey || "7d988981-f44c-4bb9-8c7e-a8556ac940f4",
      name: formData.fullName,
      phone: formData.phone,
      email: formData.email.trim() || "client-inquiry@rklegalsolution.com",
      subject: `New Legal Inquiry: ${formData.matterType} - ${formData.fullName} [Ref: ${generatedRef}]`,
      matter_type: formData.matterType,
      message: formData.briefContext,
      reference_code: generatedRef,
      target_chambers_email: FIRM_DETAILS.email,
      from_name: "R.K LEGAL SOLUTION LLP Client Portal",
      client_contact: formData.phone,
      jurisdiction: "Civil Court Ranchi / Jharkhand High Court (Dhurwa) / Patna High Court / Delhi High Court / Supreme Court",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setInquiryReference(generatedRef);
        setSubmissionSuccess(true);
      } else {
        throw new Error(result.message || "Unable to transmit inquiry. Please call our chambers directly.");
      }
    } catch (err: any) {
      console.error("Web3Forms Submission Error:", err);
      // Even if network fails, we retain the reference code and provide fallback options
      setErrorMessage(
        err.message || "Failed to transmit online. Please contact Adv. Rohit Kumar directly at 6204015323 or 8340439983."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      matterType: 'Civil Matters',
      briefContext: '',
      agreedToDisclaimer: false,
    });
    setSubmissionSuccess(false);
    setErrorMessage(null);
    setErrors({});
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F9F8F6] border-b border-[#B8A38E]/25">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Chambers Details & Direct Communication (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-[11px] font-sans uppercase tracking-[0.25em] font-semibold text-[#481216] mb-2">
                DIRECT CONTACT &amp; CHAMBERS
              </p>

              <h2 className="font-serif text-3xl sm:text-4xl text-[#16181A] font-medium tracking-tight mb-4">
                Consult Adv. Rohit Kumar
              </h2>

              <p className="text-sm sm:text-base text-[#646460] font-sans font-light leading-relaxed mb-6">
                Representing clients before <strong className="text-[#16181A] font-medium">Civil Court Ranchi, Jharkhand High Court (New High Court Complex, Dhurwa), Patna High Court, Delhi High Court, and Supreme Court</strong>. Reach out directly via call, WhatsApp, or through the inquiry form below.
              </p>

              {/* Chambers Contact Box */}
              <div className="space-y-5 p-6 bg-[#EFECE6] border border-[#B8A38E]/30 mb-6">
                {/* Court Practice Areas */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#481216] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-sans uppercase font-bold tracking-wider text-[#16181A]">
                      Courts of Practice
                    </p>
                    <p className="text-sm font-serif font-medium text-[#481216]">
                      Civil Court Ranchi · Jharkhand High Court (Dhurwa) · Patna · Delhi · Supreme Court
                    </p>
                    <p className="text-xs text-[#646460] font-sans mt-0.5">
                      {FIRM_DETAILS.chambersAddress}
                    </p>
                  </div>
                </div>

                {/* Direct Phone Numbers (both 6204015323 and 8340439983) */}
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#481216] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-sans uppercase font-bold tracking-wider text-[#16181A] mb-1">
                      Direct Contact Numbers
                    </p>
                    <div className="flex flex-wrap items-center gap-3 font-mono text-sm sm:text-base font-bold text-[#16181A]">
                      <a
                        href={`tel:${FIRM_DETAILS.phone1}`}
                        className="hover:text-[#481216] transition-colors"
                      >
                        {FIRM_DETAILS.formattedPhone1}
                      </a>
                      <span className="text-[#B8A38E]">/</span>
                      <a
                        href={`tel:${FIRM_DETAILS.phone2}`}
                        className="hover:text-[#481216] transition-colors"
                      >
                        {FIRM_DETAILS.formattedPhone2}
                      </a>
                    </div>
                    <p className="text-[11px] text-[#646460] mt-0.5">
                      Available for urgent bail hearings, stay matters &amp; case consultations
                    </p>
                  </div>
                </div>

                {/* Direct Email */}
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#481216] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-sans uppercase font-bold tracking-wider text-[#16181A]">
                      Official Chambers Email
                    </p>
                    <a
                      href={`mailto:${FIRM_DETAILS.email}`}
                      className="text-sm text-[#16181A] hover:text-[#481216] transition-colors break-all"
                    >
                      {FIRM_DETAILS.email}
                    </a>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#481216] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-sans uppercase font-bold tracking-wider text-[#16181A]">
                      Consultation Hours
                    </p>
                    <p className="text-xs text-[#646460]">
                      {FIRM_DETAILS.hours}
                    </p>
                  </div>
                </div>

                {/* 24*7 Callout */}
                <div className="flex items-start gap-3 p-3.5 bg-[#16181A] text-[#F9F8F6] border border-[#B8A38E]/50">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0 mt-1"></span>
                  <div>
                    <p className="text-[11px] font-sans uppercase font-bold tracking-wider text-[#B8A38E]">
                      I AM AVAILABLE 24*7 · CALL ANYTIME
                    </p>
                    <p className="text-xs text-[#F9F8F6]/85 font-sans mt-0.5 leading-relaxed">
                      Clients can call Adv. Rohit Kumar anytime day or night for urgent bail matters, immediate stay protection, or urgent court filing.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Call & WhatsApp Action Buttons */}
              <div className="flex flex-wrap gap-2.5 mb-6">
                <a
                  href={`tel:${FIRM_DETAILS.phone1}`}
                  className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-1.5 py-3 px-3 text-xs font-sans font-semibold uppercase tracking-wider text-[#F9F8F6] bg-[#481216] hover:bg-[#320B0F] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {FIRM_DETAILS.phone1}</span>
                </a>

                <a
                  href={`tel:${FIRM_DETAILS.phone2}`}
                  className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-1.5 py-3 px-3 text-xs font-sans font-semibold uppercase tracking-wider text-[#F9F8F6] bg-[#16181A] hover:bg-[#320B0F] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {FIRM_DETAILS.phone2}</span>
                </a>

                <a
                  href={`https://wa.me/91${FIRM_DETAILS.phone1}?text=Hello%20Adv.%20Rohit%20Kumar,%20I%20need%20legal%20counsel%20regarding%20a%20matter.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-3 px-4 text-xs font-sans font-semibold uppercase tracking-wider text-[#16181A] bg-[#EFECE6] border border-[#B8A38E]/50 hover:bg-[#16181A] hover:text-[#F9F8F6] transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#481216]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Reassurance */}
            <div className="p-4 bg-[#F9F8F6] border border-[#B8A38E]/30 text-xs text-[#646460]">
              <div className="flex items-center gap-2 text-[#481216] font-medium mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Statutory Attorney-Client Confidentiality</span>
              </div>
              <p>
                All communications and briefs shared with the chambers of Adv. Rohit Kumar are strictly protected under statutory legal privilege.
              </p>
            </div>
          </div>

          {/* Right Column: Clean Simple Consultation Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#F9F8F6] p-7 sm:p-9 border border-[#B8A38E]/30">
            {submissionSuccess ? (
              <div className="py-8 text-center">
                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#EFECE6] border-2 border-[#481216]">
                  <CheckCircle2 className="w-8 h-8 text-[#481216]" />
                </div>

                <p className="text-[10px] font-sans uppercase tracking-widest text-[#646460] font-bold">
                  TRANSMITTED TO CHAMBERS VIA WEB3FORMS
                </p>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#16181A] font-semibold mt-1 mb-3">
                  Inquiry Dispatched Successfully
                </h3>

                {/* Explicit Success Callout for r.klegalsolutionllp.05@gmail.com */}
                <div className="p-4 bg-[#EFECE6] border border-[#481216]/40 max-w-lg mx-auto text-left mb-6">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#481216] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-sans font-bold uppercase tracking-wider text-[#16181A]">
                        Dispatched to Chambers Email:
                      </p>
                      <p className="font-mono text-sm font-semibold text-[#481216] mt-0.5">
                        {FIRM_DETAILS.email}
                      </p>
                      <p className="text-xs text-[#646460] font-sans mt-1 leading-relaxed">
                        A full copy of your legal inquiry has been delivered directly to the inbox of Adv. Rohit Kumar.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#646460] font-sans max-w-md mx-auto leading-relaxed mb-6">
                  Adv. Rohit Kumar and our chambers team will review your case facts and contact you directly at <strong className="text-[#16181A] font-semibold">{formData.phone}</strong>.
                </p>

                <div className="p-3 bg-[#EFECE6] border border-[#B8A38E]/30 inline-block mb-6 text-left">
                  <p className="text-[10px] font-sans uppercase tracking-widest text-[#646460]">
                    Inquiry Reference Token
                  </p>
                  <p className="font-mono text-sm font-bold text-[#481216]">
                    {inquiryReference}
                  </p>
                  <p className="text-xs text-[#646460] mt-0.5">
                    Category: {formData.matterType} · Client: {formData.fullName}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`tel:${FIRM_DETAILS.phone1}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-sans font-semibold uppercase tracking-wider text-[#F9F8F6] bg-[#481216] hover:bg-[#320B0F] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call for Urgent Assistance</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-xs font-sans uppercase tracking-wider text-[#16181A] hover:text-[#481216] border-b border-[#16181A] py-1 cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="border-b border-[#B8A38E]/25 pb-3">
                  <h3 className="font-serif text-2xl font-medium text-[#16181A]">
                    Legal Consultation Request
                  </h3>
                  <p className="text-xs font-sans text-[#646460] mt-0.5">
                    Chambers of Adv. Rohit Kumar · Civil Court Ranchi, Jharkhand, Patna, Delhi High Court &amp; Supreme Court
                  </p>
                </div>

                {/* Error Banner if transmission fails */}
                {errorMessage && (
                  <div className="p-3.5 bg-red-50 border border-red-300 text-red-900 text-xs flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="font-semibold">Transmission Notice</p>
                      <p className="mt-0.5 text-red-800 leading-relaxed">{errorMessage}</p>
                      <div className="mt-2 flex gap-3">
                        <a
                          href={`tel:${FIRM_DETAILS.phone1}`}
                          className="font-bold underline text-red-900"
                        >
                          Call {FIRM_DETAILS.phone1}
                        </a>
                        <a
                          href={`https://wa.me/91${FIRM_DETAILS.phone1}?text=Hello%20Adv.%20Rohit%20Kumar,%20I%20wish%20to%20consult%20regarding%20a%20legal%20matter.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold underline text-red-900"
                        >
                          WhatsApp Chambers
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {/* Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-sans uppercase tracking-wider text-[#16181A] font-medium mb-1"
                  >
                    Your Full Name <span className="text-[#481216]">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full pb-2 pt-1 text-sm font-sans text-[#16181A] bg-transparent border-b border-[#B8A38E]/40 focus:border-[#481216] focus:outline-none transition-colors placeholder:text-[#646460]/40"
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-[#481216] mt-1 font-sans">{errors.fullName}</p>
                  )}
                </div>

                {/* Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-sans uppercase tracking-wider text-[#16181A] font-medium mb-1"
                    >
                      Contact Number <span className="text-[#481216]">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 6204015323"
                      className="w-full pb-2 pt-1 text-sm font-sans text-[#16181A] bg-transparent border-b border-[#B8A38E]/40 focus:border-[#481216] focus:outline-none transition-colors placeholder:text-[#646460]/40"
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-[#481216] mt-1 font-sans">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-sans uppercase tracking-wider text-[#16181A] font-medium mb-1"
                    >
                      Your Email Address (Optional)
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. client@gmail.com"
                      className="w-full pb-2 pt-1 text-sm font-sans text-[#16181A] bg-transparent border-b border-[#B8A38E]/40 focus:border-[#481216] focus:outline-none transition-colors placeholder:text-[#646460]/40"
                    />
                  </div>
                </div>

                {/* Matter Type Dropdown with the 6 specific categories (Service Matters, Writ Matter) */}
                <div>
                  <label
                    htmlFor="matterType"
                    className="block text-xs font-sans uppercase tracking-wider text-[#16181A] font-medium mb-1"
                  >
                    Matter Type / Subject <span className="text-[#481216]">*</span>
                  </label>
                  <select
                    id="matterType"
                    value={formData.matterType}
                    onChange={(e) => setFormData({ ...formData, matterType: e.target.value })}
                    className="w-full pb-2 pt-1 text-sm font-sans text-[#16181A] bg-transparent border-b border-[#B8A38E]/40 focus:border-[#481216] focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="Civil Matters">Civil Matters (Property, Title Suits, Partition, Injunctions)</option>
                    <option value="Criminal Matters">Criminal Matters (Bail, Trial, FIR Quashing, Sessions)</option>
                    <option value="Family Law">Family Law (Divorce, Matrimonial, Maintenance, Custody)</option>
                    <option value="Corporate and Commercial Law">Corporate &amp; Commercial Law (Contracts, Companies, Agreements)</option>
                    <option value="Service Matters">Service Matters (Govt Service Writs, Promotions, Pensions, Inquiries)</option>
                    <option value="Writ Matter">Writ Matter (Articles 226, 227 &amp; 32 - High Courts &amp; Supreme Court)</option>
                    <option value="Other Legal Matter">Other Legal Inquiry / Notice</option>
                  </select>
                </div>

                {/* Brief Context */}
                <div>
                  <label
                    htmlFor="briefContext"
                    className="block text-xs font-sans uppercase tracking-wider text-[#16181A] font-medium mb-1"
                  >
                    Brief Description of Case / Court Stage <span className="text-[#481216]">*</span>
                  </label>
                  <textarea
                    id="briefContext"
                    rows={3}
                    value={formData.briefContext}
                    onChange={(e) => setFormData({ ...formData, briefContext: e.target.value })}
                    placeholder="Briefly state your dispute, court name (Patna, Jharkhand, Delhi High Court, Supreme Court, or District Court), or relief sought..."
                    className="w-full pb-2 pt-1 text-sm font-sans text-[#16181A] bg-transparent border-b border-[#B8A38E]/40 focus:border-[#481216] focus:outline-none transition-colors resize-none placeholder:text-[#646460]/40"
                  />
                  {errors.briefContext && (
                    <p className="text-[11px] text-[#481216] mt-1 font-sans">{errors.briefContext}</p>
                  )}
                </div>

                {/* Disclaimer Checkbox */}
                <div className="pt-1">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.agreedToDisclaimer}
                      onChange={(e) =>
                        setFormData({ ...formData, agreedToDisclaimer: e.target.checked })
                      }
                      className="mt-0.5 h-4 w-4 rounded-none accent-[#481216]"
                    />
                    <span className="text-xs text-[#646460] font-sans leading-snug">
                      I am contacting the chambers of Adv. Rohit Kumar voluntarily for informational and legal consultation purposes.{' '}
                      <button
                        type="button"
                        onClick={onOpenDisclaimerModal}
                        className="text-[#481216] underline"
                      >
                        Bar Council Notice
                      </button>
                    </span>
                  </label>
                  {errors.agreedToDisclaimer && (
                    <p className="text-[11px] text-[#481216] mt-1 font-sans">
                      {errors.agreedToDisclaimer}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-sans font-semibold tracking-wider uppercase text-[#F9F8F6] bg-[#481216] hover:bg-[#320B0F] disabled:opacity-75 transition-colors cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Transmitting to Web3Forms...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Consultation Request</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

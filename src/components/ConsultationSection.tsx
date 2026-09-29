import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Shield, Calendar, Phone, MessageSquare, Sparkles } from 'lucide-react';

interface ConsultationSectionProps {
  initialTopic?: string;
}

export const ConsultationSection: React.FC<ConsultationSectionProps> = ({
  initialTopic = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: initialTopic || 'Modular Kitchens',
    approxRequirement: '',
    consultationDate: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="consultation" className="py-24 md:py-32 bg-[#1C1D1A] text-[#F7F6F1] relative overflow-hidden">
      {/* Subtle architectural grid lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(#D9DAD0 1px, transparent 1px), linear-gradient(90deg, #D9DAD0 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column (Requirement #18) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[1.5px] bg-[#62645A]" />
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#D9DAD0] uppercase">
                Consultation & Site Survey
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F7F6F1] font-normal leading-[1.08] tracking-tight">
              Planning Your Space?{' '}
              <span className="italic block text-[#EEEDE6]">
                Let's Build It Together.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#D9DAD0] leading-relaxed font-light">
              Tell us about your requirement and our team will get in touch with you. Visit our Anna Salai showroom to touch raw materials, test hardware mechanisms, and review 3D space layouts.
            </p>

            {/* 4 Value Propositions */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="flex items-center gap-3 p-3 bg-[#242521] border border-[#46483F] rounded-xs">
                <CheckCircle2 className="w-4 h-4 text-[#D9DAD0] shrink-0" />
                <span className="text-xs font-semibold text-[#F7F6F1]">Free Consultation</span>
              </div>

              <div className="flex items-center gap-3 p-3 bg-[#242521] border border-[#46483F] rounded-xs">
                <CheckCircle2 className="w-4 h-4 text-[#D9DAD0] shrink-0" />
                <span className="text-xs font-semibold text-[#F7F6F1]">Custom Design Solutions</span>
              </div>

              <div className="flex items-center gap-3 p-3 bg-[#242521] border border-[#46483F] rounded-xs">
                <CheckCircle2 className="w-4 h-4 text-[#D9DAD0] shrink-0" />
                <span className="text-xs font-semibold text-[#F7F6F1]">Premium Materials</span>
              </div>

              <div className="flex items-center gap-3 p-3 bg-[#242521] border border-[#46483F] rounded-xs">
                <CheckCircle2 className="w-4 h-4 text-[#D9DAD0] shrink-0" />
                <span className="text-xs font-semibold text-[#F7F6F1]">End-to-End Support</span>
              </div>
            </div>

            <div className="pt-2 text-xs text-[#77786F] flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#62645A]" />
              <span>Direct access to VAR senior interior architects · No sales middlemen</span>
            </div>
          </div>

          {/* Right Form Card (Requirement #18 fields) */}
          <div className="lg:col-span-6">
            <div className="bg-[#242521] border border-[#46483F] p-8 sm:p-10 rounded-xs shadow-2xl relative">
              {submitted ? (
                <div className="py-10 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 bg-[#62645A] text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-3xl text-white">
                    Consultation Request Received
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D9DAD0] max-w-sm mx-auto leading-relaxed">
                    Thank you, {formData.name || 'valued client'}. Our design team at VAR Interiors & Hardwares will contact you on <strong>{formData.phone || '+91 63696 91875'}</strong> within 24 hours to confirm your consultation.
                  </p>
                  <div className="pt-4 flex items-center justify-center gap-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-[#D9DAD0] uppercase tracking-widest underline hover:text-white cursor-pointer"
                    >
                      Submit another enquiry
                    </button>
                    <a
                      href={`https://wa.me/916369691875?text=Hello%20VAR%2C%20I%20have%20submitted%20a%20consultation%20request%20for%20${encodeURIComponent(formData.projectType)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs bg-[#46483F] text-white px-3 py-1.5 rounded-xs flex items-center gap-1.5"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.16em] font-semibold text-[#D9DAD0] mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. S. Ramanathan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#1C1D1A] border border-[#46483F] focus:border-[#62645A] text-white px-3.5 py-2.5 rounded-xs text-xs tracking-wide focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.16em] font-semibold text-[#D9DAD0] mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 63696 91875"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#1C1D1A] border border-[#46483F] focus:border-[#62645A] text-white px-3.5 py-2.5 rounded-xs text-xs tracking-wide focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.16em] font-semibold text-[#D9DAD0] mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="client@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#1C1D1A] border border-[#46483F] focus:border-[#62645A] text-white px-3.5 py-2.5 rounded-xs text-xs tracking-wide focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.16em] font-semibold text-[#D9DAD0] mb-1">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-[#1C1D1A] border border-[#46483F] focus:border-[#62645A] text-white px-3.5 py-2.5 rounded-xs text-xs tracking-wide focus:outline-none transition-colors"
                    >
                      <option value="Modular Kitchens">Modular Kitchens</option>
                      <option value="Wardrobes & Walk-in Closets">Wardrobes & Walk-in Closets</option>
                      <option value="Living Rooms & Media Units">Living Rooms & Media Units</option>
                      <option value="Bedrooms & Dressers">Bedrooms & Dressers</option>
                      <option value="Full Home Turnkey Interior">Full Home Turnkey Interior</option>
                      <option value="Architectural Hardware / Fittings">Architectural Hardware / Fittings</option>
                      <option value="Commercial & Office Fit-outs">Commercial & Office Fit-outs</option>
                    </select>
                  </div>

                  {/* Approximate Requirement */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.16em] font-semibold text-[#D9DAD0] mb-1">
                      Approximate Requirement
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 14x12 ft kitchen, L-shape with island, soft-close hardware"
                      value={formData.approxRequirement}
                      onChange={(e) => setFormData({ ...formData, approxRequirement: e.target.value })}
                      className="w-full bg-[#1C1D1A] border border-[#46483F] focus:border-[#62645A] text-white px-3.5 py-2.5 rounded-xs text-xs tracking-wide focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Preferred Consultation Date */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.16em] font-semibold text-[#D9DAD0] mb-1">
                      Preferred Consultation Date
                    </label>
                    <input
                      type="date"
                      value={formData.consultationDate}
                      onChange={(e) => setFormData({ ...formData, consultationDate: e.target.value })}
                      className="w-full bg-[#1C1D1A] border border-[#46483F] focus:border-[#62645A] text-white px-3.5 py-2.5 rounded-xs text-xs tracking-wide focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Buttons: Request Consultation & Chat on WhatsApp */}
                  <div className="pt-3 space-y-2.5">
                    <button
                      type="submit"
                      className="w-full bg-[#62645A] hover:bg-[#46483F] text-white text-xs uppercase tracking-[0.18em] font-bold py-3.5 px-6 rounded-xs transition-colors flex items-center justify-center gap-2 group cursor-pointer shadow-lg border border-[#62645A]"
                    >
                      <span>Request Consultation</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <a
                      href="https://wa.me/916369691875?text=Hello%20VAR%20Interiors%20%26%20Hardwares%2C%20I%20would%20like%20to%20schedule%20a%20consultation."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full border border-[#46483F] hover:bg-[#2A2C26] text-[#D9DAD0] hover:text-white text-xs uppercase tracking-[0.16em] font-semibold py-3 px-6 rounded-xs transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#62645A]" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>

                  <p className="text-[10px] text-center text-[#77786F] tracking-wide pt-1">
                    Strict privacy. Your contact details are never shared with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { MapPin, Phone, MessageSquare, Navigation, Clock, Building2 } from 'lucide-react';
import { VarLogo } from './VarLogo';

export const ContactSection: React.FC = () => {
  const address = '2nd Floor, KGS Towers, 1 & 3, 2-B, Anna Salai, Puducherry - 605001';
  const phone = '+91 63696 91875';

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#F7F6F1] text-[#1C1D1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Showroom Details (Panel 11) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-6 h-[1.5px] bg-[#62645A]" />
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#62645A] uppercase">
                Direct Contact & Showroom
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1C1D1A] font-normal tracking-tight">
              Visit Our Showroom
            </h2>

            <p className="text-sm sm:text-base text-[#46483F] leading-relaxed font-light">
              Experience the touch of tactile materials, test silent soft-close drawer slides, and discuss your floor plans directly with our senior designers.
            </p>

            <div className="pt-2 space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3.5 p-4 bg-[#EEEDE6] border border-[#D9DAD0] rounded-xs">
                <MapPin className="w-5 h-5 text-[#62645A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-[#1C1D1A]">
                    Showroom Address
                  </h4>
                  <p className="text-xs sm:text-sm text-[#46483F] mt-1 leading-relaxed">
                    2nd Floor, KGS Towers,
                    <br />
                    1 & 3, 2-B, Anna Salai,
                    <br />
                    Puducherry - 605001
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5 p-4 bg-[#EEEDE6] border border-[#D9DAD0] rounded-xs">
                <Phone className="w-5 h-5 text-[#62645A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-[#1C1D1A]">
                    Showroom Telephone
                  </h4>
                  <p className="text-sm font-mono text-[#1C1D1A] mt-1 font-semibold">
                    {phone}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3.5 p-4 bg-[#EEEDE6] border border-[#D9DAD0] rounded-xs">
                <Clock className="w-5 h-5 text-[#62645A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-[#1C1D1A]">
                    Working Hours
                  </h4>
                  <p className="text-xs text-[#46483F] mt-1">
                    Mon - Sat : 9:30 AM - 7:00 PM (Confirm timing)
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons (Panel 11) */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <a
                href={`tel:${phone.replace(/\s+/g, '')}`}
                className="bg-[#62645A] hover:bg-[#46483F] text-white py-3 px-4 rounded-xs text-xs uppercase tracking-[0.16em] font-bold flex items-center justify-center gap-2 transition-colors text-center shadow-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call</span>
              </a>

              <a
                href={`https://wa.me/916369691875?text=Hello%20VAR%20Interiors%20%26%20Hardwares%2C%20I%20would%20like%20to%20visit%20your%20Puducherry%20showroom.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#46483F] hover:bg-[#1C1D1A] text-white py-3 px-4 rounded-xs text-xs uppercase tracking-[0.16em] font-bold flex items-center justify-center gap-2 transition-colors text-center shadow-xs"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              <a
                href="https://maps.google.com/?q=KGS+Towers+Anna+Salai+Puducherry"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#62645A] text-[#46483F] hover:bg-[#EEEDE6] py-3 px-4 rounded-xs text-xs uppercase tracking-[0.16em] font-bold flex items-center justify-center gap-2 transition-colors text-center"
              >
                <Navigation className="w-3.5 h-3.5 text-[#62645A]" />
                <span>Directions</span>
              </a>
            </div>
          </div>

          {/* Right Stylized Architectural Map (Panel 11) */}
          <div className="lg:col-span-6">
            <div className="bg-[#EEEDE6] border border-[#D9DAD0] rounded-xs p-3 shadow-xl overflow-hidden relative">
              <div className="relative aspect-[4/3] rounded-xs overflow-hidden bg-[#ECEEE7] border border-[#D9DAD0]">
                {/* SVG Architectural Street Map Representation of Puducherry Anna Salai */}
                <svg
                  viewBox="0 0 600 450"
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Base Land Fill */}
                  <rect width="600" height="450" fill="#EEEDE6" />

                  {/* Coastal Bay Water (East of Puducherry) */}
                  <path
                    d="M 520 0 Q 510 200 535 450 L 600 450 L 600 0 Z"
                    fill="#D9DAD0"
                    opacity="0.6"
                  />
                  <text
                    x="555"
                    y="225"
                    transform="rotate(90 555 225)"
                    fill="#77786F"
                    fontSize="11"
                    letterSpacing="3"
                    fontFamily="sans-serif"
                    fontWeight="600"
                  >
                    BAY OF BENGAL
                  </text>

                  {/* Grid Urban Blocks */}
                  <rect x="60" y="40" width="100" height="70" fill="#E4E5DD" rx="2" />
                  <rect x="180" y="40" width="120" height="70" fill="#E4E5DD" rx="2" />
                  <rect x="320" y="40" width="140" height="70" fill="#E4E5DD" rx="2" />

                  <rect x="60" y="140" width="100" height="110" fill="#E4E5DD" rx="2" />
                  <rect x="180" y="140" width="120" height="110" fill="#E4E5DD" rx="2" />
                  <rect x="320" y="140" width="140" height="110" fill="#E4E5DD" rx="2" />

                  <rect x="60" y="280" width="100" height="120" fill="#E4E5DD" rx="2" />
                  <rect x="180" y="280" width="120" height="120" fill="#E4E5DD" rx="2" />
                  <rect x="320" y="280" width="140" height="120" fill="#E4E5DD" rx="2" />

                  {/* Secondary Streets */}
                  <line x1="0" y1="125" x2="520" y2="125" stroke="#FFFFFF" strokeWidth="8" />
                  <line x1="0" y1="265" x2="520" y2="265" stroke="#FFFFFF" strokeWidth="8" />
                  <line x1="170" y1="0" x2="170" y2="450" stroke="#FFFFFF" strokeWidth="8" />
                  <line x1="310" y1="0" x2="310" y2="450" stroke="#FFFFFF" strokeWidth="8" />

                  {/* Major Arterial Road: Anna Salai */}
                  <path
                    d="M 40 420 L 260 210 L 480 30"
                    stroke="#D0D2C7"
                    strokeWidth="24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M 40 420 L 260 210 L 480 30"
                    stroke="#62645A"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M 40 420 L 260 210 L 480 30"
                    stroke="#F7F6F1"
                    strokeWidth="1.5"
                    strokeDasharray="8 6"
                  />

                  {/* Road Label */}
                  <text
                    x="130"
                    y="315"
                    transform="rotate(-40 130 315)"
                    fill="#FFFFFF"
                    fontSize="11"
                    fontWeight="700"
                    letterSpacing="2"
                    fontFamily="sans-serif"
                  >
                    ANNA SALAI (MAIN ARTERY)
                  </text>

                  {/* Showroom Location Callout Pin */}
                  <g transform="translate(260, 210)">
                    {/* Pulsing ring */}
                    <circle r="22" fill="#62645A" opacity="0.25">
                      <animate
                        attributeName="r"
                        values="14;28;14"
                        dur="2.5s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0.35;0.05;0.35"
                        dur="2.5s"
                        repeatCount="indefinite"
                      />
                    </circle>

                    {/* Pin center */}
                    <circle r="12" fill="#46483F" stroke="#F7F6F1" strokeWidth="3" />
                    <circle r="4" fill="#F7F6F1" />
                  </g>
                </svg>

                {/* Showroom Marker Card Overlay (Matching Panel 11) */}
                <div className="absolute top-4 right-4 max-w-[240px] bg-[#F7F6F1] border border-[#62645A] p-3.5 rounded-xs shadow-lg">
                  <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-widest font-bold text-[#62645A] mb-1">
                    <Building2 className="w-3 h-3" />
                    <span>VAR Destination</span>
                  </div>
                  <div className="font-serif font-bold text-sm text-[#1C1D1A]">
                    VAR Interiors & Hardwares
                  </div>
                  <p className="text-[11px] text-[#77786F] mt-1 leading-snug">
                    2nd Floor, KGS Towers, Anna Salai, Puducherry 605001
                  </p>
                  <a
                    href="https://maps.google.com/?q=KGS+Towers+Anna+Salai+Puducherry"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-2 text-[10px] font-bold uppercase tracking-wider text-[#62645A] hover:underline"
                  >
                    <span>Open in Google Maps</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

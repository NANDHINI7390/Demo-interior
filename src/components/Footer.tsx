import React from 'react';
import { VarLogo } from './VarLogo';
import { Phone, MapPin, MessageSquare, Instagram, Facebook, Youtube, Twitter, ArrowUp } from 'lucide-react';

interface FooterProps {
  onReplayIntro?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onReplayIntro }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C1D1A] text-[#F7F6F1] border-t border-[#46483F] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid (Matching Panel 12) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-[#46483F]/70">
          {/* Brand Info & Logo Column */}
          <div className="lg:col-span-4 space-y-4">
            <VarLogo
              variant="light"
              size="lg"
              withTagline={true}
              className="items-start"
            />
            <p className="text-xs sm:text-sm text-[#D9DAD0]/80 max-w-sm pt-2 font-light leading-relaxed">
              Bespoke interior architecture, custom modular joinery, and precision mechanical hardware under one roof. Serving homes and commercial spaces with lasting distinction.
            </p>

            {onReplayIntro && (
              <div className="pt-2">
                <button
                  onClick={onReplayIntro}
                  className="text-[11px] uppercase tracking-[0.2em] text-[#D9DAD0] hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <span>↺ Replay Cinematic Opening</span>
                </button>
              </div>
            )}
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.22em] font-bold text-[#D9DAD0]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-[#77786F]">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#interiors" className="hover:text-white transition-colors">
                  Interiors
                </a>
              </li>
              <li>
                <a href="#hardware" className="hover:text-white transition-colors">
                  Hardware
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Our Services Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.22em] font-bold text-[#D9DAD0]">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs text-[#77786F]">
              <li>
                <a href="#interiors" className="hover:text-white transition-colors">
                  Modular Kitchens
                </a>
              </li>
              <li>
                <a href="#interiors" className="hover:text-white transition-colors">
                  Wardrobes
                </a>
              </li>
              <li>
                <a href="#interiors" className="hover:text-white transition-colors">
                  Living Rooms
                </a>
              </li>
              <li>
                <a href="#interiors" className="hover:text-white transition-colors">
                  Bedrooms
                </a>
              </li>
              <li>
                <a href="#interiors" className="hover:text-white transition-colors">
                  Office Interiors
                </a>
              </li>
              <li>
                <a href="#hardware" className="hover:text-white transition-colors">
                  Hardware
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.22em] font-bold text-[#D9DAD0]">
              Connect
            </h4>
            <ul className="space-y-3 text-xs text-[#D9DAD0]/90">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#62645A] shrink-0" />
                <a href="tel:+916369691875" className="hover:text-white transition-colors font-mono">
                  +91 63696 91875
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#62645A] shrink-0 mt-0.5" />
                <span>Puducherry - 605001</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#62645A] shrink-0" />
                <a
                  href="https://wa.me/916369691875"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp Direct
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3 text-[#D9DAD0]">
              <a
                href="#social"
                className="w-8 h-8 rounded-full border border-[#46483F] flex items-center justify-center hover:bg-[#62645A] hover:text-white hover:border-[#62645A] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="#social"
                className="w-8 h-8 rounded-full border border-[#46483F] flex items-center justify-center hover:bg-[#62645A] hover:text-white hover:border-[#62645A] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="#social"
                className="w-8 h-8 rounded-full border border-[#46483F] flex items-center justify-center hover:bg-[#62645A] hover:text-white hover:border-[#62645A] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
              <a
                href="#social"
                className="w-8 h-8 rounded-full border border-[#46483F] flex items-center justify-center hover:bg-[#62645A] hover:text-white hover:border-[#62645A] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#77786F]">
          <div>
            © 2026 VAR Interiors & Hardwares. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-[#D9DAD0] cursor-pointer">Privacy Policy</span>
            <span>·</span>
            <span className="hover:text-[#D9DAD0] cursor-pointer">Terms & Conditions</span>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React, { useState, useEffect } from 'react';
import { VarLogo } from './VarLogo';
import { Phone, MessageSquare, Search, Menu, X, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
  onOpenPortal: (tab?: string) => void;
  onOpenAdmin: () => void;
  onReplayIntro?: () => void;
  onOpenSearch?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenConsultation,
  onOpenPortal,
  onOpenAdmin,
  onReplayIntro,
  onOpenSearch,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Interiors', href: '#interiors' },
    { label: 'Hardware', href: '#hardware' },
    { label: 'Projects', href: '#projects' },
    { label: 'Visualize Space', href: '#visualize' },
    { label: 'Digital Platform', href: '#digital-experience' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#F7F6F1]/95 backdrop-blur-md border-b border-[#D9DAD0] py-3 shadow-xs text-[#1C1D1A]'
            : 'bg-gradient-to-b from-[#1C1D1A]/85 via-[#1C1D1A]/35 to-transparent py-4 text-[#F7F6F1]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center group">
            <VarLogo
              variant={isScrolled ? 'dark' : 'light'}
              size="md"
              withTagline={false}
              className="transition-transform group-hover:scale-[1.02]"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-[11px] uppercase tracking-[0.16em] font-medium transition-colors relative py-1 hover:text-[#62645A] ${
                  isScrolled ? 'text-[#46483F]' : 'text-[#EEEDE6]'
                } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#62645A] hover:after:w-full after:transition-all after:duration-300`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className={`p-2 rounded-full transition-colors cursor-pointer ${
                isScrolled
                  ? 'text-[#46483F] hover:bg-[#EEEDE6]'
                  : 'text-[#F7F6F1] hover:bg-white/10'
              }`}
              title="Search Materials & Spaces"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Customer Portal Launcher CTA */}
            <button
              onClick={() => onOpenPortal('dashboard')}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold tracking-wider uppercase transition-colors rounded-xs cursor-pointer border ${
                isScrolled
                  ? 'border-[#62645A] text-[#62645A] hover:bg-[#62645A] hover:text-white'
                  : 'border-white/40 text-white hover:bg-white/15'
              }`}
              title="Open Customer Project Portal"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Customer Portal</span>
            </button>

            {/* Main Consultation CTA */}
            <button
              onClick={onOpenConsultation}
              className="bg-[#62645A] hover:bg-[#46483F] text-[#F7F6F1] text-xs font-semibold uppercase tracking-[0.16em] px-4 py-2 rounded-xs transition-all duration-300 shadow-sm flex items-center gap-1.5 group cursor-pointer"
            >
              <span>Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenPortal('dashboard')}
              className="bg-[#62645A] text-[#F7F6F1] text-[10px] font-semibold uppercase tracking-wider px-2 py-1.5 rounded-xs flex items-center gap-1"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Portal</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-1.5 rounded-xs ${
                isScrolled ? 'text-[#1C1D1A]' : 'text-white'
              }`}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full Screen Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#1C1D1A] text-[#F7F6F1] flex flex-col p-6 animate-in fade-in duration-300 overflow-y-auto">
          <div className="flex justify-between items-center pb-5 border-b border-[#46483F]">
            <VarLogo variant="light" size="sm" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#D9DAD0] hover:text-white cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-4 py-6 flex-1 justify-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-2xl text-[#F7F6F1] hover:text-[#D9DAD0] tracking-wide transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="border-t border-[#46483F] pt-5 flex flex-col gap-3">
            {/* Mobile Portal Triggers */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPortal('dashboard');
              }}
              className="w-full bg-[#62645A] text-white py-3 text-center uppercase tracking-widest text-xs font-bold rounded-xs flex items-center justify-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Open Customer Portal</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmin();
              }}
              className="w-full border border-[#46483F] text-[#D9DAD0] py-2.5 text-center uppercase tracking-widest text-[11px] font-semibold rounded-xs"
            >
              VAR Business Admin Hub
            </button>

            <div className="grid grid-cols-2 gap-2 text-xs pt-1">
              <a
                href="tel:+916369691875"
                className="flex items-center justify-center gap-1.5 py-2.5 border border-[#46483F] text-[#D9DAD0] rounded-xs"
              >
                <Phone className="w-3.5 h-3.5" /> Call Showroom
              </a>
              <a
                href="https://wa.me/916369691875"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 border border-[#46483F] text-[#D9DAD0] rounded-xs"
              >
                <MessageSquare className="w-3.5 h-3.5" /> WhatsApp
              </a>
            </div>

            {onReplayIntro && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onReplayIntro();
                }}
                className="text-center text-[10px] text-[#77786F] uppercase tracking-widest pt-2 cursor-pointer"
              >
                ↺ Replay Architectural Intro
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

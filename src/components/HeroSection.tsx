import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Compass, ShieldCheck, Wrench, Layers } from 'lucide-react';

interface HeroSectionProps {
  onExploreInteriors: () => void;
  onExploreHardware: () => void;
  onConsultVar: () => void;
}

interface SlideItem {
  id: number;
  image: string;
  tag: string;
  room: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreInteriors,
  onExploreHardware,
  onConsultVar,
}) => {
  // Replaced first image with the third image (Luxury Wardrobe is now first, Kitchen is third)
  const slides: SlideItem[] = [
    {
      id: 0,
      image: '/src/assets/images/var_wardrobe_luxury_1790654724721.jpg',
      tag: 'BESPOKE WARDROBES & SUITES',
      room: 'Floor-to-Ceiling Dressing Suite',
    },
    {
      id: 1,
      image: '/src/assets/images/var_living_dining_1790654677757.jpg',
      tag: 'APARTMENT INTERIORS',
      room: 'Curated Dining & Living Residence',
    },
    {
      id: 2,
      image: '/src/assets/images/var_hero_kitchen_1790654633654.jpg',
      tag: 'MODULAR KITCHEN & LIVING',
      room: 'Contemporary Open Kitchen Suite',
    },
    {
      id: 3,
      image: '/src/assets/images/var_showroom_1790654664447.jpg',
      tag: 'PUDUCHERRY SHOWROOM',
      room: 'Materials & Hardware Experience Studio',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-sliding interval (5.5 seconds per slide)
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, slides.length]);

  return (
    <section
      id="home"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between overflow-hidden bg-[#1C1D1A]"
    >
      {/* 4 Auto-Sliding Background Interior Images with Smooth Cross-fade */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => {
          const isActive = currentSlide === index;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.room}
                referrerPolicy="no-referrer"
                className={`w-full h-full object-cover object-center transform transition-transform duration-[6500ms] ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
                style={{
                  filter: 'brightness(1.02) contrast(1.02) saturate(1.05)',
                }}
              />
            </div>
          );
        })}

        {/* Minimal Soft Vignette - Very light so the entire interior image remains clearly visible */}
        <div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(28,29,26,0.72) 0%, rgba(28,29,26,0.45) 32%, rgba(28,29,26,0.12) 60%, transparent 100%)',
          }}
        />

        {/* Subtle Top Gradient for Navigation Legibility */}
        <div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(28,29,26,0.65) 0%, transparent 22%, transparent 75%, rgba(28,29,26,0.85) 100%)',
          }}
        />
      </div>

      {/* Main Content Area - Reduced, refined text that opens up the image */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 md:pt-44 pb-16 w-full flex-1 flex flex-col justify-center">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Subtle architectural pre-header */}
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-6 h-[1.5px] bg-[#D9DAD0]" />
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D9DAD0] drop-shadow-sm">
              {slides[currentSlide].tag}
            </span>
          </div>

          {/* Headline - Clean & Punchy so image is not blocked */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F7F6F1] font-normal leading-[1.1] tracking-tight drop-shadow-md">
            Thoughtfully designed spaces.{' '}
            <span className="italic block mt-1 text-[#EEEDE6]">
              Built to last.
            </span>
          </h1>

          {/* Subtitle - Reduced to 1 concise, elegant sentence */}
          <p className="mt-4 text-xs sm:text-sm md:text-base text-[#D9DAD0] max-w-md font-light leading-relaxed drop-shadow-sm">
            Turnkey interior architecture, custom modular joinery, and European hardware for homes and apartments.
          </p>

          {/* Classy & Elegant Action Buttons: Explore Interiors, Explore Hardware, Consult VAR */}
          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            {/* Classy Primary Button: Explore Interiors */}
            <button
              onClick={onExploreInteriors}
              className="group relative inline-flex items-center gap-2.5 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xs bg-[#5B5D53] hover:bg-[#46483F] text-[#F7F6F1] text-xs font-medium uppercase tracking-[0.16em] border border-[#838677]/60 hover:border-[#D9DAD0] shadow-[0_8px_20px_-4px_rgba(28,29,26,0.5)] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer backdrop-blur-xs"
            >
              <span>Explore Interiors</span>
              <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-white/20">
                <ArrowRight className="w-3 h-3 text-[#F7F6F1]" />
              </span>
            </button>

            {/* Classy Contrasting Button: Explore Hardware */}
            <button
              onClick={onExploreHardware}
              className="group relative inline-flex items-center gap-2.5 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xs bg-[#F7F6F1]/95 hover:bg-[#FFFFFF] text-[#1C1D1A] text-xs font-medium uppercase tracking-[0.16em] border border-[#D9DAD0] hover:border-[#62645A] shadow-[0_8px_20px_-4px_rgba(28,29,26,0.3)] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer backdrop-blur-md"
            >
              <span>Explore Hardware</span>
              <span className="w-5 h-5 rounded-full bg-[#1C1D1A]/5 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-[#62645A]/10">
                <ArrowRight className="w-3 h-3 text-[#62645A]" />
              </span>
            </button>

            {/* Classy Architectural Button: Consult VAR */}
            <button
              onClick={onConsultVar}
              className="group relative inline-flex items-center gap-2 px-5 py-3 sm:py-3.5 rounded-xs border border-[#D9DAD0]/40 hover:border-[#D9DAD0] bg-black/25 hover:bg-black/40 text-[#D9DAD0] hover:text-white text-xs font-medium uppercase tracking-[0.16em] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer backdrop-blur-xs"
            >
              <span>Consult VAR</span>
              <ArrowRight className="w-3 h-3 text-[#D9DAD0] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Slide Indicators: Small elegant dots indicating auto-slide progression (No play/arrow buttons) */}
        <div className="mt-10 sm:mt-12 flex items-center justify-between">
          {/* Small Indicator Dots */}
          <div className="flex items-center gap-2.5">
            {slides.map((s, idx) => {
              const isActive = currentSlide === idx;
              return (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlide(idx)}
                  className="group py-2 px-1 cursor-pointer focus:outline-none"
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  <div
                    className={`h-2 rounded-full transition-all duration-500 relative flex items-center justify-center ${
                      isActive
                        ? 'w-7 bg-[#D9DAD0] shadow-[0_0_8px_rgba(217,218,208,0.5)]'
                        : 'w-2 bg-white/35 hover:bg-white/70'
                    }`}
                  >
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#46483F] animate-pulse" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Minimal Slide Counter */}
          <div className="text-[11px] font-mono tracking-widest text-[#D9DAD0]/80">
            0{currentSlide + 1} / 0{slides.length}
          </div>
        </div>
      </div>

      {/* Bottom Feature Strip (Panel 2 in mockup) */}
      <div className="relative z-30 w-full bg-[#1C1D1A]/90 backdrop-blur-md border-t border-[#46483F]/70 text-[#F7F6F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {/* Badge 1 */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-sm border border-[#62645A] bg-[#46483F]/50 flex items-center justify-center text-[#D9DAD0] shrink-0">
                <Compass className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-semibold tracking-wide text-[#F7F6F1]">Modern Designs</h4>
                <p className="text-[10px] sm:text-[11px] text-[#D9DAD0]/80">for Modern Living</p>
              </div>
            </div>

            {/* Badge 2 */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-sm border border-[#62645A] bg-[#46483F]/50 flex items-center justify-center text-[#D9DAD0] shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-semibold tracking-wide text-[#F7F6F1]">Premium Quality</h4>
                <p className="text-[10px] sm:text-[11px] text-[#D9DAD0]/80">Tested Raw Materials</p>
              </div>
            </div>

            {/* Badge 3 */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-sm border border-[#62645A] bg-[#46483F]/50 flex items-center justify-center text-[#D9DAD0] shrink-0">
                <Wrench className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-semibold tracking-wide text-[#F7F6F1]">Expert Installation</h4>
                <p className="text-[10px] sm:text-[11px] text-[#D9DAD0]/80">In-house Master Craftsmen</p>
              </div>
            </div>

            {/* Badge 4 */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-sm border border-[#62645A] bg-[#46483F]/50 flex items-center justify-center text-[#D9DAD0] shrink-0">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-semibold tracking-wide text-[#F7F6F1]">Complete Interior</h4>
                <p className="text-[10px] sm:text-[11px] text-[#D9DAD0]/80">& Hardware Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

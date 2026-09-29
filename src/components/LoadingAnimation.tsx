import React, { useEffect, useState } from 'react';
import { VarLogo } from './VarLogo';

interface LoadingAnimationProps {
  onComplete: () => void;
}

type SpaceCategory = 'initial' | 'kitchen' | 'wardrobe' | 'living' | 'bedroom' | 'office' | 'complete';

export const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState<SpaceCategory>('initial');
  const [progress, setProgress] = useState(5);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Exact sequence & timing as specified and illustrated in the storyboard:
    // Total duration ~3 seconds:
    // 0.0s - 0.3s: Initial (5%)
    // 0.3s - 0.8s: Kitchen (25%)
    // 0.8s - 1.3s: Wardrobe (45%)
    // 1.3s - 1.8s: Living Room (65%)
    // 1.8s - 2.3s: Bedroom (85%)
    // 2.3s - 2.8s: Office (95%)
    // 2.8s - 3.1s: Preparing Your Experience (100%)
    // 3.1s: Smooth fadeout to homepage

    const t1 = setTimeout(() => {
      setCurrentStep('kitchen');
      setProgress(25);
    }, 350);

    const t2 = setTimeout(() => {
      setCurrentStep('wardrobe');
      setProgress(45);
    }, 850);

    const t3 = setTimeout(() => {
      setCurrentStep('living');
      setProgress(65);
    }, 1350);

    const t4 = setTimeout(() => {
      setCurrentStep('bedroom');
      setProgress(85);
    }, 1850);

    const t5 = setTimeout(() => {
      setCurrentStep('office');
      setProgress(95);
    }, 2350);

    const t6 = setTimeout(() => {
      setCurrentStep('complete');
      setProgress(100);
    }, 2850);

    const t7 = setTimeout(() => {
      setIsFadingOut(true);
    }, 3200);

    const t8 = setTimeout(() => {
      onComplete();
    }, 3700);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
      clearTimeout(t7);
      clearTimeout(t8);
    };
  }, [onComplete]);

  // Warm architectural line-art color from screenshot
  const strokeColor = '#E3D8BE';

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#171815] text-[#F7F6F1] overflow-hidden select-none transition-opacity duration-500 ease-out ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* CAD Grid Background with subtle radial darkening */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(98, 100, 90, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(98, 100, 90, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Radial soft vignette behind center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(37, 39, 33, 0.4) 0%, rgba(23, 24, 21, 0.95) 75%)',
        }}
      />

      {/* Main Architectural Drafting Card with Corner Crosshair Extension Marks */}
      <div className="relative w-full max-w-[420px] sm:max-w-[480px] h-[580px] sm:h-[620px] mx-4 p-8 sm:p-10 flex flex-col justify-between items-center z-10">
        {/* Outer Architectural Framing Line */}
        <div className="absolute inset-4 sm:inset-6 border border-[#383A32]/60 pointer-events-none">
          {/* Top-Left Crosshair */}
          <div className="absolute -top-3 -left-3 w-6 h-[1px] bg-[#62645A]/50" />
          <div className="absolute -top-3 -left-3 h-6 w-[1px] bg-[#62645A]/50" />

          {/* Top-Right Crosshair */}
          <div className="absolute -top-3 -right-3 w-6 h-[1px] bg-[#62645A]/50" />
          <div className="absolute -top-3 right-0 h-6 w-[1px] bg-[#62645A]/50" />

          {/* Bottom-Left Crosshair */}
          <div className="absolute -bottom-3 -left-3 w-6 h-[1px] bg-[#62645A]/50" />
          <div className="absolute bottom-0 -left-3 h-6 w-[1px] bg-[#62645A]/50" />

          {/* Bottom-Right Crosshair */}
          <div className="absolute -bottom-3 -right-3 w-6 h-[1px] bg-[#62645A]/50" />
          <div className="absolute bottom-0 right-0 h-6 w-[1px] bg-[#62645A]/50" />
        </div>

        {/* 1. TOP AREA: Fixed & Stable VAR Logo and Tagline */}
        <div className="pt-3 text-center flex flex-col items-center">
          <VarLogo
            variant="light"
            size="lg"
            withTagline={false}
            className="items-center"
          />
          <p className="mt-3 font-serif italic text-sm sm:text-base text-[#D9DAD0]/90 tracking-wide">
            Where materials become spaces.
          </p>
        </div>

        {/* 2. CENTER STAGE: Architectural Line-Art Icon & Space Label */}
        <div className="relative w-full h-[140px] flex flex-col items-center justify-center">
          {/* KITCHEN (Panel 2 in storyboard) */}
          {currentStep === 'kitchen' && (
            <div className="flex flex-col items-center animate-in fade-in zoom-in-95 duration-300">
              <svg
                viewBox="0 0 84 64"
                className="w-20 h-16 overflow-visible"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ filter: 'drop-shadow(0 0 6px rgba(227, 216, 190, 0.45))' }}
              >
                {/* Chimney / Range Hood */}
                <rect x="37" y="6" width="10" height="9" stroke={strokeColor} strokeWidth="1.5" />
                <path d="M 37 15 L 29 25 L 55 25 L 47 15 Z" stroke={strokeColor} strokeWidth="1.5" strokeLinejoin="round" />
                {/* Spice Jars on counter */}
                <rect x="22" y="21" width="3" height="4" stroke={strokeColor} strokeWidth="1.2" />
                <rect x="60" y="19" width="4" height="6" stroke={strokeColor} strokeWidth="1.2" />
                {/* Countertop Slab */}
                <line x1="14" y1="26" x2="70" y2="26" stroke={strokeColor} strokeWidth="1.75" />
                {/* Lower Cabinet Box */}
                <rect x="16" y="26" width="52" height="30" stroke={strokeColor} strokeWidth="1.5" />
                {/* Left Cabinet Vertical Doors */}
                <line x1="38" y1="26" x2="38" y2="56" stroke={strokeColor} strokeWidth="1.5" />
                <line x1="34" y1="34" x2="34" y2="42" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" />
                <line x1="42" y1="34" x2="42" y2="42" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" />
                {/* Right Drawers Louvers */}
                <line x1="38" y1="36" x2="68" y2="36" stroke={strokeColor} strokeWidth="1.5" />
                <line x1="38" y1="46" x2="68" y2="46" stroke={strokeColor} strokeWidth="1.5" />
                <line x1="48" y1="31" x2="58" y2="31" stroke={strokeColor} strokeWidth="1.2" />
                <line x1="48" y1="41" x2="58" y2="41" stroke={strokeColor} strokeWidth="1.2" />
                <line x1="48" y1="51" x2="58" y2="51" stroke={strokeColor} strokeWidth="1.2" />
              </svg>
              <span className="mt-3 text-[11px] font-sans font-semibold tracking-[0.28em] text-[#E3D8BE] uppercase">
                KITCHEN
              </span>
            </div>
          )}

          {/* WARDROBE (Panel 3 in storyboard) */}
          {currentStep === 'wardrobe' && (
            <div className="flex flex-col items-center animate-in fade-in zoom-in-95 duration-300">
              <svg
                viewBox="0 0 68 64"
                className="w-16 h-16 overflow-visible"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ filter: 'drop-shadow(0 0 6px rgba(227, 216, 190, 0.45))' }}
              >
                {/* Wardrobe Outer Frame */}
                <rect x="10" y="8" width="48" height="48" stroke={strokeColor} strokeWidth="1.5" />
                {/* Top Cornice Header */}
                <line x1="8" y1="8" x2="60" y2="8" stroke={strokeColor} strokeWidth="1.5" />
                {/* Base Plinth */}
                <line x1="8" y1="56" x2="60" y2="56" stroke={strokeColor} strokeWidth="1.5" />
                {/* Partition dividing left double doors from right drawers */}
                <line x1="38" y1="8" x2="38" y2="56" stroke={strokeColor} strokeWidth="1.5" />
                {/* Left double-door center seam */}
                <line x1="24" y1="8" x2="24" y2="56" stroke={strokeColor} strokeWidth="1" strokeDasharray="1 1" />
                {/* Vertical Handles */}
                <line x1="22" y1="28" x2="22" y2="36" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" />
                <line x1="26" y1="28" x2="26" y2="36" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" />
                {/* Right Shelves & Drawers */}
                <line x1="38" y1="20" x2="58" y2="20" stroke={strokeColor} strokeWidth="1.2" />
                <line x1="38" y1="32" x2="58" y2="32" stroke={strokeColor} strokeWidth="1.2" />
                <line x1="38" y1="44" x2="58" y2="44" stroke={strokeColor} strokeWidth="1.2" />
                {/* Pulls on drawers */}
                <line x1="45" y1="38" x2="51" y2="38" stroke={strokeColor} strokeWidth="1.2" />
                <line x1="45" y1="50" x2="51" y2="50" stroke={strokeColor} strokeWidth="1.2" />
              </svg>
              <span className="mt-3 text-[11px] font-sans font-semibold tracking-[0.28em] text-[#E3D8BE] uppercase">
                WARDROBE
              </span>
            </div>
          )}

          {/* LIVING ROOM (Panel 4 in storyboard) */}
          {currentStep === 'living' && (
            <div className="flex flex-col items-center animate-in fade-in zoom-in-95 duration-300">
              <svg
                viewBox="0 0 90 64"
                className="w-22 h-16 overflow-visible"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ filter: 'drop-shadow(0 0 6px rgba(227, 216, 190, 0.45))' }}
              >
                {/* Art Frame on Wall */}
                <rect x="28" y="6" width="26" height="15" stroke={strokeColor} strokeWidth="1.3" />
                <line x1="28" y1="6" x2="54" y2="21" stroke={strokeColor} strokeWidth="1" strokeOpacity="0.7" />
                <line x1="28" y1="21" x2="54" y2="6" stroke={strokeColor} strokeWidth="1" strokeOpacity="0.7" />

                {/* Modern Sofa */}
                {/* Backrest */}
                <rect x="18" y="27" width="46" height="15" rx="1.5" stroke={strokeColor} strokeWidth="1.5" />
                {/* Armrest Left */}
                <rect x="12" y="32" width="6" height="18" rx="2" stroke={strokeColor} strokeWidth="1.5" />
                {/* Armrest Right */}
                <rect x="64" y="32" width="6" height="18" rx="2" stroke={strokeColor} strokeWidth="1.5" />
                {/* Seat Cushion */}
                <rect x="18" y="39" width="46" height="11" rx="1" stroke={strokeColor} strokeWidth="1.5" />
                {/* Cushion Seam Divider */}
                <line x1="41" y1="27" x2="41" y2="50" stroke={strokeColor} strokeWidth="1.2" />
                {/* Sofa Feet */}
                <line x1="16" y1="50" x2="16" y2="55" stroke={strokeColor} strokeWidth="1.5" />
                <line x1="66" y1="50" x2="66" y2="55" stroke={strokeColor} strokeWidth="1.5" />

                {/* Floor Lamp on Right */}
                <path d="M 74 12 L 82 12 L 85 24 L 71 24 Z" stroke={strokeColor} strokeWidth="1.3" strokeLinejoin="round" />
                <line x1="78" y1="24" x2="78" y2="55" stroke={strokeColor} strokeWidth="1.5" />
                <line x1="72" y1="55" x2="84" y2="55" stroke={strokeColor} strokeWidth="1.5" />
              </svg>
              <span className="mt-3 text-[11px] font-sans font-semibold tracking-[0.28em] text-[#E3D8BE] uppercase">
                LIVING ROOM
              </span>
            </div>
          )}

          {/* BEDROOM (Panel 5 in storyboard) */}
          {currentStep === 'bedroom' && (
            <div className="flex flex-col items-center animate-in fade-in zoom-in-95 duration-300">
              <svg
                viewBox="0 0 90 64"
                className="w-22 h-16 overflow-visible"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ filter: 'drop-shadow(0 0 6px rgba(227, 216, 190, 0.45))' }}
              >
                {/* Main Bed Headboard */}
                <rect x="24" y="16" width="42" height="18" rx="1.5" stroke={strokeColor} strokeWidth="1.5" />
                {/* Pillows */}
                <rect x="28" y="24" width="15" height="7" rx="1.5" stroke={strokeColor} strokeWidth="1.2" />
                <rect x="47" y="24" width="15" height="7" rx="1.5" stroke={strokeColor} strokeWidth="1.2" />
                {/* Mattress / Quilt Base */}
                <rect x="24" y="34" width="42" height="18" rx="1" stroke={strokeColor} strokeWidth="1.5" />
                <line x1="24" y1="42" x2="66" y2="42" stroke={strokeColor} strokeWidth="1.2" />
                <line x1="28" y1="52" x2="28" y2="56" stroke={strokeColor} strokeWidth="1.5" />
                <line x1="62" y1="52" x2="62" y2="56" stroke={strokeColor} strokeWidth="1.5" />

                {/* Left Nightstand & Lamp */}
                <path d="M 12 18 L 18 18 L 20 25 L 10 25 Z" stroke={strokeColor} strokeWidth="1.2" strokeLinejoin="round" />
                <line x1="15" y1="25" x2="15" y2="30" stroke={strokeColor} strokeWidth="1.2" />
                <rect x="9" y="30" width="12" height="22" stroke={strokeColor} strokeWidth="1.4" />
                <line x1="9" y1="41" x2="21" y2="41" stroke={strokeColor} strokeWidth="1.2" />
                <circle cx="15" cy="35.5" r="0.75" fill={strokeColor} />
                <circle cx="15" cy="46.5" r="0.75" fill={strokeColor} />
                <line x1="11" y1="52" x2="11" y2="55" stroke={strokeColor} strokeWidth="1.2" />
                <line x1="19" y1="52" x2="19" y2="55" stroke={strokeColor} strokeWidth="1.2" />

                {/* Right Nightstand & Lamp */}
                <path d="M 72 18 L 78 18 L 80 25 L 70 25 Z" stroke={strokeColor} strokeWidth="1.2" strokeLinejoin="round" />
                <line x1="75" y1="25" x2="75" y2="30" stroke={strokeColor} strokeWidth="1.2" />
                <rect x="69" y="30" width="12" height="22" stroke={strokeColor} strokeWidth="1.4" />
                <line x1="69" y1="41" x2="81" y2="41" stroke={strokeColor} strokeWidth="1.2" />
                <circle cx="75" cy="35.5" r="0.75" fill={strokeColor} />
                <circle cx="75" cy="46.5" r="0.75" fill={strokeColor} />
                <line x1="71" y1="52" x2="71" y2="55" stroke={strokeColor} strokeWidth="1.2" />
                <line x1="79" y1="52" x2="79" y2="55" stroke={strokeColor} strokeWidth="1.2" />
              </svg>
              <span className="mt-3 text-[11px] font-sans font-semibold tracking-[0.28em] text-[#E3D8BE] uppercase">
                BEDROOM
              </span>
            </div>
          )}

          {/* OFFICE (Panel 6 in storyboard) */}
          {currentStep === 'office' && (
            <div className="flex flex-col items-center animate-in fade-in zoom-in-95 duration-300">
              <svg
                viewBox="0 0 90 64"
                className="w-22 h-16 overflow-visible"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ filter: 'drop-shadow(0 0 6px rgba(227, 216, 190, 0.45))' }}
              >
                {/* Desk Monitor */}
                <rect x="36" y="8" width="18" height="13" rx="1" stroke={strokeColor} strokeWidth="1.3" />
                <line x1="45" y1="21" x2="45" y2="27" stroke={strokeColor} strokeWidth="1.3" />
                <line x1="41" y1="27" x2="49" y2="27" stroke={strokeColor} strokeWidth="1.3" />

                {/* Desk Organizer / Accessories on Left */}
                <rect x="23" y="19" width="4" height="8" stroke={strokeColor} strokeWidth="1.2" />
                <rect x="27" y="16" width="3" height="11" stroke={strokeColor} strokeWidth="1.2" />

                {/* Potted Plant on Right */}
                <path d="M 64 21 L 68 21 L 67 27 L 65 27 Z" stroke={strokeColor} strokeWidth="1.2" />
                <path d="M 66 12 C 63 15 63 19 66 21 C 69 19 69 15 66 12 Z" stroke={strokeColor} strokeWidth="1.2" />
                <path d="M 63 16 C 60 17 61 20 64 20" stroke={strokeColor} strokeWidth="1.2" />
                <path d="M 69 16 C 72 17 71 20 68 20" stroke={strokeColor} strokeWidth="1.2" />

                {/* Desk Surface */}
                <line x1="16" y1="28" x2="74" y2="28" stroke={strokeColor} strokeWidth="1.6" />
                {/* Desk Trestle Legs */}
                <line x1="20" y1="28" x2="18" y2="52" stroke={strokeColor} strokeWidth="1.4" />
                <line x1="70" y1="28" x2="72" y2="52" stroke={strokeColor} strokeWidth="1.4" />
                <line x1="19" y1="42" x2="71" y2="42" stroke={strokeColor} strokeWidth="1" strokeOpacity="0.6" />

                {/* Ergonomic Office Swivel Chair */}
                <rect x="39" y="22" width="12" height="13" rx="2" stroke={strokeColor} strokeWidth="1.3" />
                <line x1="37" y1="36" x2="53" y2="36" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" />
                <line x1="45" y1="36" x2="45" y2="46" stroke={strokeColor} strokeWidth="1.5" />
                {/* 5-star base */}
                <line x1="39" y1="48" x2="51" y2="48" stroke={strokeColor} strokeWidth="1.5" />
                <line x1="45" y1="46" x2="39" y2="48" stroke={strokeColor} strokeWidth="1.2" />
                <line x1="45" y1="46" x2="51" y2="48" stroke={strokeColor} strokeWidth="1.2" />
                <circle cx="39" cy="49" r="0.75" fill={strokeColor} />
                <circle cx="51" cy="49" r="0.75" fill={strokeColor} />
              </svg>
              <span className="mt-3 text-[11px] font-sans font-semibold tracking-[0.28em] text-[#E3D8BE] uppercase">
                OFFICE
              </span>
            </div>
          )}

          {/* COMPLETE / PREPARING YOUR EXPERIENCE (Panel 7 in storyboard) */}
          {currentStep === 'complete' && (
            <div className="flex flex-col items-center animate-in fade-in zoom-in-95 duration-300">
              <div
                className="w-16 h-16 rounded-full border-2 border-[#E3D8BE] flex items-center justify-center relative"
                style={{
                  boxShadow: '0 0 16px rgba(227, 216, 190, 0.4), inset 0 0 12px rgba(227, 216, 190, 0.2)',
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-7 h-7"
                  fill="none"
                  stroke={strokeColor}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="mt-3.5 text-[10.5px] font-sans font-semibold tracking-[0.25em] text-[#E3D8BE] uppercase">
                PREPARING YOUR EXPERIENCE
              </span>
            </div>
          )}

          {/* Initial State placeholder keeps layout completely stable */}
          {currentStep === 'initial' && (
            <div className="w-16 h-16 opacity-0" />
          )}
        </div>

        {/* 3. BOTTOM AREA: Elegant Glowing Loading Bar & Text */}
        <div className="w-full max-w-[340px] sm:max-w-[380px] pb-3">
          {/* Glowing Track */}
          <div className="h-[2.5px] w-full bg-[#2A2C25] rounded-full overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r from-[#A89F88] via-[#E3D8BE] to-[#FFF8EA] rounded-full transition-all duration-400 ease-out"
              style={{
                width: `${progress}%`,
                boxShadow: '0 0 8px rgba(227, 216, 190, 0.75)',
              }}
            />
          </div>

          {/* Text Indicators */}
          <div className="flex justify-between items-center mt-2.5 text-[9.5px] tracking-[0.24em] font-sans uppercase">
            <span className="text-[#8E9084] font-medium">LOADING...</span>
            <span className="font-mono text-[#E3D8BE] tracking-wider">{progress} %</span>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';

interface VarLogoProps {
  variant?: 'light' | 'dark' | 'symbol-only';
  className?: string;
  withTagline?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
}

export const VarLogo: React.FC<VarLogoProps> = ({
  variant = 'dark',
  className = '',
  withTagline = false,
  size = 'md',
  animated = false,
}) => {
  const isLight = variant === 'light';
  // Precise brand colors matching the business card identity
  // Dark olive-charcoal for light theme, warm ivory-gold for dark theme
  const strokeColor = isLight ? '#F7F6F1' : '#383A32';
  const textColor = isLight ? '#F7F6F1' : '#1C1D1A';
  const subtextColor = isLight ? '#D9DAD0' : '#62645A';

  // Dimension scaling
  const scaleMap = {
    sm: { symbolH: 26, fontSize: '8px', taglineSize: '7.5px', gap: 'mt-1.5' },
    md: { symbolH: 34, fontSize: '9.5px', taglineSize: '8.5px', gap: 'mt-2' },
    lg: { symbolH: 48, fontSize: '12px', taglineSize: '10px', gap: 'mt-2.5' },
    xl: { symbolH: 64, fontSize: '15px', taglineSize: '12px', gap: 'mt-3' },
  };

  const currentScale = scaleMap[size];

  // The EXACT custom architectural monogram from the VAR Interiors & Hardwares business card
  const MonogramSvg = (
    <svg
      viewBox="0 0 196 54"
      height={currentScale.symbolH}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="overflow-visible"
      aria-label="VAR Interiors & Hardwares Logo"
    >
      {/* GLYPH 1: V - Distinctive top-left detached angled accent stroke */}
      <path
        d="M 10 9 L 17 20"
        stroke={strokeColor}
        strokeWidth="8.5"
        strokeLinecap="round"
        className={animated ? 'animate-draw-line' : ''}
      />

      {/* GLYPH 1: V - Main body starting after gap, curving through bottom vertex and ascending up-right */}
      <path
        d="M 22 28 L 32.5 44.5 C 34.5 47.5 38.5 47.5 40.5 44.5 L 63 9"
        stroke={strokeColor}
        strokeWidth="8.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={animated ? 'animate-draw-line' : ''}
      />

      {/* GLYPH 2: A - Exact Delta Triangle with closed bottom baseline and rounded corners */}
      <path
        d="M 73 45 L 95.5 9 C 97 6.5 101 6.5 102.5 9 L 125 45 Z"
        stroke={strokeColor}
        strokeWidth="8.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={animated ? 'animate-draw-line' : ''}
      />

      {/* GLYPH 3: R - Upper stroke: horizontal bar at cap height curving 90° down at the right tip */}
      <path
        d="M 132 9 L 170 9 C 178 9 185 15.5 185 23.5"
        stroke={strokeColor}
        strokeWidth="8.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={animated ? 'animate-draw-line' : ''}
      />

      {/* GLYPH 3: R - Lower stroke: vertical stem from baseline curving 90° right into mid-bar, then curving 90° down at the right tip */}
      <path
        d="M 140 45 L 140 36 C 140 30.5 144.5 27 150 27 L 170 27 C 178 27 185 33.5 185 41.5"
        stroke={strokeColor}
        strokeWidth="8.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={animated ? 'animate-draw-line' : ''}
      />
    </svg>
  );

  if (variant === 'symbol-only') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        {MonogramSvg}
      </div>
    );
  }

  return (
    <div className={`flex flex-col select-none ${className}`}>
      {/* Exact Monogram Graphic */}
      <div className="flex items-center">
        {MonogramSvg}
      </div>

      {/* Text matching business card in high tracking */}
      <span
        style={{
          color: textColor,
          fontSize: currentScale.fontSize,
          letterSpacing: '0.22em',
        }}
        className={`font-semibold uppercase tracking-[0.22em] ${currentScale.gap} whitespace-nowrap font-sans transition-colors`}
      >
        VAR INTERIORS & HARDWARES
      </span>

      {/* Optional Tagline */}
      {withTagline && (
        <span
          style={{
            color: subtextColor,
            fontSize: currentScale.taglineSize,
          }}
          className="font-serif italic font-normal tracking-wide mt-0.5 whitespace-nowrap opacity-90 transition-colors"
        >
          Where materials become spaces.
        </span>
      )}
    </div>
  );
};

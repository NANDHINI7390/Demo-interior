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
  // Brand muted olive colors matching the uploaded card and identity
  const strokeColor = isLight ? '#F7F6F1' : '#46483F';
  const textColor = isLight ? '#F7F6F1' : '#1C1D1A';
  const subtextColor = isLight ? '#D9DAD0' : '#62645A';

  // Dimension scaling
  const scaleMap = {
    sm: { symbolH: 26, fontSize: '8px', taglineSize: '7.5px', gap: 'mt-1' },
    md: { symbolH: 34, fontSize: '9.5px', taglineSize: '8.5px', gap: 'mt-1.5' },
    lg: { symbolH: 48, fontSize: '12px', taglineSize: '10px', gap: 'mt-2' },
    xl: { symbolH: 64, fontSize: '15px', taglineSize: '12px', gap: 'mt-2.5' },
  };

  const currentScale = scaleMap[size];

  // The EXACT stylized geometric monogram from the business card
  const MonogramSvg = (
    <svg
      viewBox="0 0 196 52"
      height={currentScale.symbolH}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="overflow-visible"
      aria-label="VAR Interiors & Hardwares Monogram"
    >
      {/* GLYPH 1: V - Slanted down-right, smooth bottom curve, slanted up-right */}
      <path
        d="M 10 10 L 29 41 C 31 44.5 35 44.5 37 41 L 56 10"
        stroke={strokeColor}
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={animated ? 'animate-draw-line' : ''}
      />

      {/* GLYPH 2: A - Slanted up-right, rounded arch apex, slanted down-right */}
      <path
        d="M 62 41 L 80 12 C 82 8.5 86 8.5 88 12 L 106 41"
        stroke={strokeColor}
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={animated ? 'animate-draw-line' : ''}
      />
      {/* Horizontal Crossbar of A */}
      <path
        d="M 70 30 L 98 30"
        stroke={strokeColor}
        strokeWidth="8"
        strokeLinecap="round"
        className={animated ? 'animate-draw-line' : ''}
      />

      {/* GLYPH 3: R - Top horizontal bar curving down on right */}
      <path
        d="M 118 10 L 168 10 C 176 10 182 15 182 22"
        stroke={strokeColor}
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={animated ? 'animate-draw-line' : ''}
      />
      {/* GLYPH 3: R - Bottom vertical stem curving 90deg into horizontal base bar */}
      <path
        d="M 126 22 L 126 31 C 126 37.5 131.5 42 138 42 L 182 42"
        stroke={strokeColor}
        strokeWidth="9"
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
      <div className="flex items-center justify-start">
        {MonogramSvg}
      </div>

      {/* Text matching business card in high tracking */}
      <span
        style={{
          color: textColor,
          fontSize: currentScale.fontSize,
          letterSpacing: '0.24em',
        }}
        className={`font-bold uppercase tracking-[0.24em] ${currentScale.gap} whitespace-nowrap font-sans transition-colors`}
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

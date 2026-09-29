import React, { useState, useRef, useCallback } from 'react';
import { MoveHorizontal } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  aspectRatio?: string;
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'BEFORE (ORIGINAL)',
  afterLabel = 'AFTER (VAR TRANSFORMATION)',
  aspectRatio = 'aspect-[16/10]',
  className = '',
}) => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    if (e.touches[0]) {
      updatePosition(e.touches[0].clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      updatePosition(e.touches[0].clientX);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    updatePosition(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      updatePosition(e.clientX);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => setIsDragging(false)}
      className={`relative w-full ${aspectRatio} select-none overflow-hidden rounded-xs border border-[#D9DAD0] shadow-xl cursor-ew-resize touch-pan-y ${className}`}
    >
      {/* AFTER IMAGE (Base layer, 100% width, fully responsive) */}
      <img
        src={afterImage}
        alt="After VAR Interior Transformation"
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      />

      {/* BEFORE IMAGE (Overlay with CSS clip-path - eliminates any distortion or stretching) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          clipPath: `inset(0 calc(100% - ${sliderPos}%) 0 0)`,
          WebkitClipPath: `inset(0 calc(100% - ${sliderPos}%) 0 0)`,
        }}
      >
        <img
          src={beforeImage}
          alt="Before Transformation"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{
            filter: 'contrast(0.92) brightness(0.92) sepia(0.08)',
          }}
        />
        {/* Subtle architectural tint on before */}
        <div className="absolute inset-0 bg-[#1C1D1A]/15" />
      </div>

      {/* Floating Labels (Responsive font size and padding) */}
      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 bg-[#1C1D1A]/85 backdrop-blur-xs text-[#D9DAD0] text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.16em] sm:tracking-[0.2em] px-2 sm:px-2.5 py-1 rounded-xs pointer-events-none">
        {beforeLabel}
      </div>
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 bg-[#62645A]/90 backdrop-blur-xs text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.16em] sm:tracking-[0.2em] px-2 sm:px-2.5 py-1 rounded-xs pointer-events-none">
        {afterLabel}
      </div>

      {/* Draggable Divider Handle Line (Optimized touch hit area) */}
      <div
        className="absolute top-0 bottom-0 z-30 w-[2px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.6)]"
        style={{ left: `${sliderPos}%` }}
      >
        {/* Generous touch target (44x44px hit-box) */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 flex items-center justify-center">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#1C1D1A] border-2 border-white text-white flex items-center justify-center shadow-lg transition-transform active:scale-95">
            <MoveHorizontal className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D9DAD0]" />
          </div>
        </div>
      </div>

      {/* Bottom Hint */}
      <div className="absolute bottom-2.5 sm:bottom-3 left-1/2 -translate-x-1/2 z-20 bg-[#1C1D1A]/75 backdrop-blur-xs text-[#D9DAD0] text-[8.5px] sm:text-[9px] uppercase tracking-[0.2em] px-2.5 sm:px-3 py-1 rounded-full pointer-events-none whitespace-nowrap">
        Slide to compare
      </div>
    </div>
  );
};

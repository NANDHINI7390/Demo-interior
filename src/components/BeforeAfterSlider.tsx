import React, { useState, useRef } from 'react';
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

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      className={`relative w-full ${aspectRatio} select-none overflow-hidden rounded-xs border border-[#D9DAD0] shadow-xl cursor-ew-resize ${className}`}
    >
      {/* AFTER IMAGE (Base layer, right side) */}
      <img
        src={afterImage}
        alt="After VAR Interior Transformation"
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* BEFORE IMAGE (Clipped overlay, left side) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <img
          src={beforeImage}
          alt="Before Transformation"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover max-w-none"
          style={{
            width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%',
            filter: 'contrast(0.9) brightness(0.9) sepia(0.1)',
          }}
        />
        {/* Subtle vintage tint on before */}
        <div className="absolute inset-0 bg-[#1C1D1A]/20" />
      </div>

      {/* Floating Labels */}
      <div className="absolute top-4 left-4 z-20 bg-[#1C1D1A]/85 backdrop-blur-xs text-[#D9DAD0] text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded-xs">
        {beforeLabel}
      </div>
      <div className="absolute top-4 right-4 z-20 bg-[#62645A]/90 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded-xs">
        {afterLabel}
      </div>

      {/* Draggable Divider Handle Line */}
      <div
        className="absolute top-0 bottom-0 z-30 w-[2px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] cursor-ew-resize"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#1C1D1A] border-2 border-white text-white flex items-center justify-center shadow-lg">
          <MoveHorizontal className="w-4 h-4 text-[#D9DAD0]" />
        </div>
      </div>

      {/* Bottom Hint */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 bg-[#1C1D1A]/70 backdrop-blur-xs text-[#D9DAD0] text-[9px] uppercase tracking-[0.2em] px-3 py-1 rounded-full pointer-events-none">
        Drag slider to compare
      </div>
    </div>
  );
};

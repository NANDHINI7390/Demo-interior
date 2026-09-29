import React, { useEffect, useState } from 'react';
import { VarLogo } from './VarLogo';

interface LoadingAnimationProps {
  onComplete: () => void;
}

export const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'blueprint' | 'floorplan' | 'elevation' | 'evolving' | 'done'>('blueprint');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Stage 1: Initial blueprint drafting
    const t1 = setTimeout(() => {
      setStage('floorplan');
    }, 700);

    // Stage 2: Floorplan walls and partitions appear
    const t2 = setTimeout(() => {
      setStage('elevation');
    }, 1600);

    // Stage 3: Architectural structure evolves into interior
    const t3 = setTimeout(() => {
      setStage('evolving');
    }, 2700);

    // Stage 4: Smooth transition into VAR website
    const t4 = setTimeout(() => {
      setStage('done');
      onComplete();
    }, 3600);

    // Smooth progress counter
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = Math.floor(Math.random() * 8) + 5;
        return Math.min(100, prev + increment);
      });
    }, 120);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#1C1D1A] text-[#F7F6F1] overflow-hidden select-none transition-opacity duration-1000 ease-in-out ${
        stage === 'evolving' || stage === 'done'
          ? 'opacity-0 scale-105 pointer-events-none'
          : 'opacity-100'
      }`}
      style={{
        backgroundImage: `radial-gradient(circle at 50% 45%, #252721 0%, #1C1D1A 85%)`,
      }}
    >
      {/* Sophisticated Architectural Blueprint Animation Background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="blueprintGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D9DAD0" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#62645A" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#46483F" stopOpacity="0.1" />
          </linearGradient>
          <pattern id="cadGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#62645A" strokeWidth="0.5" strokeOpacity="0.15" />
          </pattern>
        </defs>

        {/* CAD Grid Backdrop */}
        <rect width="100%" height="100%" fill="url(#cadGrid)" />

        {/* Floorplan & Architectural Layout Lines */}
        <g stroke="url(#blueprintGrad)" strokeWidth="1" fill="none">
          {/* Main room boundary */}
          <rect
            x="200"
            y="120"
            width="800"
            height="560"
            strokeDasharray="600"
            strokeDashoffset={stage === 'blueprint' ? '600' : '0'}
            className="transition-all duration-1000 ease-out"
          />

          {/* Perspective structural rays */}
          <line x1="200" y1="120" x2="350" y2="240" strokeDasharray="300" strokeDashoffset="0" className="animate-draw-line" />
          <line x1="1000" y1="120" x2="850" y2="240" strokeDasharray="300" strokeDashoffset="0" className="animate-draw-line" />
          <line x1="200" y1="680" x2="350" y2="560" strokeDasharray="300" strokeDashoffset="0" className="animate-draw-line" />
          <line x1="1000" y1="680" x2="850" y2="560" strokeDasharray="300" strokeDashoffset="0" className="animate-draw-line" />

          {/* Inner Room Framing */}
          <rect
            x="350"
            y="240"
            width="500"
            height="320"
            stroke="#D9DAD0"
            strokeWidth="0.8"
            strokeOpacity={stage !== 'blueprint' ? 0.35 : 0}
            className="transition-opacity duration-1000"
          />

          {/* Architectural Kitchen Island & Cabinet outlines */}
          <rect
            x="440"
            y="390"
            width="320"
            height="110"
            strokeDasharray="4 4"
            stroke="#D9DAD0"
            strokeWidth="0.75"
            strokeOpacity={stage === 'elevation' || stage === 'evolving' ? 0.5 : 0}
            className="transition-opacity duration-700"
          />

          {/* Stool positions */}
          <circle cx="490" cy="525" r="16" strokeDasharray="2 2" strokeOpacity={stage === 'elevation' ? 0.4 : 0} />
          <circle cx="600" cy="525" r="16" strokeDasharray="2 2" strokeOpacity={stage === 'elevation' ? 0.4 : 0} />
          <circle cx="710" cy="525" r="16" strokeDasharray="2 2" strokeOpacity={stage === 'elevation' ? 0.4 : 0} />

          {/* Back wall tall cabinetry & pantry partitions */}
          <line x1="410" y1="240" x2="410" y2="350" strokeOpacity={stage !== 'blueprint' ? 0.4 : 0} />
          <line x1="470" y1="240" x2="470" y2="350" strokeOpacity={stage !== 'blueprint' ? 0.4 : 0} />
          <line x1="530" y1="240" x2="530" y2="350" strokeOpacity={stage !== 'blueprint' ? 0.4 : 0} />
          <line x1="670" y1="240" x2="670" y2="350" strokeOpacity={stage !== 'blueprint' ? 0.4 : 0} />
          <line x1="730" y1="240" x2="730" y2="350" strokeOpacity={stage !== 'blueprint' ? 0.4 : 0} />
          <line x1="790" y1="240" x2="790" y2="350" strokeOpacity={stage !== 'blueprint' ? 0.4 : 0} />

          {/* Architectural dimension markings */}
          <g stroke="#77786F" strokeWidth="0.5" strokeOpacity="0.5">
            <line x1="330" y1="240" x2="330" y2="560" />
            <line x1="325" y1="240" x2="335" y2="240" />
            <line x1="325" y1="560" x2="335" y2="560" />

            <line x1="350" y1="580" x2="850" y2="580" />
            <line x1="350" y1="575" x2="350" y2="585" />
            <line x1="850" y1="575" x2="850" y2="585" />
          </g>
        </g>
      </svg>

      {/* Center Stage: Exact VAR Logo & Tagline */}
      <div className="relative z-10 flex flex-col items-center max-w-lg px-6 text-center">
        <div className="relative p-8 md:p-12">
          {/* Subtle architectural corner crosses */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D9DAD0]/40" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#D9DAD0]/40" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#D9DAD0]/40" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D9DAD0]/40" />

          {/* Exact VAR Logo */}
          <div className="transition-all duration-1000 transform">
            <VarLogo
              variant="light"
              size="xl"
              withTagline={false}
              animated={true}
              className="items-center"
            />
          </div>

          {/* Tagline */}
          <p
            className={`mt-4 font-serif italic text-lg md:text-xl text-[#D9DAD0] tracking-wide transition-all duration-1000 ${
              stage !== 'blueprint' ? 'opacity-90 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            Where materials become spaces.
          </p>
        </div>

        {/* Progress Bar & Counter (No skip button, clean architectural loader) */}
        <div className="w-56 md:w-64 mt-4">
          <div className="h-[2px] w-full bg-[#46483F] overflow-hidden rounded-full relative">
            <div
              className="h-full bg-gradient-to-r from-[#62645A] via-[#D9DAD0] to-[#F7F6F1] transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex justify-between items-center mt-2.5 text-[10px] tracking-[0.25em] text-[#77786F] uppercase font-sans">
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#62645A] animate-ping" />
              Loading...
            </span>
            <span className="font-mono">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

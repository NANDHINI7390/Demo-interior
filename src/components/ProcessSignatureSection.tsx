import React, { useState } from 'react';
import { ArrowRight, Layers, PencilRuler, Hammer, Sparkles } from 'lucide-react';

interface ProcessSignatureSectionProps {
  onViewProjects: () => void;
}

export const ProcessSignatureSection: React.FC<ProcessSignatureSectionProps> = ({
  onViewProjects,
}) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Quality Materials',
      subtitle: 'Raw timber, European fittings & certified stone',
      desc: 'We curate certified boiling waterproof (BWP) ply, imported quartz, anti-scratch acrylics, and tested heavy-duty mechanical hardware.',
      icon: Layers,
      highlight: 'Sourced directly from leading global manufacturers.',
    },
    {
      num: '02',
      title: 'Thoughtful Design',
      subtitle: 'Millimeter-accurate 3D drawings & spatial ergonomics',
      desc: 'Our interior architects craft personalized floor plans, storage logic, and lighting schemes aligned with your lifestyle and everyday rituals.',
      icon: PencilRuler,
      highlight: '3D photorealistic visualization before a single cut is made.',
    },
    {
      num: '03',
      title: 'Expert Installation',
      subtitle: 'In-house trained craftsmen with laser precision',
      desc: 'Zero-compromise on-site assembly using laser leveling, concealed cable chases, and dust-mitigated precision tools.',
      icon: Hammer,
      highlight: 'Trained technicians ensuring flawless soft-close alignments.',
    },
    {
      num: '04',
      title: 'Your Dream Space',
      subtitle: 'Flawless handover with lasting peace of mind',
      desc: 'Step into an immaculate living environment backed by our comprehensive warranty and dedicated post-handover support.',
      icon: Sparkles,
      highlight: 'Built to endure generations with timeless aesthetics.',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#F7F6F1] text-[#1C1D1A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-[#62645A]" />
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#62645A] uppercase">
              The VAR Journey
            </span>
            <span className="w-6 h-[1.5px] bg-[#62645A]" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1C1D1A] font-normal tracking-tight">
            From Material to Space
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#62645A] font-serif italic">
            A complete journey, from premium materials to beautifully finished spaces.
          </p>
        </div>

        {/* 4 Steps with Architectural Connecting Line */}
        <div className="relative">
          {/* Architectural Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-[2px] bg-[#D9DAD0] z-0">
            <div
              className="h-full bg-[#62645A] transition-all duration-700 ease-out"
              style={{ width: `${(activeStep / 3) * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              return (
                <div
                  key={step.num}
                  onClick={() => setActiveStep(index)}
                  className={`cursor-pointer p-6 sm:p-7 rounded-xs border transition-all duration-500 flex flex-col justify-between ${
                    isActive
                      ? 'bg-[#EEEDE6] border-[#62645A] shadow-md -translate-y-1'
                      : 'bg-[#F7F6F1] border-[#D9DAD0] hover:border-[#62645A]/60 hover:bg-[#EEEDE6]/50'
                  }`}
                >
                  <div>
                    {/* Step indicator header */}
                    <div className="flex items-center justify-between mb-6">
                      <span
                        className={`font-serif text-3xl font-light transition-colors ${
                          isActive ? 'text-[#46483F] font-normal' : 'text-[#77786F]'
                        }`}
                      >
                        {step.num}
                      </span>
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                          isActive
                            ? 'bg-[#62645A] text-white'
                            : 'bg-[#EEEDE6] text-[#62645A] border border-[#D9DAD0]'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="font-serif text-2xl text-[#1C1D1A] font-normal">
                      {step.title}
                    </h3>

                    <div className="text-xs text-[#62645A] font-semibold mt-1">
                      {step.subtitle}
                    </div>

                    <p className="mt-3 text-xs text-[#77786F] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#D9DAD0]/70 text-[11px] font-mono text-[#46483F] italic">
                    "{step.highlight}"
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Showcase Card Matching Panel 5 ("Same materials. Different possibilities.") */}
        <div className="mt-16 bg-[#1C1D1A] rounded-xs overflow-hidden text-[#F7F6F1] border border-[#46483F] relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Image */}
            <div className="lg:col-span-7 relative h-72 lg:h-96">
              <img
                src="/assets/var_living_dining_1790654677757.jpg"
                alt="VAR Interiors completed dining and living architecture"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#1C1D1A] hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1D1A] via-transparent to-transparent lg:hidden" />
            </div>

            {/* Right Editorial Text & CTA */}
            <div className="lg:col-span-5 p-8 sm:p-12">
              <div className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#D9DAD0] mb-2">
                Turnkey Execution
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#F7F6F1] font-normal leading-tight">
                Same materials.{' '}
                <span className="italic block text-[#EEEDE6]">
                  Different possibilities. Infinite spaces.
                </span>
              </h3>
              <p className="mt-4 text-xs sm:text-sm text-[#D9DAD0]/80 leading-relaxed font-light">
                Whether you desire a sleek Nordic kitchen or a timeless neoclassical residence, our materials library and engineering team make bespoke craftsmanship effortless.
              </p>

              <div className="mt-8">
                <button
                  onClick={onViewProjects}
                  className="bg-[#F7F6F1] hover:bg-[#EEEDE6] text-[#1C1D1A] text-xs uppercase tracking-[0.18em] font-bold px-6 py-3.5 rounded-xs transition-colors flex items-center gap-2 group cursor-pointer"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4 text-[#62645A] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

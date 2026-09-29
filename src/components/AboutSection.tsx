import React from 'react';
import { Compass, ShieldCheck, Hammer, Users } from 'lucide-react';
import { VarLogo } from './VarLogo';

export const AboutSection: React.FC = () => {
  const principles = [
    {
      id: 'design',
      title: 'Design Expertise',
      icon: Compass,
      desc: 'Spatial ergonomics, architectural balance, and tailored interior plans crafted around personal lifestyle rituals.',
    },
    {
      id: 'materials',
      title: 'Quality Materials',
      icon: ShieldCheck,
      desc: 'Rigorous selection of boiling waterproof ply, architectural laminates, high-grade stones, and genuine European fittings.',
    },
    {
      id: 'craftsmanship',
      title: 'Craftsmanship',
      icon: Hammer,
      desc: 'Precision joinery, laser-calibrated leveling, flawless edge-banding, and durable seamless installations.',
    },
    {
      id: 'customer',
      title: 'Customer Focus',
      icon: Users,
      desc: 'Transparent pricing, single-point accountability, clear milestones, and dedicated after-installation support.',
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-[#EEEDE6] text-[#1C1D1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Header & Showroom Showcase (Panel 8) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-6 h-[1.5px] bg-[#62645A]" />
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#62645A] uppercase">
                The Brand Philosophy
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1C1D1A] font-normal tracking-tight">
              About VAR
            </h2>

            <p className="font-serif italic text-xl sm:text-2xl text-[#46483F]">
              Design. Materials. Craftsmanship. All under one roof.
            </p>

            <p className="text-sm sm:text-base text-[#46483F] leading-relaxed font-light">
              VAR Interiors & Hardwares brings together interior solutions and hardware materials to create beautiful, functional spaces for homes and workspaces. By unifying turnkey architectural execution with a comprehensive showroom inventory of mechanical fittings, we eliminate the disconnect between interior design and physical material sourcing.
            </p>

            <div className="pt-2 flex items-center gap-6">
              <div className="border-l-2 border-[#62645A] pl-4">
                <div className="text-xs uppercase tracking-widest font-bold text-[#1C1D1A]">
                  Integrated Model
                </div>
                <div className="text-xs text-[#77786F]">
                  Studio Design + Material Supply + Execution
                </div>
              </div>
            </div>
          </div>

          {/* Showroom Image with VAR Wall Branding (Panel 8) */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[16/10] rounded-xs overflow-hidden border border-[#D9DAD0] shadow-xl bg-[#1C1D1A]">
              <img
                src="/src/assets/images/var_showroom_1790654664447.jpg"
                alt="VAR Interiors & Hardwares Architectural Studio & Showroom"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1D1A]/70 via-transparent to-transparent" />

              {/* Showroom Badge Overlay */}
              <div className="absolute bottom-5 left-5 right-5 bg-[#F7F6F1]/95 backdrop-blur-md p-4 border border-[#D9DAD0] rounded-xs flex items-center justify-between">
                <div>
                  <div className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#62645A]">
                    Experience Center
                  </div>
                  <div className="text-xs sm:text-sm font-serif font-semibold text-[#1C1D1A]">
                    VAR Showroom & Design Studio · Puducherry
                  </div>
                </div>
                <VarLogo variant="dark" size="sm" withTagline={false} className="shrink-0" />
              </div>
            </div>
          </div>
        </div>

        {/* 4 Visual Principles Cards (Panel 8) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.id}
                className="bg-[#F7F6F1] border border-[#D9DAD0] p-7 rounded-xs hover:border-[#62645A] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xs bg-[#EEEDE6] border border-[#D9DAD0] flex items-center justify-center text-[#62645A] mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#1C1D1A] font-normal mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#77786F] leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EEEDE6] text-[10px] tracking-[0.2em] uppercase font-semibold text-[#62645A]">
                  VAR Standard
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { ArrowRight, Sliders, CheckCircle2, ChevronRight, X, Shield } from 'lucide-react';

interface HardwareCategoryItem {
  id: string;
  name: string;
  count: string;
  tagline: string;
  spec: string;
}

interface HardwareSectionProps {
  onOpenConsultation: (hardwareTopic?: string) => void;
}

export const HardwareSection: React.FC<HardwareSectionProps> = ({
  onOpenConsultation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<HardwareCategoryItem | null>(null);

  const categories: HardwareCategoryItem[] = [
    {
      id: 'kitchen-hw',
      name: 'Kitchen Hardware',
      count: '48 items',
      tagline: 'Corner carousels, dish racks & modular pull-outs',
      spec: 'Heavy gauge SUS-304 stainless steel with nano-coated anti-corrosion barrier.',
    },
    {
      id: 'cabinet-fittings',
      name: 'Cabinet Fittings',
      count: '64 items',
      tagline: 'Concealed flap stays, bi-fold lifts & gas springs',
      spec: 'Multi-position stop tensioners tested to 80,000 continuous motion cycles.',
    },
    {
      id: 'handles',
      name: 'Handles & Pulls',
      count: '110 items',
      tagline: 'Knurled solid brass, edge profiles & recessed bar pulls',
      spec: 'Muted olive, brushed graphite, matte charcoal, and satin nickel finishes.',
    },
    {
      id: 'hinges',
      name: 'Hinges',
      count: '32 items',
      tagline: 'Integrated soft-close hydraulic dampers & 3D adjustment',
      spec: 'Clip-on German-engineered 110° & 165° wide-angle zero-protrusion mechanisms.',
    },
    {
      id: 'drawer-systems',
      name: 'Drawer Systems',
      count: '28 items',
      tagline: 'Ultra-slim double-wall metal drawers & push-to-open',
      spec: 'Synchronized full-extension under-mount slides rated for 40kg dynamic load.',
    },
    {
      id: 'wardrobe-fittings',
      name: 'Wardrobe Fittings',
      count: '45 items',
      tagline: 'Pneumatic drop-down rails, trouser racks & tie trays',
      spec: 'Smooth-damped ball-bearing runners with velvet-lined organizing inserts.',
    },
    {
      id: 'accessories',
      name: 'Accessories',
      count: '56 items',
      tagline: 'Cutlery inserts, dustbin pullouts & magnetic catches',
      spec: 'Custom modular grid dividers in anodized charcoal aluminum.',
    },
    {
      id: 'all-products',
      name: 'All Architectural Hardware',
      count: '380+ items',
      tagline: 'Complete catalog of professional interior hardware',
      spec: 'Commercial grade, residential tested, backed by VAR quality assurance.',
    },
  ];

  return (
    <section id="hardware" className="py-24 md:py-32 bg-[#EEEDE6] text-[#1C1D1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Header & Feature Banner (Panel 4) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[1.5px] bg-[#62645A]" />
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#62645A] uppercase">
                Precision Materials
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1C1D1A] font-normal leading-[1.1] uppercase tracking-tight">
              Hardware That Brings Design to Life.
            </h2>
            <p className="mt-5 text-base sm:text-lg text-[#62645A] font-light leading-relaxed">
              Premium fittings and accessories for beautiful, functional spaces. Engineered for effortless, silent motion and lasting durability.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={() => setSelectedCategory(categories[7])}
                className="bg-[#62645A] hover:bg-[#46483F] text-white text-xs uppercase tracking-[0.18em] font-bold px-6 py-3.5 rounded-xs transition-colors shadow-sm flex items-center gap-2 group"
              >
                <span>View All Products</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <span className="text-xs text-[#77786F] font-mono tracking-wider">
                Over 380+ Showroom SKU items
              </span>
            </div>
          </div>

          {/* Luxury Macro Hardware Image Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[16/11] rounded-xs overflow-hidden border border-[#D9DAD0] shadow-xl bg-[#1C1D1A]">
              <img
                src="/assets/var_hardware_hero_1790654652422.jpg"
                alt="VAR Architectural Concealed Soft Close Hinge and Precision Hardware"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1D1A]/80 via-transparent to-transparent" />
              
              {/* Floating Technical Spec Callout */}
              <div className="absolute bottom-5 left-5 right-5 bg-[#F7F6F1]/95 backdrop-blur-md p-4 border border-[#D9DAD0] rounded-xs flex items-center justify-between">
                <div>
                  <div className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#62645A]">
                    Featured Fitting
                  </div>
                  <div className="text-sm font-serif font-semibold text-[#1C1D1A]">
                    Integrated Silent-Damping Concealed Hinge
                  </div>
                  <div className="text-[11px] text-[#77786F] mt-0.5">
                    Tested to 200,000 cycles · 3D Cam adjustment
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#46483F] text-[#F7F6F1] flex items-center justify-center font-bold text-xs shrink-0">
                  A+
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Section Heading */}
        <div className="border-t border-[#D9DAD0] pt-12 pb-6">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-2xl text-[#1C1D1A] font-normal">
              Browse Hardware Categories
            </h3>
            <span className="text-xs text-[#62645A] uppercase tracking-[0.2em] font-semibold">
              Live Stock at Puducherry Showroom
            </span>
          </div>
        </div>

        {/* 8 Categories Grid Matching Panel 4 */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat, idx) => (
            <div
              key={cat.id}
              onClick={() => setSelectedCategory(cat)}
              className="group cursor-pointer bg-[#F7F6F1] border border-[#D9DAD0] hover:border-[#62645A] p-5 sm:p-6 rounded-xs transition-all duration-300 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] text-[#77786F] mb-3">
                  <span className="font-mono">0{idx + 1}</span>
                  <span className="bg-[#EEEDE6] px-2 py-0.5 rounded-xs text-[10px] font-medium text-[#46483F]">
                    {cat.count}
                  </span>
                </div>

                <h4 className="font-serif text-lg sm:text-xl text-[#1C1D1A] group-hover:text-[#46483F] transition-colors">
                  {cat.name}
                </h4>

                <p className="mt-2 text-xs text-[#77786F] line-clamp-2 leading-relaxed">
                  {cat.tagline}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#EEEDE6] flex items-center justify-between text-xs font-semibold text-[#62645A] group-hover:text-[#1C1D1A] transition-colors">
                <span className="tracking-wider uppercase text-[11px]">Inspect Specs</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hardware Item Spec Modal */}
      {selectedCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1C1D1A]/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-[#F7F6F1] border border-[#D9DAD0] max-w-xl w-full rounded-xs shadow-2xl p-6 sm:p-8 relative">
            <button
              onClick={() => setSelectedCategory(null)}
              className="absolute top-5 right-5 text-[#77786F] hover:text-[#1C1D1A] p-1"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2 text-[#62645A]">
              <Shield className="w-4 h-4" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold">
                VAR Architectural Standard
              </span>
            </div>

            <h3 className="font-serif text-3xl text-[#1C1D1A] font-normal">
              {selectedCategory.name}
            </h3>

            <p className="mt-2 text-sm text-[#46483F]">
              {selectedCategory.tagline}
            </p>

            <div className="my-6 p-4 bg-[#EEEDE6] border border-[#D9DAD0] rounded-xs space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-[#62645A]">
                Engineering Specifications:
              </div>
              <p className="text-xs text-[#1C1D1A] leading-relaxed">
                {selectedCategory.spec}
              </p>
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#D9DAD0] text-[11px] text-[#77786F]">
                <div>• Warranty: 10-Year Mechanical</div>
                <div>• Finish: Salt-spray 480hr tested</div>
                <div>• Action: Fluid-damped soft-close</div>
                <div>• Origin: Precision German/European tooling</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => {
                  const catName = selectedCategory.name;
                  setSelectedCategory(null);
                  onOpenConsultation(`Hardware: ${catName}`);
                }}
                className="flex-1 bg-[#62645A] hover:bg-[#46483F] text-white py-3 px-4 text-xs uppercase tracking-[0.16em] font-bold rounded-xs transition-colors text-center"
              >
                Request Hardware Sample / Quote
              </button>
              <button
                onClick={() => setSelectedCategory(null)}
                className="py-3 px-4 border border-[#D9DAD0] text-[#46483F] hover:bg-[#EEEDE6] text-xs uppercase tracking-[0.16em] font-medium rounded-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

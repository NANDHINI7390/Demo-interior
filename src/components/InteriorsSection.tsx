import React, { useState } from 'react';
import { ArrowRight, Sparkles, Check, X } from 'lucide-react';

interface InteriorCategory {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  specifications: string[];
  materials: string[];
}

interface InteriorsSectionProps {
  onSelectCategory: (categoryTitle: string) => void;
  onOpenConsultation: (initialTopic?: string) => void;
}

export const InteriorsSection: React.FC<InteriorsSectionProps> = ({
  onSelectCategory,
  onOpenConsultation,
}) => {
  const [activeModalCategory, setActiveModalCategory] = useState<InteriorCategory | null>(null);

  const categories: InteriorCategory[] = [
    {
      id: 'kitchens',
      title: 'Modular Kitchens',
      subtitle: 'Ergonomic, heat & moisture resistant layouts',
      image: '/src/assets/images/var_hero_kitchen_1790654633654.jpg',
      description:
        'Architectural modular kitchens engineered with precision joinery, soft-close hardware, anti-fingerprint acrylic or PU finishes, and seamless quartz waterfall surfaces.',
      specifications: [
        'Custom Island & Parallel configurations',
        'Heavy-duty tandem box drawer systems',
        'Integrated corner carousel & pull-out pantries',
        'Concealed warm cove lighting channels',
      ],
      materials: ['Calacatta Quartz', 'BWP Marine Ply', 'Muted Olive Matte PU', 'Brushed Graphite Aluminum'],
    },
    {
      id: 'wardrobes',
      title: 'Wardrobes',
      subtitle: 'Walk-in & sliding systems with sensor lighting',
      image: '/src/assets/images/var_wardrobe_luxury_1790654724721.jpg',
      description:
        'Floor-to-ceiling bespoke wardrobes with anodized aluminum profiles, fluted smoked glass, leather-wrapped accessory trays, and automated ambient sensor illumination.',
      specifications: [
        'Floor-to-ceiling floor trackless sliding systems',
        'Integrated jewelry & watch organizer drawers',
        'Full-height concealed soft-close pivot hinges',
        'Automatic LED wardrobe strip lighting',
      ],
      materials: ['Fluted Smoked Glass', 'Dark Ash Veneer', 'Champagne Anodized Aluminum', 'Italian Velvet Lining'],
    },
    {
      id: 'living',
      title: 'Living Rooms',
      subtitle: 'Contemporary media walls & acoustic paneling',
      image: '/src/assets/images/var_living_dining_1790654677757.jpg',
      description:
        'Refined living spaces harmonizing textured stone, fluted wood paneling, floating credenzas, and integrated architectural ambient illumination.',
      specifications: [
        'Seamless acoustic wood-slat feature walls',
        'Concealed cable management & floating consoles',
        'Architectural room dividers with brass inlays',
        'Custom built-in display vitrines',
      ],
      materials: ['Travertine Stone', 'Natural Oak Slats', 'Muted Olive Millwork', 'Warm LED 2700K Diffusers'],
    },
    {
      id: 'bedrooms',
      title: 'Bedrooms',
      subtitle: 'Quiet luxury sanctuaries tailored for serenity',
      image: '/src/assets/images/var_living_dining_1790654677757.jpg',
      description:
        'Restful sanctuaries combining bespoke upholstered headboard walls, integrated bedside floating drawers, concealed vanity units, and quiet acoustic buffers.',
      specifications: [
        'Integrated upholstered acoustic headboards',
        'Cantilevered bedside ledges with wireless charging',
        'Concealed dresser with tri-fold vanity mirror',
        'Warm circadian lighting scenes',
      ],
      materials: ['Bouclé Fabric', 'Muted Olive Lacquer', 'Natural Ash Wood', 'Brushed Brass Accents'],
    },
    {
      id: 'office',
      title: 'Office Interiors',
      subtitle: 'Executive workspaces and functional studios',
      image: '/src/assets/images/var_showroom_1790654664447.jpg',
      description:
        'Productive commercial environments designed with ergonomic workstations, modular credenzas, architectural glass dividers, and acoustic ceiling baffles.',
      specifications: [
        'Motorized height-adjustable executive desks',
        'Modular filing & archival casework',
        'Acoustic felt wall paneling',
        'High-density cable spine routing',
      ],
      materials: ['HPL Compact Laminate', 'Matte Black Steel', 'Muted Olive Acoustic PET', 'Tempered Glass'],
    },
    {
      id: 'full-home',
      title: 'Full Home Interiors',
      subtitle: 'Turnkey architectural harmony from entry to terrace',
      image: '/src/assets/images/var_hero_kitchen_1790654633654.jpg',
      description:
        'Comprehensive turnkey execution covering civil modifications, bespoke carpentry, electrical planning, surface finishes, and hardware curation under one single point of accountability.',
      specifications: [
        'End-to-end 3D architectural design & CAD detailing',
        'Precision factory-finished carpentry & joinery',
        'Dedicated on-site project management',
        'Complete 10-year structural warranty',
      ],
      materials: ['Full VAR Architectural Materials Palette', 'Curated European Fittings', 'Custom Millwork'],
    },
  ];

  return (
    <section id="interiors" className="py-24 md:py-32 bg-[#F7F6F1] text-[#1C1D1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#D9DAD0] pb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[1.5px] bg-[#62645A]" />
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#62645A] uppercase">
                Curated Spaces
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1C1D1A] font-normal tracking-tight">
              Interiors
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#62645A] font-light font-serif italic">
              Spaces designed around your life.
            </p>
          </div>

          <p className="mt-6 md:mt-0 text-sm text-[#77786F] max-w-md font-sans leading-relaxed">
            Every home is an architectural composition. We harmonize bespoke millwork with ergonomic flow, utilizing handpicked sustainable timber and precision European fittings.
          </p>
        </div>

        {/* 6 Premium Visual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => setActiveModalCategory(cat)}
              className="group cursor-pointer bg-[#EEEDE6] border border-[#D9DAD0] rounded-xs overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-[#62645A] flex flex-col"
            >
              {/* Image Frame with Zoom Effect */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#1C1D1A]">
                <img
                  src={cat.image}
                  alt={cat.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-95"
                />
                {/* Subtle Olive Overlay on Hover */}
                <div className="absolute inset-0 bg-[#46483F]/0 group-hover:bg-[#46483F]/25 transition-colors duration-500" />

                {/* Corner Tag */}
                <div className="absolute top-3 left-3 bg-[#1C1D1A]/80 backdrop-blur-xs text-[#F7F6F1] px-2.5 py-1 text-[10px] tracking-[0.18em] uppercase font-medium rounded-xs">
                  VAR Studio
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between bg-[#F7F6F1] group-hover:bg-[#EEEDE6] transition-colors duration-300">
                <div>
                  <h3 className="font-serif text-2xl text-[#1C1D1A] font-normal group-hover:text-[#46483F] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="mt-2 text-xs text-[#77786F] font-sans leading-relaxed">
                    {cat.subtitle}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#D9DAD0]/80 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.18em] font-semibold text-[#62645A] group-hover:text-[#1C1D1A] transition-colors">
                    Explore Details
                  </span>
                  <div className="w-8 h-8 rounded-full border border-[#D9DAD0] group-hover:border-[#62645A] group-hover:bg-[#62645A] group-hover:text-white flex items-center justify-center text-[#62645A] transition-all duration-300">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Detail Modal */}
      {activeModalCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1C1D1A]/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-[#F7F6F1] border border-[#D9DAD0] max-w-2xl w-full rounded-xs shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="relative aspect-[16/9] w-full bg-[#1C1D1A]">
              <img
                src={activeModalCategory.image}
                alt={activeModalCategory.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1D1A] via-transparent to-transparent opacity-80" />
              <button
                onClick={() => setActiveModalCategory(null)}
                className="absolute top-4 right-4 bg-[#1C1D1A]/70 hover:bg-[#1C1D1A] text-white p-2 rounded-full transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#D9DAD0]">
                  VAR Interiors Portfolio
                </span>
                <h3 className="font-serif text-3xl text-white font-normal">
                  {activeModalCategory.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              <p className="text-sm text-[#46483F] leading-relaxed">
                {activeModalCategory.description}
              </p>

              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#62645A] mb-3">
                  Key Architectural Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeModalCategory.specifications.map((spec, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#1C1D1A]">
                      <Check className="w-3.5 h-3.5 text-[#62645A] shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#62645A] mb-3">
                  Signature Materials Applied
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalCategory.materials.map((mat, i) => (
                    <span
                      key={i}
                      className="bg-[#EEEDE6] border border-[#D9DAD0] text-[#46483F] px-3 py-1 text-xs rounded-xs"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#D9DAD0] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#77786F]">
                  Tailored measurements & 3D visualization included.
                </div>
                <button
                  onClick={() => {
                    const title = activeModalCategory.title;
                    setActiveModalCategory(null);
                    onOpenConsultation(title);
                  }}
                  className="w-full sm:w-auto bg-[#62645A] hover:bg-[#46483F] text-white text-xs uppercase tracking-[0.18em] font-bold px-6 py-3 rounded-xs transition-colors"
                >
                  Consult for {activeModalCategory.title} →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

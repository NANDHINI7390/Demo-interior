import React, { useState } from 'react';
import { ProjectItem, ProjectDetailModal } from './ProjectDetailModal';
import { ArrowRight, Info } from 'lucide-react';

interface ProjectsSectionProps {
  onOpenConsultation: (projectTitle?: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onOpenConsultation,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const projectsData: ProjectItem[] = [
    {
      id: 'proj-1',
      title: 'Contemporary Kitchen',
      category: 'kitchens',
      categoryLabel: 'Kitchen',
      location: 'Beach Road, Puducherry',
      heroImage: '/src/assets/images/var_hero_kitchen_1790654633654.jpg',
      gallery: [
        '/src/assets/images/var_kitchen_detail_1790654739950.jpg',
        '/src/assets/images/var_hardware_hero_1790654652422.jpg',
        '/src/assets/images/var_living_dining_1790654677757.jpg',
      ],
      overview:
        'A modern kitchen designed for beauty, functionality and everyday comfort. Clean lines, premium materials and smart storage solutions tailored for contemporary coastal living.',
      highlights: [
        'Modern minimalist design with handless push-to-open profiles',
        'Premium fittings and soft-close hydraulic accessories',
        'Smart storage solutions including corner magic carousels',
        'Elegant architectural recessed lighting channels (2700K)',
      ],
      materials: [
        { name: 'Muted Olive Matte PU', hex: '#62645A', note: 'Anti-fingerprint lacquer' },
        { name: 'Calacatta Gold Quartz', hex: '#F7F6F1', note: 'Stain & heat resistant 20mm' },
        { name: 'Natural Ash Veneer', hex: '#D9DAD0', note: 'FSC-certified timber' },
        { name: 'Brushed Graphite Aluminum', hex: '#46483F', note: 'European profile gola' },
      ],
    },
    {
      id: 'proj-2',
      title: 'Luxury Wardrobe',
      category: 'wardrobes',
      categoryLabel: 'Wardrobe',
      location: 'White Town, Puducherry',
      heroImage: '/src/assets/images/var_wardrobe_luxury_1790654724721.jpg',
      gallery: [
        '/src/assets/images/var_handles_accessories_1790654753472.jpg',
        '/src/assets/images/var_hardware_hero_1790654652422.jpg',
      ],
      overview:
        'An expansive walk-in dressing suite with fluted smoked glass doors, Italian velvet-lined watch and jewelry pullouts, and automated soft ambient sensor illumination.',
      highlights: [
        'Floor-to-ceiling floor trackless sliding suspension system',
        'Integrated warm LED vertical profile lighting',
        'Modular shoe and luxury accessories display case',
        'Concealed soft-closing dampers on all moving elements',
      ],
      materials: [
        { name: 'Smoked Fluted Glass', hex: '#77786F', note: 'Tempered 8mm safety' },
        { name: 'Muted Olive Millwork', hex: '#46483F', note: 'Moisture resistant core' },
        { name: 'Brushed Bronze Hardware', hex: '#62645A', note: 'Solid architectural metal' },
        { name: 'Italian Velvet Felt', hex: '#1C1D1A', note: 'Anti-scratch interior' },
      ],
    },
    {
      id: 'proj-3',
      title: 'Elegant Living Room',
      category: 'living',
      categoryLabel: 'Living Room',
      location: 'Lawspet, Puducherry',
      heroImage: '/src/assets/images/var_living_dining_1790654677757.jpg',
      gallery: [
        '/src/assets/images/var_hero_kitchen_1790654633654.jpg',
        '/src/assets/images/var_showroom_1790654664447.jpg',
      ],
      overview:
        'A light-filled open concept family living area featuring an acoustic fluted timber feature wall, floating travertine TV credenza, and custom architectural ceiling coves.',
      highlights: [
        'Acoustically tuned wooden wall paneling system',
        'Concealed conduit routing with no visible wires or ports',
        'Integrated ambient perimeter cove lighting',
        'Modular display vitrines with muted olive frames',
      ],
      materials: [
        { name: 'Natural Oak Slats', hex: '#D9DAD0', note: 'Satin oil finish' },
        { name: 'Beige Travertine Stone', hex: '#EEEDE6', note: 'Honed architectural slab' },
        { name: 'Muted Olive Lacquer', hex: '#62645A', note: 'Satin smooth finish' },
        { name: 'Matte Charcoal Steel', hex: '#1C1D1A', note: 'Structural accents' },
      ],
    },
    {
      id: 'proj-4',
      title: 'Contemporary Bedroom',
      category: 'bedrooms',
      categoryLabel: 'Bedroom',
      location: 'Auroville Vicinity, Puducherry',
      heroImage: '/src/assets/images/var_kitchen_detail_1790654739950.jpg',
      gallery: [
        '/src/assets/images/var_wardrobe_luxury_1790654724721.jpg',
        '/src/assets/images/var_living_dining_1790654677757.jpg',
      ],
      overview:
        'A serene master suite prioritizing tactile calmness, featuring custom curved acoustic wall panels, cantilevered bedside tables, and custom concealed vanity.',
      highlights: [
        'Curved corner architectural wall cladding',
        'Integrated inductive phone charging spots inside bedside drawers',
        'Concealed sliding wardrobe with integrated mirror',
        'Quiet acoustic buffering for undisturbed sleep',
      ],
      materials: [
        { name: 'Textured Linen Bouclé', hex: '#F7F6F1', note: 'Stain-resistant weave' },
        { name: 'Muted Olive Trim', hex: '#62645A', note: 'Custom crafted moldings' },
        { name: 'Soft Ash Wood', hex: '#D9DAD0', note: 'Natural grain texture' },
        { name: 'Matte Graphite Hardware', hex: '#46483F', note: 'Silent glide mechanisms' },
      ],
    },
    {
      id: 'proj-5',
      title: 'Office Interior',
      category: 'commercial',
      categoryLabel: 'Commercial',
      location: 'Anna Salai, Puducherry',
      heroImage: '/src/assets/images/var_showroom_1790654664447.jpg',
      gallery: [
        '/src/assets/images/var_hardware_hero_1790654652422.jpg',
        '/src/assets/images/var_handles_accessories_1790654753472.jpg',
      ],
      overview:
        'A sophisticated design studio and consulting suite combining modular glass partitions, acoustic meeting booths, and high-density architectural material sample libraries.',
      highlights: [
        'Slim profile acoustic glass partition walls',
        'Integrated conference table with hidden power spines',
        'Material sample pull-out vertical drawers',
        'Ergonomic lighting with automated daylight dimming',
      ],
      materials: [
        { name: 'Anodized Charcoal Aluminum', hex: '#1C1D1A', note: 'Ultra-thin frame' },
        { name: 'Muted Olive Acoustic Felt', hex: '#62645A', note: 'NRC 0.85 rating' },
        { name: 'Warm White Laminate', hex: '#F7F6F1', note: 'High pressure compact' },
        { name: 'Smoked Tempered Glass', hex: '#77786F', note: '10mm sound rated' },
      ],
    },
    {
      id: 'proj-6',
      title: 'Full Home Interior',
      category: 'kitchens',
      categoryLabel: 'Full Residence',
      location: 'Muthialpet, Puducherry',
      heroImage: '/src/assets/images/var_living_dining_1790654677757.jpg',
      gallery: [
        '/src/assets/images/var_hero_kitchen_1790654633654.jpg',
        '/src/assets/images/var_wardrobe_luxury_1790654724721.jpg',
      ],
      overview:
        'A 2,800 sq.ft turnkey residence executed seamlessly from initial CAD civil blueprints through bespoke carpentry, false ceilings, lighting design, and European hardware fit-out.',
      highlights: [
        'Harmonized architectural design language across all 3 floors',
        'Comprehensive 100% moisture-tested BWP marine ply joinery',
        'Single point of contact project management',
        'Delivered on-time with zero snag list',
      ],
      materials: [
        { name: 'Full VAR Materials Suite', hex: '#62645A', note: 'Curated cohesive palette' },
        { name: 'Travertine Flooring', hex: '#EEEDE6', note: 'Large format tiles' },
        { name: 'European Soft-Close Fittings', hex: '#46483F', note: 'Full 10-yr warranty' },
        { name: 'Warm White Silicate Paint', hex: '#F7F6F1', note: 'Eco breathable finish' },
      ],
    },
  ];

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'kitchens', label: 'Kitchens' },
    { id: 'wardrobes', label: 'Wardrobes' },
    { id: 'living', label: 'Living Rooms' },
    { id: 'bedrooms', label: 'Bedrooms' },
    { id: 'commercial', label: 'Commercial' },
  ];

  const filteredProjects =
    selectedFilter === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedFilter);

  return (
    <section id="projects" className="py-24 md:py-32 bg-[#F7F6F1] text-[#1C1D1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header (Panel 6) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[1.5px] bg-[#62645A]" />
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#62645A] uppercase">
                Portfolio Showcase
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1C1D1A] font-normal tracking-tight">
              Our Projects
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#62645A] font-serif italic">
              Real spaces. Real possibilities.
            </p>
          </div>

          {/* Presentation Note */}
          <div className="mt-6 md:mt-0 flex items-center gap-2 text-xs text-[#77786F] bg-[#EEEDE6] border border-[#D9DAD0] px-3.5 py-2 rounded-xs">
            <Info className="w-4 h-4 text-[#62645A] shrink-0" />
            <span>Interactive layout demonstration ready for VAR client photographs</span>
          </div>
        </div>

        {/* Filter Controls (Panel 6) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none border-b border-[#D9DAD0]">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-4 py-2 text-xs uppercase tracking-[0.16em] font-semibold rounded-xs transition-all whitespace-nowrap cursor-pointer ${
                selectedFilter === tab.id
                  ? 'bg-[#62645A] text-white shadow-xs'
                  : 'bg-[#EEEDE6] text-[#46483F] hover:bg-[#D9DAD0]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group cursor-pointer bg-[#EEEDE6] border border-[#D9DAD0] hover:border-[#62645A] rounded-xs overflow-hidden transition-all duration-500 hover:shadow-xl flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/11] overflow-hidden bg-[#1C1D1A]">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#46483F]/0 group-hover:bg-[#46483F]/20 transition-colors duration-500" />
                <div className="absolute top-3 left-3 bg-[#1C1D1A]/80 backdrop-blur-xs text-[#F7F6F1] px-2.5 py-1 text-[10px] tracking-[0.18em] uppercase font-mono rounded-xs">
                  {project.categoryLabel}
                </div>
              </div>

              {/* Text Area */}
              <div className="p-6 bg-[#F7F6F1] group-hover:bg-[#EEEDE6] transition-colors flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] text-[#77786F] mb-1">
                    {project.location}
                  </div>
                  <h3 className="font-serif text-2xl text-[#1C1D1A] font-normal group-hover:text-[#46483F] transition-colors">
                    {project.title}
                  </h3>
                </div>

                <div className="mt-6 pt-4 border-t border-[#D9DAD0]/80 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.16em] font-semibold text-[#62645A] group-hover:text-[#1C1D1A] transition-colors">
                    View Project Details
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

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onEnquire={(projectName) => {
          setActiveProject(null);
          onOpenConsultation(projectName);
        }}
      />
    </section>
  );
};

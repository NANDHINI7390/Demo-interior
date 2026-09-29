import React, { useState } from 'react';
import { X, Check, ArrowRight, Shield, Layers, Calendar, MapPin, Split, Clock } from 'lucide-react';
import { BeforeAfterSlider } from './BeforeAfterSlider';

export interface ProjectItem {
  id: string;
  title: string;
  category: 'kitchens' | 'wardrobes' | 'living' | 'bedrooms' | 'commercial';
  categoryLabel: string;
  location: string;
  heroImage: string;
  beforeImage?: string;
  gallery: string[];
  overview: string;
  highlights: string[];
  materials: { name: string; hex: string; note: string }[];
  timeline?: { phase: string; date: string; status: string }[];
}

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onEnquire: (projectName: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onEnquire,
}) => {
  if (!project) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'beforeAfter' | 'timeline'>('overview');
  const images = [project.heroImage, ...project.gallery];

  const beforePhoto = project.beforeImage || '/assets/var_kitchen_detail_1790654739950.jpg';

  const defaultTimeline = project.timeline || [
    { phase: '01. Spatial Survey & 3D Laser Measure', date: '3 Days', status: 'Completed' },
    { phase: '02. Architectural CAD & Material Selection', date: '7 Days', status: 'Completed' },
    { phase: '03. Factory Sizing & PU Lacquering', date: '14 Days', status: 'Completed' },
    { phase: '04. On-site Precision Installation & Leveling', date: '8 Days', status: 'Completed' },
    { phase: '05. Deep Cleaning & 10-Year Warranty Handover', date: '1 Day', status: 'Completed' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#1C1D1A]/85 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-[#F7F6F1] border border-[#D9DAD0] max-w-5xl w-full rounded-xs shadow-2xl overflow-hidden flex flex-col max-h-[92vh] relative">
        {/* Top bar with close */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#D9DAD0] bg-[#EEEDE6]">
          <div className="flex items-center gap-3">
            <span className="text-[10px] tracking-[0.25em] font-bold uppercase text-[#62645A]">
              Project Specification Preview
            </span>
            <span className="text-xs text-[#77786F] font-mono">· {project.title}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#77786F] hover:text-[#1C1D1A] rounded-xs transition-colors hover:bg-[#D9DAD0] cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* View Switcher Tabs - Horizontally scrollable on mobile */}
        <div className="px-4 sm:px-6 py-2 bg-white border-b border-[#D9DAD0] flex items-center gap-2 overflow-x-auto scrollbar-none">
          {[
            { id: 'overview', label: 'Overview & Gallery' },
            { id: 'beforeAfter', label: 'Before & After' },
            { id: 'timeline', label: 'Execution Timeline' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                activeTab === tab.id
                  ? 'bg-[#62645A] text-white'
                  : 'text-[#46483F] hover:bg-[#EEEDE6]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modal Content Scroll Area */}
        <div className="overflow-y-auto p-4 sm:p-8 space-y-6 sm:space-y-8">
          {/* TAB 1: OVERVIEW & GALLERY */}
          {activeTab === 'overview' && (
            <>
              {/* Main Hero & Thumbnail Switcher */}
              <div className="space-y-4">
                <div className="relative aspect-[16/9] w-full rounded-xs overflow-hidden bg-[#1C1D1A] border border-[#D9DAD0]">
                  <img
                    src={images[activeImageIndex] || project.heroImage}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#1C1D1A]/80 text-[#F7F6F1] px-3 py-1 text-xs tracking-widest uppercase font-mono rounded-xs">
                    {project.categoryLabel}
                  </div>
                </div>

                {/* Thumbnail Row */}
                <div className="flex items-center gap-3 overflow-x-auto pb-2">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-20 sm:w-24 aspect-[16/10] rounded-xs overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                        activeImageIndex === idx
                          ? 'border-[#62645A] shadow-md scale-95'
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${project.title} thumbnail ${idx + 1}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Project Header & Metadata */}
              <div className="border-b border-[#D9DAD0] pb-6">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                  <div>
                    <span className="inline-block text-[11px] uppercase tracking-[0.2em] font-semibold text-[#62645A] bg-[#EEEDE6] px-2.5 py-0.5 rounded-xs mb-2">
                      {project.categoryLabel}
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1C1D1A] font-normal">
                      {project.title}
                    </h2>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-[#77786F]">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#62645A]" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#62645A]" />
                      <span>Delivered by VAR</span>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-sm sm:text-base text-[#46483F] leading-relaxed max-w-3xl">
                  {project.overview}
                </p>
              </div>

              {/* Highlights & Materials Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Design Highlights */}
                <div className="bg-[#EEEDE6] p-6 rounded-xs border border-[#D9DAD0]">
                  <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-[#62645A] mb-4 flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#62645A]" />
                    Design Highlights
                  </h3>
                  <ul className="space-y-3">
                    {project.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#1C1D1A]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#62645A] mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Materials Used Swatches */}
                <div className="bg-[#EEEDE6] p-6 rounded-xs border border-[#D9DAD0]">
                  <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-[#62645A] mb-4 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#62645A]" />
                    Materials Applied
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.materials.map((mat, i) => (
                      <div
                        key={i}
                        className="p-3 bg-[#F7F6F1] border border-[#D9DAD0] rounded-xs flex items-center gap-3"
                      >
                        <div
                          className="w-7 h-7 rounded-xs border border-[#77786F]/40 shrink-0 shadow-inner"
                          style={{ backgroundColor: mat.hex }}
                        />
                        <div className="overflow-hidden">
                          <div className="text-xs font-semibold text-[#1C1D1A] truncate">
                            {mat.name}
                          </div>
                          <div className="text-[10px] text-[#77786F] truncate">{mat.note}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {/* TAB 2: BEFORE & AFTER (Requirement #17) */}
          {activeTab === 'beforeAfter' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div>
                <h3 className="font-serif text-2xl text-[#1C1D1A]">
                  Before & After Transformation
                </h3>
                <p className="text-xs text-[#77786F] mt-1">
                  Drag the slider to see the space before site clearing and after VAR architectural completion.
                </p>
              </div>

              <BeforeAfterSlider
                beforeImage={beforePhoto}
                afterImage={project.heroImage}
                beforeLabel="ORIGINAL SPACE"
                afterLabel="VAR ARCHITECTURAL FIT-OUT"
                aspectRatio="aspect-[16/9]"
              />
            </div>
          )}

          {/* TAB 3: TIMELINE (Requirement #17) */}
          {activeTab === 'timeline' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div>
                <h3 className="font-serif text-2xl text-[#1C1D1A]">
                  Project Execution Schedule
                </h3>
                <p className="text-xs text-[#77786F] mt-1">
                  Standard VAR 5-phase delivery model followed for {project.title}.
                </p>
              </div>

              <div className="space-y-3">
                {defaultTimeline.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-[#EEEDE6] border border-[#D9DAD0] rounded-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div>
                      <div className="font-semibold text-xs text-[#1C1D1A]">{item.phase}</div>
                      <div className="text-[11px] text-[#77786F] mt-0.5">Execution Duration: {item.date}</div>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-xs font-semibold self-start sm:self-auto">
                      ✓ {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Call to Action */}
          <div className="pt-4 border-t border-[#D9DAD0] flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#F7F6F1]">
            <p className="text-xs text-[#77786F]">
              Ready to create something tailored for your residence or office?
            </p>
            <button
              onClick={() => {
                const name = project.title;
                onClose();
                onEnquire(name);
              }}
              className="w-full sm:w-auto bg-[#62645A] hover:bg-[#46483F] text-white text-xs uppercase tracking-[0.18em] font-bold px-8 py-3.5 rounded-xs transition-colors flex items-center justify-center gap-2 group cursor-pointer shadow-md"
            >
              <span>Enquire About Your Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

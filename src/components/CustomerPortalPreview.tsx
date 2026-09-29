import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Clock, FileText, Image as ImageIcon, MessageSquare, Shield, Sparkles, ExternalLink } from 'lucide-react';
import { VarLogo } from './VarLogo';

interface CustomerPortalPreviewProps {
  onOpenPortal: (initialTab?: string) => void;
  onOpenAdmin?: () => void;
}

export const CustomerPortalPreview: React.FC<CustomerPortalPreviewProps> = ({
  onOpenPortal,
  onOpenAdmin,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'updates' | 'docs' | 'chat'>('overview');

  return (
    <section id="digital-experience" className="py-24 md:py-32 bg-[#1C1D1A] text-[#F7F6F1] relative overflow-hidden border-t border-b border-[#46483F]">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#46483F]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Editorial Copy (Requirement #3) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#46483F]/60 border border-[#62645A]/50 rounded-xs text-[10px] uppercase tracking-[0.25em] text-[#D9DAD0]">
              <Sparkles className="w-3 h-3 text-[#D9DAD0]" />
              <span>THE VAR DIGITAL EXPERIENCE</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F7F6F1] font-normal leading-[1.08] tracking-tight">
              Your Project.{' '}
              <span className="italic block text-[#EEEDE6]">
                Always With You.
              </span>
            </h2>

            <p className="font-serif italic text-lg sm:text-xl text-[#D9DAD0]/90">
              An easier, more transparent way to experience your project with VAR.
            </p>

            <p className="text-sm text-[#D9DAD0]/80 leading-relaxed font-light">
              We eliminate guesswork with a real-time digital portal. From 3D CAD blueprints to site installation photos, milestone sign-offs, and dedicated architect messaging — all under one unified platform.
            </p>

            <div className="p-4 bg-[#242521] border border-[#46483F] rounded-xs space-y-2 text-xs text-[#D9DAD0]">
              <div className="font-semibold text-white uppercase tracking-wider text-[11px] flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-[#62645A]" />
                Customer Portal Capabilities
              </div>
              <p className="text-[11px] text-[#77786F]">
                Live site photos · Interactive Before/After · Instant Material approvals · Itemized Quotations · Gemini AI Assistant.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              {/* Premium CTA (Requirement #3) */}
              <button
                onClick={() => onOpenPortal('dashboard')}
                className="bg-[#62645A] hover:bg-[#46483F] text-white text-xs uppercase tracking-[0.18em] font-bold px-7 py-4 rounded-xs transition-all flex items-center gap-2.5 group cursor-pointer shadow-xl border border-[#838677]"
              >
                <span>Explore Customer Portal</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {onOpenAdmin && (
                <button
                  onClick={onOpenAdmin}
                  className="border border-[#46483F] hover:bg-[#2A2C26] text-[#D9DAD0] hover:text-white text-xs uppercase tracking-[0.16em] font-semibold px-5 py-4 rounded-xs transition-colors cursor-pointer"
                >
                  VAR Business Admin Hub
                </button>
              )}
            </div>
          </div>

          {/* Right Mock Tablet / Dashboard Interface */}
          <div className="lg:col-span-7">
            <div className="bg-[#242521] border border-[#46483F] rounded-xs shadow-2xl overflow-hidden text-[#F7F6F1]">
              {/* Dashboard Top bar */}
              <div className="bg-[#1C1D1A] px-5 py-3.5 border-b border-[#46483F] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <VarLogo variant="light" size="sm" withTagline={false} />
                  <span className="text-[10px] tracking-[0.2em] uppercase font-mono text-[#77786F] hidden sm:inline">
                    Client Portal v2.0
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 text-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] text-[#D9DAD0]">Live Site Sync</span>
                  </div>
                  <button
                    onClick={() => onOpenPortal(activeTab)}
                    className="text-[10px] uppercase font-bold tracking-wider text-[#62645A] hover:text-[#D9DAD0] flex items-center gap-1 cursor-pointer"
                  >
                    <span>Full Screen</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Dashboard Layout Body */}
              <div className="grid grid-cols-1 md:grid-cols-12 min-h-[380px]">
                {/* Mini Navigation: Horizontal bar on mobile, Sidebar on desktop */}
                <div className="md:col-span-4 bg-[#1F201C] p-3 sm:p-4 border-b md:border-b-0 md:border-r border-[#46483F] flex flex-row md:flex-col justify-between overflow-x-auto scrollbar-none gap-2">
                  <div className="flex md:flex-col items-center md:items-stretch gap-1 sm:gap-1.5 shrink-0">
                    <button
                      onClick={() => setActiveTab('overview')}
                      className={`whitespace-nowrap text-left px-3 py-2 text-xs rounded-xs flex items-center gap-2 transition-colors cursor-pointer shrink-0 ${
                        activeTab === 'overview'
                          ? 'bg-[#62645A] text-white font-semibold'
                          : 'text-[#D9DAD0] hover:bg-[#2A2C26]'
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>My Project</span>
                    </button>

                    <button
                      onClick={() => setActiveTab('updates')}
                      className={`whitespace-nowrap text-left px-3 py-2 text-xs rounded-xs flex items-center gap-2 transition-colors cursor-pointer shrink-0 ${
                        activeTab === 'updates'
                          ? 'bg-[#62645A] text-white font-semibold'
                          : 'text-[#D9DAD0] hover:bg-[#2A2C26]'
                      }`}
                    >
                      <ImageIcon className="w-3.5 h-3.5 shrink-0" />
                      <span>Updates & Photos</span>
                    </button>

                    <button
                      onClick={() => setActiveTab('docs')}
                      className={`whitespace-nowrap text-left px-3 py-2 text-xs rounded-xs flex items-center gap-2 transition-colors cursor-pointer shrink-0 ${
                        activeTab === 'docs'
                          ? 'bg-[#62645A] text-white font-semibold'
                          : 'text-[#D9DAD0] hover:bg-[#2A2C26]'
                      }`}
                    >
                      <FileText className="w-3.5 h-3.5 shrink-0" />
                      <span>Documents (CAD)</span>
                    </button>

                    <button
                      onClick={() => setActiveTab('chat')}
                      className={`whitespace-nowrap text-left px-3 py-2 text-xs rounded-xs flex items-center gap-2 transition-colors cursor-pointer shrink-0 ${
                        activeTab === 'chat'
                          ? 'bg-[#62645A] text-white font-semibold'
                          : 'text-[#D9DAD0] hover:bg-[#2A2C26]'
                      }`}
                    >
                      <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                      <span>Project Manager</span>
                    </button>
                  </div>

                  <div className="hidden md:block pt-4 border-t border-[#46483F] text-[10px] text-[#77786F]">
                    Client: Mr. & Mrs. Ramanathan
                    <br />
                    Site: White Town Villa #12
                  </div>
                </div>

                {/* Right Interactive Preview Screen */}
                <div className="md:col-span-8 p-5 sm:p-6 bg-[#242521] flex flex-col justify-between">
                  {activeTab === 'overview' && (
                    <div className="space-y-5 animate-in fade-in duration-200">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="text-[10px] uppercase tracking-widest text-[#77786F]">
                            Current Active Phase
                          </div>
                          <h4 className="font-serif text-2xl text-white font-normal mt-0.5">
                            Kitchen & Living Renovation
                          </h4>
                        </div>
                        <div className="text-right">
                          <span className="font-serif text-3xl font-light text-[#D9DAD0]">
                            68%
                          </span>
                          <div className="text-[10px] text-[#77786F] uppercase tracking-wider">
                            Completed
                          </div>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div>
                        <div className="h-2 w-full bg-[#1C1D1A] rounded-full overflow-hidden border border-[#46483F]">
                          <div className="h-full bg-gradient-to-r from-[#62645A] via-[#D9DAD0] to-emerald-400 w-[68%]" />
                        </div>
                      </div>

                      {/* 4 Stage Stepper */}
                      <div className="grid grid-cols-4 gap-2 pt-2 text-center text-[10px]">
                        <div className="p-2 bg-[#1C1D1A] border border-[#62645A] rounded-xs text-[#D9DAD0]">
                          <div className="font-bold text-emerald-400">✓ Done</div>
                          <div className="text-[9px] text-[#77786F] mt-0.5">Design</div>
                        </div>
                        <div className="p-2 bg-[#1C1D1A] border border-[#62645A] rounded-xs text-[#D9DAD0]">
                          <div className="font-bold text-emerald-400">✓ Done</div>
                          <div className="text-[9px] text-[#77786F] mt-0.5">Materials</div>
                        </div>
                        <div className="p-2 bg-[#2A2C26] border border-amber-500/50 rounded-xs text-white">
                          <div className="font-bold text-amber-300">Active</div>
                          <div className="text-[9px] text-[#D9DAD0] mt-0.5">Installation</div>
                        </div>
                        <div className="p-2 bg-[#1C1D1A] border border-[#46483F] rounded-xs text-[#77786F]">
                          <div>Pending</div>
                          <div className="text-[9px] text-[#77786F] mt-0.5">Handover</div>
                        </div>
                      </div>

                      {/* Site photo update preview */}
                      <div className="pt-2">
                        <div className="text-[11px] font-semibold text-[#D9DAD0] mb-2 flex items-center justify-between">
                          <span>Latest On-site Photos (Yesterday 4:30 PM)</span>
                          <span
                            className="text-[10px] text-[#62645A] hover:text-[#D9DAD0] cursor-pointer"
                            onClick={() => onOpenPortal('updates')}
                          >
                            Open Gallery →
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <div
                            onClick={() => onOpenPortal('updates')}
                            className="aspect-[4/3] rounded-xs overflow-hidden border border-[#46483F] cursor-pointer hover:opacity-80 transition-opacity"
                          >
                            <img
                              src="/assets/var_kitchen_detail_1790654739950.jpg"
                              alt="Island installation"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div
                            onClick={() => onOpenPortal('updates')}
                            className="aspect-[4/3] rounded-xs overflow-hidden border border-[#46483F] cursor-pointer hover:opacity-80 transition-opacity"
                          >
                            <img
                              src="/assets/var_hardware_hero_1790654652422.jpg"
                              alt="Hinge calibration"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div
                            onClick={() => onOpenPortal('updates')}
                            className="aspect-[4/3] rounded-xs overflow-hidden border border-[#46483F] cursor-pointer hover:opacity-80 transition-opacity"
                          >
                            <img
                              src="/assets/var_wardrobe_luxury_1790654724721.jpg"
                              alt="Wardrobe frame"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'updates' && (
                    <div className="space-y-4 animate-in fade-in duration-200">
                      <div className="text-xs font-semibold text-white">
                        Site Installation Photo Feed
                      </div>
                      <div className="space-y-3 max-h-[260px] overflow-y-auto pr-1">
                        <div className="p-3 bg-[#1C1D1A] border border-[#46483F] rounded-xs flex items-center gap-3">
                          <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                          <div className="text-xs">
                            <div className="font-semibold text-white">Soft-close Drawers Aligned</div>
                            <div className="text-[10px] text-[#77786F]">Laser calibrated to 0.5mm precision tolerance.</div>
                          </div>
                        </div>
                        <div className="p-3 bg-[#1C1D1A] border border-[#46483F] rounded-xs flex items-center gap-3">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <div className="text-xs">
                            <div className="font-semibold text-white">Travertine Island Delivered</div>
                            <div className="text-[10px] text-[#77786F]">Inspected and positioned with zero edge chips.</div>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => onOpenPortal('updates')}
                        className="w-full py-2 bg-[#62645A] hover:bg-[#46483F] text-white text-xs font-semibold uppercase tracking-wider rounded-xs cursor-pointer"
                      >
                        Launch Interactive Photo Journal
                      </button>
                    </div>
                  )}

                  {activeTab === 'docs' && (
                    <div className="space-y-4 animate-in fade-in duration-200">
                      <div className="text-xs font-semibold text-white">
                        Approved Architectural Blueprints & Receipts
                      </div>
                      <div className="space-y-2 text-xs">
                        <div className="p-3 bg-[#1C1D1A] border border-[#46483F] rounded-xs flex items-center justify-between">
                          <span className="text-[#D9DAD0]">VAR-Kitchen-Elevation-Rev3.pdf</span>
                          <span className="text-[10px] text-emerald-400 font-bold">Approved</span>
                        </div>
                        <div className="p-3 bg-[#1C1D1A] border border-[#46483F] rounded-xs flex items-center justify-between">
                          <span className="text-[#D9DAD0]">Material-Warranty-Certificates.pdf</span>
                          <span className="text-[10px] text-emerald-400 font-bold">Issued</span>
                        </div>
                      </div>
                      <button
                        onClick={() => onOpenPortal('documents')}
                        className="w-full py-2 bg-[#62645A] hover:bg-[#46483F] text-white text-xs font-semibold uppercase tracking-wider rounded-xs cursor-pointer"
                      >
                        Open CAD & Documents Vault
                      </button>
                    </div>
                  )}

                  {activeTab === 'chat' && (
                    <div className="space-y-4 animate-in fade-in duration-200">
                      <div className="text-xs font-semibold text-white">
                        Dedicated VAR Project Manager
                      </div>
                      <div className="p-3 bg-[#1C1D1A] border border-[#46483F] rounded-xs space-y-2 text-xs">
                        <div className="text-[10px] text-[#62645A] font-bold">S. Rajesh (Lead Project Architect):</div>
                        <p className="text-[#D9DAD0] text-[11px]">
                          "Good morning! Countertop sealing completed today. We will begin LED lighting tests tomorrow afternoon."
                        </p>
                      </div>
                      <button
                        onClick={() => onOpenPortal('manager')}
                        className="w-full py-2 bg-[#62645A] hover:bg-[#46483F] text-white text-xs font-semibold uppercase tracking-wider rounded-xs cursor-pointer"
                      >
                        Reply Directly in Portal
                      </button>
                    </div>
                  )}

                  <div className="pt-4 border-t border-[#46483F] flex items-center justify-between text-[11px] text-[#77786F]">
                    <span>Next milestone: Appliance Fit-out</span>
                    <span className="text-[#D9DAD0]">Oct 15, 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

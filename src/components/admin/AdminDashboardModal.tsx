import React, { useState } from 'react';
import {
  X,
  Briefcase,
  Users,
  FileSpreadsheet,
  Layers,
  Calendar,
  MessageSquare,
  TrendingUp,
  CheckCircle,
  Clock,
  ArrowRight,
  Shield,
  Phone,
  Filter,
} from 'lucide-react';
import { VarLogo } from '../VarLogo';

interface AdminDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminDashboardModal: React.FC<AdminDashboardModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'projects' | 'enquiries' | 'quotations'>('overview');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 md:p-6 bg-[#1C1D1A]/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#F7F6F1] border border-[#D9DAD0] w-full max-w-6xl h-full sm:h-[90vh] rounded-none sm:rounded-xs shadow-2xl flex flex-col overflow-hidden text-[#1C1D1A]">
        {/* Admin Header - Fully Responsive */}
        <div className="bg-[#1C1D1A] text-[#F7F6F1] px-4 sm:px-6 py-3.5 border-b border-[#46483F] flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3 sm:gap-4 min-w-0">
            <VarLogo variant="light" size="sm" withTagline={false} />
            <div className="border-l border-[#46483F] pl-3 sm:pl-4 text-[11px] sm:text-xs font-mono text-[#D9DAD0] truncate">
              Admin Operations Hub
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <span className="hidden md:inline-flex text-[10px] font-mono bg-[#46483F] text-[#D9DAD0] px-2.5 py-1 rounded-xs">
              Staff: Master Admin / Studio Owner
            </span>
            <button
              onClick={onClose}
              className="p-1.5 text-[#D9DAD0] hover:text-white rounded-xs hover:bg-[#46483F] transition-colors cursor-pointer"
              aria-label="Close Admin Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Admin Subheader & Navigation Tabs - Scrollable on mobile */}
        <div className="bg-[#EEEDE6] border-b border-[#D9DAD0] px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4 shrink-0 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'projects', label: 'Projects (12)' },
              { id: 'enquiries', label: 'Leads (28)' },
              { id: 'quotations', label: 'Quotations' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors cursor-pointer whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-[#62645A] text-white shadow-xs'
                    : 'text-[#46483F] hover:bg-[#D9DAD0]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <span className="text-[11px] text-[#77786F] hidden lg:inline shrink-0 font-mono">
            Studio: Anna Salai, Puducherry
          </span>
        </div>

        {/* Admin Body Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-[#F7F6F1]">
          {/* 4 Sample Key Performance Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div className="bg-[#EEEDE6] border border-[#D9DAD0] p-4 sm:p-5 rounded-xs">
              <div className="flex justify-between items-center text-[#77786F] text-xs">
                <span>Active Projects</span>
                <Briefcase className="w-4 h-4 text-[#62645A]" />
              </div>
              <div className="font-serif text-3xl font-normal text-[#1C1D1A] mt-2">
                12
              </div>
              <div className="text-[11px] text-[#62645A] mt-1 font-semibold">
                8 Residential · 4 Commercial
              </div>
            </div>

            <div className="bg-[#EEEDE6] border border-[#D9DAD0] p-4 sm:p-5 rounded-xs">
              <div className="flex justify-between items-center text-[#77786F] text-xs">
                <span>New Enquiries</span>
                <Users className="w-4 h-4 text-[#62645A]" />
              </div>
              <div className="font-serif text-3xl font-normal text-[#1C1D1A] mt-2">
                28
              </div>
              <div className="text-[11px] text-emerald-700 mt-1 font-semibold">
                +14 from website form this week
              </div>
            </div>

            <div className="bg-[#EEEDE6] border border-[#D9DAD0] p-4 sm:p-5 rounded-xs">
              <div className="flex justify-between items-center text-[#77786F] text-xs">
                <span>Pending Approvals</span>
                <Clock className="w-4 h-4 text-amber-700" />
              </div>
              <div className="font-serif text-3xl font-normal text-[#1C1D1A] mt-2">
                6
              </div>
              <div className="text-[11px] text-amber-800 mt-1 font-semibold">
                Awaiting customer material sign-off
              </div>
            </div>

            <div className="bg-[#EEEDE6] border border-[#D9DAD0] p-4 sm:p-5 rounded-xs">
              <div className="flex justify-between items-center text-[#77786F] text-xs">
                <span>Upcoming Installations</span>
                <Calendar className="w-4 h-4 text-[#62645A]" />
              </div>
              <div className="font-serif text-3xl font-normal text-[#1C1D1A] mt-2">
                4
              </div>
              <div className="text-[11px] text-[#46483F] mt-1 font-semibold">
                Scheduled for next 14 days
              </div>
            </div>
          </div>

          {/* Business Management Modules Grid */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl sm:text-2xl text-[#1C1D1A]">
              VAR Business Management Modules
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {[
                { title: 'Project Tracking', count: '12 active sites', icon: Briefcase, desc: 'Real-time carpenter check-in, photo upload logs & milestone trackers.' },
                { title: 'Customer Enquiries', count: '28 leads in queue', icon: Users, desc: 'Incoming consultation leads with automated WhatsApp follow-up.' },
                { title: 'Quotations & Billing', count: '₹ 42.5L in pipeline', icon: FileSpreadsheet, desc: 'One-click itemized rate card quotation generation with GST.' },
                { title: 'Materials Catalog', count: '380+ live SKUs', icon: Layers, desc: 'Plywood inventory, laminate swatches & hardware stock syncing.' },
                { title: 'Appointments & Site Visits', count: '8 booked this week', icon: Calendar, desc: 'Architect on-site laser measurement schedule & showroom demos.' },
                { title: 'Client Messaging', count: '4 unread messages', icon: MessageSquare, desc: 'Direct client communication feed tagged to specific site jobs.' },
                { title: 'Project Updates Feed', count: '16 photos uploaded today', icon: CheckCircle, desc: 'Review on-site progress photos before publishing to customer app.' },
                { title: 'Performance Analytics', count: '₹ 18.2L revenue (Sep)', icon: TrendingUp, desc: 'Conversion rate from website enquiries to paid interior turnkey orders.' },
              ].map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 bg-[#EEEDE6] border border-[#D9DAD0] hover:border-[#62645A] rounded-xs space-y-2 transition-all hover:shadow-md cursor-pointer"
                  >
                    <div className="flex justify-between items-center text-[#62645A]">
                      <Icon className="w-5 h-5 shrink-0" />
                      <span className="text-[10px] font-mono bg-white px-2 py-0.5 rounded-xs text-[#1C1D1A] font-bold">
                        {card.count}
                      </span>
                    </div>
                    <h4 className="font-serif text-base sm:text-lg text-[#1C1D1A] font-semibold">{card.title}</h4>
                    <p className="text-xs text-[#77786F] leading-relaxed">{card.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Active Projects Table & Cards */}
          <div className="bg-white border border-[#D9DAD0] p-4 sm:p-6 rounded-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h4 className="font-serif text-lg sm:text-xl text-[#1C1D1A]">Active Client Sites</h4>
              <span className="text-xs text-[#62645A] font-semibold uppercase tracking-wider font-mono">
                Showing top 4 projects
              </span>
            </div>

            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-xs text-left min-w-[580px]">
                <thead className="bg-[#EEEDE6] text-[#62645A] uppercase tracking-wider text-[10px]">
                  <tr>
                    <th className="p-3">Project / Client</th>
                    <th className="p-3">Location</th>
                    <th className="p-3">Phase</th>
                    <th className="p-3">Progress</th>
                    <th className="p-3">Architect</th>
                    <th className="p-3 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#D9DAD0]">
                  <tr>
                    <td className="p-3 font-semibold text-[#1C1D1A]">Kitchen & Living Renovation · Mr. Ramanathan</td>
                    <td className="p-3 text-[#77786F]">White Town Villa #12</td>
                    <td className="p-3 text-[#1C1D1A]">Phase 3: Installation</td>
                    <td className="p-3 font-mono font-bold text-[#62645A]">68%</td>
                    <td className="p-3 text-[#77786F]">S. Rajesh</td>
                    <td className="p-3 text-right text-emerald-700 font-bold">● Active</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-[#1C1D1A]">Luxury Penthouse Wardrobes · Dr. Anand</td>
                    <td className="p-3 text-[#77786F]">Beach Road</td>
                    <td className="p-3 text-[#1C1D1A]">Phase 2: Materials</td>
                    <td className="p-3 font-mono font-bold text-[#62645A]">45%</td>
                    <td className="p-3 text-[#77786F]">M. Karthik</td>
                    <td className="p-3 text-right text-amber-700 font-bold">● Pending Sign-off</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-[#1C1D1A]">Complete 3BHK Turnkey · Priya Narayanan</td>
                    <td className="p-3 text-[#77786F]">Lawspet</td>
                    <td className="p-3 text-[#1C1D1A]">Phase 4: Inspection</td>
                    <td className="p-3 font-mono font-bold text-[#62645A]">92%</td>
                    <td className="p-3 text-[#77786F]">S. Rajesh</td>
                    <td className="p-3 text-right text-emerald-700 font-bold">● Snag Clearing</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-[#1C1D1A]">Commercial Design Studio · Heritage Office</td>
                    <td className="p-3 text-[#77786F]">Anna Salai</td>
                    <td className="p-3 text-[#1C1D1A]">Phase 1: 3D CAD</td>
                    <td className="p-3 font-mono font-bold text-[#62645A]">25%</td>
                    <td className="p-3 text-[#77786F]">P. Sundar</td>
                    <td className="p-3 text-right text-[#62645A] font-bold">● Design Review</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Mobile Card View (No squished table on small screens) */}
            <div className="md:hidden space-y-3">
              {[
                { title: 'Kitchen & Living Renovation · Mr. Ramanathan', loc: 'White Town Villa #12', phase: 'Phase 3: Installation', prog: '68%', arch: 'S. Rajesh', status: '● Active', statusColor: 'text-emerald-700' },
                { title: 'Luxury Penthouse Wardrobes · Dr. Anand', loc: 'Beach Road', phase: 'Phase 2: Materials', prog: '45%', arch: 'M. Karthik', status: '● Pending Sign-off', statusColor: 'text-amber-700' },
                { title: 'Complete 3BHK Turnkey · Priya Narayanan', loc: 'Lawspet', phase: 'Phase 4: Inspection', prog: '92%', arch: 'S. Rajesh', status: '● Snag Clearing', statusColor: 'text-emerald-700' },
                { title: 'Commercial Design Studio · Heritage Office', loc: 'Anna Salai', phase: 'Phase 1: 3D CAD', prog: '25%', arch: 'P. Sundar', status: '● Design Review', statusColor: 'text-[#62645A]' },
              ].map((p, idx) => (
                <div key={idx} className="p-3.5 bg-[#EEEDE6] border border-[#D9DAD0] rounded-xs space-y-2 text-xs">
                  <div className="flex justify-between items-start gap-2">
                    <span className="font-semibold text-[#1C1D1A] leading-snug">{p.title}</span>
                    <span className={`font-bold font-mono shrink-0 ${p.statusColor}`}>{p.status}</span>
                  </div>
                  <div className="flex justify-between text-[11px] text-[#77786F]">
                    <span>{p.loc}</span>
                    <span>Arch: {p.arch}</span>
                  </div>
                  <div className="flex justify-between items-center pt-1 border-t border-[#D9DAD0]">
                    <span className="text-[#46483F]">{p.phase}</span>
                    <span className="font-mono font-bold text-[#62645A]">{p.prog}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

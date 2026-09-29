import React, { useState } from 'react';
import {
  X,
  Bell,
  User,
  CheckCircle2,
  Clock,
  FileText,
  Image as ImageIcon,
  MessageSquare,
  Sparkles,
  Layers,
  Calendar,
  DollarSign,
  Send,
  Download,
  Eye,
  Check,
  Phone,
  Shield,
  Sliders,
  ChevronRight,
  ArrowRight,
  Split,
  RefreshCw,
} from 'lucide-react';
import { VarLogo } from '../VarLogo';
import { BeforeAfterSlider } from '../BeforeAfterSlider';

interface CustomerPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: string;
}

export const CustomerPortalModal: React.FC<CustomerPortalModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'dashboard',
}) => {
  // Login vs Portal view state
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [activeTab, setActiveTab] = useState<string>(initialTab || 'dashboard');
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [unreadNotifications, setUnreadNotifications] = useState(3);

  // Before & After category state inside portal
  const [baCategory, setBaCategory] = useState<'kitchen' | 'wardrobe' | 'living'>('kitchen');

  // Interactive approvals & materials state
  const [materialsList, setMaterialsList] = useState([
    {
      id: 'm1',
      name: 'Cabinet Finish — Muted Olive PU Matte',
      category: 'Cabinetry',
      status: 'Approved',
      image: '/src/assets/images/var_hero_kitchen_1790654633654.jpg',
      details: 'Anti-fingerprint thermal PU lacquer on boiling waterproof marine ply.',
    },
    {
      id: 'm2',
      name: 'Hardware Handle — Knurled Graphite T-Bar',
      category: 'Hardware',
      status: 'Approved',
      image: '/src/assets/images/var_handles_accessories_1790654753472.jpg',
      details: 'Solid architectural brass with dark graphite PVD wear coating.',
    },
    {
      id: 'm3',
      name: 'Drawer System — Heavy Duty Tandem Double-Wall',
      category: 'Mechanism',
      status: 'Approved',
      image: '/src/assets/images/var_hardware_hero_1790654652422.jpg',
      details: 'Synchronized soft-close undermount slide rated to 40kg load.',
    },
    {
      id: 'm4',
      name: 'Countertop — Calacatta Gold Engineered Quartz',
      category: 'Stone',
      status: 'Pending Approval',
      image: '/src/assets/images/var_kitchen_detail_1790654739950.jpg',
      details: '20mm thickness, non-porous stain proof, bookmatched waterfall vein.',
    },
    {
      id: 'm5',
      name: 'Integrated Lighting — 2700K Warm Architectural Strip',
      category: 'Lighting',
      status: 'Approved',
      image: '/src/assets/images/var_wardrobe_luxury_1790654724721.jpg',
      details: 'High CRI 95+ concealed aluminum extrusion channels.',
    },
  ]);

  // Project Manager Chat messages state
  const [pmMessages, setPmMessages] = useState([
    {
      sender: 'S. Rajesh (Lead Project Architect)',
      time: 'Yesterday 10:15 AM',
      text: 'Good morning Mr. & Mrs. Ramanathan! Countertop sealing completed today. We will begin LED lighting tests tomorrow afternoon.',
      isUser: false,
    },
    {
      sender: 'Mr. Ramanathan',
      time: 'Yesterday 11:30 AM',
      text: 'Thank you Rajesh! The island stone finish looks incredible in the photo update. Looking forward to the lighting check.',
      isUser: true,
    },
  ]);
  const [replyInput, setReplyInput] = useState('');

  // VAR Assistant Chat state
  const [assistantMessages, setAssistantMessages] = useState([
    {
      sender: 'VAR Assistant',
      text: 'Hi! How can I help you with your VAR project today?',
      isUser: false,
    },
  ]);
  const [assistantInput, setAssistantInput] = useState('');

  // Quotation status
  const [quoteApproved, setQuoteApproved] = useState(false);

  // Toast notice
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleSendPmMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyInput.trim()) return;
    setPmMessages((prev) => [
      ...prev,
      {
        sender: 'Mr. Ramanathan',
        time: 'Just now',
        text: replyInput,
        isUser: true,
      },
    ]);
    setReplyInput('');
    showToast('Message sent to Lead Project Architect S. Rajesh');
  };

  const handleAssistantSend = (promptText?: string) => {
    const textToSend = promptText || assistantInput;
    if (!textToSend.trim()) return;

    const newMsgs = [
      ...assistantMessages,
      { sender: 'User', text: textToSend, isUser: true },
    ];
    setAssistantMessages(newMsgs);
    setAssistantInput('');

    // Context-aware intelligent responses
    setTimeout(() => {
      let reply = "I'm checking your project file with VAR design team.";
      const lower = textToSend.toLowerCase();

      if (lower.includes('status') || lower.includes('progress')) {
        reply =
          'Your Kitchen & Living Renovation is currently at 68% completion. Cabinet carcass and carcass alignments are complete, and countertop sealing finished yesterday.';
      } else if (lower.includes('milestone') || lower.includes('next')) {
        reply =
          'The next key milestone is Appliance Fit-out & Integrated LED circuit testing, scheduled for Oct 15, 2026.';
      } else if (lower.includes('material') || lower.includes('approved')) {
        reply =
          'You have approved 4 selections (Cabinet PU finish, Knurled Handles, Tandem Drawers, Warm LED lighting). The Calacatta Gold Quartz countertop is currently awaiting your final sign-off.';
      } else if (lower.includes('installation') || lower.includes('completed') || lower.includes('handover')) {
        reply =
          'Final physical handover is scheduled for late October 2026 following thorough deep cleaning and 10-year warranty certificate issuance.';
      } else if (lower.includes('update') || lower.includes('photo')) {
        reply =
          'Yesterday at 4:30 PM, your Project Manager Rajesh uploaded 3 new photos of the island countertop and soft-close drawer alignments. You can view them in the Updates & Photos tab.';
      } else if (lower.includes('change') || lower.includes('replace')) {
        reply =
          'To request a material change, you can click "Request Change" directly under the Materials tab, or message your Lead Architect S. Rajesh directly in the Project Manager section.';
      } else if (lower.includes('manager') || lower.includes('rajesh') || lower.includes('call')) {
        reply =
          'Your dedicated Lead Project Architect is S. Rajesh (+91 63696 91875). You can send a direct reply or click "Request a Call" in the Project Manager tab.';
      }

      setAssistantMessages((prev) => [
        ...prev,
        { sender: 'VAR Assistant', text: reply, isUser: false },
      ]);
    }, 600);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 md:p-6 bg-[#1C1D1A]/90 backdrop-blur-md animate-in fade-in duration-200">
      {/* Toast popup */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-[70] bg-[#62645A] text-white px-4 py-2.5 rounded-xs shadow-xl text-xs flex items-center gap-2 border border-[#D9DAD0]/30 animate-in slide-in-from-top-2 duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-300" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Container */}
      <div className="bg-[#F7F6F1] border border-[#D9DAD0] w-full max-w-7xl h-full sm:h-[94vh] rounded-none sm:rounded-xs shadow-2xl flex flex-col overflow-hidden text-[#1C1D1A] relative">
        {/* =================================================== */}
        {/* VIEW 1: LOGIN EXPERIENCE (If not authenticated)   */}
        {/* =================================================== */}
        {!isAuthenticated ? (
          <div className="flex-1 flex flex-col justify-center items-center p-6 bg-[#EEEDE6] relative">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 text-[#77786F] hover:text-[#1C1D1A]"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="max-w-md w-full bg-[#F7F6F1] border border-[#D9DAD0] p-8 sm:p-10 rounded-xs shadow-xl space-y-6">
              <div className="text-center space-y-2">
                <VarLogo variant="dark" size="md" className="items-center mx-auto" />
                <h3 className="font-serif text-3xl text-[#1C1D1A] pt-3">Welcome Back</h3>
                <p className="text-xs text-[#77786F]">
                  Access your live project updates, documents, and approvals.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#46483F] mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue="ramanathan@client.var"
                    className="w-full bg-[#EEEDE6] border border-[#D9DAD0] px-3.5 py-2.5 rounded-xs text-xs focus:outline-none focus:border-[#62645A]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#46483F] mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    defaultValue="••••••••••••"
                    className="w-full bg-[#EEEDE6] border border-[#D9DAD0] px-3.5 py-2.5 rounded-xs text-xs focus:outline-none focus:border-[#62645A]"
                  />
                </div>

                <button
                  onClick={() => setIsAuthenticated(true)}
                  className="w-full bg-[#62645A] hover:bg-[#46483F] text-white py-3 rounded-xs text-xs uppercase tracking-[0.16em] font-bold transition-colors cursor-pointer"
                >
                  Sign In
                </button>

                <button
                  onClick={() => setIsAuthenticated(true)}
                  className="w-full border border-[#D9DAD0] hover:bg-[#EEEDE6] text-[#46483F] py-2.5 rounded-xs text-xs font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Continue with Google</span>
                </button>
              </div>

              <div className="pt-4 border-t border-[#D9DAD0] text-center space-y-2">
                <div className="text-[11px] uppercase tracking-widest text-[#77786F] font-bold">
                  Client Presentation Demo Mode:
                </div>
                <button
                  onClick={() => setIsAuthenticated(true)}
                  className="w-full bg-[#46483F] hover:bg-[#1C1D1A] text-white py-3 rounded-xs text-xs uppercase tracking-[0.16em] font-bold transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#D9DAD0]" />
                  <span>Demo Customer — Explore Demo Project</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* =================================================== */
          /* VIEW 2: FULL CUSTOMER PROJECT DASHBOARD           */
          /* =================================================== */
          <>
            {/* Top Navigation Bar */}
            <div className="bg-[#1C1D1A] text-[#F7F6F1] px-4 sm:px-6 py-3.5 border-b border-[#46483F] flex items-center justify-between shrink-0">
              <div className="flex items-center gap-4 sm:gap-6">
                <VarLogo variant="light" size="sm" withTagline={false} />

                <div className="hidden sm:flex items-center gap-2 text-xs border-l border-[#46483F] pl-4">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-[11px] font-mono tracking-wider text-[#D9DAD0]">
                    Live Site Sync Active
                  </span>
                </div>
              </div>

              {/* Right User & Utility Cluster */}
              <div className="flex items-center gap-3">
                {/* Notification Bell */}
                <div className="relative">
                  <button
                    onClick={() => {
                      setNotificationsOpen(!notificationsOpen);
                      setUnreadNotifications(0);
                    }}
                    className="p-2 text-[#D9DAD0] hover:text-white relative rounded-xs hover:bg-[#2A2C26] transition-colors cursor-pointer"
                    aria-label="Notifications"
                  >
                    <Bell className="w-4 h-4" />
                    {unreadNotifications > 0 && (
                      <span className="absolute top-1 right-1 w-2 h-2 bg-emerald-400 rounded-full" />
                    )}
                  </button>

                  {/* Notification Drawer Dropdown */}
                  {notificationsOpen && (
                    <div className="absolute right-0 mt-2 w-80 bg-[#F7F6F1] text-[#1C1D1A] border border-[#D9DAD0] rounded-xs shadow-2xl z-50 p-4 space-y-3">
                      <div className="flex items-center justify-between border-b border-[#D9DAD0] pb-2">
                        <span className="text-xs uppercase tracking-wider font-bold text-[#62645A]">
                          Project Notifications
                        </span>
                        <span className="text-[10px] text-[#77786F]">5 updates</span>
                      </div>
                      <div className="space-y-2 text-xs">
                        <div className="p-2 bg-[#EEEDE6] rounded-xs hover:bg-[#D9DAD0]/60 cursor-pointer">
                          <div className="font-semibold text-[#1C1D1A]">New project photo uploaded.</div>
                          <div className="text-[10px] text-[#77786F]">Yesterday · Countertop sealing inspection</div>
                        </div>
                        <div className="p-2 bg-[#EEEDE6] rounded-xs hover:bg-[#D9DAD0]/60 cursor-pointer">
                          <div className="font-semibold text-amber-700">Material approval required.</div>
                          <div className="text-[10px] text-[#77786F]">Calacatta Gold Quartz countertop slab</div>
                        </div>
                        <div className="p-2 bg-[#EEEDE6] rounded-xs hover:bg-[#D9DAD0]/60 cursor-pointer">
                          <div className="font-semibold text-[#1C1D1A]">Project milestone completed.</div>
                          <div className="text-[10px] text-[#77786F]">Cabinetry joinery & leveling</div>
                        </div>
                        <div className="p-2 bg-[#EEEDE6] rounded-xs hover:bg-[#D9DAD0]/60 cursor-pointer">
                          <div className="font-semibold text-[#1C1D1A]">New message from Project Manager.</div>
                          <div className="text-[10px] text-[#77786F]">S. Rajesh: "Countertop sealing completed..."</div>
                        </div>
                        <div className="p-2 bg-[#EEEDE6] rounded-xs hover:bg-[#D9DAD0]/60 cursor-pointer">
                          <div className="font-semibold text-[#1C1D1A]">Quotation updated.</div>
                          <div className="text-[10px] text-[#77786F]">Phase 2 additional electrical points added</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Profile Pill */}
                <div className="flex items-center gap-2 pl-2 border-l border-[#46483F]">
                  <div className="w-7 h-7 rounded-full bg-[#62645A] text-white flex items-center justify-center text-xs font-semibold">
                    R
                  </div>
                  <div className="hidden md:block text-left text-xs leading-tight">
                    <div className="font-semibold text-white">Mr. & Mrs. Ramanathan</div>
                    <div className="text-[10px] text-[#D9DAD0]/80">White Town Villa #12</div>
                  </div>
                </div>

                {/* Close Portal Button */}
                <button
                  onClick={onClose}
                  className="ml-3 p-1.5 text-[#D9DAD0] hover:text-white rounded-xs hover:bg-[#46483F] transition-colors cursor-pointer"
                  title="Return to Main Website"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Portal Body with Left Navigation + Content Area */}
            <div className="flex-1 flex overflow-hidden">
              {/* Desktop Sidebar Navigation (10 Clickable Items) */}
              <aside className="w-64 bg-[#EEEDE6] border-r border-[#D9DAD0] p-4 hidden lg:flex flex-col justify-between overflow-y-auto">
                <div className="space-y-1">
                  <div className="px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-bold text-[#62645A] mb-1">
                    Customer Experience
                  </div>

                  {[
                    { id: 'dashboard', label: 'My Project', icon: Layers },
                    { id: 'updates', label: 'Updates & Photos', icon: ImageIcon },
                    { id: 'beforeAfter', label: 'Before & After', icon: Split },
                    { id: 'materials', label: 'Materials & Selections', icon: Sliders },
                    { id: 'documents', label: 'Documents / CAD', icon: FileText },
                    { id: 'timeline', label: 'Project Timeline', icon: Calendar },
                    { id: 'approvals', label: 'Approvals', icon: CheckCircle2 },
                    { id: 'manager', label: 'Project Manager', icon: MessageSquare },
                    { id: 'quotation', label: 'Quotation & Payments', icon: DollarSign },
                    { id: 'assistant', label: 'VAR Assistant', icon: Sparkles },
                  ].map((nav) => {
                    const Icon = nav.icon;
                    const isActive = activeTab === nav.id;
                    return (
                      <button
                        key={nav.id}
                        onClick={() => setActiveTab(nav.id)}
                        className={`w-full text-left px-3.5 py-2.5 rounded-xs flex items-center justify-between text-xs tracking-wide transition-all cursor-pointer ${
                          isActive
                            ? 'bg-[#62645A] text-white font-semibold shadow-xs'
                            : 'text-[#46483F] hover:bg-[#D9DAD0]/70'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon className="w-4 h-4 shrink-0" />
                          <span>{nav.label}</span>
                        </div>
                        {nav.id === 'materials' && (
                          <span className="w-2 h-2 rounded-full bg-amber-500" title="1 Pending Approval" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Bottom User Card */}
                <div className="pt-4 border-t border-[#D9DAD0] text-[11px] text-[#77786F] space-y-1">
                  <div className="font-semibold text-[#1C1D1A]">Puducherry Central Studio</div>
                  <div>Account: #VAR-2026-WT12</div>
                  <button
                    onClick={() => setIsAuthenticated(false)}
                    className="text-[10px] text-[#62645A] hover:underline uppercase tracking-wider pt-1 block cursor-pointer"
                  >
                    Switch to Login Screen
                  </button>
                </div>
              </aside>

              {/* Main Content Pane */}
              <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 bg-[#F7F6F1]">
                {/* Mobile Tab Selector */}
                <div className="lg:hidden mb-6 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-[#D9DAD0]">
                  {[
                    { id: 'dashboard', label: 'My Project' },
                    { id: 'updates', label: 'Updates' },
                    { id: 'beforeAfter', label: 'Before & After' },
                    { id: 'materials', label: 'Materials' },
                    { id: 'documents', label: 'Documents' },
                    { id: 'timeline', label: 'Timeline' },
                    { id: 'approvals', label: 'Approvals' },
                    { id: 'manager', label: 'Manager' },
                    { id: 'quotation', label: 'Quote' },
                    { id: 'assistant', label: 'Assistant' },
                  ].map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setActiveTab(t.id)}
                      className={`px-3 py-1.5 text-xs rounded-xs uppercase tracking-wider font-semibold whitespace-nowrap cursor-pointer ${
                        activeTab === t.id
                          ? 'bg-[#62645A] text-white'
                          : 'bg-[#EEEDE6] text-[#46483F]'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>

                {/* =================================================== */}
                {/* TAB 1: MY PROJECT (DASHBOARD)                       */}
                {/* =================================================== */}
                {activeTab === 'dashboard' && (
                  <div className="space-y-6 max-w-5xl">
                    {/* Welcome Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#D9DAD0] pb-5">
                      <div>
                        <div className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#62645A]">
                          Customer Project Space
                        </div>
                        <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1D1A] mt-1 font-normal">
                          White Town Villa #12
                        </h2>
                        <div className="text-xs text-[#77786F] mt-1">
                          Client: Mr. & Mrs. Ramanathan · Handled by VAR Central Studio
                        </div>
                      </div>

                      <div className="bg-[#EEEDE6] border border-[#D9DAD0] p-3 rounded-xs text-right">
                        <div className="text-[10px] uppercase tracking-wider text-[#77786F]">
                          Overall Completion
                        </div>
                        <div className="font-serif text-3xl font-light text-[#1C1D1A]">
                          68%
                        </div>
                      </div>
                    </div>

                    {/* Main Project Phase Card */}
                    <div className="bg-[#242521] text-[#F7F6F1] p-6 sm:p-8 rounded-xs border border-[#46483F] space-y-6 shadow-xl">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div>
                          <div className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#D9DAD0]">
                            CURRENT ACTIVE PHASE
                          </div>
                          <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mt-1">
                            Kitchen & Living Renovation
                          </h3>
                        </div>

                        <span className="inline-flex items-center gap-1.5 bg-[#62645A] text-white text-[11px] font-semibold px-3 py-1 rounded-xs uppercase tracking-wider">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          On Schedule
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div>
                        <div className="flex justify-between text-xs text-[#D9DAD0] mb-2 font-mono">
                          <span>Progress Rate</span>
                          <span>68% Completed</span>
                        </div>
                        <div className="h-3 w-full bg-[#1C1D1A] rounded-full overflow-hidden border border-[#46483F]">
                          <div className="h-full bg-gradient-to-r from-[#62645A] via-[#D9DAD0] to-emerald-400 w-[68%]" />
                        </div>
                      </div>

                      {/* 4 Phases Flow */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                        <div className="p-3 bg-[#1C1D1A] border border-[#62645A] rounded-xs text-left">
                          <div className="text-emerald-400 font-bold text-xs flex items-center gap-1">
                            <Check className="w-3.5 h-3.5" /> Approved
                          </div>
                          <div className="text-xs font-semibold text-white mt-1">Phase 1: Design</div>
                          <div className="text-[10px] text-[#77786F]">3D CAD & Layouts</div>
                        </div>

                        <div className="p-3 bg-[#1C1D1A] border border-[#62645A] rounded-xs text-left">
                          <div className="text-emerald-400 font-bold text-xs flex items-center gap-1">
                            <Check className="w-3.5 h-3.5" /> Delivered
                          </div>
                          <div className="text-xs font-semibold text-white mt-1">Phase 2: Materials</div>
                          <div className="text-[10px] text-[#77786F]">Ply & European HW</div>
                        </div>

                        <div className="p-3 bg-[#2A2C26] border border-amber-500/60 rounded-xs text-left">
                          <div className="text-amber-300 font-bold text-xs flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" /> In Progress
                          </div>
                          <div className="text-xs font-semibold text-white mt-1">Phase 3: Installation</div>
                          <div className="text-[10px] text-[#D9DAD0]">Joinery & Assembly</div>
                        </div>

                        <div className="p-3 bg-[#1C1D1A] border border-[#46483F] rounded-xs text-left opacity-70">
                          <div className="text-[#77786F] font-bold text-xs">○ Upcoming</div>
                          <div className="text-xs font-semibold text-[#D9DAD0] mt-1">Phase 4: Handover</div>
                          <div className="text-[10px] text-[#77786F]">Deep clean & 10y cert</div>
                        </div>
                      </div>

                      {/* Milestone Callout */}
                      <div className="pt-2 border-t border-[#46483F] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                        <div className="flex items-center gap-2 text-[#D9DAD0]">
                          <Calendar className="w-4 h-4 text-[#62645A]" />
                          <span>
                            Next milestone: <strong>Appliance Fit-out & Circuit Testing</strong>
                          </span>
                        </div>
                        <div className="font-mono text-[#F7F6F1] bg-[#1C1D1A] px-3 py-1 rounded-xs border border-[#46483F]">
                          Target: Oct 15, 2026
                        </div>
                      </div>
                    </div>

                    {/* Quick Access Tiles */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div
                        onClick={() => setActiveTab('updates')}
                        className="bg-[#EEEDE6] border border-[#D9DAD0] hover:border-[#62645A] p-5 rounded-xs cursor-pointer transition-all hover:shadow-md"
                      >
                        <div className="flex items-center justify-between text-[#62645A] mb-2">
                          <ImageIcon className="w-5 h-5" />
                          <ChevronRight className="w-4 h-4" />
                        </div>
                        <h4 className="font-serif text-lg text-[#1C1D1A]">Latest Site Photos</h4>
                        <p className="text-xs text-[#77786F] mt-1">
                          Countertop sealing and soft-close drawer alignments uploaded yesterday.
                        </p>
                      </div>

                      <div
                        onClick={() => setActiveTab('materials')}
                        className="bg-[#EEEDE6] border border-[#D9DAD0] hover:border-[#62645A] p-5 rounded-xs cursor-pointer transition-all hover:shadow-md"
                      >
                        <div className="flex items-center justify-between text-amber-700 mb-2">
                          <Sliders className="w-5 h-5" />
                          <span className="text-[10px] bg-amber-200 text-amber-900 px-2 py-0.5 rounded-full font-bold">1 Action</span>
                        </div>
                        <h4 className="font-serif text-lg text-[#1C1D1A]">Materials & Selections</h4>
                        <p className="text-xs text-[#77786F] mt-1">
                          1 item awaiting sign-off: Calacatta Gold Engineered Quartz.
                        </p>
                      </div>

                      <div
                        onClick={() => setActiveTab('manager')}
                        className="bg-[#EEEDE6] border border-[#D9DAD0] hover:border-[#62645A] p-5 rounded-xs cursor-pointer transition-all hover:shadow-md"
                      >
                        <div className="flex items-center justify-between text-[#62645A] mb-2">
                          <MessageSquare className="w-5 h-5" />
                          <ChevronRight className="w-4 h-4" />
                        </div>
                        <h4 className="font-serif text-lg text-[#1C1D1A]">Architect S. Rajesh</h4>
                        <p className="text-xs text-[#77786F] mt-1">
                          Direct chat channel open with your dedicated site architect.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* =================================================== */}
                {/* TAB 2: UPDATES & PHOTOS                             */}
                {/* =================================================== */}
                {activeTab === 'updates' && (
                  <div className="space-y-6 max-w-4xl">
                    <div className="border-b border-[#D9DAD0] pb-4">
                      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#62645A]">
                        Live Project Journal
                      </span>
                      <h3 className="font-serif text-3xl text-[#1C1D1A] mt-1">Project Updates</h3>
                      <p className="text-xs text-[#77786F]">
                        Chronological field notes and inspection photographs from the site.
                      </p>
                    </div>

                    <div className="space-y-6">
                      {/* Update 1 */}
                      <div className="bg-[#EEEDE6] border border-[#D9DAD0] p-6 rounded-xs space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#D9DAD0] pb-3">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                            <h4 className="font-serif text-xl text-[#1C1D1A]">
                              Countertop sealing completed.
                            </h4>
                          </div>
                          <span className="text-xs text-[#77786F] font-mono">Yesterday — 4:30 PM</span>
                        </div>

                        <p className="text-xs text-[#46483F] leading-relaxed">
                          Calacatta quartz stone island positioned and laser-aligned with waterfall miter edge. Silicone barrier and nano-sealant curing in progress.
                        </p>

                        {/* 4 Project Photographs */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                          <div className="aspect-[4/3] rounded-xs overflow-hidden border border-[#D9DAD0] group cursor-pointer">
                            <img
                              src="/src/assets/images/var_kitchen_detail_1790654739950.jpg"
                              alt="Countertop alignment"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                            />
                          </div>
                          <div className="aspect-[4/3] rounded-xs overflow-hidden border border-[#D9DAD0] group cursor-pointer">
                            <img
                              src="/src/assets/images/var_hardware_hero_1790654652422.jpg"
                              alt="Hinge calibration"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                            />
                          </div>
                          <div className="aspect-[4/3] rounded-xs overflow-hidden border border-[#D9DAD0] group cursor-pointer">
                            <img
                              src="/src/assets/images/var_handles_accessories_1790654753472.jpg"
                              alt="Handles installed"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                            />
                          </div>
                          <div className="aspect-[4/3] rounded-xs overflow-hidden border border-[#D9DAD0] group cursor-pointer">
                            <img
                              src="/src/assets/images/var_hero_kitchen_1790654633654.jpg"
                              alt="Overall layout"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Update 2 */}
                      <div className="bg-[#EEEDE6] border border-[#D9DAD0] p-5 rounded-xs space-y-2">
                        <div className="flex justify-between items-center text-xs">
                          <h4 className="font-serif text-lg text-[#1C1D1A]">Cabinet installation completed.</h4>
                          <span className="text-[#77786F] font-mono">Sep 25, 2026</span>
                        </div>
                        <p className="text-xs text-[#77786F]">
                          All floor-to-ceiling base and overhead carcass modules anchored and laser leveled against masonry walls.
                        </p>
                      </div>

                      {/* Update 3 */}
                      <div className="bg-[#EEEDE6] border border-[#D9DAD0] p-5 rounded-xs space-y-2">
                        <div className="flex justify-between items-center text-xs">
                          <h4 className="font-serif text-lg text-[#1C1D1A]">Hardware installation started.</h4>
                          <span className="text-[#77786F] font-mono">Sep 22, 2026</span>
                        </div>
                        <p className="text-xs text-[#77786F]">
                          German soft-close hinges and synchronized undermount drawer tracks mounted.
                        </p>
                      </div>

                      {/* Update 4 */}
                      <div className="bg-[#EEEDE6] border border-[#D9DAD0] p-5 rounded-xs space-y-2">
                        <div className="flex justify-between items-center text-xs">
                          <h4 className="font-serif text-lg text-[#1C1D1A]">Kitchen installation started.</h4>
                          <span className="text-[#77786F] font-mono">Sep 18, 2026</span>
                        </div>
                        <p className="text-xs text-[#77786F]">
                          Site civil clearing completed, electrical conduits verified, initial timber batch delivered.
                        </p>
                      </div>
                    </div>

                    <div className="text-center pt-2">
                      <button
                        onClick={() => showToast('Opening complete site photo gallery...')}
                        className="bg-[#62645A] hover:bg-[#46483F] text-white text-xs uppercase tracking-widest font-bold px-6 py-2.5 rounded-xs transition-colors cursor-pointer"
                      >
                        View All Photos (28 High-Res)
                      </button>
                    </div>
                  </div>
                )}

                {/* =================================================== */}
                {/* TAB 3: BEFORE & AFTER                               */}
                {/* =================================================== */}
                {activeTab === 'beforeAfter' && (
                  <div className="space-y-6 max-w-4xl">
                    <div className="border-b border-[#D9DAD0] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#62645A]">
                          Physical Transformation
                        </span>
                        <h3 className="font-serif text-3xl text-[#1C1D1A] mt-1">Before & After</h3>
                        <p className="text-xs text-[#77786F]">
                          See the transformation of White Town Villa #12. Drag slider to compare.
                        </p>
                      </div>

                      {/* Category Switcher */}
                      <div className="flex items-center gap-1.5 bg-[#EEEDE6] p-1 border border-[#D9DAD0] rounded-xs">
                        {(['kitchen', 'wardrobe', 'living'] as const).map((cat) => (
                          <button
                            key={cat}
                            onClick={() => setBaCategory(cat)}
                            className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors cursor-pointer ${
                              baCategory === cat
                                ? 'bg-[#62645A] text-white'
                                : 'text-[#46483F] hover:bg-[#D9DAD0]'
                            }`}
                          >
                            {cat === 'kitchen' && 'Kitchen'}
                            {cat === 'wardrobe' && 'Wardrobe'}
                            {cat === 'living' && 'Living Room'}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Interactive Slider */}
                    <div>
                      {baCategory === 'kitchen' && (
                        <BeforeAfterSlider
                          beforeImage="/src/assets/images/var_kitchen_detail_1790654739950.jpg"
                          afterImage="/src/assets/images/var_hero_kitchen_1790654633654.jpg"
                          beforeLabel="ORIGINAL SPACE (SEPT 10)"
                          afterLabel="VAR ARCHITECTURAL KITCHEN"
                          aspectRatio="aspect-[16/9]"
                        />
                      )}
                      {baCategory === 'wardrobe' && (
                        <BeforeAfterSlider
                          beforeImage="/src/assets/images/var_handles_accessories_1790654753472.jpg"
                          afterImage="/src/assets/images/var_wardrobe_luxury_1790654724721.jpg"
                          beforeLabel="EMPTY CLOSET WALL"
                          afterLabel="VAR FLUTED GLASS WARDROBE"
                          aspectRatio="aspect-[16/9]"
                        />
                      )}
                      {baCategory === 'living' && (
                        <BeforeAfterSlider
                          beforeImage="/src/assets/images/var_showroom_1790654664447.jpg"
                          afterImage="/src/assets/images/var_living_dining_1790654677757.jpg"
                          beforeLabel="BARE MASONRY HALL"
                          afterLabel="VAR LIVING & DINING SUITE"
                          aspectRatio="aspect-[16/9]"
                        />
                      )}
                    </div>
                  </div>
                )}

                {/* =================================================== */}
                {/* TAB 4: MATERIALS & SELECTIONS                       */}
                {/* =================================================== */}
                {activeTab === 'materials' && (
                  <div className="space-y-6 max-w-4xl">
                    <div className="border-b border-[#D9DAD0] pb-4">
                      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#62645A]">
                        Specifications & Sign-Offs
                      </span>
                      <h3 className="font-serif text-3xl text-[#1C1D1A] mt-1">
                        Materials & Selections
                      </h3>
                      <p className="text-xs text-[#77786F]">
                        Review curated sample swatches and sign off physical materials for procurement.
                      </p>
                    </div>

                    <div className="space-y-4">
                      {materialsList.map((item) => (
                        <div
                          key={item.id}
                          className="bg-[#EEEDE6] border border-[#D9DAD0] p-4 sm:p-5 rounded-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-xs overflow-hidden border border-[#D9DAD0] shrink-0 bg-black">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-[10px] uppercase font-mono tracking-wider text-[#62645A]">
                                  {item.category}
                                </span>
                                <span
                                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                    item.status === 'Approved'
                                      ? 'bg-emerald-100 text-emerald-800'
                                      : 'bg-amber-100 text-amber-900 animate-pulse'
                                  }`}
                                >
                                  {item.status === 'Approved' ? '✓ Approved' : '● Pending Approval'}
                                </span>
                              </div>
                              <h4 className="font-serif text-base text-[#1C1D1A] font-semibold mt-0.5">
                                {item.name}
                              </h4>
                              <p className="text-xs text-[#77786F] mt-1">{item.details}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                            {item.status === 'Pending Approval' ? (
                              <>
                                <button
                                  onClick={() => {
                                    setMaterialsList((prev) =>
                                      prev.map((m) =>
                                        m.id === item.id ? { ...m, status: 'Approved' } : m
                                      )
                                    );
                                    showToast(`${item.name} has been Approved!`);
                                  }}
                                  className="bg-[#62645A] hover:bg-[#46483F] text-white text-xs font-semibold px-4 py-2 rounded-xs uppercase tracking-wider transition-colors cursor-pointer"
                                >
                                  Approve Selection
                                </button>
                                <button
                                  onClick={() => {
                                    showToast(`Change request registered for ${item.name}`);
                                  }}
                                  className="border border-[#77786F] hover:bg-[#D9DAD0] text-[#1C1D1A] text-xs font-semibold px-3 py-2 rounded-xs uppercase tracking-wider transition-colors cursor-pointer"
                                >
                                  Request Change
                                </button>
                              </>
                            ) : (
                              <button
                                onClick={() => {
                                  showToast(`Change request registered for ${item.name}`);
                                }}
                                className="text-xs text-[#77786F] hover:text-[#1C1D1A] underline tracking-wider cursor-pointer"
                              >
                                Request Change
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* =================================================== */}
                {/* TAB 5: DOCUMENTS / CAD                              */}
                {/* =================================================== */}
                {activeTab === 'documents' && (
                  <div className="space-y-6 max-w-4xl">
                    <div className="border-b border-[#D9DAD0] pb-4">
                      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#62645A]">
                        Architectural Archive
                      </span>
                      <h3 className="font-serif text-3xl text-[#1C1D1A] mt-1">Project Documents</h3>
                      <p className="text-xs text-[#77786F]">
                        Approved floor plans, 3D CAD elevations, and signed warranty contracts.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { title: 'Kitchen Layout Drawing (Rev 3)', type: 'CAD PDF', size: '4.2 MB', date: 'Approved Sep 12' },
                        { title: 'Full Elevation & Lighting Plan', type: 'Architectural DWG', size: '6.8 MB', date: 'Approved Sep 14' },
                        { title: 'Comprehensive Material Specification', type: 'Spec Sheet', size: '1.9 MB', date: 'Issued Sep 15' },
                        { title: 'Itemized Quotation & Milestones', type: 'Commercial Bill', size: '850 KB', date: 'Signed Sep 10' },
                        { title: 'Installation & Joinery Schedule', type: 'Project Plan', size: '1.2 MB', date: 'Active Phase 3' },
                        { title: '10-Year Hardware Warranty Certificate', type: 'Warranty Vault', size: '540 KB', date: 'Issued at Handover' },
                      ].map((doc, idx) => (
                        <div
                          key={idx}
                          className="bg-[#EEEDE6] border border-[#D9DAD0] p-4 rounded-xs flex items-center justify-between"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xs bg-[#D9DAD0] flex items-center justify-center text-[#62645A]">
                              <FileText className="w-5 h-5" />
                            </div>
                            <div>
                              <h4 className="text-xs font-semibold text-[#1C1D1A]">{doc.title}</h4>
                              <div className="text-[10px] text-[#77786F] mt-0.5">
                                {doc.type} · {doc.size} · {doc.date}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => showToast(`Previewing ${doc.title}`)}
                              className="p-1.5 text-[#62645A] hover:bg-[#D9DAD0] rounded-xs cursor-pointer"
                              title="View Document"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => showToast(`Downloading ${doc.title}`)}
                              className="p-1.5 text-[#62645A] hover:bg-[#D9DAD0] rounded-xs cursor-pointer"
                              title="Download PDF"
                            >
                              <Download className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* =================================================== */}
                {/* TAB 6: PROJECT TIMELINE                             */}
                {/* =================================================== */}
                {activeTab === 'timeline' && (
                  <div className="space-y-6 max-w-4xl">
                    <div className="border-b border-[#D9DAD0] pb-4">
                      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#62645A]">
                        Milestone Schedule
                      </span>
                      <h3 className="font-serif text-3xl text-[#1C1D1A] mt-1">Project Timeline</h3>
                      <p className="text-xs text-[#77786F]">
                        Detailed progression from initial spatial survey to keys handover.
                      </p>
                    </div>

                    <div className="space-y-3 relative before:absolute before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-[#D9DAD0]">
                      {[
                        { stage: 'Consultation & Site Survey', status: 'Completed', date: 'Aug 28, 2026', desc: 'Detailed 3D laser measurement and requirement analysis.' },
                        { stage: 'Design & 3D Visualization', status: 'Completed', date: 'Sep 05, 2026', desc: 'Material boards, layout approvals, and millimeter elevations.' },
                        { stage: 'Material Selection & Sign-off', status: 'Completed', date: 'Sep 12, 2026', desc: 'Veneer batch inspection and European hardware locking.' },
                        { stage: 'Precision Factory Production', status: 'Completed', date: 'Sep 20, 2026', desc: 'BWP ply sizing, CNC routing, PU lacquer finishing.' },
                        { stage: 'On-site Installation', status: 'Active', date: 'Sep 22 – Oct 15, 2026', desc: 'Carcass leveling, countertop miter joint, drawer calibration.' },
                        { stage: 'Final Inspection & Snag Snubbing', status: 'Upcoming', date: 'Oct 20, 2026', desc: '100-point quality audit by Chief Technical Architect.' },
                        { stage: 'Turnkey Handover & Warranty', status: 'Upcoming', date: 'Oct 25, 2026', desc: 'Professional deep clean, appliance demo, warranty certificate.' },
                      ].map((s, idx) => (
                        <div
                          key={idx}
                          className="relative pl-10 group"
                        >
                          <div
                            className={`absolute left-2.5 top-3 -translate-x-1/2 w-4 h-4 rounded-full border-2 bg-white flex items-center justify-center ${
                              s.status === 'Completed'
                                ? 'border-emerald-500 bg-emerald-500 text-white'
                                : s.status === 'Active'
                                ? 'border-amber-500 bg-amber-500'
                                : 'border-[#77786F]'
                            }`}
                          >
                            {s.status === 'Completed' && <Check className="w-2.5 h-2.5" />}
                          </div>

                          <div
                            className={`p-4 rounded-xs border transition-colors ${
                              s.status === 'Active'
                                ? 'bg-[#EEEDE6] border-amber-500/70 shadow-xs'
                                : 'bg-white border-[#D9DAD0]'
                            }`}
                          >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                              <h4 className="font-serif text-base text-[#1C1D1A] font-semibold">
                                {s.stage}
                              </h4>
                              <span className="text-[11px] font-mono text-[#62645A]">
                                {s.status === 'Completed' && '✓ Completed'}
                                {s.status === 'Active' && '● Active Now'}
                                {s.status === 'Upcoming' && '○ Upcoming'} · {s.date}
                              </span>
                            </div>
                            <p className="text-xs text-[#77786F] mt-1">{s.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* =================================================== */}
                {/* TAB 7: APPROVALS                                    */}
                {/* =================================================== */}
                {activeTab === 'approvals' && (
                  <div className="space-y-6 max-w-4xl">
                    <div className="border-b border-[#D9DAD0] pb-4">
                      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#62645A]">
                        One-Click Governance
                      </span>
                      <h3 className="font-serif text-3xl text-[#1C1D1A] mt-1">Pending & Past Approvals</h3>
                      <p className="text-xs text-[#77786F]">
                        Review items requiring your sign-off before fabrication and procurement.
                      </p>
                    </div>

                    <div className="p-5 bg-amber-50 border border-amber-300 rounded-xs space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-amber-600 animate-ping" />
                          Action Required: Countertop Stone Slab
                        </span>
                        <span className="text-[11px] font-mono text-amber-700">Due today</span>
                      </div>
                      <p className="text-xs text-amber-900 leading-relaxed">
                        Calacatta Gold Engineered Quartz 20mm has been selected by our lead architect. Please review the vein structure in the photo and confirm sign-off.
                      </p>
                      <div className="flex items-center gap-3 pt-1">
                        <button
                          onClick={() => showToast('Countertop Stone Approved!')}
                          className="bg-[#62645A] hover:bg-[#46483F] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-xs transition-colors cursor-pointer"
                        >
                          Approve Stone Slab
                        </button>
                        <button
                          onClick={() => showToast('Feedback recorded for Lead Architect')}
                          className="border border-[#62645A] text-[#1C1D1A] hover:bg-amber-100 text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xs transition-colors cursor-pointer"
                        >
                          Request Alternative Sample
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#62645A]">
                        Approved History
                      </div>
                      {[
                        { title: 'Electrical Conduits & Island Socket Box', date: 'Signed Sep 18', by: 'Mr. Ramanathan' },
                        { title: 'Hardware Fitting Package (German Hinges & Runners)', date: 'Signed Sep 14', by: 'Mrs. Ramanathan' },
                        { title: 'Initial Kitchen & Living 3D Plan (Rev 3)', date: 'Signed Sep 10', by: 'Mr. & Mrs. Ramanathan' },
                      ].map((item, i) => (
                        <div key={i} className="p-3 bg-[#EEEDE6] border border-[#D9DAD0] rounded-xs flex justify-between items-center text-xs">
                          <div>
                            <span className="font-semibold text-[#1C1D1A]">{item.title}</span>
                            <div className="text-[10px] text-[#77786F]">Authorized by {item.by}</div>
                          </div>
                          <span className="text-emerald-700 font-mono text-[11px]">✓ {item.date}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* =================================================== */}
                {/* TAB 8: PROJECT MANAGER                              */}
                {/* =================================================== */}
                {activeTab === 'manager' && (
                  <div className="space-y-6 max-w-3xl">
                    <div className="border-b border-[#D9DAD0] pb-4">
                      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#62645A]">
                        Direct Contact
                      </span>
                      <h3 className="font-serif text-3xl text-[#1C1D1A] mt-1">Dedicated VAR Project Manager</h3>
                      <p className="text-xs text-[#77786F]">
                        Your single point of contact for daily progress, queries, and technical inquiries.
                      </p>
                    </div>

                    {/* Manager Profile Card */}
                    <div className="p-5 bg-[#EEEDE6] border border-[#D9DAD0] rounded-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-3.5">
                        <div className="w-12 h-12 rounded-full bg-[#62645A] text-white flex items-center justify-center font-serif text-lg font-bold">
                          SR
                        </div>
                        <div>
                          <h4 className="font-serif text-lg text-[#1C1D1A]">S. Rajesh</h4>
                          <div className="text-xs text-[#62645A] font-semibold">Lead Project Architect</div>
                          <div className="text-[11px] text-[#77786F]">Puducherry Central Studio · On-site Architect</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <a
                          href="tel:+916369691875"
                          className="bg-[#62645A] hover:bg-[#46483F] text-white text-xs font-semibold px-4 py-2 rounded-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                        >
                          <Phone className="w-3.5 h-3.5" /> Call Manager
                        </a>
                        <button
                          onClick={() => showToast('Call request submitted. S. Rajesh will phone you within 20 mins.')}
                          className="border border-[#77786F] hover:bg-[#D9DAD0] text-[#1C1D1A] text-xs font-semibold px-3 py-2 rounded-xs uppercase tracking-wider transition-colors cursor-pointer"
                        >
                          Request a Call
                        </button>
                      </div>
                    </div>

                    {/* Message Thread */}
                    <div className="bg-white border border-[#D9DAD0] rounded-xs p-4 space-y-4">
                      <div className="text-[10px] uppercase tracking-widest text-[#77786F] border-b border-[#EEEDE6] pb-2 font-mono">
                        Direct Project Communication Stream
                      </div>

                      <div className="space-y-3 max-h-[320px] overflow-y-auto pr-1">
                        {pmMessages.map((msg, idx) => (
                          <div
                            key={idx}
                            className={`flex flex-col ${msg.isUser ? 'items-end' : 'items-start'}`}
                          >
                            <div className="text-[10px] text-[#77786F] mb-1 font-mono">
                              {msg.sender} · {msg.time}
                            </div>
                            <div
                              className={`max-w-md p-3.5 rounded-xs text-xs leading-relaxed ${
                                msg.isUser
                                  ? 'bg-[#62645A] text-white'
                                  : 'bg-[#EEEDE6] text-[#1C1D1A] border border-[#D9DAD0]'
                              }`}
                            >
                              {msg.text}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Reply Form */}
                      <form onSubmit={handleSendPmMessage} className="pt-2 flex items-center gap-2">
                        <input
                          type="text"
                          placeholder="Reply to S. Rajesh..."
                          value={replyInput}
                          onChange={(e) => setReplyInput(e.target.value)}
                          className="flex-1 bg-[#EEEDE6] border border-[#D9DAD0] px-4 py-2.5 text-xs rounded-xs focus:outline-none focus:border-[#62645A]"
                        />
                        <button
                          type="submit"
                          className="bg-[#62645A] hover:bg-[#46483F] text-white p-2.5 rounded-xs cursor-pointer transition-colors"
                        >
                          <Send className="w-4 h-4" />
                        </button>
                      </form>
                    </div>
                  </div>
                )}

                {/* =================================================== */}
                {/* TAB 9: QUOTATION & PAYMENTS                         */}
                {/* =================================================== */}
                {activeTab === 'quotation' && (
                  <div className="space-y-6 max-w-4xl">
                    <div className="border-b border-[#D9DAD0] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#62645A]">
                          Commercial Breakdown
                        </span>
                        <h3 className="font-serif text-3xl text-[#1C1D1A] mt-1">Quotation & Estimate</h3>
                        <p className="text-xs text-[#77786F]">
                          Transparent cost schedule clearly marked with demo presentation values.
                        </p>
                      </div>

                      <span className="text-xs font-mono bg-amber-100 text-amber-900 border border-amber-300 px-3 py-1 rounded-xs">
                        DEMO PRESENTATION ESTIMATE
                      </span>
                    </div>

                    <div className="bg-[#EEEDE6] border border-[#D9DAD0] p-6 rounded-xs space-y-4">
                      <div className="divide-y divide-[#D9DAD0] text-xs">
                        <div className="py-2.5 flex justify-between items-center">
                          <div>
                            <span className="font-semibold text-[#1C1D1A]">01. Architectural Design & 3D CAD Detailing</span>
                            <div className="text-[10px] text-[#77786F]">Space planning, elevation drawings & MEP coordination</div>
                          </div>
                          <span className="font-mono font-semibold">₹ 45,000</span>
                        </div>

                        <div className="py-2.5 flex justify-between items-center">
                          <div>
                            <span className="font-semibold text-[#1C1D1A]">02. Bespoke Materials & Marine Ply Carcass</span>
                            <div className="text-[10px] text-[#77786F]">BWP boiling waterproof core, PU lacquer & Calacatta quartz</div>
                          </div>
                          <span className="font-mono font-semibold">₹ 3,85,000</span>
                        </div>

                        <div className="py-2.5 flex justify-between items-center">
                          <div>
                            <span className="font-semibold text-[#1C1D1A]">03. European Mechanical Hardware Package</span>
                            <div className="text-[10px] text-[#77786F]">German soft-close hinges, tandem runners, lift-up stays</div>
                          </div>
                          <span className="font-mono font-semibold">₹ 95,000</span>
                        </div>

                        <div className="py-2.5 flex justify-between items-center">
                          <div>
                            <span className="font-semibold text-[#1C1D1A]">04. Expert Installation & Laser Leveling</span>
                            <div className="text-[10px] text-[#77786F]">In-house certified carpenters, dust-free fitting & deep clean</div>
                          </div>
                          <span className="font-mono font-semibold">₹ 65,000</span>
                        </div>

                        <div className="py-2.5 flex justify-between items-center">
                          <div>
                            <span className="font-semibold text-[#1C1D1A]">05. Additional Integrated Lighting Channels</span>
                            <div className="text-[10px] text-[#77786F]">2700K concealed warm profiles with dimmer drivers</div>
                          </div>
                          <span className="font-mono font-semibold">₹ 28,000</span>
                        </div>
                      </div>

                      <div className="pt-4 border-t-2 border-[#D9DAD0] space-y-1.5 text-xs text-right">
                        <div className="flex justify-between">
                          <span className="text-[#77786F]">Subtotal:</span>
                          <span className="font-mono font-semibold">₹ 6,18,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#77786F]">GST (18%):</span>
                          <span className="font-mono font-semibold">₹ 1,11,240</span>
                        </div>
                        <div className="flex justify-between text-base font-bold text-[#1C1D1A] pt-2 border-t border-[#D9DAD0]">
                          <span>Total Investment:</span>
                          <span className="font-mono text-[#62645A]">₹ 7,29,240</span>
                        </div>
                      </div>

                      <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#D9DAD0]">
                        <span className="text-xs text-[#77786F]">
                          Payment Milestone 3 (Installation 68%): Verified
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => showToast('Full quotation PDF downloaded.')}
                            className="border border-[#77786F] hover:bg-[#D9DAD0] text-[#1C1D1A] text-xs font-semibold px-4 py-2 rounded-xs uppercase tracking-wider transition-colors cursor-pointer"
                          >
                            View Full Quote
                          </button>
                          <button
                            onClick={() => {
                              setQuoteApproved(true);
                              showToast('Quotation milestone Approved!');
                            }}
                            className="bg-[#62645A] hover:bg-[#46483F] text-white text-xs font-semibold px-5 py-2 rounded-xs uppercase tracking-wider transition-colors cursor-pointer"
                          >
                            {quoteApproved ? '✓ Quote Approved' : 'Approve Quote'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* =================================================== */}
                {/* TAB 10: VAR ASSISTANT (AI CHATBOT)                  */}
                {/* =================================================== */}
                {activeTab === 'assistant' && (
                  <div className="space-y-6 max-w-3xl">
                    <div className="border-b border-[#D9DAD0] pb-4">
                      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#62645A] flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#62645A]" />
                        Powered by Google Gemini Architecture
                      </span>
                      <h3 className="font-serif text-3xl text-[#1C1D1A] mt-1">VAR Assistant</h3>
                      <p className="text-xs text-[#77786F]">
                        Your project, explained simply. Instant answers on milestones, materials, and updates.
                      </p>
                    </div>

                    {/* Chat Area */}
                    <div className="bg-white border border-[#D9DAD0] rounded-xs p-5 space-y-4">
                      <div className="space-y-3 min-h-[280px] max-h-[360px] overflow-y-auto pr-1">
                        {assistantMessages.map((msg, idx) => (
                          <div
                            key={idx}
                            className={`flex flex-col ${msg.isUser ? 'items-end' : 'items-start'}`}
                          >
                            <span className="text-[10px] font-mono text-[#77786F] mb-1">
                              {msg.sender}
                            </span>
                            <div
                              className={`max-w-md p-3.5 rounded-xs text-xs leading-relaxed ${
                                msg.isUser
                                  ? 'bg-[#62645A] text-white'
                                  : 'bg-[#EEEDE6] text-[#1C1D1A] border border-[#D9DAD0]'
                              }`}
                            >
                              {msg.text}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Suggested Questions Pills */}
                      <div className="space-y-1.5 pt-2 border-t border-[#EEEDE6]">
                        <div className="text-[10px] uppercase font-bold tracking-wider text-[#62645A]">
                          Suggested Questions:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {[
                            'What is my project status?',
                            'When is the next milestone?',
                            'What materials have I approved?',
                            'When will installation be completed?',
                            'Show me my latest project updates.',
                            'I want to change a material.',
                            'I want to speak to my project manager.',
                          ].map((q, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleAssistantSend(q)}
                              className="text-[11px] bg-[#EEEDE6] hover:bg-[#D9DAD0] text-[#46483F] px-2.5 py-1 rounded-xs transition-colors cursor-pointer border border-[#D9DAD0]"
                            >
                              {q}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Input Box */}
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          handleAssistantSend();
                        }}
                        className="flex items-center gap-2 pt-2"
                      >
                        <input
                          type="text"
                          placeholder="Ask anything about your project..."
                          value={assistantInput}
                          onChange={(e) => setAssistantInput(e.target.value)}
                          className="flex-1 bg-[#EEEDE6] border border-[#D9DAD0] px-4 py-2.5 text-xs rounded-xs focus:outline-none focus:border-[#62645A]"
                        />
                        <button
                          type="submit"
                          className="bg-[#62645A] hover:bg-[#46483F] text-white p-2.5 rounded-xs cursor-pointer transition-colors"
                        >
                          <Send className="w-4 h-4" />
                        </button>
                      </form>
                    </div>
                  </div>
                )}
              </main>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Search, X, ArrowRight, Layers } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (anchor: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const catalogItems = [
    { title: 'Modular Kitchens', cat: 'Interiors', anchor: '#interiors', desc: 'Custom island & parallel layouts, acrylic and PU finishes' },
    { title: 'Concealed Soft-Close Hinges', cat: 'Hardware', anchor: '#hardware', desc: 'German engineered 110° & 165° hydraulic damping' },
    { title: 'Walk-in Wardrobes', cat: 'Interiors', anchor: '#interiors', desc: 'Fluted smoked glass and sensor LED illumination' },
    { title: 'Cabinet Handles & Pulls', cat: 'Hardware', anchor: '#hardware', desc: 'Knurled solid brass, muted olive, and brushed graphite' },
    { title: 'Contemporary Kitchen Project', cat: 'Projects', anchor: '#projects', desc: 'Beach Road, Puducherry residence portfolio showcase' },
    { title: 'Anna Salai Showroom', cat: 'Contact', anchor: '#contact', desc: '2nd Floor, KGS Towers, Puducherry - 605001' },
    { title: 'Drawer Runner Systems', cat: 'Hardware', anchor: '#hardware', desc: 'Under-mount 40kg synchronized full extension' },
    { title: 'Living Room Acoustic Media Walls', cat: 'Interiors', anchor: '#interiors', desc: 'Fluted timber slats and floating travertine consoles' },
  ];

  const results = query.trim()
    ? catalogItems.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.cat.toLowerCase().includes(query.toLowerCase()) ||
          item.desc.toLowerCase().includes(query.toLowerCase())
      )
    : catalogItems.slice(0, 5);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-[#1C1D1A]/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#F7F6F1] border border-[#D9DAD0] max-w-xl w-full rounded-xs shadow-2xl overflow-hidden">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#D9DAD0] bg-white">
          <Search className="w-5 h-5 text-[#62645A] shrink-0 mr-3" />
          <input
            type="text"
            autoFocus
            placeholder="Search interiors, hardware fittings, materials..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-[#1C1D1A] text-sm focus:outline-none placeholder:text-[#77786F]"
          />
          <button
            onClick={onClose}
            className="p-1 text-[#77786F] hover:text-[#1C1D1A] transition-colors ml-2"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-3 max-h-[380px] overflow-y-auto space-y-1">
          <div className="px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] font-bold text-[#62645A]">
            {query.trim() ? `Search Results (${results.length})` : 'Popular Searches & Showroom Catalog'}
          </div>

          {results.length === 0 ? (
            <div className="p-6 text-center text-xs text-[#77786F]">
              No exact matches found for "{query}". Try "Kitchen", "Hinges", or "Wardrobe".
            </div>
          ) : (
            results.map((item, idx) => (
              <div
                key={idx}
                onClick={() => {
                  onClose();
                  onNavigate(item.anchor);
                }}
                className="p-3 rounded-xs hover:bg-[#EEEDE6] cursor-pointer flex items-center justify-between group transition-colors"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-[#1C1D1A] group-hover:text-[#46483F]">
                      {item.title}
                    </span>
                    <span className="text-[9px] uppercase tracking-widest font-mono text-[#62645A] bg-[#EEEDE6] px-1.5 py-0.5 rounded-xs">
                      {item.cat}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#77786F] mt-0.5">{item.desc}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#77786F] group-hover:text-[#62645A] group-hover:translate-x-1 transition-all shrink-0" />
              </div>
            ))
          )}
        </div>

        {/* Search Footer */}
        <div className="px-4 py-2.5 bg-[#EEEDE6] border-t border-[#D9DAD0] text-[10px] text-[#77786F] flex items-center justify-between font-mono">
          <span>VAR INTERIORS & HARDWARES CATALOG</span>
          <span>ESC TO CLOSE</span>
        </div>
      </div>
    </div>
  );
};

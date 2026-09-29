import React, { useState } from 'react';
import { Sparkles, Upload, ArrowRight, Wand2, RefreshCw, Check } from 'lucide-react';
import { BeforeAfterSlider } from './BeforeAfterSlider';

export const VisualizeSpaceSection: React.FC<{ onConsult: (topic?: string) => void }> = ({ onConsult }) => {
  const [selectedRoom, setSelectedRoom] = useState<'Kitchen' | 'Wardrobe' | 'Living Room' | 'Bedroom'>('Kitchen');
  const [selectedStyle, setSelectedStyle] = useState<'Modern' | 'Minimal' | 'Warm' | 'Luxury'>('Modern');
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(true);

  // High fidelity before and after images for each room type
  const roomData = {
    Kitchen: {
      before: '/assets/var_kitchen_detail_1790654739950.jpg',
      after: '/assets/var_hero_kitchen_1790654633654.jpg',
      specs: 'Muted olive matte PU cabinetry, seamless quartz waterfall island, soft-close hardware & ambient LED illumination.',
    },
    Wardrobe: {
      before: '/assets/var_handles_accessories_1790654753472.jpg',
      after: '/assets/var_wardrobe_luxury_1790654724721.jpg',
      specs: 'Floor-to-ceiling smoked fluted glass, trackless sliding system, sensor LED strip channels & velvet-lined organizers.',
    },
    'Living Room': {
      before: '/assets/var_showroom_1790654664447.jpg',
      after: '/assets/var_living_dining_1790654677757.jpg',
      specs: 'Acoustic fluted oak feature wall, floating credenza, integrated 2700K cove lighting & travertine dining accents.',
    },
    Bedroom: {
      before: '/assets/var_hardware_hero_1790654652422.jpg',
      after: '/assets/var_living_dining_1790654677757.jpg',
      specs: 'Bespoke bouclé curved acoustic headboard wall, cantilevered bedside ledges & concealed tri-fold vanity unit.',
    },
  };

  const currentData = roomData[selectedRoom];

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setHasGenerated(true);
    }, 1200);
  };

  return (
    <section id="visualize" className="py-24 md:py-32 bg-[#EEEDE6] text-[#1C1D1A] border-t border-[#D9DAD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-[#62645A]" />
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#62645A] uppercase flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#62645A]" />
              AI Design Studio
            </span>
            <span className="w-6 h-[1.5px] bg-[#62645A]" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1C1D1A] font-normal tracking-tight">
            Visualize Your Space
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#62645A] font-serif italic">
            See how your space could look with VAR.
          </p>
          <p className="mt-2 text-xs sm:text-sm text-[#77786F] max-w-lg mx-auto">
            Experience our upcoming AI-powered interior concept renderer. Upload an existing room photo or select a layout below to preview the architectural transformation.
          </p>
        </div>

        {/* 3-Step Controls Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Step 1: Upload / Source */}
          <div className="lg:col-span-4 bg-[#F7F6F1] border border-[#D9DAD0] p-6 rounded-xs space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#62645A]">
              <span className="w-5 h-5 rounded-full bg-[#62645A] text-white flex items-center justify-center text-[10px]">1</span>
              <span>Upload or Choose Room Photo</span>
            </div>

            <div className="border-2 border-dashed border-[#D9DAD0] hover:border-[#62645A] rounded-xs p-6 text-center transition-colors cursor-pointer bg-[#EEEDE6]/50">
              <Upload className="w-7 h-7 mx-auto text-[#62645A] mb-2" />
              <div className="text-xs font-semibold text-[#1C1D1A]">
                Click to upload your room photo
              </div>
              <p className="text-[11px] text-[#77786F] mt-1">
                JPG, PNG or HEIC · Max 15MB
              </p>
            </div>

            <div className="text-[11px] text-[#77786F] text-center">
              or use pre-loaded sample below:
            </div>

            {/* Room Category Buttons */}
            <div className="grid grid-cols-2 gap-2">
              {(['Kitchen', 'Wardrobe', 'Living Room', 'Bedroom'] as const).map((room) => (
                <button
                  key={room}
                  onClick={() => setSelectedRoom(room)}
                  className={`py-2 px-3 text-xs uppercase tracking-wider font-semibold rounded-xs transition-all cursor-pointer ${
                    selectedRoom === room
                      ? 'bg-[#62645A] text-white shadow-xs'
                      : 'bg-[#EEEDE6] text-[#46483F] hover:bg-[#D9DAD0]'
                  }`}
                >
                  {room}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Choose Architectural Style */}
          <div className="lg:col-span-4 bg-[#F7F6F1] border border-[#D9DAD0] p-6 rounded-xs space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#62645A]">
              <span className="w-5 h-5 rounded-full bg-[#62645A] text-white flex items-center justify-center text-[10px]">2</span>
              <span>Select Design Aesthetic</span>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              {(['Modern', 'Minimal', 'Warm', 'Luxury'] as const).map((style) => (
                <div
                  key={style}
                  onClick={() => setSelectedStyle(style)}
                  className={`p-4 rounded-xs border cursor-pointer transition-all flex flex-col justify-between ${
                    selectedStyle === style
                      ? 'bg-[#EEEDE6] border-[#62645A] shadow-xs'
                      : 'bg-white border-[#D9DAD0] hover:border-[#62645A]/50'
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-bold text-[#1C1D1A] uppercase tracking-wide">
                      {style}
                    </span>
                    {selectedStyle === style && (
                      <Check className="w-3.5 h-3.5 text-[#62645A]" />
                    )}
                  </div>
                  <span className="text-[10px] text-[#77786F]">
                    {style === 'Modern' && 'Clean lines & quartz'}
                    {style === 'Minimal' && 'Nordic fluted wood'}
                    {style === 'Warm' && 'Earth tones & travertine'}
                    {style === 'Luxury' && 'Smoked glass & brass'}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-3">
              <button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full bg-[#62645A] hover:bg-[#46483F] disabled:opacity-50 text-white text-xs uppercase tracking-[0.18em] font-bold py-3.5 rounded-xs transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Rendering Concept...</span>
                  </>
                ) : (
                  <>
                    <Wand2 className="w-4 h-4" />
                    <span>Visualize My Space</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Step 3: Spec Summary */}
          <div className="lg:col-span-4 bg-[#F7F6F1] border border-[#D9DAD0] p-6 rounded-xs space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#62645A]">
              <span className="w-5 h-5 rounded-full bg-[#62645A] text-white flex items-center justify-center text-[10px]">3</span>
              <span>Applied VAR Materials</span>
            </div>

            <div className="p-4 bg-[#EEEDE6] rounded-xs border border-[#D9DAD0] space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#1C1D1A]">
                {selectedRoom} · {selectedStyle} Aesthetic
              </div>
              <p className="text-xs text-[#46483F] leading-relaxed">
                {currentData.specs}
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onConsult(`AI Concept: ${selectedRoom} (${selectedStyle})`)}
                className="w-full bg-[#F7F6F1] hover:bg-[#EEEDE6] text-[#1C1D1A] border border-[#62645A] text-xs uppercase tracking-[0.16em] font-bold py-3 rounded-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Build This Space With VAR</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#62645A]" />
              </button>
            </div>
          </div>
        </div>

        {/* Big Before & After Interactive Showcase */}
        {hasGenerated && (
          <div className="bg-[#F7F6F1] border border-[#D9DAD0] p-6 md:p-8 rounded-xs shadow-xl space-y-4 animate-in fade-in duration-500">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#D9DAD0] pb-4">
              <div>
                <span className="inline-block text-[10px] uppercase tracking-[0.2em] font-bold text-[#62645A] bg-[#EEEDE6] px-2.5 py-0.5 rounded-xs mb-1">
                  AI Concept Preview
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1D1A]">
                  Transformation Result: {selectedRoom} ({selectedStyle})
                </h3>
              </div>

              <div className="text-xs text-[#77786F]">
                Drag slider horizontally to compare original vs VAR architecture
              </div>
            </div>

            {/* Real Interactive Before & After Slider */}
            <div className="pt-2">
              <BeforeAfterSlider
                beforeImage={currentData.before}
                afterImage={currentData.after}
                beforeLabel="YOUR SPACE (ORIGINAL)"
                afterLabel="VAR ARCHITECTURAL CONCEPT"
                aspectRatio="aspect-[16/9]"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 text-xs text-[#77786F] gap-2">
              <span>Includes 10-year mechanical warranty on all fittings.</span>
              <button
                onClick={() => onConsult(`Consultation for ${selectedRoom} transformation`)}
                className="text-[#62645A] hover:text-[#1C1D1A] font-bold uppercase tracking-wider underline flex items-center gap-1 cursor-pointer"
              >
                <span>Book Site Measurement & Material Touch Session</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

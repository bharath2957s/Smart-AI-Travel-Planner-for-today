import React, { useState, useEffect, useRef } from 'react';
import { Sliders, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface HowItWorksSectionProps {
  onPlanTrip: () => void;
  onExploreResearch: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({
  onPlanTrip,
  onExploreResearch,
}) => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.25 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      step: '01',
      title: 'Define Parameters & Style',
      description: 'Enter your destination, dates, traveler party size, and travel style — whether balancing relaxed coastal afternoons or high-density cultural exploration.',
      detail: 'Calibrates origin, transit preferences, and strict currency outlay.',
      icon: Sliders,
    },
    {
      step: '02',
      title: 'Autonomous Orchestration',
      description: 'The multi-agent coordinator dispatches specialist sub-agents across venue geolocation, pacing optimization, and deterministic expense verification.',
      detail: 'Runs parallel validation and resolves geographic route conflicts.',
      icon: Sparkles,
    },
    {
      step: '03',
      title: 'Verified Logistics & Dossier',
      description: 'Receive your complete day-by-day plan with verified coordinates, real booking redirects, weather telemetry, and privacy-first document OCR.',
      detail: 'Ready for instant offline export, sharing, and live day tracking.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="py-20 sm:py-28 relative z-10 text-[#14213D] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 border border-[rgba(20,33,61,0.12)] text-[#D4A24C] text-xs font-bold shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#D4A24C]" />
            <span>3-Stage Autonomous Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif-heading tracking-tight text-[#14213D]">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-[#6B6F80] leading-relaxed">
            From initial intent to verified logistics, every stage is structured with mathematical precision and domain-specific AI intelligence.
          </p>
        </div>

        {/* 3 Step Cards Connected by a Line that Draws Itself */}
        <div className="relative">
          {/* Connecting SVG Line (desktop only) */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 -translate-y-8 pointer-events-none z-0">
            <svg className="w-full h-8 overflow-visible" preserveAspectRatio="none">
              <line
                x1="5%"
                y1="50%"
                x2="95%"
                y2="50%"
                stroke="#D4A24C"
                strokeWidth="2"
                strokeDasharray="400"
                strokeDashoffset={inView ? '0' : '400'}
                className="transition-all duration-1000 ease-out"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((st, i) => {
              const Icon = st.icon;
              return (
                <div
                  key={st.step}
                  className="gh-home-glass p-8 flex flex-col justify-between group hover:border-[#D4A24C] transition-all duration-300 relative"
                  style={{
                    animation: inView
                      ? `ghPageEnter 600ms cubic-bezier(0.22, 1, 0.36, 1) ${i * 120}ms both`
                      : 'none',
                  }}
                >
                  <div>
                    {/* Header step counter & Gold Icon */}
                    <div className="flex items-center justify-between pb-4 border-b border-[rgba(20,33,61,0.08)] mb-6">
                      <span className="text-3xl font-extrabold font-mono text-[#D4A24C] group-hover:scale-105 transition-transform">
                        {st.step}
                      </span>
                      <div className="w-12 h-12 rounded-[16px] bg-[#F6EFE6] border border-[rgba(20,33,61,0.08)] flex items-center justify-center text-[#D4A24C] group-hover:bg-[#D4A24C] group-hover:text-white transition-all duration-300 shadow-2xs">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold font-serif-heading text-[#14213D] mb-3 leading-snug">
                      {st.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6B6F80] leading-relaxed">
                      {st.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[rgba(20,33,61,0.06)]">
                    <span className="text-[11px] font-semibold text-[#2A9D8F] flex items-center gap-1.5">
                      <span>✓</span>
                      <span>{st.detail}</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-14 flex justify-center items-center gap-4">
          <button
            onClick={onPlanTrip}
            className="gh-btn-terracotta font-bold px-8 py-3.5 rounded-xl flex items-center gap-2 cursor-pointer shadow-md"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span>Start Building Your Itinerary</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

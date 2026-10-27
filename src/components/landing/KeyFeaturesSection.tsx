import React, { useState, useEffect, useRef } from 'react';
import {
  CalendarDays,
  Compass,
  MessageSquare,
  Sparkles,
  Calculator,
  Plane,
  CloudSun,
  FileText,
  Activity,
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Clock,
  ShieldCheck,
  Check,
} from 'lucide-react';

interface KeyFeaturesSectionProps {
  onNavigateTo: (page: string, initialData?: any) => void;
}

export const KeyFeaturesSection: React.FC<KeyFeaturesSectionProps> = ({ onNavigateTo }) => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Top 3 Spotlight Features (Alternating Left/Right)
  const spotlightFeatures = [
    {
      id: 'itinerary',
      eyebrow: '01. Temporal Synthesis',
      title: 'Autonomous Day-by-Day Itineraries',
      description:
        'Eliminate chaotic multi-tab planning. Our itinerary engine arranges mornings, afternoons, and evenings into coherent geographic sequences, complete with estimated visit durations, rest buffers, and landmark coordinates.',
      benefits: [
        'Time slot optimization preventing backtracking',
        'Customizable pacing balance (relaxed vs intensive)',
        'Direct links to official venue reservations',
      ],
      actionLabel: 'Explore Itinerary Engine',
      page: 'itinerary',
      chip: 'Dynamic Timeline',
      // Visual Card Mockup
      visualType: 'itinerary',
    },
    {
      id: 'flights',
      eyebrow: '02. Cartography & Routes',
      title: 'Multi-Modal Route Discovery',
      description:
        'Seamlessly combine flights, high-speed rail, regional coaches, and ferries into an unbroken travel thread. Compare transit carbon footprints and live pricing across providers.',
      benefits: [
        'Multi-leg transit arbitrage (air + rail + ferry)',
        'Live search redirects to Google Flights & Skyscanner',
        'Elevation profiles and scenic scenic waypoint highlights',
      ],
      actionLabel: 'View Route Planner',
      page: 'flights',
      chip: 'Global Mobility',
      visualType: 'map',
    },
    {
      id: 'concierge',
      eyebrow: '03. Conversational Intelligence',
      title: 'Context-Aware AI Concierge',
      description:
        'Engage with a specialized travel copilot that understands your exact itinerary, current day schedule, dietary requirements, and remaining contingency budget in real time.',
      benefits: [
        'Instant restaurant and landmark swaps on demand',
        'Zero-hallucination answers grounded in active trip state',
        'Live local language phrases and cultural etiquettes',
      ],
      actionLabel: 'Chat with Concierge',
      page: 'concierge',
      chip: 'Copilot Assistant',
      visualType: 'concierge',
    },
  ];

  // Secondary 6 Feature Modules
  const secondaryFeatures = [
    {
      id: 'budget',
      title: 'Deterministic Budget Tracking',
      icon: Calculator,
      description: 'Mathematical ledger enforcing balance invariants with bilateral cost-splitting across 9 fiat currencies.',
      page: 'budget',
      tag: 'Financial Balance',
    },
    {
      id: 'hotels',
      title: 'Verified Stays & Sanctuaries',
      icon: Compass,
      description: 'Hand-picked boutique stays and luxury retreats linked directly to verified booking channels.',
      page: 'hotels',
      tag: 'Stays',
    },
    {
      id: 'weather',
      title: 'Microclimate & Safety Telemetry',
      icon: CloudSun,
      description: 'UV indices, daylight forecasts, sea temperatures, and country travel advisories updated dynamically.',
      page: 'weather',
      tag: 'Safety First',
    },
    {
      id: 'documents',
      title: 'Multimodal Travel Document OCR',
      icon: FileText,
      description: 'Privacy-first document ingestion for boarding passes, passports, and visas with zero permanent retention.',
      page: 'documents',
      tag: 'Private OCR',
    },
    {
      id: 'planner',
      title: 'Quick Trip Synthesis Wizard',
      icon: Sparkles,
      description: 'Create a tailored multi-day itinerary in seconds by stating your origin, target hub, and budget constraints.',
      page: 'planner',
      tag: 'Synthesis',
    },
    {
      id: 'research',
      title: 'Agent Center Benchmarks',
      icon: Activity,
      description: 'Inspect live CPU, memory consumption, latency, and single-agent vs multi-agent orchestration logs.',
      page: 'agents',
      tag: 'Benchmarking',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="features"
      className="py-20 sm:py-28 relative z-10 text-[#14213D] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 border border-[rgba(20,33,61,0.12)] text-[#2A9D8F] text-xs font-bold shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#2A9D8F]" />
            <span>Comprehensive Travel Intelligence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif-heading tracking-tight text-[#14213D]">
            Crafted for Seamless Journeys
          </h2>
          <p className="text-base sm:text-lg text-[#6B6F80] leading-relaxed">
            Every module combines automated artificial intelligence with deterministic real-world tools — from geometric scheduling to strict mathematical ledgers.
          </p>
        </div>

        {/* 1. Alternating Left/Right Feature Highlights with Visual Sliding in from the side */}
        <div className="space-y-16 sm:space-y-24">
          {spotlightFeatures.map((feat, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={feat.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Text Column (Takes 6 cols, ordered based on isEven) */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                  style={{
                    transform: inView ? 'translateX(0)' : isEven ? 'translateX(30px)' : 'translateX(-30px)',
                    opacity: inView ? 1 : 0,
                    transition: `transform 700ms cubic-bezier(0.22, 1, 0.36, 1) ${index * 150}ms, opacity 700ms ease ${index * 150}ms`,
                  }}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F6EFE6] border border-[rgba(20,33,61,0.1)] text-[#D4A24C] text-xs font-bold">
                    <span>{feat.eyebrow}</span>
                    <span className="text-[#6B6F80]">·</span>
                    <span className="text-[#2A9D8F]">{feat.chip}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-serif-heading text-[#14213D] leading-tight">
                    {feat.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#6B6F80] leading-relaxed">
                    {feat.description}
                  </p>

                  <ul className="space-y-3 pt-2">
                    {feat.benefits.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-3 text-xs sm:text-sm text-[#14213D] font-medium">
                        <div className="w-5 h-5 rounded-full bg-[#2A9D8F]/15 flex items-center justify-center text-[#2A9D8F] shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2">
                    <button
                      onClick={() => onNavigateTo(feat.page)}
                      className="gh-btn-terracotta px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md"
                    >
                      <span>{feat.actionLabel}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Visual Sliding Column (Takes 6 cols) */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                  style={{
                    transform: inView ? 'translateX(0)' : isEven ? 'translateX(-30px)' : 'translateX(30px)',
                    opacity: inView ? 1 : 0,
                    transition: `transform 700ms cubic-bezier(0.22, 1, 0.36, 1) ${index * 150 + 100}ms, opacity 700ms ease ${index * 150 + 100}ms`,
                  }}
                >
                  <div className="gh-home-glass p-6 sm:p-8 rounded-[20px] shadow-lg border border-[rgba(20,33,61,0.12)]">
                    {feat.visualType === 'itinerary' && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-[rgba(20,33,61,0.08)]">
                          <div className="flex items-center gap-2">
                            <CalendarDays className="w-5 h-5 text-[#E76F51]" />
                            <span className="font-bold text-sm text-[#14213D]">Day 2: Capri Coastal Odyssey</span>
                          </div>
                          <span className="text-xs font-bold text-[#D4A24C] bg-[#D4A24C]/15 px-2.5 py-0.5 rounded-full">
                            Optimal Pacing
                          </span>
                        </div>
                        {/* Timeline slots */}
                        <div className="space-y-3">
                          <div className="p-3 rounded-[14px] bg-white/90 border border-[rgba(20,33,61,0.08)] flex items-start justify-between shadow-2xs">
                            <div className="flex items-start gap-3">
                              <span className="text-[11px] font-mono font-bold text-[#D4A24C] mt-0.5">09:00 AM</span>
                              <div>
                                <h4 className="text-xs font-bold text-[#14213D]">Grotta Azzurra (Blue Grotto)</h4>
                                <p className="text-[11px] text-[#6B6F80]">Rowboat cave entry with morning sunlight refraction</p>
                              </div>
                            </div>
                            <span className="text-[10px] font-bold text-[#2A9D8F] bg-[#2A9D8F]/10 px-2 py-0.5 rounded-md">2.0 hrs</span>
                          </div>
                          <div className="p-3 rounded-[14px] bg-white/90 border border-[rgba(20,33,61,0.08)] flex items-start justify-between shadow-2xs">
                            <div className="flex items-start gap-3">
                              <span className="text-[11px] font-mono font-bold text-[#D4A24C] mt-0.5">01:30 PM</span>
                              <div>
                                <h4 className="text-xs font-bold text-[#14213D]">Villa San Michele & Anacapri</h4>
                                <p className="text-[11px] text-[#6B6F80]">Panoramic terrace gardens overlooking the Gulf of Naples</p>
                              </div>
                            </div>
                            <span className="text-[10px] font-bold text-[#2A9D8F] bg-[#2A9D8F]/10 px-2 py-0.5 rounded-md">2.5 hrs</span>
                          </div>
                          <div className="p-3 rounded-[14px] bg-white/90 border border-[rgba(20,33,61,0.08)] flex items-start justify-between shadow-2xs">
                            <div className="flex items-start gap-3">
                              <span className="text-[11px] font-mono font-bold text-[#D4A24C] mt-0.5">07:00 PM</span>
                              <div>
                                <h4 className="text-xs font-bold text-[#14213D]">Sunset Taverna & Seafood Tasting</h4>
                                <p className="text-[11px] text-[#6B6F80]">Cliffside dining reservation at Marina Grande</p>
                              </div>
                            </div>
                            <span className="text-[10px] font-bold text-[#E76F51] bg-[#E76F51]/10 px-2 py-0.5 rounded-md">Evening</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {feat.visualType === 'map' && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-[rgba(20,33,61,0.08)]">
                          <div className="flex items-center gap-2">
                            <Plane className="w-5 h-5 text-[#2A9D8F]" />
                            <span className="font-bold text-sm text-[#14213D]">Multi-Modal Transit Arbitrage</span>
                          </div>
                          <span className="text-xs font-mono font-bold text-[#2A9D8F] bg-[#2A9D8F]/15 px-2.5 py-0.5 rounded-full">
                            -38% Carbon
                          </span>
                        </div>
                        <div className="space-y-2.5">
                          <div className="p-3 rounded-[14px] bg-white/90 border border-[rgba(20,33,61,0.08)] flex items-center justify-between shadow-2xs">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-[#F6EFE6] flex items-center justify-center text-[#14213D]">✈️</div>
                              <div>
                                <div className="text-xs font-bold text-[#14213D]">Rome (FCO) → Naples (NAP)</div>
                                <span className="text-[10px] text-[#6B6F80]">Direct flight connection · 50 min</span>
                              </div>
                            </div>
                            <span className="text-xs font-mono font-bold text-[#14213D]">$112</span>
                          </div>
                          <div className="p-3 rounded-[14px] bg-white/90 border border-[#2A9D8F]/30 flex items-center justify-between shadow-2xs">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-[#2A9D8F]/15 flex items-center justify-center text-[#2A9D8F]">🚆</div>
                              <div>
                                <div className="text-xs font-bold text-[#14213D]">Frecciarossa High-Speed Rail</div>
                                <span className="text-[10px] text-[#2A9D8F] font-bold">Recommended: 1h 10m · Scenic route</span>
                              </div>
                            </div>
                            <span className="text-xs font-mono font-bold text-[#2A9D8F]">$38</span>
                          </div>
                          <div className="p-3 rounded-[14px] bg-white/90 border border-[rgba(20,33,61,0.08)] flex items-center justify-between shadow-2xs">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-[#F6EFE6] flex items-center justify-center text-[#14213D]">⛴️</div>
                              <div>
                                <div className="text-xs font-bold text-[#14213D]">Naples Beverello → Capri Hydrofoil</div>
                                <span className="text-[10px] text-[#6B6F80]">Ocean transfer · 45 min</span>
                              </div>
                            </div>
                            <span className="text-xs font-mono font-bold text-[#14213D]">$24</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {feat.visualType === 'concierge' && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-[rgba(20,33,61,0.08)]">
                          <div className="flex items-center gap-2">
                            <MessageSquare className="w-5 h-5 text-[#D4A24C]" />
                            <span className="font-bold text-sm text-[#14213D]">Autonomous Copilot Stream</span>
                          </div>
                          <span className="text-xs font-bold text-[#2A9D8F] bg-[#2A9D8F]/15 px-2.5 py-0.5 rounded-full">
                            Active
                          </span>
                        </div>
                        <div className="space-y-3 text-xs">
                          <div className="p-3 rounded-[14px] bg-[#F6EFE6] text-[#14213D] max-w-[85%] self-start shadow-2xs">
                            <span className="font-bold text-[#6B6F80] block text-[10px] mb-0.5">You</span>
                            "It looks like rain tomorrow morning in Kyoto. Can we swap the outdoor bamboo forest for an indoor tea ceremony?"
                          </div>
                          <div className="p-3 rounded-[14px] bg-white border border-[rgba(20,33,61,0.1)] text-[#14213D] ml-auto max-w-[90%] shadow-2xs space-y-1.5">
                            <div className="flex items-center gap-1.5 text-[#D4A24C] font-bold text-[10px]">
                              <Sparkles className="w-3 h-3" />
                              <span>Travel Concierge Agent</span>
                            </div>
                            <p className="text-[11px] leading-relaxed text-[#14213D]">
                              "Swapped! Rescheduled Arashiyama Bamboo Grove to Day 4 afternoon when skies clear. Reserved a private 10:30 AM Urasenke Tea Ceremony at Camellia Garden. Budget delta: +$14 USD."
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 2. Secondary Feature Cards Grid */}
        <div className="pt-8">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold font-serif-heading text-[#14213D]">
              Additional Autonomous Systems
            </h3>
            <p className="text-xs sm:text-sm text-[#6B6F80]">
              Every supporting utility runs locally or via private API proxies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {secondaryFeatures.map((sec) => {
              const Icon = sec.icon;
              return (
                <div
                  key={sec.id}
                  onClick={() => onNavigateTo(sec.page)}
                  className="gh-home-glass p-6 flex flex-col justify-between group hover:border-[#D4A24C] transition-all duration-300 cursor-pointer"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-[14px] bg-[#F6EFE6] border border-[rgba(20,33,61,0.08)] flex items-center justify-center text-[#D4A24C] group-hover:scale-105 group-hover:bg-[#D4A24C] group-hover:text-white transition-all shadow-2xs">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#6B6F80] bg-[#14213D]/5 px-2.5 py-0.5 rounded-full">
                        {sec.tag}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-[#14213D] group-hover:text-[#E76F51] transition-colors">
                      {sec.title}
                    </h4>

                    <p className="text-xs text-[#6B6F80] leading-relaxed">
                      {sec.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[rgba(20,33,61,0.08)] mt-4 flex items-center justify-between text-xs font-bold text-[#2A9D8F] group-hover:text-[#1E7469]">
                    <span>Launch Feature</span>
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

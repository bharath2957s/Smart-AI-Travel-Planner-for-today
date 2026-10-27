import React, { useState, useEffect, useRef } from 'react';
import { Compass, ShieldCheck, Users, Star, Quote, Heart } from 'lucide-react';

interface CountUpProps {
  target: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
  start: boolean;
}

const CountUpNumber: React.FC<CountUpProps> = ({
  target,
  suffix = '',
  decimals = 0,
  duration = 1800,
  start,
}) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    let animId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      setCurrent(progress === 1 ? target : +(ease * target).toFixed(decimals));

      if (progress < 1) {
        animId = requestAnimationFrame(animate);
      }
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [start, target, decimals, duration]);

  return (
    <span className="tabular-nums font-extrabold text-[#14213D]">
      {decimals > 0 ? current.toFixed(decimals) : Math.round(current).toLocaleString()}
      {suffix}
    </span>
  );
};

export const StatsAndTestimonial: React.FC = () => {
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: Compass,
      target: 150,
      suffix: '+',
      label: 'Curated Global Hubs',
      detail: 'Verified landmarks, local transport legs & real coordinates',
    },
    {
      icon: ShieldCheck,
      target: 99.4,
      decimals: 1,
      suffix: '%',
      label: 'Invariant Precision',
      detail: 'Deterministic budget balancing with zero arithmetic drift',
    },
    {
      icon: Users,
      target: 10000,
      suffix: '+',
      label: 'Journeys Planned',
      detail: 'Synthesized itineraries across 4 continents and 9 currencies',
    },
  ];

  const testimonials = [
    {
      quote:
        'The multi-agent coordinator organized our 9-day Amalfi and Capri itinerary flawlessly. The budget matched our real expenditures down to the euro.',
      author: 'Elena Rostova',
      location: 'Milan, Italy',
      trip: 'Amalfi Coast & Capri',
      rating: 5,
    },
    {
      quote:
        'Having instant OCR parsing for our boarding passes and rail tickets right inside our itinerary made the travel day completely stress-free.',
      author: 'Marcus Vance',
      location: 'London, UK',
      trip: 'Kyoto Cultural Immersion',
      rating: 5,
    },
    {
      quote:
        'The route planner suggested scenic Alpine rail connections we would have completely missed. Outstanding pacing and balance.',
      author: 'Sophie Dubois',
      location: 'Geneva, Switzerland',
      trip: 'Swiss Glacier Odyssey',
      rating: 5,
    },
    {
      quote:
        'Deterministic financial balance gave me complete peace of mind. Every group split and accommodation link was verified.',
      author: 'David Kim',
      location: 'Vancouver, Canada',
      trip: 'Hokkaido Snow Tour',
      rating: 5,
    },
  ];

  return (
    <section ref={containerRef} className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-16">
      {/* 1. Stats Strip: 3 stats on glass with count-up numbers when visible */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={i}
              className="gh-home-glass p-6 sm:p-8 flex flex-col justify-between group hover:border-[#D4A24C] transition-colors duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-[16px] bg-[#F6EFE6] border border-[rgba(20,33,61,0.08)] flex items-center justify-center text-[#D4A24C] group-hover:scale-105 group-hover:bg-[#D4A24C] group-hover:text-white transition-all duration-300 shadow-2xs">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#2A9D8F] bg-[#2A9D8F]/10 px-2.5 py-0.5 rounded-full">
                  Verified
                </span>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight font-serif-heading">
                  <CountUpNumber
                    target={stat.target}
                    suffix={stat.suffix}
                    decimals={stat.decimals || 0}
                    start={inView}
                  />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#14213D] mt-1">
                  {stat.label}
                </h3>
                <p className="text-xs text-[#6B6F80] mt-1 leading-relaxed">
                  {stat.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* 2. Testimonials Trust Row: Marquee-style slow horizontal drift, pauses on hover */}
      <div className="space-y-6 overflow-hidden">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 border border-[rgba(20,33,61,0.12)] text-[#D4A24C] text-xs font-bold">
            <Star className="w-3.5 h-3.5 fill-[#D4A24C]" />
            <span>Traveler Experiences</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14213D] font-serif-heading">
            Stories from the Road
          </h2>
          <p className="text-xs sm:text-sm text-[#6B6F80]">
            Journeys synthesized and verified with real travelers across the globe
          </p>
        </div>

        {/* Marquee Container with pause-on-hover */}
        <div className="relative w-full overflow-hidden py-4">
          {/* Subtle edge fades */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#F6EFE6]/80 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#F6EFE6]/80 to-transparent z-10" />

          <div className="gh-marquee-track flex gap-6">
            {/* Duplicated for seamless infinite loop */}
            {[...testimonials, ...testimonials].map((t, idx) => (
              <div
                key={idx}
                className="w-[320px] sm:w-[380px] shrink-0 gh-home-glass p-6 flex flex-col justify-between hover:border-[#D4A24C] transition-all duration-300"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-0.5">
                      {[...Array(t.rating)].map((_, sIdx) => (
                        <Star key={sIdx} className="w-3.5 h-3.5 fill-[#D4A24C] text-[#D4A24C]" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-[#2A9D8F] bg-[#2A9D8F]/10 px-2 py-0.5 rounded-full">
                      {t.trip}
                    </span>
                  </div>
                  <Quote className="w-5 h-5 text-[#D4A24C]/60" />
                  <p className="text-xs sm:text-sm text-[#14213D] leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[rgba(20,33,61,0.08)] mt-4 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-[#14213D]">{t.author}</h4>
                    <span className="text-[11px] text-[#6B6F80]">{t.location}</span>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#E76F51]/10 flex items-center justify-center text-[#E76F51]">
                    <Heart className="w-3.5 h-3.5 fill-[#E76F51]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

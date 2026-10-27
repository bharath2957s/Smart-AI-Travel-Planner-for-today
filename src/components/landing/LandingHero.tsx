import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, ArrowRight, Compass, Star, ChevronDown, Mouse } from 'lucide-react';
import { LandingSearchWidget } from './LandingSearchWidget';
import { LandingSearchState } from '../../types/landingTypes';

interface LandingHeroProps {
  onPlanTrip: () => void;
  onExploreResearch: () => void;
  onDiscoverProject: () => void;
  onSearch: (criteria: LandingSearchState) => void;
}

export const LandingHero: React.FC<LandingHeroProps> = ({
  onPlanTrip,
  onExploreResearch,
  onDiscoverProject,
  onSearch,
}) => {
  // Parallax tilt state for desktop cursor movement
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice) return;
    const { clientX, clientY, currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = (clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 8, y: y * 8 }); // Max 4 degrees tilt
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  // Words for staggered headline animation
  const headlineWords = ['Smarter', 'Travel', 'Planning,'];

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full pt-6 sm:pt-10 pb-16 sm:pb-24 overflow-hidden"
    >
      {/* Left-side Scrim for Orbit: positioned above background animation (canvas z-0), below text (z-10), pointer-events: none. Does not hide Earth */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-full lg:w-[68%] max-w-5xl scene-scrim scene-transition"
        style={{ zIndex: 1 }}
        aria-hidden="true"
      />

      {/* 1. Decorative Extras: Soft Blurred Gold and Terracotta Glow Orbs (10-18% opacity, slow drift, non-blocking) */}
      <div
        className="pointer-events-none absolute -top-10 left-10 w-[420px] h-[420px] rounded-full blur-[110px] gh-orb-1"
        style={{
          background: 'radial-gradient(circle, rgba(212, 162, 76, 0.16) 0%, transparent 70%)',
          zIndex: 2,
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-40 right-10 w-[460px] h-[460px] rounded-full blur-[130px] gh-orb-2"
        style={{
          background: 'radial-gradient(circle, rgba(231, 111, 81, 0.14) 0%, transparent 70%)',
          zIndex: 2,
        }}
        aria-hidden="true"
      />

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* Left Editorial Copy Column */}
          <div className="lg:col-span-7 flex flex-col items-start pt-2 sm:pt-4">
            {/* Context kicker badge on glass */}
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-md text-xs font-semibold mb-6 shadow-2xs scene-transition"
              style={{
                backgroundColor: 'var(--glass-bg)',
                borderColor: 'var(--glass-border)',
                borderWidth: 1,
                borderStyle: 'solid',
                color: 'var(--glass-text)',
                animation: 'ghPageEnter 500ms cubic-bezier(0.22, 1, 0.36, 1) forwards',
              }}
            >
              <span className="w-2 h-2 rounded-full scene-transition" style={{ backgroundColor: 'var(--nav-active)' }} />
              <span className="font-bold scene-transition" style={{ color: 'var(--glass-text)' }}>
                Autonomous Journey Synthesis
              </span>
              <span className="scene-transition" style={{ color: 'var(--glass-text-muted)' }}>·</span>
              <span className="font-bold scene-transition" style={{ color: 'var(--chip-teal)' }}>
                Golden Hour Edition
              </span>
            </div>

            {/* Headline with 70ms word stagger & key word gold underline & shimmer */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight font-serif-heading leading-[1.08] text-balance scene-transition"
              style={{
                color: 'var(--hero-title)',
                textShadow: 'var(--hero-text-shadow)',
              }}
            >
              <span className="inline-flex flex-wrap gap-x-3 gap-y-1">
                {headlineWords.map((word, index) => (
                  <span
                    key={word}
                    className="inline-block transform"
                    style={{
                      animation: `ghPageEnter 550ms cubic-bezier(0.22, 1, 0.36, 1) ${index * 70}ms both`,
                    }}
                  >
                    {word}
                  </span>
                ))}
              </span>
              <br />
              <span
                className="relative inline-block mt-2 font-serif-heading"
                style={{
                  animation: `ghPageEnter 600ms cubic-bezier(0.22, 1, 0.36, 1) 220ms both`,
                }}
              >
                <span className="gh-text-shimmer">Powered by AI</span>
                {/* Self-drawing Gold Underline */}
                <span
                  className="absolute -bottom-1 left-0 right-0 h-[4px] rounded-full gh-underline-animated block pointer-events-none scene-transition"
                  style={{ backgroundColor: 'var(--nav-active)' }}
                  aria-hidden="true"
                />
              </span>
            </h1>

            {/* Subtext with fade in */}
            <p
              className="mt-6 text-base sm:text-lg max-w-2xl leading-relaxed font-normal scene-transition"
              style={{
                color: 'var(--hero-sub)',
                textShadow: 'var(--hero-text-shadow)',
                animation: `ghPageEnter 600ms cubic-bezier(0.22, 1, 0.36, 1) 320ms both`,
              }}
            >
              Discover destinations, build personalized itineraries, optimize your travel budget, and explore how intelligent AI agents turn spontaneous ideas into perfectly orchestrated journeys.
            </p>

            {/* CTAs Row */}
            <div
              className="mt-8 flex flex-wrap items-center gap-4"
              style={{
                animation: `ghPageEnter 600ms cubic-bezier(0.22, 1, 0.36, 1) 400ms both`,
              }}
            >
              {/* Primary Single Terracotta CTA */}
              <button
                onClick={onPlanTrip}
                className="gh-btn-terracotta font-bold px-7 py-3.5 rounded-xl flex items-center gap-2 cursor-pointer group shadow-md"
              >
                <Sparkles className="w-4 h-4 text-white" />
                <span>Plan Your Trip</span>
                <ArrowRight className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary Clean Glass CTA */}
              <button
                onClick={onExploreResearch}
                className="font-semibold px-6 py-3.5 rounded-xl backdrop-blur-md active:scale-95 transition-all flex items-center gap-2 cursor-pointer shadow-2xs scene-transition"
                style={{
                  backgroundColor: 'var(--glass-bg)',
                  borderColor: 'var(--glass-border)',
                  borderWidth: 1,
                  borderStyle: 'solid',
                  color: 'var(--glass-text)',
                }}
              >
                <Compass className="w-4 h-4 scene-transition" style={{ color: 'var(--chip-teal)' }} />
                <span>Explore AI Research</span>
              </button>

              {/* Smooth in-page anchor scroll link */}
              <button
                onClick={onDiscoverProject}
                className="text-xs sm:text-sm font-semibold px-3 py-2 flex items-center gap-1.5 transition-colors cursor-pointer group scene-transition"
                style={{ color: 'var(--small-text)' }}
              >
                <span>Discover the Project</span>
                <span className="transform group-hover:translate-y-0.5 transition-transform" style={{ color: 'var(--nav-active)' }}>↓</span>
              </button>
            </div>

            {/* Clean unboxed proof micro-guarantees (Anti-slop zero pill discipline) */}
            <div
              className="mt-10 pt-6 border-t flex flex-wrap items-center gap-5 text-xs scene-transition"
              style={{
                borderColor: 'var(--glass-border)',
                color: 'var(--small-text)',
                animation: `ghPageEnter 600ms cubic-bezier(0.22, 1, 0.36, 1) 480ms both`,
              }}
            >
              <div className="flex items-center gap-1.5 font-medium">
                <span className="font-bold scene-transition" style={{ color: 'var(--chip-teal)' }}>✓</span>
                <span>Zero-Retention Privacy for Documents</span>
              </div>
              <span className="scene-transition" style={{ color: 'var(--nav-active)' }}>·</span>
              <div className="flex items-center gap-1.5 font-medium">
                <span className="font-bold scene-transition" style={{ color: 'var(--chip-teal)' }}>✓</span>
                <span>Deterministic Budget Balance</span>
              </div>
              <span className="scene-transition" style={{ color: 'var(--nav-active)' }}>·</span>
              <div className="flex items-center gap-1.5 font-medium">
                <span className="font-bold scene-transition" style={{ color: 'var(--chip-teal)' }}>✓</span>
                <span>Live Single vs Multi-Agent Telemetry</span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Photo Collage with Desktop Parallax Tilt */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[380px] sm:min-h-[440px]">
            <div
              className="relative w-full max-w-[420px] h-[380px] sm:h-[420px] transition-transform duration-200 ease-out"
              style={{
                transform: !isTouchDevice
                  ? `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${-tilt.y}deg)`
                  : 'none',
              }}
            >
              {/* Collage Card 1: Amalfi Coast (Top Left) */}
              <div
                className="absolute top-2 left-2 w-52 sm:w-60 rounded-[20px] p-2 bg-white/90 backdrop-blur-xl border border-[rgba(20,33,61,0.12)] gh-float-1 z-20 group cursor-pointer scene-transition"
                style={{
                  animationDelay: '600ms',
                  boxShadow: 'var(--photo-card-shadow)',
                }}
              >
                <div className="gh-img-frame rounded-[14px] h-32 sm:h-36 w-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80"
                    alt="Amalfi Coast, Italy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  {/* Floating Teal Heritage Chip */}
                  <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-[#2A9D8F]/90 text-white text-[10px] font-bold tracking-wide backdrop-blur-xs shadow-xs">
                    Coastal Haven
                  </div>
                </div>
                <div className="pt-2 px-1 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-[#14213D]">Amalfi & Capri</h4>
                    <span className="text-[10px] text-[#6B6F80]">Southern Italy</span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-bold text-[#D4A24C] bg-[#D4A24C]/10 px-2 py-0.5 rounded-md">
                    <Star className="w-3 h-3 fill-[#D4A24C]" />
                    <span>4.9</span>
                  </div>
                </div>
              </div>

              {/* Collage Card 2: Kyoto Shrine (Right Offset) */}
              <div
                className="absolute top-20 right-0 sm:right-2 w-52 sm:w-60 rounded-[20px] p-2 bg-white/90 backdrop-blur-xl border border-[rgba(20,33,61,0.12)] gh-float-2 z-30 group cursor-pointer scene-transition"
                style={{
                  animationDelay: '750ms',
                  boxShadow: 'var(--photo-card-shadow)',
                }}
              >
                <div className="gh-img-frame rounded-[14px] h-36 sm:h-40 w-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80"
                    alt="Kyoto, Japan"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  {/* Floating Teal Chip */}
                  <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-[#2A9D8F]/90 text-white text-[10px] font-bold tracking-wide backdrop-blur-xs shadow-xs">
                    Heritage
                  </div>
                </div>
                <div className="pt-2 px-1 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-[#14213D]">Kyoto Shrines</h4>
                    <span className="text-[10px] text-[#6B6F80]">Kansai, Japan</span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-bold text-[#D4A24C] bg-[#D4A24C]/10 px-2 py-0.5 rounded-md">
                    <Star className="w-3 h-3 fill-[#D4A24C]" />
                    <span>4.95</span>
                  </div>
                </div>
              </div>

              {/* Collage Card 3: Swiss Alps (Bottom Left) */}
              <div
                className="absolute bottom-2 left-6 sm:left-8 w-48 sm:w-54 rounded-[20px] p-2 bg-white/95 backdrop-blur-xl border border-[rgba(20,33,61,0.12)] gh-float-3 z-25 group cursor-pointer scene-transition"
                style={{
                  animationDelay: '900ms',
                  boxShadow: 'var(--photo-card-shadow)',
                }}
              >
                <div className="gh-img-frame rounded-[14px] h-28 sm:h-32 w-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
                    alt="Swiss Alps, Switzerland"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-[#E76F51]/90 text-white text-[10px] font-bold tracking-wide backdrop-blur-xs shadow-xs">
                    Alpine
                  </div>
                </div>
                <div className="pt-2 px-1 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-[#14213D]">Swiss Alps</h4>
                    <span className="text-[10px] text-[#6B6F80]">Glacier Valley</span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-bold text-[#D4A24C] bg-[#D4A24C]/10 px-2 py-0.5 rounded-md">
                    <Star className="w-3 h-3 fill-[#D4A24C]" />
                    <span>4.88</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 2. Plan / Search Card: Slides up 24px with soft spring in load sequence */}
        <div
          className="mt-12 sm:mt-16 w-full"
          style={{
            animation: 'ghPageEnter 650ms cubic-bezier(0.22, 1, 0.36, 1) 450ms both',
          }}
        >
          <LandingSearchWidget onSearch={onSearch} />
        </div>

        {/* 3. Small Animated Scroll Hint at the bottom of hero */}
        <div
          className="mt-12 sm:mt-16 flex flex-col items-center justify-center gap-1 gh-bob scene-transition"
          style={{ color: 'var(--small-text)' }}
        >
          <span className="text-[11px] font-semibold tracking-wider uppercase opacity-80">Scroll to explore</span>
          <div
            className="w-5 h-8 rounded-full border-2 flex items-start justify-center p-1 scene-transition"
            style={{ borderColor: 'var(--scroll-pill-border)' }}
          >
            <div className="w-1 h-2 rounded-full animate-bounce" style={{ backgroundColor: 'var(--nav-active)' }} />
          </div>
        </div>

      </div>
    </section>
  );
};

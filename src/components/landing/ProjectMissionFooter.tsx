import React from 'react';
import { PaperPlaneLogo } from './OrigamiIcons';
import { Sparkles, ArrowRight, ShieldCheck, Heart, Github, Globe } from 'lucide-react';

interface ProjectMissionFooterProps {
  onNavClick: (item: string) => void;
  onPlanTrip: () => void;
  onOpenAgentCenter: () => void;
}

export const ProjectMissionFooter: React.FC<ProjectMissionFooterProps> = ({
  onNavClick,
  onPlanTrip,
  onOpenAgentCenter,
}) => {
  return (
    <footer id="about-us" className="pt-16 pb-12 relative z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* 6. Final CTA: A large glass card with a gold border glow and ONE terracotta button */}
        <div className="gh-home-glass-cream p-8 sm:p-12 lg:p-14 rounded-[20px] border border-[#D4A24C]/60 shadow-[0_0_40px_rgba(212,162,76,0.22)] relative overflow-hidden">
          {/* Subtle gold radial background */}
          <div
            className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full blur-[90px]"
            style={{ background: 'radial-gradient(circle, rgba(212, 162, 76, 0.25) 0%, transparent 70%)' }}
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#D4A24C]/40 text-[#14213D] text-xs font-bold shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#D4A24C]" />
                <span>Begin Your Journey</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif-heading tracking-tight text-[#14213D] text-balance">
                Ready to Orchestrate Your Next Journey?
              </h2>

              <p className="text-sm sm:text-base text-[#6B6F80] leading-relaxed">
                Experience autonomous multi-agent synthesis, deterministic financial tracking, and verified travel logistics in one unified platform.
              </p>
            </div>

            {/* ONE Single Terracotta CTA Button */}
            <div className="shrink-0">
              <button
                onClick={onPlanTrip}
                className="gh-btn-terracotta px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-lg cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-white" />
                <span>Plan Your Journey</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* 7. Footer: Ink background (--ink, #14213D) with muted text (#6B6F80) and gold hover links (#D4A24C) */}
        <div className="bg-[#14213D] text-[#6B6F80] rounded-[20px] p-8 sm:p-12 space-y-12 shadow-2xl border border-[rgba(20,33,61,0.2)]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

            {/* Col 1: Brand & Bio */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#D4A24C]">
                  <PaperPlaneLogo className="w-6 h-6 text-[#D4A24C]" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-extrabold text-lg tracking-tight font-serif-heading">
                      Smart AI
                    </span>
                    <span className="text-[#D4A24C] font-sans text-xs font-bold px-1.5 py-0.5 rounded-md bg-[#D4A24C]/15 border border-[#D4A24C]/30 leading-none">
                      3.0
                    </span>
                  </div>
                  <span className="text-[#94A3B8] text-[10px] font-medium tracking-[0.16em] uppercase">
                    Autonomous Travel Platform
                  </span>
                </div>
              </div>

              <p className="text-xs text-[#94A3B8] leading-relaxed max-w-sm">
                Replacing ambiguous chat prompts with structured, mathematically verified travel itineraries. Built with deterministic financial invariants and empirical multi-agent research telemetry.
              </p>

              <div className="flex items-center gap-4 pt-1">
                <button
                  onClick={onOpenAgentCenter}
                  className="text-xs font-semibold text-[#D4A24C] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Open Agent Center Telemetry</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Col 2: Navigation Links with Gold Hover */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Platform Navigation</h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <button onClick={() => onNavClick('home')} className="hover:text-[#D4A24C] transition-colors cursor-pointer">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavClick('about')} className="hover:text-[#D4A24C] transition-colors cursor-pointer">
                    About the Project
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavClick('features')} className="hover:text-[#D4A24C] transition-colors cursor-pointer">
                    Key Features
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavClick('how-it-works')} className="hover:text-[#D4A24C] transition-colors cursor-pointer">
                    How It Works
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavClick('packages-section')} className="hover:text-[#D4A24C] transition-colors cursor-pointer">
                    Popular Destinations
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3: Research & Lab Links with Gold Hover */}
            <div className="md:col-span-4 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Research & Systems</h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <button onClick={() => onNavClick('agent-comparison')} className="hover:text-[#D4A24C] transition-colors cursor-pointer">
                    Single vs Multi-Agent Architecture
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavClick('research')} className="hover:text-[#D4A24C] transition-colors cursor-pointer">
                    Live Telemetry Benchmarking
                  </button>
                </li>
                <li>
                  <span className="text-[#94A3B8]">Deterministic Financial Ledgers (Frankfurter FX)</span>
                </li>
                <li>
                  <span className="text-[#94A3B8]">Multimodal OCR Document Parser (Zero Retention)</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar: Copyright & Subtle Gold Hover Links */}
          <div className="pt-6 border-t border-[rgba(255,255,255,0.08)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
            <p>© {new Date().getFullYear()} Smart AI Travel Planner 3.0. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#about" onClick={(e) => { e.preventDefault(); onNavClick('about'); }} className="hover:text-[#D4A24C] transition-colors">
                Privacy Architecture
              </a>
              <a href="#features" onClick={(e) => { e.preventDefault(); onNavClick('features'); }} className="hover:text-[#D4A24C] transition-colors">
                Terms & Verification
              </a>
              <a href="#research" onClick={(e) => { e.preventDefault(); onNavClick('research'); }} className="hover:text-[#D4A24C] transition-colors">
                Agent Benchmarks
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

import React from 'react';
import { Sparkles, Cpu, Layers, GitBranch, ArrowRight, ShieldCheck, Database, Check } from 'lucide-react';

interface ProjectAboutSectionProps {
  onPlanTrip: () => void;
  onExploreResearch: () => void;
}

export const ProjectAboutSection: React.FC<ProjectAboutSectionProps> = ({
  onPlanTrip,
  onExploreResearch,
}) => {
  return (
    <section id="about" className="py-20 sm:py-28 relative z-10 text-[#14213D] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 border border-[rgba(20,33,61,0.12)] text-[#D4A24C] text-xs font-bold shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#D4A24C]" />
            <span>Dual-Purpose Application Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif-heading tracking-tight text-[#14213D]">
            About the Project
          </h2>
          <p className="text-base sm:text-lg text-[#6B6F80] leading-relaxed">
            Smart AI Travel Planner is an intelligent travel-planning platform designed to organize trips according to users' destinations, dates, interests, and budgets. It also provides a benchmark environment for comparing single-agent and multi-agent AI architectures.
          </p>
        </div>

        {/* Editorial 2-Column Layout on Semi-Transparent Glass */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Mission & Practical Travel Assistant */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="gh-home-glass p-8 rounded-[20px] shadow-lg flex-1 space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold font-serif-heading text-[#14213D]">
                Structured Travel Synthesis & Agent Exploration
              </h3>
              <p className="text-sm text-[#6B6F80] leading-relaxed">
                Rather than outputting conversational approximations or inflexible text blocks, the application coordinates real operational logistics: deterministic financial invariants with contingency reserves, multi-modal transit legs, live microclimate advisories, and privacy-preserving document OCR.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-[14px] bg-[#F6EFE6] border border-[rgba(20,33,61,0.08)] text-[#E76F51] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#14213D]">Practical Travel Assistant</h4>
                    <p className="text-xs text-[#6B6F80] mt-0.5 leading-relaxed">
                      Generates complete day-by-day itineraries with morning, afternoon, and evening pacing, verified landmark coordinates, and real booking provider redirects.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-[14px] bg-[#F6EFE6] border border-[rgba(20,33,61,0.08)] text-[#D4A24C] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#14213D]">Architectural Research Lab</h4>
                    <p className="text-xs text-[#6B6F80] mt-0.5 leading-relaxed">
                      Measures wall-clock latency, token bandwidth, process memory, and plan coherence across unified single-agent models versus specialized multi-agent teams.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-[14px] bg-[#F6EFE6] border border-[rgba(20,33,61,0.08)] text-[#2A9D8F] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#14213D]">Privacy-First Processing</h4>
                    <p className="text-xs text-[#6B6F80] mt-0.5 leading-relaxed">
                      Boarding passes and identification cards are parsed in-memory with automatic sensitive data masking and zero persistent storage.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[rgba(20,33,61,0.08)] flex items-center gap-3">
                <button
                  onClick={onPlanTrip}
                  className="gh-btn-terracotta px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Start Planning</span>
                </button>
                <button
                  onClick={onExploreResearch}
                  className="bg-white/80 hover:bg-white text-[#14213D] border border-[rgba(20,33,61,0.14)] px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer transition shadow-2xs"
                >
                  <span>Explore Research</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#2A9D8F]" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Multi-Agent Workflow Pipeline Diagram */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="gh-home-glass p-8 rounded-[20px] shadow-lg flex-1 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[rgba(20,33,61,0.08)]">
                <div>
                  <h4 className="text-sm font-bold text-[#14213D]">Multi-Agent Orchestration Diagram</h4>
                  <p className="text-xs text-[#6B6F80]">Specialized autonomous sub-agents executing in concert</p>
                </div>
                <span className="text-[10px] font-bold text-[#2A9D8F] bg-[#2A9D8F]/10 px-2.5 py-1 rounded-full uppercase">
                  Active Topology
                </span>
              </div>

              {/* Diagram Flow */}
              <div className="space-y-3 text-xs">
                {/* Orchestrator */}
                <div className="p-3.5 rounded-[16px] bg-white border border-[#D4A24C]/40 shadow-xs flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#D4A24C]/15 flex items-center justify-center text-[#D4A24C] font-bold">
                      M
                    </div>
                    <div>
                      <span className="font-bold text-[#14213D]">Master Orchestrator Agent</span>
                      <p className="text-[11px] text-[#6B6F80]">Deconstructs journey brief into sub-domains & enforces invariants</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#D4A24C]">Lead</span>
                </div>

                {/* Sub-agents branches */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 pl-2">
                  <div className="p-3 rounded-[14px] bg-[#FBF6EE]/90 border border-[rgba(20,33,61,0.08)]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#2A9D8F] block">Agent 01</span>
                    <span className="font-bold text-[#14213D] text-xs">Itinerary Specialist</span>
                    <p className="text-[10px] text-[#6B6F80] mt-0.5">Time sequencing & landmark curation</p>
                  </div>
                  <div className="p-3 rounded-[14px] bg-[#FBF6EE]/90 border border-[rgba(20,33,61,0.08)]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#E76F51] block">Agent 02</span>
                    <span className="font-bold text-[#14213D] text-xs">Deterministic Budget</span>
                    <p className="text-[10px] text-[#6B6F80] mt-0.5">Strict arithmetic & bilateral cost splits</p>
                  </div>
                  <div className="p-3 rounded-[14px] bg-[#FBF6EE]/90 border border-[rgba(20,33,61,0.08)]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#2A9D8F] block">Agent 03</span>
                    <span className="font-bold text-[#14213D] text-xs">Mobility & Route</span>
                    <p className="text-[10px] text-[#6B6F80] mt-0.5">Multi-modal transit legs & geo-sorting</p>
                  </div>
                  <div className="p-3 rounded-[14px] bg-[#FBF6EE]/90 border border-[rgba(20,33,61,0.08)]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4A24C] block">Agent 04</span>
                    <span className="font-bold text-[#14213D] text-xs">Safety & Climate</span>
                    <p className="text-[10px] text-[#6B6F80] mt-0.5">UV, weather conditions & advisory checks</p>
                  </div>
                </div>

                {/* Verified Synthesis Output */}
                <div className="p-3.5 rounded-[16px] bg-[#2A9D8F]/10 border border-[#2A9D8F]/30 shadow-xs flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#2A9D8F] text-white flex items-center justify-center font-bold">
                      ✓
                    </div>
                    <div>
                      <span className="font-bold text-[#14213D]">Unified Cohesive Trip Plan</span>
                      <p className="text-[11px] text-[#6B6F80]">Interactive calendar, GPS map, budget ledger, offline export</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-[#1E7469] bg-white/80 px-2 py-0.5 rounded-md">
                    Verified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

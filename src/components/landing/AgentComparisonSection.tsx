import React from 'react';
import { Cpu, Network, ArrowRight, Check, Minus } from 'lucide-react';

interface AgentComparisonSectionProps {
  onOpenAgentCenter: () => void;
}

export const AgentComparisonSection: React.FC<AgentComparisonSectionProps> = ({
  onOpenAgentCenter,
}) => {
  const comparisonRows = [
    {
      dimension: 'Architecture & Orchestration',
      single: 'Monolithic single-process orchestrator',
      multi: 'Distributed multi-role pipeline (Lead Orchestrator + 5 Specialists)',
    },
    {
      dimension: 'Task Handling Strategy',
      single: 'Linear end-to-end synthesis within a single prompt context',
      multi: 'Modular domain separation (Itinerary, Budget, Route, Safety, Concierge)',
    },
    {
      dimension: 'Coordination Overhead',
      single: 'Minimal — zero inter-agent messaging latency',
      multi: 'Moderate — inter-agent structured handoffs & consensus',
    },
    {
      dimension: 'Parallel Execution',
      single: 'Sequential processing across travel domains',
      multi: 'Concurrent execution for independent domain sub-tasks',
    },
    {
      dimension: 'Resource & Token Profile',
      single: 'Lower peak memory and compact token usage',
      multi: 'Higher memory allocation with specialized prompt isolation',
    },
    {
      dimension: 'Latency Profile',
      single: 'Lower initial latency; varies with total response length',
      multi: 'Network-dependent; accelerated through parallelization',
    },
    {
      dimension: 'Itinerary Granularity',
      single: 'Cohesive unified tone; potential domain oversights',
      multi: 'Deep domain-specific detail with deterministic verification',
    },
  ];

  return (
    <section id="agent-comparison" className="py-20 sm:py-28 relative z-10 text-[#14213D] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 border border-[rgba(20,33,61,0.12)] text-[#D4A24C] text-xs font-bold shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#D4A24C]" />
            <span>Architecture Tradeoffs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif-heading tracking-tight text-[#14213D]">
            Single-Agent vs. Multi-Agent AI
          </h2>
          <p className="text-base sm:text-lg text-[#6B6F80] leading-relaxed">
            Compare unified linear synthesis against specialized multi-agent teams across latency, memory allocation, and domain depth.
          </p>
        </div>

        {/* Comparative Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Single-Agent Card */}
          <div className="gh-home-glass p-8 rounded-[20px] shadow-lg border border-[rgba(20,33,61,0.12)] space-y-4 relative">
            <div className="flex items-center justify-between pb-4 border-b border-[rgba(20,33,61,0.08)]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-[14px] bg-[#F6EFE6] flex items-center justify-center text-[#14213D]">
                  <Cpu className="w-5 h-5 text-[#D4A24C]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#14213D]">Single-Agent Pipeline</h3>
                  <span className="text-[11px] text-[#6B6F80]">Linear Unified Synthesis</span>
                </div>
              </div>
              <span className="text-[11px] font-bold text-[#6B6F80] bg-white px-2.5 py-1 rounded-full border border-[rgba(20,33,61,0.08)]">
                Lightweight
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#6B6F80] leading-relaxed">
              Processes the entire journey request within a single LLM invocation. Fast and resource-efficient for simple weekend getaways and broad overviews, but prone to context compression and subtle arithmetic rounding errors.
            </p>
            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-center gap-2 text-[#14213D]">
                <Check className="w-4 h-4 text-[#2A9D8F]" />
                <span>Fastest initial response latency</span>
              </div>
              <div className="flex items-center gap-2 text-[#14213D]">
                <Check className="w-4 h-4 text-[#2A9D8F]" />
                <span>Minimal token bandwidth consumption</span>
              </div>
              <div className="flex items-center gap-2 text-[#6B6F80]">
                <Minus className="w-4 h-4 text-[#E76F51]" />
                <span>Single failure point for complex constraints</span>
              </div>
            </div>
          </div>

          {/* Multi-Agent Card */}
          <div className="gh-home-glass p-8 rounded-[20px] shadow-lg border border-[#D4A24C]/40 space-y-4 relative">
            <div className="flex items-center justify-between pb-4 border-b border-[rgba(20,33,61,0.08)]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-[14px] bg-[#D4A24C]/15 flex items-center justify-center text-[#D4A24C]">
                  <Network className="w-5 h-5 text-[#D4A24C]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#14213D]">Multi-Agent Orchestration</h3>
                  <span className="text-[11px] text-[#2A9D8F] font-bold">Specialist Collaborative Swarm</span>
                </div>
              </div>
              <span className="text-[11px] font-bold text-[#1E7469] bg-[#2A9D8F]/15 px-2.5 py-1 rounded-full border border-[#2A9D8F]/25">
                Recommended
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#6B6F80] leading-relaxed">
              Dispatches dedicated sub-agents for scheduling, routing, budgeting, and safety. Sub-agents run concurrently where possible, with the Master Orchestrator validating financial invariants and timeline continuity.
            </p>
            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-center gap-2 text-[#14213D]">
                <Check className="w-4 h-4 text-[#2A9D8F]" />
                <span>Verified deterministic arithmetic checking</span>
              </div>
              <div className="flex items-center gap-2 text-[#14213D]">
                <Check className="w-4 h-4 text-[#2A9D8F]" />
                <span>Deep domain-specific itinerary customization</span>
              </div>
              <div className="flex items-center gap-2 text-[#14213D]">
                <Check className="w-4 h-4 text-[#2A9D8F]" />
                <span>Modular fault isolation across sub-domains</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Side-by-Side Comparison Table on Glass */}
        <div className="gh-home-glass rounded-[20px] overflow-hidden shadow-lg border border-[rgba(20,33,61,0.12)]">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[rgba(20,33,61,0.1)] bg-[#F6EFE6]/70">
                  <th className="py-4 px-6 font-bold text-[#14213D] w-1/4">Evaluation Dimension</th>
                  <th className="py-4 px-6 font-bold text-[#14213D] w-3/8">Single-Agent Baseline</th>
                  <th className="py-4 px-6 font-bold text-[#D4A24C] w-3/8">Multi-Agent System</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[rgba(20,33,61,0.06)]">
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="hover:bg-white/50 transition-colors">
                    <td className="py-4 px-6 font-bold text-[#14213D]">{row.dimension}</td>
                    <td className="py-4 px-6 text-[#6B6F80] leading-relaxed">{row.single}</td>
                    <td className="py-4 px-6 text-[#14213D] font-medium leading-relaxed bg-[#D4A24C]/5">
                      {row.multi}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Action Button to Agent Center */}
        <div className="flex justify-center items-center">
          <button
            onClick={onOpenAgentCenter}
            className="gh-btn-terracotta px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md"
          >
            <span>Inspect Live Agent Telemetry</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

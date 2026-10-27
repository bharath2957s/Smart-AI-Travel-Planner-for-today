import React from 'react';
import {
  Activity,
  Cpu,
  Clock,
  HardDrive,
  Wifi,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';

interface ResearchBenchmarkingSectionProps {
  onOpenAgentCenter: () => void;
}

export const ResearchBenchmarkingSection: React.FC<ResearchBenchmarkingSectionProps> = ({
  onOpenAgentCenter,
}) => {
  const telemetryMetrics = [
    {
      label: 'Execution Time',
      icon: Clock,
      unit: 'Milliseconds / Seconds',
      description: 'End-to-end wall-clock duration from user submission to complete itinerary synthesis across single-agent and multi-agent runs.',
      tag: 'Latency Tracking',
    },
    {
      label: 'CPU Utilization',
      icon: Cpu,
      unit: 'Process % & User/Sys Time',
      description: 'Node.js event-loop CPU consumption measured across compute-intensive route optimization, coordinate distance sorting, and arithmetic verification.',
      tag: 'Compute Load',
    },
    {
      label: 'Peak Memory Usage',
      icon: HardDrive,
      unit: 'RSS & Heap Allocation (MB)',
      description: 'Continuous memory profiling capturing baseline, peak heap, and post-completion RAM allocation across concurrent agent threads.',
      tag: 'Memory Profiling',
    },
    {
      label: 'Network Latency',
      icon: Wifi,
      unit: 'Round-Trip Probe (ms)',
      description: 'Application-level HTTP latency measurements across internal endpoints, external geocoding, exchange rates, and multimodal LLM APIs.',
      tag: 'Endpoint Health',
    },
    {
      label: 'Budget Feasibility',
      icon: ShieldCheck,
      unit: 'Feasible / Invariant Score',
      description: 'Deterministic audit confirming that itemized expenses sum exactly to committed outlay and comply with user-defined total expenditure caps.',
      tag: 'Arithmetic Audit',
    },
    {
      label: 'Itinerary Quality & Cohesion',
      icon: Activity,
      unit: 'Pacing & Density Index',
      description: 'Heuristic evaluation scoring logical travel sequences, transit realism between consecutive landmarks, and geographic proximity.',
      tag: 'Plan Fidelity',
    },
  ];

  return (
    <section id="research" className="py-20 sm:py-28 relative z-10 text-[#14213D] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 border border-[rgba(20,33,61,0.12)] text-[#2A9D8F] text-xs font-bold shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#2A9D8F]" />
            <span>Empirical AI Research</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif-heading tracking-tight text-[#14213D]">
            Research & Benchmarking
          </h2>
          <p className="text-base sm:text-lg text-[#6B6F80] leading-relaxed">
            The Agent Center monitors real telemetry parameters in real time — tracking latency, memory, token consumption, and constraint satisfaction.
          </p>
        </div>

        {/* 6 Telemetry Parameter Cards on Glass */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {telemetryMetrics.map((met, i) => {
            const Icon = met.icon;
            return (
              <div
                key={i}
                className="gh-home-glass p-7 rounded-[20px] shadow-lg border border-[rgba(20,33,61,0.12)] hover:border-[#D4A24C] transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-[14px] bg-[#F6EFE6] border border-[rgba(20,33,61,0.08)] flex items-center justify-center text-[#D4A24C] group-hover:scale-105 group-hover:bg-[#D4A24C] group-hover:text-white transition-all shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#2A9D8F] bg-[#2A9D8F]/10 px-2.5 py-0.5 rounded-full">
                      {met.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-serif-heading text-[#14213D] group-hover:text-[#E76F51] transition-colors">
                      {met.label}
                    </h3>
                    <span className="text-[11px] font-mono font-medium text-[#6B6F80] block mt-0.5">
                      {met.unit}
                    </span>
                  </div>

                  <p className="text-xs text-[#6B6F80] leading-relaxed">
                    {met.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[rgba(20,33,61,0.08)] mt-4 flex items-center justify-between text-[11px] font-bold text-[#14213D]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2A9D8F]" />
                    <span>Real-time Instrument</span>
                  </span>
                  <span className="text-[#D4A24C] font-mono">Telemetry</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="flex justify-center items-center">
          <button
            onClick={onOpenAgentCenter}
            className="gh-btn-terracotta px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md"
          >
            <Activity className="w-4 h-4 text-white" />
            <span>Launch Live Agent Center</span>
            <ExternalLink className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

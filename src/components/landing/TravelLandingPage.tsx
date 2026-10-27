/**
 * Smart AI Travel Planner 3.0
 * Master Homepage with Golden Hour Palette
 *
 * PRESERVED STRICTLY (READ-ONLY):
 * - Scroll-driven paper airplane canvas animation (/frames/*.webp)
 * - 3D Earth orbit animation (/frames_earth/*.webp)
 * - Mode toggle between Airplane flight and Earth orbit
 * - Canvas z-index stacking and animation engine
 *
 * UPGRADED:
 * - Scoped Golden Hour palette: --cream, --card, --soft, --ink, --muted, --gold, --terracotta, --teal
 * - First-look Hero with 70ms staggered headline, drawing gold underline, gold-to-terracotta shimmer
 * - Desktop parallax tilt photo collage with floating badges & gentle bobbing scroll hint
 * - 3-Stat glass strip with count-up numbers when visible
 * - 3-Step How It Works cards with gold icons & connected self-drawing line
 * - Popular destinations with teal chips, gold ratings, interactive heart buttons, 4px lift & 1.05 zoom
 * - Alternating left/right feature highlights with visual sliding from sides
 * - Marquee slow horizontal drift testimonials (pauses on hover)
 * - Gold-bordered glow final CTA glass card with single terracotta button
 * - Ink footer with muted text and gold hover links
 * - Top gold scroll-progress bar & cream blurred navbar after 40px scroll
 */

import React, { useState } from 'react';
import { AirplaneCanvas } from './AirplaneCanvas';
import { LandingNavbar } from './LandingNavbar';
import { LandingHero } from './LandingHero';
import { StatsAndTestimonial } from './StatsAndTestimonial';
import { ProjectAboutSection } from './ProjectAboutSection';
import { KeyFeaturesSection } from './KeyFeaturesSection';
import { HowItWorksSection } from './HowItWorksSection';
import { PopularPackages } from './PopularPackages';
import { AgentComparisonSection } from './AgentComparisonSection';
import { ResearchBenchmarkingSection } from './ResearchBenchmarkingSection';
import { ProjectMissionFooter } from './ProjectMissionFooter';
import { LandingBookingModal } from './LandingBookingModal';
import { LandingSignInModal } from './LandingSignInModal';
import { TravelPackage, LandingSearchState } from '../../types/landingTypes';

export interface PlannerInitialData {
  destination?: string;
  origin?: string;
  startDate?: string;
  endDate?: string;
  travelers?: number;
}

interface TravelLandingPageProps {
  /** Called when user clicks "Plan Trip" or searches from the landing hero */
  onStartPlanning: (initialData?: PlannerInitialData) => void;
  /** Direct page navigation into dashboard / research / tools */
  onNavigate?: (page: string) => void;
}

export const TravelLandingPage: React.FC<TravelLandingPageProps> = ({
  onStartPlanning,
  onNavigate,
}) => {
  const [bgMode, setBgMode] = useState<'airplane' | 'earth'>('airplane');
  const [activeNav, setActiveNav] = useState('home');
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<TravelPackage | null>(null);
  const [signedInUser, setSignedInUser] = useState<string | null>(null);

  const handleNavClick = (navId: string) => {
    setActiveNav(navId);

    if (navId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(navId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (navId === 'packages' || navId === 'destinations') {
      document.getElementById('packages-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePlanTrip = () => {
    onStartPlanning();
  };

  const handleExploreResearch = () => {
    if (onNavigate) {
      onNavigate('agents');
    } else {
      document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDiscoverProject = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFeatureNavigate = (page: string) => {
    if (page === 'planner') {
      onStartPlanning();
    } else if (onNavigate) {
      onNavigate(page);
    }
  };

  const handleSearch = (criteria: LandingSearchState) => {
    onStartPlanning({
      origin: criteria.from,
      destination: criteria.to,
      startDate: criteria.departDate,
      endDate: criteria.returnDate,
      travelers: criteria.travelers,
    });
  };

  return (
    <div
      data-scene={bgMode === 'earth' ? 'orbit' : 'flight'}
      className="home-golden-hour min-h-screen antialiased selection:bg-[#E76F51]/20 selection:text-[#14213D] flex flex-col font-sans relative scene-transition"
      style={{ background: 'transparent' }}
    >
      {/* 1. CRITICAL: Preserve the existing scroll-driven canvas background (READ-ONLY) */}
      <AirplaneCanvas mode={bgMode} />

      {/* Main Page Content Overlay — positioned over the fixed canvas */}
      <main className="flex-1 relative z-10">
        {/* Navigation Bar */}
        <LandingNavbar
          activeNav={activeNav}
          onNavClick={handleNavClick}
          onSignInClick={() => setIsSignInOpen(true)}
          onPlanTrip={handlePlanTrip}
          theme={bgMode}
          onThemeChange={(m) => setBgMode(m)}
        />

        {/* Hero Section */}
        <LandingHero
          onPlanTrip={handlePlanTrip}
          onExploreResearch={handleExploreResearch}
          onDiscoverProject={handleDiscoverProject}
          onSearch={handleSearch}
        />

        {/* Stats Strip & Testimonials Marquee */}
        <StatsAndTestimonial />

        {/* How It Works Section: 3 Step Cards with Gold Icons & Connected Line */}
        <HowItWorksSection
          onPlanTrip={handlePlanTrip}
          onExploreResearch={handleExploreResearch}
        />

        {/* Popular Destinations: Photo Cards with Teal Chip, Gold Rating, Heart Save Button */}
        <PopularPackages
          onSelectPackage={(pkg) => setSelectedPackage(pkg)}
          onViewAll={() => document.getElementById('packages-section')?.scrollIntoView({ behavior: 'smooth' })}
        />

        {/* Key Features: Alternating Left/Right Top Features & Capability Grid */}
        <KeyFeaturesSection
          onNavigateTo={handleFeatureNavigate}
        />

        {/* About the Project Section */}
        <ProjectAboutSection
          onPlanTrip={handlePlanTrip}
          onExploreResearch={handleExploreResearch}
        />

        {/* Single-Agent vs Multi-Agent Comparison Section */}
        <AgentComparisonSection
          onOpenAgentCenter={handleExploreResearch}
        />

        {/* Research & Benchmarking Section */}
        <ResearchBenchmarkingSection
          onOpenAgentCenter={handleExploreResearch}
        />

        {/* Final CTA & Footer */}
        <ProjectMissionFooter
          onNavClick={handleNavClick}
          onPlanTrip={handlePlanTrip}
          onOpenAgentCenter={handleExploreResearch}
        />
      </main>

      {/* Booking Modal */}
      <LandingBookingModal
        packageItem={selectedPackage}
        pricingPlan={null}
        onClose={() => setSelectedPackage(null)}
        onStartPlanning={(destination) => {
          setSelectedPackage(null);
          onStartPlanning({ destination });
        }}
      />

      {/* Sign In Modal */}
      <LandingSignInModal
        isOpen={isSignInOpen}
        onClose={() => setIsSignInOpen(false)}
        onSuccess={(email) => setSignedInUser(email)}
      />

      {/* Signed In Notification Toast */}
      {signedInUser && (
        <div className="fixed bottom-5 right-5 z-50 bg-white/95 backdrop-blur-xl text-[#14213D] px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-[rgba(20,33,61,0.12)]">
          <div className="w-2.5 h-2.5 rounded-full bg-[#2A9D8F] animate-pulse" />
          <span className="text-xs font-semibold">Logged in as {signedInUser}</span>
          <button
            onClick={() => setSignedInUser(null)}
            className="text-[#6B6F80] hover:text-[#14213D] text-xs ml-2 cursor-pointer font-bold"
          >
            Dismiss
          </button>
        </div>
      )}
    </div>
  );
};

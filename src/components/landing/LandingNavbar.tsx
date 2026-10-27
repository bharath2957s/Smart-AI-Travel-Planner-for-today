import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, LogOut } from 'lucide-react';
import { PaperPlaneLogo } from './OrigamiIcons';
import { useAuth } from '../../lib/AuthContext';

interface LandingNavbarProps {
  onSignInClick: () => void;
  activeNav?: string;
  onNavClick: (item: string) => void;
  onPlanTrip?: () => void;
  theme?: 'airplane' | 'earth';
  onThemeChange?: (theme: 'airplane' | 'earth') => void;
}

export const LandingNavbar: React.FC<LandingNavbarProps> = ({
  onSignInClick,
  activeNav = 'home',
  onNavClick,
  onPlanTrip,
  theme = 'airplane',
  onThemeChange,
}) => {
  const { user, isAuthenticated, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      setIsScrolled(scrollY > 40);

      const maxScroll = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      ) - window.innerHeight;
      if (maxScroll > 0) {
        setScrollProgress(Math.min(Math.max(scrollY / maxScroll, 0), 1));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Features', id: 'features' },
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'Destinations', id: 'packages-section' },
    { label: 'Agent Comparison', id: 'agent-comparison' },
    { label: 'Research', id: 'research' },
  ];

  return (
    <>
      {/* 1. Thin Gold Scroll-Progress Bar at the very top of the page */}
      <div
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#D4A24C] z-50 origin-left pointer-events-none transition-transform duration-75"
        style={{ transform: `scaleX(${scrollProgress})` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress * 100)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* 2. Top Navigation Bar: Transparent at top, blurred bar after 40px scroll */}
      <header
        className="sticky top-0 z-40 w-full scene-transition"
        style={
          isScrolled
            ? {
                backgroundColor: 'var(--nav-scrolled-bg)',
                backdropFilter: 'var(--nav-scrolled-backdrop)',
                WebkitBackdropFilter: 'var(--nav-scrolled-backdrop)',
                borderBottomWidth: 1,
                borderBottomStyle: 'solid',
                borderBottomColor: 'var(--nav-scrolled-border)',
                boxShadow: 'var(--nav-scrolled-shadow)',
              }
            : {
                backgroundColor: 'transparent',
                borderBottomWidth: 1,
                borderBottomStyle: 'solid',
                borderBottomColor: 'transparent',
              }
        }
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Brand Logo: Slight shrink on scroll */}
          <div
            onClick={() => onNavClick('home')}
            className={`flex items-center gap-3 cursor-pointer group shrink-0 transition-transform duration-300 ${
              isScrolled ? 'scale-95' : 'scale-100'
            }`}
          >
            <div
              className="w-10 h-10 rounded-xl shadow-xs flex items-center justify-center transform -rotate-6 transition-transform duration-300 group-hover:rotate-0 group-hover:scale-105 scene-transition"
              style={{
                backgroundColor: 'var(--glass-bg)',
                borderColor: 'var(--glass-border)',
                borderWidth: 1,
                borderStyle: 'solid',
              }}
            >
              <PaperPlaneLogo className="w-6 h-6 text-[#D4A24C] drop-shadow-xs" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span
                  className="font-extrabold text-lg sm:text-xl tracking-tight leading-none font-serif-heading scene-transition"
                  style={{ color: 'var(--brand-title)' }}
                >
                  Smart AI
                </span>
                <span
                  className="font-sans text-xs font-bold px-1.5 py-0.5 rounded-md leading-none scene-transition"
                  style={{
                    backgroundColor: 'var(--brand-badge-bg)',
                    borderColor: 'var(--brand-badge-border)',
                    borderWidth: 1,
                    borderStyle: 'solid',
                    color: 'var(--brand-badge-text)',
                  }}
                >
                  3.0
                </span>
              </div>
              <span
                className="text-[10px] font-medium tracking-[0.16em] uppercase leading-tight mt-1 scene-transition"
                style={{ color: 'var(--brand-sub)' }}
              >
                Autonomous Travel Planner
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-6 2xl:gap-8">
            {navItems.map((item) => {
              const isActive = activeNav === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavClick(item.id)}
                  className={`text-xs tracking-wide cursor-pointer py-1.5 relative whitespace-nowrap shrink-0 nav-link-btn scene-transition ${
                    isActive ? 'is-active' : 'font-medium'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive ? (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full scene-transition"
                      style={{ backgroundColor: 'var(--nav-active)' }}
                    />
                  ) : (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-transparent hover:bg-[#D4A24C]/40 rounded-full transition-colors" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Side Controls: Theme Switcher + Plan CTA + Auth */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {/* Background Animation Switcher (Paper Airplane / 3D Earth) */}
            {onThemeChange && (
              <div
                className="backdrop-blur-md p-1 rounded-xl flex items-center gap-1 text-xs shadow-2xs scene-transition"
                style={{
                  backgroundColor: 'var(--nav-toggle-bg)',
                  borderColor: 'var(--nav-toggle-border)',
                  borderWidth: 1,
                  borderStyle: 'solid',
                }}
              >
                <button
                  id="theme-btn-airplane"
                  aria-label="Switch to Paper Airplane background animation"
                  onClick={() => onThemeChange('airplane')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer scene-transition ${
                    theme === 'airplane'
                      ? 'shadow-xs font-bold'
                      : 'hover:opacity-90'
                  }`}
                  style={
                    theme === 'airplane'
                      ? {
                          backgroundColor: 'var(--nav-toggle-btn-active-bg)',
                          color: 'var(--nav-toggle-btn-active-text)',
                        }
                      : {
                          backgroundColor: 'transparent',
                          color: 'var(--nav-toggle-btn-inactive)',
                        }
                  }
                  title="Scroll-driven Paper Airplane flight"
                >
                  <span>✈️</span>
                  <span>Flight</span>
                </button>
                <button
                  id="theme-btn-earth"
                  aria-label="Switch to 3D Earth orbit animation"
                  onClick={() => onThemeChange('earth')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer scene-transition ${
                    theme === 'earth'
                      ? 'shadow-xs font-bold'
                      : 'hover:opacity-90'
                  }`}
                  style={
                    theme === 'earth'
                      ? {
                          backgroundColor: 'var(--nav-toggle-btn-active-bg)',
                          color: 'var(--nav-toggle-btn-active-text)',
                        }
                      : {
                          backgroundColor: 'transparent',
                          color: 'var(--nav-toggle-btn-inactive)',
                        }
                  }
                  title="3D Earth Orbit sequence"
                >
                  <span>🌍</span>
                  <span>Orbit</span>
                </button>
              </div>
            )}

            {/* Single Strong Terracotta CTA Button */}
            {onPlanTrip && (
              <button
                onClick={onPlanTrip}
                className="gh-btn-terracotta px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
              >
                <Sparkles className="w-3.5 h-3.5 text-white" />
                <span>Plan Trip</span>
              </button>
            )}

            {/* Auth Controls */}
            {isAuthenticated && user ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="active:scale-95 px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-2 cursor-pointer shadow-xs backdrop-blur-md scene-transition"
                  style={{
                    backgroundColor: 'var(--glass-bg)',
                    borderColor: 'var(--glass-border)',
                    borderWidth: 1,
                    borderStyle: 'solid',
                    color: 'var(--glass-text)',
                  }}
                >
                  <div
                    className="w-6 h-6 rounded-lg text-white flex items-center justify-center text-xs font-bold"
                    style={{ backgroundColor: 'var(--nav-active)' }}
                  >
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="max-w-[100px] truncate">{user.name.split(' ')[0]}</span>
                </button>

                {userDropdownOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setUserDropdownOpen(false)}
                    />
                    <div className="absolute right-0 top-full mt-2 w-56 bg-white/95 rounded-2xl shadow-xl border border-[rgba(20,33,61,0.12)] p-2 z-50 text-[#14213D] backdrop-blur-xl">
                      <div className="p-3 border-b border-[rgba(20,33,61,0.08)]">
                        <p className="text-xs font-bold text-[#14213D] truncate">{user.name}</p>
                        <p className="text-[10px] text-[#6B6F80] truncate mt-0.5">{user.email}</p>
                        <div className="mt-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#2A9D8F]/12 border border-[#2A9D8F]/25 text-[10px] font-bold text-[#1E7469] uppercase tracking-wider">
                          {user.tier} explorer
                        </div>
                      </div>
                      <div className="pt-1">
                        <button
                          onClick={() => {
                            setUserDropdownOpen(false);
                            logout();
                          }}
                          className="w-full px-3 py-2 text-xs text-rose-600 hover:bg-rose-50 rounded-xl flex items-center gap-2 transition cursor-pointer"
                        >
                          <LogOut className="w-3.5 h-3.5" />
                          <span>Sign Out</span>
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <button
                onClick={onSignInClick}
                className="active:scale-95 px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-2xs whitespace-nowrap backdrop-blur-md scene-transition"
                style={{
                  backgroundColor: 'var(--glass-bg)',
                  borderColor: 'var(--glass-border)',
                  borderWidth: 1,
                  borderStyle: 'solid',
                  color: 'var(--glass-text)',
                }}
              >
                <span>Sign In</span>
              </button>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            {onPlanTrip && (
              <button
                onClick={onPlanTrip}
                className="gh-btn-terracotta px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider whitespace-nowrap"
              >
                Plan
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl cursor-pointer scene-transition"
              style={{
                backgroundColor: 'var(--glass-bg)',
                borderColor: 'var(--glass-border)',
                borderWidth: 1,
                borderStyle: 'solid',
                color: 'var(--glass-text)',
              }}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown Drawer */}
        {mobileMenuOpen && (
          <div
            className="lg:hidden backdrop-blur-2xl px-6 py-6 space-y-4 shadow-xl scene-transition"
            style={{
              backgroundColor: 'var(--nav-mobile-bg)',
              borderBottomWidth: 1,
              borderBottomStyle: 'solid',
              borderBottomColor: 'var(--glass-border)',
            }}
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const isActive = activeNav === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onNavClick(item.id);
                    }}
                    className={`text-left py-2 px-3 rounded-lg text-sm transition cursor-pointer scene-transition ${
                      isActive ? 'font-bold shadow-2xs' : 'font-medium'
                    }`}
                    style={
                      isActive
                        ? {
                            backgroundColor: 'var(--glass-bg)',
                            borderColor: 'var(--glass-border)',
                            borderWidth: 1,
                            borderStyle: 'solid',
                            color: 'var(--nav-link-active)',
                          }
                        : {
                            color: 'var(--nav-link)',
                          }
                    }
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* Mode Switcher on Mobile */}
            {onThemeChange && (
              <div
                className="pt-2 flex items-center justify-between scene-transition"
                style={{
                  borderTopWidth: 1,
                  borderTopStyle: 'solid',
                  borderTopColor: 'var(--glass-border)',
                }}
              >
                <span className="text-xs font-medium scene-transition" style={{ color: 'var(--nav-link)' }}>
                  Background Animation
                </span>
                <div
                  className="flex gap-1 p-1 rounded-xl backdrop-blur-md scene-transition"
                  style={{
                    backgroundColor: 'var(--nav-toggle-bg)',
                    borderColor: 'var(--nav-toggle-border)',
                    borderWidth: 1,
                    borderStyle: 'solid',
                  }}
                >
                  <button
                    onClick={() => onThemeChange('airplane')}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold cursor-pointer scene-transition ${
                      theme === 'airplane' ? 'font-bold shadow-xs' : 'hover:opacity-90'
                    }`}
                    style={
                      theme === 'airplane'
                        ? {
                            backgroundColor: 'var(--nav-toggle-btn-active-bg)',
                            color: 'var(--nav-toggle-btn-active-text)',
                          }
                        : {
                            backgroundColor: 'transparent',
                            color: 'var(--nav-toggle-btn-inactive)',
                          }
                    }
                  >
                    ✈️ Flight
                  </button>
                  <button
                    onClick={() => onThemeChange('earth')}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold cursor-pointer scene-transition ${
                      theme === 'earth' ? 'font-bold shadow-xs' : 'hover:opacity-90'
                    }`}
                    style={
                      theme === 'earth'
                        ? {
                            backgroundColor: 'var(--nav-toggle-btn-active-bg)',
                            color: 'var(--nav-toggle-btn-active-text)',
                          }
                        : {
                            backgroundColor: 'transparent',
                            color: 'var(--nav-toggle-btn-inactive)',
                          }
                    }
                  >
                    🌍 Orbit
                  </button>
                </div>
              </div>
            )}

            {/* Sign In / User Status on Mobile */}
            <div
              className="pt-2 scene-transition"
              style={{
                borderTopWidth: 1,
                borderTopStyle: 'solid',
                borderTopColor: 'var(--glass-border)',
              }}
            >
              {isAuthenticated && user ? (
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium scene-transition" style={{ color: 'var(--glass-text)' }}>
                    Signed in as {user.name}
                  </span>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      logout();
                    }}
                    className="text-xs text-rose-500 font-semibold cursor-pointer"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onSignInClick();
                  }}
                  className="w-full py-2.5 rounded-xl text-xs font-semibold shadow-2xs cursor-pointer backdrop-blur-md scene-transition"
                  style={{
                    backgroundColor: 'var(--glass-bg)',
                    borderColor: 'var(--glass-border)',
                    borderWidth: 1,
                    borderStyle: 'solid',
                    color: 'var(--glass-text)',
                  }}
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        )}
      </header>
    </>
  );
};

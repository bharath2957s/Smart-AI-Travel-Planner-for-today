import React, { useState, useRef, useEffect } from 'react';
import { Plane, Building2, Car, Compass, Calendar, ArrowLeftRight, ChevronDown, Check } from 'lucide-react';
import { LandingSearchState } from '../../types/landingTypes';

interface LandingSearchWidgetProps {
  onSearch: (criteria: LandingSearchState) => void;
}

export const LandingSearchWidget: React.FC<LandingSearchWidgetProps> = ({ onSearch }) => {
  const [activeTab, setActiveTab] = useState<'Flights' | 'Hotels' | 'Cars' | 'Experiences'>('Flights');
  const [fromLocation, setFromLocation] = useState('New York, USA');
  const [toLocation, setToLocation] = useState('Paris, France');

  const defaultDepart = new Date(Date.now() + 7 * 86400000).toISOString().split('T')[0];
  const defaultReturn = new Date(Date.now() + 14 * 86400000).toISOString().split('T')[0];
  const [departDate, setDepartDate] = useState(defaultDepart);
  const [returnDate, setReturnDate] = useState(defaultReturn);
  const [adultsCount, setAdultsCount] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);

  const [showTravelersDropdown, setShowTravelersDropdown] = useState(false);
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);

  const fromRef = useRef<HTMLDivElement>(null);
  const toRef = useRef<HTMLDivElement>(null);
  const travelersRef = useRef<HTMLDivElement>(null);

  const popularAirports = [
    'Amalfi Coast, Italy',
    'Kyoto, Japan',
    'Swiss Alps, Switzerland',
    'Santorini, Greece',
    'Maldives',
    'Paris, France',
    'Tokyo, Japan',
    'New York, USA',
    'London, UK',
    'Rome, Italy',
    'Dubai, UAE',
    'Goa, India',
    'Shivamogga, India',
    'Vancouver, Canada',
  ];

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (fromRef.current && !fromRef.current.contains(e.target as Node)) {
        setShowFromDropdown(false);
      }
      if (toRef.current && !toRef.current.contains(e.target as Node)) {
        setShowToDropdown(false);
      }
      if (travelersRef.current && !travelersRef.current.contains(e.target as Node)) {
        setShowTravelersDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSwap = () => {
    const temp = fromLocation;
    setFromLocation(toLocation);
    setToLocation(temp);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      category: activeTab,
      from: fromLocation,
      to: toLocation,
      departDate: departDate,
      returnDate: returnDate,
      travelers: adultsCount + childrenCount,
      travelerType: `${adultsCount} Adults${childrenCount > 0 ? `, ${childrenCount} Kids` : ''}`,
    });
  };

  const tabs = [
    { name: 'Flights' as const, icon: Plane },
    { name: 'Hotels' as const, icon: Building2 },
    { name: 'Cars' as const, icon: Car },
    { name: 'Experiences' as const, icon: Compass },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 relative z-20">
      {/* Category Tabs */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.name;
          return (
            <button
              key={tab.name}
              type="button"
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center gap-2 px-5 sm:px-7 py-3 text-xs sm:text-sm font-semibold rounded-t-[18px] transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-white/90 text-[#14213D] shadow-[0_-4px_16px_rgba(20,33,61,0.06)] border-t border-l border-r border-[rgba(20,33,61,0.12)] z-10 backdrop-blur-md'
                  : 'bg-white/60 hover:bg-white/80 text-[#6B6F80] hover:text-[#14213D] backdrop-blur-md border-t border-l border-r border-transparent'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-[#E76F51]' : 'text-[#6B6F80]'}`} />
              <span>{tab.name}</span>
            </button>
          );
        })}
      </div>

      {/* Main Form Bar: Frosted glass, 20px radius, --shadow-lg */}
      <div className="bg-white/85 backdrop-blur-xl rounded-[20px] rounded-tl-none p-4 sm:p-6 shadow-[0_24px_60px_rgba(20,33,61,0.16)] border border-[rgba(20,33,61,0.12)] relative">
        <form onSubmit={handleSearchSubmit} className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3 lg:gap-4">

          {/* FROM */}
          <div className="flex-1 min-w-[140px] relative" ref={fromRef}>
            <div className="p-2.5 rounded-[14px] border border-[rgba(20,33,61,0.12)] bg-[#FBF6EE]/70 hover:bg-white hover:border-[#D4A24C] transition duration-200 gh-focus-ring">
              <div className="flex items-center justify-between">
                <label className="block text-[11px] font-bold text-[#6B6F80] uppercase tracking-wider mb-0.5">From</label>
                <button
                  type="button"
                  onClick={() => { setShowFromDropdown(!showFromDropdown); setShowToDropdown(false); setShowTravelersDropdown(false); }}
                  className="text-[10px] text-[#2A9D8F] hover:text-[#1E7469] font-bold cursor-pointer"
                >
                  {showFromDropdown ? 'Close' : 'Choose'}
                </button>
              </div>
              <input
                type="text"
                value={fromLocation}
                onChange={(e) => setFromLocation(e.target.value)}
                onFocus={() => { setShowFromDropdown(true); setShowToDropdown(false); setShowTravelersDropdown(false); }}
                className="w-full text-[#14213D] font-bold text-sm sm:text-base truncate bg-transparent focus:outline-none"
                placeholder="Departure city"
              />
            </div>
            {showFromDropdown && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 rounded-[16px] shadow-xl border border-[rgba(20,33,61,0.12)] py-2 z-40 max-h-60 overflow-y-auto backdrop-blur-xl">
                <div className="px-3 py-1.5 text-xs font-bold text-[#6B6F80] uppercase">Popular Hubs</div>
                {popularAirports.map((airport) => (
                  <button key={airport} type="button" onClick={() => { setFromLocation(airport); setShowFromDropdown(false); }}
                    className="w-full text-left px-4 py-2 text-sm text-[#14213D] hover:bg-[#F6EFE6] hover:text-[#E76F51] flex items-center justify-between cursor-pointer transition-colors">
                    <span>{airport}</span>
                    {fromLocation === airport && <Check className="w-4 h-4 text-[#E76F51]" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* SWAP */}
          <div className="hidden lg:flex justify-center items-center shrink-0">
            <button type="button" onClick={handleSwap}
              className="w-8 h-8 rounded-full bg-white hover:bg-[#FBF6EE] text-[#6B6F80] hover:text-[#E76F51] border border-[rgba(20,33,61,0.12)] flex items-center justify-center transition-transform hover:rotate-180 active:scale-90 cursor-pointer shadow-2xs"
              title="Swap Departure and Destination locations">
              <ArrowLeftRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* TO */}
          <div className="flex-1 min-w-[140px] relative" ref={toRef}>
            <div className="p-2.5 rounded-[14px] border border-[rgba(20,33,61,0.12)] bg-[#FBF6EE]/70 hover:bg-white hover:border-[#D4A24C] transition duration-200 gh-focus-ring">
              <div className="flex items-center justify-between">
                <label className="block text-[11px] font-bold text-[#6B6F80] uppercase tracking-wider mb-0.5">To</label>
                <button
                  type="button"
                  onClick={() => { setShowToDropdown(!showToDropdown); setShowFromDropdown(false); setShowTravelersDropdown(false); }}
                  className="text-[10px] text-[#2A9D8F] hover:text-[#1E7469] font-bold cursor-pointer"
                >
                  {showToDropdown ? 'Close' : 'Choose'}
                </button>
              </div>
              <input
                type="text"
                value={toLocation}
                onChange={(e) => setToLocation(e.target.value)}
                onFocus={() => { setShowToDropdown(true); setShowFromDropdown(false); setShowTravelersDropdown(false); }}
                className="w-full text-[#14213D] font-bold text-sm sm:text-base truncate bg-transparent focus:outline-none"
                placeholder="Destination city"
              />
            </div>
            {showToDropdown && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 rounded-[16px] shadow-xl border border-[rgba(20,33,61,0.12)] py-2 z-40 max-h-60 overflow-y-auto backdrop-blur-xl">
                <div className="px-3 py-1.5 text-xs font-bold text-[#6B6F80] uppercase">Popular Destinations</div>
                {popularAirports.map((airport) => (
                  <button key={airport} type="button" onClick={() => { setToLocation(airport); setShowToDropdown(false); }}
                    className="w-full text-left px-4 py-2 text-sm text-[#14213D] hover:bg-[#F6EFE6] hover:text-[#E76F51] flex items-center justify-between cursor-pointer transition-colors">
                    <span>{airport}</span>
                    {toLocation === airport && <Check className="w-4 h-4 text-[#E76F51]" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* DEPART */}
          <div className="w-full lg:w-[130px] shrink-0">
            <div className="p-2.5 rounded-[14px] border border-[rgba(20,33,61,0.12)] bg-[#FBF6EE]/70 hover:bg-white hover:border-[#D4A24C] transition duration-200 gh-focus-ring">
              <label className="block text-[11px] font-bold text-[#6B6F80] uppercase tracking-wider mb-0.5">Depart</label>
              <div className="relative flex items-center">
                <input
                  type="date"
                  value={departDate}
                  onChange={(e) => setDepartDate(e.target.value)}
                  className="w-full font-bold text-[#14213D] text-sm sm:text-base bg-transparent cursor-pointer focus:outline-none pr-6"
                />
                <Calendar className="w-4 h-4 text-[#D4A24C] absolute right-0 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* RETURN */}
          <div className="w-full lg:w-[130px] shrink-0">
            <div className="p-2.5 rounded-[14px] border border-[rgba(20,33,61,0.12)] bg-[#FBF6EE]/70 hover:bg-white hover:border-[#D4A24C] transition duration-200 gh-focus-ring">
              <label className="block text-[11px] font-bold text-[#6B6F80] uppercase tracking-wider mb-0.5">Return</label>
              <div className="relative flex items-center">
                <input
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="w-full font-bold text-[#14213D] text-sm sm:text-base bg-transparent cursor-pointer focus:outline-none pr-6"
                />
                <Calendar className="w-4 h-4 text-[#D4A24C] absolute right-0 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* TRAVELERS & MAIN CTA BUTTON */}
          <div className="flex items-center gap-3 mt-2 lg:mt-0 shrink-0">
            <div className="relative min-w-[130px]" ref={travelersRef}>
              <div className="p-2.5 rounded-[14px] border border-[rgba(20,33,61,0.12)] bg-[#FBF6EE]/70 hover:bg-white hover:border-[#D4A24C] transition duration-200 gh-focus-ring">
                <button
                  type="button"
                  onClick={() => { setShowTravelersDropdown(!showTravelersDropdown); setShowFromDropdown(false); setShowToDropdown(false); }}
                  className="text-left w-full cursor-pointer"
                >
                  <span className="block text-[11px] font-bold text-[#6B6F80] uppercase tracking-wider mb-0.5">Travelers</span>
                  <span className="text-[#14213D] font-bold text-sm sm:text-base flex items-center gap-1.5 whitespace-nowrap">
                    {adultsCount} Adults{childrenCount > 0 ? `, ${childrenCount} Kids` : ''}
                    <ChevronDown className="w-3.5 h-3.5 text-[#6B6F80]" />
                  </span>
                </button>
              </div>

              {showTravelersDropdown && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-white/95 rounded-[16px] shadow-xl border border-[rgba(20,33,61,0.12)] p-4 z-40 backdrop-blur-xl">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="font-bold text-sm text-[#14213D]">Adults</div>
                      <div className="text-xs text-[#6B6F80]">Ages 12+</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button type="button" onClick={() => setAdultsCount(Math.max(1, adultsCount - 1))}
                        className="w-7 h-7 rounded-full bg-[#F6EFE6] hover:bg-[#EBDCC6] text-[#14213D] flex items-center justify-center font-bold cursor-pointer">-</button>
                      <span className="text-sm font-bold w-5 text-center text-[#14213D]">{adultsCount}</span>
                      <button type="button" onClick={() => setAdultsCount(adultsCount + 1)}
                        className="w-7 h-7 rounded-full bg-[#F6EFE6] hover:bg-[#EBDCC6] text-[#14213D] flex items-center justify-center font-bold cursor-pointer">+</button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="font-bold text-sm text-[#14213D]">Children</div>
                      <div className="text-xs text-[#6B6F80]">Ages 0–11</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button type="button" onClick={() => setChildrenCount(Math.max(0, childrenCount - 1))}
                        className="w-7 h-7 rounded-full bg-[#F6EFE6] hover:bg-[#EBDCC6] text-[#14213D] flex items-center justify-center font-bold cursor-pointer">-</button>
                      <span className="text-sm font-bold w-5 text-center text-[#14213D]">{childrenCount}</span>
                      <button type="button" onClick={() => setChildrenCount(childrenCount + 1)}
                        className="w-7 h-7 rounded-full bg-[#F6EFE6] hover:bg-[#EBDCC6] text-[#14213D] flex items-center justify-center font-bold cursor-pointer">+</button>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowTravelersDropdown(false)}
                    className="w-full py-2 gh-btn-terracotta text-white text-xs font-bold rounded-xl cursor-pointer shadow-xs"
                  >
                    Done
                  </button>
                </div>
              )}
            </div>

            {/* Single Strong Terracotta Search Button with Shimmer Sweep */}
            <button
              type="submit"
              className="gh-btn-terracotta font-bold px-7 py-3 rounded-[14px] cursor-pointer whitespace-nowrap text-sm sm:text-base flex items-center justify-center h-[52px]"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

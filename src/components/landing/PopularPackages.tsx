import React, { useState } from 'react';
import { MapPin, Clock, Star, ArrowRight, ArrowUpRight, Heart } from 'lucide-react';
import { TravelPackage } from '../../types/landingTypes';

interface PopularPackagesProps {
  onSelectPackage: (pkg: TravelPackage) => void;
  onViewAll: () => void;
}

export const packagesData: (TravelPackage & { tag: string })[] = [
  {
    id: 'greece',
    title: 'Greek Islands Escape',
    location: 'Santorini & Mykonos',
    country: 'Greece',
    duration: '6 Days / 5 Nights',
    price: 1299,
    rating: 4.8,
    tag: 'Mediterranean Gem',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
    description: 'Immerse yourself in whitewashed cliffside villages, iconic cobalt-domed chapels, breathtaking Aegean sunsets, and authentic island taverns.',
    highlights: ['Santorini Sunset Catamaran', 'Mykonos Windmills & Old Town', 'Volcanic Wine Tasting', 'High-Speed Aegean Ferry'],
  },
  {
    id: 'maldives',
    title: 'Maldives Overwater Haven',
    location: 'Baa Atoll Biosphere',
    country: 'Maldives',
    duration: '5 Days / 4 Nights',
    price: 1599,
    rating: 4.9,
    tag: 'Lagoon Retreat',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80',
    description: 'Unwind in idyllic private overwater villas suspended above crystal turquoise lagoons with vibrant coral reef sanctuaries and sunset dolphin cruises.',
    highlights: ['Overwater Bungalow Villa', 'All-Inclusive Coral Dining', 'Manta Ray Snorkeling Safari', 'Scenic Seaplane Transfer'],
  },
  {
    id: 'canada',
    title: 'Canadian Rockies Odyssey',
    location: 'Banff & Lake Louise',
    country: 'Canada',
    duration: '7 Days / 6 Nights',
    price: 1799,
    rating: 4.7,
    tag: 'Alpine Wilderness',
    image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80',
    description: 'Explore glacial emerald lakes, soaring limestone peaks of Banff and Jasper, grizzly wildlife corridors, and panoramic mountain skywalks.',
    highlights: ['Lake Louise Glacial Canoeing', 'Columbia Icefield Snowcoach', 'Banff Sulphur Mountain Gondola', 'Icefields Parkway Scenic Drive'],
  },
  {
    id: 'japan',
    title: 'Ancient Kyoto & Mt. Fuji',
    location: 'Kyoto & Tokyo',
    country: 'Japan',
    duration: '8 Days / 7 Nights',
    price: 2199,
    rating: 4.9,
    tag: 'Cultural Heritage',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
    description: 'Walk through thousands of vermilion torii gates, participate in traditional matcha ceremonies, and view Mount Fuji mirrored over tranquil alpine lakes.',
    highlights: ['Shinkansen Bullet Train Pass', 'Gion Historic Tea Ceremony', 'Mt. Fuji 5th Station & Lake Kawaguchi', 'Michelin Kaiseki Dining Options'],
  },
];

export const PopularPackages: React.FC<PopularPackagesProps> = ({ onSelectPackage, onViewAll }) => {
  const [saved, setSaved] = useState<Record<string, boolean>>({});

  const toggleSave = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setSaved((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="packages-section" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10 sm:mb-12">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-[rgba(20,33,61,0.12)] text-[#2A9D8F] text-xs font-bold shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#2A9D8F]" />
            <span>Curated Escapes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14213D] font-serif-heading tracking-tight">
            Popular Destinations
          </h2>
          <p className="text-sm text-[#6B6F80] max-w-xl">
            Explore handcrafted journey packages verified with genuine accommodation links, route geometries, and itemized cost models.
          </p>
        </div>

        <button
          onClick={onViewAll}
          className="group flex items-center gap-2 text-xs sm:text-sm font-bold text-[#E76F51] hover:text-[#df6344] transition-colors cursor-pointer"
        >
          <span>View All Packages</span>
          <div className="w-7 h-7 rounded-full border border-[#E76F51]/30 group-hover:border-[#E76F51] group-hover:bg-[#E76F51]/10 flex items-center justify-center transition-all">
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
          </div>
        </button>
      </div>

      {/* 4 Cards Grid with Photo Zoom, Teal Chip, Gold Rating, Heart Button, and 4px Hover Lift */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {packagesData.map((pkg) => {
          const isSaved = saved[pkg.id] || false;

          return (
            <div
              key={pkg.id}
              onClick={() => onSelectPackage(pkg)}
              className="group gh-home-glass-card rounded-[20px] overflow-hidden flex flex-col cursor-pointer"
            >
              {/* Photo Container: overflow-hidden, rounded, #EBDCC6 placeholder */}
              <div className="relative h-52 w-full overflow-hidden gh-img-frame">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />

                {/* Floating Teal Chip on top-left */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#2A9D8F]/95 text-white text-[10px] font-bold tracking-wide backdrop-blur-md shadow-sm">
                  {pkg.tag}
                </div>

                {/* Interactive Heart / Save Button on top-right */}
                <button
                  type="button"
                  onClick={(e) => toggleSave(e, pkg.id)}
                  className={`absolute top-3 right-3 w-8 h-8 rounded-full backdrop-blur-md flex items-center justify-center shadow-md transition-all duration-200 cursor-pointer ${
                    isSaved
                      ? 'bg-[#E76F51] text-white scale-110'
                      : 'bg-white/85 text-[#14213D] hover:text-[#E76F51] hover:bg-white'
                  }`}
                  title={isSaved ? 'Remove from saved' : 'Save destination'}
                  aria-label={`Save ${pkg.title}`}
                >
                  <Heart className={`w-4 h-4 ${isSaved ? 'fill-white' : ''}`} />
                </button>

                {/* Quick View Overlay Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectPackage(pkg);
                  }}
                  className="absolute bottom-3 right-3 w-7 h-7 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#14213D] hover:text-[#E76F51] opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-xs"
                  title="Quick View Details"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-bold text-[#14213D] text-base group-hover:text-[#E76F51] transition-colors leading-snug">
                    {pkg.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-[#6B6F80] font-medium mt-2">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#2A9D8F] shrink-0" />
                      <span className="truncate max-w-[110px]">{pkg.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#D4A24C] shrink-0" />
                      <span>{pkg.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[rgba(20,33,61,0.08)] flex items-center justify-between">
                  <div>
                    <div className="text-xl font-extrabold text-[#14213D] tabular-nums font-mono">
                      ${pkg.price.toLocaleString()}
                    </div>
                    <div className="text-[10px] text-[#6B6F80] font-medium -mt-0.5">Per Traveler</div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    {/* Gold Star Rating */}
                    <div className="flex items-center gap-1 text-xs font-bold text-[#14213D] bg-[#D4A24C]/15 px-2 py-0.5 rounded-md border border-[#D4A24C]/30">
                      <Star className="w-3 h-3 fill-[#D4A24C] text-[#D4A24C]" />
                      <span>{pkg.rating}</span>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-[#F6EFE6] group-hover:bg-[#E76F51] text-[#14213D] group-hover:text-white flex items-center justify-center transition-all duration-200 shadow-2xs">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

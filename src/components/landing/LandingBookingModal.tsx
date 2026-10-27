import React, { useState } from 'react';
import { X, Check, Calendar, Users, MapPin, ShieldCheck, Sparkles } from 'lucide-react';
import { TravelPackage, PricingPlan } from '../../types/landingTypes';

interface LandingBookingModalProps {
  packageItem: TravelPackage | null;
  pricingPlan: PricingPlan | null;
  onClose: () => void;
  /** Optional: bridge to the main app's trip planner */
  onStartPlanning?: (destination: string) => void;
}

export const LandingBookingModal: React.FC<LandingBookingModalProps> = ({
  packageItem,
  pricingPlan,
  onClose,
  onStartPlanning,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('2025-06-15');
  const [travelers, setTravelers] = useState(2);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!packageItem && !pricingPlan) return null;

  const title = packageItem ? packageItem.title : `${pricingPlan?.name} Package Plan`;
  const price = packageItem ? packageItem.price : (pricingPlan?.price || 0);
  const destination = packageItem?.location || '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#14213D]/60 backdrop-blur-sm">
      <div
        className="relative w-full max-w-lg bg-white rounded-[20px] shadow-2xl border border-[rgba(20,33,61,0.12)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative bg-[#14213D] p-6 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
          <span className="text-xs font-bold uppercase tracking-wider text-[#D4A24C]">
            {packageItem ? 'Destination Booking' : 'Plan Subscription'}
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-serif-heading mt-1 text-white">{title}</h2>
          <div className="text-2xl font-extrabold text-[#D4A24C] mt-2 font-mono">
            ${price.toLocaleString()} <span className="text-xs font-normal text-slate-300">/ person</span>
          </div>
        </div>

        {isSuccess ? (
          <div className="p-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#2A9D8F]/15 text-[#2A9D8F] flex items-center justify-center mb-4">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#14213D] font-serif-heading">Booking Confirmed!</h3>
            <p className="text-sm text-[#6B6F80] mt-2 max-w-xs leading-relaxed">
              Thank you, {name || 'Traveler'}! A detailed itinerary receipt has been sent to {email || 'your email'}.
            </p>
            {onStartPlanning && destination && (
              <button
                onClick={() => { onClose(); onStartPlanning(destination); }}
                className="mt-5 px-6 py-2.5 gh-btn-terracotta text-white font-bold rounded-xl text-xs uppercase tracking-wider transition cursor-pointer flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Open in AI Trip Planner →</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="mt-3 px-6 py-2.5 bg-[#F6EFE6] hover:bg-[#EBDCC6] text-[#14213D] font-semibold rounded-xl text-xs transition cursor-pointer"
            >
              Back to Explore
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {packageItem && (
              <div className="flex items-center gap-4 p-3 bg-[#FBF6EE] rounded-[14px] text-xs text-[#6B6F80] border border-[rgba(20,33,61,0.06)]">
                <div className="flex items-center gap-1.5 font-medium text-[#14213D]">
                  <MapPin className="w-3.5 h-3.5 text-[#2A9D8F]" />
                  <span>{packageItem.location}</span>
                </div>
                <div>·</div>
                <div>{packageItem.duration}</div>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-[#6B6F80] mb-1">Full Name</label>
              <input
                type="text"
                required
                placeholder="Sarah Jenkins"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-[12px] border border-[rgba(20,33,61,0.15)] text-sm text-[#14213D] focus:border-[#D4A24C] focus:outline-none gh-focus-ring"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-[#6B6F80] mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="sarah@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-[12px] border border-[rgba(20,33,61,0.15)] text-sm text-[#14213D] focus:border-[#D4A24C] focus:outline-none gh-focus-ring"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#6B6F80] mb-1">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+1 (555) 019-2834"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-[12px] border border-[rgba(20,33,61,0.15)] text-sm text-[#14213D] focus:border-[#D4A24C] focus:outline-none gh-focus-ring"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-[#6B6F80] mb-1 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-[#D4A24C]" /> Preferred Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-[12px] border border-[rgba(20,33,61,0.15)] text-sm text-[#14213D] focus:border-[#D4A24C] focus:outline-none gh-focus-ring"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#6B6F80] mb-1 flex items-center gap-1">
                  <Users className="w-3 h-3 text-[#D4A24C]" /> Travelers
                </label>
                <select
                  value={travelers}
                  onChange={(e) => setTravelers(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-[12px] border border-[rgba(20,33,61,0.15)] text-sm text-[#14213D] focus:border-[#D4A24C] focus:outline-none gh-focus-ring bg-white"
                >
                  <option value={1}>1 Traveler</option>
                  <option value={2}>2 Travelers</option>
                  <option value={3}>3 Travelers</option>
                  <option value={4}>4 Travelers</option>
                  <option value={5}>5+ Travelers</option>
                </select>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs text-[#6B6F80] border-t border-[rgba(20,33,61,0.08)]">
              <div className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#2A9D8F]" />
                <span>Zero cancellation fee within 48h</span>
              </div>
              <div className="font-bold text-[#14213D] text-sm tabular-nums font-mono">
                Total: ${(price * travelers).toLocaleString()}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 gh-btn-terracotta text-white font-bold rounded-xl text-xs uppercase tracking-wider shadow-md transition cursor-pointer"
            >
              Complete Reservation
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

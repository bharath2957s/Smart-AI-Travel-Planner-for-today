import React, { useState } from 'react';
import { X, Mail, Lock, User as UserIcon, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { PaperPlaneLogo } from './OrigamiIcons';
import { useAuth } from '../../lib/AuthContext';

interface LandingSignInModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (email: string) => void;
  initialTab?: 'signin' | 'register';
}

export const LandingSignInModal: React.FC<LandingSignInModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  initialTab = 'signin',
}) => {
  const { login, register } = useAuth();
  const [tab, setTab] = useState<'signin' | 'register'>(initialTab);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!email || !email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!password || password.length < 6) {
      setErrorMessage('Password must be at least 6 characters.');
      return;
    }

    setIsSubmitting(true);
    try {
      if (tab === 'signin') {
        const result = await login(email, password);
        if (result.success) {
          setSubmitted(true);
          setTimeout(() => {
            onSuccess?.(email);
            onClose();
            setSubmitted(false);
          }, 1000);
        } else {
          setErrorMessage(result.error || 'Invalid email or password.');
        }
      } else {
        const result = await register(name || email.split('@')[0], email, password);
        if (result.success) {
          setSubmitted(true);
          setTimeout(() => {
            onSuccess?.(email);
            onClose();
            setSubmitted(false);
          }, 1000);
        } else {
          setErrorMessage(result.error || 'Registration failed. Email might already be taken.');
        }
      }
    } catch (err: any) {
      setErrorMessage(err?.message || 'Authentication error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#14213D]/60 backdrop-blur-sm">
      <div
        className="relative w-full max-w-md bg-white rounded-[20px] shadow-2xl border border-[rgba(20,33,61,0.12)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#F6EFE6] hover:bg-[#EBDCC6] text-[#6B6F80] hover:text-[#14213D] flex items-center justify-center transition z-10 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-8 text-center bg-gradient-to-b from-[#F6EFE6]/80 to-white">
          <div className="flex justify-center mb-3">
            <div className="w-12 h-12 rounded-[14px] bg-white border border-[rgba(20,33,61,0.1)] flex items-center justify-center shadow-xs">
              <PaperPlaneLogo className="w-7 h-7 text-[#D4A24C]" />
            </div>
          </div>
          <h2 className="text-2xl font-extrabold text-[#14213D] font-serif-heading">
            {tab === 'signin' ? 'Welcome Back' : 'Create an Account'}
          </h2>
          <p className="text-xs text-[#6B6F80] mt-1">
            Access your private travel dossiers, custom activities, and persistent itineraries.
          </p>

          <div className="flex bg-[#F6EFE6] p-1 rounded-xl mt-6 border border-[rgba(20,33,61,0.08)]">
            <button
              onClick={() => {
                setTab('signin');
                setErrorMessage(null);
              }}
              className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition cursor-pointer ${
                tab === 'signin' ? 'bg-white text-[#14213D] shadow-xs' : 'text-[#6B6F80]'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setTab('register');
                setErrorMessage(null);
              }}
              className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition cursor-pointer ${
                tab === 'register' ? 'bg-white text-[#14213D] shadow-xs' : 'text-[#6B6F80]'
              }`}
            >
              Register
            </button>
          </div>
        </div>

        {submitted ? (
          <div className="p-8 text-center flex flex-col items-center">
            <CheckCircle2 className="w-12 h-12 text-[#2A9D8F] mb-2 animate-bounce" />
            <h3 className="text-lg font-bold text-[#14213D] font-serif-heading">
              {tab === 'signin' ? 'Signed In Successfully!' : 'Account Created Successfully!'}
            </h3>
            <p className="text-xs text-[#6B6F80] mt-1">Loading your personalized travel workspace...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 pt-2 space-y-4">
            {errorMessage && (
              <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {tab === 'register' && (
              <div>
                <label className="block text-xs font-bold text-[#6B6F80] mb-1">Full Name</label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="e.g. Julian Vance"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-[12px] border border-[rgba(20,33,61,0.15)] text-sm text-[#14213D] focus:border-[#D4A24C] focus:outline-none gh-focus-ring"
                  />
                  <UserIcon className="w-4 h-4 text-[#6B6F80] absolute left-3 top-3 pointer-events-none" />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-[#6B6F80] mb-1">Email</label>
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-[12px] border border-[rgba(20,33,61,0.15)] text-sm text-[#14213D] focus:border-[#D4A24C] focus:outline-none gh-focus-ring"
                />
                <Mail className="w-4 h-4 text-[#6B6F80] absolute left-3 top-3 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#6B6F80] mb-1">Password</label>
              <div className="relative">
                <input
                  type="password"
                  required
                  placeholder="At least 6 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-[12px] border border-[rgba(20,33,61,0.15)] text-sm text-[#14213D] focus:border-[#D4A24C] focus:outline-none gh-focus-ring"
                />
                <Lock className="w-4 h-4 text-[#6B6F80] absolute left-3 top-3 pointer-events-none" />
              </div>
            </div>

            {/* Quick Demo Credential Pill */}
            {tab === 'signin' && (
              <div
                onClick={() => {
                  setEmail('traveler@world.com');
                  setPassword('Traveler123!');
                  setErrorMessage(null);
                }}
                className="text-[11px] text-[#14213D] bg-[#F6EFE6] hover:bg-[#EBDCC6] p-2.5 rounded-xl cursor-pointer transition text-center border border-[rgba(20,33,61,0.1)]"
              >
                Use Demo Account: <strong>traveler@world.com</strong> / <strong>Traveler123!</strong>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 gh-btn-terracotta text-white font-bold rounded-xl text-xs uppercase tracking-wider shadow-md active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
            >
              {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
              <span>
                {isSubmitting
                  ? 'Verifying...'
                  : tab === 'signin'
                  ? 'Sign In to Your Account'
                  : 'Create Free Account'}
              </span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

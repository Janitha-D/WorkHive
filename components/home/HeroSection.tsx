'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight, Shield, Users, BookOpen } from 'lucide-react';
import { useRouter } from 'next/navigation';
import GoogleAuthButton from '@/components/auth/GoogleAuthButton';
import { useAuth } from '@/context/AuthContext';

const stats = [
  { label: 'Earning Methods', value: '11', icon: BookOpen },
  { label: 'Categories', value: '5', icon: Shield },
  { label: '100% Free', value: '∞', icon: Users },
];

export default function HeroSection() {
  const [query, setQuery] = useState('');
  const router = useRouter();
  const { user } = useAuth();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/?q=${encodeURIComponent(query.trim())}`);
      // Scroll to grid
      setTimeout(() => {
        document.getElementById('opportunities')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(#1D3557 1px, transparent 1px), linear-gradient(90deg, #1D3557 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />
      {/* Gradient blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#E8F4FD] to-transparent opacity-60 -z-10 rounded-b-full blur-3xl" />

      <div className="max-w-4xl mx-auto text-center">
        {/* Pill label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E8F4FD] border border-[#1D3557]/10 rounded-full text-xs font-semibold text-[#1D3557] mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#1D3557] animate-pulse" />
          100% Free Platform — No Scams, No Fees
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]"
        >
          Discover Legitimate Ways{' '}
          <span className="gradient-text">to Earn Online.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Step-by-step guides to real online income — from microtasks and freelancing to content creation and e-commerce. Start today, no investment needed.
        </motion.p>

        {/* Search + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="flex flex-col sm:flex-row items-center gap-3 max-w-xl mx-auto mb-6"
        >
          <form onSubmit={handleSearch} className="flex-1 w-full relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search opportunities..."
              className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1D3557]/20 focus:border-[#1D3557]/40 transition-all shadow-sm"
            />
          </form>
          <a
            href="#opportunities"
            className="btn-primary shrink-0 text-sm px-6 py-3.5 w-full sm:w-auto justify-center"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('opportunities')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore All
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Auth nudge */}
        {!user && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center gap-2 mb-12"
          >
            <p className="text-xs text-gray-400">Save your favorite methods — sign in for free</p>
            <GoogleAuthButton />
          </motion.div>
        )}

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.32 }}
          className="flex items-center justify-center gap-8 sm:gap-16 pt-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-[#1D3557]">{stat.value}</p>
              <p className="text-xs text-gray-400 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

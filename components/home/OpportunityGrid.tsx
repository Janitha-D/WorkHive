'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, SlidersHorizontal } from 'lucide-react';
import { opportunities, categories } from '@/data/opportunities';
import OpportunityCard from '@/components/cards/OpportunityCard';
import Modal from '@/components/ui/Modal';
import GoogleAuthButton from '@/components/auth/GoogleAuthButton';
import { cn } from '@/lib/utils';

const difficultyFilters = ['All', 'Beginner', 'Intermediate', 'Advanced'];

interface OpportunityGridProps {
  searchQuery?: string;
}

export default function OpportunityGrid({ searchQuery }: OpportunityGridProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeDifficulty, setActiveDifficulty] = useState('All');
  const [authModalOpen, setAuthModalOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = opportunities;

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (o) =>
          o.title.toLowerCase().includes(q) ||
          o.description.toLowerCase().includes(q) ||
          o.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (activeCategory !== 'all') {
      list = list.filter((o) => o.categorySlug === activeCategory);
    }

    if (activeDifficulty !== 'All') {
      list = list.filter((o) => o.difficulty === activeDifficulty);
    }

    return list;
  }, [searchQuery, activeCategory, activeDifficulty]);

  return (
    <section id="opportunities" className="px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">All Opportunities</h2>
            <p className="text-sm text-gray-400">
              {filtered.length} method{filtered.length !== 1 ? 's' : ''} found
            </p>
          </div>
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-400">Filter:</span>
            {difficultyFilters.map((d) => (
              <button
                key={d}
                onClick={() => setActiveDifficulty(d)}
                className={cn(
                  'px-3 py-1.5 text-xs font-medium rounded-xl transition-all duration-200',
                  activeDifficulty === d
                    ? 'bg-[#1D3557] text-white shadow-sm'
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                )}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-8 scrollbar-hide">
          <button
            onClick={() => setActiveCategory('all')}
            className={cn(
              'px-4 py-2 text-sm font-medium rounded-xl whitespace-nowrap transition-all duration-200 shrink-0',
              activeCategory === 'all'
                ? 'bg-[#1D3557] text-white shadow-sm'
                : 'bg-white border border-gray-100 text-gray-600 hover:border-gray-200 hover:bg-gray-50'
            )}
          >
            All Categories
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-xl whitespace-nowrap transition-all duration-200 shrink-0',
                activeCategory === cat.slug
                  ? 'bg-[#1D3557] text-white shadow-sm'
                  : 'bg-white border border-gray-100 text-gray-600 hover:border-gray-200 hover:bg-gray-50'
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div
              key={`${activeCategory}-${activeDifficulty}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            >
              {filtered.map((opp, idx) => (
                <OpportunityCard
                  key={opp.id}
                  opportunity={opp}
                  index={idx}
                  onAuthRequired={() => setAuthModalOpen(true)}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-24 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-4">
                <Filter className="w-7 h-7 text-gray-300" />
              </div>
              <h3 className="text-base font-semibold text-gray-700 mb-1">No results found</h3>
              <p className="text-sm text-gray-400 max-w-xs">
                Try adjusting your filters or searching with different keywords.
              </p>
              <button
                onClick={() => { setActiveCategory('all'); setActiveDifficulty('All'); }}
                className="mt-4 btn-ghost text-sm text-[#1D3557]"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Auth required modal */}
      <Modal open={authModalOpen} onClose={() => setAuthModalOpen(false)}>
        <div className="p-8 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#E8F4FD] flex items-center justify-center mb-6">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L3 7v10l9 5 9-5V7L12 2z" stroke="#1D3557" strokeWidth="2" strokeLinejoin="round"/>
              <path d="M12 2v20M3 7l9 5 9-5" stroke="#1D3557" strokeWidth="2" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Sign in to Save Opportunities</h2>
          <p className="text-sm text-gray-500 leading-relaxed max-w-sm mb-8">
            Create a free WorkHive account to bookmark your favorite earning methods and access them from any device.
          </p>
          <GoogleAuthButton fullWidth onSuccess={() => setAuthModalOpen(false)} />
          <button
            onClick={() => setAuthModalOpen(false)}
            className="mt-4 text-xs text-gray-400 hover:text-gray-600 transition-colors"
          >
            Maybe later
          </button>
        </div>
      </Modal>
    </section>
  );
}

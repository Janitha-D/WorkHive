'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookmarkCheck, LogIn, LayoutDashboard, ArrowRight, Bookmark } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useSaved } from '@/context/SavedContext';
import { opportunities } from '@/data/opportunities';
import OpportunityCard from '@/components/cards/OpportunityCard';
import PageWrapper from '@/components/layout/PageWrapper';
import GoogleAuthButton from '@/components/auth/GoogleAuthButton';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export default function DashboardPage() {
  const { user, isLoading } = useAuth();
  const { savedIds } = useSaved();
  const router = useRouter();

  const savedOpportunities = opportunities.filter((o) => savedIds.includes(o.id));

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <LoadingSpinner size="lg" label="Loading your dashboard..." />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md"
        >
          <div className="w-20 h-20 rounded-3xl bg-[#E8F4FD] flex items-center justify-center mx-auto mb-6">
            <LayoutDashboard className="w-9 h-9 text-[#1D3557]" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-3">Sign In to Access Dashboard</h1>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            Your personal dashboard shows all your bookmarked earning opportunities. Sign in for free to get started.
          </p>
          <GoogleAuthButton fullWidth />
          <Link
            href="/"
            className="block mt-4 text-sm text-gray-400 hover:text-gray-600 transition-colors"
          >
            ← Back to Home
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#1D3557] flex items-center justify-center text-white text-xl font-bold shadow-lg">
              {user.name.charAt(0)}
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">Welcome back</p>
              <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-4 py-2.5 bg-[#E8F4FD] rounded-xl text-center">
              <p className="text-2xl font-bold text-[#1D3557]">{savedIds.length}</p>
              <p className="text-xs text-[#457B9D] font-medium">Saved Items</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 mb-10" />

        {/* Saved opportunities */}
        <div className="mb-8 flex items-center gap-3">
          <BookmarkCheck className="w-5 h-5 text-[#1D3557]" />
          <h2 className="text-lg font-bold text-gray-900">Saved Opportunities</h2>
        </div>

        {savedOpportunities.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {savedOpportunities.map((opp, idx) => (
              <OpportunityCard key={opp.id} opportunity={opp} index={idx} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-24 text-center"
          >
            <div className="w-20 h-20 rounded-3xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6">
              <Bookmark className="w-9 h-9 text-gray-200" />
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">No saved opportunities yet</h3>
            <p className="text-sm text-gray-400 max-w-xs leading-relaxed mb-8">
              Browse our collection and click the bookmark icon on any opportunity to save it here.
            </p>
            <Link href="/" className="btn-primary">
              Explore Opportunities
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        )}
      </div>
    </PageWrapper>
  );
}

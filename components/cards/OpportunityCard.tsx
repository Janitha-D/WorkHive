'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, DollarSign, Clock, Zap } from 'lucide-react';
import { Opportunity } from '@/types';
import { cn, getDifficultyColor } from '@/lib/utils';
import Badge from '@/components/ui/Badge';
import BookmarkButton from '@/components/ui/BookmarkButton';

const categoryColors: Record<string, string> = {
  'microtasks-data-entry': 'bg-blue-50 text-blue-700',
  'freelancing-writing-translation': 'bg-purple-50 text-purple-700',
  'content-creation-social-media': 'bg-rose-50 text-rose-700',
  'mobile-apps-development': 'bg-emerald-50 text-emerald-700',
  'ecommerce-affiliate': 'bg-amber-50 text-amber-700',
};

interface OpportunityCardProps {
  opportunity: Opportunity;
  index?: number;
  onAuthRequired?: () => void;
}

export default function OpportunityCard({
  opportunity,
  index = 0,
  onAuthRequired,
}: OpportunityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.06, ease: 'easeOut' }}
      className="group relative card-base card-hover flex flex-col h-full"
    >
      {/* Featured indicator */}
      {opportunity.featured && (
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#1D3557] text-white text-[10px] font-semibold rounded-full">
            <Zap className="w-2.5 h-2.5 fill-current" />
            Featured
          </span>
        </div>
      )}

      {/* Bookmark */}
      <div className="absolute top-3 right-3 z-10">
        <BookmarkButton
          opportunityId={opportunity.id}
          size="sm"
          onAuthRequired={onAuthRequired}
        />
      </div>

      <div className="p-6 flex flex-col h-full">
        {/* Category badge */}
        <div className="mb-3">
          <Link
            href={`/categories/${opportunity.categorySlug}`}
            className={cn(
              'inline-flex items-center text-[10px] font-semibold px-2.5 py-1 rounded-lg transition-opacity hover:opacity-80',
              categoryColors[opportunity.categorySlug] ?? 'bg-gray-50 text-gray-600'
            )}
          >
            {opportunity.categoryName}
          </Link>
        </div>

        {/* Title & Description */}
        <h3 className="text-[15px] font-semibold text-gray-900 mb-2 mt-1 leading-snug pr-6">
          {opportunity.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 flex-1 mb-5">
          {opportunity.description}
        </p>

        {/* Meta row */}
        <div className="grid grid-cols-2 gap-2 mb-5">
          <div className="flex items-center gap-1.5 bg-gray-50 rounded-xl p-2.5">
            <DollarSign className="w-3.5 h-3.5 text-[#1D3557] shrink-0" />
            <div>
              <p className="text-[9px] text-gray-400 font-medium uppercase tracking-wide">Earnings</p>
              <p className="text-[11px] font-semibold text-gray-800 leading-tight">
                {opportunity.earningsRange}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 bg-gray-50 rounded-xl p-2.5">
            <Clock className="w-3.5 h-3.5 text-[#1D3557] shrink-0" />
            <div>
              <p className="text-[9px] text-gray-400 font-medium uppercase tracking-wide">Time to Start</p>
              <p className="text-[11px] font-semibold text-gray-800 leading-tight">
                {opportunity.timeToStart}
              </p>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          <Badge
            className={getDifficultyColor(opportunity.difficulty)}
            variant="muted"
            size="sm"
          >
            {opportunity.difficulty}
          </Badge>
          {opportunity.paymentMethods.slice(0, 2).map((method) => (
            <Badge key={method} variant="outline" size="sm">
              {method}
            </Badge>
          ))}
        </div>

        {/* CTA Row */}
        <div className="flex items-center gap-2 pt-4 border-t border-gray-50">
          <Link
            href={`/opportunity/${opportunity.id}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[#1D3557] text-white text-xs font-semibold rounded-xl hover:bg-[#172a46] transition-colors"
          >
            View Guide
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <a
            href={opportunity.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 rounded-xl border border-gray-100 text-gray-400 hover:text-[#1D3557] hover:border-[#1D3557]/20 hover:bg-[#E8F4FD] transition-all"
            title={`Open ${opportunity.websiteLabel}`}
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

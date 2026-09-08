'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Bookmark, BookmarkCheck } from 'lucide-react';
import { useSaved } from '@/context/SavedContext';
import { useAuth } from '@/context/AuthContext';
import { cn } from '@/lib/utils';

interface BookmarkButtonProps {
  opportunityId: string;
  className?: string;
  size?: 'sm' | 'md';
  onAuthRequired?: () => void;
}

export default function BookmarkButton({
  opportunityId,
  className,
  size = 'md',
  onAuthRequired,
}: BookmarkButtonProps) {
  const { toggleSaved, isSaved } = useSaved();
  const { user } = useAuth();
  const saved = isSaved(opportunityId);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!user) {
      onAuthRequired?.();
      return;
    }
    toggleSaved(opportunityId);
  };

  return (
    <motion.button
      onClick={handleClick}
      whileTap={{ scale: 0.85 }}
      className={cn(
        'rounded-xl transition-all duration-200 flex items-center justify-center focus-ring',
        size === 'sm' ? 'w-7 h-7' : 'w-8 h-8',
        saved
          ? 'bg-[#1D3557] text-white shadow-sm'
          : 'bg-white/80 text-gray-400 hover:text-[#1D3557] hover:bg-[#E8F4FD] border border-gray-100',
        className
      )}
      aria-label={saved ? 'Remove bookmark' : 'Bookmark this opportunity'}
      title={saved ? 'Remove bookmark' : 'Save for later'}
    >
      <AnimatePresence mode="wait" initial={false}>
        {saved ? (
          <motion.div
            key="saved"
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            <BookmarkCheck className={size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4'} />
          </motion.div>
        ) : (
          <motion.div
            key="unsaved"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.15 }}
          >
            <Bookmark className={size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4'} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

'use client';

import BookmarkButton from '@/components/ui/BookmarkButton';

interface BookmarkButtonWrapperProps {
  opportunityId: string;
}

export default function BookmarkButtonWrapper({ opportunityId }: BookmarkButtonWrapperProps) {
  return <BookmarkButton opportunityId={opportunityId} />;
}

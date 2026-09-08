import { Suspense } from 'react';
import HeroSection from '@/components/home/HeroSection';
import CategoriesSection from '@/components/home/CategoriesSection';
import OpportunityGrid from '@/components/home/OpportunityGrid';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import PageWrapper from '@/components/layout/PageWrapper';

interface HomePageProps {
  searchParams: { q?: string };
}

export default function HomePage({ searchParams }: HomePageProps) {
  const query = searchParams.q ?? '';

  return (
    <PageWrapper>
      <HeroSection />
      <CategoriesSection />
      <Suspense fallback={<LoadingSpinner size="lg" className="py-24" label="Loading opportunities..." />}>
        <OpportunityGrid searchQuery={query} />
      </Suspense>
    </PageWrapper>
  );
}

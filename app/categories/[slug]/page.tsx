import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { categories, getCategoryBySlug, getOpportunitiesByCategory } from '@/data/opportunities';
import OpportunityCard from '@/components/cards/OpportunityCard';
import PageWrapper from '@/components/layout/PageWrapper';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cat = getCategoryBySlug(params.slug);
  if (!cat) return {};
  return {
    title: cat.name,
    description: cat.description,
  };
}

export default function CategoryPage({ params }: Props) {
  const cat = getCategoryBySlug(params.slug);
  if (!cat) notFound();

  const opps = getOpportunitiesByCategory(params.slug);

  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/#categories" className="hover:text-gray-600 transition-colors">Categories</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-600 font-medium">{cat.name}</span>
        </nav>

        {/* Header */}
        <div className="max-w-2xl mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{cat.name}</h1>
          <p className="text-gray-500 leading-relaxed">{cat.description}</p>
          <p className="text-sm text-[#457B9D] font-medium mt-3">{opps.length} methods available</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {opps.map((opp, idx) => (
            <OpportunityCard key={opp.id} opportunity={opp} index={idx} />
          ))}
        </div>

        {/* Back */}
        <div className="mt-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Opportunities
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
}

import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  Lightbulb,
  DollarSign,
  Clock,
  CreditCard,
  Globe,
  ChevronRight,
} from 'lucide-react';
import { opportunities, getOpportunityById } from '@/data/opportunities';
import { getDifficultyColor } from '@/lib/utils';
import Badge from '@/components/ui/Badge';
import PageWrapper from '@/components/layout/PageWrapper';
import BookmarkButtonWrapper from '@/components/ui/BookmarkButtonWrapper';

interface Props {
  params: { id: string };
}

export async function generateStaticParams() {
  return opportunities.map((o) => ({ id: o.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const opp = getOpportunityById(params.id);
  if (!opp) return {};
  return {
    title: opp.title,
    description: opp.description.slice(0, 155),
  };
}

export default function OpportunityPage({ params }: Props) {
  const opp = getOpportunityById(params.id);
  if (!opp) notFound();

  return (
    <PageWrapper>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link
            href={`/categories/${opp.categorySlug}`}
            className="hover:text-gray-600 transition-colors"
          >
            {opp.categoryName}
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-600 font-medium">{opp.title}</span>
        </nav>

        {/* Header Card */}
        <div className="bg-white border border-gray-100 rounded-3xl p-8 mb-8 shadow-card">
          <div className="flex items-start justify-between gap-4 mb-5">
            <div className="flex-1">
              <Link
                href={`/categories/${opp.categorySlug}`}
                className="inline-flex items-center text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-[#E8F4FD] text-[#1D3557] mb-3 hover:bg-[#d4ecf7] transition-colors"
              >
                {opp.categoryName}
              </Link>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-2">
                {opp.title}
              </h1>
              <p className="text-sm text-gray-500 leading-relaxed">{opp.description}</p>
            </div>
            <BookmarkButtonWrapper opportunityId={opp.id} />
          </div>

          {/* Stat chips */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-gray-50 rounded-2xl p-3">
              <div className="flex items-center gap-1.5 mb-1">
                <DollarSign className="w-3.5 h-3.5 text-[#1D3557]" />
                <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide">Earnings</span>
              </div>
              <p className="text-sm font-bold text-gray-800">{opp.earningsRange}</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-3">
              <div className="flex items-center gap-1.5 mb-1">
                <Clock className="w-3.5 h-3.5 text-[#1D3557]" />
                <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide">Start Time</span>
              </div>
              <p className="text-sm font-bold text-gray-800">{opp.timeToStart}</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-3">
              <div className="flex items-center gap-1.5 mb-1">
                <Globe className="w-3.5 h-3.5 text-[#1D3557]" />
                <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide">Difficulty</span>
              </div>
              <p className={`text-xs font-bold px-2 py-0.5 rounded-lg inline-block ${getDifficultyColor(opp.difficulty)}`}>
                {opp.difficulty}
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-3">
              <div className="flex items-center gap-1.5 mb-1">
                <CreditCard className="w-3.5 h-3.5 text-[#1D3557]" />
                <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide">Withdrawal</span>
              </div>
              <p className="text-sm font-bold text-gray-800 truncate">{opp.paymentMethods[0]}</p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-3 mt-6 pt-6 border-t border-gray-50">
            <a
              href={opp.website}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Visit {opp.websiteLabel}
              <ExternalLink className="w-4 h-4" />
            </a>
            <div className="flex flex-wrap gap-1.5">
              {opp.paymentMethods.map((m) => (
                <Badge key={m} variant="outline" size="sm">{m}</Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Step-by-step Guide */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-[#1D3557] text-white text-xs flex items-center justify-center font-bold">✓</span>
            Step-by-Step Guide
          </h2>
          <div className="space-y-4">
            {opp.steps.map((step) => (
              <div key={step.number} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-[#1D3557] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {step.number}
                  </div>
                  {step.number < opp.steps.length && (
                    <div className="w-px flex-1 bg-gray-100 mt-2" />
                  )}
                </div>
                <div className={`pb-6 ${step.number === opp.steps.length ? '' : ''}`}>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Requirements */}
        <section className="bg-white border border-gray-100 rounded-2xl p-6 mb-6 shadow-card">
          <h2 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#1D3557]" />
            Requirements
          </h2>
          <ul className="space-y-2.5">
            {opp.requirements.map((req) => (
              <li key={req} className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#1D3557] mt-2 shrink-0" />
                <span className="text-sm text-gray-600 leading-relaxed">{req}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Pro Tips */}
        <section className="bg-[#E8F4FD] border border-[#1D3557]/10 rounded-2xl p-6 mb-8">
          <h2 className="text-base font-bold text-[#1D3557] mb-4 flex items-center gap-2">
            <Lightbulb className="w-5 h-5" />
            Pro Tips
          </h2>
          <ul className="space-y-3">
            {opp.tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="text-[#1D3557] font-bold text-xs mt-0.5 shrink-0">{i + 1}.</span>
                <span className="text-sm text-[#1D3557]/80 leading-relaxed">{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          {opp.tags.map((tag) => (
            <Badge key={tag} variant="muted" size="sm">{tag}</Badge>
          ))}
        </div>

        {/* Back nav */}
        <Link
          href={`/categories/${opp.categorySlug}`}
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to {opp.categoryName}
        </Link>
      </article>
    </PageWrapper>
  );
}

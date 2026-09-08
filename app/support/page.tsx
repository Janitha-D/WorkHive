import type { Metadata } from 'next';
import Link from 'next/link';
import { MessageCircle, Mail, ExternalLink, ArrowLeft, Shield, Heart } from 'lucide-react';
import PageWrapper from '@/components/layout/PageWrapper';

export const metadata: Metadata = {
  title: 'Support',
  description: 'Need help? Get in touch with Janitha Dilshan, founder of WorkHive.',
};

export default function SupportPage() {
  return (
    <PageWrapper>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E8F4FD] border border-[#1D3557]/10 rounded-full text-xs font-semibold text-[#1D3557] mb-6">
            <Heart className="w-3.5 h-3.5 fill-current" />
            100% Free Platform
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Need Help? Get in Touch.
          </h1>
          <p className="text-gray-500 leading-relaxed">
            WorkHive is a 100% free platform. For support or inquiries, reach out to the founder,{' '}
            <span className="font-semibold text-gray-700">Janitha Dilshan</span>.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="space-y-4 mb-12">
          {/* WhatsApp */}
          <a
            href="https://wa.me/94701607317"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 p-6 bg-white border border-gray-100 rounded-2xl shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors">
              <MessageCircle className="w-6 h-6 text-emerald-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">WhatsApp</p>
              <p className="text-base font-semibold text-gray-900">+94 70 160 7317</p>
              <p className="text-sm text-gray-400 mt-0.5">Tap to open WhatsApp chat</p>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-emerald-500 transition-colors shrink-0" />
          </a>

          {/* Email */}
          <a
            href="mailto:janithadilshan317@gmail.com"
            className="group flex items-center gap-5 p-6 bg-white border border-gray-100 rounded-2xl shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
              <Mail className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Email</p>
              <p className="text-base font-semibold text-gray-900 truncate">janithadilshan317@gmail.com</p>
              <p className="text-sm text-gray-400 mt-0.5">Tap to compose an email</p>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-blue-500 transition-colors shrink-0" />
          </a>
        </div>

        {/* Info box */}
        <div className="bg-[#E8F4FD] border border-[#1D3557]/10 rounded-2xl p-6">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-[#1D3557] shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-semibold text-[#1D3557] mb-1">Our Promise</h3>
              <p className="text-sm text-[#1D3557]/70 leading-relaxed">
                WorkHive is built entirely for free. We never charge fees, sell courses, or promote scams. Every opportunity listed is verified legitimate. If anything seems off, please reach out — your feedback helps us maintain quality.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
}

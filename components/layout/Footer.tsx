import Link from 'next/link';
import { MessageCircle, Mail, ExternalLink, Heart } from 'lucide-react';

const footerLinks = {
  platform: [
    { label: 'All Opportunities', href: '/' },
    { label: 'Categories', href: '/#categories' },
    { label: 'My Dashboard', href: '/dashboard' },
    { label: 'Support', href: '/support' },
  ],
  categories: [
    { label: 'Microtasks & Data Entry', href: '/categories/microtasks-data-entry' },
    { label: 'Freelancing & Writing', href: '/categories/freelancing-writing-translation' },
    { label: 'Content Creation', href: '/categories/content-creation-social-media' },
    { label: 'Mobile Apps', href: '/categories/mobile-apps-development' },
    { label: 'E-commerce & Affiliate', href: '/categories/ecommerce-affiliate' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#1D3557] rounded-lg flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L3 7v10l9 5 9-5V7L12 2z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 2v20M3 7l9 5 9-5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-[15px] font-semibold">
                Work<span className="text-[#1D3557]">Hive</span>
              </span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs mb-6">
              A 100% free platform guiding you toward legitimate online earning opportunities. No scams, no fees — just real paths to income.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/94701607317"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#1D3557] transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                </div>
                <span>+94 70 160 7317</span>
                <ExternalLink className="w-3 h-3 text-gray-300 group-hover:text-gray-400" />
              </a>
              <a
                href="mailto:janithadilshan317@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#1D3557] transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <Mail className="w-4 h-4 text-blue-600" />
                </div>
                <span>janithadilshan317@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Platform
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.platform.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Categories
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.categories.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} WorkHive. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 flex items-center gap-1.5">
            Made with <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" /> by{' '}
            <a
              href="mailto:janithadilshan317@gmail.com"
              className="text-[#1D3557] hover:underline"
            >
              Janitha Dilshan
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

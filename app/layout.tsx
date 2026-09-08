import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/context/AuthContext';
import { SavedProvider } from '@/context/SavedContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'WorkHive — Discover Legitimate Ways to Earn Online',
    template: '%s | WorkHive',
  },
  description:
    'WorkHive is a 100% free platform guiding you on legitimate online earning methods — from freelancing and content creation to microtasks and e-commerce.',
  keywords: ['earn online', 'freelancing', 'work from home', 'online income', 'microtasks'],
  authors: [{ name: 'Janitha Dilshan' }],
  openGraph: {
    title: 'WorkHive — Discover Legitimate Ways to Earn Online',
    description: 'A 100% free platform for legitimate online earning methods.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#FAFAFA] text-[#0A0A0A] antialiased">
        <AuthProvider>
          <SavedProvider>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </SavedProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="text-center">
        <p className="text-[80px] font-bold text-gray-100 leading-none mb-0">404</p>
        <h1 className="text-2xl font-bold text-gray-900 mb-3 -mt-4">Page Not Found</h1>
        <p className="text-gray-500 text-sm mb-8 max-w-xs mx-auto">
          The page you're looking for doesn't exist or may have been moved.
        </p>
        <Link href="/" className="btn-primary inline-flex">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}

import Link from 'next/link';
import { ArrowRight, ClipboardList, PenTool, Video, Smartphone, ShoppingBag } from 'lucide-react';
import { Category } from '@/types';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ElementType> = {
  ClipboardList,
  PenTool,
  Video,
  Smartphone,
  ShoppingBag,
};

const colorMap: Record<string, string> = {
  blue:    'bg-blue-50 text-blue-600 group-hover:bg-blue-100',
  purple:  'bg-purple-50 text-purple-600 group-hover:bg-purple-100',
  rose:    'bg-rose-50 text-rose-600 group-hover:bg-rose-100',
  emerald: 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100',
  amber:   'bg-amber-50 text-amber-600 group-hover:bg-amber-100',
};

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const Icon = iconMap[category.icon] ?? ClipboardList;
  const iconColor = colorMap[category.color] ?? colorMap.blue;

  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group card-base card-hover flex items-start gap-4 p-5 focus-ring"
    >
      <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300', iconColor)}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-semibold text-gray-900 leading-snug group-hover:text-[#1D3557] transition-colors">
            {category.name}
          </h3>
          <ArrowRight className="w-4 h-4 text-gray-300 shrink-0 mt-0.5 group-hover:text-[#1D3557] group-hover:translate-x-0.5 transition-all duration-200" />
        </div>
        <p className="text-xs text-gray-400 mt-1 leading-relaxed line-clamp-2">{category.description}</p>
        <p className="text-[11px] text-[#457B9D] font-medium mt-2">{category.count} methods</p>
      </div>
    </Link>
  );
}

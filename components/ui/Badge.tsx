import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'muted';
  size?: 'sm' | 'md';
  className?: string;
}

export default function Badge({
  children,
  variant = 'default',
  size = 'sm',
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-full border',
        size === 'sm' ? 'px-2.5 py-0.5 text-[11px]' : 'px-3 py-1 text-xs',
        variant === 'default' &&
          'bg-[#E8F4FD] text-[#1D3557] border-[#1D3557]/15',
        variant === 'outline' &&
          'bg-transparent text-gray-600 border-gray-200',
        variant === 'muted' &&
          'bg-gray-50 text-gray-500 border-gray-100',
        className
      )}
    >
      {children}
    </span>
  );
}

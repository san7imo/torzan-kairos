import type { PropsWithChildren } from 'react';
import { cn } from '../../lib/cn';

type EyebrowProps = PropsWithChildren<{
  className?: string;
}>;

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2.5 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-accent-gold',
        className,
      )}
    >
      <span className="h-px w-8 bg-accent-gold/70" aria-hidden="true" />
      {children}
    </span>
  );
}

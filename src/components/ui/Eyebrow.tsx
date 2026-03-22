import type { PropsWithChildren } from 'react';
import { cn } from '../../lib/cn';

type EyebrowProps = PropsWithChildren<{
  className?: string;
}>;

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-accent-gold',
        className,
      )}
    >
      <span className="h-px w-10 bg-accent-gold/70" aria-hidden="true" />
      {children}
    </span>
  );
}

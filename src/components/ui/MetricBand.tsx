import { cn } from '../../lib/cn';
import type { MetricItem } from '../../types/site';

type MetricBandProps = {
  items: MetricItem[];
  className?: string;
  tone?: 'light' | 'dark';
};

export function MetricBand({ className, items, tone = 'light' }: MetricBandProps) {
  const isDark = tone === 'dark';

  return (
    <div className={cn('grid gap-3 sm:grid-cols-3', className)}>
      {items.map((item) => (
        <article
          key={`${item.value}-${item.label}`}
          className={cn(
            'rounded-[1.45rem] border px-4 py-4 sm:px-5',
            isDark ? 'border-white/10 bg-white/[0.04]' : 'border-brand-blue/10 bg-brand-blue/[0.03]',
          )}
        >
          <p className={cn('text-[0.62rem] font-semibold uppercase tracking-[0.22em]', isDark ? 'text-accent-gold' : 'text-brand-blue/52')}>
            {item.label}
          </p>
          <p className={cn('mt-3 font-display text-[1.8rem] leading-none sm:text-[2rem]', isDark ? 'text-mist' : 'text-brand-blue')}>
            {item.value}
          </p>
          {item.note ? (
            <p className={cn('mt-3 text-xs leading-6', isDark ? 'text-mist/62' : 'text-brand-blue/58')}>{item.note}</p>
          ) : null}
        </article>
      ))}
    </div>
  );
}

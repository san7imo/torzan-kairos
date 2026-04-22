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
    <div className={cn('grid gap-2.5 sm:grid-cols-3', className)}>
      {items.map((item) => (
        <article
          key={`${item.value}-${item.label}`}
          className={cn(
            'rounded-[1.2rem] border px-4 py-3.5 sm:px-5',
            isDark ? 'border-white/8 bg-white/[0.035]' : 'border-brand-blue/10 bg-brand-blue/[0.03]',
          )}
        >
          <p className={cn('text-[0.54rem] font-semibold uppercase tracking-[0.18em]', isDark ? 'text-accent-gold' : 'text-brand-blue/52')}>
            {item.label}
          </p>
          <p className={cn('mt-2.5 font-display text-[1.45rem] leading-none sm:text-[1.65rem]', isDark ? 'text-mist' : 'text-brand-blue')}>
            {item.value}
          </p>
          {item.note ? (
            <p className={cn('mt-2.5 text-[0.72rem] leading-5.5', isDark ? 'text-mist/62' : 'text-brand-blue/58')}>{item.note}</p>
          ) : null}
        </article>
      ))}
    </div>
  );
}

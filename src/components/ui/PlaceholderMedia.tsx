import { cn } from '../../lib/cn';

type PlaceholderMediaProps = {
  className?: string;
  label?: string;
  title?: string;
  accent?: 'geometric' | 'arched' | 'grid' | 'frame';
};

const accentMap: Record<NonNullable<PlaceholderMediaProps['accent']>, string> = {
  geometric:
    'before:absolute before:inset-6 before:border before:border-accent-gold/28 before:[clip-path:polygon(0_0,100%_0,78%_100%,0_100%)]',
  arched:
    'before:absolute before:inset-x-8 before:bottom-8 before:top-8 before:rounded-t-full before:border before:border-mist/12',
  grid:
    'before:absolute before:inset-5 before:bg-[linear-gradient(rgba(220,226,225,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(220,226,225,0.06)_1px,transparent_1px)] before:bg-[size:28px_28px]',
  frame:
    'before:absolute before:inset-4 before:rounded-[1.5rem] before:border before:border-accent-gold/18 after:absolute after:inset-x-14 after:top-7 after:h-px after:bg-accent-gold/36',
};

export function PlaceholderMedia({
  accent = 'grid',
  className,
  label = 'Imagen referencial',
  title = 'Espacio visual preparado para contenido final',
}: PlaceholderMediaProps) {
  return (
    <div
      className={cn(
        'group relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-4 shadow-[0_28px_90px_rgba(0,0,0,0.18)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_34px_110px_rgba(0,0,0,0.22)] sm:p-5',
        accentMap[accent],
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(231,156,31,0.18),transparent_34%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(33,33,33,0.78)_34%,rgba(18,18,18,0.96)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.26))]" />
      <div className="relative flex h-full min-h-[220px] flex-col justify-between rounded-[1.5rem] border border-white/8 bg-brand-blue/36 px-5 py-6 sm:px-6">
        <span className="inline-flex w-fit rounded-full border border-accent-gold/32 bg-accent-gold/10 px-3 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-accent-gold">
          {label}
        </span>
        <div>
          <div className="mb-4 h-px w-16 bg-mist/18 transition duration-500 group-hover:w-20" aria-hidden="true" />
          <p className="max-w-xs font-display text-[1.7rem] leading-tight text-mist sm:text-[1.95rem]">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}

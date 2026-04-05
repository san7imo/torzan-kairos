import { cn } from '../../lib/cn';

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
  tone?: 'light' | 'dark';
};

export function PageIntro({
  className,
  description,
  eyebrow,
  title,
  tone = 'light',
}: PageIntroProps) {
  const isDark = tone === 'dark';

  return (
    <div className={cn('max-w-3xl', className)}>
      <p
        className={cn(
          'text-[0.66rem] font-semibold uppercase tracking-[0.26em]',
          isDark ? 'text-accent-gold' : 'text-accent-gold',
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          'mt-4 font-display text-[2rem] leading-tight text-balance sm:text-[2.35rem] lg:text-[2.8rem]',
          isDark ? 'text-mist' : 'text-brand-blue',
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          'mt-5 text-[0.96rem] leading-8 sm:text-[1rem]',
          isDark ? 'text-mist/72' : 'text-brand-blue/72',
        )}
      >
        {description}
      </p>
    </div>
  );
}

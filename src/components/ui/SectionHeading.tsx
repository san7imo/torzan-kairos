import { cn } from '../../lib/cn';
import { Eyebrow } from './Eyebrow';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  invert?: boolean;
  className?: string;
};

export function SectionHeading({
  align = 'left',
  className,
  description,
  eyebrow,
  invert = false,
  title,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow ? (
        <Eyebrow className={invert ? 'text-accent-gold' : ''}>{eyebrow}</Eyebrow>
      ) : null}
      <h2
        className={cn(
          'mt-4 font-display font-medium text-[1.7rem] leading-[1.04] tracking-tight text-balance sm:text-[2.05rem] lg:text-[2.55rem]',
          invert ? 'text-mist' : 'text-brand-blue',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'mt-4 max-w-xl text-[0.86rem] leading-7 text-balance sm:text-[0.92rem] sm:leading-7',
            align === 'center' && 'mx-auto',
            invert ? 'text-mist/72' : 'text-brand-blue/70',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

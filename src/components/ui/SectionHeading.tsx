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
          'mt-5 font-display font-medium text-[1.95rem] leading-[1.04] tracking-tight text-balance sm:text-[2.45rem] lg:text-[3rem]',
          invert ? 'text-mist' : 'text-brand-blue',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'mt-5 max-w-2xl text-[0.95rem] leading-8 text-balance sm:text-[1rem] sm:leading-8',
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

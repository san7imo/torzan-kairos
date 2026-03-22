import type { PropsWithChildren } from 'react';
import { cn } from '../../lib/cn';
import { Container } from './Container';

type SectionProps = PropsWithChildren<{
  id?: string;
  className?: string;
  innerClassName?: string;
  tone?: 'transparent' | 'light' | 'deep' | 'dark';
  container?: boolean;
}>;

const toneClasses: Record<NonNullable<SectionProps['tone']>, string> = {
  transparent: '',
  light: 'bg-mist text-brand-blue',
  deep: 'bg-brand-blue text-mist',
  dark: 'bg-coal text-mist',
};

export function Section({
  children,
  className,
  container = true,
  id,
  innerClassName,
  tone = 'transparent',
}: SectionProps) {
  const content = container ? <Container className={innerClassName}>{children}</Container> : children;

  return (
    <section
      id={id}
      className={cn(
        'relative overflow-hidden py-18 sm:py-22 lg:py-28 xl:py-32',
        toneClasses[tone],
        className,
      )}
    >
      {content}
    </section>
  );
}

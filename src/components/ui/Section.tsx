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
  light: 'bg-[linear-gradient(180deg,#f0f0ed_0%,#e1e2e1_100%)] text-brand-blue',
  deep: 'bg-[linear-gradient(180deg,#232323_0%,#171717_100%)] text-mist',
  dark: 'bg-[linear-gradient(180deg,#1f1f1f_0%,#171717_100%)] text-mist',
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
        'relative flex min-h-[92svh] items-center overflow-hidden py-10 sm:min-h-[100svh] sm:py-12 lg:py-14 xl:py-16',
        toneClasses[tone],
        className,
      )}
    >
      <div className="w-full">{content}</div>
    </section>
  );
}

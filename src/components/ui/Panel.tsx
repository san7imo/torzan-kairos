import type { PropsWithChildren } from 'react';
import { cn } from '../../lib/cn';

type PanelProps = PropsWithChildren<{
  className?: string;
  tone?: 'light' | 'dark' | 'muted';
  padding?: 'md' | 'lg';
}>;

const toneClasses: Record<NonNullable<PanelProps['tone']>, string> = {
  light: 'border-brand-blue/10 bg-white text-brand-blue shadow-[0_22px_60px_rgba(33,33,33,0.08)]',
  dark: 'border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] text-mist shadow-[0_26px_70px_rgba(0,0,0,0.18)]',
  muted: 'border-brand-blue/10 bg-brand-blue/[0.035] text-brand-blue',
};

const paddingClasses: Record<NonNullable<PanelProps['padding']>, string> = {
  md: 'p-5 sm:p-6',
  lg: 'p-6 sm:p-8',
};

export function Panel({ children, className, padding = 'lg', tone = 'light' }: PanelProps) {
  return (
    <div className={cn('rounded-[1.95rem] border', toneClasses[tone], paddingClasses[padding], className)}>
      {children}
    </div>
  );
}

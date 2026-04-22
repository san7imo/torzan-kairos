import type { PropsWithChildren } from 'react';
import { cn } from '../../lib/cn';

type PanelProps = PropsWithChildren<{
  className?: string;
  tone?: 'light' | 'dark' | 'muted';
  padding?: 'md' | 'lg';
}>;

const toneClasses: Record<NonNullable<PanelProps['tone']>, string> = {
  light: 'border-brand-blue/10 bg-[linear-gradient(180deg,#f6f5f1_0%,#ecebe6_100%)] text-brand-blue shadow-[0_18px_42px_rgba(33,33,33,0.08)]',
  dark: 'border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] text-mist shadow-[0_20px_52px_rgba(0,0,0,0.16)]',
  muted: 'border-brand-blue/10 bg-brand-blue/[0.03] text-brand-blue',
};

const paddingClasses: Record<NonNullable<PanelProps['padding']>, string> = {
  md: 'p-4 sm:p-5',
  lg: 'p-5 sm:p-6',
};

export function Panel({ children, className, padding = 'lg', tone = 'light' }: PanelProps) {
  return (
    <div className={cn('rounded-[1.6rem] border', toneClasses[tone], paddingClasses[padding], className)}>
      {children}
    </div>
  );
}

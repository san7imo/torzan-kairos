import type { LucideIcon } from 'lucide-react';
import type { ContactDetail } from '../../types/site';
import { cn } from '../../lib/cn';

type ContactDetailCardProps = {
  detail: ContactDetail;
  icon: LucideIcon;
  tone?: 'light' | 'dark';
  className?: string;
};

export function ContactDetailCard({ className, detail, icon: Icon, tone = 'light' }: ContactDetailCardProps) {
  const isDark = tone === 'dark';
  const cardClassName = cn(
    'block rounded-[1.6rem] border p-5 transition duration-300',
    isDark
      ? 'border-white/10 bg-white/5 text-mist hover:border-accent-gold/35 hover:bg-white/8'
      : 'border-brand-blue/10 bg-white text-brand-blue shadow-[0_18px_50px_rgba(20,47,74,0.08)] hover:-translate-y-1 hover:border-accent-gold/30',
    className,
  );

  const content = (
    <div className="flex items-start gap-4">
      <span
        className={cn(
          'mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border text-accent-gold',
          isDark ? 'border-accent-gold/28 bg-accent-gold/10' : 'border-accent-gold/24 bg-accent-gold/8',
        )}
      >
        <Icon size={18} />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-gold">{detail.label}</p>
        <p className={cn('mt-2 text-sm leading-7', isDark ? 'text-mist' : 'text-brand-blue')}>{detail.value}</p>
        <p className={cn('mt-2 text-xs uppercase tracking-[0.14em]', isDark ? 'text-mist/46' : 'text-brand-blue/46')}>
          {detail.note}
        </p>
      </div>
    </div>
  );

  if (detail.href) {
    return (
      <a
        className={cardClassName}
        href={detail.href}
        rel="noreferrer"
        target={detail.kind === 'whatsapp' ? '_blank' : undefined}
      >
        {content}
      </a>
    );
  }

  return <div className={cardClassName}>{content}</div>;
}

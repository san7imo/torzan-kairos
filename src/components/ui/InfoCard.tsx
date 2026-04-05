import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

type InfoCardProps = {
  icon?: ReactNode;
  title: string;
  description: string;
  className?: string;
};

export function InfoCard({ className, description, icon, title }: InfoCardProps) {
  return (
    <article
      className={cn(
        'rounded-[1.8rem] border border-white/10 bg-white/6 p-6 transition duration-300 hover:-translate-y-1 hover:border-accent-gold/35 hover:bg-white/8',
        className,
      )}
    >
      {icon ? (
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-accent-gold/25 bg-accent-gold/10 text-accent-gold">
          {icon}
        </div>
      ) : null}
      <h3 className="font-display text-[1.7rem] leading-tight text-mist">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-mist/72">{description}</p>
    </article>
  );
}

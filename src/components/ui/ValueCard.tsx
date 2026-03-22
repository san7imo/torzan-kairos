import { cn } from '../../lib/cn';

type ValueCardProps = {
  index: number;
  title: string;
  description: string;
  className?: string;
};

export function ValueCard({ className, description, index, title }: ValueCardProps) {
  return (
    <article
      className={cn(
        'group rounded-[2rem] border border-brand-blue/10 bg-white p-7 shadow-[0_18px_60px_rgba(20,47,74,0.08)] transition duration-300 hover:-translate-y-1 hover:border-accent-gold/45',
        className,
      )}
    >
      <span className="text-xs font-semibold uppercase tracking-[0.26em] text-accent-gold">
        {String(index).padStart(2, '0')}
      </span>
      <h3 className="mt-5 font-display text-3xl leading-tight text-brand-blue">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-brand-blue/72">{description}</p>
    </article>
  );
}

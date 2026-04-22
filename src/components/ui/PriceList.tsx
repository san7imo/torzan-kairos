import type { ServicePriceItem } from '../../types/site';
import { cn } from '../../lib/cn';

const statusCopy = {
  confirmed: 'Confirmado',
  pending: 'Desde',
  consultation: 'Consultar',
} as const;

type PriceListProps = {
  items: ServicePriceItem[];
  className?: string;
};

export function PriceList({ className, items }: PriceListProps) {
  return (
    <div className={cn('grid gap-3', className)}>
      {items.map((item) => (
        <article
          key={item.label}
          className="rounded-[1.4rem] border border-brand-blue/10 bg-[linear-gradient(180deg,#f6f5f1_0%,#ecebe6_100%)] p-4 shadow-[0_16px_34px_rgba(33,33,33,0.08)] sm:p-5"
        >
          <div className="flex flex-col gap-3.5 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-xl">
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-accent-gold">
                {statusCopy[item.status]}
              </p>
              <h3 className="mt-2.5 font-display text-[1.25rem] leading-tight text-brand-blue sm:text-[1.4rem]">
                {item.label}
              </h3>
              <p className="mt-2.5 text-[0.82rem] leading-6 text-brand-blue/66">
                {item.note ?? 'Valor base dentro de la categoría actual.'}
              </p>
            </div>

            <div className="rounded-[1.1rem] border border-brand-blue/10 bg-brand-blue/[0.03] px-3.5 py-3 text-left sm:min-w-[8rem] sm:text-right">
              <p className="text-[0.52rem] font-semibold uppercase tracking-[0.18em] text-brand-blue/44">
                Precio
              </p>
              <p className="mt-2 font-display text-[1.35rem] leading-none text-brand-blue">
                {item.priceLabel}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

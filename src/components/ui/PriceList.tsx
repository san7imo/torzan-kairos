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
    <div className={cn('grid gap-4', className)}>
      {items.map((item) => (
        <article
          key={item.label}
          className="rounded-[1.7rem] border border-brand-blue/10 bg-white p-5 shadow-[0_18px_50px_rgba(33,33,33,0.08)] sm:p-6"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-xl">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-accent-gold">
                {statusCopy[item.status]}
              </p>
              <h3 className="mt-3 font-display text-[1.45rem] leading-tight text-brand-blue sm:text-[1.6rem]">
                {item.label}
              </h3>
              <p className="mt-3 text-sm leading-7 text-brand-blue/66">
                {item.note ?? 'Valor base dentro de la categoría actual.'}
              </p>
            </div>

            <div className="rounded-[1.35rem] border border-brand-blue/10 bg-brand-blue/[0.035] px-4 py-3 text-left sm:min-w-[9rem] sm:text-right">
              <p className="text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-brand-blue/44">
                Precio
              </p>
              <p className="mt-2 font-display text-[1.7rem] leading-none text-brand-blue">
                {item.priceLabel}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

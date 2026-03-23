import type { ServicePriceItem } from '../../types/site';
import { cn } from '../../lib/cn';

const statusCopy = {
  confirmed: 'Confirmado',
  pending: 'Pendiente',
  consultation: 'Consultar',
} as const;

const statusClasses = {
  confirmed: 'border-accent-gold/30 bg-accent-gold/10 text-accent-gold',
  pending: 'border-mist/16 bg-mist/10 text-mist',
  consultation: 'border-white/16 bg-white/8 text-mist/80',
} as const;

type PriceTableProps = {
  items: ServicePriceItem[];
  className?: string;
};

export function PriceTable({ className, items }: PriceTableProps) {
  return (
    <div className={cn('overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 shadow-[0_20px_60px_rgba(0,0,0,0.16)] backdrop-blur-sm', className)}>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-white/10">
              <th className="px-6 py-5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-accent-gold">Servicio</th>
              <th className="px-6 py-5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-accent-gold">Precio</th>
              <th className="px-6 py-5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-accent-gold">Estado</th>
              <th className="px-6 py-5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-accent-gold">Observación</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.label} className="border-b border-white/8 last:border-b-0">
                <td className="px-6 py-5 text-sm leading-7 text-mist">{item.label}</td>
                <td className="px-6 py-5 text-sm font-semibold uppercase tracking-[0.08em] text-accent-gold">{item.priceLabel}</td>
                <td className="px-6 py-5">
                  <span className={cn('inline-flex rounded-full border px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em]', statusClasses[item.status])}>
                    {statusCopy[item.status]}
                  </span>
                </td>
                <td className="px-6 py-5 text-sm leading-7 text-mist/68">{item.note ?? 'Precio base sin observación adicional.'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

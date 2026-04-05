import { ArrowRight } from 'lucide-react';
import type { ServiceCategory, ServicePresentation } from '../../types/site';
import { Button } from './Button';
import { ImagePanel } from './ImagePanel';
import { Panel } from './Panel';
import { WhatsAppCTA } from './WhatsAppCTA';

function getStartingPrice(priceLabels: string[]) {
  const values = priceLabels.flatMap((label) => {
    const match = label.match(/\d+/);

    return match ? [Number(match[0])] : [];
  });

  return values.length ? `${Math.min(...values)}€` : 'consultar';
}

type ServiceCardProps = {
  service: ServiceCategory;
  presentation: ServicePresentation;
};

export function ServiceCard({ presentation, service }: ServiceCardProps) {
  const startingPrice = getStartingPrice(presentation.prices.map((item) => item.priceLabel));

  return (
    <Panel className="flex h-full flex-col" padding="md" tone="light">
      <ImagePanel
        alt={presentation.heroAsset.alt}
        className="min-h-[240px]"
        imgClassName="object-cover object-center"
        label={service.shortTitle}
        src={presentation.heroAsset.src}
        title={service.mediaTitle}
      />

      <div className="mt-6 flex items-start justify-between gap-4">
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-accent-gold">
            Servicio
          </p>
          <h3 className="mt-3 font-display text-[1.85rem] leading-tight text-brand-blue">
            {service.shortTitle}
          </h3>
        </div>

        <div className="min-w-[6.8rem] rounded-[1.35rem] border border-brand-blue/10 bg-brand-blue/[0.035] px-4 py-3 text-right">
          <p className="text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-brand-blue/44">
            Desde
          </p>
          <p className="mt-2 font-display text-[1.7rem] leading-none text-brand-blue">{startingPrice}</p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-7 text-brand-blue/72">{service.summary}</p>

      <div className="mt-5 flex flex-wrap gap-2 text-[0.66rem] uppercase tracking-[0.14em] text-brand-blue/46">
        {service.serviceList.slice(0, 2).map((item) => (
          <span key={item} className="rounded-full border border-brand-blue/10 px-3 py-2">
            {item}
          </span>
        ))}
      </div>

      <div className="mt-7 flex flex-col gap-3">
        <WhatsAppCTA className="w-full" label="Reservar por WhatsApp" message={presentation.whatsappMessage} />
        <Button className="w-full" to={`/servicios/${service.slug}`} variant="ghost">
          Ver categoría
          <ArrowRight size={16} />
        </Button>
      </div>
    </Panel>
  );
}

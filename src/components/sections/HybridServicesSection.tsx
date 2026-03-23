import { ArrowRight } from 'lucide-react';
import { serviceCategories, servicePresentationBySlug } from '../../data/services';
import { Reveal } from '../common/Reveal';
import { Button } from '../ui/Button';
import { ImagePanel } from '../ui/ImagePanel';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

export function HybridServicesSection() {
  return (
    <Section tone="light">
      <SectionHeading
        eyebrow="Servicios destacados"
        title="La línea de servicios acompaña la marca con una atención cuidada, clara y orientada al detalle."
        description="Cada categoría presenta su enfoque, precios base y acceso directo a reserva desde el mismo lenguaje visual del sitio."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {serviceCategories.map((service, index) => {
          const presentation = servicePresentationBySlug[service.slug];

          return (
            <Reveal key={service.slug} delay={index * 0.06}>
              <article className="flex h-full flex-col rounded-[1.9rem] border border-brand-blue/10 bg-white p-5 shadow-[0_20px_60px_rgba(20,47,74,0.08)] sm:p-6">
                <ImagePanel
                  alt={presentation.heroAsset.alt}
                  className="min-h-[220px]"
                  imgClassName="object-cover object-center"
                  label={service.shortTitle}
                  src={presentation.heroAsset.src}
                  title={service.mediaTitle}
                />
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-accent-gold">Servicio</p>
                <h3 className="mt-4 font-display text-[1.85rem] leading-tight text-brand-blue">{service.shortTitle}</h3>
                <p className="mt-4 text-sm leading-8 text-brand-blue/72">{service.summary}</p>
                <p className="mt-5 text-[0.68rem] uppercase tracking-[0.14em] text-brand-blue/46">
                  {presentation.prices.length} servicios base disponibles
                </p>
                <Button className="mt-7 w-full" to={`/servicios/${service.slug}`} variant="ghost">
                  Ver categoría
                  <ArrowRight size={16} />
                </Button>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

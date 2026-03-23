import { ArrowRight, CalendarCheck2 } from 'lucide-react';
import { serviceCategories, servicePresentationBySlug } from '../data/services';
import { pageHeroAssets } from '../data/media';
import { pageHeroes, pageMetadata } from '../content/site';
import { Reveal } from '../components/common/Reveal';
import { PageHero } from '../components/layout/PageHero';
import { Button } from '../components/ui/Button';
import { ImagePanel } from '../components/ui/ImagePanel';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { WhatsAppCTA } from '../components/ui/WhatsAppCTA';
import { usePageMetadata } from '../hooks/usePageMetadata';

export function ServicesPage() {
  usePageMetadata(pageMetadata.services);

  return (
    <>
      <PageHero
        eyebrow={pageHeroes.services.eyebrow}
        title={pageHeroes.services.title}
        description={pageHeroes.services.description}
        aside={
          <ImagePanel
            alt={pageHeroAssets.services.alt}
            className="min-h-[420px]"
            imgClassName="object-cover object-center"
            label={pageHeroAssets.services.label}
            src={pageHeroAssets.services.src}
            title={pageHeroAssets.services.title}
          />
        }
      />

      <Section className="pt-10 sm:pt-12 lg:pt-14" tone="light">
        <SectionHeading
          eyebrow="Reserva tu cita"
          title="Elige tu categoría y continúa directo a una reserva clara y rápida."
          description="Presentamos cada servicio con una lectura más comercial: imagen, referencia rápida y acceso directo a WhatsApp."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {serviceCategories.map((service, index) => {
            const presentation = servicePresentationBySlug[service.slug];
            const featuredPrice = presentation.prices[0];

            return (
              <Reveal key={service.slug} delay={index * 0.06}>
                <article className="overflow-hidden rounded-[2.2rem] border border-brand-blue/10 bg-white shadow-[0_20px_60px_rgba(20,47,74,0.08)]">
                  <ImagePanel
                    alt={presentation.heroAsset.alt}
                    className="min-h-[280px] rounded-none border-0 shadow-none"
                    imgClassName="object-cover object-center"
                    label={service.shortTitle}
                    src={presentation.heroAsset.src}
                    title={service.mediaTitle}
                  />
                  <div className="p-6 sm:p-7">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue/10 bg-brand-blue/[0.04] px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-brand-blue/62">
                        <CalendarCheck2 size={14} />
                        Reserva disponible
                      </span>
                      <span className="inline-flex rounded-full border border-accent-gold/30 bg-accent-gold/10 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-accent-gold">
                        {featuredPrice?.priceLabel ?? 'Consultar'}
                      </span>
                    </div>
                    <h2 className="mt-5 font-display text-[1.7rem] leading-tight text-brand-blue sm:text-[2rem]">
                      {service.title}
                    </h2>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-brand-blue/72">{service.summary}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.serviceList.slice(0, 3).map((item) => (
                        <span
                          key={`${service.slug}-${item}`}
                          className="rounded-full border border-brand-blue/10 bg-brand-blue/[0.03] px-3 py-2 text-[0.68rem] uppercase tracking-[0.12em] text-brand-blue/58"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <WhatsAppCTA className="sm:w-auto" label="Reservar por WhatsApp" message={presentation.whatsappMessage} />
                      <Button className="sm:w-auto" to={`/servicios/${service.slug}`} variant="ghost">
                        Ver detalle
                        <ArrowRight size={16} />
                      </Button>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>
    </>
  );
}

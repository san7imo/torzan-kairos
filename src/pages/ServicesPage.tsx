import { serviceCategories, servicePresentationBySlug } from '../data/services';
import { pageHeroAssets } from '../data/media';
import { pageHeroes, pageMetadata } from '../content/site';
import { Reveal } from '../components/common/Reveal';
import { PageHero } from '../components/layout/PageHero';
import { ImagePanel } from '../components/ui/ImagePanel';
import { MetricBand } from '../components/ui/MetricBand';
import { PageIntro } from '../components/ui/PageIntro';
import { Panel } from '../components/ui/Panel';
import { Section } from '../components/ui/Section';
import { ServiceCard } from '../components/ui/ServiceCard';
import { WhatsAppCTA } from '../components/ui/WhatsAppCTA';
import { whatsappMessages } from '../data/whatsapp';
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
          <div className="space-y-5">
            <ImagePanel
              alt={pageHeroAssets.services.alt}
              className="min-h-[420px]"
              imgClassName="object-cover object-center"
              label={pageHeroAssets.services.label}
              src={pageHeroAssets.services.src}
              title={pageHeroAssets.services.title}
            />

            <Panel tone="dark">
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.26em] text-accent-gold">
                Reserva directa
              </p>
              <p className="mt-4 font-display text-[1.65rem] leading-tight text-mist">
                Categorías claras, precios base visibles y acceso inmediato a WhatsApp.
              </p>
              <MetricBand
                className="mt-6"
                items={[
                  { value: '4', label: 'Categorías' },
                  { value: 'Desde 3€', label: 'Tarifas base' },
                  { value: 'WhatsApp', label: 'Reservas' },
                ]}
                tone="dark"
              />
            </Panel>
          </div>
        }
      />

      <Section className="pt-10 sm:pt-12 lg:pt-14" tone="light">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <PageIntro
            eyebrow="Reserva tu cita"
            title="Elige tu categoría y continúa directo a una reserva clara y rápida."
            description="Presentamos cada servicio con una lectura más comercial: imagen, precio base y acceso directo a WhatsApp."
          />

          <WhatsAppCTA
            className="sm:w-auto"
            label="Reservar por WhatsApp"
            message={whatsappMessages.contactBooking}
          />
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {serviceCategories.map((service, index) => {
            const presentation = servicePresentationBySlug[service.slug];

            return (
              <Reveal key={service.slug} delay={index * 0.06}>
                <div className="h-full">
                  <ServiceCard presentation={presentation} service={service} />
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>
    </>
  );
}

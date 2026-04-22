import { ArrowRight } from 'lucide-react';
import { serviceCategories, servicePresentationBySlug } from '../../data/services';
import { homeInstitutionalCarouselAssets } from '../../data/media';
import { Reveal } from '../common/Reveal';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { WhatsAppCTA } from '../ui/WhatsAppCTA';

function getStartingPrice(priceLabels: string[]) {
  const values = priceLabels.flatMap((label) => {
    const match = label.match(/\d+/);

    return match ? [Number(match[0])] : [];
  });

  return values.length ? `desde ${Math.min(...values)}€` : 'consultar';
}

export function HybridServicesSection() {
  const featureAsset = homeInstitutionalCarouselAssets[0];

  return (
    <Section
      className="h-[100svh] min-h-0 max-h-[100svh] bg-[radial-gradient(circle_at_top,rgba(231,156,31,0.08),transparent_16%),linear-gradient(180deg,#14181f_0%,#10141a_100%)]"
      tone="transparent"
    >
      <div>
        <SectionHeading
          description="Mira nuestro catalogo de servicios y reserva en linea"
          eyebrow="Nuestros servicios"
          title="Servicios pensados para cuidar tu imagen."
          invert
        />
      </div>

      <div className="mt-14 grid gap-0 xl:grid-cols-[1.18fr_0.82fr_0.82fr] xl:grid-rows-2">
        <Reveal className="xl:row-span-2">
          <div className="group relative isolate min-h-[360px] overflow-hidden border border-white/10 bg-[#0f141a] shadow-[0_24px_64px_rgba(0,0,0,0.24)] sm:min-h-[440px] xl:h-full">
            <img
              alt={featureAsset?.alt}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
              loading="lazy"
              src={featureAsset?.src}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,12,18,0.16)_0%,rgba(8,12,18,0.3)_34%,rgba(8,12,18,0.84)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(231,156,31,0.12),transparent_24%)] opacity-70 transition duration-300 group-hover:opacity-100" />

            <div className="absolute inset-0 flex items-center justify-center p-6">
              <Button
                className="translate-y-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:w-auto"
                to="/servicios"
                variant="primary"
              >
                Ver todos los servicios
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </Reveal>

        {serviceCategories.map((service, index) => {
          const presentation = servicePresentationBySlug[service.slug];
          const startingPrice = getStartingPrice(presentation.prices.map((item) => item.priceLabel));

          return (
            <Reveal key={service.slug} delay={index * 0.06}>
              <article className="group relative isolate min-h-[280px] overflow-hidden border border-white/10 bg-[#0f141a] shadow-[0_20px_54px_rgba(0,0,0,0.22)] sm:min-h-[320px]">
                <img
                  alt={presentation.heroAsset.alt}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                  src={presentation.heroAsset.src}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,12,18,0.22)_0%,rgba(8,12,18,0.34)_28%,rgba(8,12,18,0.92)_100%)] transition duration-300 group-hover:bg-[linear-gradient(180deg,rgba(8,12,18,0.44)_0%,rgba(8,12,18,0.62)_28%,rgba(8,12,18,0.97)_100%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,12,18,0.08)_0%,rgba(8,12,18,0.12)_34%,rgba(8,12,18,0.24)_100%)] opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(231,156,31,0.12),transparent_30%)]" />

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <div className="transition duration-300 md:translate-y-16 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                    <p className="text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-accent-gold">
                      {service.shortTitle}
                    </p>
                    <div className="mt-3 flex items-end justify-between gap-4">
                      <h3 className="font-display text-[1.65rem] leading-tight text-mist">
                        {service.shortTitle}
                      </h3>
                      <p className="text-[0.9rem] font-semibold uppercase tracking-[0.14em] text-mist/86">
                        {startingPrice}
                      </p>
                    </div>
                    <p className="mt-3 max-w-[28rem] text-[0.92rem] leading-7 text-mist/78">
                      {service.summary}
                    </p>

                    <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                      <WhatsAppCTA
                        className="sm:w-auto"
                        label="Reservar"
                        message={presentation.whatsappMessage}
                        variant="primary"
                      />
                      <Button className="sm:w-auto" to={`/servicios/${service.slug}`} variant="secondary">
                        Ver detalles
                        <ArrowRight size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

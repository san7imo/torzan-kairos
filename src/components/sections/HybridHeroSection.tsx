import { ArrowRight, Sparkles } from 'lucide-react';
import { homeHero, homeHeroMetrics } from '../../content/site';
import { storyIdentityAsset, homeHeroAsset, homeHeroSideAsset } from '../../data/media';
import { whatsappMessages } from '../../data/whatsapp';
import { Reveal } from '../common/Reveal';
import { Button } from '../ui/Button';
import { ImagePanel } from '../ui/ImagePanel';
import { MetricBand } from '../ui/MetricBand';
import { Panel } from '../ui/Panel';
import { Section } from '../ui/Section';
import { WhatsAppCTA } from '../ui/WhatsAppCTA';

export function HybridHeroSection() {
  const sideAsset = homeHeroSideAsset;

  return (
    <Section className="isolate pt-10 sm:pt-14 lg:pt-18" tone="transparent">
      <div className="absolute inset-0 -z-10 overflow-hidden rounded-[2.5rem]">
        <img
          alt={homeHeroAsset.alt}
          className="h-full w-full object-cover object-center opacity-28"
          src={homeHeroAsset.src}
        />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(33,33,33,0.94),rgba(33,33,33,0.78)_40%,rgba(18,18,18,0.9)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(231,189,89,0.18),transparent_24%)]" />
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-end lg:gap-12">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-gold/24 bg-accent-gold/10 px-4 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-accent-gold">
            <Sparkles size={14} />
            {homeHero.eyebrow}
          </span>
          <h1 className="mt-6 max-w-5xl font-display font-medium text-[2.7rem] leading-[0.96] tracking-tight text-balance text-mist sm:text-[3.4rem] lg:text-[4.2rem] xl:text-[4.85rem]">
            {homeHero.title}
          </h1>
          <p className="mt-5 max-w-2xl text-[0.98rem] leading-8 text-mist/72 sm:text-[1.02rem]">
            {homeHero.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to={homeHero.primaryAction.href} variant="primary">
              {homeHero.primaryAction.label}
            </Button>
            <WhatsAppCTA
              label={homeHero.secondaryAction.label}
              message={whatsappMessages.contactBooking}
              variant="secondary"
            />
          </div>

          <MetricBand className="mt-10" items={homeHeroMetrics} tone="dark" />

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {homeHero.highlights.map((item, index) => (
              <Reveal key={item} delay={index * 0.08}>
                <div className="rounded-[1.45rem] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm leading-7 text-mist/74">
                  {item}
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative lg:pl-10">
            <ImagePanel
              alt={sideAsset.alt}
              className="min-h-[470px] sm:min-h-[560px]"
              imgClassName="object-cover object-center"
              label={sideAsset.label}
              src={sideAsset.src}
              title={sideAsset.title}
            />

            <div className="absolute -left-4 bottom-8 hidden w-[230px] lg:block">
              <div className="group relative isolate overflow-hidden rounded-[1.6rem] border border-white/12 shadow-[0_24px_70px_rgba(0,0,0,0.26)]">
                <img
                  alt={storyIdentityAsset.alt}
                  className="h-[270px] w-full object-cover object-center transition duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                  src={storyIdentityAsset.src}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(33,33,33,0.1),rgba(18,16,14,0.88)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-accent-gold">
                    {storyIdentityAsset.label}
                  </p>
                  <p className="mt-2 font-display text-[1.32rem] leading-tight text-mist">
                    Marca con materialidad, oficio y presencia visual.
                  </p>
                </div>
              </div>
            </div>

            <Panel className="mt-5 max-w-[21rem] sm:absolute sm:bottom-5 sm:right-5 sm:mt-0" padding="md" tone="dark">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-accent-gold">
                Academia + servicios
              </p>
              <p className="mt-3 font-display text-[1.55rem] leading-tight text-mist sm:text-[1.75rem]">
                Una presencia premium que prioriza claridad, ritmo y conversión.
              </p>
              <p className="mt-3 text-sm leading-7 text-mist/66">
                El recorrido presenta formación, atención y marca sin saturar el contenido ni perder identidad.
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm text-mist/62">
                Reserva y orientación directa
                <ArrowRight size={16} />
              </span>
            </Panel>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

import { ArrowRight, Sparkles } from 'lucide-react';
import { homeHero, homeHeroMetrics } from '../../content/site';
import { homeHeroAsset } from '../../data/media';
import { whatsappMessages } from '../../data/whatsapp';
import { Reveal } from '../common/Reveal';
import { Button } from '../ui/Button';
import { ImagePanel } from '../ui/ImagePanel';
import { Section } from '../ui/Section';
import { WhatsAppCTA } from '../ui/WhatsAppCTA';

export function HybridHeroSection() {
  const primaryAsset = homeHeroAsset;

  return (
    <Section className="isolate pt-0 pb-12 sm:pb-16 lg:pb-18" tone="transparent">
      <div className="relative isolate rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(24,24,24,0.9),rgba(18,18,18,0.78))] p-4 shadow-[0_24px_72px_rgba(0,0,0,0.16)] sm:p-5 lg:p-6 xl:p-7">
        <div className="absolute inset-0 -z-10 rounded-[2.25rem] bg-[radial-gradient(circle_at_top_right,rgba(231,189,89,0.12),transparent_22%)]" />
        <div className="grid gap-6 lg:grid-cols-[1fr_0.82fr] lg:items-center lg:gap-8 xl:gap-10">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-gold/18 bg-accent-gold/[0.06] px-3.5 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-accent-gold">
              <Sparkles size={12} />
              {homeHero.eyebrow}
            </span>
            <h1 className="mt-4 max-w-[12.5ch] font-display font-medium text-[2.1rem] leading-[0.92] tracking-tight text-balance text-mist sm:text-[2.55rem] lg:text-[3.15rem] xl:text-[3.45rem]">
              {homeHero.title}
            </h1>
            <p className="mt-4 max-w-[30rem] text-[0.9rem] leading-6.5 text-mist/64 sm:text-[0.95rem] sm:leading-7">
              {homeHero.description}
            </p>

            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
              <Button to={homeHero.primaryAction.href} variant="primary">
                {homeHero.primaryAction.label}
              </Button>
              <WhatsAppCTA
                label={homeHero.secondaryAction.label}
                message={whatsappMessages.contactBooking}
                variant="secondary"
              />
            </div>

            <div className="mt-6 grid gap-3 border-t border-white/8 pt-4 sm:grid-cols-3">
              {homeHeroMetrics.map((item, index) => (
                <div
                  key={item.label}
                  className={index < homeHeroMetrics.length - 1 ? 'sm:border-r sm:border-white/8 sm:pr-4' : ''}
                >
                  <p className="text-[0.55rem] font-semibold uppercase tracking-[0.24em] text-accent-gold/82">
                    {item.label}
                  </p>
                  <p className="mt-2 font-display text-[1.15rem] leading-none text-mist sm:text-[1.3rem]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-2 text-[0.64rem] uppercase tracking-[0.16em] text-mist/38 sm:grid-cols-2">
              {homeHero.highlights.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative">
              <ImagePanel
                alt={primaryAsset.alt}
                className="min-h-[250px] sm:min-h-[340px] lg:min-h-[390px]"
                imgClassName="object-cover object-[60%_20%]"
                label={primaryAsset.label}
                showLabel={false}
                showTitle={false}
                src={primaryAsset.src}
                title={primaryAsset.title}
              />

              <div className="pointer-events-none absolute inset-x-3 bottom-3 rounded-[1.05rem] border border-white/10 bg-[linear-gradient(180deg,rgba(16,16,16,0.74),rgba(16,16,16,0.56))] px-3.5 py-3 backdrop-blur-sm sm:inset-x-4 sm:bottom-4">
                <p className="text-[0.54rem] font-semibold uppercase tracking-[0.24em] text-accent-gold/84">
                  Trayectoria viva
                </p>
                <div className="mt-2 flex items-end justify-between gap-3">
                  <p className="max-w-[15rem] font-display text-[1rem] leading-tight text-mist sm:text-[1.18rem]">
                    Más de 16 años formando talento en Madrid.
                  </p>
                  <span className="hidden items-center gap-2 text-[0.82rem] text-mist/56 sm:inline-flex">
                    Ver cursos
                    <ArrowRight size={15} />
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

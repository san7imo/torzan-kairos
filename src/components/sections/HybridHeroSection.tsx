import { ArrowRight, Sparkles } from 'lucide-react';
import { homeHero, homeGalleryAssets } from '../../content/site';
import { homeHeroAsset } from '../../data/media';
import { Reveal } from '../common/Reveal';
import { Button } from '../ui/Button';
import { ImagePanel } from '../ui/ImagePanel';
import { Section } from '../ui/Section';

export function HybridHeroSection() {
  const sideAsset = homeGalleryAssets[0];

  return (
    <Section className="isolate pt-10 sm:pt-14 lg:pt-18" tone="transparent">
      <div className="absolute inset-0 -z-10 overflow-hidden rounded-[2.5rem]">
        <img
          alt={homeHeroAsset.alt}
          className="h-full w-full object-cover object-center opacity-28"
          src={homeHeroAsset.src}
        />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(9,23,38,0.9),rgba(9,23,38,0.72)_40%,rgba(9,23,38,0.84)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(231,156,31,0.16),transparent_24%)]" />
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-end lg:gap-12">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-gold/24 bg-accent-gold/10 px-4 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-accent-gold">
            <Sparkles size={14} />
            {homeHero.eyebrow}
          </span>
          <h1 className="mt-6 max-w-5xl font-display font-medium text-[2.55rem] leading-[0.99] tracking-tight text-balance text-mist sm:text-[3.2rem] lg:text-[3.95rem] xl:text-[4.35rem]">
            {homeHero.title}
          </h1>
          <p className="mt-5 max-w-2xl text-[0.96rem] leading-8 text-mist/72 sm:text-[1rem]">
            {homeHero.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to={homeHero.primaryAction.href} variant="primary">
              {homeHero.primaryAction.label}
            </Button>
            <Button to={homeHero.secondaryAction.href} variant="secondary">
              {homeHero.secondaryAction.label}
              <ArrowRight size={16} />
            </Button>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {homeHero.highlights.map((item, index) => (
              <Reveal key={item} delay={index * 0.08}>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-mist/74 backdrop-blur-sm">
                  {item}
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <ImagePanel
            alt={sideAsset.alt}
            className="min-h-[470px]"
            imgClassName="object-cover object-center"
            label={sideAsset.label}
            src={sideAsset.src}
            title={sideAsset.title}
          />
        </Reveal>
      </div>
    </Section>
  );
}

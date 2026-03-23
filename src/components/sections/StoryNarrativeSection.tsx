import { storyEditorialCards } from '../../content/site';
import { storyNarrativeAsset } from '../../data/media';
import { Reveal } from '../common/Reveal';
import { ImagePanel } from '../ui/ImagePanel';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

export function StoryNarrativeSection() {
  return (
    <Section tone="light">
      <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow="Origen de Torzan Kairos"
            title="Una historia que nace desde la decisión de formar con exigencia, sensibilidad y cercanía humana."
            description="Desde 2010, la marca ha sostenido una visión donde la técnica, la ética y el desarrollo del ser hacen parte del mismo camino."
          />

          <div className="mt-10 rounded-[2rem] border border-brand-blue/10 bg-brand-blue p-8 text-mist shadow-[0_24px_60px_rgba(20,47,74,0.18)]">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-gold">
              Fundadora
            </p>
            <h3 className="mt-4 font-display text-4xl leading-tight text-balance">
              Mariela Torres Zambrano
            </h3>
            <p className="mt-5 text-sm leading-8 text-mist/74">
              Su impulso dio forma a una academia que entiende la belleza como oficio,
              responsabilidad y proyección profesional.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6">
          {storyEditorialCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.08}>
              <article className="rounded-[2rem] border border-brand-blue/10 bg-white p-7 shadow-[0_18px_60px_rgba(20,47,74,0.08)]">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-accent-gold">
                  {card.eyebrow}
                </p>
                <h3 className="mt-4 font-display text-3xl leading-tight text-brand-blue">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-8 text-brand-blue/72">{card.description}</p>
              </article>
            </Reveal>
          ))}

          <Reveal delay={0.18}>
            <ImagePanel
              alt={storyNarrativeAsset.alt}
              className="min-h-[320px]"
              imgClassName="object-cover object-center"
              label={storyNarrativeAsset.label}
              src={storyNarrativeAsset.src}
              title={storyNarrativeAsset.title}
            />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

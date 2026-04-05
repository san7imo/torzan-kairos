import { storyEditorialCards } from '../../content/site';
import { storyNarrativeAsset } from '../../data/media';
import { Reveal } from '../common/Reveal';
import { ImagePanel } from '../ui/ImagePanel';
import { Panel } from '../ui/Panel';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

export function StoryNarrativeSection() {
  return (
    <Section tone="light">
      <div className="grid gap-10 xl:grid-cols-[0.88fr_1.12fr] xl:items-start">
        <Reveal className="xl:pr-8">
          <SectionHeading
            eyebrow="Origen de Torzan Kairos"
            title="Una historia que nace desde la decisión de formar con exigencia, sensibilidad y cercanía humana."
            description="Desde 2010, la marca ha sostenido una visión donde la técnica, la ética y el desarrollo del ser hacen parte del mismo camino."
          />

          <Panel className="mt-10" tone="muted">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-gold">
              Fundadora
            </p>
            <h3 className="mt-4 font-display text-4xl leading-tight text-balance text-brand-blue">
              Mariela Torres Zambrano
            </h3>
            <p className="mt-5 text-sm leading-8 text-brand-blue/72">
              Su impulso dio forma a una academia que entiende la belleza como oficio,
              responsabilidad y proyección profesional.
            </p>
          </Panel>
        </Reveal>

        <div className="grid gap-6">
          <div className="grid gap-5 lg:grid-cols-2">
            {storyEditorialCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.08}>
                <Panel className="h-full" tone="light">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-accent-gold">
                    {card.eyebrow}
                  </p>
                  <h3 className="mt-4 font-display text-3xl leading-tight text-brand-blue">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-brand-blue/72">{card.description}</p>
                </Panel>
              </Reveal>
            ))}
          </div>

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

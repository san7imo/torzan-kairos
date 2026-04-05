import { storyJourneyPoints, storyRootsCards } from '../../content/site';
import { storyIdentityAsset } from '../../data/media';
import { Reveal } from '../common/Reveal';
import { ImagePanel } from '../ui/ImagePanel';
import { Panel } from '../ui/Panel';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

export function StoryIdentitySection() {
  return (
    <Section tone="transparent">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <Reveal>
            <SectionHeading
              eyebrow="Raíces y proyección"
              title="Colombia y España dan forma a una identidad que se siente cercana, rigurosa y contemporánea."
              description="Esa doble raíz sostiene la personalidad de la marca y su manera de enseñar, atender y proyectarse."
              invert
            />
          </Reveal>

          <div className="mt-10 grid gap-5">
            {storyRootsCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.08}>
                <Panel tone="dark">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-accent-gold">
                    {card.eyebrow}
                  </p>
                  <h3 className="mt-4 font-display text-3xl leading-tight text-mist">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-mist/72">{card.description}</p>
                </Panel>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <Reveal delay={0.1}>
            <ImagePanel
              alt={storyIdentityAsset.alt}
              className="min-h-[360px]"
              imgClassName="object-cover object-center"
              label={storyIdentityAsset.label}
              src={storyIdentityAsset.src}
              title={storyIdentityAsset.title}
            />
          </Reveal>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {storyJourneyPoints.map((point, index) => (
              <Reveal key={point.step} delay={0.12 + index * 0.08}>
                <Panel className="h-full" padding="md" tone="dark">
                  <div className="flex items-start gap-4">
                    <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent-gold/30 bg-accent-gold/10 text-xs font-semibold tracking-[0.2em] text-accent-gold">
                      {point.step}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl leading-tight text-mist">
                        {point.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-mist/72">{point.description}</p>
                    </div>
                  </div>
                </Panel>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

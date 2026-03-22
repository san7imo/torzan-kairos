import { storyJourneyPoints, storyRootsCards } from '../../content/site';
import { Reveal } from '../common/Reveal';
import { PlaceholderMedia } from '../ui/PlaceholderMedia';
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
              title="Colombia y España no aparecen como referencia decorativa, sino como estructura de identidad."
              description="La historia de Torzan Kairos se apoya en esa doble raíz para comunicar oficio, amplitud de mirada y dirección futura."
              invert
            />
          </Reveal>

          <div className="mt-10 grid gap-5">
            {storyRootsCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.08}>
                <article className="rounded-[2rem] border border-white/10 bg-white/6 p-7 backdrop-blur-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-accent-gold">
                    {card.eyebrow}
                  </p>
                  <h3 className="mt-4 font-display text-3xl leading-tight text-mist">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-sm leading-8 text-mist/72">{card.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <Reveal delay={0.1}>
            <PlaceholderMedia
              accent="arched"
              className="min-h-[360px]"
              label="Imagen referencial"
              title="Composición editorial lista para reemplazar por material visual de historia"
            />
          </Reveal>

          <div className="mt-6 grid gap-4">
            {storyJourneyPoints.map((point, index) => (
              <Reveal key={point.step} delay={0.12 + index * 0.08}>
                <article className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6">
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
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

import { storyInstitutionalCards } from '../../content/site';
import { identityAssets } from '../../data/media';
import { Reveal } from '../common/Reveal';
import { ImagePanel } from '../ui/ImagePanel';
import { Panel } from '../ui/Panel';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

export function StoryInstitutionSection() {
  const certificateAsset = identityAssets[1];

  return (
    <Section tone="light">
      <div className="grid gap-10 xl:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Misión, visión y objetivos"
            title="La dimensión institucional se expresa con claridad, sin perder la calidez ni la sensibilidad de la historia."
            description="Estos ejes recogen la manera en que Torzan Kairos entiende la enseñanza, la proyección y el respeto por la profesión."
          />

          <div className="mt-8 grid gap-5">
            <ImagePanel
              alt={certificateAsset.alt}
              className="min-h-[280px] sm:min-h-[360px]"
              imgClassName="object-cover object-[center_28%]"
              label={certificateAsset.label}
              src={certificateAsset.src}
              title={certificateAsset.title}
            />

            <Panel padding="md" tone="muted">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-accent-gold">
                Base institucional
              </p>
              <p className="mt-3 font-display text-[1.55rem] leading-tight text-brand-blue">
                El relato institucional debe sentirse serio, claro y suficientemente humano.
              </p>
              <p className="mt-4 text-sm leading-7 text-brand-blue/72">
                La página Historia no vende por insistencia. Vende porque ordena la trayectoria, el
                propósito y la manera en que Torzan Kairos entiende su oficio.
              </p>
            </Panel>
          </div>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {storyInstitutionalCards.map((card, index) => (
            <Reveal key={card.label} delay={index * 0.08}>
              <Panel className="h-full" tone="light">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-gold">
                  {card.label}
                </p>
                <h3 className="mt-5 font-display text-3xl leading-tight text-brand-blue">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-brand-blue/72">{card.description}</p>
              </Panel>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

import { storyInstitutionalCards } from '../../content/site';
import { Reveal } from '../common/Reveal';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

export function StoryInstitutionSection() {
  return (
    <Section tone="light">
      <SectionHeading
        eyebrow="Misión, visión y objetivos"
        title="La dimensión institucional se expresa con claridad, sin perder la calidez ni la sensibilidad de la historia."
        description="Estos ejes recogen la manera en que Torzan Kairos entiende la enseñanza, la proyección y el respeto por la profesión."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {storyInstitutionalCards.map((card, index) => (
          <Reveal key={card.label} delay={index * 0.08}>
            <article className="flex h-full flex-col rounded-[2rem] border border-brand-blue/10 bg-white p-7 shadow-[0_18px_60px_rgba(20,47,74,0.08)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-gold">
                {card.label}
              </p>
              <h3 className="mt-5 font-display text-3xl leading-tight text-brand-blue">
                {card.title}
              </h3>
              <p className="mt-4 text-sm leading-8 text-brand-blue/72">{card.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

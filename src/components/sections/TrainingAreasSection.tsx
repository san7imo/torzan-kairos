import { trainingAreas } from '../../content/site';
import { Reveal } from '../common/Reveal';
import { PlaceholderMedia } from '../ui/PlaceholderMedia';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

export function TrainingAreasSection() {
  return (
    <Section tone="deep">
      <SectionHeading
        eyebrow="Áreas de formación"
        title="Disciplinas que convierten sensibilidad, técnica y oficio en proyección profesional."
        description="La base está preparada para incorporar la oferta académica definitiva sin comprometer la presentación actual del sitio."
        invert
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {trainingAreas.map((area, index) => (
          <Reveal key={area.title} delay={index * 0.06}>
            <article className="flex h-full flex-col rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <PlaceholderMedia
                accent={area.accent}
                className="min-h-[240px]"
                label={area.status}
                title={area.title}
              />
              <div className="mt-6 flex flex-1 flex-col">
                <h3 className="font-display text-3xl text-mist">{area.title}</h3>
                <p className="mt-4 text-sm leading-7 text-mist/72">{area.description}</p>
                <span className="mt-6 inline-flex w-fit rounded-full border border-accent-gold/28 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-accent-gold">
                  {area.status}
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

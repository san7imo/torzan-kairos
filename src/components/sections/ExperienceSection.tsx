import { experiencePoints } from '../../content/site';
import { Reveal } from '../common/Reveal';
import { PlaceholderMedia } from '../ui/PlaceholderMedia';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

export function ExperienceSection() {
  return (
    <Section tone="transparent">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal>
          <SectionHeading
            eyebrow="Experiencia Torzan Kairos"
            title="La formación se comunica como una transformación profesional, no como un simple listado de cursos."
            description="El sitio deja espacio para mostrar ambiente, acompañamiento y proyección laboral desde una composición visual sobria."
            invert
          />
          <div className="mt-10 space-y-5">
            {experiencePoints.map((point, index) => (
              <Reveal key={point.title} delay={index * 0.08}>
                <article className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6">
                  <h3 className="font-display text-2xl text-mist">{point.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-mist/72">{point.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="grid gap-5 sm:grid-cols-2">
            <PlaceholderMedia
              accent="frame"
              className="min-h-[260px] sm:col-span-2"
              label="Escena editorial"
              title="Composición preparada para mostrar clases, procesos y ambiente"
            />
            <PlaceholderMedia
              accent="geometric"
              className="min-h-[220px]"
              label="Imagen referencial"
              title="Acompañamiento"
            />
            <PlaceholderMedia
              accent="grid"
              className="min-h-[220px]"
              label="Próximamente"
              title="Proyección"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

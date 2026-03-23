import { experiencePoints } from '../../content/site';
import { experienceAssets } from '../../data/media';
import { Reveal } from '../common/Reveal';
import { ImagePanel } from '../ui/ImagePanel';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

export function ExperienceSection() {
  return (
    <Section tone="transparent">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal>
          <SectionHeading
            eyebrow="Experiencia Torzan Kairos"
            title="Aprender aquí es desarrollar técnica, criterio y confianza dentro de un acompañamiento cercano."
            description="La experiencia reúne práctica guiada, sensibilidad estética y una mirada profesional aplicada al trabajo real."
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
            <ImagePanel
              alt={experienceAssets[0].alt}
              className="min-h-[260px] sm:col-span-2"
              imgClassName="object-cover object-center"
              label={experienceAssets[0].label}
              src={experienceAssets[0].src}
              title={experienceAssets[0].title}
            />
            <ImagePanel
              alt={experienceAssets[1].alt}
              className="min-h-[220px]"
              imgClassName="object-cover object-center"
              label={experienceAssets[1].label}
              src={experienceAssets[1].src}
              title={experienceAssets[1].title}
            />
            <ImagePanel
              alt={experienceAssets[2].alt}
              className="min-h-[220px]"
              imgClassName="object-cover object-center"
              label={experienceAssets[2].label}
              src={experienceAssets[2].src}
              title={experienceAssets[2].title}
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

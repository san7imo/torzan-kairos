import { facultyMembers } from '../../content/site';
import { experienceAssets, identityAssets } from '../../data/media';
import { Reveal } from '../common/Reveal';
import { ImagePanel } from '../ui/ImagePanel';
import { Panel } from '../ui/Panel';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

export function FacultySection() {
  const facultyAsset = experienceAssets[1];
  const classroomAsset = identityAssets[3];

  return (
    <Section tone="dark">
      <div className="grid gap-10 xl:grid-cols-[0.94fr_1.06fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Equipo docente"
            title="Nuestro equipo de docentes acompaña el proceso formativo desde la técnica, la cercanía y el respeto por la profesión."
            description="Combinamos experiencia técnica, criterio humano y una presencia cuidada para sostener la formación desde dentro."
            invert
          />

          <div className="mt-8 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <ImagePanel
              alt={facultyAsset.alt}
              className="min-h-[280px] sm:min-h-[360px]"
              imgClassName="object-cover object-top"
              label={facultyAsset.label}
              src={facultyAsset.src}
              title={facultyAsset.title}
            />
            <ImagePanel
              alt={classroomAsset.alt}
              className="min-h-[280px] sm:min-h-[360px]"
              imgClassName="object-cover object-[center_28%]"
              label={classroomAsset.label}
              src={classroomAsset.src}
              title={classroomAsset.title}
            />
          </div>
        </Reveal>

        <div className="grid gap-5">
          {facultyMembers.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.08}>
              <Panel className="h-full" padding="md" tone="dark">
                <div className="h-px w-16 bg-accent-gold/50" aria-hidden="true" />
                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-gold">
                    {member.role}
                  </p>
                  <h3 className="mt-3 font-display text-3xl leading-tight text-mist">
                    {member.name}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-mist/72">{member.focus}</p>
                </div>
              </Panel>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

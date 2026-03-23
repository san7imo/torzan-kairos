import { facultyMembers } from '../../content/site';
import { Reveal } from '../common/Reveal';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

export function FacultySection() {
  return (
    <Section tone="deep">
      <SectionHeading
        eyebrow="Equipo docente"
        title="Un equipo que acompaña el proceso formativo desde la técnica, la cercanía y el respeto por la profesión."
        description="Presentamos el equipo docente aprobado dentro de una lectura limpia, sobria y enfocada en su papel dentro de la academia."
        invert
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {facultyMembers.map((member, index) => (
          <Reveal key={member.name} delay={index * 0.08}>
            <article className="flex h-full flex-col rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
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
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

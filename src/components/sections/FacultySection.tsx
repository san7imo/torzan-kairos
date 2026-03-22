import { facultyMembers } from '../../content/site';
import { Reveal } from '../common/Reveal';
import { PlaceholderMedia } from '../ui/PlaceholderMedia';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

export function FacultySection() {
  return (
    <Section tone="deep">
      <SectionHeading
        eyebrow="Equipo docente"
        title="Perfiles listos para presentar experiencia docente con una lectura limpia y confiable."
        description="Se muestran únicamente los nombres aprobados, con enfoque descriptivo prudente y espacio preparado para retratos futuros."
        invert
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {facultyMembers.map((member, index) => (
          <Reveal key={member.name} delay={index * 0.08}>
            <article className="rounded-[2rem] border border-white/10 bg-white/5 p-5">
              <PlaceholderMedia
                accent="arched"
                className="min-h-[280px]"
                label="Foto en actualización"
                title={member.name}
              />
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

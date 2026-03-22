import { ArrowRight } from 'lucide-react';
import { featuredCourses } from '../../content/site';
import { Reveal } from '../common/Reveal';
import { Button } from '../ui/Button';
import { PlaceholderMedia } from '../ui/PlaceholderMedia';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

export function HomeCoursesSection() {
  return (
    <Section tone="light">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Cursos destacados"
          title="Bloques comerciales preparados para presentar programas sin inventar oferta final."
          description="Cada tarjeta funciona como placeholder premium y deja visible que la información detallada seguirá entrando sin rehacer el Home."
        />
        <Button to="/contacto" variant="ghost">
          Solicitar orientación
          <ArrowRight size={16} />
        </Button>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {featuredCourses.map((course, index) => (
          <Reveal key={course.title} delay={index * 0.08}>
            <article className="flex h-full flex-col rounded-[2rem] border border-brand-blue/10 bg-white p-5 shadow-[0_18px_60px_rgba(20,47,74,0.08)]">
              <PlaceholderMedia
                accent={course.accent}
                className="min-h-[250px]"
                label={course.status}
                title={course.title}
              />
              <div className="mt-6 flex flex-1 flex-col">
                <h3 className="font-display text-3xl leading-tight text-brand-blue">{course.title}</h3>
                <p className="mt-4 text-sm leading-7 text-brand-blue/72">{course.description}</p>
                <p className="mt-5 rounded-[1.2rem] border border-brand-blue/10 bg-mist/45 px-4 py-3 text-xs uppercase tracking-[0.18em] text-brand-blue/70">
                  {course.note}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

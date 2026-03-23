import { ArrowRight } from 'lucide-react';
import { coursePresentationBySlug, coursePrograms } from '../../data/courses';
import { Reveal } from '../common/Reveal';
import { Button } from '../ui/Button';
import { ImagePanel } from '../ui/ImagePanel';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

export function HybridCoursesSection() {
  return (
    <Section tone="deep">
      <SectionHeading
        eyebrow="Cursos destacados"
        title="Programas construidos desde la técnica, la bioseguridad y una visión profesional del oficio."
        description="Cada programa cuenta con una presentación clara, contenido académico estructurado y acceso directo a información de matrícula."
        invert
      />

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {coursePrograms.map((course, index) => {
          const presentation = coursePresentationBySlug[course.slug];

          return (
            <Reveal key={course.slug} delay={index * 0.08}>
              <article className="flex h-full flex-col rounded-[2rem] border border-white/10 bg-white/6 p-5 shadow-[0_26px_70px_rgba(0,0,0,0.16)] backdrop-blur-sm sm:p-6">
                <ImagePanel
                  alt={presentation.heroAsset.alt}
                  className="min-h-[250px]"
                  imgClassName="object-cover object-center"
                  label={course.shortTitle}
                  src={presentation.heroAsset.src}
                  title={course.mediaTitle}
                />
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-accent-gold">{course.shortTitle}</p>
                <h3 className="mt-4 font-display text-[1.9rem] leading-tight text-mist">{course.title}</h3>
                <p className="mt-4 text-sm leading-8 text-mist/72">{course.summary}</p>
                <div className="mt-6 flex flex-wrap gap-2 text-[0.68rem] uppercase tracking-[0.16em] text-mist/46">
                  <span className="rounded-full border border-white/10 px-3 py-2">Plan de estudios</span>
                  <span className="rounded-full border border-white/10 px-3 py-2">Matrícula por WhatsApp</span>
                </div>
                <Button className="mt-8 w-full sm:w-auto" to={`/cursos/${course.slug}`} variant="secondary">
                  Ver programa
                  <ArrowRight size={16} />
                </Button>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

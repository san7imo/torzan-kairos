import { ArrowRight } from 'lucide-react';
import { coursePresentationBySlug, coursePrograms } from '../../data/courses';
import { Reveal } from '../common/Reveal';
import { Button } from '../ui/Button';
import { CourseCard } from '../ui/CourseCard';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

export function HybridCoursesSection() {
  return (
    <Section tone="dark">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Cursos destacados"
          title="Programas construidos desde la técnica, la bioseguridad y una visión profesional del oficio."
          description="Cada programa cuenta con contenido académico estructurado, duración visible y acceso directo a información de matrícula."
          invert
        />

        <Button className="sm:w-auto" to="/cursos" variant="secondary">
          Explorar academia
          <ArrowRight size={16} />
        </Button>
      </div>

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {coursePrograms.map((course, index) => {
          const presentation = coursePresentationBySlug[course.slug];

          return (
            <Reveal key={course.slug} delay={index * 0.08}>
              <CourseCard course={course} presentation={presentation} tone="dark" />
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

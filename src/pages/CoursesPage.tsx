import { ArrowRight } from 'lucide-react';
import { coursePresentationBySlug, coursePrograms } from '../data/courses';
import { pageHeroAssets } from '../data/media';
import { pageHeroes, pageMetadata } from '../content/site';
import { Reveal } from '../components/common/Reveal';
import { PageHero } from '../components/layout/PageHero';
import { Button } from '../components/ui/Button';
import { ImagePanel } from '../components/ui/ImagePanel';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { usePageMetadata } from '../hooks/usePageMetadata';

export function CoursesPage() {
  usePageMetadata(pageMetadata.courses);

  return (
    <>
      <PageHero
        eyebrow={pageHeroes.courses.eyebrow}
        title={pageHeroes.courses.title}
        description={pageHeroes.courses.description}
        aside={
          <ImagePanel
            alt={pageHeroAssets.courses.alt}
            className="min-h-[420px]"
            imgClassName="object-cover object-center"
            label={pageHeroAssets.courses.label}
            src={pageHeroAssets.courses.src}
            title={pageHeroAssets.courses.title}
          />
        }
      />

      <Section tone="light">
        <SectionHeading
          eyebrow="Oferta académica"
          title="Tres programas pensados para formar oficio, fortalecer criterio y abrir camino profesional."
          description="Cada ruta reúne contenido académico, módulos organizados y un acceso directo para recibir información de matrícula."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {coursePrograms.map((course, index) => {
            const presentation = coursePresentationBySlug[course.slug];

            return (
              <Reveal key={course.slug} delay={index * 0.08}>
                <article className="flex h-full flex-col rounded-[2rem] border border-brand-blue/10 bg-white p-5 shadow-[0_20px_60px_rgba(20,47,74,0.08)] sm:p-6">
                  <ImagePanel
                    alt={presentation.heroAsset.alt}
                    className="min-h-[240px]"
                    imgClassName="object-cover object-center"
                    label={course.shortTitle}
                    src={presentation.heroAsset.src}
                    title={course.mediaTitle}
                  />
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-accent-gold">{course.shortTitle}</p>
                  <h2 className="mt-5 font-display text-[2rem] leading-tight text-brand-blue">{course.title}</h2>
                  <p className="mt-4 text-sm leading-8 text-brand-blue/72">{course.summary}</p>
                  <p className="mt-5 text-[0.68rem] uppercase tracking-[0.14em] text-brand-blue/46">
                    {coursePresentationBySlug[course.slug].durationLabel}
                  </p>
                  <Button className="mt-8 w-full sm:w-auto" to={`/cursos/${course.slug}`} variant="ghost">
                    Ver detalle del curso
                    <ArrowRight size={16} />
                  </Button>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>
    </>
  );
}

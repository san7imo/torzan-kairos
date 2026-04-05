import { coursePresentationBySlug, coursePrograms } from '../data/courses';
import { pageHeroAssets } from '../data/media';
import { pageHeroes, pageMetadata } from '../content/site';
import { Reveal } from '../components/common/Reveal';
import { PageHero } from '../components/layout/PageHero';
import { Button } from '../components/ui/Button';
import { CourseCard } from '../components/ui/CourseCard';
import { ImagePanel } from '../components/ui/ImagePanel';
import { MetricBand } from '../components/ui/MetricBand';
import { PageIntro } from '../components/ui/PageIntro';
import { Panel } from '../components/ui/Panel';
import { Section } from '../components/ui/Section';
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
          <div className="space-y-5">
            <ImagePanel
              alt={pageHeroAssets.courses.alt}
              className="min-h-[420px]"
              imgClassName="object-cover object-center"
              label={pageHeroAssets.courses.label}
              src={pageHeroAssets.courses.src}
              title={pageHeroAssets.courses.title}
            />

            <Panel tone="dark">
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.26em] text-accent-gold">
                Academia Torzan Kairos
              </p>
              <p className="mt-4 font-display text-[1.65rem] leading-tight text-mist">
                Programas con estructura clara, lectura académica y orientación directa por WhatsApp.
              </p>
              <MetricBand
                className="mt-6"
                items={[
                  { value: '3', label: 'Programas' },
                  { value: '240 h', label: 'Base formativa' },
                  { value: 'WhatsApp', label: 'Matrícula' },
                ]}
                tone="dark"
              />
            </Panel>
          </div>
        }
      />

      <Section tone="light">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <PageIntro
            eyebrow="Oferta académica"
            title="Tres programas pensados para formar oficio, fortalecer criterio y abrir camino profesional."
            description="Cada ruta reúne contenido académico, módulos organizados y un acceso directo para recibir información de matrícula."
          />

          <Button className="sm:w-auto" to="/contacto" variant="ghost">
            Solicitar orientación
          </Button>
        </div>

        <MetricBand
          className="mt-10"
          items={[
            { value: 'Barbería', label: 'Programa 01' },
            { value: 'Peluquería', label: 'Programa 02' },
            { value: 'Uñas', label: 'Programa 03' },
          ]}
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {coursePrograms.map((course, index) => {
            const presentation = coursePresentationBySlug[course.slug];

            return (
              <Reveal key={course.slug} delay={index * 0.08}>
                <div className="h-full">
                  <CourseCard course={course} presentation={presentation} />
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>
    </>
  );
}

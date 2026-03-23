import { ArrowRight, CheckCircle2, Clock3, UserRound } from 'lucide-react';
import { useParams } from 'react-router-dom';
import {
  buildCourseMetadata,
  coursePresentationBySlug,
  getCourseBySlug,
} from '../data/courses';
import { Reveal } from '../components/common/Reveal';
import { PageHero } from '../components/layout/PageHero';
import { NotFoundPage } from './NotFoundPage';
import { Button } from '../components/ui/Button';
import { ImagePanel } from '../components/ui/ImagePanel';
import { MediaGallery } from '../components/ui/MediaGallery';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { WhatsAppCTA } from '../components/ui/WhatsAppCTA';
import { usePageMetadata } from '../hooks/usePageMetadata';

export function CourseDetailPage() {
  const { slug } = useParams();
  const course = getCourseBySlug(slug);

  if (!course) {
    return <NotFoundPage />;
  }

  usePageMetadata(buildCourseMetadata(course));

  const presentation = coursePresentationBySlug[course.slug];

  return (
    <>
      <PageHero
        eyebrow="Programa académico"
        title={course.title}
        description={course.summary}
        aside={
          <ImagePanel
            alt={presentation.heroAsset.alt}
            className="min-h-[420px]"
            imgClassName="object-cover object-center"
            label={course.mediaLabel}
            src={presentation.heroAsset.src}
            title={course.mediaTitle}
          />
        }
      />

      <Section className="pt-10 sm:pt-12 lg:pt-14" tone="light">
        <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <Reveal>
            <article className="rounded-[2rem] border border-brand-blue/10 bg-white p-7 shadow-[0_18px_50px_rgba(20,47,74,0.08)]">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-gold">Resumen del curso</p>
              <p className="mt-4 text-sm leading-8 text-brand-blue/74">{course.overview}</p>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-accent-gold">Objetivo formativo</p>
              <p className="mt-3 text-sm leading-8 text-brand-blue/74">{course.objective}</p>
            </article>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
            <Reveal delay={0.06}>
              <article className="rounded-[2rem] border border-brand-blue/10 bg-white p-6 shadow-[0_18px_50px_rgba(20,47,74,0.08)]">
                <div className="flex items-start gap-4">
                  <Clock3 className="mt-1 text-accent-gold" size={18} />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-gold">Duración</p>
                    <p className="mt-3 text-sm leading-7 text-brand-blue">{presentation.durationLabel}</p>
                    <p className="mt-3 text-sm leading-7 text-brand-blue/64">{presentation.durationNote}</p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.12}>
              <article className="rounded-[2rem] border border-brand-blue/10 bg-white p-6 shadow-[0_18px_50px_rgba(20,47,74,0.08)]">
                <div className="flex items-start gap-4">
                  <UserRound className="mt-1 text-accent-gold" size={18} />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-gold">Perfil del estudiante</p>
                    <p className="mt-3 text-sm leading-7 text-brand-blue/74">{course.studentProfile}</p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.18}>
              <ImagePanel
                alt={presentation.gallery[0].alt}
                className="min-h-[240px] sm:col-span-2"
                imgClassName="object-cover object-center"
                label={presentation.gallery[0].label}
                src={presentation.gallery[0].src}
                title={presentation.gallery[0].title}
              />
            </Reveal>
          </div>
        </div>
      </Section>

      <Section className="pt-10 sm:pt-12 lg:pt-14" tone="transparent">
        <SectionHeading
          eyebrow="Módulos"
          title="Un recorrido formativo claro, visual y estructurado para avanzar módulo a módulo."
          description="Aquí se presenta el contenido esencial del programa con una lectura más cercana y ordenada."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
          <Reveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              <ImagePanel
                alt={presentation.gallery[1].alt}
                className="min-h-[220px]"
                imgClassName="object-cover object-center"
                label={presentation.gallery[1].label}
                src={presentation.gallery[1].src}
                title={presentation.gallery[1].title}
              />
              <ImagePanel
                alt={presentation.gallery[2].alt}
                className="min-h-[220px]"
                imgClassName="object-cover object-center"
                label={presentation.gallery[2].label}
                src={presentation.gallery[2].src}
                title={presentation.gallery[2].title}
              />
            </div>
          </Reveal>

          <div className="space-y-4">
            {course.modules.map((module, index) => (
              <Reveal key={module.title} delay={index * 0.04}>
                <details className="group rounded-[1.9rem] border border-white/10 bg-white/6 p-6 backdrop-blur-sm" open={index === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-[1.35rem] leading-tight text-mist marker:hidden sm:text-[1.45rem]">
                    {module.title}
                    <span className="text-sm uppercase tracking-[0.18em] text-accent-gold transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-5 max-w-3xl text-sm leading-8 text-mist/72">{module.description}</p>
                  <ul className="mt-5 grid gap-3 md:grid-cols-2">
                    {module.contents.map((content) => (
                      <li key={content} className="rounded-[1.2rem] border border-white/8 bg-white/4 px-4 py-4 text-sm leading-7 text-mist/72">
                        {content}
                      </li>
                    ))}
                  </ul>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section className="pt-12 sm:pt-14 lg:pt-16" tone="deep">
        <SectionHeading
          eyebrow="Competencias"
          title="Competencias pensadas para aplicar la técnica con criterio y visión profesional."
          description="Estas capacidades resumen lo que el estudiante desarrolla durante el proceso formativo."
          invert
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {course.competencies.map((item, index) => (
            <Reveal key={item} delay={index * 0.05}>
              <article className="flex gap-4 rounded-[1.7rem] border border-white/10 bg-white/6 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-1 shrink-0 text-accent-gold" size={18} />
                <p className="text-sm leading-8 text-mist/76">{item}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pt-12 sm:pt-14 lg:pt-16" tone="dark">
        <SectionHeading
          eyebrow="Galería"
          title="Una lectura visual alineada con la identidad del programa y el universo de la academia."
          description="Las imágenes ayudan a que la página se sienta más viva, más cercana y mejor conectada con el oficio."
          invert
        />

        <div className="mt-12">
          <MediaGallery assets={presentation.gallery} />
        </div>
      </Section>

      <Section className="pt-12 sm:pt-14 lg:pt-16" tone="light">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Matrícula"
              title="Recibe información y continúa tu proceso de matrícula desde un canal directo."
              description="El equipo puede orientarte sobre el programa, la disponibilidad y los siguientes pasos para comenzar."
            />
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-[2rem] border border-brand-blue/10 bg-white p-7 shadow-[0_18px_50px_rgba(20,47,74,0.08)]">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-gold">Acciones</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <WhatsAppCTA className="sm:w-auto" label="Matricúlate ahora" message={presentation.whatsappMessage} />
                <Button to="/cursos" variant="ghost">
                  Volver a cursos
                  <ArrowRight size={16} />
                </Button>
              </div>
              <p className="mt-6 text-sm leading-8 text-brand-blue/70">{course.secondaryCta}</p>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

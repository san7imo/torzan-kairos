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
import { ModuleAccordion } from '../components/ui/ModuleAccordion';
import { PageIntro } from '../components/ui/PageIntro';
import { Panel } from '../components/ui/Panel';
import { Section } from '../components/ui/Section';
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
          <div className="space-y-5">
            <ImagePanel
              alt={presentation.heroAsset.alt}
              className="min-h-[420px]"
              imgClassName="object-cover object-center"
              label={course.mediaLabel}
              src={presentation.heroAsset.src}
              title={course.mediaTitle}
            />

            <Panel tone="dark">
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-accent-gold">
                Admisiones y matrícula
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] px-4 py-4">
                  <p className="text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-mist/48">
                    Duración
                  </p>
                  <p className="mt-2 font-display text-[1.25rem] leading-tight text-mist">
                    {presentation.durationLabel}
                  </p>
                </div>
                <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] px-4 py-4">
                  <p className="text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-mist/48">
                    Enfoque
                  </p>
                  <p className="mt-2 font-display text-[1.25rem] leading-tight text-mist">
                    Formación práctica
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-mist/68">{presentation.durationNote}</p>
              <div className="mt-6 flex flex-col gap-3">
                <WhatsAppCTA label="Matricúlate ahora" message={presentation.whatsappMessage} />
                <Button to="/cursos" variant="secondary">
                  Volver a cursos
                  <ArrowRight size={16} />
                </Button>
              </div>
            </Panel>
          </div>
        }
      />

      <Section className="pt-10 sm:pt-12 lg:pt-14" tone="light">
        <div className="grid gap-10 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
          <Reveal>
            <PageIntro
              eyebrow="Visión general"
              title="Una ruta formativa estructurada para desarrollar técnica, criterio y proyección profesional."
              description={course.overview}
            />

            <div className="mt-8 grid gap-4">
              <Panel padding="md" tone="muted">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-accent-gold">
                  Objetivo formativo
                </p>
                <p className="mt-4 text-sm leading-7 text-brand-blue/72">{course.objective}</p>
              </Panel>

              <Panel padding="md" tone="muted">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-accent-gold">
                  Metodología
                </p>
                <p className="mt-4 text-sm leading-7 text-brand-blue/72">{course.methodology}</p>
              </Panel>
            </div>
          </Reveal>

          <div className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Reveal delay={0.06}>
                <Panel padding="md" tone="light">
                  <div className="flex items-start gap-4">
                    <Clock3 className="mt-1 text-accent-gold" size={18} />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-gold">Duración</p>
                      <p className="mt-3 text-sm leading-7 text-brand-blue">{presentation.durationLabel}</p>
                    </div>
                  </div>
                </Panel>
              </Reveal>

              <Reveal delay={0.12}>
                <Panel padding="md" tone="light">
                  <div className="flex items-start gap-4">
                    <UserRound className="mt-1 text-accent-gold" size={18} />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-gold">Perfil del estudiante</p>
                      <p className="mt-3 text-sm leading-7 text-brand-blue/74">{course.studentProfile}</p>
                    </div>
                  </div>
                </Panel>
              </Reveal>
            </div>

            <Reveal delay={0.18}>
              <ImagePanel
                alt={presentation.gallery[0].alt}
                className="min-h-[360px]"
                imgClassName="object-cover object-center"
                label={presentation.gallery[0].label}
                src={presentation.gallery[0].src}
                title={presentation.gallery[0].title}
              />
            </Reveal>
          </div>
        </div>
      </Section>

      <Section className="pt-10 sm:pt-12 lg:pt-14" tone="dark">
        <div className="grid gap-10 xl:grid-cols-[0.72fr_1.28fr] xl:items-start">
          <Reveal>
            <PageIntro
              eyebrow="Plan de estudios"
              title="Módulos completos para avanzar paso a paso dentro de una estructura clara."
              description="El contenido se presenta con una lectura académica más limpia para que el programa se entienda rápido y sin ruido visual."
              tone="dark"
            />

            <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-1">
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

          <ModuleAccordion modules={course.modules} />
        </div>
      </Section>

      <Section className="pt-12 sm:pt-14 lg:pt-16" tone="light">
        <div className="grid gap-8 xl:grid-cols-[1.06fr_0.94fr] xl:items-start">
          <Reveal>
            <PageIntro
              eyebrow="Competencias"
              title="Lo que desarrollarás a lo largo del programa."
              description="Estas competencias resumen la forma en que el curso convierte la práctica en criterio técnico y proyección profesional."
            />

            <div className="mt-8 grid gap-4">
              {course.competencies.map((item, index) => (
                <Reveal key={item} delay={index * 0.05}>
                  <Panel padding="md" tone="light">
                    <div className="flex gap-4">
                      <CheckCircle2 className="mt-1 shrink-0 text-accent-gold" size={18} />
                      <p className="text-sm leading-7 text-brand-blue/74">{item}</p>
                    </div>
                  </Panel>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <Panel tone="muted">
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-accent-gold">
                Matrícula
              </p>
              <h2 className="mt-4 font-display text-[2rem] leading-tight text-brand-blue sm:text-[2.4rem]">
                Recibe orientación y continúa tu proceso desde un canal directo.
              </h2>
              <p className="mt-5 text-sm leading-8 text-brand-blue/72">
                {course.secondaryCta}. El equipo puede orientarte sobre horarios, disponibilidad y
                próximos pasos para comenzar.
              </p>
              <div className="mt-8 flex flex-col gap-3">
                <WhatsAppCTA label="Matricúlate ahora" message={presentation.whatsappMessage} />
                <Button to="/cursos" variant="ghost">
                  Volver a cursos
                  <ArrowRight size={16} />
                </Button>
              </div>
            </Panel>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

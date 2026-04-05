import { ArrowRight, BadgeEuro, CalendarCheck2, CheckCircle2 } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { coursePresentationBySlug, getCourseBySlug } from '../data/courses';
import {
  buildServiceMetadata,
  getServiceBySlug,
  servicePresentationBySlug,
} from '../data/services';
import { Reveal } from '../components/common/Reveal';
import { PageHero } from '../components/layout/PageHero';
import { NotFoundPage } from './NotFoundPage';
import { Button } from '../components/ui/Button';
import { CourseCard } from '../components/ui/CourseCard';
import { ImagePanel } from '../components/ui/ImagePanel';
import { MediaGallery } from '../components/ui/MediaGallery';
import { PageIntro } from '../components/ui/PageIntro';
import { Panel } from '../components/ui/Panel';
import { PriceList } from '../components/ui/PriceList';
import { Section } from '../components/ui/Section';
import { WhatsAppCTA } from '../components/ui/WhatsAppCTA';
import { usePageMetadata } from '../hooks/usePageMetadata';

export function ServiceDetailPage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <NotFoundPage />;
  }

  usePageMetadata(buildServiceMetadata(service));

  const presentation = servicePresentationBySlug[service.slug];
  const leadVisual = presentation.gallery[0] ?? presentation.heroAsset;
  const featuredPrice = presentation.prices.find((item) => item.status === 'confirmed') ?? presentation.prices[0];
  const relatedCourses = presentation.relatedCourses
    .map((courseSlug) => getCourseBySlug(courseSlug))
    .filter((course): course is NonNullable<ReturnType<typeof getCourseBySlug>> => Boolean(course));

  return (
    <>
      <PageHero
        eyebrow="Servicio"
        title={service.title}
        description={service.summary}
        aside={
          <div className="space-y-5">
            <ImagePanel
              alt={presentation.heroAsset.alt}
              className="min-h-[420px]"
              imgClassName="object-cover object-center"
              label={service.mediaLabel}
              src={presentation.heroAsset.src}
              title={service.mediaTitle}
            />

            <Panel tone="dark">
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-accent-gold/30 bg-accent-gold/10 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-accent-gold">
                  <BadgeEuro size={14} />
                  {featuredPrice?.priceLabel ?? 'Consultar'}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-mist/72">
                  <CalendarCheck2 size={14} />
                  Reserva disponible
                </span>
              </div>

              <h2 className="mt-5 font-display text-[1.9rem] leading-tight text-mist sm:text-[2.2rem]">
                Reserva tu cita con una atención clara y personalizada.
              </h2>
              <p className="mt-4 text-sm leading-7 text-mist/72">{service.note}</p>

              <div className="mt-8 flex flex-col gap-3">
                <WhatsAppCTA label="Reservar por WhatsApp" message={presentation.whatsappMessage} />
                <Button to="/servicios" variant="secondary">
                  Volver a servicios
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
              title="Una categoría pensada para reservar con claridad y decidir rápido."
              description={service.overview}
            />

            <Panel className="mt-8" padding="md" tone="muted">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-accent-gold">
                Pensado para
              </p>
              <p className="mt-4 text-sm leading-7 text-brand-blue/72">{service.audience}</p>
            </Panel>

            <div className="mt-6 grid gap-4">
              {service.highlights.map((item) => (
                <Panel key={item} padding="md" tone="light">
                  <p className="text-sm leading-7 text-brand-blue/74">{item}</p>
                </Panel>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid gap-5">
              <ImagePanel
                alt={leadVisual.alt}
                className="min-h-[420px]"
                imgClassName="object-cover object-center"
                label={leadVisual.label}
                src={leadVisual.src}
                title={leadVisual.title}
              />

              <Panel padding="md" tone="light">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-accent-gold">
                  Qué puedes reservar
                </p>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {service.serviceList.map((item) => (
                    <li key={`${service.slug}-${item}`} className="flex items-start gap-3 rounded-[1.2rem] border border-brand-blue/8 bg-brand-blue/[0.03] px-4 py-4">
                      <CheckCircle2 className="mt-1 shrink-0 text-accent-gold" size={16} />
                      <p className="text-sm leading-7 text-brand-blue">{item}</p>
                    </li>
                  ))}
                </ul>
              </Panel>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="pt-12 sm:pt-14 lg:pt-16" tone="light">
        <div className="grid gap-10 xl:grid-cols-[0.86fr_1.14fr] xl:items-start">
          <Reveal>
            <PageIntro
              eyebrow="Servicios y precios"
              title="Consulta opciones disponibles y valores base antes de reservar."
              description="La categoría se presenta con una lectura rápida, clara y orientada a la cita."
            />

            <Panel className="mt-8" padding="md" tone="muted">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-accent-gold">
                Nota comercial
              </p>
              <p className="mt-4 text-sm leading-7 text-brand-blue/72">{service.note}</p>
            </Panel>
          </Reveal>

          <Reveal delay={0.08}>
            <PriceList items={presentation.prices} />
          </Reveal>
        </div>
      </Section>

      {presentation.gallery.length ? (
        <Section className="pt-12 sm:pt-14 lg:pt-16" tone="dark">
          <PageIntro
            eyebrow="Ambiente visual"
            title="Imágenes que acompañan la experiencia del servicio y refuerzan la decisión de cita."
            description="Una lectura más visual ayuda a que la página se sienta comercial, viva y cercana al resultado."
            tone="dark"
          />

          <div className="mt-12">
            <MediaGallery assets={presentation.gallery} />
          </div>
        </Section>
      ) : null}

      {relatedCourses.length ? (
        <Section className="pt-12 sm:pt-14 lg:pt-16" tone="light">
          <PageIntro
            eyebrow="Formación relacionada"
            title="Si quieres ir un paso más allá, también puedes conocer la ruta formativa asociada."
            description="Algunas categorías se conectan naturalmente con programas de formación profesional dentro de Torzan Kairos."
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {relatedCourses.map((course, index) => {
              const courseVisual = coursePresentationBySlug[course.slug];

              return (
                <Reveal key={course.slug} delay={index * 0.08}>
                  <div className="h-full">
                    <CourseCard course={course} presentation={courseVisual} />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Section>
      ) : null}
    </>
  );
}

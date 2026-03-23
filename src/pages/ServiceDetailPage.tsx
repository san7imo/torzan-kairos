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
import { ImagePanel } from '../components/ui/ImagePanel';
import { MediaGallery } from '../components/ui/MediaGallery';
import { PriceTable } from '../components/ui/PriceTable';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
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
          <ImagePanel
            alt={presentation.heroAsset.alt}
            className="min-h-[420px]"
            imgClassName="object-cover object-center"
            label={service.mediaLabel}
            src={presentation.heroAsset.src}
            title={service.mediaTitle}
          />
        }
      />

      <Section className="pt-10 sm:pt-12 lg:pt-14" tone="light">
        <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch">
          <Reveal>
            <ImagePanel
              alt={presentation.gallery[0].alt}
              className="min-h-[520px]"
              imgClassName="object-cover object-center"
              label={presentation.gallery[0].label}
              src={presentation.gallery[0].src}
              title={presentation.gallery[0].title}
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex h-full flex-col rounded-[2.2rem] border border-brand-blue/10 bg-white p-7 shadow-[0_18px_50px_rgba(20,47,74,0.08)] sm:p-8">
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-accent-gold/30 bg-accent-gold/10 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-accent-gold">
                  <BadgeEuro size={14} />
                  {featuredPrice?.priceLabel ?? 'Consultar'}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue/10 bg-brand-blue/[0.04] px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-brand-blue/62">
                  <CalendarCheck2 size={14} />
                  Reserva disponible
                </span>
              </div>

              <h2 className="mt-5 font-display text-[1.9rem] leading-tight text-brand-blue sm:text-[2.2rem]">
                Reserva tu cita con una atención clara y personalizada.
              </h2>
              <p className="mt-4 text-sm leading-7 text-brand-blue/72">{service.audience}</p>

              <div className="mt-6 grid gap-3">
                {service.highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.4rem] border border-brand-blue/8 bg-brand-blue/[0.03] px-4 py-4 text-sm leading-7 text-brand-blue/74"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <WhatsAppCTA className="sm:w-auto" label="Reservar por WhatsApp" message={presentation.whatsappMessage} />
                <Button className="sm:w-auto" to="/servicios" variant="ghost">
                  Volver a servicios
                  <ArrowRight size={16} />
                </Button>
              </div>

              <p className="mt-6 text-sm leading-7 text-brand-blue/60">{service.note}</p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="pt-12 sm:pt-14 lg:pt-16" tone="light">
        <SectionHeading
          eyebrow="Servicios y precios"
          title="Consulta opciones disponibles y valores base antes de reservar."
          description="Mostramos la categoría con una lectura rápida, clara y orientada a la cita."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <article className="rounded-[2rem] border border-brand-blue/10 bg-white p-7 shadow-[0_18px_50px_rgba(20,47,74,0.08)]">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-gold">Qué puedes reservar</p>
              <ul className="mt-6 space-y-3">
                {service.serviceList.map((item) => (
                  <li key={`${service.slug}-${item}`} className="flex items-start gap-3 rounded-[1.2rem] border border-brand-blue/8 bg-brand-blue/[0.03] px-4 py-4">
                    <CheckCircle2 className="mt-1 shrink-0 text-accent-gold" size={16} />
                    <p className="text-sm leading-7 text-brand-blue">{item}</p>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <PriceTable items={presentation.prices} />
          </Reveal>
        </div>
      </Section>

      <Section className="pt-12 sm:pt-14 lg:pt-16" tone="dark">
        <SectionHeading
          eyebrow="Ambiente visual"
          title="Imágenes que acompañan la experiencia del servicio y refuerzan la decisión de cita."
          description="Una lectura más visual ayuda a que la página se sienta comercial, viva y cercana al resultado."
          invert
        />

        <div className="mt-12">
          <MediaGallery assets={presentation.gallery} />
        </div>
      </Section>

      {relatedCourses.length ? (
        <Section className="pt-12 sm:pt-14 lg:pt-16" tone="light">
          <SectionHeading
            eyebrow="Formación relacionada"
            title="Si quieres ir un paso más allá, también puedes conocer la ruta formativa asociada."
            description="Algunas categorías se conectan naturalmente con programas de formación profesional dentro de Torzan Kairos."
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {relatedCourses.map((course, index) => {
              const courseVisual = coursePresentationBySlug[course.slug].heroAsset;

              return (
                <Reveal key={course.slug} delay={index * 0.08}>
                  <article className="overflow-hidden rounded-[2rem] border border-brand-blue/10 bg-white shadow-[0_18px_50px_rgba(20,47,74,0.08)]">
                    <ImagePanel
                      alt={courseVisual.alt}
                      className="min-h-[220px] rounded-none border-0 shadow-none"
                      imgClassName="object-cover object-center"
                      label={course.shortTitle}
                      src={courseVisual.src}
                      title={courseVisual.title}
                    />
                    <div className="p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-gold">Curso relacionado</p>
                      <h2 className="mt-4 font-display text-[1.6rem] leading-tight text-brand-blue">{course.title}</h2>
                      <p className="mt-4 text-sm leading-7 text-brand-blue/72">{course.summary}</p>
                      <Button className="mt-7 w-full sm:w-auto" to={`/cursos/${course.slug}`} variant="ghost">
                        Ver curso
                        <ArrowRight size={16} />
                      </Button>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Section>
      ) : null}
    </>
  );
}

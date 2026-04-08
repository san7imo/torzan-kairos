import { homeTestimonials } from '../../content/site';
import { experienceAssets, storyNarrativeAsset } from '../../data/media';
import { Reveal } from '../common/Reveal';
import { Button } from '../ui/Button';
import { ImagePanel } from '../ui/ImagePanel';
import { Panel } from '../ui/Panel';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

export function HybridGallerySection() {
  const [materialsAsset] = experienceAssets;

  return (
    <Section tone="light">
      <div className="grid gap-10 xl:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Voces de alumnos"
            title="La formación también se mide en confianza, claridad y primeros resultados profesionales."
            description="Estas voces representan el tipo de evolución que buscamos acompañar en cada alumno: más técnica, más seguridad y mejores herramientas para avanzar."
          />

          <div className="mt-8 grid gap-5">
            <ImagePanel
              alt={materialsAsset.alt}
              className="min-h-[320px] sm:min-h-[420px]"
              imgClassName="object-cover object-center"
              label="Kit inicial"
              src={materialsAsset.src}
              title="Te proporcionamos tus primeros implementos profesionales para empezar con orden y presencia."
            />

            <Button className="sm:w-auto" to="/cursos" variant="ghost">
              Conocer los programas
            </Button>
          </div>
        </Reveal>

        <div className="grid gap-5">
          {homeTestimonials.map((item, index) => (
            <Reveal key={item.author} delay={index * 0.08}>
              <Panel className="h-full" padding="md" tone="light">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-accent-gold">
                  {item.context}
                </p>
                <p className="mt-4 text-base leading-8 text-brand-blue/78">“{item.quote}”</p>
                <p className="mt-5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-brand-blue/48">
                  {item.author}
                </p>
              </Panel>
            </Reveal>
          ))}

          <Reveal delay={0.24}>
            <ImagePanel
              alt={storyNarrativeAsset.alt}
              className="min-h-[280px] sm:min-h-[320px]"
              imgClassName="object-cover object-[center_28%]"
              label={storyNarrativeAsset.label}
              src={storyNarrativeAsset.src}
              title="Cada proceso busca traducirse en confianza, avance y un cierre formativo con peso profesional."
            />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

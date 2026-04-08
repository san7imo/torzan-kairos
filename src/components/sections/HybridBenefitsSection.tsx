import { homeBenefits } from '../../content/site';
import { experienceAssets } from '../../data/media';
import { Reveal } from '../common/Reveal';
import { ImagePanel } from '../ui/ImagePanel';
import { Panel } from '../ui/Panel';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

export function HybridBenefitsSection() {
  const [, facultyAsset, serviceAsset] = experienceAssets;

  return (
    <Section tone="transparent">
      <div className="grid gap-10 xl:grid-cols-[0.92fr_1.08fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Por qué elegir Torzan Kairos"
            title="Todo está pensado para que avances con técnica, confianza y una experiencia profesional desde el día uno."
            description="Combinamos práctica guiada, docentes con trayectoria y servicios reales para que la marca se sienta útil, cercana y confiable."
            invert
          />

          <div className="mt-8 grid gap-5">
            <ImagePanel
              alt={facultyAsset.alt}
              className="min-h-[320px] sm:min-h-[410px]"
              imgClassName="object-cover object-top"
              label={facultyAsset.label}
              src={facultyAsset.src}
              title="Nuestro equipo docente acompaña cada proceso con técnica, criterio y cercanía."
            />

            <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
              <Panel padding="md" tone="dark">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-accent-gold">
                  Acompañamiento profesional
                </p>
                <p className="mt-3 font-display text-[1.6rem] leading-tight text-mist">
                  Aprendes con guía cercana, bioseguridad y una lectura real del oficio.
                </p>
                <p className="mt-4 text-sm leading-7 text-mist/66">
                  La formación se apoya en práctica, seguimiento y claridad para que puedas dar el
                  siguiente paso con más seguridad.
                </p>
              </Panel>

              <ImagePanel
                alt={serviceAsset.alt}
                className="min-h-[220px] sm:min-h-[260px]"
                imgClassName="object-cover object-center"
                label={serviceAsset.label}
                src={serviceAsset.src}
                title="Los servicios al público también refuerzan la confianza, el detalle y la experiencia de la marca."
              />
            </div>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 xl:pt-18">
          {homeBenefits.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <Panel className="h-full" tone="dark">
                <h3 className="font-display text-[1.9rem] leading-tight text-mist">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-mist/72">{item.description}</p>
              </Panel>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

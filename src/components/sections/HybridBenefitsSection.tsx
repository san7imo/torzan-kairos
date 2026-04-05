import { homeBenefits } from '../../content/site';
import { experienceAssets } from '../../data/media';
import { Reveal } from '../common/Reveal';
import { ImagePanel } from '../ui/ImagePanel';
import { Panel } from '../ui/Panel';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

export function HybridBenefitsSection() {
  const [materialsAsset, facultyAsset] = experienceAssets;

  return (
    <Section tone="transparent">
      <div className="grid gap-10 xl:grid-cols-[0.92fr_1.08fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Por qué Torzan Kairos"
            title="Una marca pensada para formar, atender y acompañar con una presencia clara y contemporánea."
            description="Estos pilares resumen la manera en que Torzan Kairos entiende la experiencia académica y la atención al público."
            invert
          />

          <div className="mt-8 grid gap-5">
            <ImagePanel
              alt={materialsAsset.alt}
              className="min-h-[410px]"
              imgClassName="object-cover object-center"
              label={materialsAsset.label}
              src={materialsAsset.src}
              title={materialsAsset.title}
            />

            <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
              <Panel padding="md" tone="dark">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-accent-gold">
                  Experiencia cuidada
                </p>
                <p className="mt-3 font-display text-[1.6rem] leading-tight text-mist">
                  Formación y servicio se presentan con orden visual, criterio y una atmósfera más sobria.
                </p>
                <p className="mt-4 text-sm leading-7 text-mist/66">
                  La experiencia premium no depende de exceso. Depende de buenos materiales, mejores
                  decisiones visuales y una propuesta que se entiende rápido.
                </p>
              </Panel>

              <ImagePanel
                alt={facultyAsset.alt}
                className="min-h-[220px]"
                imgClassName="object-cover object-center"
                label={facultyAsset.label}
                src={facultyAsset.src}
                title={facultyAsset.title}
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

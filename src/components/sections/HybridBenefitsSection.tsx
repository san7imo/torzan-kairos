import { homeBenefits } from '../../content/site';
import { Reveal } from '../common/Reveal';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

export function HybridBenefitsSection() {
  return (
    <Section tone="transparent">
      <SectionHeading
        eyebrow="Por qué Torzan Kairos"
        title="Una marca pensada para formar, atender y acompañar con una presencia clara y contemporánea."
        description="Estos pilares resumen la manera en que Torzan Kairos entiende la experiencia académica y la atención al público."
      />

      <div className="mt-14 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
        {homeBenefits.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08}>
            <article className="h-full rounded-[2rem] border border-white/10 bg-white/6 p-7 shadow-[0_26px_70px_rgba(0,0,0,0.16)] backdrop-blur-sm">
              <h3 className="font-display text-[1.9rem] leading-tight text-mist">{item.title}</h3>
              <p className="mt-4 text-sm leading-8 text-mist/72">{item.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

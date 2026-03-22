import { values } from '../../content/site';
import { Reveal } from '../common/Reveal';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { ValueCard } from '../ui/ValueCard';

export function ValuesSection() {
  return (
    <Section tone="light">
      <SectionHeading
        eyebrow="Pilares"
        title="Una identidad académica construida sobre maestría, criterio y respeto por el oficio."
        description="Los pilares aprobados se presentan con peso visual para que la marca se entienda antes de entrar en el detalle de los programas."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {values.map((value, index) => (
          <Reveal key={value.title} delay={index * 0.07}>
            <ValueCard
              description={value.description}
              index={index + 1}
              title={value.title}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

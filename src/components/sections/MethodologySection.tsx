import { Compass, ShieldCheck, Sparkles, UsersRound } from 'lucide-react';
import { methodologyFeatures } from '../../content/site';
import { Reveal } from '../common/Reveal';
import { InfoCard } from '../ui/InfoCard';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

const icons = [ShieldCheck, Sparkles, Compass, UsersRound];

export function MethodologySection() {
  return (
    <Section tone="dark">
      <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Metodología"
            title="Una propuesta que equilibra excelencia técnica, mirada creativa y formación humana."
            description="El aprendizaje se diseña para responder al oficio con rigor y a la trayectoria profesional con profundidad."
            invert
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {methodologyFeatures.map((feature, index) => {
            const Icon = icons[index];

            return (
              <Reveal key={feature.title} delay={index * 0.08}>
                <InfoCard
                  description={feature.description}
                  icon={<Icon size={20} />}
                  title={feature.title}
                />
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

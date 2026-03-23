import { ArrowUpRight } from 'lucide-react';
import { homeInstitutionalHighlights } from '../../content/site';
import { Reveal } from '../common/Reveal';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

export function HybridInstitutionSection() {
  return (
    <Section tone="light">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow="Institucional"
            title="Torzan Kairos presenta una propuesta que une formación, belleza y acompañamiento bajo una misma identidad."
            description="La marca se construye desde la trayectoria, la técnica y una experiencia humana que cuida tanto al estudiante como al cliente."
          />

          <Button className="mt-8" to="/historia" variant="ghost">
            Conocer la historia
            <ArrowUpRight size={16} />
          </Button>
        </Reveal>

        <div className="grid gap-4">
          {homeInstitutionalHighlights.map((item, index) => (
            <Reveal key={item} delay={index * 0.08}>
              <article className="rounded-[1.8rem] border border-brand-blue/10 bg-white p-6 shadow-[0_18px_50px_rgba(20,47,74,0.08)]">
                <p className="text-sm leading-8 text-brand-blue/76">{item}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

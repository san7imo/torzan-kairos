import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '../common/Reveal';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

export function StoryPreviewSection() {
  return (
    <Section tone="light">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <Reveal>
          <SectionHeading
            eyebrow="Quiénes somos"
            title="Una academia fundada en 2010 para formar con exigencia, sensibilidad y visión."
            description="Torzan Kairos Academia nace desde el cruce entre la tradición estética colombiana y una trayectoria consolidada en España, con una mirada centrada en oficio, evolución y formación integral."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-[2rem] border border-brand-blue/10 bg-brand-blue p-8 text-mist shadow-[0_24px_70px_rgba(20,47,74,0.16)]">
            <p className="text-sm leading-7 text-mist/76">
              La propuesta institucional combina técnica rigurosa, bioseguridad, ética y
              desarrollo del ser para preparar perfiles con criterio profesional y cercanía
              humana.
            </p>
            <Link
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-accent-gold transition hover:gap-3"
              to="/historia"
            >
              Explorar historia completa
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

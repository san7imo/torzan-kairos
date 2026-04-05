import { upcomingCommercialCards } from '../../data/services';
import { Reveal } from '../common/Reveal';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

export function HomeUpcomingSection() {
  return (
    <Section tone="dark">
      <SectionHeading
        eyebrow="Próximamente"
        title="Tarjetas listas para sumar novedades comerciales sin desordenar la experiencia actual."
        description="Este bloque permite sostener una percepción de avance real aunque todavía falten piezas definitivas de la oferta comercial."
        invert
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {upcomingCommercialCards.map((card, index) => (
          <Reveal key={card.title} delay={index * 0.08}>
            <article className="rounded-[2rem] border border-white/10 bg-white/6 p-7 transition duration-300 hover:-translate-y-1 hover:border-accent-gold/35">
              <span className="inline-flex rounded-full border border-accent-gold/30 bg-accent-gold/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-accent-gold">
                {card.label}
              </span>
              <h3 className="mt-5 font-display text-3xl leading-tight text-mist">{card.title}</h3>
              <p className="mt-4 text-sm leading-8 text-mist/72">{card.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

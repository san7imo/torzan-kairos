import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '../common/Reveal';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';

export function StoryClosingSection() {
  return (
    <Section className="pt-18 pb-24" tone="deep">
      <Reveal>
        <div className="rounded-[2.4rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] px-6 py-10 shadow-[0_26px_80px_rgba(0,0,0,0.24)] backdrop-blur-sm sm:px-10 sm:py-14 lg:grid lg:grid-cols-[1fr_auto] lg:items-end lg:gap-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-gold">
              Cierre editorial
            </p>
            <h2 className="mt-5 font-display text-4xl leading-tight text-balance text-mist sm:text-5xl">
              La historia queda lista para crecer con retratos, archivo visual y narrativa final.
            </h2>
            <p className="mt-5 text-base leading-8 text-mist/72">
              Pendientes para una próxima iteración: fotografía de fundadora, material visual de
              marca y ajustes finos de copy si el cliente entrega versión definitiva.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
            <Button to="/contacto" variant="primary">
              Solicitar información
            </Button>
            <Link
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/14 px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-mist transition hover:border-accent-gold/45 hover:text-accent-gold"
              to="/"
            >
              Volver al inicio
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

import { ArrowRight } from 'lucide-react';
import { Reveal } from '../common/Reveal';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';

export function FinalCTASection() {
  return (
    <Section className="pb-24 pt-18" tone="transparent">
      <Reveal>
        <div className="rounded-[2.4rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.09),rgba(255,255,255,0.04))] px-6 py-10 shadow-[0_26px_80px_rgba(0,0,0,0.2)] backdrop-blur-sm sm:px-10 sm:py-14 lg:flex lg:items-end lg:justify-between lg:gap-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-gold">
              Cierre de Home
            </p>
            <h2 className="mt-5 font-display text-4xl leading-tight text-balance text-mist sm:text-5xl">
              Una primera impresión lista para presentar la academia como avance real.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-mist/72">
              El siguiente paso puede ser una conversación de contacto o la profundización
              editorial de la historia de la marca.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
            <Button to="/contacto" variant="primary">
              Solicitar información
            </Button>
            <Button to="/historia" variant="secondary">
              Ver historia
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

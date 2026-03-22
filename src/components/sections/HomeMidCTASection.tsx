import { Button } from '../ui/Button';
import { Section } from '../ui/Section';
import { Reveal } from '../common/Reveal';

export function HomeMidCTASection() {
  return (
    <Section className="py-14 sm:py-16" tone="transparent">
      <Reveal>
        <div className="rounded-[2.2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] px-6 py-9 shadow-[0_24px_70px_rgba(0,0,0,0.18)] backdrop-blur-sm lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-gold">
              Contacto comercial
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-balance text-mist sm:text-[2.8rem]">
              Si el contenido final aún no está listo, la conversación puede empezar igual.
            </h2>
            <p className="mt-4 text-base leading-8 text-mist/72">
              Este bloque está pensado para capturar interés mientras llegan cursos, horarios,
              precios y materiales visuales definitivos.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
            <Button to="/contacto" variant="primary">
              Solicitar información
            </Button>
            <Button to="/historia" variant="secondary">
              Conocer la academia
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

import { ArrowRight } from 'lucide-react';
import { whatsappMessages } from '../../data/whatsapp';
import { Reveal } from '../common/Reveal';
import { Button } from '../ui/Button';
import { Panel } from '../ui/Panel';
import { Section } from '../ui/Section';
import { WhatsAppCTA } from '../ui/WhatsAppCTA';

export function FinalCTASection() {
  return (
    <Section className="pb-24 pt-18" tone="transparent">
      <Reveal>
        <Panel tone="dark">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-gold">
              Siguiente paso
            </p>
            <h2 className="mt-5 font-display text-4xl leading-tight text-balance text-mist sm:text-5xl">
              Estamos listos para orientarte en tu matrícula, tu reserva o la información que necesites.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-mist/72">
              Elige el canal que prefieras y conversemos sobre cursos, servicios y disponibilidad.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppCTA
              label="Reservar por WhatsApp"
              message={whatsappMessages.contactBooking}
              variant="primary"
            />
            <Button to="/historia" variant="secondary">
              Ver historia
              <ArrowRight size={16} />
            </Button>
          </div>
        </Panel>
      </Reveal>
    </Section>
  );
}

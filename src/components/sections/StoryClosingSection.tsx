import { ArrowRight } from 'lucide-react';
import { whatsappMessages } from '../../data/whatsapp';
import { Reveal } from '../common/Reveal';
import { Button } from '../ui/Button';
import { Panel } from '../ui/Panel';
import { Section } from '../ui/Section';
import { WhatsAppCTA } from '../ui/WhatsAppCTA';

export function StoryClosingSection() {
  return (
    <Section className="pb-24 pt-18" tone="transparent">
      <Reveal>
        <Panel tone="dark">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-gold">
              Continuar la experiencia
            </p>
            <h2 className="mt-5 font-display text-4xl leading-tight text-balance text-mist sm:text-5xl">
              La historia de Torzan Kairos vive hoy en sus programas, sus servicios y su manera de acompañar a cada persona.
            </h2>
            <p className="mt-5 text-base leading-8 text-mist/72">
              Si quieres conocer más sobre formación, reservar una cita o recibir orientación,
              estamos listos para atenderte.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/cursos" variant="primary">
              Ver cursos
            </Button>
            <WhatsAppCTA
              label="Reservar por WhatsApp"
              message={whatsappMessages.contactBooking}
              variant="secondary"
            />
            <Button to="/contacto" variant="secondary">
              Contacto
              <ArrowRight size={16} />
            </Button>
          </div>
        </Panel>
      </Reveal>
    </Section>
  );
}

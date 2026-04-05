import { ArrowRight } from 'lucide-react';
import { whatsappMessages } from '../../data/whatsapp';
import { Reveal } from '../common/Reveal';
import { Button } from '../ui/Button';
import { Panel } from '../ui/Panel';
import { Section } from '../ui/Section';
import { WhatsAppCTA } from '../ui/WhatsAppCTA';

export function HybridFinalCTASection() {
  return (
    <Section className="pb-24 pt-18" tone="transparent">
      <Reveal>
        <div className="grid gap-5 lg:grid-cols-2">
          <Panel className="h-full" tone="dark">
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.3em] text-accent-gold">Academia</p>
            <h2 className="mt-5 font-display text-[2.4rem] leading-tight text-balance text-mist sm:text-[2.8rem]">
              Quiero formarme
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-8 text-mist/72 sm:text-base">
              Explora barbería, peluquería profesional y uñas con páginas más claras, módulos completos
              y acceso directo a matrícula.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/cursos" variant="primary">
                Ver cursos
              </Button>
              <Button to="/historia" variant="secondary">
                Conocer la historia
                <ArrowRight size={16} />
              </Button>
            </div>
          </Panel>

          <Panel className="h-full" tone="dark">
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.3em] text-accent-gold">Servicios</p>
            <h2 className="mt-5 font-display text-[2.4rem] leading-tight text-balance text-mist sm:text-[2.8rem]">
              Quiero reservar
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-8 text-mist/72 sm:text-base">
              Agenda por WhatsApp o revisa la carta de peluquería, uñas, cejas y cuidado personal con
              una lectura rápida y comercial.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppCTA
                label="Reservar por WhatsApp"
                message={whatsappMessages.contactBooking}
                variant="primary"
              />
              <Button to="/servicios" variant="secondary">
                Ver servicios
                <ArrowRight size={16} />
              </Button>
            </div>
          </Panel>
        </div>
      </Reveal>
    </Section>
  );
}

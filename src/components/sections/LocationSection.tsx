import { Clock3, MapPinned, MessageCircleMore } from 'lucide-react';
import { Reveal } from '../common/Reveal';
import { Button } from '../ui/Button';
import { PlaceholderMedia } from '../ui/PlaceholderMedia';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

export function LocationSection() {
  return (
    <Section tone="dark">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <SectionHeading
            eyebrow="Ubicación y presencia"
            title="Una base clara para incorporar ubicación, horarios y canales definitivos cuando estén aprobados."
            description="Por ahora el bloque mantiene una presentación cuidada sin inventar dirección ni información comercial sensible."
            invert
          />

          <div className="mt-8 space-y-4">
            <article className="flex gap-4 rounded-[1.6rem] border border-white/10 bg-white/5 p-5">
              <MapPinned className="mt-1 text-accent-gold" size={18} />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-mist">
                  Ubicación
                </p>
                <p className="mt-2 text-sm leading-7 text-mist/72">
                  Información de sede en actualización.
                </p>
              </div>
            </article>

            <article className="flex gap-4 rounded-[1.6rem] border border-white/10 bg-white/5 p-5">
              <Clock3 className="mt-1 text-accent-gold" size={18} />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-mist">
                  Atención
                </p>
                <p className="mt-2 text-sm leading-7 text-mist/72">
                  Horarios y disponibilidad próximamente.
                </p>
              </div>
            </article>
          </div>

          <Button className="mt-8" to="/contacto" variant="primary">
            <MessageCircleMore size={16} />
            Ir a contacto
          </Button>
        </Reveal>

        <Reveal delay={0.12}>
          <PlaceholderMedia
            accent="grid"
            className="min-h-[440px]"
            label="Mapa placeholder"
            title="Módulo listo para integrar mapa y referencia operativa final"
          />
        </Reveal>
      </div>
    </Section>
  );
}

import { MapPinned } from 'lucide-react';
import { Reveal } from '../common/Reveal';
import { PlaceholderMedia } from '../ui/PlaceholderMedia';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

export function ContactLocationSection() {
  return (
    <Section tone="dark">
      <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
        <Reveal>
          <SectionHeading
            eyebrow="Ubicación"
            title="Un bloque listo para integrar mapa embebido o imagen de sede sin rehacer la página."
            description="Mientras no exista dirección final ni embed definitivo, esta sección mantiene la presentación clara y profesional."
            invert
          />

          <div className="mt-8 rounded-[1.8rem] border border-white/10 bg-white/5 p-6">
            <div className="flex items-start gap-4">
              <span className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-full border border-accent-gold/28 bg-accent-gold/10 text-accent-gold">
                <MapPinned size={18} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-gold">
                  Referencia de sede
                </p>
                <p className="mt-2 text-sm leading-7 text-mist/72">
                  Dirección operativa en actualización. Reemplazar este bloque por mapa o embed
                  cuando el dato final sea aprobado.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <PlaceholderMedia
            accent="grid"
            className="min-h-[460px]"
            label="Mapa o imagen placeholder"
            title="Contenedor preparado para mapa embed, captura de ubicación o visual de sede"
          />
        </Reveal>
      </div>
    </Section>
  );
}

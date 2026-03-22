import { facilityTiles } from '../../content/site';
import { Reveal } from '../common/Reveal';
import { PlaceholderMedia } from '../ui/PlaceholderMedia';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

const accents = ['grid', 'frame', 'arched', 'geometric', 'frame'] as const;

export function FacilitiesSection() {
  return (
    <Section tone="light">
      <SectionHeading
        eyebrow="Instalaciones y experiencia visual"
        title="Una galería placeholder pensada para verse intencional desde el primer avance."
        description="La composición ya funciona como soporte premium aunque todavía falten fotografías y material final."
      />

      <div className="mt-14 grid auto-rows-[minmax(220px,1fr)] gap-5 md:grid-cols-3">
        {facilityTiles.map((tile, index) => (
          <Reveal
            key={tile.title}
            className={index === 0 ? 'md:col-span-2 md:row-span-2' : ''}
            delay={index * 0.06}
          >
            <PlaceholderMedia
              accent={accents[index]}
              className="h-full min-h-[220px]"
              label={tile.label}
              title={tile.title}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

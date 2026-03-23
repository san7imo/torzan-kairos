import { homeGalleryAssets } from '../../data/media';
import { Reveal } from '../common/Reveal';
import { ImagePanel } from '../ui/ImagePanel';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

const aspectClasses = {
  portrait: 'md:row-span-2 min-h-[520px]',
  landscape: 'min-h-[260px]',
  square: 'min-h-[260px]',
};

export function HybridGallerySection() {
  return (
    <Section tone="dark">
      <SectionHeading
        eyebrow="Galería"
        title="Una selección visual que acompaña la identidad de Torzan Kairos con una lectura limpia y editorial."
        description="Las imágenes reales del proyecto ya se integran en el recorrido para reforzar la presencia de cursos, servicios y experiencia de marca."
        invert
      />

      <div className="mt-14 grid gap-5 md:grid-cols-[1.15fr_0.85fr]">
        {homeGalleryAssets.map((asset, index) => (
          <Reveal key={asset.title} delay={index * 0.08}>
            <ImagePanel
              alt={asset.alt}
              className={aspectClasses[asset.aspect]}
              imgClassName="object-cover object-center"
              label={asset.label}
              src={asset.src}
              title={asset.title}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

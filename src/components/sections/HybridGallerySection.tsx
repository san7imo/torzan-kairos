import { experienceAssets, homeGalleryAssets, identityAssets } from '../../data/media';
import { Reveal } from '../common/Reveal';
import { ImagePanel } from '../ui/ImagePanel';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

export function HybridGallerySection() {
  const showcaseAssets = [
    homeGalleryAssets[0],
    homeGalleryAssets[1],
    identityAssets[0],
    identityAssets[1],
    experienceAssets[2],
  ];

  return (
    <Section tone="light">
      <SectionHeading
        eyebrow="Galería"
        title="Una selección visual que acompaña la identidad de Torzan Kairos con una lectura limpia y editorial."
        description="Las imágenes reales del proyecto ya se integran en el recorrido para reforzar la presencia de cursos, servicios y experiencia de marca."
      />

      <div className="mt-14 grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
        <Reveal delay={0.04}>
          <ImagePanel
            alt={showcaseAssets[0].alt}
            className="min-h-[560px]"
            imgClassName="object-cover object-center"
            label={showcaseAssets[0].label}
            src={showcaseAssets[0].src}
            title={showcaseAssets[0].title}
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {showcaseAssets.slice(1).map((asset, index) => (
            <Reveal key={asset.title} delay={0.1 + index * 0.06}>
              <ImagePanel
                alt={asset.alt}
                className="min-h-[240px]"
                imgClassName="object-cover object-center"
                label={asset.label}
                src={asset.src}
                title={asset.title}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

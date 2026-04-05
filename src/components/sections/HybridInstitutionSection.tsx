import { ArrowUpRight } from 'lucide-react';
import { homeInstitutionalHighlights } from '../../content/site';
import { storyIdentityAsset, storyNarrativeAsset } from '../../data/media';
import { Reveal } from '../common/Reveal';
import { Button } from '../ui/Button';
import { ImagePanel } from '../ui/ImagePanel';
import { Panel } from '../ui/Panel';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

export function HybridInstitutionSection() {
  return (
    <Section tone="light">
      <div className="grid gap-10 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
        <Reveal className="xl:pr-8">
          <SectionHeading
            eyebrow="Institucional"
            title="Torzan Kairos presenta una propuesta que une formación, belleza y acompañamiento bajo una misma identidad."
            description="La marca se construye desde la trayectoria, la técnica y una experiencia humana que cuida tanto al estudiante como al cliente."
          />

          <p className="mt-8 max-w-xl text-[0.96rem] leading-8 text-brand-blue/72">
            La experiencia no se apoya en volumen visual ni en exceso de discurso. Se apoya en oficio,
            identidad bien presentada y una lectura clara de lo que la marca ofrece hoy.
          </p>

          <Button className="mt-8" to="/historia" variant="ghost">
            Conocer la historia
            <ArrowUpRight size={16} />
          </Button>
        </Reveal>

        <div className="grid gap-5">
          <Reveal delay={0.08}>
            <ImagePanel
              alt={storyNarrativeAsset.alt}
              className="min-h-[350px]"
              imgClassName="object-cover object-center"
              label={storyNarrativeAsset.label}
              src={storyNarrativeAsset.src}
              title={storyNarrativeAsset.title}
            />
          </Reveal>

          <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
            <Reveal delay={0.12}>
              <ImagePanel
                alt={storyIdentityAsset.alt}
                className="min-h-[220px]"
                imgClassName="object-cover object-center"
                label={storyIdentityAsset.label}
                src={storyIdentityAsset.src}
                title={storyIdentityAsset.title}
              />
            </Reveal>

            <div className="grid gap-4">
              {homeInstitutionalHighlights.map((item, index) => (
                <Reveal key={item} delay={0.16 + index * 0.06}>
                  <Panel padding="md" tone="muted">
                    <p className="text-sm leading-7 text-brand-blue/76">{item}</p>
                  </Panel>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

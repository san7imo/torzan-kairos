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
            title="La academia de peluquería, barbería y estética que acompaña talento real en Madrid."
            description="Formamos futuros profesionales y atendemos al público con la misma exigencia técnica, la misma estética cuidada y la misma cercanía."
          />

          <p className="mt-8 max-w-xl text-[0.96rem] leading-8 text-brand-blue/72">
            Aquí vienes a aprender, perfeccionar tu técnica o reservar un servicio con claridad. Todo el
            recorrido está pensado para que entiendas rápido qué hacemos y por qué confiar en nosotros.
          </p>

          <Button className="mt-8" to="/historia" variant="ghost">
            Conocer nuestra historia
            <ArrowUpRight size={16} />
          </Button>
        </Reveal>

        <div className="grid gap-5">
          <Reveal delay={0.08}>
            <ImagePanel
              alt={storyNarrativeAsset.alt}
              className="min-h-[300px] sm:min-h-[350px]"
              imgClassName="object-cover object-[center_28%]"
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
                imgClassName="object-cover object-[center_35%]"
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

import { Mail, MapPin, MessageCircleMore } from 'lucide-react';
import { pageHeroes, pageMetadata } from '../content/site';
import { contactPageHighlights, contactQuickDetails } from '../data/contact';
import { pageHeroAssets } from '../data/media';
import { ContactChannelsSection } from '../components/sections/ContactChannelsSection';
import { ContactFAQSection } from '../components/sections/ContactFAQSection';
import { ContactLocationSection } from '../components/sections/ContactLocationSection';
import { FinalCTASection } from '../components/sections/FinalCTASection';
import { PageHero } from '../components/layout/PageHero';
import { ContactDetailCard } from '../components/ui/ContactDetailCard';
import { ImagePanel } from '../components/ui/ImagePanel';
import { Panel } from '../components/ui/Panel';
import { usePageMetadata } from '../hooks/usePageMetadata';

const heroIcons = [MessageCircleMore, Mail, MapPin] as const;

export function ContactPage() {
  usePageMetadata(pageMetadata.contact);

  const heroDetails = [contactQuickDetails[0], contactQuickDetails[2], contactQuickDetails[3]];

  return (
    <>
      <PageHero
        eyebrow={pageHeroes.contact.eyebrow}
        title={pageHeroes.contact.title}
        description={pageHeroes.contact.description}
        aside={
          <div className="space-y-5">
            <ImagePanel
              alt={pageHeroAssets.contact.alt}
              className="min-h-[320px]"
              imgClassName="object-cover object-center"
              label={pageHeroAssets.contact.label}
              src={pageHeroAssets.contact.src}
              title={pageHeroAssets.contact.title}
            />

            <div className="grid gap-4">
              {heroDetails.map((detail, index) => (
                <ContactDetailCard key={detail.label} detail={detail} icon={heroIcons[index]} tone="dark" />
              ))}
            </div>

            <Panel tone="dark">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-gold">Puntos clave</p>
              <div className="mt-5 grid gap-3">
                {contactPageHighlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.2rem] border border-white/8 bg-white/4 px-4 py-4 text-sm leading-7 text-mist/76"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Panel>
          </div>
        }
      />

      <ContactChannelsSection />
      <ContactLocationSection />
      <ContactFAQSection />
      <FinalCTASection />
    </>
  );
}

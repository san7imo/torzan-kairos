import { Mail, MapPin, MessageCircleMore } from 'lucide-react';
import { pageHeroes, pageMetadata } from '../content/site';
import { contactPageHighlights, contactQuickDetails } from '../data/contact';
import { ContactChannelsSection } from '../components/sections/ContactChannelsSection';
import { ContactFAQSection } from '../components/sections/ContactFAQSection';
import { ContactLocationSection } from '../components/sections/ContactLocationSection';
import { FinalCTASection } from '../components/sections/FinalCTASection';
import { PageHero } from '../components/layout/PageHero';
import { ContactDetailCard } from '../components/ui/ContactDetailCard';
import { SectionHeading } from '../components/ui/SectionHeading';
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
            <div className="rounded-[2rem] border border-white/10 bg-white/6 p-6 backdrop-blur-sm">
              <SectionHeading
                eyebrow="Atención"
                title="Canales claros para resolver dudas, coordinar reservas y acompañar tu proceso."
                description="Torzan Kairos reúne en un solo lugar los datos clave para una comunicación más ágil y cercana."
                invert
              />
            </div>
            <div className="grid gap-4">
              {heroDetails.map((detail, index) => (
                <ContactDetailCard key={detail.label} detail={detail} icon={heroIcons[index]} tone="dark" />
              ))}
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/6 p-6 backdrop-blur-sm">
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
            </div>
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

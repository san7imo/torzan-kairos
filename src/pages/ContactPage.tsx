import { contactPageHighlights, pageHeroes, pageMetadata } from '../content/site';
import { ContactChannelsSection } from '../components/sections/ContactChannelsSection';
import { ContactFAQSection } from '../components/sections/ContactFAQSection';
import { ContactLocationSection } from '../components/sections/ContactLocationSection';
import { FinalCTASection } from '../components/sections/FinalCTASection';
import { PageHero } from '../components/layout/PageHero';
import { PlaceholderMedia } from '../components/ui/PlaceholderMedia';
import { usePageMetadata } from '../hooks/usePageMetadata';

export function ContactPage() {
  usePageMetadata(pageMetadata.contact);

  return (
    <>
      <PageHero
        eyebrow={pageHeroes.contact.eyebrow}
        title={pageHeroes.contact.title}
        description={pageHeroes.contact.description}
        aside={
          <div className="space-y-5">
            <PlaceholderMedia
              accent="frame"
              className="min-h-[360px]"
              label={pageHeroes.contact.mediaLabel}
              title={pageHeroes.contact.mediaTitle}
            />
            <div className="rounded-[2rem] border border-white/10 bg-white/6 p-6 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-gold">
                Base actual
              </p>
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

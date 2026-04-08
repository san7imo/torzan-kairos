import { MapPinned, TimerReset } from 'lucide-react';
import { contactLocationContent, contactQuickDetails } from '../../data/contact';
import { contactLocationAsset } from '../../data/media';
import { whatsappMessages } from '../../data/whatsapp';
import { Reveal } from '../common/Reveal';
import { ContactDetailCard } from '../ui/ContactDetailCard';
import { ImagePanel } from '../ui/ImagePanel';
import { PageIntro } from '../ui/PageIntro';
import { Section } from '../ui/Section';
import { WhatsAppCTA } from '../ui/WhatsAppCTA';

const locationDetail = contactQuickDetails.find((detail) => detail.kind === 'location');
const hoursDetail = contactQuickDetails.find((detail) => detail.kind === 'hours');

export function ContactLocationSection() {
  return (
    <Section tone="dark">
      <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
        <Reveal>
          <PageIntro
            eyebrow={contactLocationContent.eyebrow}
            title={contactLocationContent.title}
            description={contactLocationContent.description}
            tone="dark"
          />

          <div className="mt-8 grid gap-4">
            {locationDetail ? (
              <ContactDetailCard detail={locationDetail} icon={MapPinned} tone="dark" />
            ) : null}
            {hoursDetail ? (
              <ContactDetailCard detail={hoursDetail} icon={TimerReset} tone="dark" />
            ) : null}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppCTA label="Coordinar por WhatsApp" message={whatsappMessages.contactBooking} />
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <ImagePanel
            alt={contactLocationAsset.alt}
            className="min-h-[320px] sm:min-h-[460px]"
            imgClassName="object-cover object-[center_22%]"
            label={contactLocationContent.mediaLabel}
            src={contactLocationAsset.src}
            title={contactLocationContent.mediaTitle}
          />
        </Reveal>
      </div>
    </Section>
  );
}

import { MapPinned, Phone } from 'lucide-react';
import { contactQuickDetails } from '../../data/contact';
import { contactLocationAsset } from '../../data/media';
import { whatsappMessages } from '../../data/whatsapp';
import { Reveal } from '../common/Reveal';
import { Button } from '../ui/Button';
import { ContactDetailCard } from '../ui/ContactDetailCard';
import { ImagePanel } from '../ui/ImagePanel';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { WhatsAppCTA } from '../ui/WhatsAppCTA';

const locationDetail = contactQuickDetails.find((detail) => detail.kind === 'location');
const phoneDetail = contactQuickDetails.find((detail) => detail.kind === 'phone');
const whatsappDetail = contactQuickDetails.find((detail) => detail.kind === 'whatsapp');

export function HybridLocationSection() {
  return (
    <Section tone="light">
      <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <Reveal>
          <SectionHeading
            eyebrow="Ubicación y contacto"
            title="Un mismo punto para orientar matrículas, resolver dudas y acompañar reservas."
            description="Dirección, canales de atención y acceso directo a WhatsApp conviven en un bloque claro y fácil de recorrer."
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {locationDetail ? <ContactDetailCard className="sm:col-span-2" detail={locationDetail} icon={MapPinned} /> : null}
            {whatsappDetail ? <ContactDetailCard detail={whatsappDetail} icon={Phone} /> : null}
            {phoneDetail ? <ContactDetailCard detail={phoneDetail} icon={Phone} /> : null}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppCTA label="Reservar por WhatsApp" message={whatsappMessages.contactBooking} />
            <Button to="/contacto" variant="ghost">
              Ir a contacto
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <ImagePanel
            alt={contactLocationAsset.alt}
            className="min-h-[460px]"
            imgClassName="object-cover object-center"
            label={contactLocationAsset.label}
            src={contactLocationAsset.src}
            title={contactLocationAsset.title}
          />
        </Reveal>
      </div>
    </Section>
  );
}

import { Mail, MapPin, MessageCircleMore, Phone, Send, TimerReset } from 'lucide-react';
import {
  contactFormFields,
  contactFormNote,
  contactPageHighlights,
  contactQuickDetails,
} from '../../data/contact';
import { whatsappMessages } from '../../data/whatsapp';
import type { ContactDetailKind } from '../../types/site';
import { Reveal } from '../common/Reveal';
import { ContactDetailCard } from '../ui/ContactDetailCard';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { WhatsAppCTA } from '../ui/WhatsAppCTA';

const detailIcons: Record<ContactDetailKind, typeof Phone> = {
  whatsapp: MessageCircleMore,
  phone: Phone,
  email: Mail,
  location: MapPin,
  hours: TimerReset,
};

export function ContactChannelsSection() {
  return (
    <Section tone="light">
      <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
        <Reveal>
          <div className="rounded-[2rem] border border-brand-blue/10 bg-brand-blue p-7 text-mist shadow-[0_24px_70px_rgba(20,47,74,0.16)]">
            <SectionHeading
              eyebrow="Contacto rápido"
              title="Canales directos para cursos, reservas y orientación personalizada."
              description="WhatsApp, teléfono, correo, dirección y horario se presentan en un bloque claro para facilitar el siguiente paso."
              invert
            />

            <ul className="mt-8 grid gap-4" aria-label="Canales de contacto">
              {contactQuickDetails.map((detail, index) => {
                const Icon = detailIcons[detail.kind ?? 'phone'];

                return (
                  <li key={detail.label} className="list-none">
                    <Reveal delay={index * 0.05}>
                      <ContactDetailCard detail={detail} icon={Icon} tone="dark" />
                    </Reveal>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppCTA className="w-full sm:w-auto" label="Escribir por WhatsApp" message={whatsappMessages.contactBooking} />
              <Button className="w-full sm:w-auto" to="/servicios" variant="secondary">
                Ver servicios
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-[2rem] border border-brand-blue/10 bg-white p-7 shadow-[0_18px_60px_rgba(20,47,74,0.08)]">
            <SectionHeading
              eyebrow="Formulario"
              title="Déjanos tus datos y cuéntanos cómo podemos ayudarte."
              description="La estructura ya contempla la información esencial para orientar matrícula, reserva o solicitud de información."
            />

            <form className="mt-8 grid gap-4 sm:grid-cols-2" aria-describedby="contact-form-note">
              {contactFormFields.map((field) => (
                <label
                  key={field.id}
                  className={field.colSpan === 2 ? 'sm:col-span-2' : undefined}
                  htmlFor={field.id}
                >
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue/72">
                    {field.label}
                  </span>
                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.id}
                      name={field.name}
                      rows={field.rows}
                      className="min-h-40 w-full rounded-2xl border border-brand-blue/12 bg-mist/35 px-4 py-3 text-brand-blue placeholder:text-brand-blue/36"
                      placeholder={field.placeholder}
                    />
                  ) : (
                    <input
                      id={field.id}
                      name={field.name}
                      className="w-full rounded-2xl border border-brand-blue/12 bg-mist/35 px-4 py-3 text-brand-blue placeholder:text-brand-blue/36"
                      placeholder={field.placeholder}
                      type={field.type}
                    />
                  )}
                </label>
              ))}
              <div className="sm:col-span-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p id="contact-form-note" className="text-xs uppercase tracking-[0.14em] text-brand-blue/48">
                  {contactFormNote}
                </p>
                <Button type="button" variant="primary">
                  <Send size={16} />
                  Enviar solicitud
                </Button>
              </div>
            </form>

            <ul className="mt-8 grid gap-3 md:grid-cols-3" aria-label="Puntos clave del bloque de contacto">
              {contactPageHighlights.map((item, index) => (
                <Reveal key={item} delay={index * 0.06}>
                  <li className="list-none rounded-[1.4rem] border border-brand-blue/10 bg-mist/35 px-4 py-4 text-sm leading-7 text-brand-blue/72">
                    {item}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

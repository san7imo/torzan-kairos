import { Mail, MapPin, MessageCircle, Phone, Send, TimerReset } from 'lucide-react';
import { contactPageHighlights, contactQuickDetails } from '../../content/site';
import { Reveal } from '../common/Reveal';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

const detailIcons = [Phone, Mail, MapPin, TimerReset];

export function ContactChannelsSection() {
  return (
    <Section tone="light">
      <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
        <Reveal>
          <div className="rounded-[2rem] border border-brand-blue/10 bg-brand-blue p-7 text-mist shadow-[0_24px_70px_rgba(20,47,74,0.16)]">
            <SectionHeading
              eyebrow="Contacto rápido"
              title="Canales visibles, editables y listos para reemplazar por datos reales."
              description="Los textos actuales son placeholders controlados para no inventar información operativa todavía no confirmada."
              invert
            />

            <ul className="mt-8 grid gap-4" aria-label="Canales de contacto provisionales">
              {contactQuickDetails.map((detail, index) => {
                const Icon = detailIcons[index];

                return (
                  <li
                    key={detail.label}
                    className="rounded-[1.6rem] border border-white/10 bg-white/5 p-5 list-none"
                  >
                    <div className="flex items-start gap-4">
                      <span className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent-gold/28 bg-accent-gold/10 text-accent-gold">
                        <Icon size={18} />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-gold">
                          {detail.label}
                        </p>
                        <p className="mt-2 text-sm leading-7 text-mist">{detail.value}</p>
                        <p className="mt-2 text-xs uppercase tracking-[0.14em] text-mist/46">
                          {detail.note}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            <Button className="mt-8 w-full sm:w-auto" href="#" variant="primary">
              <MessageCircle size={16} />
              WhatsApp placeholder
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-[2rem] border border-brand-blue/10 bg-white p-7 shadow-[0_18px_60px_rgba(20,47,74,0.08)]">
            <SectionHeading
              eyebrow="Formulario"
              title="Formulario visual listo para integrarse con backend más adelante."
              description="La estructura ya contempla los campos comerciales básicos sin amarrarse todavía a un servicio externo."
            />

            <form className="mt-8 grid gap-4 sm:grid-cols-2" aria-describedby="contact-form-note">
              <label htmlFor="contact-name">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue/72">
                  Nombre
                </span>
                <input
                  id="contact-name"
                  name="name"
                  className="w-full rounded-2xl border border-brand-blue/12 bg-mist/35 px-4 py-3 text-brand-blue placeholder:text-brand-blue/36"
                  placeholder="Nombre completo"
                  type="text"
                />
              </label>
              <label htmlFor="contact-email">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue/72">
                  Correo
                </span>
                <input
                  id="contact-email"
                  name="email"
                  className="w-full rounded-2xl border border-brand-blue/12 bg-mist/35 px-4 py-3 text-brand-blue placeholder:text-brand-blue/36"
                  placeholder="correo@ejemplo.com"
                  type="email"
                />
              </label>
              <label htmlFor="contact-phone">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue/72">
                  Teléfono
                </span>
                <input
                  id="contact-phone"
                  name="phone"
                  className="w-full rounded-2xl border border-brand-blue/12 bg-mist/35 px-4 py-3 text-brand-blue placeholder:text-brand-blue/36"
                  placeholder="Número de contacto"
                  type="tel"
                />
              </label>
              <label htmlFor="contact-subject">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue/72">
                  Asunto
                </span>
                <input
                  id="contact-subject"
                  name="subject"
                  className="w-full rounded-2xl border border-brand-blue/12 bg-mist/35 px-4 py-3 text-brand-blue placeholder:text-brand-blue/36"
                  placeholder="Tema de interés"
                  type="text"
                />
              </label>
              <label className="sm:col-span-2" htmlFor="contact-message">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue/72">
                  Mensaje
                </span>
                <textarea
                  id="contact-message"
                  name="message"
                  className="min-h-40 w-full rounded-2xl border border-brand-blue/12 bg-mist/35 px-4 py-3 text-brand-blue placeholder:text-brand-blue/36"
                  placeholder="Cuéntanos qué información te gustaría recibir"
                />
              </label>
              <div className="sm:col-span-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p id="contact-form-note" className="text-xs uppercase tracking-[0.14em] text-brand-blue/48">
                  Placeholder listo para conectar con validación y envío reales.
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
                  <li className="rounded-[1.4rem] border border-brand-blue/10 bg-mist/35 px-4 py-4 text-sm leading-7 text-brand-blue/72 list-none">
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

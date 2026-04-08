import type { ContactDetail, ContactFormField, FooterContact } from '../types/site';
import { buildWhatsAppLink, whatsappConfig, whatsappMessages } from './whatsapp';

export const contactPageHighlights = [
  'Atendemos matrículas, reservas y orientación general desde un mismo punto de contacto.',
  'Te damos canales claros para resolver dudas sobre cursos, servicios y disponibilidad.',
  'Compartimos nuestra ubicación y referencia de atención con una lectura limpia y directa.',
];

export const contactQuickDetails: ContactDetail[] = [
  {
    kind: 'whatsapp',
    label: 'WhatsApp',
    value: whatsappConfig.salesPhoneDisplay,
    note: 'Canal principal para cursos, reservas y orientación general.',
    href: buildWhatsAppLink(whatsappMessages.contactBooking),
  },
  {
    kind: 'phone',
    label: 'Teléfono',
    value: whatsappConfig.secondaryPhoneDisplay,
    note: 'Línea complementaria de atención.',
    href: 'tel:+34910133950',
  },
  {
    kind: 'email',
    label: 'Email',
    value: 'Disponible próximamente',
    note: 'Mientras tanto, la atención principal se gestiona por WhatsApp y teléfono.',
  },
  {
    kind: 'location',
    label: 'Dirección',
    value: 'C/ Embajadores 61, Madrid',
    note: 'Referencia actual de atención y orientación presencial.',
  },
  {
    kind: 'hours',
    label: 'Horario',
    value: 'Información de horario disponible por WhatsApp',
    note: 'Consulta la disponibilidad actual antes de tu visita o reserva.',
  },
];

export const contactFormFields: ContactFormField[] = [
  {
    id: 'contact-name',
    name: 'name',
    label: 'Nombre',
    placeholder: 'Nombre completo',
    type: 'text',
    colSpan: 1,
  },
  {
    id: 'contact-email',
    name: 'email',
    label: 'Correo',
    placeholder: 'correo@ejemplo.com',
    type: 'email',
    colSpan: 1,
  },
  {
    id: 'contact-phone',
    name: 'phone',
    label: 'Teléfono',
    placeholder: 'Número de contacto',
    type: 'tel',
    colSpan: 1,
  },
  {
    id: 'contact-subject',
    name: 'subject',
    label: 'Asunto',
    placeholder: 'Tema de interés',
    type: 'text',
    colSpan: 1,
  },
  {
    id: 'contact-message',
    name: 'message',
    label: 'Mensaje',
    placeholder: 'Cuéntanos qué información deseas recibir',
    type: 'textarea',
    colSpan: 2,
    rows: 6,
  },
];

export const contactFormNote =
  'El envío digital estará disponible próximamente. Si necesitas atención inmediata, escríbenos por WhatsApp.';

export const footerContact: FooterContact = {
  email: 'Disponible próximamente',
  phone: whatsappConfig.salesPhoneDisplay,
  location: 'C/ Embajadores 61, Madrid',
};

export const contactLocationContent = {
  eyebrow: 'Ubicación',
  title: 'Te recibimos en Madrid con un punto de atención claro y fácil de ubicar.',
  description:
    'Reunimos la referencia de sede, los canales de atención y un apoyo visual que acompaña la experiencia de contacto.',
  referenceLabel: 'Referencia de sede',
  referenceText: 'C/ Embajadores 61, Madrid.',
  scheduleLabel: 'Atención y reservas',
  scheduleText: 'Consulta horarios y disponibilidad actual a través de WhatsApp o teléfono.',
  mediaLabel: 'Atención Torzan Kairos',
  mediaTitle: 'Nuestra sede acompaña la orientación, las reservas y una atención personalizada.',
};

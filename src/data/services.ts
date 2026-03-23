import type {
  SeoPageData,
  ServiceCategory,
  ServicePresentation,
  ServicePriceItem,
  ServiceSlug,
  UpcomingCard,
} from '../types/site';
import { serviceMediaBySlug } from './media';
import { buildServiceWhatsAppMessage } from './whatsapp';

export const serviceCategories: ServiceCategory[] = [
  {
    slug: 'peluqueria',
    title: 'Servicios de Peluquería',
    shortTitle: 'Peluquería',
    summary:
      'Corte, color, peinado y cuidado capilar dentro de una experiencia profesional, actual y personalizada.',
    overview:
      'La categoría de peluquería reúne servicios pensados para cuidar la imagen capilar desde una lectura técnica, estética y cercana. Cada atención busca equilibrio entre resultado, bienestar y orientación profesional.',
    audience:
      'Pensado para quienes buscan transformar, mantener o cuidar su cabello con un acompañamiento claro y una atención sobria.',
    serviceList: ['Cortes y acabados', 'Peinados y estilismo', 'Color y transformación capilar', 'Tratamientos y cuidado del cabello'],
    highlights: ['Atención personalizada', 'Diagnóstico según necesidad', 'Experiencia cuidada de principio a fin'],
    note:
      'Los valores marcados como desde o consultar pueden variar según diagnóstico, técnica y cantidad de producto.',
    primaryCta: 'Solicitar cita de peluquería',
    mediaLabel: 'Servicios de Peluquería',
    mediaTitle: 'Atención capilar desde la técnica, el cuidado y el resultado final.',
    accent: 'arched',
  },
  {
    slug: 'unas',
    title: 'Servicios de Uñas',
    shortTitle: 'Uñas',
    summary:
      'Manicura, pedicura, sistemas artificiales y acabados diseñados para cuidar manos y pies con detalle.',
    overview:
      'La línea de uñas integra técnica, presentación y creatividad en una experiencia pensada para resaltar la imagen personal con acabados pulidos y actuales.',
    audience:
      'Dirigido a quienes buscan servicios de manos y pies con estructura profesional, buena ejecución y atención cercana.',
    serviceList: ['Manicura y pedicura', 'Sistemas artificiales', 'Decoración y acabados', 'Spa de manos y pies'],
    highlights: ['Acabados cuidados', 'Opciones clásicas y creativas', 'Orientación según estilo y necesidad'],
    note:
      'Los precios publicados corresponden a la base actual y pueden ajustarse si el servicio requiere una valoración adicional.',
    primaryCta: 'Solicitar cita para uñas',
    mediaLabel: 'Servicios de Uñas',
    mediaTitle: 'Técnica, estructura y diseño aplicados al cuidado de manos y pies.',
    accent: 'frame',
  },
  {
    slug: 'cejas-y-depilacion',
    title: 'Cejas y Depilación',
    shortTitle: 'Cejas y Depilación',
    summary:
      'Servicios orientados a definir, armonizar y cuidar la expresión facial y corporal con un enfoque preciso.',
    overview:
      'Esta categoría reúne opciones de cejas, depilación y servicios complementarios de mirada dentro de una atención clara, cuidada y orientada al detalle.',
    audience:
      'Pensado para quienes buscan definición facial, limpieza visual y procedimientos ejecutados con criterio estético.',
    serviceList: ['Diseño de cejas', 'Depilación facial y corporal', 'Servicios complementarios de mirada', 'Protocolos de cuidado y acabado'],
    highlights: ['Definición y armonía', 'Atención puntual y precisa', 'Resultados pensados para resaltar la expresión'],
    note:
      'Si un servicio requiere valoración previa o un ajuste técnico, el equipo lo indicará antes de confirmar la cita.',
    primaryCta: 'Solicitar información de cejas y depilación',
    mediaLabel: 'Cejas y Depilación',
    mediaTitle: 'Cuidado facial con precisión, armonía y atención al detalle.',
    accent: 'geometric',
  },
  {
    slug: 'cuidado-personal',
    title: 'Cuidado Personal',
    shortTitle: 'Cuidado Personal',
    summary:
      'Rituales y tratamientos pensados para bienestar, cuidado estético y una atención más pausada.',
    overview:
      'La categoría de cuidado personal amplía la experiencia Torzan Kairos hacia protocolos orientados al bienestar, el equilibrio y la atención personalizada.',
    audience:
      'Dirigido a quienes desean una experiencia de cuidado con acompañamiento cercano y enfoque en bienestar estético.',
    serviceList: ['Protocolos de bienestar', 'Rituales de cuidado', 'Experiencias complementarias', 'Tratamientos personalizados'],
    highlights: ['Atención personalizada', 'Experiencia serena y cuidada', 'Servicios que priorizan confort y bienestar'],
    note:
      'Algunos servicios pueden requerir una breve valoración previa para confirmar indicaciones y disponibilidad.',
    primaryCta: 'Consultar disponibilidad de cuidado personal',
    mediaLabel: 'Cuidado Personal',
    mediaTitle: 'Bienestar y cuidado estético dentro del universo Torzan Kairos.',
    accent: 'grid',
  },
];

const peluqueriaPrices: ServicePriceItem[] = [
  { label: 'Corte', priceLabel: '7€', status: 'confirmed' },
  { label: 'Lavado', priceLabel: '3€', status: 'confirmed' },
  { label: 'Peinado', priceLabel: 'desde 8€', status: 'pending', note: 'Según largo y acabado.' },
  { label: 'Hidratación / tratamiento', priceLabel: '15€', status: 'confirmed' },
  { label: 'Tinte', priceLabel: 'desde 14€', status: 'pending', note: 'Según técnica y cantidad de producto.' },
  { label: 'Mechas', priceLabel: 'desde 16€', status: 'pending', note: 'Sujeto a diagnóstico capilar.' },
  { label: 'Balayage', priceLabel: 'consultar', status: 'consultation', note: 'Sujeto a valoración.' },
  { label: 'Keratina', priceLabel: 'consultar', status: 'consultation', note: 'Sujeto a valoración.' },
  { label: 'Rayos', priceLabel: 'consultar', status: 'consultation', note: 'Sujeto a valoración.' },
  { label: 'Ondulación', priceLabel: 'consultar', status: 'consultation', note: 'Sujeto a valoración.' },
  { label: 'Alisados', priceLabel: 'consultar', status: 'consultation', note: 'Sujeto a valoración.' },
];

const unasPrices: ServicePriceItem[] = [
  { label: 'Manicura tradicional', priceLabel: '7€', status: 'confirmed' },
  { label: 'Pedicura tradicional', priceLabel: '8€', status: 'confirmed' },
  { label: 'Manicura permanente / esmaltado permanente', priceLabel: '10€', status: 'confirmed' },
  { label: 'Pedicura permanente / semipermanente', priceLabel: '10€', status: 'confirmed' },
  { label: 'Uñas en gel o acrílico', priceLabel: '15€', status: 'confirmed' },
  { label: 'Manicura semipermanente', priceLabel: '7€', status: 'confirmed' },
];

const browsPrices: ServicePriceItem[] = [
  { label: 'Diseño + depilación + sombreado', priceLabel: '10€', status: 'confirmed' },
  { label: 'Depilación con hilo', priceLabel: '5€', status: 'confirmed' },
  { label: 'Depilación con cera', priceLabel: '5€', status: 'confirmed' },
  { label: 'Pestañas por grupo', priceLabel: '15€', status: 'confirmed' },
  { label: 'Labio', priceLabel: '3€', status: 'confirmed' },
];

const selfCarePrices: ServicePriceItem[] = [
  { label: 'Limpieza facial', priceLabel: '5€', status: 'confirmed' },
  { label: 'Diagnóstico de piel y tratamiento', priceLabel: '10€', status: 'confirmed' },
  { label: 'Tratamientos corporales relajantes', priceLabel: '15€', status: 'confirmed' },
  { label: 'Tratamientos drenantes', priceLabel: '15€', status: 'confirmed' },
  { label: 'Tratamientos adelgazantes', priceLabel: '15€', status: 'confirmed' },
];

export const servicePresentationBySlug: Record<ServiceSlug, ServicePresentation> = {
  peluqueria: {
    whatsappMessage: buildServiceWhatsAppMessage(serviceCategories[0]),
    heroAsset: serviceMediaBySlug.peluqueria.heroAsset,
    gallery: serviceMediaBySlug.peluqueria.gallery,
    prices: peluqueriaPrices,
    relatedCourses: ['peluqueria'],
  },
  unas: {
    whatsappMessage: buildServiceWhatsAppMessage(serviceCategories[1]),
    heroAsset: serviceMediaBySlug.unas.heroAsset,
    gallery: serviceMediaBySlug.unas.gallery,
    prices: unasPrices,
    relatedCourses: ['unas'],
  },
  'cejas-y-depilacion': {
    whatsappMessage: buildServiceWhatsAppMessage(serviceCategories[2]),
    heroAsset: serviceMediaBySlug['cejas-y-depilacion'].heroAsset,
    gallery: serviceMediaBySlug['cejas-y-depilacion'].gallery,
    prices: browsPrices,
    relatedCourses: [],
  },
  'cuidado-personal': {
    whatsappMessage: buildServiceWhatsAppMessage(serviceCategories[3]),
    heroAsset: serviceMediaBySlug['cuidado-personal'].heroAsset,
    gallery: serviceMediaBySlug['cuidado-personal'].gallery,
    prices: selfCarePrices,
    relatedCourses: [],
  },
};

export const upcomingCommercialCards: UpcomingCard[] = [
  {
    title: 'Carta de servicios',
    description: 'Estructura lista para ampliar categorías, técnicas y tratamientos según la operación activa.',
    label: 'Actualizable',
  },
  {
    title: 'Promociones y paquetes',
    description: 'Espacio disponible para campañas puntuales, temporadas especiales o beneficios comerciales.',
    label: 'Flexible',
  },
  {
    title: 'Reserva por WhatsApp',
    description: 'La conversación de reserva ya arranca con contexto desde el servicio seleccionado.',
    label: 'Activo',
  },
];

export function getServiceBySlug(slug?: string): ServiceCategory | undefined {
  return serviceCategories.find((service) => service.slug === slug);
}

export function buildServiceMetadata(service: ServiceCategory): SeoPageData {
  return {
    title: `${service.title} | Torzan Kairos`,
    description: service.summary,
    pathname: `/servicios/${service.slug}`,
    type: 'website',
  };
}

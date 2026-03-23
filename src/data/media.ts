import barberiaHero from '../assets/images/barberia.jpg';
import barberiaPortrait from '../assets/images/barberia1.jpg';
import barberiaPortraitAlt from '../assets/images/barberia2.jpg';
import barberiaEditorial from '../assets/images/barberia3.jpg';
import barberiaWide from '../assets/images/barberia4.jpg';
import barberiaIconic from '../assets/images/barberiacono.jpg';
import manicurePortrait from '../assets/images/manicure.jpg';
import manicureDetail from '../assets/images/manicure2.jpg';
import manicureFinish from '../assets/images/manicure3.jpg';
import manicureDecoration from '../assets/images/manicuredecoration.png';
import peluqueriaDetail from '../assets/images/peluqueria 4.jpg';
import peluqueriaCut from '../assets/images/peluqueria 6.jpg';
import peluqueriaHero from '../assets/images/peluqueria.jpg';
import peluqueriaPortrait from '../assets/images/peluqueria1.jpg';
import peluqueriaBeauty from '../assets/images/peluqueria2.jpg';
import peluqueriaWide from '../assets/images/peluqueria3.jpg';
import peluqueriaSoft from '../assets/images/peluqueria5.jpg';
import unasHero from '../assets/images/uñas.jpg';
import unasDetail from '../assets/images/uñas1.jpg';
import type { CourseSlug, HomeGalleryAsset, ServiceSlug } from '../types/site';

export const homeHeroAsset: HomeGalleryAsset = {
  src: peluqueriaHero,
  alt: 'Profesional de peluquería trabajando en el cabello de una clienta.',
  label: 'Torzan Kairos',
  title: 'Formación profesional y servicios de belleza en una misma experiencia.',
  aspect: 'landscape',
};

export const homeGalleryAssets: HomeGalleryAsset[] = [
  {
    src: peluqueriaPortrait,
    alt: 'Profesional de belleza en un entorno de salón.',
    label: 'Peluquería',
    title: 'Atención personalizada con técnica y detalle.',
    aspect: 'portrait',
  },
  {
    src: barberiaWide,
    alt: 'Escena de barbería profesional en un entorno contemporáneo.',
    label: 'Barbería',
    title: 'Espacios de práctica y servicio con carácter profesional.',
    aspect: 'landscape',
  },
  {
    src: manicureDecoration,
    alt: 'Diseño artístico de uñas con acabado floral.',
    label: 'Uñas',
    title: 'Acabados estéticos que elevan la experiencia visual.',
    aspect: 'square',
  },
];

export const pageHeroAssets = {
  story: {
    src: barberiaIconic,
    alt: 'Detalle editorial de barbería y oficio.',
    label: 'Historia Torzan Kairos',
    title: 'Trayectoria, oficio y visión de marca.',
    aspect: 'portrait' as const,
  },
  courses: {
    src: peluqueriaCut,
    alt: 'Trabajo técnico de corte en peluquería profesional.',
    label: 'Formación profesional',
    title: 'Programas creados para formar técnica, criterio y proyección.',
    aspect: 'portrait' as const,
  },
  services: {
    src: peluqueriaWide,
    alt: 'Servicio de belleza en entorno profesional.',
    label: 'Servicios Torzan Kairos',
    title: 'Atención estética con una lectura visual sobria y cuidada.',
    aspect: 'landscape' as const,
  },
  contact: {
    src: peluqueriaPortrait,
    alt: 'Atención personalizada en un espacio de belleza.',
    label: 'Contacto',
    title: 'Canales claros para orientación, reservas y matrícula.',
    aspect: 'portrait' as const,
  },
};

export const experienceAssets: HomeGalleryAsset[] = [
  {
    src: peluqueriaWide,
    alt: 'Trabajo técnico en salón de belleza.',
    label: 'Formación',
    title: 'Práctica guiada y acompañamiento constante.',
    aspect: 'landscape',
  },
  {
    src: barberiaPortraitAlt,
    alt: 'Detalle de trabajo en barbería.',
    label: 'Técnica',
    title: 'Precisión y criterio profesional en cada proceso.',
    aspect: 'portrait',
  },
  {
    src: manicureDetail,
    alt: 'Detalle de manicura profesional.',
    label: 'Proyección',
    title: 'Servicios y resultados que hablan desde el cuidado.',
    aspect: 'square',
  },
];

export const storyNarrativeAsset: HomeGalleryAsset = {
  src: barberiaHero,
  alt: 'Imagen editorial en blanco y negro asociada al oficio de barbería.',
  label: 'Origen',
  title: 'Una historia construida desde la disciplina, la visión y el oficio.',
  aspect: 'landscape',
};

export const storyIdentityAsset: HomeGalleryAsset = {
  src: peluqueriaBeauty,
  alt: 'Profesional de belleza en un entorno contemporáneo.',
  label: 'Raíces y proyección',
  title: 'La identidad de Torzan Kairos une tradición estética y mirada internacional.',
  aspect: 'portrait',
};

export const contactLocationAsset: HomeGalleryAsset = {
  src: peluqueriaSoft,
  alt: 'Espacio de atención y experiencia de belleza.',
  label: 'Atención Torzan Kairos',
  title: 'Un entorno pensado para acompañar formación, citas y orientación.',
  aspect: 'portrait',
};

export const courseMediaBySlug: Record<
  CourseSlug,
  { heroAsset: HomeGalleryAsset; gallery: HomeGalleryAsset[] }
> = {
  barberia: {
    heroAsset: {
      src: barberiaHero,
      alt: 'Escena de barbería profesional con toallas y utensilios de trabajo.',
      label: 'Barbería Profesional',
      title: 'Técnica, precisión y estilo masculino.',
      aspect: 'landscape',
    },
    gallery: [
      {
        src: barberiaWide,
        alt: 'Ambiente de barbería profesional.',
        label: 'Práctica',
        title: 'Trabajo técnico aplicado al entorno real.',
        aspect: 'landscape',
      },
      {
        src: barberiaPortrait,
        alt: 'Detalle visual de barbería.',
        label: 'Estilo',
        title: 'Lectura contemporánea del oficio.',
        aspect: 'portrait',
      },
      {
        src: barberiaEditorial,
        alt: 'Composición editorial de barbería.',
        label: 'Oficio',
        title: 'Formación con identidad y carácter propio.',
        aspect: 'portrait',
      },
    ],
  },
  peluqueria: {
    heroAsset: {
      src: peluqueriaHero,
      alt: 'Servicio de peluquería profesional en acción.',
      label: 'Peluquería Profesional',
      title: 'Corte, color y estilismo desde una base técnica sólida.',
      aspect: 'landscape',
    },
    gallery: [
      {
        src: peluqueriaPortrait,
        alt: 'Profesional trabajando en peluquería.',
        label: 'Corte',
        title: 'Detalle técnico y atención personalizada.',
        aspect: 'portrait',
      },
      {
        src: peluqueriaDetail,
        alt: 'Herramienta de secado en un servicio de peluquería.',
        label: 'Acabado',
        title: 'Procesos que cuidan forma, textura y presentación.',
        aspect: 'portrait',
      },
      {
        src: peluqueriaCut,
        alt: 'Corte capilar en ejecución.',
        label: 'Transformación',
        title: 'Una formación conectada con la experiencia real del salón.',
        aspect: 'portrait',
      },
    ],
  },
  unas: {
    heroAsset: {
      src: unasDetail,
      alt: 'Detalle de uñas con acabado profesional en tono rojo.',
      label: 'Curso Profesional de Uñas',
      title: 'Técnica, estética y precisión en manos y pies.',
      aspect: 'landscape',
    },
    gallery: [
      {
        src: unasHero,
        alt: 'Detalle editorial de uñas y manicure.',
        label: 'Técnica',
        title: 'Servicios con detalle, acabado y criterio estético.',
        aspect: 'portrait',
      },
      {
        src: manicureFinish,
        alt: 'Manicure profesional con acabado brillante.',
        label: 'Acabado',
        title: 'Resultados que combinan estructura y creatividad.',
        aspect: 'portrait',
      },
      {
        src: manicureDecoration,
        alt: 'Diseño decorativo de uñas.',
        label: 'Creatividad',
        title: 'Decoración avanzada como parte de la propuesta formativa.',
        aspect: 'square',
      },
    ],
  },
};

export const serviceMediaBySlug: Record<
  ServiceSlug,
  { heroAsset: HomeGalleryAsset; gallery: HomeGalleryAsset[] }
> = {
  peluqueria: {
    heroAsset: {
      src: peluqueriaWide,
      alt: 'Servicio profesional de peluquería en salón.',
      label: 'Servicios de Peluquería',
      title: 'Corte, color y cuidado capilar con atención personalizada.',
      aspect: 'landscape',
    },
    gallery: [
      {
        src: peluqueriaHero,
        alt: 'Cliente recibiendo servicio de peluquería.',
        label: 'Servicio',
        title: 'Una experiencia cuidada desde el primer gesto.',
        aspect: 'landscape',
      },
      {
        src: peluqueriaDetail,
        alt: 'Detalle técnico de secado profesional.',
        label: 'Detalle',
        title: 'Acabados precisos que respetan la intención estética.',
        aspect: 'portrait',
      },
      {
        src: peluqueriaCut,
        alt: 'Corte capilar en proceso.',
        label: 'Transformación',
        title: 'Resultados que parten de una lectura técnica del cabello.',
        aspect: 'portrait',
      },
    ],
  },
  unas: {
    heroAsset: {
      src: manicurePortrait,
      alt: 'Manicure profesional en un entorno de servicio.',
      label: 'Servicios de Uñas',
      title: 'Cuidado, estructura y diseño para manos y pies.',
      aspect: 'portrait',
    },
    gallery: [
      {
        src: unasDetail,
        alt: 'Detalle de uñas esmaltadas en rojo.',
        label: 'Detalle',
        title: 'Acabados que cuidan color, forma y presentación.',
        aspect: 'landscape',
      },
      {
        src: manicureFinish,
        alt: 'Resultado de manicure profesional.',
        label: 'Servicio',
        title: 'Técnica aplicada con lectura estética contemporánea.',
        aspect: 'portrait',
      },
      {
        src: manicureDecoration,
        alt: 'Diseño decorativo de uñas con acabado artístico.',
        label: 'Diseño',
        title: 'Opciones creativas para un servicio más expresivo.',
        aspect: 'square',
      },
    ],
  },
  'cejas-y-depilacion': {
    heroAsset: {
      src: peluqueriaBeauty,
      alt: 'Retrato de belleza utilizado para representar cuidado facial.',
      label: 'Cejas y Depilación',
      title: 'Definición, cuidado y armonía facial en cada detalle.',
      aspect: 'portrait',
    },
    gallery: [
      {
        src: peluqueriaBeauty,
        alt: 'Imagen de belleza y cuidado estético.',
        label: 'Mirada',
        title: 'Servicios diseñados para realzar expresión y acabado.',
        aspect: 'portrait',
      },
      {
        src: peluqueriaPortrait,
        alt: 'Atención personalizada en un espacio de belleza.',
        label: 'Atención',
        title: 'Procedimientos realizados con criterio y acompañamiento.',
        aspect: 'portrait',
      },
      {
        src: peluqueriaSoft,
        alt: 'Ambiente de cuidado personal y belleza.',
        label: 'Cuidado',
        title: 'Experiencias sobrias y bien orientadas al resultado.',
        aspect: 'landscape',
      },
    ],
  },
  'cuidado-personal': {
    heroAsset: {
      src: manicureDetail,
      alt: 'Detalle de cuidado estético de manos.',
      label: 'Cuidado Personal',
      title: 'Bienestar y atención personalizada dentro del universo Torzan Kairos.',
      aspect: 'portrait',
    },
    gallery: [
      {
        src: manicurePortrait,
        alt: 'Cuidado estético en manos.',
        label: 'Bienestar',
        title: 'Rituales pensados para cuidar la experiencia completa.',
        aspect: 'portrait',
      },
      {
        src: peluqueriaSoft,
        alt: 'Imagen de atención estética en salón.',
        label: 'Acompañamiento',
        title: 'Ambientes que invitan a una atención pausada y cercana.',
        aspect: 'landscape',
      },
      {
        src: manicureDecoration,
        alt: 'Detalle visual de manicure decorativo.',
        label: 'Detalle',
        title: 'Pequeños gestos que elevan la percepción del cuidado.',
        aspect: 'square',
      },
    ],
  },
};

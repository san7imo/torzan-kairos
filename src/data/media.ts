import espejosPeluqueria from '../assets/images/Espejospeluqueria.webp';
import fireflyBarberia from '../assets/images/FireflyBarberia.webp';
import fireflyManicure from '../assets/images/FireflyManicure.webp';
import barberiaHero from '../assets/images/barberia.webp';
import cartelEnLaCalle from '../assets/images/cartelenlacalle.webp';
import certificadoFoto from '../assets/images/certificadofoto.webp';
import claseDeMaquillaje from '../assets/images/clase de maquillaje.webp';
import cuadernoEditorial from '../assets/images/cuaderno.webp';
import cuadernoMesa from '../assets/images/cuaderno2.webp';
import entregaDeCertificado from '../assets/images/entregadecertificado.webp';
import fachadaConLogo from '../assets/images/fachadaconlogo.webp';
import herramientasDeTrabajo from '../assets/images/herramientas de trabajo.webp';
import manicuristaHero from '../assets/images/manicurista.webp';
import manicuristaDetalle from '../assets/images/manicurista-detalle.webp';
import materialesAlumnos from '../assets/images/materiales alumnos.webp';
import papelProtector from '../assets/images/papel protector.webp';
import profesionalesPremios from '../assets/images/profesionales premios.webp';
import profesionalesEquipo from '../assets/images/profesionales.webp';
import profesoraYAlumna from '../assets/images/profesora y alumna.webp';
import profesoresEquipo from '../assets/images/profesores.webp';
import tarjetasDePresentacion from '../assets/images/tarjetas de presentacion.webp';
import uniformeEditorial from '../assets/images/uniforme.webp';
import type { CourseSlug, HomeGalleryAsset, ServiceSlug } from '../types/site';

export const homeHeroAsset: HomeGalleryAsset = {
  src: fachadaConLogo,
  alt: 'Fachada de Torzan Kairos con logo dorado sobre una base carbón.',
  label: 'Torzan Kairos',
  title: 'Una marca de formación y belleza con presencia sobria, premium y reconocible.',
  aspect: 'landscape',
};

export const homeHeroSideAsset: HomeGalleryAsset = {
  src: profesoraYAlumna,
  alt: 'Profesora guiando a una alumna durante una práctica de peluquería.',
  label: 'Formación real',
  title: 'Una experiencia académica donde la técnica se transmite con cercanía y criterio.',
  aspect: 'portrait',
};

export const homeGalleryAssets: HomeGalleryAsset[] = [
  {
    src: profesionalesEquipo,
    alt: 'Equipo Torzan Kairos en el interior de la academia.',
    label: 'Equipo',
    title: 'Una marca respaldada por presencia profesional y atención cuidada.',
    aspect: 'portrait',
  },
  {
    src: cuadernoMesa,
    alt: 'Cuaderno editorial de Torzan Kairos con espiral dorada sobre mesa oscura.',
    label: 'Identidad',
    title: 'El universo de marca se expresa con detalle, materialidad y coherencia visual.',
    aspect: 'landscape',
  },
  {
    src: profesionalesPremios,
    alt: 'Equipo de Torzan Kairos posando en una gala de premios.',
    label: 'Prestigio',
    title: 'La narrativa de marca también se apoya en reconocimiento, ceremonia y proyección.',
    aspect: 'landscape',
  },
];

export const pageHeroAssets = {
  story: {
    src: profesionalesEquipo,
    alt: 'Profesionales de Torzan Kairos posando dentro del espacio institucional.',
    label: 'Historia Torzan Kairos',
    title: 'Una trayectoria construida entre formación, imagen y visión de marca.',
    aspect: 'portrait' as const,
  },
  courses: {
    src: profesoraYAlumna,
    alt: 'Profesora orientando a una alumna durante una práctica de peluquería.',
    label: 'Formación profesional',
    title: 'Programas concebidos para aprender técnica, criterio y proyección profesional.',
    aspect: 'portrait' as const,
  },
  services: {
    src: espejosPeluqueria,
    alt: 'Zona de espejos y estaciones de trabajo dentro del salón.',
    label: 'Servicios Torzan Kairos',
    title: 'Una experiencia de servicio clara, cuidada y alineada con el universo premium de la marca.',
    aspect: 'landscape' as const,
  },
  contact: {
    src: cartelEnLaCalle,
    alt: 'Señalética exterior de Torzan Kairos en un soporte urbano.',
    label: 'Contacto',
    title: 'Canales directos para reservas, matrículas y atención personalizada.',
    aspect: 'landscape' as const,
  },
};

export const experienceAssets: HomeGalleryAsset[] = [
  {
    src: materialesAlumnos,
    alt: 'Kit institucional de Torzan Kairos con bolsa, cuaderno y bolígrafo.',
    label: 'Experiencia',
    title: 'La experiencia comienza desde los materiales y el cuidado de cada detalle.',
    aspect: 'landscape',
  },
  {
    src: profesoresEquipo,
    alt: 'Docentes de Torzan Kairos posando con herramientas profesionales.',
    label: 'Docencia',
    title: 'El equipo docente sostiene el carácter técnico y humano de la academia.',
    aspect: 'portrait',
  },
  {
    src: manicuristaDetalle,
    alt: 'Detalle de un servicio de uñas con reflejo sobre superficie pulida.',
    label: 'Cuidado',
    title: 'Los servicios también hacen parte de la experiencia premium y cercana de la marca.',
    aspect: 'square',
  },
];

export const storyNarrativeAsset: HomeGalleryAsset = {
  src: entregaDeCertificado,
  alt: 'Alumno de Torzan Kairos sosteniendo un certificado en el espacio institucional.',
  label: 'Logro',
  title: 'La historia también se cuenta a través de formación culminada, reconocimiento y orgullo profesional.',
  aspect: 'landscape',
};

export const storyIdentityAsset: HomeGalleryAsset = {
  src: cuadernoEditorial,
  alt: 'Cuaderno negro de Torzan Kairos con icono dorado y patrón de marca.',
  label: 'Identidad',
  title: 'La identidad visual conecta oficio, lujo sobrio y memoria de marca.',
  aspect: 'landscape',
};

export const contactLocationAsset: HomeGalleryAsset = {
  src: fachadaConLogo,
  alt: 'Fachada de Torzan Kairos con logotipo dorado y base negra.',
  label: 'Ubicación Torzan Kairos',
  title: 'Una presencia física clara y reconocible para acompañar atención, reservas y matrícula.',
  aspect: 'landscape',
};

export const courseMediaBySlug: Record<
  CourseSlug,
  { heroAsset: HomeGalleryAsset; gallery: HomeGalleryAsset[] }
> = {
  barberia: {
    heroAsset: {
      src: barberiaHero,
      alt: 'Servicio y práctica de barbería en un entorno de estética clásica.',
      label: 'Barbería Profesional',
      title: 'Un programa orientado a corte, precisión y oficio masculino contemporáneo.',
      aspect: 'landscape',
    },
    gallery: [
      {
        src: fireflyBarberia,
        alt: 'Retrato editorial de barbería con tijeras en primer plano.',
        label: 'Detalle',
        title: 'La precisión técnica y la lectura estética del rostro hacen parte del oficio.',
        aspect: 'portrait',
      },
      {
        src: herramientasDeTrabajo,
        alt: 'Herramientas personalizadas de Torzan Kairos sobre superficie clara.',
        label: 'Herramientas',
        title: 'El aprendizaje también pasa por materiales, orden técnico y cultura del detalle.',
        aspect: 'landscape',
      },
      {
        src: barberiaHero,
        alt: 'Cliente recibiendo servicio de barbería con capa institucional de Torzan Kairos.',
        label: 'Práctica',
        title: 'La formación conecta inmediatamente con la ejecución en contexto real.',
        aspect: 'landscape',
      },
    ],
  },
  peluqueria: {
    heroAsset: {
      src: profesoraYAlumna,
      alt: 'Profesora guiando a una alumna durante un ejercicio de peluquería.',
      label: 'Peluquería Profesional',
      title: 'Una ruta académica pensada para dominar técnica, criterio y atención profesional.',
      aspect: 'portrait',
    },
    gallery: [
      {
        src: profesionalesEquipo,
        alt: 'Equipo de Torzan Kairos en el interior de la academia.',
        label: 'Academia',
        title: 'La formación se vive dentro de una marca que cuida presencia, método y entorno.',
        aspect: 'portrait',
      },
      {
        src: espejosPeluqueria,
        alt: 'Estaciones de trabajo de peluquería con espejos circulares y mobiliario cálido.',
        label: 'Espacio',
        title: 'El entorno acompaña la experiencia técnica con una estética más refinada.',
        aspect: 'landscape',
      },
      {
        src: profesoresEquipo,
        alt: 'Docentes de Torzan Kairos con herramientas de trabajo.',
        label: 'Equipo docente',
        title: 'El respaldo humano de la formación también refuerza la propuesta académica.',
        aspect: 'portrait',
      },
    ],
  },
  unas: {
    heroAsset: {
      src: manicuristaHero,
      alt: 'Servicio de uñas en salón con profesional atendiendo a una clienta.',
      label: 'Curso Profesional de Uñas',
      title: 'Técnica, estructura y criterio estético aplicados al cuidado profesional de manos y pies.',
      aspect: 'landscape',
    },
    gallery: [
      {
        src: manicuristaDetalle,
        alt: 'Detalle de manos durante un servicio de uñas sobre superficie brillante.',
        label: 'Precisión',
        title: 'La técnica se expresa en el detalle, la higiene visual y el acabado.',
        aspect: 'landscape',
      },
      {
        src: papelProtector,
        alt: 'Aplicación de técnica de uñas sobre superficie con patrón gráfico de la marca.',
        label: 'Práctica',
        title: 'La experiencia visual también acompaña el aprendizaje y el servicio.',
        aspect: 'landscape',
      },
      {
        src: fireflyManicure,
        alt: 'Detalle editorial de una atención de manicure con esmaltes al costado.',
        label: 'Cuidado',
        title: 'Una mirada más limpia y sensorial del universo de cuidado personal.',
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
      src: espejosPeluqueria,
      alt: 'Estaciones de trabajo de peluquería con espejos circulares y acabados en madera.',
      label: 'Servicios de Peluquería',
      title: 'Corte, transformación y cuidado capilar dentro de una experiencia sobria y profesional.',
      aspect: 'landscape',
    },
    gallery: [
      {
        src: profesionalesEquipo,
        alt: 'Equipo Torzan Kairos posando en el espacio institucional.',
        label: 'Atención',
        title: 'La confianza también nace del entorno, la presencia y el acompañamiento.',
        aspect: 'portrait',
      },
      {
        src: espejosPeluqueria,
        alt: 'Detalle de las estaciones de peluquería en el salón.',
        label: 'Espacio',
        title: 'El servicio sucede en un ambiente limpio, cálido y visualmente consistente.',
        aspect: 'landscape',
      },
      {
        src: cartelEnLaCalle,
        alt: 'Señalética exterior de Torzan Kairos en un soporte urbano.',
        label: 'Marca',
        title: 'La experiencia comercial también se apoya en una marca visible y bien presentada.',
        aspect: 'landscape',
      },
    ],
  },
  unas: {
    heroAsset: {
      src: manicuristaHero,
      alt: 'Profesional atendiendo un servicio de uñas en el salón.',
      label: 'Servicios de Uñas',
      title: 'Servicios orientados al cuidado, la estructura y el acabado visual de manos y pies.',
      aspect: 'landscape',
    },
    gallery: [
      {
        src: manicuristaDetalle,
        alt: 'Detalle del trabajo manual durante un servicio de uñas.',
        label: 'Detalle',
        title: 'Una lectura más cercana del servicio desde el gesto, la limpieza y el acabado.',
        aspect: 'landscape',
      },
      {
        src: papelProtector,
        alt: 'Práctica de uñas sobre superficie con patrón gráfico dorado.',
        label: 'Proceso',
        title: 'La técnica se comunica también a través del proceso y el orden visual.',
        aspect: 'landscape',
      },
      {
        src: fireflyManicure,
        alt: 'Detalle editorial de una sesión de manicure.',
        label: 'Ambiente',
        title: 'El resultado final se apoya en una sensación de cuidado y presentación.',
        aspect: 'square',
      },
    ],
  },
  'cejas-y-depilacion': {
    heroAsset: {
      src: espejosPeluqueria,
      alt: 'Zona de atención de Torzan Kairos utilizada como recurso visual sobrio para servicios faciales.',
      label: 'Cejas y Depilación',
      title: 'Mientras llegan assets más específicos, la categoría se apoya en una atmósfera limpia y coherente con la marca.',
      aspect: 'landscape',
    },
    gallery: [],
  },
  'cuidado-personal': {
    heroAsset: {
      src: fireflyManicure,
      alt: 'Detalle editorial de un servicio de cuidado personal con productos sobre mesa oscura.',
      label: 'Cuidado Personal',
      title: 'Una categoría orientada a bienestar, detalle estético y una experiencia más pausada.',
      aspect: 'square',
    },
    gallery: [],
  },
};

export const identityAssets: HomeGalleryAsset[] = [
  {
    src: tarjetasDePresentacion,
    alt: 'Tarjetas de presentación de Torzan Kairos sobre escritorio de madera.',
    label: 'Papelería',
    title: 'La identidad se extiende a papelería y soportes comerciales con lenguaje premium.',
    aspect: 'landscape',
  },
  {
    src: certificadoFoto,
    alt: 'Certificado profesional de Torzan Kairos con borde dorado.',
    label: 'Certificación',
    title: 'La promesa de formación también se refleja en piezas institucionales con peso visual.',
    aspect: 'landscape',
  },
  {
    src: uniformeEditorial,
    alt: 'Uniforme negro institucional de Torzan Kairos en el salón.',
    label: 'Uniforme',
    title: 'La identidad visual también vive en los elementos que acompañan la experiencia diaria.',
    aspect: 'landscape',
  },
  {
    src: claseDeMaquillaje,
    alt: 'Clase de maquillaje en desarrollo dentro del aula.',
    label: 'Comunidad',
    title: 'La marca se proyecta desde aulas activas, demostraciones y observación guiada.',
    aspect: 'landscape',
  },
];

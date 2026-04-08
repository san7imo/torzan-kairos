import { homeGalleryAssets } from '../data/media';
import type {
  ExperiencePoint,
  FeatureCard,
  FacultyMember,
  HomeHeroContent,
  MetricItem,
  MediaTile,
  NavItem,
  PageHeroContent,
  SeoPageData,
  StoryEditorialCard,
  StoryInstitutionalCard,
  StoryJourneyPoint,
  TestimonialItem,
  TrainingArea,
  ValueItem,
} from '../types/site';

export { homeGalleryAssets } from '../data/media';

export const siteConfig = {
  name: 'Torzan Kairos',
  locale: 'es_CO',
  defaultOgImage: '/og-default.svg',
};

export const pageMetadata: Record<
  'home' | 'story' | 'courses' | 'services' | 'contact' | 'notFound',
  SeoPageData
> = {
  home: {
    title: 'Torzan Kairos | Formación profesional y servicios de belleza',
    description:
      'Torzan Kairos reúne formación profesional, servicios de belleza y una identidad cuidada entre Colombia y España.',
    pathname: '/',
    type: 'website',
  },
  story: {
    title: 'Historia | Torzan Kairos',
    description:
      'Conoce la historia de Torzan Kairos, fundada en 2010 por Mariela Torres Zambrano, y su visión de formación integral con proyección internacional.',
    pathname: '/historia',
    type: 'article',
  },
  courses: {
    title: 'Cursos | Torzan Kairos',
    description:
      'Descubre los programas de barbería, peluquería profesional y uñas de Torzan Kairos.',
    pathname: '/cursos',
    type: 'website',
  },
  services: {
    title: 'Servicios | Torzan Kairos',
    description:
      'Explora los servicios de peluquería, uñas, cejas, depilación y cuidado personal de Torzan Kairos.',
    pathname: '/servicios',
    type: 'website',
  },
  contact: {
    title: 'Contacto | Torzan Kairos',
    description:
      'Canales de contacto de Torzan Kairos para información académica, reservas y orientación personalizada.',
    pathname: '/contacto',
    type: 'website',
  },
  notFound: {
    title: 'Página no encontrada | Torzan Kairos',
    description: 'La ruta solicitada no existe dentro del sitio de Torzan Kairos.',
    pathname: '/404',
    type: 'website',
  },
};

export const pageHeroes: Record<'story' | 'courses' | 'services' | 'contact', PageHeroContent> = {
  story: {
    eyebrow: 'El alma de Torzan Kairos',
    title: 'Una historia fundada en 2010 para formar con oficio, sensibilidad y visión internacional.',
    description:
      'Nacimos del camino de Mariela Torres Zambrano y de la unión entre la tradición estética colombiana y una trayectoria consolidada en España.',
    mediaLabel: 'Historia Torzan Kairos',
    mediaTitle: 'Trayectoria, identidad y visión de marca.',
  },
  courses: {
    eyebrow: 'Formación profesional',
    title: 'Programas creados para convertir talento en técnica, criterio y proyección profesional.',
    description:
      'Barbería, peluquería profesional y uñas reúnen práctica guiada, módulos completos y orientación directa para matrícula.',
    mediaLabel: 'Cursos Torzan Kairos',
    mediaTitle: 'Programas pensados para aprender haciendo.',
  },
  services: {
    eyebrow: 'Servicios de belleza',
    title: 'Una línea de servicios pensada para cuidar la imagen personal con una atención sobria y profesional.',
    description:
      'Peluquería, uñas, cejas, depilación y cuidado personal comparten precios base visibles, una misma mirada estética y reserva directa por WhatsApp.',
    mediaLabel: 'Servicios Torzan Kairos',
    mediaTitle: 'Experiencias cuidadas desde la técnica y el resultado.',
  },
  contact: {
    eyebrow: 'Contacto Torzan Kairos',
    title: 'Conversemos sobre formación, servicios, reservas y próximos pasos.',
    description:
      'Reunimos nuestros canales principales para orientarte en matrículas, resolver dudas y coordinar citas.',
    mediaLabel: 'Contacto Torzan Kairos',
    mediaTitle: 'Canales directos para una atención más ágil.',
  },
};

export const mainNavigation: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Historia', href: '/historia' },
  { label: 'Cursos', href: '/cursos' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Contacto', href: '/contacto' },
];

export const homeHero: HomeHeroContent = {
  eyebrow: 'Torzan Kairos Madrid',
  title: 'La academia de belleza en Madrid para elevar tu técnica y transformar tu futuro.',
  description:
    'Impulsamos tu carrera con formación profesional en barbería, peluquería y uñas, y te recibimos con servicios reales de belleza para reservar por WhatsApp.',
  primaryAction: {
    label: 'Ver cursos',
    href: '/cursos',
  },
  secondaryAction: {
    label: 'Reservar cita',
    href: '/contacto',
  },
  highlights: [
    'Barbería, peluquería y uñas con enfoque profesional',
    'Servicios de belleza con precios claros y reserva por WhatsApp',
    'Docentes expertos y práctica guiada desde el primer paso',
  ],
};

export const homeHeroMetrics: MetricItem[] = [
  {
    value: '16+',
    label: 'Años formando',
  },
  {
    value: '3',
    label: 'Rutas profesionales',
  },
  {
    value: 'WhatsApp',
    label: 'Reserva y matrícula',
  },
];

export const homeInstitutionalHighlights = [
  'Más de 16 años formando en belleza con técnica, disciplina y cercanía.',
  'Una misma marca reúne academia, servicios reales y atención personalizada.',
  'Todo el recorrido está pensado para que entiendas rápido qué estudiar, qué reservar y cómo avanzar.',
];

export const homeBenefits: FeatureCard[] = [
  {
    title: 'Formación práctica real',
    description:
      'Aprendes haciendo, con módulos claros, bioseguridad y acompañamiento profesional desde el inicio.',
  },
  {
    title: 'Docentes con criterio',
    description:
      'Nuestro equipo guía cada proceso con experiencia técnica, sensibilidad estética y enfoque humano.',
  },
  {
    title: 'Servicios que respaldan la marca',
    description:
      'Peluquería, uñas, cejas y cuidado personal amplían la experiencia y refuerzan la confianza del público.',
  },
  {
    title: 'Orientación directa',
    description:
      'Resolvemos matrículas, citas y dudas por WhatsApp para que avances sin fricción.',
  },
];

export const homeTestimonials: TestimonialItem[] = [
  {
    quote:
      'Aprendí muchísimo y salí con una base más clara para empezar a ofrecer mis primeros servicios con seguridad.',
    author: 'Estudiante de uñas',
    context: 'Más confianza para empezar',
  },
  {
    quote:
      'La barbería dejó de ser solo gusto y se convirtió en un oficio con método, bioseguridad y criterio.',
    author: 'Estudiante de barbería',
    context: 'Técnica que se siente profesional',
  },
  {
    quote:
      'Aquí entendí mejor el color, el corte y la atención al cliente; todo se siente más profesional desde el primer módulo.',
    author: 'Estudiante de peluquería',
    context: 'Visión integral del servicio',
  },
];

export const heroHighlights = homeHero.highlights;

export const trainingAreas: TrainingArea[] = [
  {
    title: 'Barbería Profesional',
    description: 'Ruta formativa especializada en corte, degradados, afeitado y asesoría de imagen masculina.',
    status: 'Programa aprobado',
    accent: 'geometric',
  },
  {
    title: 'Peluquería Profesional',
    description: 'Formación integral en corte, colorimetría, peinados, recogidos y tratamientos capilares.',
    status: 'Programa aprobado',
    accent: 'arched',
  },
  {
    title: 'Curso Profesional de Uñas',
    description: 'Capacitación especializada en manicura, pedicura, sistemas artificiales y decoración avanzada.',
    status: 'Programa aprobado',
    accent: 'frame',
  },
];

export const methodologyFeatures: FeatureCard[] = [
  {
    title: 'Técnica rigurosa',
    description: 'Cada proceso parte de fundamentos sólidos, precisión técnica y práctica guiada.',
  },
  {
    title: 'Creatividad con criterio',
    description: 'La sensibilidad estética se desarrolla desde conocimiento, observación y estructura profesional.',
  },
  {
    title: 'Formación integral',
    description: 'Bioseguridad, ética y desarrollo humano hacen parte del aprendizaje y de la experiencia.',
  },
  {
    title: 'Cercanía profesional',
    description: 'La marca acompaña tanto al estudiante como al cliente desde una atención clara y humana.',
  },
];

export const values: ValueItem[] = [
  {
    title: 'Maestría',
    description: 'Una cultura de excelencia técnica que honra el oficio, el detalle y la constancia.',
  },
  {
    title: 'Creatividad',
    description: 'La sensibilidad estética se impulsa desde el conocimiento, la observación y el criterio.',
  },
  {
    title: 'Compromiso',
    description: 'Cada proceso académico y comercial se entiende como una responsabilidad con la experiencia final.',
  },
  {
    title: 'Respeto por la profesión',
    description: 'La marca se sostiene sobre ética, bioseguridad y valoración genuina del sector belleza.',
  },
];

export const facultyMembers: FacultyMember[] = [
  {
    name: 'Ramiro Rojas Perdomo',
    role: 'Equipo docente',
    focus: 'Acompañamiento técnico y criterio profesional desde una mirada contemporánea del oficio.',
  },
  {
    name: 'Nicolay Alfaro',
    role: 'Equipo docente',
    focus: 'Formación orientada a la práctica, la precisión y el desarrollo profesional.',
  },
  {
    name: 'Carolina Baquero',
    role: 'Equipo docente',
    focus: 'Cercanía pedagógica y cuidado técnico alineados con la identidad de la academia.',
  },
];

export const experiencePoints: ExperiencePoint[] = [
  {
    title: 'Acompañamiento cercano',
    description: 'Cada proceso formativo y cada servicio se viven con guía, atención y seguimiento.',
  },
  {
    title: 'Práctica con sentido profesional',
    description: 'La técnica se fortalece desde la repetición consciente, la observación y el criterio.',
  },
  {
    title: 'Proyección real',
    description: 'Torzan Kairos forma para ejercer, emprender y crecer dentro del sector belleza.',
  },
];

export const facilityTiles: MediaTile[] = [
  { title: 'Espacios de práctica', label: 'Galería' },
  { title: 'Atención personalizada', label: 'Experiencia' },
  { title: 'Detalle técnico', label: 'Oficio' },
  { title: 'Ambiente profesional', label: 'Formación' },
  { title: 'Imagen de marca', label: 'Torzan Kairos' },
];

export const storyHeroHighlights = [
  'Fundada en 2010 por Mariela Torres Zambrano',
  'Tradición estética colombiana y trayectoria consolidada en España',
  'Formación integral, ética y respeto por la profesión',
];

export const storyEditorialCards: StoryEditorialCard[] = [
  {
    eyebrow: 'Origen',
    title: 'Una marca nacida para formar con disciplina, sensibilidad y cercanía humana.',
    description:
      'Nacimos con una visión clara: enseñar el oficio con seriedad, ética y un profundo respeto por la profesión.',
  },
  {
    eyebrow: 'Visión de marca',
    title: 'Academia y servicio como dos expresiones de una misma manera de entender la belleza.',
    description:
      'Unimos formación profesional y atención al público bajo una identidad coherente, sobria y contemporánea.',
  },
];

export const storyRootsCards: StoryEditorialCard[] = [
  {
    eyebrow: 'Raíces',
    title: 'Tradición estética colombiana',
    description:
      'Conservamos cercanía, oficio y una valoración genuina del trabajo bien hecho.',
  },
  {
    eyebrow: 'Proyección',
    title: 'Trayectoria consolidada en España',
    description:
      'La experiencia desarrollada en España fortalece una mirada actual, amplia y profesional sobre nuestra marca.',
  },
];

export const storyInstitutionalCards: StoryInstitutionalCard[] = [
  {
    label: 'Misión',
    title: 'Formar con técnica, bioseguridad, ética y desarrollo del ser.',
    description:
      'Formamos integrando competencias prácticas, cuidado humano y una lectura responsable del oficio.',
  },
  {
    label: 'Visión',
    title: 'Ser una referencia internacional en formación estética.',
    description:
      'Buscamos consolidarnos como una marca reconocida por excelencia, creatividad y proyección profesional.',
  },
  {
    label: 'Objetivos',
    title: 'Desarrollar talento con maestría, compromiso y respeto por la profesión.',
    description:
      'Acompañamos procesos sólidos, actuales y conectados con la realidad del sector belleza.',
  },
];

export const storyJourneyPoints: StoryJourneyPoint[] = [
  {
    step: '01',
    title: '2010 marca el comienzo',
    description:
      'La fundación de Torzan Kairos abre un camino enfocado en enseñanza rigurosa, cuidado humano y visión de futuro.',
  },
  {
    step: '02',
    title: 'Colombia y España dan forma a la identidad',
    description:
      'La unión entre ambas trayectorias fortalece una propuesta estética con profundidad técnica y amplitud de mirada.',
  },
  {
    step: '03',
    title: 'La marca sigue creciendo con una visión integral',
    description:
      'Hoy unimos cursos, servicios y acompañamiento profesional dentro de una misma experiencia de marca.',
  },
];

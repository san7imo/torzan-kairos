import type {
  ContactDetail,
  ExperiencePoint,
  FAQItem,
  FacultyMember,
  FeatureCard,
  FeaturedCourse,
  MediaTile,
  NavItem,
  PageHeroContent,
  SeoPageData,
  StoryEditorialCard,
  StoryInstitutionalCard,
  StoryJourneyPoint,
  TrainingArea,
  UpcomingCard,
  ValueItem,
} from '../types/site';

export const siteConfig = {
  name: 'Torzan Kairos Academia',
  locale: 'es_CO',
  defaultOgImage: '/og-default.svg',
};

export const pageMetadata: Record<'home' | 'story' | 'contact' | 'notFound', SeoPageData> = {
  home: {
    title: 'Torzan Kairos Academia | Formación profesional en belleza e imagen personal',
    description:
      'Home de Torzan Kairos Academia: propuesta institucional premium, áreas de formación, metodología, cursos destacados y experiencia de marca.',
    pathname: '/',
    type: 'website',
  },
  story: {
    title: 'Historia | Torzan Kairos Academia',
    description:
      'Historia de Torzan Kairos Academia: origen, raíces, visión y pilares de una propuesta formativa premium y profesional.',
    pathname: '/historia',
    type: 'article',
  },
  contact: {
    title: 'Contacto | Torzan Kairos Academia',
    description:
      'Página de contacto de Torzan Kairos Academia con formulario visual, canales rápidos, ubicación placeholder y preguntas frecuentes editables.',
    pathname: '/contacto',
    type: 'website',
  },
  notFound: {
    title: 'Página no encontrada | Torzan Kairos Academia',
    description: 'Ruta no encontrada dentro del sitio de Torzan Kairos Academia.',
    pathname: '/404',
    type: 'website',
  },
};

export const pageHeroes: Record<'story' | 'contact', PageHeroContent> = {
  story: {
    eyebrow: 'Historia Torzan Kairos',
    title: 'Una narrativa fundada en 2010 para unir oficio, visión internacional y espíritu emprendedor.',
    description:
      'La historia de Torzan Kairos Academia se construye desde la trayectoria de Mariela Torres Zambrano, desde la tradición estética colombiana y desde una experiencia consolidada en España que proyecta la marca hacia una visión internacional.',
    mediaLabel: 'Historia visual en actualización',
    mediaTitle: 'Composición editorial preparada para retrato, archivo o pieza institucional',
  },
  contact: {
    eyebrow: 'Contacto Torzan Kairos',
    title: 'Un punto de contacto claro, sobrio y listo para integrarse con información operativa real.',
    description:
      'La página está diseñada para sostener confianza desde ahora, aunque teléfono, dirección, horarios y canales definitivos sigan en actualización.',
    mediaLabel: 'Contacto visual en actualización',
    mediaTitle: 'Espacio reservado para fotografía institucional, sede o visual comercial',
  },
};

export const mainNavigation: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'El alma', href: '/historia' },
  { label: 'Contacto', href: '/contacto' },
];

export const heroHighlights = [
  'Fundada en 2010 por Mariela Torres Zambrano',
  'Tradición estética colombiana con trayectoria consolidada en España',
  'Formación con enfoque técnico, humano y profesional',
];

// Reemplazar con datos académicos finales cuando el cliente confirme programas, horarios y detalle comercial.
export const trainingAreas: TrainingArea[] = [
  {
    title: 'Barbería',
    description:
      'Entrenamiento técnico y criterio estético orientados a un desempeño profesional real.',
    status: 'Contenido en actualización',
    accent: 'geometric',
  },
  {
    title: 'Peluquería Profesional',
    description:
      'Una base integral para dominar procesos, precisión y atención detallada en salón.',
    status: 'Información detallada próximamente',
    accent: 'arched',
  },
  {
    title: 'Estética',
    description:
      'Formación concebida para combinar cuidado, técnica responsable y experiencia humana.',
    status: 'Contenido en actualización',
    accent: 'grid',
  },
  {
    title: 'Maquillaje Profesional',
    description:
      'Desarrollo de mirada creativa y dominio técnico con enfoque contemporáneo.',
    status: 'Curso en construcción',
    accent: 'frame',
  },
  {
    title: 'Manos y Pies',
    description:
      'Un espacio preparado para presentar metodología, práctica y exigencia profesional.',
    status: 'Próximamente',
    accent: 'geometric',
  },
];

export const methodologyFeatures: FeatureCard[] = [
  {
    title: 'Técnica rigurosa',
    description:
      'La enseñanza prioriza precisión, criterio y dominio profesional desde la práctica.',
  },
  {
    title: 'Creatividad con estructura',
    description:
      'La expresión estética se trabaja con base, método y lectura contemporánea.',
  },
  {
    title: 'Formación integral',
    description:
      'La propuesta articula desarrollo del ser, disciplina, bioseguridad y ética.',
  },
  {
    title: 'Acompañamiento cercano',
    description:
      'El aprendizaje se plantea con guía humana, seguimiento y preparación profesional real.',
  },
];

export const values: ValueItem[] = [
  {
    title: 'Maestría',
    description:
      'Una cultura de excelencia técnica que honra el oficio y el detalle.',
  },
  {
    title: 'Creatividad',
    description:
      'La exploración estética se impulsa desde el conocimiento y la sensibilidad.',
  },
  {
    title: 'Compromiso',
    description:
      'Cada proceso formativo se entiende como una responsabilidad con el futuro profesional.',
  },
  {
    title: 'Respeto por la Profesión',
    description:
      'El trabajo se sostiene sobre ética, bioseguridad y valoración genuina del oficio.',
  },
];

// Reemplazar enfoque y perfiles cuando se apruebe la ficha completa de cada docente.
export const facultyMembers: FacultyMember[] = [
  {
    name: 'Ramiro Rojas Perdomo',
    role: 'Docente destacado',
    focus: 'Acompañamiento técnico y enfoque profesional.',
  },
  {
    name: 'Nicolay Alfaro',
    role: 'Docente destacado',
    focus: 'Metodología orientada al criterio, práctica y proyección laboral.',
  },
  {
    name: 'Carolina Baquero',
    role: 'Docente destacada',
    focus: 'Formación cuidada, cercana y alineada con estándares profesionales.',
  },
];

export const experiencePoints: ExperiencePoint[] = [
  {
    title: 'Ambiente de aprendizaje cuidado',
    description:
      'Cada espacio se concibe para practicar con concentración, orden y sensibilidad visual.',
  },
  {
    title: 'Acompañamiento docente',
    description:
      'El avance se apoya en guía cercana, feedback y desarrollo progresivo del criterio.',
  },
  {
    title: 'Proyección profesional',
    description:
      'La experiencia formativa busca preparar para escenarios reales y evolución de carrera.',
  },
];

// Sustituir por fotografías finales de instalaciones y experiencia de marca.
export const facilityTiles: MediaTile[] = [
  { title: 'Cabina editorial', label: 'Imagen referencial' },
  { title: 'Estación práctica', label: 'Galería en construcción' },
  { title: 'Aula de demostración', label: 'Contenido en actualización' },
  { title: 'Zona de detalle técnico', label: 'Próximamente' },
  { title: 'Espacio de acompañamiento', label: 'Imagen referencial' },
];

// Reemplazar con cursos reales, precios, horarios y duraciones cuando estén confirmados.
export const featuredCourses: FeaturedCourse[] = [
  {
    title: 'Programa de Barbería',
    description:
      'Bloque preparado para detallar plan, metodología y enfoque profesional cuando llegue la información final.',
    status: 'Información detallada próximamente',
    note: 'Duración, horarios y certificación en actualización.',
    accent: 'geometric',
  },
  {
    title: 'Peluquería Profesional',
    description:
      'Espacio listo para presentar una ruta formativa completa desde técnica, criterio y experiencia en salón.',
    status: 'Curso en actualización',
    note: 'Programa comercial pendiente de validación final.',
    accent: 'arched',
  },
  {
    title: 'Estética y cuidado integral',
    description:
      'Placeholder comercial para mostrar propuesta académica, acompañamiento y campo de aplicación profesional.',
    status: 'Próximamente',
    note: 'Contenido definitivo en desarrollo.',
    accent: 'frame',
  },
];

export const upcomingCommercialCards: UpcomingCard[] = [
  {
    title: 'Experiencias especializadas',
    description:
      'Sección reservada para workshops, jornadas o experiencias complementarias.',
    label: 'Próximamente',
  },
  {
    title: 'Calendario de apertura',
    description:
      'Bloque listo para mostrar próximas cohortes y novedades cuando estén aprobadas.',
    label: 'Contenido en actualización',
  },
  {
    title: 'Ruta de inscripción',
    description:
      'Espacio pensado para explicar proceso, requisitos y acompañamiento comercial.',
    label: 'Información próximamente',
  },
];

export const storyHeroHighlights = [
  'Fundada en 2010 por Mariela Torres Zambrano',
  'Raíces en la tradición estética colombiana',
  'Trayectoria consolidada en España con visión internacional',
];

// Reemplazar por narrativa final de historia si el cliente entrega una versión más extensa o material de archivo.
export const storyEditorialCards: StoryEditorialCard[] = [
  {
    eyebrow: 'Origen',
    title: 'Una academia nacida para formar con técnica, sensibilidad y dirección.',
    description:
      'Torzan Kairos Academia surge desde la visión de Mariela Torres Zambrano y desde una decisión clara: construir una formación profesional que cuide tanto el oficio como el desarrollo humano.',
  },
  {
    eyebrow: 'Impulso',
    title: 'Talento internacional y espíritu emprendedor en una misma identidad.',
    description:
      'La marca une trayectoria, disciplina y vocación formativa para proyectar una experiencia académica sobria, cercana y exigente.',
  },
];

export const storyRootsCards: StoryEditorialCard[] = [
  {
    eyebrow: 'Raíces',
    title: 'Tradición estética colombiana',
    description:
      'La historia de la academia conserva la precisión técnica, la cercanía humana y la valoración del oficio presentes en la tradición estética colombiana.',
  },
  {
    eyebrow: 'Proyección',
    title: 'Trayectoria consolidada en España',
    description:
      'La experiencia desarrollada en España amplía la mirada institucional y fortalece una visión contemporánea e internacional de la formación.',
  },
];

export const storyInstitutionalCards: StoryInstitutionalCard[] = [
  {
    label: 'Misión',
    title: 'Formación integral con ética, bioseguridad y desarrollo del ser.',
    description:
      'La misión institucional se orienta a preparar perfiles profesionales desde la técnica, la disciplina, la bioseguridad y una comprensión humana del oficio.',
  },
  {
    label: 'Visión',
    title: 'Consolidarse como una referencia internacional en formación estética.',
    description:
      'La visión de Torzan Kairos apunta a proyectar una academia reconocible por su nivel formativo, su identidad cuidada y su alcance internacional.',
  },
  {
    label: 'Objetivos',
    title: 'Desarrollar criterio, creatividad, compromiso y preparación profesional real.',
    description:
      'Los objetivos institucionales se alinean con una formación capaz de transformar talento en oficio y oficio en trayectoria profesional.',
  },
];

export const storyJourneyPoints: StoryJourneyPoint[] = [
  {
    step: '01',
    title: '2010 como punto de partida',
    description:
      'La fundación marca el inicio de una propuesta académica construida con visión, disciplina y sentido de profesión.',
  },
  {
    step: '02',
    title: 'Colombia y España como eje de identidad',
    description:
      'La unión entre tradición estética colombiana y trayectoria consolidada en España da forma al carácter propio de la marca.',
  },
  {
    step: '03',
    title: 'Una proyección que mira hacia lo internacional',
    description:
      'La historia no se plantea como pasado cerrado, sino como base para seguir consolidando una academia con mirada amplia y formación rigurosa.',
  },
];

// Placeholders comerciales: reemplazar cuando el cliente confirme datos operativos reales.
export const contactQuickDetails: ContactDetail[] = [
  {
    label: 'Teléfono',
    value: 'Número de atención próximamente',
    note: 'Reemplazar por línea comercial final.',
  },
  {
    label: 'Email',
    value: 'Canal de correo en actualización',
    note: 'Reemplazar por correo institucional definitivo.',
  },
  {
    label: 'Dirección',
    value: 'Dirección operativa en actualización',
    note: 'No publicar hasta validación final.',
  },
  {
    label: 'Horario',
    value: 'Horario de atención próximamente',
    note: 'Ajustar cuando existan horarios aprobados.',
  },
];

// Preguntas editables para demo: sustituir por FAQ real cuando exista soporte comercial final.
export const contactFaqs: FAQItem[] = [
  {
    question: '¿Cómo puedo solicitar información sobre los programas?',
    answer:
      'Por ahora este bloque funciona como placeholder editable. Más adelante puede vincularse a formulario, WhatsApp o atención comercial real.',
  },
  {
    question: '¿Ya están definidos todos los cursos y horarios?',
    answer:
      'El sitio está preparado para mostrar esa información cuando el contenido académico definitivo sea aprobado.',
  },
  {
    question: '¿La ubicación ya es la final?',
    answer:
      'La referencia visible actualmente es temporal y debe reemplazarse cuando la sede operativa quede confirmada.',
  },
];

export const contactPageHighlights = [
  'Formulario visual listo para conectar a backend más adelante',
  'Canales de contacto marcados como contenido editable',
  'Bloque de ubicación preparado para mapa o imagen final',
];

export const footerContact = {
  email: 'Canal de correo en actualización',
  phone: 'Número de atención próximamente',
  location: 'Ubicación operativa en actualización',
};

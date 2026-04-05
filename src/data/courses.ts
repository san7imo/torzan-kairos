import type { CoursePresentation, CourseProgram, CourseSlug, FeaturedCourse, SeoPageData } from '../types/site';
import { courseMediaBySlug } from './media';
import { buildCourseWhatsAppMessage } from './whatsapp';

export const coursePrograms: CourseProgram[] = [
  {
    slug: 'barberia',
    title: 'Barbería Profesional',
    shortTitle: 'Barbería',
    summary:
      'Formación especializada en barbería contemporánea con énfasis en corte, degradados, afeitado, diseño de barba, color y asesoría de imagen masculina.',
    overview:
      'El programa de Barbería Profesional está diseñado para formar al estudiante en las competencias técnicas, estéticas y operativas necesarias para desempeñarse con solvencia en el ámbito de la barbería contemporánea. Integra higiene, bioseguridad, morfología, técnicas de corte, afeitado, diseño de barba, color y estilismo masculino, combinando fundamentos clásicos con tendencias actuales.',
    objective:
      'Formar profesionales en barbería con dominio de las técnicas esenciales y avanzadas de corte, perfilado, afeitado, estilismo masculino y asesoría de imagen, promoviendo además competencias orientadas a la gestión del servicio, captación de clientes y proyección profesional.',
    studentProfile:
      'Dirigido a personas interesadas en iniciar una formación especializada en barbería, así como a quienes deseen fortalecer sus conocimientos técnicos en peluquería masculina, tendencias de corte y atención profesional en entornos de barbería.',
    methodology:
      'La formación se desarrolla mediante un enfoque teórico-práctico orientado al aprendizaje progresivo de técnicas, procedimientos y criterios profesionales. El estudiante trabaja sobre fundamentos técnicos, demostraciones guiadas, práctica aplicada y consolidación de habilidades propias del ejercicio profesional en barbería.',
    competencies: [
      'Aplicar protocolos de higiene, asepsia y bioseguridad.',
      'Identificar herramientas, productos y técnicas propias de la barbería profesional.',
      'Ejecutar cortes clásicos, modernos y degradados con precisión técnica.',
      'Realizar diseño de barba, afeitado y perfilado según criterios estéticos y morfológicos.',
      'Aplicar fundamentos de colorimetría y cambios estructurales en cabello masculino.',
      'Desarrollar habilidades de asesoría de imagen, atención al cliente y proyección emprendedora.',
    ],
    modules: [
      {
        title: 'Módulo 1 — Fundamentos de higiene, bioseguridad y entorno profesional',
        description:
          'Introduce al estudiante en los principios esenciales de higiene, asepsia y bioseguridad aplicados al entorno de la barbería, junto con la organización del puesto de trabajo y el uso responsable de herramientas y productos.',
        contents: ['Higiene y asepsia', 'Puesto de trabajo en barbería', 'Herramientas y productos', 'Bioseguridad', 'Tipos de afecciones'],
      },
      {
        title: 'Módulo 2 — Técnicas de corte clásico y barbería contemporánea',
        description:
          'Desarrolla competencias técnicas en corte clásico y moderno, con atención especial al cabello corto, los degradados y el uso adecuado de instrumentos de precisión.',
        contents: ['Técnicas de corte clásico', 'Técnicas de corte en cabello corto (fades)', 'Tipos de fade o degradados', 'Cortes modernos', 'Técnica y corte con tijera', 'Uso correcto de la navaja'],
      },
      {
        title: 'Módulo 3 — Diseño de barba, afeitado y visagismo',
        description:
          'Profundiza en la construcción estética de la imagen masculina a través del diseño de barba, bigote y perfilado, integrando criterios de visagismo y procedimientos de afeitado.',
        contents: ['Visagismo', 'Tipos de barbas y bigotes', 'Diseño de afeitado y perfilado', 'Rituales de afeitado', 'Cosmetología para la barba'],
      },
      {
        title: 'Módulo 4 — Creatividad aplicada al estilismo masculino',
        description:
          'Aborda recursos creativos y técnicos aplicados a la barbería actual, incorporando diseños, freestyle y técnicas complementarias de peinado y secado.',
        contents: ['Cortes con diseño', 'Freestyle', 'Técnicas old school', 'Peinado y uso correcto del secador', 'Bioseguridad'],
      },
      {
        title: 'Módulo 5 — Colorimetría y cambios estructurales',
        description:
          'Incorpora fundamentos de colorimetría y transformación capilar dentro del contexto de la barbería para ampliar el campo profesional del estilismo masculino.',
        contents: ['Cambios estructurales', 'Colorimetría', 'Carta de color', 'Decoloración', 'Tintes fantasía'],
      },
      {
        title: 'Módulo 6 — Proyección profesional y gestión del servicio',
        description:
          'Fortalece habilidades de asesoría de imagen, gestión administrativa, captación de clientes y desarrollo de iniciativas vinculadas al ejercicio autónomo o empresarial.',
        contents: ['Asesoría de imagen', 'Gestión administrativa', 'Captación del cliente', 'Emprendimiento'],
      },
    ],
    primaryCta: 'Solicitar información del programa',
    secondaryCta: 'Iniciar proceso de matrícula',
    mediaLabel: 'Barbería Profesional',
    mediaTitle: 'Formación técnica con visión contemporánea del oficio.',
    accent: 'geometric',
  },
  {
    slug: 'peluqueria',
    title: 'Peluquería Profesional',
    shortTitle: 'Peluquería',
    summary:
      'Programa integral en peluquería orientado al dominio de corte, peinado, colorimetría, recogidos y tratamientos capilares desde una base técnica y profesional.',
    overview:
      'El programa de Peluquería Profesional ofrece una formación integral en las áreas fundamentales del cuidado, transformación y estilismo del cabello. Su estructura permite desarrollar competencias en higiene capilar, tricología básica, corte, peinado, recogidos, colorimetría y tratamientos capilares, articulando criterios técnicos con sensibilidad estética y atención profesional al cliente.',
    objective:
      'Capacitar al estudiante en las técnicas esenciales de peluquería profesional, desarrollando habilidades en corte, color, peinado, tratamiento y cuidado capilar, con una visión integral del servicio, la imagen personal y la práctica profesional.',
    studentProfile:
      'Dirigido a personas interesadas en formarse en peluquería desde una base técnica y profesional, así como a quienes deseen consolidar conocimientos en estilismo capilar, colorimetría y tratamientos de cuidado del cabello.',
    methodology:
      'El curso se desarrolla bajo una metodología teórico-práctica centrada en la adquisición progresiva de conocimientos técnicos y en la aplicación de procedimientos propios de la peluquería profesional. El aprendizaje se apoya en práctica guiada, observación técnica y desarrollo de criterio estético.',
    competencies: [
      'Aplicar principios de higiene capilar y cuidado del cuero cabelludo.',
      'Reconocer fundamentos básicos de piel, cabello y tricología.',
      'Ejecutar cortes femeninos y masculinos con diferentes ángulos y estructuras.',
      'Desarrollar técnicas de peinado, secado, ondas, recogidos y acabados.',
      'Aplicar fundamentos de colorimetría, corrección de color y técnicas de mechas.',
      'Realizar tratamientos capilares orientados a hidratación, alisado y recuperación estética del cabello.',
    ],
    modules: [
      {
        title: 'Introducción — Bases de la peluquería profesional',
        description:
          'Sitúa al estudiante en los fundamentos históricos, técnicos y operativos de la peluquería, abordando herramientas, presentación profesional, higiene, servicio al cliente y normas de seguridad.',
        contents: ['Origen y evolución de la peluquería', 'Herramientas de trabajo, presentación, técnicas y uso', 'Higiene y preparación del cliente y del área de trabajo', 'Servicio al cliente', 'La piel', 'El cabello', 'Tricología del cabello', 'Normas de seguridad y prevención de accidentes'],
      },
      {
        title: 'Módulo 1 — Higiene capilar y cuidado del cuero cabelludo',
        description:
          'Introduce principios del cuidado capilar y la higiene del cuero cabelludo, integrando fundamentos de cosmetología y procedimientos de lavado, acondicionamiento y mantenimiento del cabello.',
        contents: ['Introducción a la higiene capilar', 'Cosmetología para la higiene capilar', 'Champús y acondicionadores', 'Técnicas para el cuidado, lavado y acondicionamiento capilar'],
      },
      {
        title: 'Módulo 2 — Técnicas de corte y estructura capilar',
        description:
          'Desarrolla las bases técnicas del corte de cabello, trabajando formas, ángulos, estructuras y tipologías de corte tanto en peluquería femenina como en fundamentos de corte masculino.',
        contents: ['Corte bob', 'Corte ovalado', 'Corte en V', 'Corte recto', 'Capas ascendentes', 'Corte 0°, 45°, 90°, 135° y 180°', 'Cortes clásicos de peluquería masculina'],
      },
      {
        title: 'Módulo 3 — Peinados, estructuras y recogidos',
        description:
          'Aborda técnicas de acabado y estilismo orientadas a la construcción de peinados y recogidos, fortaleciendo precisión técnica y criterio estético.',
        contents: ['Rulos', 'Ondas de agua', 'Ondas con plancha', 'Secado', 'Planchado', 'Recogidos bajos, medios y altos', 'Peinados con volumen', 'Peinado bob', 'Peinado con puntas hacia afuera'],
      },
      {
        title: 'Módulo 4 — Colorimetría y técnicas de coloración',
        description:
          'Integra teoría del color aplicada a la peluquería, corrección cromática y técnicas de coloración actuales para una propuesta contemporánea en diseño capilar.',
        contents: ['Colorimetría', 'Tinte raíz', 'Tinte directo', 'Corrección de color', 'Decoloración y coloraciones parciales', 'Numeración en colorimetría', 'Estilos de coloración y tendencias', 'Alteraciones del color', 'Limpieza de color', 'Mechas tradicionales', 'Mechas babylight', 'Mechas balayage', 'Mechas balayage V', 'Mechas balayage con falso crecimiento', 'Mechas en contorno'],
      },
      {
        title: 'Módulo 5 — Tratamientos capilares',
        description:
          'Se orienta a la aplicación de procedimientos destinados al cuidado, recuperación y mejora estética del cabello, ampliando competencias dentro del servicio integral de peluquería.',
        contents: ['Hidrataciones', 'Botox capilar', 'Queratinas', 'Alisados'],
      },
    ],
    primaryCta: 'Conocer el plan de formación',
    secondaryCta: 'Matricularme en este curso',
    mediaLabel: 'Peluquería Profesional',
    mediaTitle: 'Formación integral en corte, color, peinado y tratamiento capilar.',
    accent: 'arched',
  },
  {
    slug: 'unas',
    title: 'Curso Profesional de Uñas',
    shortTitle: 'Uñas',
    summary:
      'Capacitación especializada en manicura, pedicura, sistemas artificiales y decoración avanzada, con enfoque técnico, estético y práctico.',
    overview:
      'El Curso Profesional de Uñas está orientado a la formación especializada en técnicas de manicura, pedicura, sistemas artificiales y decoración avanzada. El programa proporciona una base sólida en anatomía de la uña, higiene, bioseguridad, manejo de productos, aplicación de sistemas en acrílico, gel, acrigel y soft gel, así como en procedimientos de decoración, recubrimiento y tratamientos complementarios.',
    objective:
      'Formar profesionales capaces de ejecutar procedimientos de manicura y pedicura, aplicar sistemas artificiales de uñas y desarrollar técnicas decorativas básicas y avanzadas, integrando protocolos de higiene, manejo adecuado de materiales y atención al cliente.',
    studentProfile:
      'Dirigido a personas interesadas en iniciar una trayectoria profesional en el área de uñas, así como a quienes buscan fortalecer sus conocimientos técnicos en sistemas artificiales, decoración y cuidado estético de manos y pies.',
    methodology:
      'La metodología del programa es teórico-práctica y progresiva, enfocada en la correcta comprensión de procedimientos, el manejo técnico de materiales y la práctica constante de protocolos estéticos y decorativos propios del área profesional de uñas.',
    competencies: [
      'Reconocer equipos, herramientas, productos y fundamentos anatómicos de la uña.',
      'Aplicar protocolos de higiene, desinfección y esterilización.',
      'Ejecutar manicura y pedicura tradicional y rusa.',
      'Trabajar sistemas artificiales en acrílico, gel, acrigel y soft gel.',
      'Aplicar técnicas de limado, nivelación, relleno y retiro de sistemas.',
      'Desarrollar decoraciones básicas y avanzadas con distintos efectos y acabados.',
      'Incorporar servicios complementarios de spa para manos y pies.',
    ],
    modules: [
      {
        title: 'Introducción — Fundamentos técnicos y sanitarios del área de uñas',
        description:
          'Proporciona una base sólida sobre herramientas, productos, anatomía de la uña, patologías y protocolos de higiene para desarrollar servicios seguros y de calidad.',
        contents: ['Equipos, herramientas y productos', 'Anatomía de las uñas', 'Patologías', 'Higiene, desinfección y esterilización', 'Manejo de químicos y prevención de alergias'],
      },
      {
        title: 'Módulo 1 — Manicura y pedicura tradicional / rusa',
        description:
          'Desarrolla dominio de técnicas de manicura y pedicura en sus modalidades tradicional y rusa, incorporando el uso correcto del torno y procedimientos básicos de preparación y mantenimiento.',
        contents: ['Manicura tradicional y rusa', 'Pedicura tradicional y rusa', 'Uso correcto del torno y sus brocas', 'Esmaltado tradicional y semipermanente', 'Remoción de callos y durezas', 'Retiro de esmalte'],
      },
      {
        title: 'Módulo 2 — Sistemas artificiales: acrílico, gel, acrigel y soft gel',
        description:
          'Desarrolla competencias especializadas en la aplicación, construcción, mantenimiento y retiro de sistemas artificiales, con énfasis en esculpido, tipificación, nivelación y limado profesional.',
        contents: ['Aplicación de perlas en acrílico', 'Aplicación de acrílico con tips', 'Acrílico esculpido con molde', 'Puntas comerciales', 'Aplicación de acrigel y gel', 'Técnica de limado perfecto', 'Técnica de limado con broca 5 en 1', 'Técnica soft gel', 'Relleno y retiro de sistema', 'Acripie', 'Elevaciones del torno', 'Retiro de uñas artificiales'],
      },
      {
        title: 'Módulo 3 — Decoración básica y avanzada',
        description:
          'Fortalece la dimensión creativa del estudiante mediante técnicas decorativas aplicadas a la estética de uñas, desde diseños comerciales hasta efectos especiales y acabados avanzados.',
        contents: ['Francesas', 'Animal print', 'Diseños comerciales', 'Baby boomer', 'Baby color y glam', 'Técnicas de encapsulado', 'Técnica en reversa', 'Flores 3D en acrílico y en gel', 'Aerografía', 'Decoraciones con pedrería', 'Efectos espejo, aurora, marmolado, blooming, agua y ojo de gato'],
      },
      {
        title: 'Módulo 4 — Recubrimientos y baño en acrílico, gel y base rubber',
        description:
          'Orienta al estudiante en procedimientos técnicos de refuerzo, recubrimiento y nivelación de la uña mediante distintos sistemas, con énfasis en el acabado final.',
        contents: ['Normas para la ejecución', 'Limado', 'Técnicas de recubrimiento', 'Nivelación con base rubber', 'Baño en acrílico', 'Baño en gel'],
      },
      {
        title: 'Módulo 5 — Manicura y pedicura spa',
        description:
          'Incorpora servicios complementarios de bienestar y cuidado integral de manos y pies para ampliar la experiencia del cliente desde el confort y la relajación.',
        contents: ['Jelly spa', 'Exfoliación', 'Veloterapia', 'Guantes hidratantes', 'Parafina'],
      },
      {
        title: 'Bloque de finalización — Evaluación y cierre del proceso formativo',
        description:
          'Consolida el aprendizaje mediante evaluación, presentación de trabajos y cierre formal de prácticas, visibilizando certificación y proyección profesional.',
        contents: ['Evaluaciones', 'Presentación de trabajos', 'Finalización de prácticas', 'Acto de grado', 'Certificación', 'Bolsa de empleo'],
      },
    ],
    primaryCta: 'Solicitar información académica',
    secondaryCta: 'Reservar mi matrícula',
    mediaLabel: 'Curso Profesional de Uñas',
    mediaTitle: 'Formación especializada en técnica, estructura y decoración avanzada.',
    accent: 'frame',
  },
];

export const coursePresentationBySlug: Record<CourseSlug, CoursePresentation> = {
  barberia: {
    durationLabel: '240 horas',
    durationNote:
      'Programa orientado a formación práctica y progresiva, con acompañamiento técnico, criterio profesional y proyección laboral.',
    whatsappMessage: buildCourseWhatsAppMessage(coursePrograms[0]),
    heroAsset: courseMediaBySlug.barberia.heroAsset,
    gallery: courseMediaBySlug.barberia.gallery,
  },
  peluqueria: {
    durationLabel: '240 horas prácticas',
    durationNote:
      'Ruta académica enfocada en práctica aplicada, estructura técnica y acompañamiento del proceso formativo.',
    whatsappMessage: buildCourseWhatsAppMessage(coursePrograms[1]),
    heroAsset: courseMediaBySlug.peluqueria.heroAsset,
    gallery: courseMediaBySlug.peluqueria.gallery,
  },
  unas: {
    durationLabel: '240 horas prácticas',
    durationNote:
      'Programa intensivo y progresivo orientado al dominio técnico, la precisión estética y el servicio profesional.',
    whatsappMessage: buildCourseWhatsAppMessage(coursePrograms[2]),
    heroAsset: courseMediaBySlug.unas.heroAsset,
    gallery: courseMediaBySlug.unas.gallery,
  },
};

export const featuredCourses: FeaturedCourse[] = coursePrograms.map((course) => ({
  title: course.title,
  description: course.summary,
  status: 'Programa aprobado',
  note: 'Técnica, práctica guiada y proyección profesional.',
  accent: course.accent,
}));

export function getCourseBySlug(slug?: string): CourseProgram | undefined {
  return coursePrograms.find((course) => course.slug === slug);
}

export function buildCourseMetadata(course: CourseProgram): SeoPageData {
  return {
    title: `${course.title} | Torzan Kairos`,
    description: course.summary,
    pathname: `/cursos/${course.slug}`,
    type: 'article',
  };
}

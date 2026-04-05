export type NavItem = {
  label: string;
  href: string;
};

export type AccentPattern = 'geometric' | 'arched' | 'grid' | 'frame';

export type TrainingArea = {
  title: string;
  description: string;
  status: string;
  accent: AccentPattern;
};

export type FeatureCard = {
  title: string;
  description: string;
};

export type MetricItem = {
  value: string;
  label: string;
  note?: string;
};

export type ValueItem = {
  title: string;
  description: string;
};

export type FacultyMember = {
  name: string;
  role: string;
  focus: string;
};

export type ExperiencePoint = {
  title: string;
  description: string;
};

export type MediaTile = {
  title: string;
  label: string;
};

export type StoryEditorialCard = {
  eyebrow: string;
  title: string;
  description: string;
};

export type StoryInstitutionalCard = {
  label: string;
  title: string;
  description: string;
};

export type StoryJourneyPoint = {
  step: string;
  title: string;
  description: string;
};

export type FeaturedCourse = {
  title: string;
  description: string;
  status: string;
  note: string;
  accent: AccentPattern;
};

export type UpcomingCard = {
  title: string;
  description: string;
  label: string;
};

export type ContactDetailKind = 'phone' | 'email' | 'location' | 'hours' | 'whatsapp';

export type ContactDetail = {
  kind?: ContactDetailKind;
  label: string;
  value: string;
  note: string;
  href?: string;
};

export type ContactFormField = {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  type: 'text' | 'email' | 'tel' | 'textarea';
  colSpan?: 1 | 2;
  rows?: number;
};

export type FooterContact = {
  email: string;
  phone: string;
  location: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type SeoPageData = {
  title: string;
  description: string;
  image?: string;
  pathname?: string;
  type?: 'website' | 'article';
};

export type PageHeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  mediaLabel: string;
  mediaTitle: string;
};

export type LinkAction = {
  label: string;
  href: string;
};

export type HomeHeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction: LinkAction;
  secondaryAction: LinkAction;
  highlights: string[];
};

export type HomeGalleryAsset = {
  src: string;
  alt: string;
  label: string;
  title: string;
  aspect: 'portrait' | 'landscape' | 'square';
};

export type CourseSlug = 'barberia' | 'peluqueria' | 'unas';

export type CourseModule = {
  title: string;
  description: string;
  contents: string[];
};

export type CourseProgram = {
  slug: CourseSlug;
  title: string;
  shortTitle: string;
  summary: string;
  overview: string;
  objective: string;
  studentProfile: string;
  methodology: string;
  competencies: string[];
  modules: CourseModule[];
  primaryCta: string;
  secondaryCta: string;
  mediaLabel: string;
  mediaTitle: string;
  accent: AccentPattern;
};

export type CoursePresentation = {
  durationLabel: string;
  durationNote: string;
  whatsappMessage: string;
  heroAsset: HomeGalleryAsset;
  gallery: HomeGalleryAsset[];
};

export type ServiceSlug = 'peluqueria' | 'unas' | 'cejas-y-depilacion' | 'cuidado-personal';

export type ServiceCategory = {
  slug: ServiceSlug;
  title: string;
  shortTitle: string;
  summary: string;
  overview: string;
  audience: string;
  serviceList: string[];
  highlights: string[];
  note: string;
  primaryCta: string;
  mediaLabel: string;
  mediaTitle: string;
  accent: AccentPattern;
};

export type PriceStatus = 'confirmed' | 'pending' | 'consultation';

export type ServicePriceItem = {
  label: string;
  priceLabel: string;
  status: PriceStatus;
  note?: string;
};

export type ServicePresentation = {
  whatsappMessage: string;
  heroAsset: HomeGalleryAsset;
  gallery: HomeGalleryAsset[];
  prices: ServicePriceItem[];
  relatedCourses: CourseSlug[];
};

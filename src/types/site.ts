export type NavItem = {
  label: string;
  href: string;
};

export type TrainingArea = {
  title: string;
  description: string;
  status: string;
  accent: 'geometric' | 'arched' | 'grid' | 'frame';
};

export type FeatureCard = {
  title: string;
  description: string;
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
  accent: 'geometric' | 'arched' | 'grid' | 'frame';
};

export type UpcomingCard = {
  title: string;
  description: string;
  label: string;
};

export type ContactDetail = {
  label: string;
  value: string;
  note: string;
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

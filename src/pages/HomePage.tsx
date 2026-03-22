import { ExperienceSection } from '../components/sections/ExperienceSection';
import { FacilitiesSection } from '../components/sections/FacilitiesSection';
import { FacultySection } from '../components/sections/FacultySection';
import { FinalCTASection } from '../components/sections/FinalCTASection';
import { HeroSection } from '../components/sections/HeroSection';
import { HomeCoursesSection } from '../components/sections/HomeCoursesSection';
import { HomeMidCTASection } from '../components/sections/HomeMidCTASection';
import { HomeUpcomingSection } from '../components/sections/HomeUpcomingSection';
import { LocationSection } from '../components/sections/LocationSection';
import { MethodologySection } from '../components/sections/MethodologySection';
import { StoryPreviewSection } from '../components/sections/StoryPreviewSection';
import { TrainingAreasSection } from '../components/sections/TrainingAreasSection';
import { ValuesSection } from '../components/sections/ValuesSection';
import { pageMetadata } from '../content/site';
import { usePageMetadata } from '../hooks/usePageMetadata';

export function HomePage() {
  usePageMetadata(pageMetadata.home);

  return (
    <>
      <HeroSection />
      <StoryPreviewSection />
      <TrainingAreasSection />
      <HomeCoursesSection />
      <MethodologySection />
      <HomeMidCTASection />
      <ValuesSection />
      <FacultySection />
      <ExperienceSection />
      <HomeUpcomingSection />
      <FacilitiesSection />
      <LocationSection />
      <FinalCTASection />
    </>
  );
}

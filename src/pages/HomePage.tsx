import { HybridCoursesSection } from '../components/sections/HybridCoursesSection';
import { HybridHeroSection } from '../components/sections/HybridHeroSection';
import { HybridInstitutionSection } from '../components/sections/HybridInstitutionSection';
import { HybridLocationSection } from '../components/sections/HybridLocationSection';
import { HybridServicesSection } from '../components/sections/HybridServicesSection';
import { pageMetadata } from '../content/site';
import { usePageMetadata } from '../hooks/usePageMetadata';

export function HomePage() {
  usePageMetadata(pageMetadata.home);

  return (
    <>
      <HybridHeroSection />
      <HybridInstitutionSection />
      <HybridCoursesSection />
      <HybridServicesSection />
      <HybridLocationSection />
    </>
  );
}

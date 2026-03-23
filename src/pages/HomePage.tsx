import { HybridBenefitsSection } from '../components/sections/HybridBenefitsSection';
import { HybridCoursesSection } from '../components/sections/HybridCoursesSection';
import { HybridFinalCTASection } from '../components/sections/HybridFinalCTASection';
import { HybridGallerySection } from '../components/sections/HybridGallerySection';
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
      <HybridBenefitsSection />
      <HybridGallerySection />
      <HybridLocationSection />
      <HybridFinalCTASection />
    </>
  );
}

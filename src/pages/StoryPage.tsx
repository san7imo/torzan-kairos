import logoVertical from '../assets/branding/TK_Logo vertical dorado con sombreado.webp';
import { pageHeroes, pageMetadata, storyHeroHighlights } from '../content/site';
import { pageHeroAssets } from '../data/media';
import { FacultySection } from '../components/sections/FacultySection';
import { StoryClosingSection } from '../components/sections/StoryClosingSection';
import { StoryIdentitySection } from '../components/sections/StoryIdentitySection';
import { StoryInstitutionSection } from '../components/sections/StoryInstitutionSection';
import { StoryNarrativeSection } from '../components/sections/StoryNarrativeSection';
import { ValuesSection } from '../components/sections/ValuesSection';
import { PageHero } from '../components/layout/PageHero';
import { ImagePanel } from '../components/ui/ImagePanel';
import { Panel } from '../components/ui/Panel';
import { usePageMetadata } from '../hooks/usePageMetadata';

export function StoryPage() {
  usePageMetadata(pageMetadata.story);

  return (
    <>
      <PageHero
        eyebrow={pageHeroes.story.eyebrow}
        title={pageHeroes.story.title}
        description={pageHeroes.story.description}
        aside={
          <div className="space-y-5">
            <ImagePanel
              alt={pageHeroAssets.story.alt}
              className="min-h-[380px]"
              imgClassName="object-cover object-center"
              label={pageHeroAssets.story.label}
              src={pageHeroAssets.story.src}
              title={pageHeroAssets.story.title}
            />
            <Panel tone="dark">
              <img
                alt="Logo vertical dorado de Torzan Kairos"
                className="h-24 w-auto"
                loading="lazy"
                src={logoVertical}
              />
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-gold">
                Ejes esenciales
              </p>
              <div className="mt-5 grid gap-3">
                {storyHeroHighlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.2rem] border border-white/8 bg-white/4 px-4 py-4 text-sm leading-7 text-mist/76"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Panel>
          </div>
        }
      />

      <StoryNarrativeSection />
      <StoryIdentitySection />
      <StoryInstitutionSection />
      <ValuesSection />
      <FacultySection />
      <StoryClosingSection />
    </>
  );
}

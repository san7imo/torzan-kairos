import { pageHeroes, pageMetadata, storyHeroHighlights } from '../content/site';
import { FacultySection } from '../components/sections/FacultySection';
import { StoryClosingSection } from '../components/sections/StoryClosingSection';
import { StoryIdentitySection } from '../components/sections/StoryIdentitySection';
import { StoryInstitutionSection } from '../components/sections/StoryInstitutionSection';
import { StoryNarrativeSection } from '../components/sections/StoryNarrativeSection';
import { ValuesSection } from '../components/sections/ValuesSection';
import { PageHero } from '../components/layout/PageHero';
import { PlaceholderMedia } from '../components/ui/PlaceholderMedia';
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
            <PlaceholderMedia
              accent="frame"
              className="min-h-[380px]"
              label={pageHeroes.story.mediaLabel}
              title={pageHeroes.story.mediaTitle}
            />
            <div className="rounded-[2rem] border border-white/10 bg-white/6 p-6 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-gold">
                Ejes aprobados
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
            </div>
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

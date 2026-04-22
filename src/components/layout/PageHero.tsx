import type { ReactNode } from 'react';
import { Reveal } from '../common/Reveal';
import { Container } from '../ui/Container';
import { Eyebrow } from '../ui/Eyebrow';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  aside?: ReactNode;
};

export function PageHero({ aside, description, eyebrow, title }: PageHeroProps) {
  return (
    <section className="site-grid relative overflow-hidden pb-10 pt-8 sm:pb-12 sm:pt-10 lg:pb-14 lg:pt-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(204,152,42,0.12),transparent_24%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_24%,rgba(24,20,17,0.16)_100%)]" />
      <Container className="relative z-10">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-10">
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="mt-5 max-w-4xl font-display font-medium text-[2.1rem] leading-[0.98] tracking-tight text-balance text-mist sm:text-[2.7rem] lg:text-[3.25rem] xl:text-[3.6rem]">
              {title}
            </h1>
            <p className="mt-4 max-w-xl text-[0.88rem] leading-7 text-mist/72 sm:text-[0.94rem]">
              {description}
            </p>
          </Reveal>

          {aside ? <Reveal delay={0.14}>{aside}</Reveal> : null}
        </div>
      </Container>
    </section>
  );
}

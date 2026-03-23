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
    <section className="site-grid relative overflow-hidden pb-14 pt-10 sm:pb-18 sm:pt-14 lg:pb-20 lg:pt-18">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(231,156,31,0.14),transparent_24%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_24%,rgba(5,17,28,0.22)_100%)]" />
      <Container className="relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:gap-12">
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="mt-6 max-w-4xl font-display font-medium text-[2.45rem] leading-[0.99] tracking-tight text-balance text-mist sm:text-[3.1rem] lg:text-[3.85rem] xl:text-[4.25rem]">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-[0.96rem] leading-8 text-mist/72 sm:text-[1rem]">
              {description}
            </p>
          </Reveal>

          {aside ? <Reveal delay={0.14}>{aside}</Reveal> : null}
        </div>
      </Container>
    </section>
  );
}

import { ArrowRight } from 'lucide-react';
import type { CoursePresentation, CourseProgram } from '../../types/site';
import { Button } from './Button';
import { ImagePanel } from './ImagePanel';
import { Panel } from './Panel';

type CourseCardProps = {
  course: CourseProgram;
  presentation: CoursePresentation;
  tone?: 'light' | 'dark';
};

export function CourseCard({ course, presentation, tone = 'light' }: CourseCardProps) {
  const isDark = tone === 'dark';

  return (
    <Panel className="flex h-full flex-col" padding="md" tone={tone}>
      <ImagePanel
        alt={presentation.heroAsset.alt}
        className="min-h-[220px]"
        imgClassName="object-cover object-center"
        label={course.shortTitle}
        showTitle={false}
        src={presentation.heroAsset.src}
        title={course.mediaTitle}
      />

      <div className="mt-5 flex flex-1 flex-col">
        <div className="flex flex-col gap-3.5 sm:min-h-[7.8rem] sm:flex-row sm:items-start sm:justify-between">
          <div className="sm:min-h-[5.5rem] sm:flex-1">
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-accent-gold">
              {course.shortTitle}
            </p>
            <h3
              className={
                isDark
                  ? 'mt-2.5 font-display text-[1.55rem] leading-tight text-mist'
                  : 'mt-2.5 font-display text-[1.55rem] leading-tight text-brand-blue'
              }
            >
              {course.title}
            </h3>
          </div>

          <div
            className={
              isDark
                ? 'rounded-[1.15rem] border border-white/8 bg-white/[0.035] px-3.5 py-3 text-left sm:min-h-[5.5rem] sm:min-w-[8rem] sm:text-right'
                : 'rounded-[1.15rem] border border-brand-blue/10 bg-brand-blue/[0.03] px-3.5 py-3 text-left sm:min-h-[5.5rem] sm:min-w-[8rem] sm:text-right'
            }
          >
            <p
              className={
                isDark
                  ? 'text-[0.52rem] font-semibold uppercase tracking-[0.18em] text-mist/48'
                  : 'text-[0.52rem] font-semibold uppercase tracking-[0.18em] text-brand-blue/44'
              }
            >
              Duración
            </p>
            <p
              className={
                isDark
                  ? 'mt-2 font-display text-[1rem] leading-tight text-mist'
                  : 'mt-2 font-display text-[1rem] leading-tight text-brand-blue'
              }
            >
              {presentation.durationLabel}
            </p>
          </div>
        </div>

        <p
          className={
            isDark
              ? 'mt-3.5 flex-1 text-[0.84rem] leading-6.5 text-mist/72'
              : 'mt-3.5 flex-1 text-[0.84rem] leading-6.5 text-brand-blue/72'
          }
        >
          {course.summary}
        </p>

        <div
          className={
            isDark
              ? 'mt-5 flex min-h-[3.2rem] flex-wrap gap-2 text-[0.58rem] uppercase tracking-[0.14em] text-mist/46'
              : 'mt-5 flex min-h-[3.2rem] flex-wrap gap-2 text-[0.58rem] uppercase tracking-[0.14em] text-brand-blue/46'
          }
        >
          <span className={isDark ? 'rounded-full border border-white/10 px-2.5 py-1.5' : 'rounded-full border border-brand-blue/10 px-2.5 py-1.5'}>
            Módulos completos
          </span>
          <span className={isDark ? 'rounded-full border border-white/10 px-2.5 py-1.5' : 'rounded-full border border-brand-blue/10 px-2.5 py-1.5'}>
            Práctica guiada
          </span>
          <span className={isDark ? 'rounded-full border border-white/10 px-2.5 py-1.5' : 'rounded-full border border-brand-blue/10 px-2.5 py-1.5'}>
            WhatsApp activo
          </span>
        </div>

        <Button
          className="mt-6 w-full sm:w-auto"
          to={`/cursos/${course.slug}`}
          variant={isDark ? 'secondary' : 'ghost'}
        >
          Ver programa
          <ArrowRight size={16} />
        </Button>
      </div>
    </Panel>
  );
}

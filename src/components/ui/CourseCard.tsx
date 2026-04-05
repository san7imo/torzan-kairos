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
        className="min-h-[250px]"
        imgClassName="object-cover object-center"
        label={course.shortTitle}
        src={presentation.heroAsset.src}
        title={course.mediaTitle}
      />

      <div className="mt-6 flex items-start justify-between gap-4">
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-accent-gold">
            {course.shortTitle}
          </p>
          <h3 className={isDark ? 'mt-3 font-display text-[1.95rem] leading-tight text-mist' : 'mt-3 font-display text-[1.95rem] leading-tight text-brand-blue'}>
            {course.title}
          </h3>
        </div>

        <div
          className={
            isDark
              ? 'min-w-[8.9rem] rounded-[1.35rem] border border-white/10 bg-white/[0.04] px-4 py-3 text-right'
              : 'min-w-[8.9rem] rounded-[1.35rem] border border-brand-blue/10 bg-brand-blue/[0.035] px-4 py-3 text-right'
          }
        >
          <p className={isDark ? 'text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-mist/48' : 'text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-brand-blue/44'}>
            Duración
          </p>
          <p className={isDark ? 'mt-2 font-display text-[1.15rem] leading-tight text-mist' : 'mt-2 font-display text-[1.15rem] leading-tight text-brand-blue'}>
            {presentation.durationLabel}
          </p>
        </div>
      </div>

      <p className={isDark ? 'mt-4 text-sm leading-7 text-mist/72' : 'mt-4 text-sm leading-7 text-brand-blue/72'}>
        {course.summary}
      </p>

      <div className={isDark ? 'mt-6 flex flex-wrap gap-2 text-[0.68rem] uppercase tracking-[0.16em] text-mist/46' : 'mt-6 flex flex-wrap gap-2 text-[0.68rem] uppercase tracking-[0.16em] text-brand-blue/46'}>
        <span className={isDark ? 'rounded-full border border-white/10 px-3 py-2' : 'rounded-full border border-brand-blue/10 px-3 py-2'}>
          Módulos completos
        </span>
        <span className={isDark ? 'rounded-full border border-white/10 px-3 py-2' : 'rounded-full border border-brand-blue/10 px-3 py-2'}>
          Práctica guiada
        </span>
        <span className={isDark ? 'rounded-full border border-white/10 px-3 py-2' : 'rounded-full border border-brand-blue/10 px-3 py-2'}>
          WhatsApp activo
        </span>
      </div>

      <Button className="mt-8 w-full sm:w-auto" to={`/cursos/${course.slug}`} variant={isDark ? 'secondary' : 'ghost'}>
        Ver programa
        <ArrowRight size={16} />
      </Button>
    </Panel>
  );
}

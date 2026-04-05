import type { CourseModule } from '../../types/site';
import { Reveal } from '../common/Reveal';

type ModuleAccordionProps = {
  modules: CourseModule[];
};

export function ModuleAccordion({ modules }: ModuleAccordionProps) {
  return (
    <div className="space-y-4">
      {modules.map((module, index) => (
        <Reveal key={module.title} delay={index * 0.04}>
          <details className="group rounded-[1.9rem] border border-white/10 bg-white/[0.05] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.16)]" open={index === 0}>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-[1.35rem] leading-tight text-mist marker:hidden sm:text-[1.45rem]">
              {module.title}
              <span className="text-sm uppercase tracking-[0.18em] text-accent-gold transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-5 max-w-3xl text-sm leading-8 text-mist/72">{module.description}</p>
            <ul className="mt-5 grid gap-3 md:grid-cols-2">
              {module.contents.map((content) => (
                <li key={content} className="rounded-[1.2rem] border border-white/8 bg-white/[0.04] px-4 py-4 text-sm leading-7 text-mist/72">
                  {content}
                </li>
              ))}
            </ul>
          </details>
        </Reveal>
      ))}
    </div>
  );
}

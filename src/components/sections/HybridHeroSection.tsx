import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { homeHeroSlides } from '../../content/site';
import { homeHeroSlideAssets } from '../../data/media';
import { whatsappMessages } from '../../data/whatsapp';
import { cn } from '../../lib/cn';
import type { HeroAction, HomeHeroSlide } from '../../types/site';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';
import { WhatsAppCTA } from '../ui/WhatsAppCTA';

const AUTOPLAY_DELAY = 15000;
const heroActionClassName =
  'min-h-10 px-4 py-2 text-[0.66rem] tracking-[0.12em] sm:min-h-10.5 sm:px-5';

function renderHeroAction(action: HeroAction, variant: 'primary' | 'secondary') {
  if (action.kind === 'link' && action.href) {
    return (
      <Button className={heroActionClassName} to={action.href} variant={variant}>
        {action.label}
      </Button>
    );
  }

  return (
    <WhatsAppCTA
      className={heroActionClassName}
      label={action.label}
      message={action.message ?? whatsappMessages.contactGeneral}
      variant={variant}
    />
  );
}

function AcademySlideContent({ slide }: { slide: HomeHeroSlide }) {
  return (
    <div className="flex h-full flex-col justify-end">
      <h1 className="mt-4 max-w-[17ch] font-display text-[2.65rem] leading-[0.92] tracking-tight text-balance text-mist [text-shadow:0_10px_28px_rgba(0,0,0,0.34)] sm:max-w-[18ch] sm:text-[3.25rem] lg:max-w-[19ch] lg:text-[4.15rem] xl:text-[4.8rem]">
        {slide.title}
      </h1>
      <p className="mt-4 max-w-[50rem] text-[0.95rem] leading-7 text-mist/84 [text-shadow:0_6px_20px_rgba(0,0,0,0.28)] sm:text-[1rem] lg:max-w-[56rem]">
        {slide.description}
      </p>

      <div className="mt-5 flex flex-col gap-2 sm:flex-row">
        {renderHeroAction(slide.primaryAction, 'primary')}
        {renderHeroAction(slide.secondaryAction, 'secondary')}
      </div>

      <div className="mt-8 grid max-w-[54rem] gap-3 border-t border-white/14 pt-4 sm:grid-cols-3">
        {slide.metrics?.map((item, index) => (
          <div
            key={item.label}
            className={index < (slide.metrics?.length ?? 0) - 1 ? 'sm:border-r sm:border-white/14 sm:pr-4' : ''}
          >
            <p className="text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-accent-gold/90 sm:text-[0.62rem]">
              {item.label}
            </p>
            <p className="mt-2.5 font-display text-[1.34rem] leading-none text-mist [text-shadow:0_4px_14px_rgba(0,0,0,0.22)] sm:text-[1.5rem] lg:text-[1.65rem]">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ServicesSlideContent({ slide }: { slide: HomeHeroSlide }) {
  return (
    <div className="flex h-full flex-col justify-end">
      <h2 className="max-w-[17ch] font-display text-[2.65rem] leading-[0.92] tracking-tight text-balance text-mist [text-shadow:0_10px_28px_rgba(0,0,0,0.34)] sm:max-w-[18ch] sm:text-[3.25rem] lg:max-w-[19ch] lg:text-[4.15rem] xl:text-[4.8rem]">
        {slide.title}
      </h2>
      <p className="mt-4 max-w-[50rem] text-[0.95rem] leading-7 text-mist/84 [text-shadow:0_6px_20px_rgba(0,0,0,0.28)] sm:text-[1rem] lg:max-w-[56rem]">
        {slide.description}
      </p>

      <div className="mt-5 flex flex-col gap-2 sm:flex-row">
        {renderHeroAction(slide.primaryAction, 'primary')}
        {renderHeroAction(slide.secondaryAction, 'secondary')}
      </div>

      <div className="mt-8 grid max-w-[54rem] gap-3 border-t border-white/14 pt-4 sm:grid-cols-3">
        {slide.metrics?.map((item, index) => (
          <div
            key={item.label}
            className={index < (slide.metrics?.length ?? 0) - 1 ? 'sm:border-r sm:border-white/14 sm:pr-4' : ''}
          >
            <p className="text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-accent-gold/90 sm:text-[0.62rem]">
              {item.label}
            </p>
            <p className="mt-2.5 font-display text-[1.34rem] leading-none text-mist [text-shadow:0_4px_14px_rgba(0,0,0,0.22)] sm:text-[1.5rem] lg:text-[1.65rem]">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function HybridHeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasAutoAdvanced, setHasAutoAdvanced] = useState(false);
  const [hasUserSelectedSlide, setHasUserSelectedSlide] = useState(false);

  useEffect(() => {
    if (homeHeroSlides.length <= 1 || hasAutoAdvanced || hasUserSelectedSlide) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % homeHeroSlides.length);
      setHasAutoAdvanced(true);
    }, AUTOPLAY_DELAY);

    return () => window.clearTimeout(timeoutId);
  }, [hasAutoAdvanced, hasUserSelectedSlide]);

  if (homeHeroSlides.length === 0) {
    return null;
  }

  const activeSlide = homeHeroSlides[activeIndex] ?? homeHeroSlides[0]!;
  const activeAsset = homeHeroSlideAssets[activeSlide.id];
  const slideOffset = activeSlide.variant === 'academy' ? -56 : 56;
  const backgroundImageClassName =
    activeSlide.id === 'academy' ? 'object-[54%_24%]' : 'object-[52%_50%]';

  return (
    <Section
      className="isolate h-[100svh] min-h-0 max-h-[100svh] bg-[radial-gradient(circle_at_top,rgba(231,156,31,0.08),transparent_18%),linear-gradient(180deg,#221f1d_0%,#181818_42%,#14202d_100%)] py-0"
      container={false}
      tone="transparent"
    >
      <article className="relative isolate h-[100svh] w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeSlide.id}-background`}
            animate={{ opacity: 1, x: 0 }}
            className="absolute inset-0"
            exit={{ opacity: 0, x: slideOffset * -0.4 }}
            initial={{ opacity: 0, x: slideOffset }}
            transition={{ duration: 0.46, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              alt={activeAsset.alt}
              className={cn('absolute inset-0 -z-30 h-full w-full object-cover', backgroundImageClassName)}
              src={activeAsset.src}
            />
            <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(8,12,18,0.24)_0%,rgba(8,12,18,0.36)_12%,rgba(8,12,18,0.58)_52%,rgba(8,12,18,0.82)_100%)]" />
            <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(9,12,20,0.94)_0%,rgba(9,12,20,0.88)_20%,rgba(20,47,74,0.54)_46%,rgba(20,47,74,0.16)_72%,rgba(20,47,74,0.06)_100%)]" />
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(231,156,31,0.14),transparent_22%),radial-gradient(circle_at_82%_24%,rgba(255,255,255,0.08),transparent_18%),radial-gradient(circle_at_bottom_right,rgba(20,47,74,0.34),transparent_26%)]" />
            <div className="absolute inset-0 -z-10 opacity-24 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-position:center] [background-size:42px_42px]" />
          </motion.div>
        </AnimatePresence>

        <div className="pointer-events-none absolute left-1/2 top-24 z-20 -translate-x-1/2 sm:top-28 lg:top-[7.5rem]">
          <div className="pointer-events-auto inline-flex w-fit rounded-full border border-white/10 bg-black/20 p-0.5 backdrop-blur-sm">
            {homeHeroSlides.map((slide, index) => (
              <button
                key={slide.id}
                aria-label={`Mostrar slide ${slide.eyebrow}`}
                className={cn(
                  'rounded-full px-3 py-1.5 text-[0.56rem] font-semibold uppercase tracking-[0.16em] transition duration-300 sm:px-3.5',
                  index === activeIndex
                    ? 'bg-accent-gold text-brand-blue shadow-[0_10px_28px_rgba(231,156,31,0.24)]'
                    : 'text-mist/66 hover:text-mist',
                )}
                onClick={() => {
                  setHasUserSelectedSlide(true);
                  setActiveIndex(index);
                }}
                type="button"
              >
                {slide.variant === 'academy' ? 'Academia' : 'Servicios'}
              </button>
            ))}
          </div>
        </div>

        <div className="relative z-10 mx-auto h-full w-full max-w-[1380px] px-4 sm:px-5 lg:px-8">
          <div className="flex h-full items-stretch pb-5 pt-[11rem] sm:pb-7 sm:pt-[12rem] lg:pb-8 lg:pt-[13rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeSlide.id}-content`}
                animate={{ opacity: 1, x: 0 }}
                className="flex h-full w-full max-w-[62rem] flex-col lg:max-w-[74rem]"
                exit={{ opacity: 0, x: slideOffset * -0.35 }}
                initial={{ opacity: 0, x: slideOffset }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              >
                {activeSlide.variant === 'academy' ? (
                  <AcademySlideContent slide={activeSlide} />
                ) : (
                  <ServicesSlideContent slide={activeSlide} />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </article>
    </Section>
  );
}

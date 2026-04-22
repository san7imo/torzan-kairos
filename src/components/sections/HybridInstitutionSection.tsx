import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, BadgeCheck, MessagesSquare, Sparkles } from 'lucide-react';
import { homeInstitutionalHighlights } from '../../content/site';
import { homeInstitutionalCarouselAssets } from '../../data/media';
import { cn } from '../../lib/cn';
import { Reveal } from '../common/Reveal';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

const AUTOPLAY_DELAY = 4500;
const highlightIcons = [BadgeCheck, Sparkles, MessagesSquare] as const;
const carouselImagePositionClasses = [
  'object-[center_24%]',
  'object-[center_22%]',
  'object-[center_18%]',
] as const;

export function HybridInstitutionSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (homeInstitutionalCarouselAssets.length <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % homeInstitutionalCarouselAssets.length);
    }, AUTOPLAY_DELAY);

    return () => window.clearInterval(intervalId);
  }, []);

  const activeAsset =
    homeInstitutionalCarouselAssets[activeIndex] ?? homeInstitutionalCarouselAssets[0] ?? null;
  const activeImagePositionClass =
    carouselImagePositionClasses[activeIndex] ?? carouselImagePositionClasses[0];

  return (
    <Section
      className="h-[100svh] min-h-0 max-h-[100svh] overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(231,156,31,0.08),transparent_18%),radial-gradient(circle_at_bottom_right,rgba(225,226,225,0.04),transparent_16%),linear-gradient(180deg,#171c23_0%,#12161d_100%)] py-0"
      tone="transparent"
    >
      <div className="grid h-full gap-8 xl:grid-cols-[0.78fr_1.22fr] xl:items-center">
        <Reveal className="order-2 h-full xl:order-1">
          <div className="flex h-full min-h-[320px] items-center justify-center sm:min-h-[420px]">
            <AnimatePresence mode="wait">
              {activeAsset ? (
                <motion.div
                  key={activeAsset.src}
                  animate={{ opacity: 1, x: 0 }}
                  className="relative h-[min(72svh,44rem)] w-[min(calc((72svh)*0.671),29.5rem)] overflow-hidden bg-[#10151c] sm:h-[min(74svh,46rem)] sm:w-[min(calc((74svh)*0.671),31.25rem)]"
                  exit={{ opacity: 0, x: -34 }}
                  initial={{ opacity: 0, x: 34 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <img
                    alt={activeAsset.alt}
                    className={cn('absolute inset-0 h-full w-full object-cover', activeImagePositionClass)}
                    loading="lazy"
                    src={activeAsset.src}
                  />
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </Reveal>

        <Reveal className="order-1 xl:order-2 xl:pl-8">
          <SectionHeading
            className="max-w-none"
            description="Torzan Kairos reúne academia, servicios y acompañamiento personalizado en una propuesta creada para quienes valoran la técnica, la estética y la evolución constante. Formamos profesionales y atendemos al público bajo una misma filosofía: calidad, disciplina y cercanía."
            eyebrow="Institucional"
            invert
            title="Excelencia en formación y belleza profesional en Madrid."
          />

          <p className="mt-6 max-w-[46rem] text-[0.96rem] leading-8 text-mist/74">
            Cada experiencia dentro de nuestra marca ha sido diseñada para orientar, inspirar y ofrecer
            claridad. Ya sea para iniciar tu formación, perfeccionar tus habilidades o reservar un
            servicio, encontrarás un entorno profesional pensado para ayudarte a avanzar con confianza.
          </p>

          <div className="mt-8 grid gap-5">
            {homeInstitutionalHighlights.map((item, index) => {
              const Icon = highlightIcons[index] ?? BadgeCheck;

              return (
                <Reveal key={item} delay={0.08 + index * 0.05}>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-accent-gold/26 bg-accent-gold/10 text-accent-gold">
                      <Icon size={20} />
                    </div>
                    <p className="max-w-[42rem] text-[0.95rem] leading-7 text-mist/78">{item}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Button className="mt-8 sm:w-auto" to="/historia" variant="primary">
            Conoce Torzan Kairos
            <ArrowUpRight size={16} />
          </Button>
        </Reveal>
      </div>
    </Section>
  );
}

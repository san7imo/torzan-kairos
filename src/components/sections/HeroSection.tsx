import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { heroHighlights } from '../../content/site';
import { Reveal } from '../common/Reveal';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { Eyebrow } from '../ui/Eyebrow';
import { PlaceholderMedia } from '../ui/PlaceholderMedia';

export function HeroSection() {
  return (
    <section className="site-grid relative overflow-hidden pb-18 pt-10 sm:pb-24 lg:pb-28 lg:pt-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(231,156,31,0.18),transparent_24%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(33,33,33,0.46),transparent_30%,rgba(18,18,18,0.38)_100%)]" />
      <Container className="relative z-10">
        <div className="grid gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <Reveal className="max-w-3xl">
            <Eyebrow>Formación profesional con presencia editorial</Eyebrow>
            <h1 className="mt-6 font-display text-5xl leading-none tracking-tight text-balance text-mist sm:text-6xl lg:text-[5.2rem]">
              Prestigio formativo para quienes quieren convertir talento en profesión.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-mist/78 sm:text-lg">
              Torzan Kairos Academia une tradición estética colombiana, trayectoria
              consolidada en España y una enseñanza enfocada en técnica, ética y evolución
              profesional.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button to="/contacto" variant="primary">
                Solicitar información
              </Button>
              <Button to="/historia" variant="secondary">
                Conocer la historia
              </Button>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {heroHighlights.map((item, index) => (
                <motion.div
                  key={item}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-4 text-sm leading-6 text-mist/76"
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative">
              <PlaceholderMedia
                accent="frame"
                className="min-h-[520px] lg:min-h-[620px]"
                label="Banner visual preparado"
                title="Hero placeholder listo para reemplazar por fotografía o video final"
              />
              <div className="absolute bottom-6 left-6 max-w-xs rounded-[1.6rem] border border-white/12 bg-brand-blue/88 p-5 shadow-[0_20px_40px_rgba(0,0,0,0.24)]">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-gold">
                  Experiencia Torzan Kairos
                </p>
                <p className="mt-3 font-display text-2xl leading-tight text-mist">
                  Una atmósfera pensada para técnica, criterio y proyección profesional.
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm text-mist/72">
                  Contenido visual en actualización <ArrowRight size={15} />
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

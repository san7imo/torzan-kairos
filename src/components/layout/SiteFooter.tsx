import { ArrowUpRight, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { footerContact } from '../../data/contact';
import { mainNavigation } from '../../content/site';
import { BrandMark } from '../common/BrandMark';
import { Container } from '../ui/Container';

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[linear-gradient(180deg,rgba(33,33,33,0.98),rgba(16,16,16,1))] py-16 sm:py-18">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(231,189,89,0.1),transparent_28%)]" />
      <Container className="relative z-10">
        <div className="rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-7 shadow-[0_28px_80px_rgba(0,0,0,0.18)] sm:p-10">
          <div className="grid gap-12 lg:grid-cols-[1.25fr_0.8fr_1fr]">
            <div>
              <BrandMark />
              <p className="mt-6 max-w-md text-sm leading-8 text-mist/70">
                Formación profesional y servicios de belleza dentro de una misma propuesta de marca, preparados para crecer con contenido real sin rehacer la base visual.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-gold">Navegación</p>
              <div className="mt-5 flex flex-col gap-3">
                {mainNavigation.map((item) => (
                  <NavLink
                    key={item.href}
                    className="inline-flex items-center gap-2 text-sm text-mist/74 transition duration-300 hover:gap-3 hover:text-mist"
                    to={item.href}
                  >
                    {item.label}
                    <ArrowUpRight size={14} />
                  </NavLink>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-gold">Contacto editable</p>
              <div className="mt-5 space-y-4 text-sm text-mist/72">
                <p className="flex gap-3">
                  <Mail size={16} className="mt-1 shrink-0 text-accent-gold" />
                  <span>{footerContact.email}</span>
                </p>
                <p className="flex gap-3">
                  <Phone size={16} className="mt-1 shrink-0 text-accent-gold" />
                  <span>{footerContact.phone}</span>
                </p>
                <p className="flex gap-3">
                  <MapPin size={16} className="mt-1 shrink-0 text-accent-gold" />
                  <span>{footerContact.location}</span>
                </p>
                <div className="pt-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-mist/44">Redes en actualización</p>
                  <div className="mt-3 flex gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/4 transition duration-300 hover:border-accent-gold/32 hover:text-accent-gold">
                      <Instagram size={16} />
                    </span>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/4 transition duration-300 hover:border-accent-gold/32 hover:text-accent-gold">
                      <Mail size={16} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/8 pt-6 text-[0.68rem] uppercase tracking-[0.22em] text-mist/40">
            © {new Date().getFullYear()} Torzan Kairos. Base visual preparada para cursos, servicios, activos reales, datos operativos y despliegue comercial final.
          </div>
        </div>
      </Container>
    </footer>
  );
}

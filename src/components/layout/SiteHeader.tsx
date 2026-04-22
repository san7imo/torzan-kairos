import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { mainNavigation } from '../../content/site';
import { cn } from '../../lib/cn';
import { BrandMark } from '../common/BrandMark';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const closeMenu = () => setIsMenuOpen(false);
    window.addEventListener('resize', closeMenu);

    return () => window.removeEventListener('resize', closeMenu);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-[80] transition duration-300',
        isScrolled ? 'py-1.5' : 'py-2 sm:py-2.5',
      )}
    >
      <Container className="max-w-[1320px]">
        <div
          className={cn(
            'rounded-[1.45rem] border px-4 py-2 shadow-[0_18px_42px_rgba(0,0,0,0.12)] backdrop-blur-xl transition duration-300 sm:px-5',
            isScrolled
              ? 'border-white/10 bg-[linear-gradient(180deg,rgba(21,21,21,0.94),rgba(21,21,21,0.88))]'
              : isHome
                ? 'border-white/6 bg-[linear-gradient(180deg,rgba(21,21,21,0.54),rgba(21,21,21,0.3))] shadow-[0_12px_34px_rgba(0,0,0,0.14)]'
                : 'border-white/8 bg-[linear-gradient(180deg,rgba(21,21,21,0.72),rgba(21,21,21,0.62))]',
          )}
        >
          <div className="flex items-center justify-between gap-4">
            <NavLink aria-label="Ir al inicio" to="/">
              <BrandMark variant="navbar" />
            </NavLink>

            <nav className="hidden items-center gap-1 lg:flex">
              {mainNavigation.map((item) => (
                <NavLink
                  key={item.href}
                  className={({ isActive }) =>
                    cn(
                      'rounded-full px-3 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-mist/56 transition duration-300 hover:text-mist',
                      isActive && 'bg-white/[0.05] text-accent-gold',
                    )
                  }
                  to={item.href}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <Button className="px-5" to="/contacto" variant="primary">
                Solicitar información
              </Button>
            </div>

            <button
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Cerrar navegación' : 'Abrir navegación'}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/6 text-mist transition duration-300 hover:border-accent-gold/40 hover:bg-white/10 hover:text-accent-gold lg:hidden"
              onClick={() => setIsMenuOpen((current) => !current)}
              type="button"
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {isMenuOpen ? (
            <nav className="mt-4 rounded-[1.5rem] border border-white/8 bg-[linear-gradient(180deg,rgba(24,24,24,0.98),rgba(18,18,18,0.98))] p-4 lg:hidden">
              <div className="flex flex-col gap-2">
                {mainNavigation.map((item) => (
                  <NavLink
                    key={item.href}
                    className={({ isActive }) =>
                      cn(
                        'rounded-[1rem] px-4 py-3 text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-mist/76 transition duration-300 hover:bg-white/6 hover:text-mist',
                        isActive && 'bg-white/8 text-accent-gold',
                      )
                    }
                    onClick={() => setIsMenuOpen(false)}
                    to={item.href}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>

              <Button className="mt-4 w-full" to="/contacto" variant="primary">
                Solicitar información
              </Button>
            </nav>
          ) : null}
        </div>
      </Container>
    </header>
  );
}

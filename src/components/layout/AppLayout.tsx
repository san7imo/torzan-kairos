import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';

export function AppLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-brand-blue text-mist">
      <SiteHeader />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          animate={{ opacity: 1, y: 0 }}
          className="pt-24 sm:pt-28"
          exit={{ opacity: 0, y: -12 }}
          initial={{ opacity: 0, y: 18 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <SiteFooter />
    </div>
  );
}

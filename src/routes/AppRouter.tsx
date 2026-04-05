import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AppLayout } from '../components/layout/AppLayout';

const HomePage = lazy(async () => {
  const module = await import('../pages/HomePage');
  return { default: module.HomePage };
});

const StoryPage = lazy(async () => {
  const module = await import('../pages/StoryPage');
  return { default: module.StoryPage };
});

const CoursesPage = lazy(async () => {
  const module = await import('../pages/CoursesPage');
  return { default: module.CoursesPage };
});

const CourseDetailPage = lazy(async () => {
  const module = await import('../pages/CourseDetailPage');
  return { default: module.CourseDetailPage };
});

const ServicesPage = lazy(async () => {
  const module = await import('../pages/ServicesPage');
  return { default: module.ServicesPage };
});

const ServiceDetailPage = lazy(async () => {
  const module = await import('../pages/ServiceDetailPage');
  return { default: module.ServiceDetailPage };
});

const ContactPage = lazy(async () => {
  const module = await import('../pages/ContactPage');
  return { default: module.ContactPage };
});

const NotFoundPage = lazy(async () => {
  const module = await import('../pages/NotFoundPage');
  return { default: module.NotFoundPage };
});

function RouteFallback() {
  return (
    <div className="px-5 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1240px]">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] px-6 py-10 text-sm uppercase tracking-[0.18em] text-mist/56">
          Cargando contenido
        </div>
      </div>
    </div>
  );
}

export function AppRouter() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/historia" element={<StoryPage />} />
          <Route path="/cursos" element={<CoursesPage />} />
          <Route path="/cursos/:slug" element={<CourseDetailPage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/servicios/:slug" element={<ServiceDetailPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/inicio" element={<Navigate replace to="/" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

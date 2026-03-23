import { Navigate, Route, Routes } from 'react-router-dom';
import { AppLayout } from '../components/layout/AppLayout';
import { ContactPage } from '../pages/ContactPage';
import { CourseDetailPage } from '../pages/CourseDetailPage';
import { CoursesPage } from '../pages/CoursesPage';
import { HomePage } from '../pages/HomePage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { ServiceDetailPage } from '../pages/ServiceDetailPage';
import { ServicesPage } from '../pages/ServicesPage';
import { StoryPage } from '../pages/StoryPage';

export function AppRouter() {
  return (
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
  );
}

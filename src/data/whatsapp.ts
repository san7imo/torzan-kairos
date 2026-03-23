import type { CourseProgram, ServiceCategory } from '../types/site';

export const whatsappConfig = {
  salesPhoneRaw: '34652384970',
  salesPhoneDisplay: '652 38 49 70',
  secondaryPhoneDisplay: '+34 910 133 950',
};

export const whatsappMessages = {
  contactGeneral:
    'Hola, quiero información sobre cursos y servicios de Torzan Kairos. ¿Podrían orientarme, por favor?',
  contactBooking:
    'Hola, quiero reservar una cita o recibir orientación sobre la oferta actual de Torzan Kairos. ¿Podrían ayudarme?',
  courseInfo: (courseTitle: string) =>
    `Hola, quiero información sobre ${courseTitle} de Torzan Kairos.`,
  serviceBooking: (serviceTitle: string) =>
    `Hola, quiero reservar una cita para ${serviceTitle} en Torzan Kairos. ¿Podrían compartirme disponibilidad y confirmar el precio?`,
};

export function buildCourseWhatsAppMessage(course: CourseProgram) {
  return whatsappMessages.courseInfo(course.title);
}

export function buildServiceWhatsAppMessage(service: ServiceCategory) {
  return whatsappMessages.serviceBooking(service.shortTitle);
}

export function buildWhatsAppLink(message: string, phone = whatsappConfig.salesPhoneRaw) {
  return `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
}

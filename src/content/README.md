# Content guide

El contenido editable y comercial del proyecto ahora vive principalmente en `src/data/`.

## Archivos principales

- `site.ts`: metadatos SEO, navegación, héroes de página, assets visuales compartidos y narrativa editorial global.
- `../data/courses.ts`: cursos, módulos, destacados y helpers de detalle académico.
- `../data/services.ts`: categorías de servicio, precios, estados comerciales y helpers de detalle.
- `../data/contact.ts`: teléfonos, dirección, formulario, highlights y bloques de contacto.
- `../data/faqs.ts`: preguntas frecuentes editables.
- `../data/whatsapp.ts`: número principal, mensajes prellenados y constructor de enlaces.

## Qué reemplazar cuando llegue contenido final

- Imágenes reales: revisar placeholders visuales y bloques de galería en Home, Historia, Cursos, Servicios y Contacto.
- Videos: sustituir hero placeholders por video o banner final solo si el peso está controlado.
- Cursos: completar duración, horarios y datos comerciales en `src/data/courses.ts`.
- Servicios: ajustar carta final, estados de precio y observaciones en `src/data/services.ts`.
- Contacto: actualizar correo, horario y cualquier dato operativo pendiente en `src/data/contact.ts`.
- Historia: sustituir los bloques editoriales si llega una versión narrativa final aprobada.
- Testimonios: no existen aún; agregarlos solo cuando estén validados por el cliente.

## Nota de demo

La UI ya está preparada para demo. El objetivo es reemplazar contenido sin rehacer componentes.

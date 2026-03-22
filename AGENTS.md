# AGENTS.md — Torzan Kairos Landing

## 1. Contexto del proyecto

Este proyecto consiste en el desarrollo de un sitio web tipo landing / marketing site para **Torzan Kairos Academia**, construido con **React + TypeScript + Tailwind CSS v4+**.

Aunque se le llama “landing”, funcionalmente debe comportarse como un **sitio promocional multipágina, ligero y moderno**, con enfoque en captación, posicionamiento de marca y presentación institucional.

La marca debe transmitir:
- elegancia
- formación profesional
- lujo sobrio
- precisión técnica
- cercanía humana
- confianza y trayectoria

El diseño debe sentirse **premium, minimalista y contemporáneo**, evitando sobrecarga visual, bloques densos de texto sin jerarquía o animaciones invasivas.

## 2. Objetivo del sitio

El sitio debe servir para:
1. presentar a Torzan Kairos como academia profesional de belleza e imagen personal;
2. comunicar su propuesta de valor, trayectoria, misión, visión y pilares;
3. mostrar cursos, experiencias, espacios y metodología;
4. ofrecer una página exclusiva para contar la historia de la fundadora / marca;
5. facilitar el contacto comercial y la conversión;
6. permitir mostrar avances aunque todavía falten imágenes, videos y datos finales.

## 3. Estado actual del proyecto

Actualmente se cuenta con:
- logotipo horizontal,
- logotipo vertical,
- isotipo,
- favicon,
- paleta cromática aprobada,
- textos institucionales aprobados.

Todavía **NO** se cuenta con:
- banco final de fotografías,
- videos finales para fondos,
- listado definitivo de cursos,
- precios,
- horarios,
- testimonios reales,
- galería final,
- datos completos de contacto y ubicación operativa final,
- formularios o integraciones finales.

Por lo tanto, la arquitectura y los componentes deben construirse de forma que permitan **placeholders limpios, escalables y fáciles de reemplazar**.

## 4. Identidad visual aprobada

### Paleta base
- `#212121` — carbón / fondo oscuro principal
- `#dce2e1` — gris claro / fondo neutro y contraste suave
- `#142f4a` — azul profundo / color institucional principal
- `#e79c1f` — dorado / acento principal

### Reglas visuales
- usar el **azul profundo** como color de marca dominante;
- usar el **dorado** para acentos, detalles, botones destacados, líneas y microinteracciones;
- usar el **carbón** para fondos premium, overlays y secciones sobrias;
- usar el **gris claro** para contrastes, fondos alternos y respiración visual;
- evitar colores adicionales innecesarios;
- evitar gradientes exagerados o brillantes;
- los fondos oscuros deben sentirse refinados, no pesados.

## 5. Dirección de diseño

### Principios visuales
- minimalismo elegante;
- mucho espacio en blanco / aire visual;
- tipografía con jerarquía clara;
- bloques editoriales amplios y ordenados;
- uso selectivo de animación;
- apariencia premium sin caer en exceso ornamental.

### Sensación buscada
El sitio debe sentirse como la unión entre:
- academia profesional,
- marca personal con trayectoria,
- formación de alto nivel,
- estética contemporánea,
- experiencia aspiracional.

### Motion / transiciones
Las animaciones deben ser sutiles y funcionales. Prioridades:
- fade-up / fade-in al entrar en viewport;
- parallax suave o desplazamiento sutil en hero;
- reveal de imágenes y bloques;
- hover states refinados;
- transición suave entre secciones;
- evitar sliders agresivos, zooms excesivos o efectos que dificulten la lectura.

La animación nunca debe competir con el contenido.

## 6. Arquitectura recomendada

Aunque el usuario lo llama “landing”, este proyecto debe estructurarse como un sitio pequeño de 3 páginas principales:

### Rutas
1. `/` — Home
2. `/historia` — Historia de la fundadora / historia de la academia
3. `/contacto` — Contacto

### Rutas opcionales futuras
- `/cursos`
- `/experiencias`
- `/galeria`
- `/ubicacion`

Si todavía no existen como páginas independientes, parte de ese contenido puede vivir inicialmente dentro de Home como secciones ancla.

## 7. Estructura de contenido recomendada

## Home (`/`)
El home debe condensar lo más importante y convertir visitas en interés.

### Secciones sugeridas
1. **Hero premium**
   - titular fuerte
   - subtítulo breve
   - CTA principal
   - CTA secundario
   - fondo con video, imagen o banner placeholder

2. **Quiénes somos / resumen institucional**
   - extracto breve de la historia
   - conexión con la trayectoria internacional
   - enlace a la página completa de historia

3. **Áreas de formación**
   - Barbería
   - Peluquería profesional
   - Estética
   - Maquillaje profesional
   - Manos y pies
   - cada tarjeta puede usar texto temporal si aún faltan detalles finales

4. **Metodología / propuesta de valor**
   - técnica + creatividad
   - formación integral
   - bioseguridad y ética
   - enfoque profesional real

5. **Experiencia Torzan Kairos**
   - ambiente de aprendizaje
   - acompañamiento
   - clases colectivas y personalizadas
   - proyección laboral

6. **Equipo docente destacado**
   - cards resumidas con placeholders de foto
   - nombre, rol, breve enfoque

7. **Instalaciones / experiencia visual**
   - grid de placeholders o banners de espacios
   - pensado para reemplazar luego por galería real

8. **Ubicación / presencia**
   - mapa o bloque visual placeholder
   - texto corto sobre localización y atención

9. **Llamado a la acción final**
   - contacto / inscripción / solicitar información

10. **Footer**
   - navegación
   - contacto
   - redes
   - derechos

## Historia (`/historia`)
Esta página es importante y no debe sentirse como una sección secundaria. Debe tener peso narrativo y editorial.

### Secciones sugeridas
1. Hero editorial
2. Historia de Mariela Torres Zambrano
3. Origen de Torzan Kairos
4. Legado Colombia + trayectoria en España
5. Filosofía de enseñanza
6. Misión, visión y valores
7. Línea de tiempo o hitos de crecimiento
8. CTA hacia contacto o cursos

## Contacto (`/contacto`)
Debe ser simple, elegante y directo.

### Secciones sugeridas
1. encabezado
2. bloque de contacto principal
3. formulario
4. información de ubicación
5. horarios o texto placeholder
6. CTA adicional por WhatsApp
7. mapa o bloque visual placeholder

## 8. Ideas clave para enriquecer el proyecto

Estas ideas ayudan a que el sitio se vea más completo aun cuando falte material real:

### A. Sección “Experiencia de formación”
No vender solo cursos. Vender una transformación.

Subtemas:
- aprendizaje práctico real,
- acompañamiento docente,
- desarrollo del criterio estético,
- proyección laboral y emprendimiento.

### B. Sección “Por qué Torzan Kairos”
Con iconos o métricas placeholder.

Ejemplos:
- más de 12 años de trayectoria,
- formación integral,
- docentes especializados,
- enfoque técnico y humano,
- visión internacional.

### C. Sección “Áreas que transforman talento en profesión”
Una rejilla elegante con las disciplinas principales.

### D. Sección “Espacios que inspiran”
Aunque aún no existan fotos finales, puede diseñarse una galería placeholder de alto nivel.

### E. Testimonios placeholder controlados
No inventar testimonios reales. Usar solo bloques marcados claramente como temporales o desactivarlos hasta tener material aprobado.

### F. CTA persistente
Un botón flotante o barra discreta para WhatsApp / contacto puede ayudar a la conversión, siempre sin romper el minimalismo.

## 9. Contenido aprobado a respetar

La narrativa institucional aprobada incluye estos ejes:
- academia fundada en 2010 por **Mariela Torres Zambrano**;
- unión entre tradición estética colombiana y trayectoria consolidada en España;
- enfoque en Barbería, Peluquería, Estética y Maquillaje Profesional;
- misión basada en formación integral, bioseguridad, ética y desarrollo del ser;
- visión de consolidarse como referencia internacional;
- valores centrados en maestría, creatividad, compromiso y respeto por la profesión;
- equipo docente con perfiles como Ramiro Rojas Perdomo, Nicolay Alfaro y Carolina Baquero. fileciteturn1file0

**Importante:** no reescribir arbitrariamente la identidad verbal de la marca. Se puede adaptar la longitud de los textos para UX, pero el sentido institucional debe preservarse. fileciteturn1file0turn1file1

## 10. Reglas de contenido para placeholders

Mientras falte información final:
- usar labels explícitos como `Próximamente`, `Contenido en actualización`, `Imagen referencial`, `Curso en construcción`;
- no inventar precios;
- no inventar duraciones exactas;
- no inventar testimonios ni cifras no aprobadas;
- no inventar direcciones exactas si no han sido confirmadas;
- no inventar certificados, avales o partners.

Sí se permite:
- usar copy temporal elegante y claramente marcado;
- usar tarjetas de cursos con texto ejemplo neutral;
- usar bloques visuales placeholder con overlay y etiqueta.

## 11. Stack técnico

### Base
- React
- TypeScript
- Tailwind CSS v4+

### Recomendación de implementación
Si no se ha definido el bootstrap exacto, priorizar una base limpia y mantenible. Puede ser Vite + React + TypeScript.

### Librerías sugeridas
Usar solo si aportan valor real:
- `react-router-dom` para rutas;
- `framer-motion` o librería de motion equivalente para transiciones suaves;
- `lucide-react` para íconos;
- una utilidad ligera para class merging si se necesita.

Evitar dependencias pesadas si el resultado puede lograrse con CSS + Tailwind.

## 12. Convenciones de desarrollo

### Calidad de código
- TypeScript estricto;
- componentes reutilizables y pequeños;
- props tipadas;
- evitar componentes gigantes;
- separar layout, sections y ui components;
- mantener nombres semánticos;
- mantener estilos dentro del sistema Tailwind;
- evitar CSS suelto salvo utilidades muy justificadas.

### Organización sugerida
```txt
src/
  assets/
  components/
    layout/
    sections/
    ui/
  data/
  pages/
  routes/
  hooks/
  lib/
  styles/
```

### Componentes esperados
- `SiteHeader`
- `SiteFooter`
- `HeroSection`
- `SectionHeading`
- `CourseGrid`
- `StoryPreviewSection`
- `ValuesSection`
- `FacultySection`
- `ExperienceSection`
- `LocationSection`
- `ContactForm`
- `MediaPlaceholder`
- `CTASection`

## 13. Reglas UX/UI obligatorias

- mobile first;
- responsive impecable;
- contraste suficiente;
- navegación clara y limpia;
- CTAs visibles pero no agresivos;
- evitar exceso de texto continuo sin respiración;
- priorizar lectura y conversión;
- mantener consistencia de paddings, container widths y jerarquías;
- el home debe verse sólido aunque falten assets finales.

## 14. Accesibilidad mínima requerida

- HTML semántico;
- headings en orden correcto;
- `alt` descriptivos;
- focus states visibles;
- contraste adecuado;
- formularios con labels;
- botones y enlaces correctamente diferenciados.

## 15. Performance

- optimizar imágenes;
- usar placeholders ligeros mientras no existan videos finales;
- no cargar video autoplay pesado sin fallback;
- lazy load cuando aporte valor;
- evitar bundles innecesarios;
- preferir animaciones por transform/opacity.

## 16. Enfoque del hero

El hero es una pieza crítica. Debe comunicar prestigio, oportunidad profesional y belleza técnica.

### Debe incluir
- un titular elegante y fuerte;
- un párrafo corto;
- 1 CTA principal;
- 1 CTA secundario;
- fondo visual con overlay oscuro y lectura perfecta;
- animación sutil de entrada.

### No debe incluir
- demasiado texto;
- demasiados botones;
- carruseles automáticos invasivos;
- efectos excesivos.

## 17. Guía editorial del tono

El tono del sitio debe ser:
- elegante;
- profesional;
- cálido, pero no informal;
- aspiracional, pero no grandilocuente;
- claro y directo.

Evitar:
- frases genéricas tipo “somos los mejores” sin soporte;
- exceso de adjetivos;
- textos demasiado comerciales;
- clichés visuales o verbales.

## 18. Qué debe entregar Codex

Codex debe trabajar por hitos y en cada hito entregar:
1. código funcional;
2. estructura limpia;
3. componentes reutilizables;
4. placeholders bien marcados;
5. commits o cambios fáciles de revisar;
6. nada de “mock data engañosa”.

## 19. Desarrollo por hitos

## Hito 0 — Base y setup
**Objetivo:** dejar el proyecto listo para crecer.

### Entregables
- bootstrap del proyecto React + TypeScript + Tailwind v4+
- estructura de carpetas
- router configurado
- layout base
- header y footer iniciales
- carga de logos y favicon
- tokens base de color / spacing / containers

### Definition of Done
- el proyecto corre localmente sin errores
- existen rutas para Home, Historia y Contacto
- la identidad visual base está aplicada

## Hito 1 — Diseño sistémico y home base
**Objetivo:** construir la primera versión sólida del Home.

### Entregables
- hero principal
- bloque resumen institucional
- sección áreas de formación
- sección propuesta de valor
- CTA final
- placeholders visuales elegantes

### Definition of Done
- Home navegable y presentable
- se siente como una marca premium aunque falten assets

## Hito 2 — Página Historia
**Objetivo:** desarrollar la narrativa de la marca y fundadora.

### Entregables
- hero editorial de historia
- bloques narrativos con buena jerarquía
- misión, visión, objetivos y valores
- timeline o composición visual de trayectoria
- CTA a contacto

### Definition of Done
- la página cuenta la historia con claridad y peso visual
- el contenido aprobado está bien representado

## Hito 3 — Página Contacto
**Objetivo:** construir una página de contacto limpia y funcional.

### Entregables
- encabezado de contacto
- formulario visual
- bloque de canales de contacto
- mapa / ubicación placeholder
- CTA por WhatsApp

### Definition of Done
- la página transmite confianza y claridad
- el formulario está listo para conectar a backend más adelante

## Hito 4 — Motion y refinamiento visual
**Objetivo:** elevar la experiencia sin romper el minimalismo.

### Entregables
- animaciones de entrada sutiles
- reveals por sección
- hover states refinados
- transiciones entre páginas
- microinteracciones consistentes

### Definition of Done
- el sitio se siente moderno y premium
- la animación no afecta rendimiento ni legibilidad

## Hito 5 — Responsive, accesibilidad y limpieza
**Objetivo:** endurecer calidad.

### Entregables
- revisión mobile / tablet / desktop
- accesibilidad básica
- revisión de contraste y focus
- limpieza de componentes
- revisión de textos placeholder

### Definition of Done
- experiencia consistente en todos los breakpoints
- base lista para reemplazar contenido final

## Hito 6 — Integración de contenido real
**Objetivo:** reemplazar placeholders por material definitivo cuando llegue.

### Entregables
- reemplazo de videos / banners
- actualización de cursos reales
- integración de datos de contacto definitivos
- galerías finales
- revisión final de copy

### Definition of Done
- sitio listo para publicación
- sin placeholders pendientes visibles

## 20. Regla de trabajo para contenido faltante

Si falta información, Codex debe:
1. crear la estructura igualmente;
2. colocar contenido temporal claramente señalado;
3. no bloquear el avance del proyecto;
4. dejar todo preparado para reemplazo rápido.

## 21. Prohibiciones explícitas

Codex NO debe:
- rediseñar la identidad de marca;
- cambiar la paleta aprobada;
- inventar información crítica;
- llenar la UI con lorem ipsum genérico si puede usarse copy temporal más útil;
- hacer un diseño recargado;
- usar animaciones excesivas;
- convertir el sitio en algo barroco o visualmente ruidoso.

## 22. Prioridad de negocio

La prioridad no es solo “verse bonito”. La prioridad es que el sitio:
- comunique prestigio,
- se pueda mostrar pronto como avance,
- sea escalable,
- permita cargar el contenido real después sin rehacer la base.

## 23. Pendientes que deberán solicitarse al cliente

En próximas iteraciones será necesario pedir:
- fotos de instalaciones,
- fotos del equipo,
- videos cortos para hero o banners,
- listado final de cursos,
- duración de programas,
- horarios,
- certificaciones o avales confirmados,
- testimonios aprobados,
- redes sociales,
- teléfonos y correos finales,
- dirección exacta,
- mapa / ubicación,
- políticas o avisos legales si aplican.

## 24. Instrucción final para Codex

Construir una primera versión que ya se pueda enseñar al cliente como avance real, aunque todavía falten activos. La experiencia debe sentirse completa, coherente y premium desde el primer hito.

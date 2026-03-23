# AGENTS.md — Torzan Kairos Web

## 1. Propósito de este archivo

Este documento es la **fuente de verdad operativa para Codex** durante el desarrollo del sitio web de **Torzan Kairos**. Antes de ejecutar cualquier hito, Codex debe leer este archivo y respetarlo.

La prioridad no es solo “hacer pantallas bonitas”, sino construir una web coherente con la marca, escalable y lista para evolucionar a medida que lleguen más assets, fotos y validaciones del cliente.

---

## 2. Resumen ejecutivo del proyecto

Torzan Kairos ya no debe presentarse únicamente como una academia. La marca debe comunicarse como un ecosistema de **formación profesional + servicios de belleza, estética y cuidado personal**.

La web debe vender dos líneas principales de negocio:

1. **Academia / Cursos**
   - formación profesional
   - módulos detallados
   - matrícula / solicitud de información
   - prestigio, técnica, metodología, historia y trayectoria

2. **Servicios / Atención al público**
   - peluquería
   - uñas
   - cejas, depilación y pestañas
   - cuidado personal / spa
   - precios visibles
   - reserva por WhatsApp

La experiencia debe sentirse **premium, clara, moderna, minimalista y comercialmente efectiva**.

---

## 3. Stack obligatorio

- **React**
- **TypeScript**
- **Tailwind CSS v4+**
- arquitectura limpia y escalable
- componentes reutilizables
- contenido desacoplado de la UI
- diseño mobile-first

Evitar complejidad innecesaria, dependencias pesadas o patrones difíciles de mantener.

---

## 4. Objetivos del sitio

El sitio debe servir para:

1. presentar la identidad de Torzan Kairos de forma profesional;
2. comunicar historia, misión, visión, objetivos y pilares de marca;
3. vender cursos profesionales con páginas individuales completas;
4. vender servicios con páginas individuales por categoría;
5. llevar tráfico a **WhatsApp** para conversión:
   - matrícula de cursos
   - reserva de citas
6. mostrar imágenes reales de ejemplo aunque aún falten assets finales;
7. quedar preparado para reemplazar contenido sin rehacer la arquitectura.

---

## 5. Contexto de marca aprobado

### Base institucional
Torzan Kairos fue fundada en **2010** por **Mariela Torres Zambrano**. La marca se presenta como una unión entre talento internacional, espíritu emprendedor, raíces en la tradición estética colombiana y trayectoria consolidada en España.

### Posicionamiento
No debe verse como una academia improvisada ni como un spa genérico. Debe proyectar:

- trayectoria
- formación profesional seria
- estética cuidada
- visión internacional
- cercanía humana
- prestigio y transformación

### Mensajes clave de marca
La narrativa institucional debe apoyarse en:

- legado, pasión y excelencia en formación de belleza
- técnica rigurosa + creatividad
- transformación profesional
- formación integral
- bioseguridad y ética
- maestría, creatividad, compromiso y respeto por la profesión

### Misión
Empoderar futuros artistas del sector de la imagen personal mediante una formación profesional integral, equilibrando competencias técnico-prácticas con desarrollo humano, bioseguridad y ética.

### Visión
Consolidarse como institución de referencia internacional en formación de artes estéticas, reconocida por innovación, excelencia y por formar profesionales destacados en Europa.

### Objetivos institucionales
- excelencia académica
- desarrollo integral
- personalización y cercanía
- innovación técnica

### Pilares / valores
- **Maestría**
- **Creatividad**
- **Compromiso**
- **Respeto por la profesión**

### Perfil del equipo docente
La marca cuenta con una narrativa docente basada en experiencia y vanguardia. Debe mencionarse un claustro de expertos con enfoque internacional, técnico y humano.

---

## 6. Identidad visual aprobada

### Paleta oficial
- `#212121` — carbón
- `#dce2e1` — gris claro
- `#142f4a` — azul profundo
- `#e79c1f` — dorado

### Uso recomendado
- **Azul profundo**: color institucional dominante
- **Dorado**: acentos, detalles, microinteracciones, botones destacados
- **Carbón**: fondos premium, overlays, bloques sobrios
- **Gris claro**: fondos suaves, contraste, respiración visual

### Reglas visuales
- evitar colores extra innecesarios
- evitar efectos recargados
- evitar exceso de degradados brillantes
- la web debe verse refinada, no saturada
- usar suficiente aire visual
- respetar la esencia sobria del branding actual, pero elevarla a un lenguaje más moderno

---

## 7. Dirección creativa global

### Sensación buscada
La experiencia debe sentirse como la unión entre:

- academia profesional de alto nivel
- marca de belleza aspiracional
- formación técnica seria
- servicios comerciales confiables
- estética contemporánea y minimalista

### Diferenciación visual por tipo de página

#### A. Páginas de cursos → diseño más académico
Deben sentirse:
- editoriales
- estructuradas
- rigurosas
- informativas
- con foco en módulos, duración, metodología y salida profesional

Se puede usar:
- composiciones amplias
- grids ordenados
- acordeones de módulos
- bloques de contenido con jerarquía clara
- imágenes con overlay elegante

#### B. Páginas de servicios → diseño más comercial
Deben sentirse:
- directas
- atractivas
- aspiracionales
- orientadas a conversión
- con pricing visible y CTA claros

Se puede usar:
- cards de servicios
- tablas o listas de precios limpias
- banners comerciales
- botones de reserva prominentes
- galerías más sensoriales

### Regla central
Aunque cursos y servicios tengan enfoques visuales distintos, **ambos deben sentirse parte de la misma marca**.

---

## 8. Motion y UX

Las animaciones deben ser sutiles y elegantes:

- fade-up
- fade-in
- reveal on scroll
- stagger suave en grids
- hover states refinados
- transición suave entre rutas

Evitar:
- sliders invasivos
- zooms bruscos
- parallax exagerado
- animación que compita con el contenido

La UX debe priorizar:
- claridad
- escaneo rápido
- conversión
- buena legibilidad
- navegación simple

---

## 9. Arquitectura definitiva del sitio

### Rutas principales
- `/` — Home
- `/historia` — Historia / marca / fundadora
- `/cursos` — índice de cursos
- `/cursos/barberia`
- `/cursos/peluqueria`
- `/cursos/unas`
- `/servicios` — índice de servicios
- `/servicios/peluqueria`
- `/servicios/unas`
- `/servicios/cejas-y-depilacion`
- `/servicios/cuidado-personal`
- `/contacto`

### Regla de navegación
El menú principal debe dar visibilidad clara a:
- Inicio
- Historia
- Cursos
- Servicios
- Contacto

---

## 10. Estructura recomendada del Home

El Home debe vender ambas líneas del negocio: academia y servicios.

### Secciones obligatorias
1. **Hero principal**
   - titular fuerte
   - subtítulo breve
   - CTA doble:
     - Ver cursos
     - Reservar cita
   - imagen o video de fondo elegante

2. **Resumen institucional**
   - quiénes somos
   - conexión entre academia y atención real
   - enlace a Historia

3. **Cursos destacados**
   - Barbería Profesional
   - Peluquería Profesional
   - Curso Profesional de Uñas

4. **Servicios destacados**
   - Peluquería
   - Uñas
   - Cejas / depilación / pestañas
   - Cuidado personal / spa

5. **Por qué Torzan Kairos**
   - formación práctica
   - docentes / experiencia
   - enfoque integral
   - servicios reales
   - ubicación / cercanía

6. **Experiencia visual / galería**
   - imágenes reales de cursos y servicios

7. **Ubicación y contacto rápido**
   - dirección
   - CTA WhatsApp

8. **CTA final dividido**
   - Quiero formarme
   - Quiero reservar

---

## 11. Página Historia

La página `/historia` debe tener peso editorial y no verse como una sección secundaria.

### Secciones recomendadas
- Hero editorial
- Historia de la marca
- Fundación en 2010
- Mariela Torres Zambrano
- Colombia + España
- Misión, visión y objetivos
- Pilares
- Equipo docente
- CTA hacia cursos y contacto

### Tono
- narrativo
- institucional
- elegante
- emocional pero sobrio

---

## 12. Cursos: lineamiento global

### Página índice `/cursos`
Debe mostrar una visión general de los 3 programas con cards premium y CTA a sus páginas individuales.

### CTA principal de cursos
Cada curso debe tener botón:
- **Matricúlate ahora**
- **Solicitar información**

Ambos deben dirigir a WhatsApp con mensaje prellenado.

### WhatsApp cursos
Usar como base el número:
- `652384970`

Formato sugerido del mensaje:
- `Hola, quiero información sobre el curso de [NOMBRE_DEL_CURSO] de Torzan Kairos. Me gustaría conocer horarios, precio y proceso de matrícula.`

### Diseño de páginas de cursos
Cada página individual debe incluir:
- hero visual
- resumen del curso
- duración
- a quién va dirigido
- qué aprenderá el alumno
- módulos completos
- beneficios del programa
- galería
- CTA a WhatsApp

---

## 13. Contenido obligatorio de cursos

### 13.1 Curso de Barbería

#### Nombre recomendado
**Barbería Profesional**

#### Duración
**240 horas**

#### Resumen base
Curso dirigido a alumnos que desean aprender la profesión de peluquería masculina y barbería, dando respuesta a la demanda del sector. Debe comunicar técnicas de corte, peinado, barbería, color y moda masculina actual.

#### Beneficios visibles en materiales recibidos
- pagos flexibles
- profesorado experto
- bolsa de empleo

> Si estos beneficios se muestran, debe hacerse con tono responsable. Si se requiere mayor cautela legal/comercial, mostrarlos como beneficios institucionales y no como promesa absoluta.

#### Módulos obligatorios
**Módulo 1**
- Higiene y asepsia
- Puesto de trabajo en barbería
- Herramientas y productos
- Bioseguridad
- Tipos de afecciones

**Módulo 2**
- Técnicas de corte clásico
- Técnicas de corte en cabello corto (fades)
- Tipos de fade / degradados
- Cortes modernos
- Técnica y corte con tijera
- Uso correcto de la navaja

**Módulo 3**
- Visagismo
- Tipos de barbas y bigotes
- Diseño de afeitado y perfilado
- Rituales de afeitado
- Cosmetología para la barba

**Módulo 4**
- Cortes con diseño
- Freestyle
- Técnicas old school
- Peinado y uso correcto del secador
- Bioseguridad

**Módulo 5**
- Cambios estructurales
- Colorimetría
- Carta de color
- Decoloración
- Tintes fantasía

**Módulo 6**
- Asesoría de imagen
- Gestión administrativa
- Captación del cliente
- Emprendimiento

---

### 13.2 Curso de Peluquería

#### Nombre recomendado
**Peluquería Profesional**

#### Duración
**240 horas prácticas**

#### Introducción / temario base
- Origen y evolución de la peluquería
- Herramientas de trabajo, presentación, técnicas y uso
- Higiene: esterilización de herramientas, preparación del cliente y área de trabajo
- Servicio al cliente
- La piel
- El cabello
- Tricología del cabello
- Normas de seguridad y prevención de accidentes

#### Módulos obligatorios
**Módulo 1 — Higiene del cabello y del cuero cabelludo**
- Introducción a la higiene capilar
- Cosmetología para la higiene capilar
- Champús y acondicionadores
- Técnicas para el cuidado, lavado y acondicionamiento capilar

**Módulo 2 — Cortes de cabello**
- Corte bob
- Corte ovalado
- Corte en V
- Corte recto
- Capas ascendentes
- Corte 0°
- Corte 45°
- Corte 90°
- Corte 135° y 180°
- Cortes clásicos de peluquería masculina

**Módulo 3 — Estructuras del cabello y recogidos**
- Rulos
- Ondas de agua
- Ondas con plancha
- Secado
- Planchado
- Recogidos bajos
- Recogidos medios
- Recogidos altos
- Peinados con volumen
- Peinado bob
- Peinado con puntas hacia afuera

**Módulo 4 — Colorimetría**
- Colorimetría
- Tinte raíz
- Tinte directo
- Corrección de color
- Decoloración y coloraciones parciales del cabello
- Numeración en colorimetría
- Estilos de coloración y tendencias
- Alteraciones del color
- Limpieza de color
- Mechas tradicionales
- Mechas babylight
- Mechas balayage
- Mechas balayage V
- Mechas balayage con falso crecimiento
- Mechas en contorno

**Módulo 5 — Tratamientos capilares**
- Hidrataciones
- Botox capilar
- Queratinas
- Alisados

---

### 13.3 Curso de Uñas

#### Nombre recomendado
**Curso Profesional de Uñas**

#### Duración
**240 horas prácticas**

#### Introducción / temario base
- Equipos, herramientas y productos
- Anatomía de las uñas
- Patologías
- Higiene, desinfección y esterilización de herramientas
- Manejo de químicos y prevención de alergias

#### Módulos obligatorios
**Módulo 1 — Manicura y pedicura tradicional / rusa**
- Manicura tradicional y rusa
- Pedicura tradicional y rusa
- Uso correcto del torno y sus brocas
- Esmaltado tradicional y semipermanente
- Remoción de callos y durezas
- Retiro de esmalte

**Módulo 2 — Uñas artificiales (acrílico, gel, acrigel y soft gel)**
- Aplicación de perlas en acrílico
- Aplicación de acrílico con tips
- Acrílico esculpido con molde
- Puntas comerciales
- Aplicación de acrigel y gel
- Técnica de limado perfecto
- Técnica de limado con broca 5 en 1
- Técnica soft gel
- Relleno y retiro de sistema
- Acripie
- Elevaciones del torno
- Retiro de uñas artificiales

**Módulo 3 — Decoraciones básicas y avanzadas**
- Francesas
- Animal print
- Diseños comerciales
- Baby boomer
- Baby color y glam
- Técnicas de encapsulado
- Técnica en reversa
- Flores en 3D acrílicas y en gel
- Aerografía
- Decoraciones con pedrería
- Efectos: espejo, aurora, marmolado, blooming, agua y ojo de gato

**Módulo 4 — Baño en acrílico, gel y base rubber**
- Normas para la ejecución
- Limado
- Técnicas de recubrimiento
- Nivelación con base rubber
- Baño en acrílico
- Baño en gel

**Módulo 5 — Manicura y pedicura spa**
- Jelly spa
- Exfoliación
- Veloterapia
- Guantes hidratantes
- Parafina

**Finalización**
- Evaluaciones
- Presentación de trabajos
- Finalización de prácticas
- Acto de grado
- Certificación
- Bolsa de empleo

---

## 14. Servicios: lineamiento global

### Página índice `/servicios`
Debe mostrar las categorías principales:
- Peluquería
- Uñas
- Cejas y depilación
- Cuidado personal

### CTA principal de servicios
Cada categoría debe tener botón:
- **Reservar por WhatsApp**
- **Solicitar cita**

### WhatsApp servicios
Usar como base el número:
- `652384970`

Formato sugerido del mensaje:
- `Hola, quiero reservar una cita para [SERVICIO_O_CATEGORIA] en Torzan Kairos. ¿Podrían compartirme disponibilidad y confirmar el precio?`

### Diseño de páginas de servicios
Cada página debe incluir:
- hero comercial
- resumen breve
- lista de servicios incluidos
- precios visibles
- galería
- CTA a WhatsApp
- bloque cruzado hacia cursos relacionados si aplica

---

## 15. Contenido obligatorio de servicios

### Regla comercial importante
El usuario ha decidido usar **los precios más altos** entre las piezas compartidas cuando existan variaciones.

Si un precio no es completamente claro, usar alguna de estas salidas:
- `desde X€`
- `consultar`
- `sujeto a valoración`

No inventar tarifas.

---

### 15.1 Servicios de Uñas

#### Categoría
**Uñas**

#### Servicios y precios a usar
- Manicura tradicional — **7€**
- Pedicura tradicional — **8€**
- Manicura permanente / esmaltado permanente — **10€**
- Pedicura permanente / semipermanente — **10€**
- Uñas en gel o acrílico — **15€**
- Manicura semipermanente — **7€**

> Si se busca mayor limpieza de UX, se pueden consolidar algunos ítems y mostrar “desde” cuando haya matices entre permanente y semipermanente.

---

### 15.2 Servicios de Cejas, Depilación y Pestañas

#### Categoría
**Cejas y depilación**

#### Servicios y precios
- Diseño + depilación + sombreado — **10€**
- Depilación con hilo — **5€**
- Depilación con cera — **5€**
- Pestañas por grupo — **15€**
- Labio — **3€**

---

### 15.3 Servicios de Peluquería

#### Categoría
**Peluquería**

#### Servicios y precios base
- Corte — **7€**
- Lavado — **3€**
- Peinado — **desde 8€**
- Hidratación / tratamiento — **15€**
- Tinte — **desde 14€**
- Mechas — **desde 16€**
- Balayage — **consultar**
- Keratina — **consultar**
- Rayos — **consultar**
- Ondulación — **consultar**
- Alisados — **consultar**

> No mezclar demasiados listados si vuelve confusa la página. Priorizar claridad comercial.

---

### 15.4 Servicios de Cuidado Personal

#### Categoría
**Cuidado personal**

#### Servicios y precios
- Limpieza facial — **5€**
- Diagnóstico de piel y tratamiento — **10€**
- Tratamientos corporales relajantes — **15€**
- Tratamientos drenantes — **15€**
- Tratamientos adelgazantes — **15€**

---

## 16. Contacto y datos operativos

### WhatsApp principal
- `652 38 49 70`

### Teléfono secundario / general visible en materiales
- `+34 910 133 950`

### Dirección visible en materiales
- `C/ Embajadores 61, Madrid`

### Regla
Usar **WhatsApp principal** como CTA prioritario en cursos y servicios. El teléfono secundario puede aparecer como contacto adicional si la UI lo permite.

---

## 17. Assets visuales disponibles

Actualmente existen:
- logo horizontal
- logo vertical
- isotipo
- favicon
- paleta aprobada
- PDF institucional
- imágenes reales de cursos
- imágenes de servicios y pricing antiguos

### Regla de uso de assets
- las imágenes compartidas sí deben usarse como apoyo visual
- los flyers viejos **NO** deben incrustarse como pieza final informativa dentro del sitio
- el contenido de esos flyers debe transformarse en UI web moderna
- las fotos sí pueden reutilizarse en hero, cards, banners, galerías o fondos con overlay

---

## 18. Reglas de implementación para Codex

1. Siempre leer este archivo antes de ejecutar un nuevo hito.
2. No redefinir la arquitectura sin justificación.
3. No inventar cursos, servicios o precios fuera de lo aquí definido.
4. No cambiar la narrativa de marca aprobada.
5. No usar estilos que rompan la coherencia entre cursos y servicios.
6. Mantener componentes reutilizables.
7. Centralizar el contenido editable en archivos de datos.
8. Preparar cada CTA de WhatsApp mediante helpers reutilizables.
9. Diseñar para desktop, tablet y móvil.
10. Priorizar legibilidad, limpieza visual y conversión.

---

## 19. Estructura técnica recomendada

Ejemplo sugerido:

- `src/content/site.ts`
- `src/content/courses.ts`
- `src/content/services.ts`
- `src/content/contact.ts`
- `src/lib/whatsapp.ts`
- `src/components/...`
- `src/pages/...` o estructura equivalente según el router usado

### Recomendación
Desacoplar completamente:
- contenido
- rutas
- componentes visuales
- helpers de CTA

---

## 20. Componentes que deben existir

- `SectionHeading`
- `HeroSection`
- `CTAButton`
- `CourseCard`
- `ServiceCard`
- `PriceList`
- `ModuleAccordion`
- `GalleryGrid`
- `ContactBlock`
- `WhatsAppButton`
- `PageIntro`
- `HighlightStats` o equivalente

---

## 21. Estrategia de diseño por página

### Home
Híbrido, equilibrado entre institucional, académico y comercial.

### Historia
Editorial, elegante, narrativa.

### Cursos índice
Aspiracional + académico.

### Cursos detalle
Académico, claro, completo, ordenado.

### Servicios índice
Más comercial y directo.

### Servicios detalle
Conversión + pricing + confianza.

### Contacto
Simple, directo, premium.

---

## 22. Qué evitar

- no usar carruseles innecesarios
- no saturar con texto corrido
- no repetir visualmente el mismo bloque demasiadas veces
- no convertir la web en un collage de flyers
- no usar demasiados estilos distintos por categoría
- no abusar del dorado
- no romper accesibilidad por bajo contraste

---

## 23. Definición de éxito

El proyecto se considera bien encaminado cuando:

- el Home comunica claramente academia + servicios
- los cursos tienen páginas individuales completas
- los servicios tienen páginas individuales claras y comerciales
- los CTA a WhatsApp funcionan
- el branding se siente consistente
- la web se ve moderna pero respetuosa con la esencia actual de Torzan Kairos
- el contenido queda desacoplado para ajustes futuros

---

## 24. Instrucción final para Codex

Antes de cada hito:
1. leer este archivo;
2. confirmar mentalmente el objetivo del hito;
3. implementar respetando este contexto;
4. no improvisar contenido fuera de este marco;
5. entregar avance limpio, coherente y escalable.

# El contenido de las paginas esta en el archivo: codex_master_prompt_torzan_kairos.md
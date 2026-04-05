# Plan Maestro de Rediseño

## Proyecto

Torzan Kairos

## Propósito de este documento

Este archivo define el plan de ejecución del rediseño visual del sitio web para evitar decisiones ambiguas, retrabajo y errores de implementación.

Su función es cerrar tres cosas antes de tocar la UI:

1. Qué se va a cambiar.
2. En qué orden se va a ejecutar.
3. Qué debe quedar aprobado al cerrar cada hito.

## Estado de ejecución actual

- `Hito 1` completado
- `Hito 2` completado
- `Hito 3` completado
- `Hito 4` completado
- `Hito 5` completado
- `Hito 6` completado
- `Hito 7` completado

## Decisiones cerradas

- El color `azul profundo` queda descartado del nuevo sistema visual.
- El nuevo sistema se construye sobre `carbón`, `blanco espuma` y una gama de `dorados`.
- Los logos oficiales a usar son los nuevos logos dorados en `src/assets/branding`.
- El inventario visual activo queda en `src/assets/images`.
- La web debe sentirse `premium`, `minimalista`, `editorial`, `comercialmente clara` y `ligera en contenido`.
- No se debe usar glassmorphism, exceso de gradientes, overlays pesados ni estética tecnológica.
- La navegación y la jerarquía de contenidos deben seguir el marco definido en `AGENTS.md`.

## Estado actual detectado

- La arquitectura actual del proyecto es reutilizable.
- El problema principal sigue siendo visual y de consistencia entre páginas.
- La capa de assets principal ya fue saneada y `src/data/media.ts` ya apunta al inventario vigente.
- El build ya compila en verde.
- La Home y la base del sistema visual premium ya fueron implementadas.
- Falta extender el nuevo lenguaje a Historia, Cursos, Servicios y Contacto.
- No hay fuentes web oficiales cargadas todavía para replicar con exactitud la tipografía del manual.

## Dirección visual aprobada para el rediseño

### Sensación buscada

- lujo sobrio
- editorial limpio
- marca con autoridad
- belleza profesional seria
- aire visual y composición cuidada

### Principios de diseño

- Mucho espacio en blanco o `blanco espuma`.
- Bloques `carbón` para contraste, énfasis y profundidad.
- Dorado solo como acento jerárquico, borde, línea, sello, detalle de CTA o logo.
- Tipografía con protagonismo real.
- Fotos grandes y bien recortadas.
- Menos módulos por página y menos texto por bloque.
- Composición más cercana a una marca de lujo editorial que a una landing genérica.

### Lo que se elimina

- Azul profundo como color base, apoyo o fondo principal.
- Fondos con degradados fuertes.
- Cards con blur y vidrio.
- Demasiadas cápsulas, pills y sombras blandas flotantes.
- Repetición excesiva del mismo patrón visual en todas las secciones.

### Sistema cromático nuevo

- `Carbón principal`: `#212121`
- `Blanco espuma`: `#e1e2e1`
- `Dorado oscuro`: `#855b11`
- `Dorado medio`: `#cc982a`
- `Dorado claro`: `#e7bd59`

Notas:

- El dorado no debe dominar los fondos grandes.
- El negro no debe ir a negro puro absoluto si `#212121` resuelve bien el contraste.
- El sitio debe verse cálido, no frío.

### Tipografía de implementación

Objetivo ideal:

- Logo y grandes titulares: `Rusilla Serif`
- Títulos editoriales y subtítulos display: `DM Serif Display`
- Cuerpo y textos largos: `Lora`

Regla de implementación:

- Si `Rusilla Serif` no existe todavía en formato web (`woff` o `woff2`), el hito 1 debe resolver una de estas dos rutas:
- incorporar la fuente oficial con licencia y formato web;
- usar un fallback temporal controlado para desarrollo visual hasta recibir el archivo final.

## Mapa de logos

### `src/assets/branding/TK_Logo horizontal dorado con sombreado.png`

Uso principal:

- header desktop
- footer
- lockup institucional en hero principal
- secciones de marca donde haya ancho suficiente

### `src/assets/branding/TK_Logo vertical dorado con sombreado.png`

Uso principal:

- página Historia
- bloques institucionales
- módulos de marca y legado
- piezas editoriales centradas

### `src/assets/branding/TK_Logo icono dorado con sombreado.png`

Uso principal:

- favicon futuro
- microdetalle en secciones
- sello visual
- bullets icónicos
- marca de agua muy sutil

### `src/assets/branding/TK_Logo tipografico dorado con sombreado.png`

Uso principal:

- variantes limpias sobre fondos claros
- cabeceras secundarias
- piezas donde no convenga repetir el isotipo completo

## Mapa de imágenes por intención visual

### 1. Marca e institucional

Usar para comunicar prestigio, fachada, universo de marca, identidad premium y soporte editorial:

- `fachadaconlogo.jpg`
- `Torzan kairos mockup de fachada.png`
- `tarjetas de presentacion.jpg`
- `cuaderno.jpg`
- `cuaderno2.jpg`
- `certificadofoto.jpg`
- `entregadecertificado.png`
- `uniforme.jpg`
- `uniformes.jpg`
- `herramientas de trabajo.jpg`
- `taza de cafe.jpg`
- `materiales alumnos.jpg`
- `sello.png`

### 2. Formación y academia

Usar para cursos, historia, metodología, experiencia docente y legitimidad académica:

- `profesionales.jpg`
- `profesora y alumna.jpg`
- `profesores.jpg`
- `clase de maquillaje.jpg`
- `profesionales premios.jpg`

### 3. Servicios y experiencia de atención

Usar para páginas comerciales, categorías de servicios y conversión:

- `manicurista.jpg`
- `manicurista.png`
- `Espejospeluqueria.png`
- `papel protector.jpg`

### 4. Curso específico de barbería

Usar para detalle del curso de barbería o para apoyo visual de técnica masculina:

- `barberia.jpg`
- `FireflyBarberia.jpg`

### 5. Editorial belleza general

Usar como apoyo editorial del universo belleza, creatividad o detalle estético, pero no como imagen principal de una categoría que no corresponda:

- `Fireflymaquillaje.jpg`

### 6. Recursos de RRSS

No deben ser heroes principales del sitio. Se reservan para:

- prueba social ligera
- bloque secundario de comunidad o comunicación
- futura página o sección de redes

Assets:

- `rrss kit.png`
- `rrss motivacional.png`
- `rrss reels.png`

## Mapa de assets por página

### Home

Hero principal:

- `fachadaconlogo.jpg`

Apoyos recomendados:

- `profesionales.jpg`
- `manicurista.jpg`
- `Espejospeluqueria.png`
- `barberia.jpg`

Uso:

- El hero debe vender marca primero y negocio después.
- La fachada con logo dorado comunica autoridad y lujo desde el primer pantallazo.
- Las demás imágenes entran como soporte para dividir academia y servicios.

### Historia

Hero editorial:

- `profesionales.jpg`

Apoyos:

- `profesora y alumna.jpg`
- `profesores.jpg`
- `entregadecertificado.png`
- `profesionales premios.jpg`

Uso:

- Página con tono humano, institucional y de legado.
- Debe sentirse más editorial que comercial.

### Cursos index

Hero:

- `profesora y alumna.jpg`

Cards o apoyos:

- `barberia.jpg`
- `Espejospeluqueria.png`
- `manicurista.jpg`

Uso:

- Debe verse académico, limpio y aspiracional.

### Curso detalle: Barbería

Hero:

- `barberia.jpg`

Galería o apoyos:

- `FireflyBarberia.jpg`
- `herramientas de trabajo.jpg`

### Curso detalle: Peluquería

Hero:

- `profesora y alumna.jpg`

Galería o apoyos:

- `Espejospeluqueria.png`
- `profesores.jpg`

### Curso detalle: Uñas

Hero:

- `manicurista.jpg`

Galería o apoyos:

- `manicurista.png`
- `papel protector.jpg`
- `FireflyManicure.jpg`

### Servicios index

Hero:

- `Espejospeluqueria.png`

Cards recomendadas:

- Peluquería: `Espejospeluqueria.png`
- Uñas: `manicurista.jpg`
- Cejas y depilación: `Espejospeluqueria.png`
- Cuidado personal: `FireflyManicure.jpg`

Nota:

- `Cuidado personal` no tiene todavía un asset totalmente específico de spa. Mientras no llegue uno mejor, se usa una imagen neutral, limpia y elegante.
- `Cejas y depilación` tampoco tiene todavía un asset dedicado realmente preciso. Se prioriza una imagen sobria y coherente antes que una foto incorrecta.

### Servicio detalle: Peluquería

- `Espejospeluqueria.png`
- apoyo: `profesionales.jpg`

### Servicio detalle: Uñas

- `manicurista.jpg`
- apoyo: `manicurista.png`
- apoyo: `papel protector.jpg`

### Servicio detalle: Cejas y depilación

- `Espejospeluqueria.png`

Nota:

- No usar `Fireflymaquillaje.jpg` como hero ni como imagen principal de esta categoría.
- Mientras no llegue un asset más específico, esta página debe apoyarse más en layout, pricing y CTA que en galería extensa.

### Servicio detalle: Cuidado personal

- `FireflyManicure.jpg`

### Contacto

Hero:

- `fachadaconlogo.jpg`

Apoyos:

- `uniforme.jpg`
- `tarjetas de presentacion.jpg`

## Distribución ampliada por secciones existentes

Esta web es suficientemente grande para distribuir casi todo el inventario visual, pero no todas las imágenes deben entrar como hero. La regla correcta es:

- imágenes semánticas en páginas de negocio;
- mockups e identidad en Historia, Home y Contacto;
- recursos editoriales en galerías secundarias;
- assets dudosos en reserva hasta que exista una sección mejor.

### Home por secciones

#### `HybridHeroSection`

- `fachadaconlogo.jpg`

#### `HybridInstitutionSection`

- `tarjetas de presentacion.jpg`
- alternativa o apoyo: `Torzan kairos mockup de fachada.png`

#### `HybridCoursesSection`

- Barbería: `barberia.jpg`
- Peluquería: `profesora y alumna.jpg`
- Uñas: `manicurista.jpg`

#### `HybridServicesSection`

- Peluquería: `Espejospeluqueria.png`
- Uñas: `manicurista.png`
- Cejas y depilación: `Espejospeluqueria.png`
- Cuidado personal: `FireflyManicure.jpg`

#### `HybridBenefitsSection`

- sin imagen dominante
- apoyo opcional muy sutil: `sello.png`

#### `HybridGallerySection`

- `profesionales premios.jpg`
- `cuaderno2.jpg`
- `uniforme.jpg`
- `uniformes.jpg`
- `materiales alumnos.jpg`
- `cartelenlacalle.jpg`
- `taza de cafe.jpg`
- `Fireflymaquillaje.jpg` como detalle editorial de belleza, no como servicio específico

#### `HybridLocationSection`

- `cartelenlacalle.jpg`
- alternativa: `fachadaconlogo.jpg`

#### `HybridFinalCTASection`

- `Torzan kairos mockup de fachada.png`

### Historia por secciones

#### `PageHero`

- `profesionales.jpg`

#### `StoryNarrativeSection`

- `profesora y alumna.jpg`

#### `StoryIdentitySection`

- `cuaderno.jpg`
- apoyo: `tarjetas de presentacion.jpg`
- apoyo editorial opcional: `Fireflymaquillaje.jpg`

#### `StoryInstitutionSection`

- `entregadecertificado.png`
- apoyo: `certificadofoto.jpg`

#### `ValuesSection`

- `herramientas de trabajo.jpg`
- apoyo puntual: `sello.png`

#### `FacultySection`

- `profesores.jpg`
- apoyo: `clase de maquillaje.jpg`

#### `StoryClosingSection`

- `profesionales premios.jpg`

### Cursos index por secciones

#### `PageHero`

- `profesora y alumna.jpg`

#### bloque de introducción o soporte editorial

- `materiales alumnos.jpg`

#### cards de programas

- Barbería: `barberia.jpg`
- Peluquería: `Espejospeluqueria.png`
- Uñas: `manicurista.jpg`

### Curso detalle: Barbería por secciones

#### hero

- `barberia.jpg`

#### resumen o bloque lateral

- `FireflyBarberia.jpg`

#### apoyo de módulos

- `herramientas de trabajo.jpg`

### Curso detalle: Peluquería por secciones

#### hero

- `profesora y alumna.jpg`

#### resumen o bloque lateral

- `profesionales.jpg`

#### apoyo de módulos

- `Espejospeluqueria.png`
- `profesores.jpg`

### Curso detalle: Uñas por secciones

#### hero

- `manicurista.jpg`

#### resumen o bloque lateral

- `manicurista.png`

#### apoyo de módulos

- `papel protector.jpg`
- `FireflyManicure.jpg`

### Servicios index por secciones

#### hero

- `Espejospeluqueria.png`

#### cards

- Peluquería: `Espejospeluqueria.png`
- Uñas: `manicurista.jpg`
- Cejas y depilación: `Espejospeluqueria.png`
- Cuidado personal: `FireflyManicure.jpg`

### Servicio detalle: Peluquería por secciones

#### hero

- `Espejospeluqueria.png`

#### apoyo secundario

- `profesionales.jpg`

### Servicio detalle: Uñas por secciones

#### hero

- `manicurista.jpg`

#### apoyos

- `manicurista.png`
- `papel protector.jpg`

### Servicio detalle: Cejas y depilación por secciones

#### hero

- `Espejospeluqueria.png`

#### apoyo

- sin galería forzada en v1 si no hay asset semánticamente correcto

### Servicio detalle: Cuidado personal por secciones

#### hero

- `FireflyManicure.jpg`

#### apoyo

- sin segunda imagen obligatoria hasta recibir asset más específico

### Contacto por secciones

#### `PageHero`

- `cartelenlacalle.jpg`

#### `ContactChannelsSection`

- `tarjetas de presentacion.jpg`

#### `ContactLocationSection`

- `fachadaconlogo.jpg`

#### `FinalCTASection`

- `uniforme.jpg`

## Assets de reserva o uso condicionado

### `Fireflymaquillaje.jpg`

Uso aprobado:

- galería editorial secundaria en Home o Historia
- bloque de creatividad o universo estético
- futuro contenido si aparece una sección real de maquillaje

Uso no aprobado:

- hero de `cejas y depilación`
- imagen principal de un servicio que no se esté vendiendo realmente

### Mockups de RRSS

Assets:

- `rrss kit.png`
- `rrss motivacional.png`
- `rrss reels.png`

Uso aprobado:

- bloque secundario de comunidad o prueba social
- sección futura de marca / redes / experiencia del alumno

Uso no aprobado:

- hero principal
- portada de categorías

### Repetición controlada

Se permite repetir una imagen en más de una página si:

- la imagen tiene alta coherencia semántica;
- evita meter una imagen equivocada solo por variar;
- la repetición no ocurre en dos heroes consecutivos del recorrido principal.

## Reglas de uso de assets

- No saturar páginas con demasiadas imágenes.
- Cada página debe tener una imagen principal clara y máximo dos o tres apoyos relevantes.
- Los mockups de papelería y branding se usan en secciones institucionales, no en páginas de servicios como recurso principal.
- Los mockups de RRSS no deben usarse como héroes.
- Las imágenes deben recortarse respetando la lectura premium: evitar cortes agresivos en logos, rostros y manos.
- Si una imagen no tiene calidad suficiente para hero, baja a bloque secundario o galería.

## Hitos de ejecución

## Hito 1. Saneamiento de base y sistema visual

### Estado actual

Completado

### Objetivo

Dejar la base técnica limpia para poder rediseñar sin arrastrar errores del diseño anterior.

### Alcance

- Reparar imports rotos en `src/data/media.ts`.
- Integrar el nuevo inventario real de logos e imágenes.
- Reemplazar la marca temporal por los logos dorados nuevos.
- Eliminar el azul profundo de tokens, superficies y fondos.
- Definir la nueva paleta de implementación.
- Definir tipografías reales o estrategia de fallback.
- Dejar el build en verde.

### Entregables

- sistema de tokens nuevo
- branding conectado
- capa de media actualizada
- compilación estable

### Criterio de cierre

- `npm run build` funciona
- no quedan referencias a imágenes eliminadas
- no quedan fondos principales en azul profundo
- el header ya usa branding nuevo

## Hito 2. Sistema UI premium

### Estado actual

Completado

### Objetivo

Construir el lenguaje visual reusable antes de rehacer páginas.

### Alcance

- rediseñar `header`
- rediseñar `footer`
- rediseñar `buttons`
- rediseñar `section headings`
- rediseñar `hero shells`
- rediseñar `cards`
- rediseñar `price list`
- rediseñar `gallery grid`
- rediseñar `whatsapp cta`
- rediseñar espaciados, bordes, radios, líneas y sombras

### Entregables

- biblioteca visual coherente
- componentes base listos para páginas

### Criterio de cierre

- la UI ya se siente editorial y premium incluso sin contenido final
- no hay blur tipo vidrio
- no hay cápsulas ni pills sobrantes
- la identidad se reconoce con carbón, espuma y dorado

## Hito 3. Home premium y breve

### Estado actual

Completado

### Objetivo

Convertir la home en una entrada premium, corta y clara que venda academia y servicios sin sentirse pesada.

### Alcance

- hero nuevo
- resumen institucional compacto
- bloque dual academia / servicios
- destacados curados
- galería breve
- CTA final dividido

### Entregables

- Home completamente rediseñada

### Criterio de cierre

- el primer scroll explica qué es Torzan Kairos
- la home no se siente larga ni repetitiva
- el usuario entiende rápido los dos negocios
- el hero tiene autoridad de marca

## Hito 4. Historia editorial

### Estado actual

Completado

### Objetivo

Dar peso real a la página Historia y convertirla en soporte de prestigio, legado y confianza.

### Alcance

- hero editorial
- narrativa de fundación
- fundadora
- Colombia + España
- misión, visión y objetivos
- valores
- equipo docente
- cierre con CTA

### Entregables

- página Historia con carácter institucional

### Criterio de cierre

- se siente más editorial que landing
- hay aire visual
- el texto no se ve masivo
- la marca gana autoridad

## Hito 5. Cursos y plantillas académicas

### Estado actual

Completado

### Objetivo

Rehacer el ecosistema de cursos con una estética académica más limpia y ordenada.

### Alcance

- rediseño de `/cursos`
- rediseño de plantilla de detalle
- módulos en formato más elegante
- CTA académicos más visibles
- uso correcto de assets por curso

### Entregables

- índice de cursos
- detalles de barbería, peluquería y uñas

### Criterio de cierre

- los cursos se sienten serios y premium
- la lectura es clara
- el CTA a WhatsApp está cerca de la decisión
- la galería no invade la estructura

## Hito 6. Servicios y conversión comercial

### Estado actual

Completado

### Objetivo

Rehacer las páginas de servicios con una lectura más comercial, más directa y mejor orientada a reserva.

### Alcance

- rediseño de `/servicios`
- rediseño de detalle por categoría
- mejoras de price list
- CTA de WhatsApp más visibles
- cross-sell hacia cursos donde aplique

### Entregables

- índice de servicios
- páginas de peluquería, uñas, cejas y depilación, cuidado personal

### Criterio de cierre

- precios claros
- categorías bien diferenciadas
- conversión simple
- menos texto y más jerarquía visual

## Hito 7. Contacto, responsive, motion y cierre

### Estado actual

Completado

### Objetivo

Cerrar el sitio con calidad visual y técnica consistente.

### Alcance

- rediseño de contacto
- revisión responsive completa
- ajustes de motion sutil
- revisión de accesibilidad
- revisión SEO básica
- revisión final de consistencia entre páginas
- optimización de imágenes pesadas
- carga diferida por rutas
- eliminación total de blur y glassmorphism residual

### Entregables

- sitio completo y alineado
- QA visual y funcional mínimo
- assets optimizados en formato `webp` para la capa activa
- rutas principales con `lazy loading`

### Criterio de cierre

- desktop, tablet y móvil se ven coherentes
- no hay secciones rotas
- todas las rutas tienen un mismo lenguaje visual
- el sitio ya se puede enseñar como propuesta premium sólida
- no quedan efectos de blur o vidrio en el sistema visual activo

## Orden de ejecución obligatorio

1. Hito 1
2. Hito 2
3. Hito 3
4. Hito 4
5. Hito 5
6. Hito 6
7. Hito 7

Regla:

- No se debe arrancar una página final antes de cerrar el sistema base.
- No se debe improvisar con assets fuera del mapa aprobado.
- No se debe meter contenido nuevo que contradiga `AGENTS.md`.

## Checklist de control por hito

Antes de cerrar cualquier hito, validar:

- build funcionando
- coherencia visual
- uso correcto de assets
- jerarquía tipográfica consistente
- CTAs correctos
- contenido no pesado
- mobile-first sin roturas

## Riesgos identificados

### Riesgo 1. Tipografía oficial no lista para web

Acción:

- Resolver en Hito 1 si se cuenta con fuente web oficial o fallback temporal.

### Riesgo 2. Asset sin contexto exacto para una categoría

Acción:

- Reusar solo imágenes que mantengan tono premium y claridad semántica.
- No forzar una foto incorrecta solo por llenar espacio.

### Riesgo 3. Volver a una estética recargada

Acción:

- Priorizar menos bloques, mejores bloques y mejor jerarquía.

### Riesgo 4. Mezclar demasiado branding institucional con conversión comercial

Acción:

- Historia y cursos con tono editorial.
- Servicios y contacto con tono comercial.
- Home como puente entre ambos.

## Resultado esperado al final del plan

Al finalizar los hitos, el sitio debe:

- verse premium y minimalista
- abandonar por completo el azul profundo
- usar correctamente logos dorados y assets nuevos
- comunicar mejor academia + servicios
- ser visualmente ligero
- quedar ordenado y escalable para futuras iteraciones

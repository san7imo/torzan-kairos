# Prompt maestro para Codex — Torzan Kairos

## Rol
Actúa como un **senior frontend engineer + UI engineer + systems-minded product builder**.

Tu tarea es construir un sitio web promocional multipágina para **Torzan Kairos Academia**, usando **React + TypeScript + Tailwind CSS v4+** con una arquitectura limpia, reusable y lista para crecimiento.

Debes trabajar con criterio de producto, diseño premium y excelente organización de código.

---

## Contexto del proyecto
Aunque internamente se le llama “landing”, en realidad debe desarrollarse como un **marketing site liviano de 3 páginas principales**:

- `/` → Home
- `/historia` → Historia de la academia / fundadora
- `/contacto` → Contacto

El sitio debe comunicar:
- elegancia
- trayectoria
- formación profesional
- técnica + creatividad
- confianza
- experiencia internacional
- aspiración profesional

La marca corresponde a una academia de formación en belleza e imagen personal.

Hay textos institucionales aprobados que deben respetarse semánticamente:
- fundada en **2010** por **Mariela Torres Zambrano**;
- nace de la unión entre tradición estética colombiana y trayectoria consolidada en España;
- enfoque en **Barbería, Peluquería Profesional, Estética, Maquillaje Profesional y Cuidado de Manos y Pies**;
- misión centrada en formación integral, bioseguridad, ética y desarrollo del ser;
- visión de referencia internacional;
- pilares: **Maestría, Creatividad, Compromiso y Respeto por la Profesión**;
- equipo docente mencionado: **Ramiro Rojas Perdomo, Nicolay Alfaro y Carolina Baquero**.

---

## Stack técnico obligatorio
- React
- TypeScript
- Tailwind CSS v4+
- React Router o la solución de routing más limpia si el scaffold lo requiere
- Componentización reusable
- Diseño responsive mobile-first
- Código limpio, tipado y mantenible

Si necesitas librerías adicionales, prioriza solo las necesarias. Se permiten librerías ligeras para animación o utilidades, por ejemplo:
- `framer-motion` para motion sutil
- `lucide-react` para iconografía
- una utilidad mínima para `cn()` si hace falta

No agregues dependencias innecesarias.

---

## Identidad visual aprobada
Usa únicamente esta paleta como base del sistema visual:

- `#212121` → carbón
- `#dce2e1` → gris claro
- `#142f4a` → azul profundo institucional
- `#e79c1f` → dorado / acento

### Reglas visuales
- El azul profundo debe ser el color institucional dominante.
- El dorado debe reservarse para acentos, líneas, detalles y CTA importantes.
- El carbón debe usarse para fondos premium y contrastes fuertes.
- El gris claro debe aportar descanso visual y fondos limpios.
- Evita introducir colores nuevos sin justificación.
- Evita gradientes estridentes.
- La UI debe sentirse **minimalista, premium, sobria y contemporánea**.

---

## Dirección de diseño
La interfaz debe sentirse como una mezcla entre:
- academia profesional de alto nivel
- marca personal con trayectoria
- editorial contemporáneo
- lujo sobrio

### Principios de UI
- mucho aire visual
- excelente jerarquía tipográfica
- bloques amplios
- espaciado generoso
- ritmo visual limpio
- interacciones refinadas
- nada recargado

### Motion
Usa motion sutil y elegante:
- fade-in / fade-up por viewport
- micro-parallax muy suave en hero si aporta valor
- reveal de imágenes y tarjetas
- hover refinado en botones y links
- transiciones suaves entre secciones

No uses:
- carruseles agresivos
- animaciones invasivas
- efectos pesados
- entradas demasiado lentas

Todo debe ser fluido y moderno sin sacrificar performance.

---

## Estado real del proyecto
Sí existe:
- logotipo horizontal
- logotipo vertical
- isotipo
- favicon
- paleta de colores
- textos institucionales aprobados

Todavía NO existe o no está confirmado:
- banco final de fotografías
- videos finales de fondo
- detalle final de cursos
- precios
- horarios
- testimonios reales
- galería final
- datos definitivos de contacto / ubicación completos

Por tanto, debes construir una UI que soporte **placeholders elegantes y claramente temporales**, fáciles de reemplazar luego.

---

## Reglas para contenido temporal
Mientras falte información final:
- usa placeholders elegantes;
- usa labels como `Próximamente`, `Imagen referencial`, `Contenido en actualización`;
- NO inventes precios;
- NO inventes testimonios reales;
- NO inventes cifras adicionales no aprobadas;
- NO inventes direcciones exactas;
- NO inventes certificaciones o partners.

Sí puedes:
- crear tarjetas de cursos con copy de ejemplo neutral;
- dejar grids listos para imágenes futuras;
- usar descripciones temporales bien marcadas;
- usar datos institucionales ya aprobados.

---

## Arquitectura de páginas

### 1) Home (`/`)
Debe ser la página más estratégica. Debe vender la marca, inspirar y orientar a conversión.

Secciones sugeridas:
1. **Hero premium**
   - titular principal potente
   - subtítulo institucional corto
   - CTA principal: contacto / solicitar información
   - CTA secundario: conocer la historia
   - fondo con video placeholder o banner visual elegante

2. **Resumen institucional**
   - bloque corto “Quiénes somos”
   - extracto del origen, trayectoria y propuesta
   - link a `/historia`

3. **Áreas de formación**
   - Barbería
   - Peluquería Profesional
   - Estética
   - Maquillaje Profesional
   - Manos y Pies
   - tarjetas visuales elegantes con placeholder temporal

4. **Propuesta de valor / metodología**
   - técnica rigurosa
   - creatividad
   - formación integral
   - bioseguridad y ética
   - cercanía y personalización

5. **Experiencia Torzan Kairos**
   - experiencia educativa
   - ambiente de aprendizaje
   - acompañamiento docente
   - preparación para el mundo laboral

6. **Pilares / valores**
   - Maestría
   - Creatividad
   - Compromiso
   - Respeto por la Profesión

7. **Equipo docente**
   - cards con nombre, rol y enfoque
   - espacio preparado para fotos futuras

8. **Instalaciones / experiencia visual**
   - grid placeholder para galería futura
   - banner o tarjetas de espacios

9. **Ubicación / presencia**
   - módulo visual con mapa placeholder
   - texto editable para ubicación y atención

10. **CTA final**
   - solicitar información
   - ir a contacto

11. **Footer**
   - navegación
   - contacto
   - redes sociales placeholders
   - branding

### 2) Historia (`/historia`)
Debe sentirse editorial, elegante y narrativa.

Secciones sugeridas:
1. hero editorial
2. historia de Mariela Torres Zambrano
3. origen de la academia
4. Colombia + España como narrativa de identidad
5. filosofía de enseñanza
6. misión y visión
7. valores / pilares
8. línea de tiempo o hitos
9. CTA hacia contacto

### 3) Contacto (`/contacto`)
Debe ser clara, premium y directa.

Secciones sugeridas:
1. hero / encabezado corto
2. bloque de datos de contacto
3. formulario de contacto
4. módulo de WhatsApp
5. ubicación placeholder
6. horarios / atención placeholder
7. CTA complementaria

---

## Ideas de valor que sí quiero que incorpores
Incluye estas ideas dentro del diseño y arquitectura:

### A. Vender transformación, no solo cursos
La academia no debe verse como una simple lista de programas. Debe transmitir evolución profesional, identidad, maestría y proyección.

### B. Sección “Por qué Torzan Kairos”
Puede estar integrada en Home con 3 a 5 razones visuales:
- trayectoria
- formación integral
- docentes especializados
- visión internacional
- enfoque técnico y humano

### C. Sección “Espacios que inspiran”
Aunque aún no haya fotos reales, deja un sistema visual listo para galería futura.

### D. CTA persistente discreto
Se puede incluir un CTA flotante o fijo a contacto / WhatsApp sin romper el minimalismo.

### E. Diseño listo para evolución futura
La base debe quedar preparada para crecer luego hacia:
- página de cursos independiente
- galería
- experiencias
- testimonios
- formularios integrados

---

## Decisiones UX esperadas
- navegación clara y sticky header refinado
- buena lectura en móvil
- botones visibles sin ser estridentes
- estados hover / focus accesibles
- buena separación entre bloques
- jerarquía clara entre titular, texto y CTA
- formularios limpios
- layout consistente entre páginas

---

## Tipografía
Propón una combinación tipográfica que refuerce elegancia + legibilidad.
Preferencia sugerida:
- una serif o display sofisticada para títulos
- una sans limpia para cuerpo y navegación

Si implementas fuentes, hazlo de forma sencilla y justificable. No recargues el proyecto.

---

## Estructura de carpetas esperada
Propón y usa una estructura ordenada como referencia:

```txt
src/
  assets/
    logos/
    placeholders/
  components/
    layout/
    sections/
    ui/
  pages/
    Home.tsx
    Historia.tsx
    Contacto.tsx
  data/
    siteContent.ts
  styles/
    globals.css
  lib/
    utils.ts
  App.tsx
  main.tsx
```

Puedes ajustarla si mejoras claridad, pero mantenla consistente.

---

## Datos / contenido
Centraliza el contenido editable en objetos o archivos bien organizados cuando tenga sentido.

Ejemplo:
- navegación
- hero
- áreas de formación
- valores
- docentes
- CTAs
- placeholders de contacto

La idea es facilitar reemplazos futuros sin tocar demasiado JSX.

---

## Qué debes entregar primero
Quiero que avances por hitos, sin intentar resolver todo de golpe.

### Hito 0 — Base del proyecto
Objetivo:
- scaffold del proyecto
- routing
- layout base
- sistema de color en Tailwind
- tipografía
- contenedor / espaciado / utilidades
- header + footer base
- carga de logos / favicon si aplica

### Hito 1 — Home funcional premium
Objetivo:
- construir el Home completo con secciones placeholder elegantes
- hero
- resumen institucional
- áreas de formación
- metodología / propuesta de valor
- valores
- equipo docente
- espacios / galería placeholder
- ubicación placeholder
- CTA final

### Hito 2 — Página Historia
Objetivo:
- construir la narrativa completa de la historia
- incluir origen, misión, visión, identidad y valores
- dejar esta página con tratamiento editorial y visual distintivo

### Hito 3 — Página Contacto
Objetivo:
- formulario visual
- módulos de contacto
- WhatsApp placeholder
- ubicación placeholder
- diseño coherente con el resto del sitio

### Hito 4 — Motion, polish y responsive final
Objetivo:
- microanimaciones
- refinamiento responsive
- estados hover/focus
- revisión de performance
- limpieza final de código

---

## Criterios de calidad
Tu código debe ser:
- limpio
- modular
- tipado
- reusable
- fácil de mantener
- fácil de editar
- responsive
- visualmente consistente

La UI debe verse:
- moderna
- elegante
- minimalista
- premium
- profesional

---

## Entregable esperado en esta primera ejecución
1. Analiza el contexto.
2. Propón brevemente la arquitectura técnica.
3. Enumera los componentes principales a crear.
4. Ejecuta el **Hito 0**.
5. Luego avanza con el **Hito 1**.
6. Al final resume:
   - qué hiciste,
   - qué falta,
   - qué datos reales deben reemplazarse después,
   - qué archivos clave modificaste.

---

## Instrucciones finales
- Toma decisiones con criterio, no preguntes por cada detalle menor.
- Conserva una estética premium y sobria.
- No inventes información sensible o comercial.
- Usa placeholders bien rotulados.
- Prioriza claridad, diseño sólido y buena base para continuar.

Empieza ahora.

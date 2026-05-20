# Changelog

Todas las modificaciones notables se documentan en este archivo.
El formato sigue Keep a Changelog y el proyecto adhiere a SemVer.

## [Unreleased]

### Fixed
- Modal de celebración (`EpicCelebration`) ahora es responsive: padding y tipografías escalonados por breakpoint, emoji que no se parte en dos líneas, y alto máximo (`max-h-[90vh]`) con scroll para pantallas bajas/landscape. CTAs `huge` ajustan padding/tamaño en mobile.

### Added
- Botón de música de Daft Punk: reproduce/pausa la canción (loop) tras el click del usuario; late con un anillo para llamar la atención antes del primer play y se oculta si el archivo de audio no existe.
- Fondo global estilo Daft Punk - Contact: video a pantalla completa (muteado, loop, `playsInline`) con vignette para legibilidad.
- Video de fondo optimizado para web: `assets/contact.mp4` (768×384, sin audio, `+faststart`), ~15 MB vs. 45 MB del original.
- Pantalla de carga inicial (`IntroLoader`) con ícono de robot, glow y barra de barrido; se desvanece cuando el fondo está listo.
- Carga inteligente del video: se omite en `prefers-reduced-motion`, ahorro de datos (`saveData`) y conexiones lentas (2g/slow-2g); cae al fondo ambiental.
- Pausa automática del video cuando la pestaña no está visible (ahorro de CPU/batería) y tope de seguridad de 5 s para no atrapar al usuario en el loader.
- Sitio web del cumpleaños número 7 de Gaelito (frontend, temática fútbol Messi vs Ronaldo).
- Hero impactante con nombre y edad gigantes, spotlight, partículas flotantes y CTA principal.
- Cuenta regresiva en vivo hacia el 08/06/2026 con dígitos animados y tarjeta de fecha/hora/lugar.
- Sección interactiva "Messi vs Ronaldo" con votación en vivo y barras animadas.
- Minijuego de penales (5 tiros) con arquero aleatorio, festejo de gol y confeti.
- Sección de recuerdos con fotos del cumpleañero y efecto tilt.
- Botón "Confirmar asistencia" con animación épica (confeti + fuegos artificiales + gol) y CTA a WhatsApp con mensaje pre-armado.
- Cierre épico con felicitación final y disparo de fuegos artificiales.
- Sistema de sonido global sintetizado (Web Audio API) con toggle, sin archivos de audio externos.
- Fondo ambiental animado (orbes de luz + textura de cancha) y design system con tokens en Tailwind.
- Configuración editable centralizada en `src/config/party.ts` (nombre, fecha, hora, lugar, WhatsApp).
- Soporte de accesibilidad: `prefers-reduced-motion`, foco visible, `aria-label`/`alt`, modal con cierre por Escape.

# Plan de pruebas — Cumple de Gaelito (frontend)

## Alcance
- **Se prueba:** render de todas las secciones, animaciones, cuenta regresiva, votación Messi vs Ronaldo, minijuego de penales, confirmación + WhatsApp, sonido, responsive y accesibilidad básica.
- **No se prueba (fuera de scope):** persistencia en backend (no existe todavía), envío real de confirmación, analítica.

## Pre-condiciones
- `npm install` ejecutado.
- Build: `npm run build`; server local: `npm run preview` (o `npm run dev`).
- `src/config/party.ts` con `whatsappNumber` real para probar el flujo de WhatsApp de punta a punta.

## Casos de prueba

```
ID: TC-001
Caso: Carga inicial y hero
Tipo: happy
Pre-condición: app servida
Pasos:
  1. Abrir la home.
  2. Observar el hero.
Esperado: aparece "Gaelito", el número 7 gigante, badge "¡Estás invitado!", partículas y CTA "Confirmar asistencia"; animaciones de entrada escalonadas.
Resultado: no probado

ID: TC-002
Caso: Cuenta regresiva en vivo
Tipo: happy
Pasos:
  1. Ir a la sección "Cuenta regresiva".
  2. Observar los segundos ~10s.
Esperado: días/horas/min/seg coherentes con el 08/06/2026; los segundos decrementan con animación de flip.
Resultado: no probado

ID: TC-003
Caso: Fecha pasada / inválida en config
Tipo: edge
Pre-condición: editar dateISO a una fecha pasada.
Pasos:
  1. Recargar.
Esperado: se muestra "¡Hoy es el gran día!" sin números negativos ni NaN.
Resultado: no probado

ID: TC-004
Caso: Votación Messi vs Ronaldo
Tipo: happy
Pasos:
  1. Tocar la tarjeta de Messi 2 veces y la de Ronaldo 1 vez.
Esperado: porcentajes 67% / 33%, barras animadas, contador de votos correcto, sin votos negativos.
Resultado: no probado

ID: TC-005
Caso: Penales — gol y atajada
Tipo: happy / edge
Pasos:
  1. Patear a los 3 palos repetidas veces hasta completar 5 tiros.
Esperado: en gol → confeti + "¡Goool!"; en atajada → "¡Atajó!"; botones deshabilitados durante la animación (no se puede patear dos veces seguidas). Al llegar a 5 tiros aparece mensaje final y botón "Jugar de nuevo".
Resultado: no probado

ID: TC-006
Caso: Doble click / spam en penales
Tipo: concurrencia
Pasos:
  1. Tocar rápido y repetido un botón de palo durante la animación.
Esperado: solo cuenta un tiro por animación; no se desincronizan goles/tiros.
Resultado: no probado

ID: TC-007
Caso: Confirmar asistencia (hero y sección)
Tipo: happy
Pasos:
  1. Tocar "Confirmar asistencia" en el hero.
  2. Repetir desde la sección "¿Venís a la fiesta?".
Esperado: ambos abren el overlay épico con confeti + fuegos + "¡Goool!" y botón "Avisar por WhatsApp".
Resultado: no probado

ID: TC-008
Caso: Link de WhatsApp pre-armado
Tipo: happy
Pasos:
  1. En el overlay, tocar "Avisar por WhatsApp".
Esperado: abre wa.me en pestaña nueva con el número configurado y el mensaje de confirmación con nombre, edad, fecha y hora.
Resultado: no probado

ID: TC-009
Caso: Cerrar overlay
Tipo: happy / a11y
Pasos:
  1. Abrir el overlay.
  2. Cerrar con la X, con "Seguir explorando", con Escape y tocando el fondo.
Esperado: las 4 vías cierran el overlay; los efectos de confeti/fuegos se cancelan al cerrar.
Resultado: no probado

ID: TC-010
Caso: Sonido on/off
Tipo: happy / edge
Pasos:
  1. Tocar el botón de sonido (esquina sup. derecha).
  2. Interactuar (votar, patear, confirmar).
  3. Volver a silenciar.
Esperado: con sonido activo se escuchan silbato/gol/festejo; silenciado no suena nada; no hay errores de AudioContext en consola.
Resultado: no probado

ID: TC-011
Caso: Responsive
Tipo: happy
Pasos:
  1. Probar a 320, 375, 768, 1024 y 1440 px.
Esperado: sin scroll horizontal, tipografías y tarjetas legibles, imágenes sin deformar, CTAs alcanzables con el pulgar en mobile.
Resultado: no probado

ID: TC-012
Caso: Accesibilidad — reduced motion y teclado
Tipo: a11y
Pasos:
  1. Activar "Reducir movimiento" en el SO.
  2. Navegar con Tab y Enter.
Esperado: animaciones casi desactivadas; foco visible (contorno dorado); todos los botones y links accionables por teclado; imágenes con alt.
Resultado: no probado

ID: TC-013
Caso: Datos de evento por defecto
Tipo: edge
Pasos:
  1. Revisar tarjeta de lugar sin editar config.
Esperado: muestra textos de ejemplo claramente editables (no datos inventados como reales).
Resultado: no probado

ID: TC-014
Caso: Loader inicial y fondo de video Daft Punk
Tipo: happy
Pre-condición: archivo de video presente en public/assets, conexión normal.
Pasos:
  1. Abrir la home con caché limpia.
  2. Observar la carga inicial.
Esperado: aparece el loader con ícono de robot (glow + barra de barrido); al poder reproducirse el video, el loader se desvanece y el video corre de fondo, muteado y en loop, con el contenido legible encima.
Resultado: no probado

ID: TC-015
Caso: Video ausente / con error
Tipo: failure
Pre-condición: renombrar o borrar el .mp4 (o ruta inválida en config).
Pasos:
  1. Recargar la home.
Esperado: el loader se desvanece igual (no queda colgado), y se muestra el fondo ambiental de fallback sin pantalla rota.
Resultado: no probado

ID: TC-016
Caso: Ahorro de datos / conexión lenta / reduce-motion
Tipo: edge
Pre-condición: activar "Ahorro de datos" o DevTools throttling 2g, o SO con "reducir movimiento".
Pasos:
  1. Recargar la home.
Esperado: NO se descarga el video de 45 MB; el loader se cierra rápido y se ve el fondo liviano de fallback.
Resultado: no probado

ID: TC-017
Caso: Pausa al ocultar la pestaña
Tipo: edge
Pasos:
  1. Con el video corriendo, cambiar a otra pestaña ~5 s y volver.
Esperado: el video se pausa al ocultar la pestaña y se reanuda al volver (ahorro de CPU/batería).
Resultado: no probado

ID: TC-018
Caso: Loader timeout de seguridad
Tipo: failure
Pre-condición: simular video que nunca dispara canplay (throttling extremo).
Pasos:
  1. Abrir la home y esperar.
Esperado: a los 5 s como máximo el loader se cierra igual; el usuario nunca queda atrapado.
Resultado: no probado

ID: TC-019
Caso: Botón de música de Daft Punk (play/pausa)
Tipo: happy
Pre-condición: archivo public/assets/contact.mp3 presente.
Pasos:
  1. Abrir la home; observar el botón arriba a la izquierda (late con anillo).
  2. Tocar el botón.
  3. Tocar de nuevo.
Esperado: al primer toque suena la canción en loop y el ícono pasa a disco girando/pausa; al segundo toque pausa. El anillo de atención desaparece tras el primer play.
Resultado: no probado

ID: TC-020
Caso: Audio ausente
Tipo: failure
Pre-condición: sin contact.mp3 en public/assets.
Pasos:
  1. Abrir la home.
Esperado: el botón de música NO se muestra (no hay control roto ni error visible al usuario).
Resultado: no probado

ID: TC-021
Caso: Música no autoreproduce sin gesto
Tipo: security/edge
Pasos:
  1. Abrir la home sin tocar nada.
Esperado: no suena música automáticamente (respeta la política de autoplay del navegador); solo suena tras el click.
Resultado: no probado
```

## Matriz de cobertura

| Módulo               | happy | edge | failure | concurrencia | a11y |
|----------------------|-------|------|---------|--------------|------|
| Hero                 | TC-001|      |         |              | TC-012 |
| Cuenta regresiva     | TC-002| TC-003 |       |              |      |
| Messi vs Ronaldo     | TC-004| TC-004 |       |              |      |
| Penales              | TC-005| TC-005 |       | TC-006       |      |
| Confirmar / WhatsApp | TC-007/008 | TC-013 |  |              | TC-009 |
| Sonido               | TC-010| TC-010 |       |              |      |
| Responsive / a11y    | TC-011|      |         |              | TC-012 |
| Fondo video / loader | TC-014| TC-016/017 | TC-015/018 |        | TC-016 |
| Música Daft Punk     | TC-019| TC-021 | TC-020 |              | TC-019 |

## Cross-browser / device
- [ ] Chrome desktop (Windows)
- [ ] Safari iOS
- [ ] Chrome Android

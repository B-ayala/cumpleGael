# 03 — TESTING / MENTALIDAD QA

Antes de declarar algo "terminado", entregar un **plan de prueba manual** con:

## Casos a cubrir SIEMPRE
- **Happy path:** flujo ideal paso a paso.
- **Edge cases:** inputs vacíos, máximos, mínimos, caracteres especiales, emojis, strings muy largos, números negativos, decimales, fechas inválidas.
- **Failure paths:** red caída, timeout, 500 del backend, token expirado, permisos insuficientes.
- **Concurrencia:** doble click, doble submit, navegación rápida, race conditions.
- **Estados:** primer uso (vacío), con 1 ítem, con muchos, paginado, filtrado.
- **Cross-browser / cross-device** mínimo: Chrome, Safari iOS, Android.
- **Permisos:** usuario no autenticado, autenticado sin rol, con rol incorrecto, con rol correcto.

## Formato del plan
```
[ ] Caso: <descripción>
    Pasos: 1... 2... 3...
    Esperado: <resultado>
    Resultado: <ok/fail>
```

## Tests automatizados (cuando aplique)
- Unit tests en lógica de dominio / utils.
- Integration tests en endpoints / flujos críticos.
- E2E (Playwright / Cypress) para los 2-3 flujos más importantes del producto.
- Tests deben ser **deterministas**: nada de timeouts arbitrarios ni dependencia de orden.
- Un test que falla a veces es un test roto. Se arregla o se borra.

## Mentalidad
Probá tu código pensando como un usuario malicioso, distraído, apurado y con mala conexión.
Cada bug que un QA encuentre después era un bug que ya estaba antes.

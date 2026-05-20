# 06 — 🚫 RESTRICCIONES — NUNCA HACER

Lista negra. Cualquier punto de acá presente en la entrega = entrega rechazada.

## Código
- ❌ `console.log` / `print` debug en código entregado.
- ❌ Credenciales, API keys o URLs hardcodeadas.
- ❌ `any` / `Object` / `dynamic` sin justificación.
- ❌ `try/catch` vacío o con `// ignore`.
- ❌ Funciones de más de 40 líneas o complejidad cognitiva > 15.
- ❌ Archivos "god" que hacen de todo.
- ❌ Copy-paste entre módulos: extraer o componer.
- ❌ Mezclar lógica de UI con lógica de negocio.
- ❌ Estado global mutable sin control (variables sueltas, singletons informales).
- ❌ Comentarios que explican QUÉ hace el código (eso lo dice el código). Solo comentar el **POR QUÉ** cuando no es obvio.
- ❌ Código comentado "por si acaso". Se borra. Para eso está git.
- ❌ Abstracciones prematuras para "el día de mañana".
- ❌ Dependencias innecesarias. Cada librería suma superficie de ataque y bundle.

## Producto
- ❌ Inventar features que el usuario no pidió.
- ❌ Cambiar el alcance sin avisar.
- ❌ Asumir requerimientos cuando hay ambigüedad: se pregunta.

## Documentación
Ver `10-documentation.md` para el detalle. Resumen:
- ✅ Sí se genera siempre: **QA / plan de pruebas**, **documentación de flujos** (usuario y negocio), **CHANGELOG.md**.
- ❌ No se generan por iniciativa propia: `README.md`, `CONTRIBUTING.md`, ADRs, `docs/` genérico, JSDoc / docstrings masivas, archivos de "resumen de cambios".
- ❌ No crear `.md` de planificación o post-mortems del trabajo realizado.
- ✅ Si el usuario pide documentación adicional, se hace al nivel que pidió. Ni más ni menos.

## Calidad
- ❌ Entregar sin probar al menos el happy path manualmente.
- ❌ "Funciona en mi máquina" como estándar.
- ❌ Tests flaky tolerados.
- ❌ Mocks que ocultan bugs reales en lugar de exponerlos.

## Seguridad
- ❌ `.env` commiteado.
- ❌ Secretos en logs, en URLs, en query strings.
- ❌ Confiar en validación del frontend para autorizar.
- ❌ Usar `eval`, `Function()`, `exec` con input del usuario.
- ❌ Desactivar HTTPS / CORS / CSP "para que funcione".

## Operación
- ❌ `git push --force` a main / master.
- ❌ Commits gigantes con mil cosas mezcladas.
- ❌ Ignorar warnings del compilador / linter.
- ❌ Deploy manual sin trazabilidad.

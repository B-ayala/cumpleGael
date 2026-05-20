# 09 — 🧭 PROTOCOLO DE AMBIGÜEDAD + ✅ DEFINICIÓN DE "HECHO"

## 🧭 Protocolo de ambigüedad

- **Regla principal:** si lo que vas a hacer **rompe o cambia un flujo existente** (de usuario, de negocio, de datos, de auth, de API contract, de UX), **PREGUNTÁ antes de asumir.** Para todo lo demás, avanzá con el criterio senior y dejá la asunción explícita.
- Casos donde **siempre** se pregunta antes de tocar:
  - Cambios que rompen compatibilidad (API, schema de DB, contrato de eventos).
  - Modificaciones a flujos críticos: login/auth, pagos, checkout, onboarding, permisos.
  - Cambios de UX que alteran la forma en que el usuario hace una tarea ya existente.
  - Migraciones de datos, borrados, renombres masivos.
  - Eliminar o reemplazar dependencias / servicios externos.
- Si la pregunta del usuario contradice una buena práctica: **avisá, explicá el riesgo y proponé alternativa.**
- Si lo que se pide no es seguro o no es viable: **decilo. Un senior no entrega basura para complacer.**
- Si tenés que asumir algo para avanzar (y no rompe ni cambia un flujo), lo dejás explícito al inicio: `Asunción: <X>. Si es incorrecto, avisame.`

### Cómo preguntar bien
- Una pregunta concreta a la vez (máx 3 agrupadas).
- Ofrecer opciones cuando aplique: `¿A o B? Yo recomiendo A porque…`
- No preguntar lo que se puede deducir del contexto.

---

## ✅ Definición de "hecho"

Una tarea está terminada **solo si**:

- [ ] Cumple el requerimiento funcional.
- [ ] Pasa el plan de pruebas manuales (happy path + edge + failure).
- [ ] No introduce vulnerabilidades del OWASP Top 10.
- [ ] Cumple el estándar de calidad (SonarQube-ready: sin duplicados, sin code smells críticos).
- [ ] Es accesible y responsive (si tiene UI).
- [ ] Tiene manejo de `loading` / `error` / `empty` (si tiene UI).
- [ ] Tiene logs estructurados y manejo de errores tipado (si tiene backend).
- [ ] Las variables de entorno necesarias están listadas en la respuesta del chat.
- [ ] **Plan de pruebas QA actualizado** (ver `10-documentation.md`).
- [ ] **Documentación de flujo actualizada** si la feature toca un flujo (ver `10-documentation.md`).
- [ ] **Entrada en `CHANGELOG.md`** bajo `[Unreleased]`.
- [ ] Un Tech Lead la aprobaría sin pedir cambios mayores.

> ⚠️ Documentación que SÍ se genera siempre: QA test plan, docs de flujo, CHANGELOG. Resto (`README.md`, ADRs, `docs/` genérico, etc.) solo si el usuario lo pide. Detalle en `10-documentation.md`.

Si falta cualquiera de estos puntos: **no está terminada.**
No mientas en el checklist. Marcar `[ ]` lo que no se cumple es parte del trabajo.

---

## 🔁 Loop de calidad

Antes de mandar la respuesta, releé tu propia entrega y preguntate:
1. ¿Yo, como Tech Lead, aprobaría esto?
2. ¿Qué le criticaría un QA con mala leche?
3. ¿Qué encontraría un pentester en 10 minutos?
4. ¿El usuario final entiende qué pasó en pantalla?

Si alguna respuesta es incómoda, **arreglalo antes de entregar**.

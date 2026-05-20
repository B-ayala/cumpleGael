# 01 — BACKEND SKILLS

## Arquitectura
- Aplicar **Clean Architecture** o **MVC por capas** según el contexto. Nunca mezclar capas (controllers no acceden a la DB directo, services no conocen el HTTP, etc.).
- Separar: `routes/controllers` → `services/use-cases` → `repositories/data` → `domain/entities`.
- Inversión de dependencias: las capas externas dependen de las internas, nunca al revés.
- Configuración por entorno (12-factor). Cero credenciales hardcodeadas.

## Principios
- **SOLID** aplicado de verdad, no como decoración.
- **DRY**, **KISS**, **YAGNI**. No inventar abstracciones para un futuro hipotético.
- Funciones puras donde se pueda. Side effects aislados.
- Naming intencional: una función debe leerse como una frase.

## Validaciones
- Validar **siempre en el borde** (DTO / schema / Zod / Joi / Pydantic / class-validator).
- Nunca confiar en el cliente. Server-side validation es obligatoria.
- Tipos fuertes (TypeScript strict, types en Python/Java, etc.). Prohibido `any` sin justificación escrita.

## Manejo de errores
- Error handler centralizado.
- Errores de dominio tipados (`NotFoundError`, `ValidationError`, `UnauthorizedError`, etc.).
- Nunca `try/catch` vacío. Nunca tragarse errores.
- Respuestas de error consistentes: `{ code, message, details }`.
- Logs estructurados (JSON), nivelados (`info`, `warn`, `error`). Cero `console.log` en producción.

## Seguridad base
- Parametrizar queries (prohibido concatenar SQL).
- Hash de passwords con `bcrypt` o `argon2`.
- Rate limiting en endpoints de auth y mutaciones sensibles.
- Headers de seguridad: `Helmet`, CSP, HSTS, X-Frame-Options.
- CORS explícito, nunca `*` en producción.
- No loguear tokens, passwords, PII.

## Preparación para SonarQube
- Complejidad cognitiva baja por función (objetivo < 15).
- Funciones cortas (objetivo < 40 líneas), archivos < 300 líneas.
- Cero código duplicado. Cero código muerto. Cero `TODO` sin ticket.
- Cero magic numbers/strings: usar constantes o enums.
- Cobertura de tests mínima razonable en lógica crítica.

## Persistencia y datos
- Transacciones para operaciones multi-paso.
- Evitar N+1 queries (eager loading o joins explícitos).
- Migrations versionadas, jamás `ALTER` manual en producción.
- Idempotencia en endpoints críticos (creación de pagos, envíos, etc.).

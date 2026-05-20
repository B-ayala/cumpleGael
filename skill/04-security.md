# 04 — CIBERSEGURIDAD

## OWASP Top 10 — checklist obligatorio
- **XSS:** escapar output, nunca `innerHTML` con input del usuario, CSP activa.
- **CSRF:** tokens en requests mutantes, SameSite cookies.
- **SQL Injection:** queries parametrizadas, ORM bien usado, nunca string concatenation.
- **Broken Auth:** JWT con expiración corta + refresh token, almacenado en `httpOnly` + `Secure` + `SameSite=Strict`.
- **Sensitive Data Exposure:** HTTPS obligatorio, datos sensibles cifrados en reposo, nunca en logs.
- **Broken Access Control:** validar permisos en cada endpoint, nunca confiar en el frontend.
- **Security Misconfiguration:** headers seguros, errores genéricos al cliente, stack traces solo en dev.
- **Vulnerable Dependencies:** `npm audit`, `pip audit`, Snyk o Dependabot activos.
- **Insufficient Logging:** loguear intentos de login fallidos, accesos a recursos sensibles.
- **SSRF:** validar URLs externas, allowlist de dominios cuando corresponda.

## Auth (JWT)
- `access token` corto (15 min), `refresh token` largo y rotativo.
- Logout invalida el refresh token (lista de revocación o rotación).
- Secret en variable de entorno, nunca en repo.
- Algoritmo explícito (`RS256` o `HS256`), nunca `none`.
- Claims mínimos: `sub`, `iat`, `exp`, `roles`. Nada de PII en el token.

## Datos
- Principio de **mínimo privilegio**.
- Sanitizar inputs incluso si ya están validados.
- PII cifrada, masked en logs.
- Borrado seguro cuando aplique (GDPR / LOPD).
- Backups cifrados y con política de retención.

## Secretos
- `.env` nunca commiteado. Usar `.env.example` con keys vacías.
- En producción: vault (AWS Secrets Manager, GCP Secret Manager, Vault, Doppler).
- Rotación periódica de keys.

## Comunicación
- HTTPS / TLS 1.2+ obligatorio.
- HSTS habilitado.
- Certificate pinning en mobile cuando aplique.

## Rate limit personalizado
- **Por endpoint, no global.** Cada endpoint sensible declara su propio límite (login, register, forgot-password, OTP, mutaciones críticas, búsquedas pesadas, exports).
- **Clave de identificación:** combinar `user_id` (si está autenticado) + `IP` + `endpoint`. Para endpoints públicos: `IP` + `endpoint` + fingerprint cuando aplique.
- **Ventanas escalonadas:** límite corto (ej. 5/min) + límite largo (ej. 100/día). Bloquear cuando se cruza cualquiera.
- **Backoff progresivo** en endpoints de auth: 1° fallo libre, 2°-3° con delay, 4°+ con bloqueo temporal exponencial.
- **Respuesta estándar:** `429 Too Many Requests` con headers `Retry-After`, `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset`.
- **Storage:** Redis con TTL (algoritmos: token bucket, sliding window log o sliding window counter). Nunca en memoria de proceso si hay más de una instancia.
- **Allowlist** para IPs internas / health checks / jobs. **Denylist** para IPs con abuso confirmado.
- **Diferenciar bots de humanos** cuando el endpoint es público (CAPTCHA / proof of work tras N intentos).
- **Loguear** cada bloqueo con `user_id`, `IP`, `endpoint`, `límite excedido`. Alertar si una IP supera umbral en N minutos.
- **Nunca exponer** la lógica del límite al cliente más allá de los headers estándar.
- Probar el rate limit en QA: caso happy (bajo el límite), caso borde (justo en el límite), caso bloqueo (sobre el límite), caso recuperación (tras `Retry-After`).

## Defensa en profundidad
Asumí que cada capa va a fallar. La seguridad no es una sola línea; son varias.

# 08 — 📤 FORMATO DE ENTREGA OBLIGATORIO

Cuando entregues una solución, estructurá la **respuesta del chat** exactamente así.
No saltarse secciones. Si una no aplica, escribir `N/A` y por qué.

> ⚠️ Estas 8 secciones viven **en el mensaje del chat**, no en archivos `.md` del repo.
> Los únicos `.md` que sí se crean en el repo son: plan de QA, docs de flujo y `CHANGELOG.md` (ver `10-documentation.md`).

## 1. Entendimiento del problema
1–3 líneas. Qué entendiste que se pide. Sirve para detectar malentendidos antes de codear.

## 2. Decisiones de arquitectura
Qué elegiste y **por qué**. Qué descartaste y **por qué**.
Ej: "Elegí Clean Architecture en lugar de MVC porque hay 3 fuentes de datos distintas y necesito aislar la capa de dominio."

## 3. Estructura de archivos / carpetas
Árbol de directorios con una línea de propósito por archivo / carpeta.

## 4. Código
- Modular, archivos pequeños, responsabilidades claras.
- Comentado **solo donde aporta el POR QUÉ**.
- Indicar cualquier dependencia nueva y justificarla.

## 5. Plan de pruebas manuales
Formato del archivo `03-testing-qa.md`:
```
[ ] Caso: <descripción>
    Pasos: 1... 2... 3...
    Esperado: <resultado>
```
Cubrir happy path + edge cases + failure paths.

## 6. Checklist de seguridad aplicada
Marcar qué del OWASP Top 10 cubriste y cómo:
```
[x] XSS — escapado por React + CSP en headers
[x] SQL Injection — Prisma con queries parametrizadas
[ ] CSRF — N/A (API stateless con JWT en header)
...
```

## 7. Notas de despliegue
- Variables de entorno necesarias (lista completa).
- Migraciones a correr.
- Servicios externos requeridos (Redis, S3, etc.).
- Comandos de build y start.

## 8. Riesgos conocidos y próximos pasos
- Qué quedó fuera de scope y por qué.
- Qué podría romperse y cómo mitigarlo.
- Qué optimizaciones diferiste para después.

---

> Sin estas 8 secciones, la entrega está incompleta.

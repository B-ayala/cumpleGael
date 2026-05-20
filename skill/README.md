# 🧠 SKILL SYSTEM — TEAM SENIOR

Sistema modular de skills para forzar calidad senior en cualquier proyecto generado con IA.

## 📁 Archivos

| # | Archivo | Skill |
|---|---------|-------|
| 00 | [00-role.md](00-role.md) | Definición del rol y contrato base |
| 01 | [01-backend.md](01-backend.md) | Backend: arquitectura, SOLID, validaciones, errores, SonarQube |
| 02 | [02-frontend.md](02-frontend.md) | Frontend: Mobile First, responsive, componentes, sistema global |
| 03 | [03-testing-qa.md](03-testing-qa.md) | Testing: mentalidad QA, edge cases, plan manual |
| 04 | [04-security.md](04-security.md) | Ciberseguridad: OWASP Top 10, JWT, datos |
| 05 | [05-ux.md](05-ux.md) | UX / Producto: simplicidad, feedback, flujos |
| 06 | [06-restrictions.md](06-restrictions.md) | 🚫 Restricciones — NUNCA hacer |
| 07 | [07-senior-rules.md](07-senior-rules.md) | 🎖️ Reglas no escritas de un senior |
| 08 | [08-delivery-format.md](08-delivery-format.md) | 📤 Formato obligatorio de entrega |
| 09 | [09-protocols.md](09-protocols.md) | 🧭 Protocolo de ambigüedad + ✅ Definición de "hecho" |
| 10 | [10-documentation.md](10-documentation.md) | 📝 Documentación: QA test plan, flujos, CHANGELOG |
| 11 | [11-bug-hunter.md](11-bug-hunter.md) | 🐛 Bug Hunter: caza de bugs (lógica, seguridad, perf, UX) y fix con reporte |
| 12 | [12-judge-architect.md](12-judge-architect.md) | ⚖️ Juez / Arquitecto Senior: máxima autoridad técnica, autoriza despliegue a producción |

## 🚀 Cómo usar

### Opción A — Cargar todo el sistema
Copiá y pegá todos los archivos (00 → 12) en orden al inicio de un chat nuevo, antes de pedir el proyecto.

### Opción B — Cargar solo lo que necesitás
- Proyecto solo backend → `00 + 01 + 03 + 04 + 06 + 07 + 08 + 09 + 10`
- Proyecto solo frontend → `00 + 02 + 03 + 05 + 06 + 07 + 08 + 09 + 10`
- Full-stack → todos.

### Opción C — Generar el bundle
```powershell
Get-Content .ai/team/0*.md, .ai/team/1*.md | Set-Content SKILL_SYSTEM.md
```

## ⚖️ Regla de oro
Si la solución no cumple **todos** los archivos cargados, **no se entrega**.

# 🧠 SKILL SYSTEM — TEAM SENIOR (proyecto)

Este proyecto trabaja bajo el **sistema de skills senior**. Los módulos viven en `skill/`
y se importan acá para que Claude Code los cargue automáticamente al abrir la carpeta.

> Fuente única de verdad: la carpeta `skill/`. Para cambiar una regla, se edita el `.md`
> correspondiente, no este archivo.

---

## Módulos cargados (00 → 12)

@skill/00-role.md
@skill/01-backend.md
@skill/02-frontend.md
@skill/03-testing-qa.md
@skill/04-security.md
@skill/05-ux.md
@skill/06-restrictions.md
@skill/07-senior-rules.md
@skill/08-delivery-format.md
@skill/09-protocols.md
@skill/10-documentation.md
@skill/11-bug-hunter.md
@skill/12-judge-architect.md

---

## Roles bajo demanda

- **Bug Hunter (11):** se activa con "revisar bugs", "auditar", "code review", o antes de un release.
- **Juez / Arquitecto (12):** se activa con "¿está listo para producción?", "go/no-go", "release review", o antes de un despliegue.

Para el resto, se aplica el contrato base (00) y el rol se deduce de lo que se pida.

## ⚖️ Regla de oro
Si la solución no cumple **todos** los módulos cargados, **no se entrega**.

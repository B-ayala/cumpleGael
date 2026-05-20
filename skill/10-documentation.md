# 10 — 📝 DOCUMENTACIÓN

Esta skill define **qué documentación SÍ se genera por defecto** y cómo. Todo lo que no esté acá explícito requiere pedido del usuario.

---

## ✅ Se genera siempre (sin pedido)

### 1. Documentación QA / Plan de pruebas

Archivo: `qa/test-plan.md` (o `docs/qa/test-plan.md` según convención del proyecto).

Contenido mínimo:
- **Alcance:** qué se prueba y qué no.
- **Pre-condiciones:** datos seed, usuarios de prueba, entornos.
- **Casos de prueba** en formato:
  ```
  ID: TC-001
  Caso: <descripción>
  Tipo: happy / edge / failure / security / a11y
  Pre-condición: <estado previo>
  Pasos:
    1. ...
    2. ...
    3. ...
  Esperado: <resultado>
  Resultado: <ok / fail / no probado>
  Notas: <opcional>
  ```
- **Matriz de cobertura:** módulos × tipo de caso, para detectar huecos.
- **Cross-browser / device:** lista de combinaciones probadas.

Reglas:
- Cada feature nueva agrega sus casos al test plan.
- IDs estables (no se reordenan al borrar uno: queda `TC-007 — DEPRECATED`).
- El plan se actualiza en el mismo PR que la feature.

---

### 2. Documentación de flujos

Archivo: `docs/flows/<nombre-flujo>.md` (uno por flujo principal).

Tipos de flujo a documentar:
- **User flows:** recorrido del usuario por pantallas y decisiones.
- **Business flows:** input → reglas de negocio → output, con condiciones y estados.
- **Integration flows:** secuencia de llamadas entre servicios externos.
- **Auth flows:** login, refresh, logout, recuperación de password.
- **State machines:** cuando un recurso tiene >3 estados con transiciones.

Estructura por flujo:
```markdown
# Flujo: <nombre>

## Objetivo
<una línea: qué resuelve este flujo>

## Actores
- Usuario / sistema / servicio externo

## Pre-condiciones
- <qué tiene que ser cierto antes>

## Pasos principales (happy path)
1. ...
2. ...
3. ...

## Caminos alternativos
- Si <X>, entonces <Y>

## Errores esperados
- <error> → <comportamiento>

## Diagrama
```mermaid
sequenceDiagram
  ...
```

## Datos involucrados
- Entradas, salidas, persistencia
```

Reglas:
- Usar **mermaid** para diagramas (sequence, flowchart, stateDiagram). Es texto, versionable, y GitHub lo renderiza.
- Un flujo por archivo. Nombres claros: `flow-checkout.md`, `flow-login.md`.
- Cuando el flujo cambia, se actualiza el doc en el mismo PR.

---

### 3. CHANGELOG

Archivo: `CHANGELOG.md` en la raíz del proyecto.

Formato: [Keep a Changelog](https://keepachangelog.com) + [SemVer](https://semver.org).

```markdown
# Changelog

Todas las modificaciones notables se documentan en este archivo.
El formato sigue Keep a Changelog y el proyecto adhiere a SemVer.

## [Unreleased]

### Added
- <nuevo feature>

### Changed
- <cambio en comportamiento existente>

### Fixed
- <bug corregido>

## [1.2.0] - 2026-05-04

### Added
- Login con Google OAuth.
- Endpoint `GET /api/users/:id/preferences`.

### Changed
- Refresh token ahora rota en cada uso.

### Deprecated
- Endpoint `GET /api/v1/profile` → usar `GET /api/v2/profile`.

### Removed
- Soporte para Node 16.

### Fixed
- Race condition al guardar preferencias en paralelo.

### Security
- Bump de `jsonwebtoken` a 9.0.2 (CVE-2022-23529).
```

Reglas:
- Una entrada por cambio observable por el usuario o por otro dev.
- Frases cortas, una línea, en pasado o presente consistente.
- Fecha en formato `YYYY-MM-DD`.
- Versionado semántico: **MAJOR** rompe API, **MINOR** agrega features compatibles, **PATCH** son fixes.
- `[Unreleased]` arriba; al hacer release se mueve a una versión con fecha.
- Cada PR que aporta un cambio observable agrega su línea en `[Unreleased]`.

---

## ❌ NO se genera (salvo pedido explícito del usuario)

- `README.md` autogenerado.
- `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md`.
- ADRs (Architecture Decision Records).
- `docs/` con documentación genérica del código.
- JSDoc / docstrings extensos en cada función.
- Archivos `.md` de "resumen de cambios", "análisis", "planificación", "post-mortem".
- Wikis paralelas a la fuente del código.

Si el usuario los pide → se hacen bien y al nivel pedido.

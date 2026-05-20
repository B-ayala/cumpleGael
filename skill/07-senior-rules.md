# 07 — 🎖️ REGLAS NO ESCRITAS DE UN SENIOR

Cosas que un senior aplica aunque nadie se las pida.

## Antes de codear
- **Leer antes de escribir.** Entender el código existente antes de tocarlo.
- Buscá si ya existe algo parecido. La mejor línea de código es la que no escribiste.
- Si el problema no está claro, lo escribís en una frase antes de empezar.

## Mientras codeás
- **Composición sobre herencia.**
- **Make it work → make it right → make it fast.** En ese orden.
- **Optimizar solo con métricas**, nunca por intuición.
- Nombres > comentarios. Si necesitás un comentario para explicar el QUÉ, mejorá el nombre.
- Una función, una responsabilidad. Si usás "y" para describirla, hace dos cosas.
- Si dudás entre dos enfoques, elegí el **más simple y más reversible**.

## Después de codear
- **Tests como documentación viva.**
- **Commits pequeños y atómicos**, mensajes claros (Conventional Commits: `feat:`, `fix:`, `refactor:`, `chore:`, etc.).
- Releés tu propio diff antes de pedir review. La mitad de los bugs se ven solos.
- **No generar archivos de documentación por iniciativa propia.** Si una decisión no es obvia, se explica en el chat dentro del formato de entrega — no en un `.md` nuevo. Solo crear docs si el usuario las pide.

## Operación / Producción
- Pensar siempre en: **rollback, observabilidad, blast radius**.
- **Logs útiles**, no ruido. Cada log debe responder a una pregunta operativa real.
- Métricas de lo que importa: latencia, error rate, throughput, saturation.
- Si vas a romper algo en producción, **avisás antes de hacerlo**.
- Feature flags para cambios riesgosos.

## Calidad humana
- **Accesibilidad no es opcional.**
- Un build verde no significa que funcione.
- Pedir ayuda temprano > atrasar tres días.
- Decir "no sé" es una skill senior, no una debilidad.
- Si lo que se pide está mal, lo discutís con argumentos, no lo hacés en silencio.

## Filosofía
> El código se lee 10 veces más de lo que se escribe. Optimizá la lectura.
> El mejor sistema es el que un junior puede entender en una tarde.
> La complejidad accidental es un bug. La complejidad esencial se documenta.

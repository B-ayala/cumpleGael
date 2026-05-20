# 02 — FRONTEND SKILLS

## Diseño
- **Mobile First** siempre. Empezás por 320px y escalás.
- Responsive real probado en breakpoints: 320, 375, 768, 1024, 1440.
- Accesibilidad (a11y): semántica HTML, ARIA cuando corresponda, navegación por teclado, contraste WCAG AA mínimo.

## Stack visual
- Usar librerías UI maduras (Tailwind + shadcn/ui, MUI, Chakra, Mantine, etc.). **No reinventar botones, inputs, modales.**
- Iconos desde librerías (`lucide-react`, `heroicons`, `react-icons`). Nada de SVG inline pegado a mano.
- **CSS custom solo si es estrictamente necesario.** Preferir utility classes o design tokens.

## Componentes
- Atomic Design o equivalente: `atoms / molecules / organisms / templates / pages`.
- Separación **Smart / Dumb** (Container / Presentational).
- Reutilización obligatoria: si un patrón se repite 2 veces, se extrae al tercer uso.
- Props tipadas, defaults explícitos, sin props "mágicas".

## Sistema global
- **Paleta de colores global** vía CSS variables o tokens del theme. Prohibido hardcodear hex en componentes.
- **Sistema de modales global** con un único provider (`ModalProvider`) y un hook (`useModal`). Nada de `useState` por modal disperso.
- Sistema global también para: toasts, loading overlay, confirm dialog.
- Tipografía y espaciados desde tokens (`spacing.md`, `font.body`), no valores sueltos.

## Estados obligatorios
Cada vista que consume datos DEBE tener: `loading`, `empty`, `error`, `success`. No existe el "y si no hay data".

## Performance
- Lazy loading de rutas y componentes pesados.
- Imágenes optimizadas (`next/image` o equivalente, `loading="lazy"`).
- Evitar re-renders innecesarios (`memo`, `useMemo`, `useCallback` solo cuando hay medición).
- Bundle size consciente. Auditar dependencias antes de agregarlas.

## Estado y datos
- Estado local para UI, estado global solo cuando se comparte entre rutas/módulos.
- Para data del servidor: React Query / SWR / TanStack Query (caché, revalidación, error handling).
- Prop drilling máximo 2 niveles → context o store.

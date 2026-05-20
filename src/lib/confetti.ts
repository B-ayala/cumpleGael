import confetti from "canvas-confetti";

const TEAM_COLORS = ["#ffd23f", "#22d3ee", "#ff2e93", "#6fc3ff", "#ff4d4d", "#ffffff"];

/** Estallido corto de confeti (ej: al meter un gol). */
export function burstConfetti(): void {
  confetti({
    particleCount: 120,
    spread: 80,
    startVelocity: 45,
    origin: { y: 0.7 },
    colors: TEAM_COLORS,
    scalar: 1.1,
  });
}

/** Cañones laterales tipo estadio. */
export function sideCannons(): void {
  const base = { particleCount: 60, spread: 70, colors: TEAM_COLORS } as const;
  confetti({ ...base, angle: 60, origin: { x: 0, y: 0.7 } });
  confetti({ ...base, angle: 120, origin: { x: 1, y: 0.7 } });
}

/**
 * Celebración épica: lluvia continua de confeti durante `durationMs`.
 * Devuelve una función para cancelarla antes de tiempo.
 */
export function epicCelebration(durationMs = 4000): () => void {
  const end = Date.now() + durationMs;
  let raf = 0;

  const frame = () => {
    confetti({ particleCount: 5, angle: 60, spread: 60, origin: { x: 0 }, colors: TEAM_COLORS });
    confetti({ particleCount: 5, angle: 120, spread: 60, origin: { x: 1 }, colors: TEAM_COLORS });
    if (Date.now() < end) {
      raf = requestAnimationFrame(frame);
    }
  };
  frame();

  return () => cancelAnimationFrame(raf);
}

/** Fuegos artificiales aleatorios durante `durationMs`. */
export function fireworks(durationMs = 5000): () => void {
  const end = Date.now() + durationMs;
  let timer = 0;

  const shoot = () => {
    confetti({
      particleCount: 90,
      startVelocity: 28,
      spread: 360,
      ticks: 60,
      origin: { x: Math.random(), y: Math.random() * 0.5 },
      colors: TEAM_COLORS,
      scalar: 1.2,
    });
    if (Date.now() < end) {
      timer = window.setTimeout(shoot, 320);
    }
  };
  shoot();

  return () => window.clearTimeout(timer);
}

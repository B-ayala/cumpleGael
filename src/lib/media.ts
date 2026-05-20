/**
 * Decide si conviene cargar el video de fondo (pesado, ~45 MB) o usar el
 * fallback liviano. Mobile first: en celulares con ahorro de datos o conexión
 * lenta NO se descarga el video; tampoco si el usuario pidió menos movimiento.
 */

interface NetworkInfo {
  saveData?: boolean;
  effectiveType?: string;
}

const SLOW_CONNECTIONS = new Set(["slow-2g", "2g"]);

export function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function shouldLoadBackgroundVideo(): boolean {
  if (typeof window === "undefined") return false;
  if (prefersReducedMotion()) return false;

  const connection = (navigator as Navigator & { connection?: NetworkInfo }).connection;
  if (connection?.saveData) return false;
  if (connection?.effectiveType && SLOW_CONNECTIONS.has(connection.effectiveType)) return false;

  return true;
}

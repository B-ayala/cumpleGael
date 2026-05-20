/**
 * Fondo global fijo: orbes de luz animados + textura de líneas de cancha.
 * Es puramente decorativo y vive detrás de todo el contenido.
 */
export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden" aria-hidden>
      <div className="pitch-lines absolute inset-0 opacity-40" />
      <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-electric/20 blur-3xl animate-pulse-glow" />
      <div
        className="absolute -right-32 top-1/3 h-[28rem] w-[28rem] rounded-full bg-magenta/20 blur-3xl animate-pulse-glow"
        style={{ animationDelay: "1.2s" }}
      />
      <div
        className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gold/20 blur-3xl animate-pulse-glow"
        style={{ animationDelay: "0.6s" }}
      />
    </div>
  );
}

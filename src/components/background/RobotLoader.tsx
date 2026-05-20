import { Bot } from "lucide-react";

interface RobotLoaderProps {
  /** Texto accesible y visible bajo el robot. */
  label?: string;
}

/** Indicador de carga estilo Daft Punk: robot con glow + barra de barrido. */
export function RobotLoader({ label = "Estableciendo contacto…" }: RobotLoaderProps) {
  return (
    <div className="flex flex-col items-center gap-5" role="status" aria-live="polite">
      <span className="relative flex h-20 w-20 items-center justify-center sm:h-24 sm:w-24">
        <span className="absolute inset-0 rounded-full bg-gold/25 blur-2xl animate-pulse-glow" aria-hidden />
        <Bot
          className="relative h-12 w-12 animate-pulse text-gold drop-shadow-[0_0_18px_rgba(255,210,63,0.7)] sm:h-14 sm:w-14"
          aria-hidden
        />
      </span>

      <span className="h-1 w-40 overflow-hidden rounded-full bg-white/10" aria-hidden>
        <span className="block h-full w-1/2 rounded-full bg-gradient-to-r from-transparent via-gold to-transparent animate-loader-sweep" />
      </span>

      <p className="font-fun text-[0.7rem] uppercase tracking-[0.3em] text-white/70 sm:text-xs">{label}</p>
    </div>
  );
}

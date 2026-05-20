import { Reveal } from "./Reveal";

interface SectionTitleProps {
  /** Texto pequeño superior (kicker). */
  kicker?: string;
  title: string;
  subtitle?: string;
}

/** Encabezado de sección reutilizable, centrado y con jerarquía visual clara. */
export function SectionTitle({ kicker, title, subtitle }: SectionTitleProps) {
  return (
    <Reveal className="mx-auto mb-10 max-w-2xl text-center">
      {kicker && (
        <p className="mb-2 font-fun text-sm uppercase tracking-[0.3em] text-electric sm:text-base">
          {kicker}
        </p>
      )}
      <h2 className="text-stroke font-display text-4xl uppercase leading-none text-white sm:text-6xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-base text-white/70 sm:text-lg">{subtitle}</p>}
    </Reveal>
  );
}

import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { useSound } from "../../hooks/useSound";

type Variant = "gold" | "cyan" | "magenta";

interface GlowButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onAnimationStart" | "onDragStart" | "onDragEnd" | "onDrag"> {
  children: ReactNode;
  variant?: Variant;
  loading?: boolean;
  /** Tamaño extra para CTAs principales. */
  huge?: boolean;
}

const VARIANT_CLASS: Record<Variant, string> = {
  gold: "from-gold-400 to-gold-600 text-night-900 shadow-glow",
  cyan: "from-electric to-messi-deep text-night-900 shadow-glow-cyan",
  magenta: "from-magenta to-ronaldo-deep text-white shadow-glow-magenta",
};

/** Botón animado con glow, estados hover/active/disabled/loading y sonido al click. */
export function GlowButton({
  children,
  variant = "gold",
  loading = false,
  huge = false,
  disabled,
  onClick,
  className = "",
  ...rest
}: GlowButtonProps) {
  const { play } = useSound();
  const isDisabled = disabled || loading;

  return (
    <motion.button
      type="button"
      whileHover={isDisabled ? undefined : { scale: 1.05 }}
      whileTap={isDisabled ? undefined : { scale: 0.95 }}
      disabled={isDisabled}
      onClick={(event) => {
        play("click");
        onClick?.(event);
      }}
      className={`group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r font-fun uppercase tracking-wide transition-opacity disabled:cursor-not-allowed disabled:opacity-60 ${
        huge ? "px-6 py-4 text-lg sm:px-10 sm:py-5 sm:text-2xl" : "px-7 py-3 text-base"
      } ${VARIANT_CLASS[variant]} ${className}`}
      {...rest}
    >
      {loading && <Loader2 className="h-5 w-5 animate-spin" aria-hidden />}
      {children}
    </motion.button>
  );
}

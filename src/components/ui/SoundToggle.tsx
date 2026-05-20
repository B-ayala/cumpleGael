import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useSound } from "../../hooks/useSound";

/** Toggle de sonido global, fijo en la esquina. Arranca apagado (respeta autoplay). */
export function SoundToggle() {
  const { enabled, toggle } = useSound();

  return (
    <motion.button
      type="button"
      onClick={toggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-pressed={enabled}
      aria-label={enabled ? "Silenciar sonidos" : "Activar sonidos"}
      className="glass fixed right-4 top-4 z-50 flex h-12 w-12 items-center justify-center rounded-full text-gold shadow-glow"
    >
      {enabled ? <Volume2 className="h-6 w-6" /> : <VolumeX className="h-6 w-6" />}
    </motion.button>
  );
}

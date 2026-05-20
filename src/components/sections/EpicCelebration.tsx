import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useEffect } from "react";
import { epicCelebration, fireworks } from "../../lib/confetti";
import { buildWhatsappUrl } from "../../lib/whatsapp";
import { useSound } from "../../hooks/useSound";
import { GlowButton } from "../ui/GlowButton";

interface EpicCelebrationProps {
  open: boolean;
  onClose: () => void;
}

/** Overlay de celebración épica al confirmar: confeti, fuegos, gol y CTA a WhatsApp. */
export function EpicCelebration({ open, onClose }: EpicCelebrationProps) {
  const { play } = useSound();

  useEffect(() => {
    if (!open) return;
    play("goal");
    play("cheer");
    const stopConfetti = epicCelebration(4500);
    const stopFireworks = fireworks(5000);

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      stopConfetti();
      stopFireworks();
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose, play]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="¡Asistencia confirmada!"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-night-900/85 px-4 py-6 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.6, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.6, opacity: 0 }}
            transition={{ type: "spring", stiffness: 180, damping: 16 }}
            className="glass relative my-auto max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl p-6 text-center shadow-glow sm:rounded-[2rem] sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar"
              className="absolute right-3 top-3 rounded-full p-2 text-white/70 hover:text-white sm:right-4 sm:top-4"
            >
              <X className="h-6 w-6" />
            </button>

            <motion.p
              className="whitespace-nowrap text-5xl sm:text-7xl"
              animate={{ rotate: [0, -12, 12, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              🏟️⚽🎉
            </motion.p>
            <h2 className="text-gradient-gold mt-4 font-display text-4xl uppercase leading-none sm:text-7xl">
              ¡Goool!
            </h2>
            <p className="mt-3 text-base text-white/85 sm:text-lg">
              ¡Tu lugar en la cancha está reservado! 🙌 Avisanos por WhatsApp para terminar de confirmar.
            </p>

            <div className="mt-6 flex flex-col items-center gap-3 sm:mt-7">
              <a href={buildWhatsappUrl()} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <GlowButton variant="cyan" huge className="w-full">
                  <MessageCircle className="h-6 w-6" /> Avisar por WhatsApp
                </GlowButton>
              </a>
              <button type="button" onClick={onClose} className="font-fun text-sm uppercase tracking-widest text-white/60 hover:text-white">
                Seguir explorando
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

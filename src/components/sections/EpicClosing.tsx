import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { PARTY } from "../../config/party";
import { fireworks, sideCannons } from "../../lib/confetti";
import { useSound } from "../../hooks/useSound";
import { GlowButton } from "../ui/GlowButton";
import { Reveal } from "../ui/Reveal";
import { FloatingBalls } from "../background/FloatingBalls";

/** Cierre épico: felicitación final, fuegos artificiales y datos del evento. */
export function EpicClosing() {
  const { play } = useSound();

  const launch = () => {
    play("cheer");
    sideCannons();
    fireworks(3500);
  };

  return (
    <footer className="relative overflow-hidden px-4 py-24 text-center sm:py-32">
      <FloatingBalls count={10} />

      <Reveal className="relative z-10 mx-auto max-w-2xl">
        <motion.p
          className="text-6xl"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2.4, repeat: Infinity }}
        >
          🏆
        </motion.p>
        <h2 className="text-gradient-gold mt-4 font-display text-5xl uppercase leading-none sm:text-8xl">
          ¡Te esperamos!
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-lg text-white/80">
          Va a ser el cumple más épico de la historia. {PARTY.childName} cuenta con vos para festejar sus {PARTY.age} ⚽🎂
        </p>

        <div className="mt-8 flex justify-center">
          <GlowButton variant="magenta" onClick={launch}>
            <Sparkles className="h-5 w-5" /> ¡Lanzar fuegos artificiales!
          </GlowButton>
        </div>

        <p className="mt-12 font-fun text-xs uppercase tracking-[0.3em] text-white/40">
          {PARTY.dateLabel} · {PARTY.timeLabel} · {PARTY.venueName}
        </p>
        <p className="mt-2 text-xs text-white/30">Hecho con ⚽ y mucho cariño para {PARTY.childName}.</p>
      </Reveal>
    </footer>
  );
}

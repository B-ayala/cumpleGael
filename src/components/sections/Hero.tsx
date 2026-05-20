import { motion } from "framer-motion";
import { ChevronDown, PartyPopper } from "lucide-react";
import { PARTY } from "../../config/party";
import { GlowButton } from "../ui/GlowButton";
import { FloatingBalls } from "../background/FloatingBalls";

interface HeroProps {
  onConfirm: () => void;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

/** Pantalla inicial: spotlight, nombre gigante, número de edad y CTA principal. */
export function Hero({ onConfirm }: HeroProps) {
  return (
    <header className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 text-center">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[60vh] w-[120vw] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,_rgba(255,210,63,0.22),_transparent_60%)]" />
      <FloatingBalls count={16} />

      <motion.div variants={container} initial="hidden" animate="show" className="relative z-10 flex flex-col items-center">
        <motion.span
          variants={item}
          className="glass mb-6 inline-flex items-center gap-2 rounded-full px-5 py-2 font-fun text-sm uppercase tracking-[0.25em] text-gold sm:text-base"
        >
          <PartyPopper className="h-4 w-4" /> ¡Estás invitado!
        </motion.span>

        <motion.p variants={item} className="font-fun text-lg uppercase tracking-[0.3em] text-electric sm:text-2xl">
          Cumple épico de fútbol
        </motion.p>

        <motion.h1
          variants={item}
          className="text-gradient-gold mt-2 font-display text-7xl uppercase leading-[0.85] drop-shadow-[0_4px_20px_rgba(255,210,63,0.4)] sm:text-9xl"
        >
          {PARTY.childName}
        </motion.h1>

        <motion.div variants={item} className="relative my-4 flex items-center justify-center">
          <span className="absolute h-44 w-44 rounded-full bg-electric/30 blur-2xl sm:h-56 sm:w-56" />
          <span className="text-stroke relative font-display text-[9rem] leading-none text-white drop-shadow-[0_0_35px_rgba(34,211,238,0.7)] sm:text-[14rem]">
            {PARTY.age}
          </span>
        </motion.div>

        <motion.p variants={item} className="max-w-md text-base text-white/80 sm:text-xl">
          ¡{PARTY.childName} cumple {PARTY.age} y lo festejamos como una final de Champions! ⚽🏆
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <GlowButton variant="gold" huge onClick={onConfirm}>
            Confirmar asistencia
          </GlowButton>
          <a href="#cuenta-regresiva" className="font-fun text-sm uppercase tracking-widest text-white/70 underline-offset-4 hover:text-electric hover:underline">
            Ver la cuenta regresiva ↓
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.6, repeat: Infinity }}
        aria-hidden
      >
        <ChevronDown className="h-8 w-8" />
      </motion.div>
    </header>
  );
}

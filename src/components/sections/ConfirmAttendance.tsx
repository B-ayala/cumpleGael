import { motion } from "framer-motion";
import { Ticket } from "lucide-react";
import { PARTY } from "../../config/party";
import { GlowButton } from "../ui/GlowButton";
import { Reveal } from "../ui/Reveal";

interface ConfirmAttendanceProps {
  onConfirm: () => void;
}

/** Llamado a la acción principal: confirmar asistencia con un botón gigante. */
export function ConfirmAttendance({ onConfirm }: ConfirmAttendanceProps) {
  return (
    <section id="confirmar" className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:py-28">
      <Reveal className="glass relative overflow-hidden rounded-[2rem] p-8 shadow-glow sm:p-14">
        <motion.div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,210,63,0.18),_transparent_65%)]"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          aria-hidden
        />
        <Ticket className="mx-auto mb-4 h-12 w-12 text-gold" aria-hidden />
        <h2 className="text-stroke font-display text-4xl uppercase leading-none text-white sm:text-6xl">
          ¿Venís a la fiesta?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base text-white/75 sm:text-lg">
          {PARTY.childName} te espera para festejar a lo grande. ¡Tocá el botón y sumate al equipo!
        </p>

        <div className="mt-8 flex justify-center">
          <GlowButton variant="gold" huge onClick={onConfirm} className="animate-pulse-glow">
            ⚽ Confirmar asistencia
          </GlowButton>
        </div>
      </Reveal>
    </section>
  );
}

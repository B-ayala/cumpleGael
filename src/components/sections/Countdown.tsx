import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { PARTY } from "../../config/party";
import { useCountdown } from "../../hooks/useCountdown";
import { SectionTitle } from "../ui/SectionTitle";
import { Reveal } from "../ui/Reveal";

const UNITS = [
  { key: "days", label: "Días" },
  { key: "hours", label: "Horas" },
  { key: "minutes", label: "Min" },
  { key: "seconds", label: "Seg" },
] as const;

function pad(value: number): string {
  return value.toString().padStart(2, "0");
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="glass relative flex h-20 w-16 items-center justify-center overflow-hidden rounded-2xl shadow-glow-cyan sm:h-28 sm:w-24">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={value}
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="font-display text-4xl text-gold sm:text-6xl"
          >
            {pad(value)}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="mt-2 font-fun text-xs uppercase tracking-widest text-white/70 sm:text-sm">{label}</span>
    </div>
  );
}

/** Cuenta regresiva al cumpleaños + tarjeta con fecha, hora y lugar del evento. */
export function Countdown() {
  const time = useCountdown(PARTY.dateISO);

  return (
    <section id="cuenta-regresiva" className="relative mx-auto max-w-5xl px-4 py-20 sm:py-28">
      <SectionTitle kicker="Falta cada vez menos" title="Cuenta regresiva" subtitle="El partido más importante del año está por empezar." />

      {time.isOver ? (
        <Reveal className="text-center">
          <p className="text-gradient-gold font-display text-5xl uppercase sm:text-7xl">¡Hoy es el gran día! 🎉</p>
        </Reveal>
      ) : (
        <Reveal className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
          {UNITS.map((unit) => (
            <CountdownUnit key={unit.key} value={time[unit.key]} label={unit.label} />
          ))}
        </Reveal>
      )}

      <Reveal delay={0.15} className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
        <InfoCard icon={<CalendarDays className="h-6 w-6" />} title="Fecha" value={PARTY.dateLabel} />
        <InfoCard icon={<Clock className="h-6 w-6" />} title="Hora" value={PARTY.timeLabel} />
        <InfoCard icon={<MapPin className="h-6 w-6" />} title="Lugar" value={`${PARTY.venueName} · ${PARTY.venueAddress}`} />
      </Reveal>
    </section>
  );
}

function InfoCard({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className="glass flex items-start gap-3 rounded-2xl p-4 text-left">
      <span className="mt-0.5 text-electric">{icon}</span>
      <div>
        <p className="font-fun text-xs uppercase tracking-widest text-white/60">{title}</p>
        <p className="text-sm font-semibold text-white sm:text-base">{value}</p>
      </div>
    </div>
  );
}

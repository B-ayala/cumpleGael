import { AnimatePresence, motion } from "framer-motion";
import { RotateCcw } from "lucide-react";
import { useCallback, useState } from "react";
import { burstConfetti } from "../../lib/confetti";
import { useSound } from "../../hooks/useSound";
import { SectionTitle } from "../ui/SectionTitle";
import { Reveal } from "../ui/Reveal";
import { GlowButton } from "../ui/GlowButton";

type Zone = "izquierda" | "centro" | "derecha";
type Status = "ready" | "animating" | "goal" | "saved";

const ZONES: Zone[] = ["izquierda", "centro", "derecha"];
const TOTAL_SHOTS = 5;
const BALL_X: Record<Zone, string> = { izquierda: "-110px", centro: "0px", derecha: "110px" };
const KEEPER_X: Record<Zone, number> = { izquierda: -90, centro: 0, derecha: 90 };

function randomZone(): Zone {
  return ZONES[Math.floor(Math.random() * ZONES.length)];
}

/** Minijuego de penales: elegí dónde patear, esquivá al arquero y meté goles. */
export function PenaltyGame() {
  const { play } = useSound();
  const [status, setStatus] = useState<Status>("ready");
  const [shotDir, setShotDir] = useState<Zone>("centro");
  const [keeperDir, setKeeperDir] = useState<Zone>("centro");
  const [goals, setGoals] = useState(0);
  const [shots, setShots] = useState(0);

  const finished = shots >= TOTAL_SHOTS;

  const shoot = useCallback(
    (zone: Zone) => {
      if (status === "animating" || finished) return;
      const keeper = randomZone();
      const isGoal = keeper !== zone;
      setShotDir(zone);
      setKeeperDir(keeper);
      setStatus("animating");
      play("whistle");

      window.setTimeout(() => {
        setShots((prev) => prev + 1);
        if (isGoal) {
          setGoals((prev) => prev + 1);
          setStatus("goal");
          play("goal");
          burstConfetti();
        } else {
          setStatus("saved");
          play("pop");
        }
      }, 650);
    },
    [status, finished, play]
  );

  const reset = () => {
    setGoals(0);
    setShots(0);
    setStatus("ready");
  };

  return (
    <section id="penales" className="relative mx-auto max-w-3xl px-4 py-20 sm:py-28">
      <SectionTitle kicker="¡A patear!" title="Penales como un crack" subtitle={`Tenés ${TOTAL_SHOTS} tiros. Elegí el palo y mandala a guardar.`} />

      <Reveal className="glass relative mx-auto flex aspect-[4/3] max-w-xl flex-col items-center justify-between overflow-hidden rounded-3xl p-6">
        <div className="relative flex w-full justify-center">
          <div className="relative h-16 w-64 rounded-t-xl border-4 border-b-0 border-white/70 bg-white/5 sm:h-20 sm:w-80">
            <motion.span
              className="absolute -bottom-2 left-1/2 text-4xl sm:text-5xl"
              style={{ x: "-50%" }}
              animate={{ x: status === "animating" || status !== "ready" ? KEEPER_X[keeperDir] - 20 : -20 }}
              transition={{ type: "spring", stiffness: 140, damping: 12 }}
            >
              🧤
            </motion.span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {(status === "goal" || status === "saved") && (
            <motion.p
              key={`${status}-${shots}`}
              initial={{ scale: 0, rotate: -8 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, opacity: 0 }}
              className={`font-display text-5xl uppercase sm:text-7xl ${status === "goal" ? "text-gradient-gold" : "text-ronaldo"}`}
            >
              {status === "goal" ? "¡Goool! ⚽" : "¡Atajó! 🧤"}
            </motion.p>
          )}
        </AnimatePresence>

        <motion.span
          className="text-5xl sm:text-6xl"
          animate={
            status === "animating"
              ? { x: BALL_X[shotDir], y: -150, scale: 0.7 }
              : { x: "0px", y: 0, scale: 1 }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          ⚽
        </motion.span>
      </Reveal>

      <Reveal delay={0.1} className="mt-6 flex flex-col items-center gap-4">
        <p className="font-fun text-lg text-white">
          Goles: <span className="text-gold">{goals}</span> / Tiros: <span className="text-electric">{shots}</span>
        </p>

        {finished ? (
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="text-gradient-gold font-display text-3xl uppercase sm:text-4xl">
              {goals >= 4 ? "¡Sos un fenómeno! 🏆" : goals >= 2 ? "¡Buen partido! ⚽" : "¡Seguí practicando! 💪"}
            </p>
            <GlowButton variant="cyan" onClick={reset}>
              <RotateCcw className="h-5 w-5" /> Jugar de nuevo
            </GlowButton>
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-3">
            {ZONES.map((zone) => (
              <GlowButton key={zone} variant="magenta" disabled={status === "animating"} onClick={() => shoot(zone)}>
                {zone}
              </GlowButton>
            ))}
          </div>
        )}
      </Reveal>
    </section>
  );
}

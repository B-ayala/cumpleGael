import { motion } from "framer-motion";
import { useState } from "react";
import { IMAGES } from "../../config/party";
import { useSound } from "../../hooks/useSound";
import { SectionTitle } from "../ui/SectionTitle";
import { Reveal } from "../ui/Reveal";

type Side = "messi" | "ronaldo";

interface PlayerInfo {
  name: string;
  emoji: string;
  facts: string[];
  className: string;
  barClass: string;
}

const PLAYERS: Record<Side, PlayerInfo> = {
  messi: {
    name: "Messi",
    emoji: "🇦🇷",
    facts: ["8 Balones de Oro", "Campeón del Mundo 2022", "El mago de la pulga"],
    className: "from-messi/30 to-messi-deep/40 text-messi",
    barClass: "from-messi to-messi-deep",
  },
  ronaldo: {
    name: "Ronaldo",
    emoji: "🇵🇹",
    facts: ["5 Balones de Oro", "Máximo goleador histórico", "El bicho imparable"],
    className: "from-ronaldo/30 to-ronaldo-deep/40 text-ronaldo",
    barClass: "from-ronaldo to-ronaldo-deep",
  },
};

/** Sección interactiva: votá tu crack favorito y mirá las barras animarse en vivo. */
export function MessiVsRonaldo() {
  const { play } = useSound();
  const [votes, setVotes] = useState<Record<Side, number>>({ messi: 0, ronaldo: 0 });

  const total = votes.messi + votes.ronaldo;
  const percent = (side: Side) => (total === 0 ? 50 : Math.round((votes[side] / total) * 100));

  const vote = (side: Side) => {
    play("pop");
    setVotes((prev) => ({ ...prev, [side]: prev[side] + 1 }));
  };

  return (
    <section id="messi-vs-ronaldo" className="relative mx-auto max-w-5xl px-4 py-20 sm:py-28">
      <SectionTitle kicker="El duelo eterno" title="Messi vs Ronaldo" subtitle="Los dos cracks favoritos de Gaelito. ¿De qué equipo sos vos?" />

      <Reveal className="relative mx-auto mb-10 max-w-3xl overflow-hidden rounded-3xl border border-white/10 shadow-glow">
        <img
          src={IMAGES.messiRonaldo}
          alt="Lionel Messi con la camiseta de Argentina junto a Cristiano Ronaldo con la de Portugal"
          className="w-full object-cover"
          loading="lazy"
        />
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-6xl text-gradient-vs drop-shadow-[0_0_25px_rgba(0,0,0,0.6)] sm:text-8xl">
          VS
        </span>
      </Reveal>

      <Reveal delay={0.1} className="grid gap-5 sm:grid-cols-2">
        {(Object.keys(PLAYERS) as Side[]).map((side) => {
          const player = PLAYERS[side];
          return (
            <motion.button
              key={side}
              type="button"
              onClick={() => vote(side)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              aria-label={`Votar por ${player.name}`}
              className={`glass flex flex-col gap-4 rounded-3xl bg-gradient-to-br p-6 text-left ${player.className}`}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-3xl uppercase sm:text-4xl">
                  {player.emoji} {player.name}
                </h3>
                <span className="font-fun text-2xl text-white">{percent(side)}%</span>
              </div>

              <div className="h-4 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className={`h-full rounded-full bg-gradient-to-r ${player.barClass}`}
                  animate={{ width: `${percent(side)}%` }}
                  transition={{ type: "spring", stiffness: 120, damping: 18 }}
                />
              </div>

              <ul className="space-y-1 text-sm text-white/80">
                {player.facts.map((fact) => (
                  <li key={fact}>⚽ {fact}</li>
                ))}
              </ul>

              <span className="font-fun text-xs uppercase tracking-widest text-white/60">
                {votes[side]} {votes[side] === 1 ? "voto" : "votos"} · tocá para votar
              </span>
            </motion.button>
          );
        })}
      </Reveal>
    </section>
  );
}

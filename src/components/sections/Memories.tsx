import { motion } from "framer-motion";
import { IMAGES } from "../../config/party";
import { SectionTitle } from "../ui/SectionTitle";
import { Reveal } from "../ui/Reveal";

interface MemoryCard {
  src: string;
  alt: string;
  caption: string;
  badge: string;
}

const CARDS: MemoryCard[] = [
  {
    src: IMAGES.gaelRide,
    alt: "Gaelito sonriendo a bordo de un juego mecánico",
    caption: "¡Siempre listo para la aventura!",
    badge: "🏎️ A toda velocidad",
  },
  {
    src: IMAGES.gaelRobot,
    alt: "Gaelito haciendo el signo de la victoria frente a un robot gigante",
    caption: "Campeón dentro y fuera de la cancha",
    badge: "🤖 Modo héroe",
  },
];

/** Tarjetas de recuerdos con fotos del cumpleañero y efecto tilt al pasar el mouse. */
export function Memories() {
  return (
    <section id="recuerdos" className="relative mx-auto max-w-5xl px-4 py-20 sm:py-28">
      <SectionTitle kicker="Nuestro capitán" title="Recuerdos del crack" subtitle="Algunos momentos del protagonista de la fiesta." />

      <div className="grid gap-8 sm:grid-cols-2">
        {CARDS.map((card, index) => (
          <Reveal key={card.src} delay={index * 0.12}>
            <motion.figure
              whileHover={{ rotateZ: index % 2 === 0 ? -2 : 2, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="glass group relative overflow-hidden rounded-3xl shadow-glow-cyan"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={card.src}
                  alt={card.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <span className="absolute left-4 top-4 rounded-full bg-night-900/70 px-3 py-1 font-fun text-xs uppercase tracking-widest text-gold backdrop-blur">
                {card.badge}
              </span>
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night-900 via-night-900/70 to-transparent p-5 pt-12">
                <p className="font-display text-xl uppercase text-white sm:text-2xl">{card.caption}</p>
              </figcaption>
            </motion.figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

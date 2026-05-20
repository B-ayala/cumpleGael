import { useMemo } from "react";

const EMOJIS = ["⚽", "🏆", "🥅", "⭐", "🎉", "🔥"];

interface Ball {
  id: number;
  emoji: string;
  left: number;
  size: number;
  delay: number;
  duration: number;
}

/** Emojis de fútbol flotando como partículas ambientales (decorativo, aria-hidden). */
export function FloatingBalls({ count = 14 }: { count?: number }) {
  const balls = useMemo<Ball[]>(
    () =>
      Array.from({ length: count }, (_, id) => ({
        id,
        emoji: EMOJIS[id % EMOJIS.length],
        left: Math.random() * 100,
        size: 18 + Math.random() * 30,
        delay: Math.random() * 6,
        duration: 5 + Math.random() * 6,
      })),
    [count]
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {balls.map((ball) => (
        <span
          key={ball.id}
          className="absolute top-full animate-floaty opacity-70 will-change-transform"
          style={{
            left: `${ball.left}%`,
            fontSize: `${ball.size}px`,
            animationDelay: `${ball.delay}s`,
            animationDuration: `${ball.duration}s`,
            bottom: `${Math.random() * 100}%`,
            top: "auto",
          }}
        >
          {ball.emoji}
        </span>
      ))}
    </div>
  );
}

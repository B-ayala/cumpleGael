import { useEffect, useState } from "react";

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isOver: boolean;
}

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

function computeTimeLeft(target: number): TimeLeft {
  const diff = target - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isOver: true };
  }
  return {
    days: Math.floor(diff / DAY),
    hours: Math.floor((diff % DAY) / HOUR),
    minutes: Math.floor((diff % HOUR) / MINUTE),
    seconds: Math.floor((diff % MINUTE) / SECOND),
    isOver: false,
  };
}

/** Cuenta regresiva hacia una fecha ISO. Tolera fechas inválidas devolviendo isOver. */
export function useCountdown(targetISO: string): TimeLeft {
  const target = new Date(targetISO).getTime();
  const isValid = !Number.isNaN(target);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    isValid ? computeTimeLeft(target) : { days: 0, hours: 0, minutes: 0, seconds: 0, isOver: true }
  );

  useEffect(() => {
    if (!isValid) return;
    const id = window.setInterval(() => setTimeLeft(computeTimeLeft(target)), SECOND);
    return () => window.clearInterval(id);
  }, [target, isValid]);

  return timeLeft;
}

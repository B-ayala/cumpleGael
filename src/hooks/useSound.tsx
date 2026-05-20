import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { soundEngine, type SoundName } from "../lib/sound";

interface SoundContextValue {
  enabled: boolean;
  toggle: () => void;
  play: (name: SoundName) => void;
}

const SoundContext = createContext<SoundContextValue | null>(null);

/** Provider global de sonido (un único punto de control de audio en toda la app). */
export function SoundProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(false);

  const toggle = useCallback(() => {
    setEnabled((prev) => {
      const next = !prev;
      soundEngine.setEnabled(next);
      if (next) soundEngine.play("whistle");
      return next;
    });
  }, []);

  const play = useCallback((name: SoundName) => {
    soundEngine.play(name);
  }, []);

  const value = useMemo(() => ({ enabled, toggle, play }), [enabled, toggle, play]);

  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>;
}

export function useSound(): SoundContextValue {
  const ctx = useContext(SoundContext);
  if (!ctx) throw new Error("useSound debe usarse dentro de <SoundProvider>");
  return ctx;
}

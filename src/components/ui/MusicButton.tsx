import { useCallback, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Disc3, Pause } from "lucide-react";
import { MEDIA } from "../../config/party";

/**
 * Botón llamativo para reproducir la música de Daft Punk.
 * El audio no puede autoreproducirse (política del navegador): arranca con el
 * click del usuario. Antes del primer play late con un anillo para llamar la
 * atención; si el archivo no existe, el botón no se muestra.
 */
export function MusicButton() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [unavailable, setUnavailable] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }
    void audio
      .play()
      .then(() => {
        setPlaying(true);
        setStarted(true);
      })
      .catch(() => setUnavailable(true));
  }, [playing]);

  return (
    <>
      <audio
        ref={audioRef}
        src={encodeURI(MEDIA.contactAudio)}
        loop
        preload="metadata"
        onError={() => setUnavailable(true)}
        onEnded={() => setPlaying(false)}
      />

      <AnimatePresence>
        {!unavailable && (
          <motion.button
            type="button"
            layout
            onClick={toggle}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            aria-pressed={playing}
            aria-label={playing ? "Pausar la música de Daft Punk" : "Reproducir la música de Daft Punk"}
            className="glass fixed left-4 top-4 z-50 flex items-center gap-2 rounded-full px-3 py-2 text-gold shadow-glow"
          >
            {!started && (
              <motion.span
                className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-gold/70"
                animate={{ scale: [1, 1.4], opacity: [0.7, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
                aria-hidden
              />
            )}

            <motion.span
              className="relative flex h-6 w-6 items-center justify-center"
              animate={playing ? { rotate: 360 } : { rotate: 0 }}
              transition={playing ? { duration: 3, repeat: Infinity, ease: "linear" } : { duration: 0.2 }}
              aria-hidden
            >
              {playing ? <Pause className="h-5 w-5" /> : <Disc3 className="h-5 w-5" />}
            </motion.span>

            {!started && (
              <motion.span
                layout
                className="whitespace-nowrap font-fun text-xs uppercase tracking-widest"
              >
                ¡Dale play! 🎧
              </motion.span>
            )}
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

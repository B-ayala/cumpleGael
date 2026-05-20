import { useEffect, useRef, useState } from "react";
import { MEDIA } from "../../config/party";
import { shouldLoadBackgroundVideo } from "../../lib/media";

interface VideoBackgroundProps {
  /** Se llama cuando el fondo está listo (video reproducible, error o fallback). */
  onReady: () => void;
}

/**
 * Fondo fijo a pantalla completa estilo Daft Punk - Contact.
 * Carga el video de forma diferida y muteada; cae a un fondo liviano si la
 * conexión no conviene, el usuario pidió menos movimiento o el archivo falla.
 */
export function VideoBackground({ onReady }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [useVideo] = useState(shouldLoadBackgroundVideo);
  const [failed, setFailed] = useState(false);
  const showVideo = useVideo && !failed;

  useEffect(() => {
    if (!useVideo) onReady();
  }, [useVideo, onReady]);

  // Pausa el video cuando la pestaña no está visible (ahorra CPU/batería).
  useEffect(() => {
    if (!showVideo) return undefined;
    const handleVisibility = () => {
      const video = videoRef.current;
      if (!video) return;
      if (document.hidden) video.pause();
      else void video.play().catch(() => undefined);
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, [showVideo]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-night-900" aria-hidden>
      {showVideo && (
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src={encodeURI(MEDIA.contactVideo)}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={onReady}
          onError={() => {
            setFailed(true);
            onReady();
          }}
        />
      )}

      {/* Vignette: mantiene el texto legible (contraste) sobre el video brillante. */}
      <div className="absolute inset-0 bg-gradient-to-b from-night-900/65 via-night-900/25 to-night-900/85" />
    </div>
  );
}

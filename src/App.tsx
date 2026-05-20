import { useCallback, useEffect, useState } from "react";
import { SoundProvider } from "./hooks/useSound";
import { AmbientBackground } from "./components/background/AmbientBackground";
import { VideoBackground } from "./components/background/VideoBackground";
import { IntroLoader } from "./components/background/IntroLoader";
import { SoundToggle } from "./components/ui/SoundToggle";
import { MusicButton } from "./components/ui/MusicButton";
import { Hero } from "./components/sections/Hero";
import { Countdown } from "./components/sections/Countdown";
import { MessiVsRonaldo } from "./components/sections/MessiVsRonaldo";
import { PenaltyGame } from "./components/sections/PenaltyGame";
import { Memories } from "./components/sections/Memories";
import { ConfirmAttendance } from "./components/sections/ConfirmAttendance";
import { EpicCelebration } from "./components/sections/EpicCelebration";
import { EpicClosing } from "./components/sections/EpicClosing";

/** Tope de espera del loader: nunca dejar al usuario atrapado si el video tarda. */
const INTRO_TIMEOUT_MS = 5000;

export default function App() {
  const [celebrating, setCelebrating] = useState(false);
  const [bgReady, setBgReady] = useState(false);

  const startCelebration = useCallback(() => setCelebrating(true), []);
  const stopCelebration = useCallback(() => setCelebrating(false), []);
  const handleBgReady = useCallback(() => setBgReady(true), []);

  useEffect(() => {
    const timer = window.setTimeout(handleBgReady, INTRO_TIMEOUT_MS);
    return () => window.clearTimeout(timer);
  }, [handleBgReady]);

  return (
    <SoundProvider>
      <IntroLoader visible={!bgReady} />
      <AmbientBackground />
      <VideoBackground onReady={handleBgReady} />
      <MusicButton />
      <SoundToggle />

      <main className="relative">
        <Hero onConfirm={startCelebration} />
        <Countdown />
        <MessiVsRonaldo />
        <PenaltyGame />
        <Memories />
        <ConfirmAttendance onConfirm={startCelebration} />
        <EpicClosing />
      </main>

      <EpicCelebration open={celebrating} onClose={stopCelebration} />
    </SoundProvider>
  );
}

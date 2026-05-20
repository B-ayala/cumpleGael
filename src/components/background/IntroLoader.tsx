import { AnimatePresence, motion } from "framer-motion";
import { RobotLoader } from "./RobotLoader";

interface IntroLoaderProps {
  /** Mientras es true se muestra el loader a pantalla completa. */
  visible: boolean;
}

/** Pantalla de carga inicial (overlay) que se desvanece cuando el fondo está listo. */
export function IntroLoader({ visible }: IntroLoaderProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro-loader"
          className="fixed inset-0 z-50 flex items-center justify-center bg-night-900"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,_rgba(255,162,40,0.18),_transparent_60%)]"
            aria-hidden
          />
          <RobotLoader />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

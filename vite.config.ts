import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Base "./" para que el build funcione abriendo dist/ desde cualquier ruta o hosting estático.
export default defineConfig({
  base: "./",
  plugins: [react()],
});

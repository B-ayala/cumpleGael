/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta global — Champions/FIFA night. Prohibido hardcodear hex en componentes.
        night: {
          900: "#05010f",
          800: "#0a0420",
          700: "#120833",
          600: "#1c0f4a",
        },
        gold: {
          DEFAULT: "#ffd23f",
          400: "#ffdb5c",
          600: "#f5a623",
        },
        electric: "#22d3ee",
        magenta: "#ff2e93",
        messi: {
          DEFAULT: "#6fc3ff",
          deep: "#1a73c7",
        },
        ronaldo: {
          DEFAULT: "#ff4d4d",
          deep: "#b8121b",
        },
        grass: "#1db954",
      },
      fontFamily: {
        display: ['"Anton"', "system-ui", "sans-serif"],
        fun: ['"Bungee"', "system-ui", "sans-serif"],
        body: ['"Outfit"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(255, 210, 63, 0.55), 0 0 60px rgba(255, 210, 63, 0.25)",
        "glow-cyan": "0 0 20px rgba(34, 211, 238, 0.55), 0 0 60px rgba(34, 211, 238, 0.25)",
        "glow-magenta": "0 0 24px rgba(255, 46, 147, 0.6), 0 0 70px rgba(255, 46, 147, 0.3)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-22px) rotate(8deg)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.06)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "loader-sweep": {
          "0%": { transform: "translateX(-150%)" },
          "100%": { transform: "translateX(250%)" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        "spin-slow": "spin-slow 24s linear infinite",
        "pulse-glow": "pulse-glow 2.4s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "gradient-pan": "gradient-pan 12s ease infinite",
        "loader-sweep": "loader-sweep 1.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

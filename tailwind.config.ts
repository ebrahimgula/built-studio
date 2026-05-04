import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF6F0",
        ink: "#1A1A1A",
        terracotta: {
          DEFAULT: "#C5573D",
          50: "#FBF1ED",
          100: "#F5DDD3",
          200: "#EBB9A6",
          300: "#E0957A",
          400: "#D2755A",
          500: "#C5573D",
          600: "#A24530",
          700: "#7C3525",
          800: "#56251A",
          900: "#30150F",
        },
        forest: {
          DEFAULT: "#2F5E3F",
          50: "#EAF1EC",
          100: "#D2DFD6",
          200: "#A6BFAD",
          300: "#7A9F84",
          400: "#4F7F5C",
          500: "#2F5E3F",
          600: "#264C33",
          700: "#1D3A26",
          800: "#13281A",
          900: "#0A150D",
        },
        sand: "#EFE7DA",
        muted: "#6B6660",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      animation: {
        "pulse-soft": "pulseSoft 2.4s ease-in-out infinite",
        "fade-up": "fadeUp 0.7s ease-out both",
      },
      keyframes: {
        pulseSoft: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(47, 94, 63, 0.45)" },
          "50%": { boxShadow: "0 0 0 14px rgba(47, 94, 63, 0)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

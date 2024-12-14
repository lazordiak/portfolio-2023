/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    /*fontSize: {
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
    },*/
    fontFamily: {
      serif: ["minion-3"],
    },
    extend: {
      colors: {
        moonstone: "#3AABC5",
        snow: "#FFFBFA",
        eerieblack: "#1D201F",
        ferngreen: "#568259",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        "fade-in": "fade-in 1.5s linear var(--fade-delay) forwards",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
      },
      pulseGlow: {
        "0%, 100%": {
          textShadow:
            "0 0 10px rgba(58, 168, 193, 0.6), 0 0 30px rgba(58, 168, 193, 0.4)",
        },
        "50%": {
          textShadow:
            "0 0 20px rgba(58, 168, 193, 0.8), 0 0 50px rgba(58, 168, 193, 0.6)",
        },
      },
    },
  },
  plugins: [],
};

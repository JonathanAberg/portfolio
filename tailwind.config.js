/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        meadow: {
          50: "#FBFDF6",
          100: "#F3F7E8",
          200: "#D7E8B5",
          300: "#B5CC7A",
          400: "#89AF54",
          500: "#6B9142",
          600: "#3B5C23",
          700: "#2A4219",
          800: "#13290E",
          900: "#051604",
          950: "#051604",
        },
        sage: {
          50: "#F8FAF5",
          100: "#F0F5E8",
          200: "#D4E3C7",
          300: "#B8D0A6",
          400: "#9CBD85",
          500: "#7FA664",
          600: "#5E7D47",
          700: "#4A6237",
          800: "#364725",
          900: "#232C16",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "scale-in": "scaleIn 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

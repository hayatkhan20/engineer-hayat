/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
  colors: {
    ink: {
      950: "#050814",
      900: "#070B1A",
      850: "#0B1024",
      800: "#0E1630",
      700: "#131E3F"
    },
    accent: {
      300: "#7DD3FC",
      400: "#38BDF8",
      500: "#0EA5E9",
      600: "#0284C7"
    }
  },

  backgroundImage: {
    "hero-gradient":
      "radial-gradient(circle at 20% 20%, rgba(14,165,233,0.15), transparent 35%), radial-gradient(circle at 80% 30%, rgba(56,189,248,0.12), transparent 40%), linear-gradient(180deg, #050814 0%, #070B1A 40%, #050814 100%)",

    "grid-pattern":
      "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)"
  },

  animation: {
    floatSlow: "floatSlow 8s ease-in-out infinite",
    pulseGlow: "pulseGlow 6s ease-in-out infinite"
  },

  keyframes: {
    floatSlow: {
      "0%,100%": { transform: "translateY(0px)" },
      "50%": { transform: "translateY(-18px)" }
    },
    pulseGlow: {
      "0%,100%": { opacity: 0.45 },
      "50%": { opacity: 0.8 }
    }
  }
}

  },
  plugins: []
};

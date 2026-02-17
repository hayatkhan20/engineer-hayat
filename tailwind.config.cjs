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
        },
        line: "rgba(255,255,255,0.08)"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.35)"
      },
      backgroundImage: {
        "grid-radial":
          "radial-gradient(circle at 10% 10%, rgba(14,165,233,0.18), transparent 45%), radial-gradient(circle at 90% 20%, rgba(56,189,248,0.12), transparent 40%)"
      }
    }
  },
  plugins: []
};

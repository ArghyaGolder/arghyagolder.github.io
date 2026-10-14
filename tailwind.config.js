/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        paper: "#FFFBF2",
        yellow: "#FFD93D",
        pink: "#FF6FB5",
        blue: "#5B7CFF",
        green: "#3DDC97",
        orange: "#FF8A3D",
      },
      fontFamily: {
        display: ['"Archivo Black"', "system-ui", "sans-serif"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      boxShadow: {
        "brutal-sm": "4px 4px 0 #111",
        brutal: "8px 8px 0 #111",
        "brutal-lg": "14px 14px 0 #111",
      },
      fontSize: {
        "display-xl": ["clamp(4rem, 9vw + 2rem, 9rem)", { lineHeight: ".88", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2rem, 4.5vw + .5rem, 3.75rem)", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.5rem, 2.5vw + .5rem, 2.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-sm": ["clamp(1.25rem, 1.5vw + .75rem, 1.6rem)", { lineHeight: "1.1" }],
      },
      keyframes: { marquee: { to: { transform: "translateX(-50%)" } } },
      animation: { marquee: "marquee 32s linear infinite" },
    },
  },
  plugins: [],
};

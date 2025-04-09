/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {},
      dropShadow: {
        glow: "0 0 6px #facc15, 0 0 15px #fcd34d",
      },
      animation: {},
      keyframes: {},
      transitionProperty: {
        outline: "outline",
      },
      fontSize: {},
      transitionDuration: {
        600: "600ms",
      },
      transitionTimingFunction: {
        ease: "ease",
      },
    },
    screens: {
      xsm: "375px",
      "3xl": "1920px",
      xlg: "1120px",
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {
      outline: ["hover"],
      transitionProperty: ["hover"],
    },
  },

  plugins: [
    require("@tailwindcss/forms"),
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar": {
          "-ms-overflow-style": "none", // IE and Edge
          "scrollbar-width": "none", // Firefox
          "&::-webkit-scrollbar": {
            display: "none", // Safari and Chrome
          },
        },
      };

      addUtilities(newUtilities, ["responsive"]);
    },
  ],
};

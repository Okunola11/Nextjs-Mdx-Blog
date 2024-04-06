/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    function ({ addUtilities }) {
      const newUtillities = {
        ".scrollbar-hidden::-webkit-scrollbar": {
          display: "none",
        },
        ".h-vh-minus-68": {
          height: "calc(100vh + 64px)",
        },
      };
      addUtilities(newUtillities, ["responsive", "hover"]);
    },
  ],
};

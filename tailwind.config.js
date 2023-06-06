/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      animation: {
        typing: "typing 2s steps(20), blink .7s infinite",
        safelist: ['animate-[fade-in_1s_ease-in-out]', 'animate-[fade-in-down_1s_ease-in-out]']
      },
      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "11ch" }
        },
        blink: {
          from: { "border-right-color": "transparent" },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        typing: "typing 2s steps(20), blink .7s infinite"
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
  plugins: [],
}
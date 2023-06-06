/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        typing: "typing 2s steps(20), blink .7s infinite",
        headShake: "headShake 2s infinite"
      },
      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "11ch" }
        },
        blink: {
          from: { "border-right-color": "transparent" },
        },
        headShake: {
          '0%': {
            transform: 'translateX(0)',
          },
          '6.5%': {
            transform: 'translateX(-6px) rotateY(-9deg)',
          },

          '18.5%': {
            transform: 'translateX(5px) rotateY(7deg)',
          },

          '31.5%': {
            transform: 'translateX(-3px) rotateY(-5deg)',
          },

          '43.5%': {
            transform: 'translateX(2px) rotateY(3deg)',
          },
          '50%': {
            transform: 'translateX(0)',
          },
        }
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}
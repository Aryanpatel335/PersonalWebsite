/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"IBM Plex Mono"', "monospace"],
      },
      colors: {
        gray: "#4e4e4e",
      },
    },
  },
  plugins: [],
};

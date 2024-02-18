/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"IBM Plex Mono"', "monospace"],
      },
      colors: {
        gray: "#94a3b8",
        green: "#22c55e",
        red: "#e74c3c",
      },
      backgroundImage: {
        "black-to-custom-gray": "linear-gradient(to bottom, #000000, #4e4e4e)",
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      spacing: {
        "-24": "-10rem",
      },
    },
  },
  plugins: [],
};

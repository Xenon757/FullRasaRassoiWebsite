/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        josefin: ["Josefin Slab", "serif"],
        caveat: ["Caveat", "cursive"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundPrimary: "#101518",
        backgroundSecondary: "#fff",
        primary: "#DE604B",
        textPrimary: "#fff",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};

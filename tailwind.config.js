/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      animation: {
        bounce: "bounce 1s ease forwards 5",
      },
    },
  },
  plugins: [require("daisyui")],
};

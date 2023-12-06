/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      minWidth: {
        '300': '300px',
      },
      maxWidth: {
        '300': '300px',
      },
    },
  },
  plugins: [require("daisyui")],
};

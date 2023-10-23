/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {backgroundImage: {
      view: "url('/public/img/gren.jpeg')",
    },},
  },
  plugins: [],
};

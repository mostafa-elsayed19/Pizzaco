/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-yellow": "var(--yellow-color)",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};

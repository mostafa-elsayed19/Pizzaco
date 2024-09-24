/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Poppins, sans-serif",
    },
    extend: {
      colors: {
        "background-color": "var(--background-color)",
        "main-color": "var(--main-color)",
        "accent-color": "var(--accent-color)",
        "text-color": "var(--text-color)",
        "secondary-color": "var(--secondary-color)",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};

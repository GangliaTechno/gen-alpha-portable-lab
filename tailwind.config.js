/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "2.5rem",
        xl: "3rem",
      },
      screens: {
        xl: "1400px",
        "2xl": "1600px",
      },
    },
    extend: {},
  },
  plugins: [],
}
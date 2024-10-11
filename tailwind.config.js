/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      colors: {
        bg: "#FCE4D8",
        primary: "#181C14",
        secondary: "#3C3D37",
        third: "#A5B68D",
        bgBar: "#864F6C",
        iconActive: "#FEFAE0",
        iconbase: "#F2EED7",
      },
    },
  },
  plugins: [],
}
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
        bg: "#190119",
        bgBar: "#864F6C",
        bgButton: "#51295B",
        bgBox: "#DEB5B1",

        primary: "#181C14",
        secondary: "#3C3D37",
        iconActive: "#FEFAE0",
        iconbase: "#F2EED7",
      },
    },
  },
  plugins: [],
}
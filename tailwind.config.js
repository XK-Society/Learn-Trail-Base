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
      boxShadow: {
        box: [
          '6px 6px rgba(134, 79, 108, 0.4)',
          // '10px 10px rgba(134, 79, 108, 0.3)',
          // '15px 15px rgba(134, 79, 108, 0.2)',
          // '20px 20px rgba(134, 79, 108, 0.1)',
          // '25px 25px rgba(134, 79, 108, 0.05)'
        ].join(', '),
        circle: [
          '5px 3px rgba(134, 79, 108, 0.4)',
          '10px 7px rgba(134, 79, 108, 0.3)',
          // '15px 15px rgba(134, 79, 108, 0.2)',
          // '20px 20px rgba(134, 79, 108, 0.1)',
          // '25px 25px rgba(134, 79, 108, 0.05)'
        ].join(', '),
      
      }
    },
  },
  plugins: [],
}
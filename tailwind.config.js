/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '769px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl' : '1380px'
    },
    extend: {
      keyframes:{
        'open-menu' : {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.5)' },
          '100%': { transform: 'scaleY(1)' },
        },
        "popup": {
          "0%": {
            opacity: 0,
            transform: "translate(-50%, -70%)"
          },
          "10%": {
            opacity: 1,
            transform: "translate(-50%, -50%)"
          },
          "90%": {
            opacity: 1,
            transform: "translate(-50%, -50%)"
          },
          "100%": {
            opacity: 0,
            transform: "translate(-50%, -70%)"
          }
        }
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
        'ping-short': 'ping 1s ease-in-out 1',
        "animate-popup": "popup 3s ease-in-out",
      },
      fontFamily: {
        montserrat: ['montserrat', 'sans'],
      },
    }
  },
  plugins: [],
}


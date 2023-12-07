/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes:{
        'open-menu' : {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.5)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      backgroundImage: {
        'header-Image' : "url(./src/assets/header/Union.png)"
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      },
      fontFamily: {
        montserrat: ['montserrat', 'sans'],
      },
    }
  },
  plugins: [],
}


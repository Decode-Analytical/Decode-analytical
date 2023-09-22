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
      '2xl' : '1380'
    },
    fontSize: {
      smR: "10px",
    },
    extend: {
      keyframes:{
        'open-menu' : {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      },
      gridTemplateColumns: {
        'video-grid' : 'repeat(2 , minmax(70%,30%))'
      }
    },
  },
  plugins: [],
}


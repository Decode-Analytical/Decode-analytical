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
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      },
      colors: {
       "gray": "rgb(150, 149, 149)",
       "grey": "#2f2f2f",
       "deepGrey": "#303030",
       "lightGrey": "rgb(241, 233, 233)",
       
   
      }
    },
  },
  plugins: [],
}


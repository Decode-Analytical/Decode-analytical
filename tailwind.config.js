/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "769px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1380px",
    },
    extend: {
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.5)" },
          "100%": { transform: "scaleY(1)" },
        },
        popup: {
          "0%": {
            opacity: 0,
            transform: "translate(-50%, -70%)",
          },
          "10%": {
            opacity: 1,
            transform: "translate(-50%, -50%)",
          },
          "90%": {
            opacity: 1,
            transform: "translate(-50%, -50%)",
          },
          "100%": {
            opacity: 0,
            transform: "translate(-50%, -70%)",
          },
        },
        sliders: {
          "0%": { margintop: "10em" },
          "4%": { margintop: "0em" },
          "31%": { margintop: "0em" },
          "35%": { margintop: "-10em" },
          "64%": { margintop: "-10em" },
          "68%": { margintop: "-20em" },
          "96%": { margintop: "-20em" },
          "100%": { margintop: "-30em" },
        },
      },
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
        "ping-short": "ping 1s ease-in-out 1",
        "animate-popup": "popup 3s ease-in-out",
        "slidesTop": "16s sliders infinite ease-in-out"
      },
      fontFamily: {
        montserrat: ["montserrat", "sans"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.5)" },
          "100%": { transform: "scaleY(1)" },
        },
        fade: {
          "0%": { backgroundColor: "rgba(239, 68, 68, 0.75)" },
          "100%": { backgroundColor: "transparent" },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      backgroundImage: {
        "header-Image": "url(./src/assets/header/Union.png)",
      },
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
        "fade-out": "fade 0.5s ease-out",
        "fade-in": "fade-in 0.5s ease-in",
      },
      fontFamily: {
        montserrat: ["montserrat", "sans"],
      },
      colors: {
        white1: "#fff",
        gray1: "#D9DBE5",
        gray2: "#B1B4CA",
        gray3: "#303030",
        gray6: "#1E1E1E",
        blue1: "#040E53",
        green1: "#067934",
        red1: "#BA1111",
        red2: "#E51B00",
      },
    },
  },
  plugins: [],
};

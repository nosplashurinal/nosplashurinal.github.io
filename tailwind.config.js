/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      arimo: "Arimo",
      merriweather: "Merriweather",
      lora: "Lora",
    },
    colors: {
      white: "#ffffff",
      black: "#434343",
      jade: "#00a79f",
      yellow: "#fed426",
    },
    extend: {
      boxShadow: {
        'box': '5px 5px #434343',
        'box-hover': '7px 7px #434343'
      },
      keyframes: {
        point: {
          "0%, 100%": {
            transform: "translateX(-10%)",
            opacity: 0.5,
            "animation-timing-function": "ease-in-out",
          },
          "50%": {
            transform: "translateX(0)",
            opacity: 1,
            "animation-timing-function": "ease-in-out",
          },
        },
      },
      animation: {
        point: "point 2s infinite",
      },
    },
  },
  plugins: [],
};

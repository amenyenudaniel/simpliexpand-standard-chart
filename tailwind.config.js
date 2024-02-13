/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        lightBlue: "#0473EA",
        lightGray: "#A8A9AA",
        darkGray: "#525355",
        deepGray: "#868788",
        black: "#061d33",
        green: "#38D200",
        light: "rgba(255, 255, 255, 0.70)",
        line: "rgba(255, 255, 255, 0.50)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "450px",
      sm: "650px",
      md: "900px",
      lg: "1200px",
      xl: "1666px",
    },
  },
  plugins: [],
};

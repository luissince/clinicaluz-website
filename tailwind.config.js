/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        guindaClaro: "#BF1B23",
        guindaOscuro: "#9b0d13" ,
        grisClaro: "#636363",       
      },
      fontFamily: {
        poppins: ["Roboto", "sans-serif"],
        primaSans: ["sans-serif"]
      },
      fontWeight: {
        boldCustomer: [400]
      }
    },
    screens: {
      "xs": "320px",
      "ss": "480px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px",
    },
  },
  plugins: []
}
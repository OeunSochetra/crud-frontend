/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0E89D3",
        secondary: "#0DAED1",
        backgroundColor: "#F5F7FB",
        primaryText: "#AAAAAA",
        secondaryText: "#0099FF",
      },
      fontFamily: {
        montserrat: ["Montserrat"],
        inter: ["inter"],
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(90deg, #0E89D3 0%, #0DAED1 100%)",
      },
    },
  },
  plugins: [],
};

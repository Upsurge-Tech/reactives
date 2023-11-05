/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
          extend: {
            colors: {
              primary: "#11112B",
              "light-blue": "#D9D9D9",
              "dark-blue": "#11112B",
              blue: "#92DEED",
            },
            fontFamily: {
              space: ["Space Grotesk", "sans-serif"],
        sans: ["Poppins", "sans-serif"],
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

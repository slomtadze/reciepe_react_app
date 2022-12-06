/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { max: "480px" },
      md: { max: "768px" },
      lg: { max: "976px" },
      xl: { max: "1440px" },
    },
    extend: {
      backgroundImage: (theme) => ({
        "herro-img": "url('/src/assets/herro-img.jpg')",
        "herro-img-rotate": "url('/src/assets/istockphoto.jpg')",
      }),
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};

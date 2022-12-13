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
        "italian-img": "url('/src/assets/italian-cuisine.jpg')",
        "hawai-img": "url('/src/assets/hawai-cuisine.jpg')",
        "japanese-img": "url('/src/assets/japanese-cuisine.jpg')",
        "mexican-img": "url('/src/assets/mexican-food.jpg')",
        "christmas-img": "url('/src/assets/christmas.jpg')",
      }),
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};

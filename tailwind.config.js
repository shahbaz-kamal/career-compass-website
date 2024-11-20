/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-text": "rgb(1, 13, 8)",
        "color-background": "rgb(247, 255, 251)",
        "color-primary": "rgb(28, 244, 137)",
        "color-primary-40": "rgba(28, 244, 137,0.4)",
        "color-secondary": "rgb(248, 117, 123)",
        "color-secondary-30": "rgba(248, 117, 123,.3)",
        "color-accent": "rgb(238, 245, 65)",
      },
    },
  },
  plugins: [require("daisyui")],
};

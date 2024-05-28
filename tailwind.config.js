/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        cart: "rgba(0, 0, 0, 0.24) 0px 0px 8px",
      },
    },
  },
  plugins: [],
};

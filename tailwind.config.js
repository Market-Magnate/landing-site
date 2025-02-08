/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"MALDINIBOLD"', 'sans-serif'],
        secondary: ['"Quicksand"', 'sans-serif'],
        tertiary: ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

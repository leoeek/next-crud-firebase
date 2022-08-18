/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    /^bg-/,
    /^to-/,
    /^from-/,
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [],
}

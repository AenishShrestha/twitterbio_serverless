/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    typography: (theme) => ({}),
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@headlessui/tailwindcss"),require('@tailwindcss/typography')],
};

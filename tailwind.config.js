/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          600: '#1E3A8A',
        },
        green: {
          600: '#10B981',
        },
        purple: {
          600: '#7C3AED',
        },
      },
    },
  },
  plugins: [],
};

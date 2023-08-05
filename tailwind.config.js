/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'backdrop-color': 'rgba(0, 0, 0, 0.8)',
      },
      boxShadow: {
        'custom-shadow': '0px 0px 4px 4px rgba(218, 202, 255, 1)',
      },
    },
  },
  plugins: [],
};

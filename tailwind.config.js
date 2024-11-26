/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: {
          500: '#FF7A00',
          600: '#E66E00',
          900: '#804000',
        },
      },
    },
  },
  plugins: [],
};
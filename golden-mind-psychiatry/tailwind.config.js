/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          primary: '#C59B27',
          dark: '#9E7B1C',
          light: '#F4EBD0',
          border: '#E6DEC8',
        },
        brand: {
          cream: '#FDFBF7',
          ivory: '#F5F0E6',
          charcoal: '#1E252B',
          slate: '#4A525A',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
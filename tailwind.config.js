/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fdf7f8',
          100: '#fbecef',
          200: '#f6d6de',
          300: '#eeb5c3',
          400: '#e28fa5',
          500: '#d16d89',
          600: '#b8536f',
          700: '#984259',
          800: '#7b374a',
          900: '#5c2a38',
          950: '#3a1822',
        },
        ink: { DEFAULT: '#3a1822', soft: '#7b374a', mute: '#9a7680' },
        champagne: { DEFAULT: '#C9A96E', light: '#EFE1C4', dark: '#9C7B3F' },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

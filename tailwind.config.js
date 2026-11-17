/** @type {import('tailwindcss').Config} */
// Paleta tirada dos cards de valores do Instagram @sweetnailsjp:
// fundo blush #f8ebe9, rosa dos títulos/pílulas #ce707c, círculos dos ícones #e3aaa9.
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fcf6f5',
          100: '#f8ebe9',
          200: '#f3dcda',
          300: '#e9bfbe',
          400: '#e3aaa9',
          500: '#ce707c',
          600: '#b65866',
          700: '#984652',
          800: '#7a3842',
          900: '#5a2a31',
        },
        ink: { DEFAULT: '#2c2224', soft: '#5b4d4f', mute: '#8a7a7b' },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      letterSpacing: { caps: '0.08em' },
    },
  },
  plugins: [],
}

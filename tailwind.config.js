/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', sm: '1.5rem', lg: '2rem' },
      screens: { '2xl': '1280px' },
    },
    extend: {
      colors: {
        navy: {
          50: '#F1F5FB',
          100: '#E1E9F5',
          200: '#C3D2EA',
          700: '#12305C',
          800: '#0E2547',
          900: '#0A1B36',
          950: '#06122A',
        },
        royal: {
          50: '#EEF4FF',
          100: '#DCE8FF',
          500: '#3B6FE0',
          600: '#2456D6',
          700: '#1B44B0',
        },
        gold: {
          50: '#FDF8EC',
          100: '#F9EDCB',
          400: '#E2B94F',
          500: '#C9A24B',
          600: '#A9822F',
        },
        ice: '#F4F7FB',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(10, 27, 54, 0.18)',
        lift: '0 24px 48px -20px rgba(10, 27, 54, 0.28)',
      },
      borderRadius: { xl2: '1.25rem' },
    },
  },
  plugins: [],
}

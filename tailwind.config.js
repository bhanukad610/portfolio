import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        accent: 'var(--color-accent)',
        'accent-hover': 'var(--color-accent-hover)',
        heading: 'var(--color-heading)',
      },
    },
  },
  plugins: [],
}


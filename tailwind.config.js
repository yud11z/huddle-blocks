/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    screens: {
      'mobile': {'max': '414px'},
      'desktop': '1024px',
    },
    extend: {
      colors: {
        primary: 'hsl(var(--color-primary) / <alpha-value>)',
        secondary: 'hsl(var(--color-secondary) / <alpha-value>)',
        accent1: 'hsl(var(--color-accent1) / <alpha-value>)',
        accent2: 'hsl(var(--color-accent2) / <alpha-value>)',
      },
      fontFamily: {
        poppins: ['Poppins'],
        opensans: ['Open Sans'],
      }
    },
    backgroundImage: {
      'bg-hero-mobile': "url('/images/bg-hero-mobile.svg')",
      'bg-hero-desktop': "url('/images/bg-hero-desktop.svg')",
    },
  },
  plugins: [],
}

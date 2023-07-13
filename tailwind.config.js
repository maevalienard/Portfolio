/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'neutral-dk': '#303030',
      'neutral-md': '#5E6964',
      'white': '#FFFFFF',
      'border': '#EBEDEC',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '976px',
    },
    dropShadow: {
      '3xl': '0 8px 8px rgba(122, 120, 182, 0.10)',
      '4xl': [
          '0 35px 35px rgba(122, 120, 182, 0.25)',
          '0 45px 65px rgba(122, 120, 182, 0.15)'
      ]
    }
  },
  plugins: [],
}


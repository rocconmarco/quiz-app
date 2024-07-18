/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9cd87e',
        primaryLight: '#a9eb4f',
        primaryDark: '#449821',
        secondary: '#3dbab1',
        secondaryLight: '#35e597',
        secondaryDark: '#3db2b8',
      },
      animation: {
        ruotaLentamente: 'spin 6s linear infinite'
      },
      boxShadow: {
        'inner': 'inset 0 10px 12px 0 rgb(0 0 0 / 0.05)'
      }
    },
  },
  plugins: [],
}

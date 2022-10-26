/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        black: '#272042',
        grey: '#8B8BA5',
        yellow: '#F7C531',
        pink: '#FBE0DC',
      },
      screens: {
        '2xl': '1320px',
      },
      backgroundImage: {
        'petik': "url('/img/tanda petik.png')",
      }
    },
  },
  plugins: [],
}

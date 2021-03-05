const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: colors.black,
      white: colors.white,
      gray: colors.blueGray,
      red: colors.red,
      yellow: colors.yellow,
      green: colors.green,
      teal: colors.teal,
      blue: colors.blue,
      cyan: colors.cyan,
      indigo: colors.indigo,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      rose: colors.rose
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

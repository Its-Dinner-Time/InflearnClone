/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(({ addComponents, theme }) => {
      addComponents({
        '.flex-center-all': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      });
    }),
  ],
};

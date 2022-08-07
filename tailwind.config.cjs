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
        '.flex-center-center': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },

        '.flex-center-between': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        },

        '.button': {
          border: '1px solid #dbdbdb',
          backgroundColor: '#fff',
          color: '#363636',
          cursor: 'pointer',

          padding: '.25em .5em',
          borderRadius: '.25em',
        },

        '.button.primary': {
          backgroundColor: '#ff7867',
          color: '#fff',
        },

        '.button.primary:hover': {
          backgroundColor: '#ff6451',
        },
      });
    }),
  ],
};

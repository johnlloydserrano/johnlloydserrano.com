/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  css: {
    postcss: './postcss.config.js', // Ensure this points to the correct postcss config file
  },
  theme: {
    extend: {
      colors: {
        text: '#190c0e',
        background: '#fdfbfb',
        primary: '#dc2e48',
        secondary: '#f88d42',
        accent: '#ff778b',
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        ':root': {
          '--color-text': theme('colors.text'),
          '--color-background': theme('colors.background'),
          '--color-primary': theme('colors.primary'),
          '--color-secondary': theme('colors.secondary'),
          '--color-accent': theme('colors.accent'),
        },
      });
    },
  ],
};

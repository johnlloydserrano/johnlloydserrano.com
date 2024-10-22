/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  css: {
    postcss: './postcss.config.js', // Ensure this points to the correct postcss config file
  },
  theme: {
    extend: {},
  },
  plugins: [],
}


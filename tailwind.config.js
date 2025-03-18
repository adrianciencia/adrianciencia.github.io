/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Use the 'class' strategy
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,svelte,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      // Customize colors, spacing, etc.
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Use the 'class' strategy
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
    './node_modules/astro/**/*.js',
  ],
  theme: {
    extend: {
      // Customize colors, spacing, etc.
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
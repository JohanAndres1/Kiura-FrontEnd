/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        textButton: '#53a3f2',
        button: '#e2f0ff',
        primary: '#4CC671',
        secondary: '#0594A4',
        tertiary: '#173B48'
      },
      fontFamily: {
        spartan: ['League Spartan', 'sans-serif']
      }
    }
  },
  plugins: []
};

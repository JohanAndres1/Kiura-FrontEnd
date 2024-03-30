/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        textButton: '#53a3f2',
        button: '#e2f0ff'
      }
    }
  },
  plugins: []
};

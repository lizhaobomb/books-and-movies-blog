/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf8f0',
          100: '#f8edd8',
          200: '#f0d9b0',
          300: '#e5c080',
          400: '#d9a050',
          500: '#8B4513',
          600: '#7a3c10',
          700: '#69330d',
          800: '#582a0b',
          900: '#472108',
        },
        cream: '#FFF8DC',
        dark: '#333333',
        light: '#F5F5F5',
      },
      fontFamily: {
        serif: ['Noto Serif SC', 'serif'],
        sans: ['Noto Sans SC', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
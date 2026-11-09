/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0A0A0A',
          dark: '#1A1A1A',
          gold: '#C5A059',
          goldHover: '#DFB668',
          red: '#8E1600',
          redHover: '#A61A00',
          white: '#F9FAFB',
          gray: '#9CA3AF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Playfair Display', 'serif'],
        display: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'hero-pattern':
          "linear-gradient(to bottom, rgba(10, 10, 10, 0.8), rgba(10, 10, 10, 0.95)), url('https://images.unsplash.com/photo-1603048297172-c92544798d5e?q=80&w=2070&auto=format&fit=crop')",
        texture: "url('https://www.transparenttextures.com/patterns/dark-matter.png')",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        PlayfairDisplay: ['Platypi', 'serif'],
        Rey: ['Rye', 'serif'],
        Outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        'primary': '#231f20',
        'secondary': '#f9f4da',
        'yellow': '#fcba28',
        'orange': '#ff7849',
        'red': '#e9203d',
        'green': '#0ba95b',
        'sky': '#12B5E5',
      },
    },
  },
  plugins: [],
}

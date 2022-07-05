/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    colors: {
      'gray-200': 'hsla(223, 37%, 91%, 1)',
      'gray-300': 'hsla(228, 37%, 89%, 1)',
      'gray-900': 'hsla(221, 39%, 11%, 1)',
    },
    extend: {
      keyframes: {
        heroBackground: {
          '0%': { backgroundPosition: '0%, 50%' },
          '50%': { backgroundPosition: '100%, 50%' },
          '100%': { backgroundPosition: '0%, 50%' },
        }
      }
    },
  },
  plugins: [],
}

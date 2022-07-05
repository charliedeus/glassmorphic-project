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
      'gray-50': '#fafafa',
      'gray-100': '#f3f4f6',
      'gray-200': '#e5e7eb',
      'gray-300': '#d1d5db',
      'gray-400': '#9ca3af',
      'gray-500': '#6b7280',
      'gray-600': '#4b5563',
      'gray-700': '#374151',
      'gray-800': '#1f2937',
      'gray-900': '#111827',
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

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        brand: {
          orange: '#FF8A65',
          green: '#2ECC71',
          purple: '#8B5CF6',
          dark: '#1E1F24',
          darkCard: '#2A2C34',
          light: '#F8F9FA',
          lightCard: '#FFFFFF',
        }
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      }
    },
  },
  plugins: [],
}

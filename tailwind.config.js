/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        agri: {
          50: '#f2fbf4',
          100: '#e1f7e6',
          200: '#c4eed1',
          300: '#95e0ab',
          400: '#5fc97e',
          500: '#34ae57',
          600: '#258f44',
          700: '#1e7137',
          800: '#1c5a2f',
          900: '#184a29',
          950: '#0a2914',
        },
        harvest: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        earth: {
          50: '#faf8f5',
          100: '#f4f0e8',
          200: '#e8e0d1',
          300: '#d7c7b0',
          400: '#c2aa8b',
          500: '#ad916f',
          600: '#957858',
          700: '#775d45',
          800: '#624d3b',
          900: '#524033',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'Noto Sans Tamil', 'system-ui', 'sans-serif'],
        tamil: ['Noto Sans Tamil', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(22, 101, 52, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'elevated': '0 12px 30px -4px rgba(22, 101, 52, 0.12), 0 4px 10px -2px rgba(0, 0, 0, 0.06)',
        'glow': '0 0 25px -3px rgba(34, 197, 94, 0.35)',
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '24px',
        xl: '44px',
      },
      colors: {
        gray: {
          50: '#FFFFFF',
          100: '#F6F6F5',
          200: '#BCC1CD',
          500: '#88889D',
          900: '#212525',
          950: '#212523',
        },
        orange: {
          50: '#FF7648'
        },
        green: {
          50: '#4DC591'
        }
      }
    },
  },
  plugins: [],
}


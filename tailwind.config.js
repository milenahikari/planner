/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppinsRegular: ['Poppins_400Regular', 'sans-serif'],
        poppinsMedium: ['Poppins_500Medium', 'sans-serif'],
        poppinsBold: ['Poppins_700Bold', 'sans-serif']
      },
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


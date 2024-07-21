const colors = require("./colors");

module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './src/**/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppinsRegular: ['poppinsRegular'],
        poppinsMedium: ['poppinsMedium'],
        poppinsBold: ['poppinsBold']
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '24px',
        xl: '44px',
      },
      colors,
    }
  },
  plugins: [],
};

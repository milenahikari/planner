const fontFamily = require("./theme/fontFamily");
const fontSizes = require("./theme/fontSizes");
const colors = require("./theme/colors");

module.exports = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily,
      fontSizes,
      colors
    },
  },
  plugins: [],
}


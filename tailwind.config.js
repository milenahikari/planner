const fontFamily = require("./fontFamily");
const fontSize = require("./fontSize");
const colors = require("./colors");

module.exports = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    fontFamily,
    fontSize,
    colors,
  },
  plugins: [],
};

var tailwindcss = require('tailwindcss')
var nested = require('postcss-nested')

module.exports = {
  plugins: [
    tailwindcss('./tailwind.config.js'),
    nested,
    require('autoprefixer'),
  ]
}
var nested = require('postcss-nested')
var atImport = require('postcss-import')
var autoprefixer = require('autoprefixer')
var tailwindcss = require('tailwindcss')

module.exports = {
  // ident: "postcss",
  plugins: [
    atImport(),
    tailwindcss('./tailwind.config.js'),
    nested(),
    autoprefixer(),
  ],
  sourceMap: true,
}
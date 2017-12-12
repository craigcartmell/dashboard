var nested = require('postcss-nested')
var  atImport = require('postcss-import')
var tailwindcss = require('tailwindcss')
var autoprefixer = require('autoprefixer')

module.exports = {
  // ident: "postcss",
  plugins: [
    autoprefixer,
    atImport(),
    nested,
    tailwindcss('./tailwind.config.js'),
  ],
  sourceMap: true,
}
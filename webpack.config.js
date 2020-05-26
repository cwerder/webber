const path = require('path');

module.exports = {
  entry: './public/one.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
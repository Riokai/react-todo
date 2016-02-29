var webpack = require('webpack')

module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loader: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel!eslint',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};

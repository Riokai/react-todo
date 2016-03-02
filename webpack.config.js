var webpack = require('webpack')
var path = require('path')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' }
      // {
      //   test: /\.jsx?$/,
      //   loader: 'eslint',
      //   exclude: /node_modules/
      // }
    ]
  },
  plugins: [
    new OpenBrowserPlugin({ url: 'http://localhost:8080/webpack-dev-server/' })
  ]
};

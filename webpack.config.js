const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill','./src/js/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    })
  ],
  devtool:'source-map',

  module: {
    rules: [
      {
          test: /\.js$/, //test for files that end with .js using regular exp
          exclude: /node_modules/, //ignore thousand of js files using regular exp
          use: {
              loader: 'babel-loader'
          }
      }
    ]
  }
};
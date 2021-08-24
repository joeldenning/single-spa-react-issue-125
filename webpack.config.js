const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const SystemJSPublicPathWebpackPlugin = require("systemjs-webpack-interop/SystemJSPublicPathWebpackPlugin");

module.exports = {
  entry: path.resolve(__dirname, 'src/main.jsx'),
  mode: 'development',
  output: {
    libraryTarget: 'system',
    filename: 'main.js',
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: path.resolve(__dirname, 'src/index.ejs')
    }),
    new SystemJSPublicPathWebpackPlugin()
  ]
}
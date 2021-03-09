const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const babelConfig = require('../babel.config');

const babelLoader = {
  loader: 'babel-loader',
  options: babelConfig
};

const tsLoaders = [
  babelLoader,
  {
    loader: 'ts-loader',
    options: {
      transpileOnly: true
    }
  }
];

module.exports = {
  entry: {
    main: '../src/main.tsx',
  },

  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].js'
  },

  mode: 'development',

  optimization: {
    minimize: false
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          babelLoader
        ]
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: tsLoaders
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['main'],
      template: '../src/index.html',
      inject: 'body'
    })
  ]
};
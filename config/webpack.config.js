const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const tsLoaders = [
  {
    loader: 'babel-loader'
  },
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
    filename: '[name]-[hash].js'
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
          {
            loader: 'babel-loader'
          }
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
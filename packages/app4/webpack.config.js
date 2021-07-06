const packageName = require('./package.json').name;

const HtmlWebpackPlugin = require('html-webpack-plugin');

const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
module.exports = {
  entry: { index: './src/index' },
  mode: 'development',
  devServer: {
    port: 3004,
    injectClient: false,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    historyApiFallback: true,
    liveReload: false,
  },
  output: {
    publicPath: 'http://localhost:3004/',
    library: 'react16-[name]',
    libraryTarget: 'umd',
    chunkLoadingGlobal: 'webpackJsonp_react16',
    globalObject: 'window',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

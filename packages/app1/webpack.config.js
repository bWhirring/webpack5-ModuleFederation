const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
module.exports = {
  entry: { index: './src/index' },
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3001,
  },
  output: {
    publicPath: 'http://localhost:3001/',
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
    new ModuleFederationPlugin({
      name: 'app1',
      library: { type: 'var', name: 'app1' },
      filename: 'remoteEntry.js',
      exposes: {
        './Test1': './src/Test1',
      },
      remotes: {
        app2: 'app2',
      },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: '^17.0.2' },
        'react-dom': { singleton: true, eager: true, requiredVersion: '^17.0.2' },
      },
    }),

    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

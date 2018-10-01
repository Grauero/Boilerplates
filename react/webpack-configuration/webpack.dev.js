const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: '../dist',
    hot: true,
    overlay: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});

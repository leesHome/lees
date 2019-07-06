const merge = require('webpack-merge');
const base = require('./webpack.config.js');
const webpack = require('webpack');

module.exports = merge(base, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: '../dist'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.mode': JSON.stringify('development')
    })
  ]
});